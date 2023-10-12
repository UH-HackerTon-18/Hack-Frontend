import React from 'react';

const CloseIcon = ({ width = 24, height = 24, ...rest }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path d='M18 6L6 18M6 6L18 18' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default CloseIcon;
