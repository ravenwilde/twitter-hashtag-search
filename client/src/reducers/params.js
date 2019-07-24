import { UPDATE_HASHTAG, UPDATE_PARAMS } from '../actions';

export const initialState = {
	params: {
		hashtag: 'area51',
		count: 10,
		result_type: 'mixed',
	}
}

function params(state = initialState, action) {
	switch(action.type) {
    case UPDATE_HASHTAG: 
    	return {
    		params: {
    		...state.params,
    		hashtag: action.hashtag
    		}
    	}
  	case UPDATE_PARAMS: 
    	return {
    		params: {
    			...state.params,
	    		hashtag: action.hashtag,
	    		count: action.count,
	    		result_type: action.result_type
    		}
    	}
    default: 
      return state;
    }
}
export default params;