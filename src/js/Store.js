import Tracker from "./Tracker";
import Record from './Record';

const Store = (function(){
    var trackerDict={};
    var _data =  [];

    var addTracker = item => {
        _data.push(item);
        trackerDict[''+item.type+'#'+item.title]=_data.length-1;
    };

    var getTrackers = ()=>_data.map((tracker)=>({
        title:tracker.title, 
        type:tracker.type}));

    var getTracker = (type,title) => _data[trackerDict[''+type+'#'+title]];

    var updateTracker = (type,title,dataArray) =>{
        let target = _data[trackerDict[''+type+'#'+title]];
        for(let i=0;i<dataArray.length;i++){
            
            if(target.records[i]===undefined){
                target.records[i] = new Record(new Date(),i,dataArray[i]);
            }else{
                target.records[i].detail = dataArray[i];
            }
            
        }
    }

    //test data
    let testTracker = new Tracker("Groceries","todo");
    testTracker.add(new Record(new Date(),"Buy lettus"));
    addTracker(testTracker);

    return {
        addTracker,
        getTrackers, 
        getTracker,
        updateTracker
    }

})();

export default Store;