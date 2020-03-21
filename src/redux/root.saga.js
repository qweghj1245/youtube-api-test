import { all, call } from 'redux-saga/effects';
import videoSaga from './video/video.saga';

export default function* rootSaga() {
  yield all([
    call(videoSaga),
  ]);
}
