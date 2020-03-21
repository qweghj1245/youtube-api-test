import { combineReducers } from 'redux';
import videoReducer from './video/video.reducer';

const rootReducer = combineReducers({
  video: videoReducer,
});

export default rootReducer;
