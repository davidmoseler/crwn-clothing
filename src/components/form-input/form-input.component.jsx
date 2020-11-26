import React from 'react';

import './form-input.styles.scss'

export const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}></input>
        {
            label ?
            <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}></label>
            : null
        }
    </div>

)