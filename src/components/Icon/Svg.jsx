import React from 'react';
import Types from 'prop-types';

const Svg = ({ children, className, viewBox, size }) => {
  const { minX, minY, width, height } = viewBox;

  return (
    <svg
      viewBox={`${minX} ${minY} ${width} ${height}`}
      width={size.width}
      height={size.height}
      className={className}>
      {children}
    </svg>
  );
};

const sizeType = Types.shape({
  width: Types.number,
  height: Types.number,
});

const viewBoxType = Types.shape({
  minX: Types.number,
  minY: Types.number,
  width: Types.number,
  height: Types.number,
});

Svg.propTypes = {
  children: Types.oneOfType([Types.element, Types.array]).isRequired,
  className: Types.string,
  viewBox: viewBoxType,
  size: sizeType,
};

Svg.defaultProps = {
  viewBox: { minX: 0, minY: 0, width: 32, height: 32 },
  className: '',
  size: { height: 32, width: 32 },
};

export { Svg, viewBoxType };
