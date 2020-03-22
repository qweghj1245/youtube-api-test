import React, { useState } from 'react';
import './Search.scss';
import { useDispatch } from 'react-redux';
import SearchIcon from '../../assets/img/Icon-search.svg';
import { getVideoStart } from '../../redux/video/video.action';

export default function Search() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const searchVideo = (e) => {
    if (e.key === 'Enter') {
      dispatch(getVideoStart({ search: searchText, isSearch: true }));
    }
  };

  return (
    <div className="search">
      <div className="input-box">
        <input type="text" placeholder='搜尋影片' className='search-input' onChange={e => setSearchText(e.target.value)} onKeyPress={searchVideo} />
        <img src={SearchIcon} alt="search-icon" className='search-icon' />
      </div>
    </div>
  );
}
