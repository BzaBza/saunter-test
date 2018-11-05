var mocPathData = [
  {
    pathTitle: 'Path title1',
    shortDescription: 'Lorem ipsum dolor sit amet, consect',
    fullDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: true,
    coordinates:[
      {lat: 42.737102, lng: -73.990318},
      {lat: 41.749825, lng: -73.987963},
      {lat: 40.752946, lng: -73.987384},
      {lat: 40.755823, lng: -73.986397},
    ],
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title2',
    shortDescription: 'Lorem ipsum dolor sit amet, consect',
    fullDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    coordinates:[
      {lat: 40.237102, lng: -73.990318},
      {lat: 40.749825, lng: -73.987963},
      {lat: 45.752946, lng: -73.987384},
      {lat: 40.755823, lng: -73.986397},
    ],
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title3',
    shortDescription: 'Lorem ipsum dolor sit amet, consect',
    fullDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    coordinates:[
      {lat: 40.717102, lng: -72.990318},
      {lat: 40.749825, lng: -73.987963},
      {lat: 40.752946, lng: -73.987384},
      {lat: 41.755823, lng: -73.986397},
    ],
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title4',
    shortDescription: 'Lorem ipsum dolor sit amet, consect',
    fullDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    coordinates:[
      {lat: 40.777102, lng: -73.990318},
      {lat: 40.749825, lng: -73.987963},
      {lat: 40.752946, lng: -73.987384},
      {lat: 46.755823, lng: -73.986397},
    ],
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title5',
    shortDescription: 'Lorem ipsum dolor sit amet, consect',
    fullDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    coordinates:[
      {lat: 41.707102, lng: -73.990318},
      {lat: 40.749825, lng: -73.987963},
      {lat: 40.752946, lng: -73.987384},
      {lat: 40.755823, lng: -73.986397},
    ],
    id: '_' + Math.random().toString(36).substr(2, 9)
  },{
    pathTitle: 'Path title6',
    shortDescription: 'Lorem ipsum dolor sit amet, consect',
    fullDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa cum doloribus eius et\n' +
    '               explicabo hic ipsa iure, labore nemo, nostrum odio placeat quae quas qui quisquam totam unde\n' +
    '               voluptatibus.',
    pathLength: '13 KM',
    isFavorite: false,
    coordinates:[
      {lat: 40.737102, lng: -73.990318},
      {lat: 40.749825, lng: -73.987963},
      {lat: 40.752946, lng: -73.987384},
      {lat: 40.735823, lng: -73.986397},
    ],
    id: '_' + Math.random().toString(36).substr(2, 9)
  }
];

export const fetchPathData = () => dispatch => {
  dispatch(
   {type: 'FETCH_PATH_DATA_SUCCESS', payload: mocPathData},
  );
};