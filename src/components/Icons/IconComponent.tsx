import {
  CaretRight
} from 'assets/icons';
import React, { JSX } from 'react';
import {SvgProps} from 'react-native-svg';

import {IconProps, IconType} from './Icon.d';

export const Icon = ({name, color, size}: IconProps) => {
  const svgFillIconProps: SvgProps = {
    fill: color || '#0000000',
    height: size || '24px',
    width: size || '24px',
  };

  const iconName: Record<IconType, JSX.Element> = {
    chevronRight: <CaretRight {...svgFillIconProps} />,
  };

  return iconName[name];
};
