const initialState = [];

export default function pathData(state = initialState, action) {
  if (action.type === 'FETCH_PATH_DATA_SUCCESS') {
    return action.payload;
  }
  if (action.type === 'ADD_NEW_PATH_DATA_SUCCESS') {
    return Object.assign([],state,
        state.unshift(action.payload),
       ...state,

    )
  }
  return state;
};