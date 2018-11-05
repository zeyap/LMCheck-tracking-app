var Tracker=function(title, type, unit){
    this.title = title||"Anonymous Tracker";
    switch(type){
        case "numeric":
        this.type = "numeric";
        this.unit = unit;
        break;
        case "timer":
        this.type = "timer";
        break;
        default:
        this.type = "todo";
        break;
    }
    this.records = [];
}

Tracker.prototype.add = function(newRecord){
    this.records.push(newRecord);
}

export default Tracker;