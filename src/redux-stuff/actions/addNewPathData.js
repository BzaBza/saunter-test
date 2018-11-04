export const addNewPathData = (pathData) => dispatch => {
  dispatch(
   {type: 'ADD_NEW_PATH_DATA_SUCCESS', payload: pathData},
  );
};