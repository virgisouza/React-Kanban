import { combineReducers } from 'redux';
import cardList from './cardList.js';
import prioritiesList from './prioritiesList.js'

export default combineReducers({
  cardList,
  prioritiesList
});