import {
  NAVBAR_TOGGLE_DROPDOWN_MENU
} from './types';

// Toggle Dorpdown Menu
export const toggleDorpdownMenu = isOpen => async dispatch => {
  dispatch({
    type: NAVBAR_TOGGLE_DROPDOWN_MENU,
    payload: isOpen
  });
};