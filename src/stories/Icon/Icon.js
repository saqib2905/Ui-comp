import { forwardRef } from 'react';

import { StyledIcon } from './Icon.styles';
import cx from 'classnames';
import { prefix } from '../../tools/settings';

const Icon = forwardRef(
  (
    {
      className: customClassName,
      icon,
      size = 16,
      color = 'currentColor',
      ...rest
    },
    ref
  ) => {
    const className = cx({
      [`${prefix}-icon`]: true,
      [customClassName]: !!customClassName,
    });

    let iconDisplay;

    iconDisplay = (
      <StyledIcon
        ref={ref}
        className={className}
        icon={icon}
        color={color}
        iconSize={size}
        {...rest}
      />
    );
    return iconDisplay;
  }
);

export default Icon;
