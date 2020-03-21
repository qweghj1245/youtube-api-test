import {
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  PAGE_CHANGE,
} from './video.const';

const INITAIL_STATE = {
  videoList: [],
  searchText: '',
  currentPage: 1,
  getVideoError: null,
}

const videoReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        videoList: action.payload.items,
        searchText: action.payload.search,
      }
    case GET_VIDEO_FAILURE:
      return {
        ...state,
        getVideoError: action.payload,
      }
    case PAGE_CHANGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    default:
      return state;
  }
};

export default videoReducer;