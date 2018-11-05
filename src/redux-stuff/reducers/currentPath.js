const initialState = {
  pathTitle: 'Path title1',
  pathDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
  '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
  '               voluptatibus.',
  pathLength: '13 KM',
  isFavorite: true,
  coordinates:[
    {lat: 40.737102, lng: -73.990318},
    {lat: 40.749825, lng: -73.987963},
    {lat: 40.752946, lng: -73.987384},
    {lat: 40.755823, lng: -73.986397},
  ],
  id: '_' + Math.random().toString(36).substr(2, 9)
};

export default function currentPathData(state = initialState, action) {
  if (action.type === 'GET_CURRENT_PATH_DATA_SUCCESS') {
    return action.payload;
  }
  if (action.type === 'IS_FAVORITE_SUCCESS') {
    return Object.assign({},state,
     state.isFavorite = !state.isFavorite,
    )
  }
  return state;
};