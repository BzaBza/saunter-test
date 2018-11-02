import {combineReducers} from 'redux';
import pathData from './pathData'
import currentPathData from './currentPath'

export default combineReducers({
  pathData,
  currentPathData
});