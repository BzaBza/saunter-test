export const removeCurrentPath = (currentPath) => dispatch => {
  dispatch(
   {type: 'REMOVE_CURRENT_PATH_SUCCESS', payload: currentPath},
  );
};