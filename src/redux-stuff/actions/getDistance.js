export const getDistance = (distance) => dispatch => {
  dispatch(
   {type: 'GET_DISTANCE_SUCCESS', payload: distance},
  );
};