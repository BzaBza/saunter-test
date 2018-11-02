var mocPathData = [
  {
    pathTitle: 'Path title1',
    pathDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: true,
    lat: 59.95,
    lng: 30.33,
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title2',
    pathDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    lat: 59.95,
    lng: 30.33,
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title3',
    pathDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    lat: 59.95,
    lng: 30.33,
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title4',
    pathDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    lat: 59.95,
    lng: 30.33,
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title5',
    pathDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    lat: 59.95,
    lng: 30.33,
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title6',
    pathDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    lat: 59.95,
    lng: 30.33,
    id: '_' + Math.random().toString(36).substr(2, 9)
  }
];

export const fetchPathData = () => dispatch => {
  dispatch(
   {type: 'FETCH_PATH_DATA_SUCCESS', payload: mocPathData},
  );
};