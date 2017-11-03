import { LOAD_PRIORITIES} from '../actions/priorities';

const initialState = [];

const prioritiesList = (state = initialState, action) => {
  switch(action.type){
    case LOAD_PRIORITIES:
      return [...action.priorities];
    default:
      return state;
  }
}

export default prioritiesList;