import { combineReducers } from 'redux';
import cardList from './cardList.js';
import prioritiesList from './prioritiesList.js'
import usersList from './usersList.js';
import statusList from './statusList.js';

export default combineReducers({
  cardList,
  prioritiesList,
  usersList,
  statusList
});