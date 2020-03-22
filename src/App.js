import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Search from './components/Search/Search';
import Video from './components/Video/Video';
import { getVideoStart, pageChange } from './redux/video/video.action';
import { selectVideoList } from './redux/video/video.selector';
function App() {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState([1, 2]);
  const videoList = useSelector(selectVideoList);
  const pageTokens = useSelector(state => state.video.pageTokens);
  const searchText = useSelector(state => state.video.searchText);

  /* 更換分頁 */
  const changeVideoList = (page) => {
    window.scrollTo(0, 0);
    if (!pageTokens[page - 1]) {
      dispatch(getVideoStart({
        search: searchText || '',
        pageToken: pageTokens[page - 2],
        currentPage: page
      }));
    } else {
      dispatch(pageChange({ token: pageTokens[page - 1] }));
    }
    if (pagination.length === page) { 
      setPagination(state => [...state, page++]);       
    }
  }

  useEffect(() => {
    dispatch(getVideoStart({ search: '' }));
  }, [dispatch]);

  return (
    <div className="App">
      <Search />
      <div className="video-grid">
        {
          videoList && videoList.length ? videoList.map(video => <Video key={video.id.videoId} info={video} />) : null
        }
      </div>
      <div className="pages">
        {
          pagination.map(page => <div onClick={() => changeVideoList(page)}>{page}</div>)
        }
        <span className="spread">...</span>
      </div>
    </div>
  );
}

export default App;
