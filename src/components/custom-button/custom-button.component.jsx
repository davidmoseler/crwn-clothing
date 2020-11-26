import React from 'react';

import './custom-buttom.styles.scss';

export const CustomButtom = ({ children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)