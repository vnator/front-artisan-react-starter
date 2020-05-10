import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconFlatDown = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.flatDown' })}</title>
      <path d="M18.286 12.571c0 0.304-0.125 0.589-0.339 0.804l-8 8c-0.214 0.214-0.5 0.339-0.804 0.339s-0.589-0.125-0.804-0.339l-8-8c-0.214-0.214-0.339-0.5-0.339-0.804 0-0.625 0.518-1.143 1.143-1.143h16c0.625 0 1.143 0.518 1.143 1.143z"></path>
    </Svg>
  );
};

IconFlatDown.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 18,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconFlatDown.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconFlatDown };
