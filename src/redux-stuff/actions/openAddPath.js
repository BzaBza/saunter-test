export const addPath = (projectData) => dispatch => {
  dispatch(
   {type: 'ADD_PATH_SUCCESS', payload: projectData},
  );
};