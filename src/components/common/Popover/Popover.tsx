import React from 'react';
import { PopoverProps } from 'antd';

import { Popover as AntPopover } from 'antd';

export const Popover: React.FC<PopoverProps> = ({ children, ...props }) => {
    return <AntPopover {...props}>{children}</AntPopover>;
};
