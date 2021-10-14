import React from 'react';

const Square = (props) => {
  const { selected, suggest, piecePath, className } = props;

  let classes = [];
  if (selected) classes.push('selected');
  if (suggest) classes.push('suggest');
  if (className) classes.push(className);

  return (
    <div
      {...props}
      className={`square ${classes.join(' ')}`}
    ></div>
  );
};

export default Square;
