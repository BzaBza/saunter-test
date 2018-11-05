import {combineReducers} from 'redux';
import pathData from './pathData';
import currentPathData from './currentPath';
import newPath from './newPath';
import distance from './distance';

export default combineReducers({
  pathData,
  currentPathData,
  newPath,
  distance
});