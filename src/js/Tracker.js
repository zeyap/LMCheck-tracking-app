var Tracker=function(title, type, unit){
    this.title = title||"Anonymous Tracker";
    switch(type){
        case "numeric":
        this.type = type;
        this.unit = unit;
        break;
        case "time":
        this.type = type;
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