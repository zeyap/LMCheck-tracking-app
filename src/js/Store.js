import Tracker from "./Tracker";
import Record from './Record';

const Store = (function(){
    var _data =  [];
    let testTracker = new Tracker("Groceries","todo");
    testTracker.add(new Record(new Date(),"Buy lettus"));
    _data.push(testTracker);

    var addTracker = item => _data.push(item);

    var getTrackers = ()=>_data.map((tracker)=>({
        title:tracker.title, 
        type:tracker.type}));

    var getTracker = title => _data.find(d=>d.title === title);
    
    return {
        addTracker,
        getTrackers, 
        getTracker
    }

})();

export default Store;