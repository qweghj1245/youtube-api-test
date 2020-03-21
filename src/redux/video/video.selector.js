import { createSelector } from 'reselect';

const selectVideo = state => state.video;

export const selectVideoList = createSelector(
  [selectVideo],
  video => video.videoList,
);