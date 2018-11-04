const initialState = [];

export default function newPathData(state = initialState, action) {
  if (action.type === 'GET_NEW_PATH_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
};