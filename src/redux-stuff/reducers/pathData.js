const initialState = [];

export default function pathData(state = initialState, action) {
  if (action.type === 'FETCH_PATH_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
};