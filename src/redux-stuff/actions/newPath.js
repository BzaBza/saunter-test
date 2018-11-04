export const getNewPath = (directions) => dispatch => {
  dispatch(
   {type: 'GET_NEW_PATH_DATA_SUCCESS', payload: directions},
  );
};