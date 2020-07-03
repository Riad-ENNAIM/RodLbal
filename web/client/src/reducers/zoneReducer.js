import {
  GET_ZONES,
  ADD_ZONE,
  ZONE_ERROR,
  ZONE_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  zones: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ZONES:
      return {
        ...state,
        zones: action.payload,
        loading: false
      };

    case ADD_ZONE:
      return {
        ...state,
        zones: [...state.zones, action.payload]
      };

    case ZONE_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case ZONE_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
