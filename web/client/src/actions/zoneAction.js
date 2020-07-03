import axios from 'axios';
import {
  GET_ZONES,
  ADD_ZONE,
  ZONE_ERROR,
  ZONE_LOADING
} from './types';

// Get Zone
export const getZones = () => async dispatch => {
  try {
    dispatch({ type: ZONE_LOADING });
    
    const res = await axios.get('/api/admin/zones');

    dispatch({
      type: GET_ZONES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ZONE_ERROR,
      payload: err.response.msg
    });
  }
};

// Add Zone
export const addZone = newZone => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/admin/zones', newZone, config);
    dispatch({
      type: ADD_ZONE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ZONE_ERROR,
      payload: err.response.msg
    });
  }
};
