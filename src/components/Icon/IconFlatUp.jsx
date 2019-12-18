import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconFlatUp = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.flatUp' })}</title>
      <path d="M18.286 21.714c0 0.625-0.518 1.143-1.143 1.143h-16c-0.625 0-1.143-0.518-1.143-1.143 0-0.304 0.125-0.589 0.339-0.804l8-8c0.214-0.214 0.5-0.339 0.804-0.339s0.589 0.125 0.804 0.339l8 8c0.214 0.214 0.339 0.5 0.339 0.804z"></path>
    </Svg>
  );
};

IconFlatUp.defaultProps = {
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

IconFlatUp.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconFlatUp };
