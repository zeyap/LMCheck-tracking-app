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

    var updateTracker = (type,title,dataArray) =>{
        let target = _data[trackerDict[''+type+'#'+(title).toLowerCase()]];
        for(let i=0;i<dataArray.length;i++){
            if(target.records[i]===undefined){
                target.records[i] = new Record(new Date(),i,dataArray[i]);
            }else{
                target.records[i].detail = dataArray[i];
            }
        }
        save();
    }

    // var updateNumTracker = (type, title, unit, dataArray) =>{
    //     let target = _data[trackerDict[''+type+'#'(title).toLowerCase()+unit]]
    // }

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
        deleteTracker
    }

})();

export default Store;