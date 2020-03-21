import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Search from './components/Search/Search';
import Video from './components/Video/Video';
import { getVideoStart, pageChange } from './redux/video/video.action';
import { selectVideoList } from './redux/video/video.selector';
function App() {
  const dispatch = useDispatch();
  const videoList = useSelector(selectVideoList);
  const currentPage = useSelector(state => state.video.currentPage);

  /* 更換分頁 */
  const changeVideoList = (page) => {
    window.scrollTo(0, 0);
    dispatch(pageChange(page));
  }
  /* 篩選列表 */
  const filterVideoList = useMemo(() => {
    let max = 10;
    return videoList.filter((item, idx) => {
      return idx < max * currentPage && idx >= 10 * (currentPage - 1);
    });
  }, [currentPage, videoList]);

  useEffect(() => {
    dispatch(getVideoStart({ search: '' }));
  }, [dispatch]);

  return (
    <div className="App">
      <Search />
      <div className="video-grid">
        {
          videoList && videoList.length ? filterVideoList.map(video => <Video key={video.id.videoId} info={video} />) : null
        }
      </div>
      <div className="pages">
        {
          [1, 2, 3].map(page => <div onClick={() => changeVideoList(page)}>{page}</div>)
        }
      </div>
    </div>
  );
}

export default App;
