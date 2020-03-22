import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  GET_VIDEO_START,
} from './video.const';
import {
  getVideoSuccess,
  getVideoFailure,
} from './video.action';

function* getVideo(payload) {
  try {
    const { payload: { search = '', pageToken = '', currentPage = 1, isSearch = false } } = payload;
    let api =
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&key=${process.env.REACT_APP_YOUTUBE_KEY}&q=${search}`;
    if (pageToken) {
      api = api + '&pageToken=' + pageToken;
    }
    const response = yield call(() => fetch(api).then(data => data.json()));
    yield put(getVideoSuccess({ ...response, search, currentPage, isSearch }));
  } catch (error) {
    yield put(getVideoFailure(error));
  }
}

function* getVideoStart() {
  yield takeLatest(GET_VIDEO_START, getVideo);
}

export default function* videoSagas() {
  yield all([
    call(getVideoStart),
  ]);
}