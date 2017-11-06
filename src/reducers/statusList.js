import { LOAD_STATUS } from '../actions/status';

const initialState = [];

const statusList = (state = initialState, action) => {
  switch(action.type){
    case LOAD_STATUS:
      return [...action.statuses];
    default:
      return state;
  }
}

export default statusList;