import { getPriorities } from '../lib/request';

export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';

export const loadPriorities = () => {

  return function (dispatch){
    return getPriorities().then(priorities => {
      console.log('action priorities', priorities);
      dispatch({
        type: LOAD_PRIORITIES,
        priorities: priorities
      })
    })
  }
}