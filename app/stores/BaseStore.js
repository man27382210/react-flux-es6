import { EventEmitter } from 'events';
import Immutable from 'immutable';

export default class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = new Immutable.Map();
    this.index = 1;
  }

  setAll(items) {
    this.data = this.data.merge(items);
    this.index = Object.keys(this.data.toObject()).length;
    this.emitChange();
  }

  getAll() {
    var array = [];
    for(var i=0; i<Object.keys(this.data.toObject()).length;i++){
      var key = Object.keys(this.data.toObject())[i];
      var obj = {"key": key, "item": this.data.toObject()[key]};
      array.push(obj);
    }
    return array ;
  }

  set() {
      this.index = this.index+1;
      this.data = this.data.set(this.index.toString(), "Item "+ this.index);
      this.emitChange();
  }

  remove(obj) {
    this.data = this.data.remove(obj["key"]);
    this.emitChange();
  }
}
