import { compose, ComponentWithAs } from '@fluentui/react-bindings';

import { commonPropTypes, ShorthandConfig } from '../../utils';
import Box, { BoxProps, BoxStylesProps } from '../Box/Box';

interface ToolbarMenuItemIconOwnProps {}
export interface ToolbarMenuItemIconProps extends ToolbarMenuItemIconOwnProps, BoxProps {}

export type ToolbarMenuItemIconStylesProps = { hasContent: boolean };
export const toolbarMenuItemIconClassName = 'ui-toolbar__menuitem__active-icon';

/**
 * TODO
 */
const ToolbarMenuItemIcon = compose<
  'span',
  ToolbarMenuItemIconOwnProps,
  ToolbarMenuItemIconStylesProps,
  BoxProps,
  BoxStylesProps
>(Box, {
  className: toolbarMenuItemIconClassName,
  displayName: 'ToolbarMenuItemIcon',

  mapPropsToStylesProps: props => ({
    hasContent: (props as any).content /* TODO: compose should include parentProps */,
  }),
  overrideStyles: true,
}) as ComponentWithAs<'span', ToolbarMenuItemIconProps> & {
  shorthandConfig: ShorthandConfig<ToolbarMenuItemIconProps>;
};

ToolbarMenuItemIcon.defaultProps = {
  as: 'span',
};
ToolbarMenuItemIcon.propTypes = commonPropTypes.createCommon();
ToolbarMenuItemIcon.shorthandConfig = {
  mappedProp: 'content',
};

export default ToolbarMenuItemIcon;
