import Tracker from "./Tracker";
import Record from './Record';

const Store = (function(){
    var trackerDict={};
    var _data =  [];
    if(localStorage.getItem('data')){
        _data = JSON.parse(localStorage.getItem('data'));
        trackerDict = JSON.parse(localStorage.getItem('dict'));
    }

    var save = ()=>{
        localStorage.setItem('data',JSON.stringify(_data));
        localStorage.setItem('dict',JSON.stringify(trackerDict));
    }

    var addTracker = item => {
        _data.push(item);
        trackerDict[''+item.type+'#'+(item.title).toLowerCase()]=_data.length-1;
        save();
    };

    var getTrackers = ()=>_data.map((tracker)=>({
        title:tracker.title, 
        type:tracker.type}));
    
    var getNumericTracker = ()=>_data.map((tracker)=>({
        title:tracker.title,
        type:tracker.type,
        unit:tracker.unit}));;    

    var getTracker = (type,title) => _data[trackerDict[''+type+'#'+title.toLowerCase()]];

    var updateTracker = (type,title,updateField,dataArray) =>{
        // console.log(updateField==='record')
        let target = _data[trackerDict[''+type+'#'+(title).toLowerCase()]];
        for(let i=0;i<dataArray.length;i++){
            if(updateField==='detail'){
                target.records[i].detail = dataArray[i];
            }else if(updateField==='record'){
                target.records[i] = dataArray[i];
            }
        }
        save();
    }

    var setName = (type,originalTitle,newTitle)=>{
        let targetid = trackerDict[''+type+'#'+(originalTitle).toLowerCase()];
        let target = _data[targetid];
        target.title = newTitle;
        trackerDict[''+type+'#'+(newTitle).toLowerCase()] = targetid;
        delete trackerDict[''+type+'#'+(originalTitle).toLowerCase()];
    }

    var updateNumTracker = (type, title, dataArray) =>{
        let target = _data[trackerDict[''+type+'#'+(title).toLowerCase()]];
        for(let i=0; i<dataArray.length; i++){
            target.records.push(dataArray[i]);
        }
        save();
    }

    var deleteTracker = (type,title)=>{
        let id = trackerDict[''+type+'#'+(title).toLowerCase()];
        _data.splice(id,1);
        delete trackerDict[''+type+'#'+(title).toLowerCase()];
        for(let i=id;i<_data.length;i++){
            trackerDict[''+_data[i].type+'#'+(_data[i].title).toLowerCase()] = i;
        }

        save();
    }

    //test data
    // if(getTracker("todo","Groceries")===undefined){
    //     let testTracker = new Tracker("Groceries","todo");
    //     testTracker.add(new Record(new Date(),"Buy lettus"));
    //     addTracker(testTracker);
    // }

    // localStorage.clear();

    return {
        addTracker,
        getTrackers, 
        getTracker,
        updateTracker,
        deleteTracker,
        updateNumTracker,
        setName
    }

})();

export default Store;