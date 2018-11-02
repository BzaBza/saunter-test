export const getCurrentPath = (pathData) => dispatch => {
  dispatch(
   {type: 'GET_CURRENT_PATH_DATA_SUCCESS', payload: pathData},
  );
};