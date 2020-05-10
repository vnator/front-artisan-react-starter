import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconFlatLeft = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.flatLeft' })}</title>
      <path d="M11.429 8v16c0 0.625-0.518 1.143-1.143 1.143-0.304 0-0.589-0.125-0.804-0.339l-8-8c-0.214-0.214-0.339-0.5-0.339-0.804s0.125-0.589 0.339-0.804l8-8c0.214-0.214 0.5-0.339 0.804-0.339 0.625 0 1.143 0.518 1.143 1.143z"></path>
    </Svg>
  );
};

IconFlatLeft.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 13,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconFlatLeft.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconFlatLeft };
