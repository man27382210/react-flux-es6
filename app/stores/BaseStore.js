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
    return this.data;
  }

  set() {
      this.index = this.index+1;
      this.data = this.data.set(this.index.toString(), {label: "Item "+ this.index, count: 1});
      this.emitChange();
  }

  remove(key) {
    this.data = this.data.remove(key);
    this.emitChange();
  }

  addCount(key){
    var originValue = this.data.getIn([key, "count"]);
    this.data = this.data.updateIn([key, "count"], v => v +1);
    this.emitChange();
  }
}
