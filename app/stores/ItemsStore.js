import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  ITEMS_UPDATED,
  ITEMS_GET_SUCCESS,
  ITEMS_ADD,
  ITEMS_REMOVE,
  ITEMS_ADD_COUNT
} from '../constants/AppConstants';

class ItemsStore extends BaseStore {

  emitChange() {
    this.emit(ITEMS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(ITEMS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ITEMS_UPDATED, callback);
  }
}

let store = new ItemsStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ITEMS_GET_SUCCESS:
      store.setAll(action.items);
      break;
    case ITEMS_ADD:
      store.set();
      break;
    case ITEMS_REMOVE:
      var key = action.key;
      store.remove(key);
      break;
    case ITEMS_ADD_COUNT:
      var key = action.key;
      store.addCount(key);
      break;
    default:
  }
});

export default store;
