import React from 'react';
import PropTypes from 'prop-types';
import localization from '../../сonstants/localization';

export default function Pictures({ setImg }) {
  const saveImg = e => {
    setImg(e.target.files[0]);
  };
  return (
    <>
      <section className="form-picture">
        <h3>{localization.ADD_PICTURE_FOR_POSTER}</h3>
        <label htmlFor="addPoster">
          <input
            id="addPoster"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={saveImg}
          />
        </label>
      </section>
    </>
  );
}

Pictures.propTypes = {
  setImg: PropTypes.func.isRequired,
};
