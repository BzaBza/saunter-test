const initialState = {};

export default function currentPathData(state = initialState, action) {
  if (action.type === 'GET_CURRENT_PATH_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
};