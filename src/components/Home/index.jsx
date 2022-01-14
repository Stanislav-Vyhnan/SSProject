import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import Posters from './Posters/Posters';
import Genre from './Genre/Genre';
import createGenres from './createGenres';
import * as actions from '../store/actions';

export default function index() {
  const posters = useSelector(state => state.posters);
  const [genreFilm, setGenre] = useState('all');
  const dispatch = useDispatch();
  useEffect(() => {
    const films =
      genreFilm === 'all'
        ? posters
        : posters.slice('').filter(el => el.genre === genreFilm);
    dispatch(actions.showGenreFilm(films));
  }, [genreFilm, dispatch, posters]);

  const uniequGenres = createGenres(posters);

  return (
    <>
      <div className="wrapper-posters">
        <Genre genres={uniequGenres} setGenre={setGenre} />
        <Posters genre={genreFilm} />
      </div>
    </>
  );
}
