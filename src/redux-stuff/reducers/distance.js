const initialState = '';

export default function distance(state = initialState, action) {
  if (action.type === 'GET_DISTANCE_SUCCESS') {
    return action.payload;
  }
  return state;
};