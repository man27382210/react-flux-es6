import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,
  ITEMS_ADD,
  ITEMS_REMOVE
} from '../constants/AppConstants';

export default {
  getInit() {
    
  },
  getItems() {
    WebAPI.getItems()
    .then((items) => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_SUCCESS,
        items: items
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_ERROR
      });
    });
  },
  addItem(){
    AppDispatcher.dispatch({
      actionType: ITEMS_ADD
    });
  },
  removeItem(item){
    AppDispatcher.dispatch({
      actionType: ITEMS_REMOVE,
      item: item
    });
  }

};
