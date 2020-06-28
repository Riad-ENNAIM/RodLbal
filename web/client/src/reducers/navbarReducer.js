import {
  NAVBAR_TOGGLE_DROPDOWN_MENU
} from '../actions/types';

const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_TOGGLE_DROPDOWN_MENU:
      return {
        ...state,
        isOpen: action.payload
      };
    default:
      return state;
  }
};
