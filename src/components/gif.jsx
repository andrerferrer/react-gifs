import React from 'react';

const Gif = (props) => {
  // const id = props.id
  const { id } = props;
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return (
    <img src={src} alt="" className="gif" />
  );
};

export default Gif;
