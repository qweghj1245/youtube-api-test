import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  PAGE_CHANGE,
} from './video.const';
import { setPageTokens, setHashTable } from './video.utils';

const INITAIL_STATE = {
  videoList: [],
  searchText: '',
  currentPage: 1,
  pageTokens: [],
  videoHashTable: {},
  getVideoError: null,
}

const videoReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        videoList: action.payload.items,
        searchText: action.payload.search,
        pageTokens: setPageTokens(
          state.pageTokens,
          action.payload.nextPageToken,
          action.payload.currentPage
        ),
        currentPage: action.payload.currentPage,
        videoHashTable: setHashTable(action.payload, state.videoHashTable, action.payload.isSearch),
      }
    case GET_VIDEO_FAILURE:
      return {
        ...state,
        getVideoError: action.payload,
      }
    case PAGE_CHANGE:
      return {
        ...state,
        videoList: state.videoHashTable[action.payload.token],
      }
    default:
      return state;
  }
};

export default videoReducer;