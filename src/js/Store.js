import Tracker from "./Tracker";
import Record from './Record';

const Store = (function(){
    var trackerDict={};
    var _data =  [];
    if(localStorage.getItem('data')){
        _data = JSON.parse(localStorage.getItem('data'));
        trackerDict = JSON.parse(localStorage.getItem('dict'));
    }

    var addTracker = item => {
        _data.push(item);
        trackerDict[''+item.type+'#'+(item.title).toLowerCase()]=_data.length-1;
        sessionStorage.setItem('data',JSON.stringify(_data));
        sessionStorage.setItem('dict',JSON.stringify(trackerDict));
    };

    var getTrackers = ()=>_data.map((tracker)=>({
        title:tracker.title, 
        type:tracker.type}));

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
        localStorage.setItem('data',JSON.stringify(_data));
        localStorage.setItem('dict',JSON.stringify(trackerDict));
    }

    //test data
    if(getTracker("todo","Groceries")===undefined){
        let testTracker = new Tracker("Groceries","todo");
        testTracker.add(new Record(new Date(),"Buy lettus"));
        addTracker(testTracker);
    }

    return {
        addTracker,
        getTrackers, 
        getTracker,
        updateTracker
    }

})();

export default Store;