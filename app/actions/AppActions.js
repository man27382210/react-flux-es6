import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,
  ITEMS_ADD,
  ITEMS_REMOVE,
  ITEMS_ADD_COUNT
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
  removeItem(key){
    AppDispatcher.dispatch({
      actionType: ITEMS_REMOVE,
      key: key
    });
  },
  addCount(key){
    AppDispatcher.dispatch({
      actionType: ITEMS_ADD_COUNT,
      key: key
    });
  }

};
