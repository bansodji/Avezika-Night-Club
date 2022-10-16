import { PropaneSharp } from '@mui/icons-material';
import React from 'react';

const HeadingNdesc = (props) => {
    return (
        <div className='fff d-flex flex-column align-items-center'>
            <i class="fas fa-glass-cheers fs-4 f-color-2"></i>
            <h1 className='heading font-800 my-3 title'>{props.name}</h1>
            <p className='lh-sm text-center'>{props.desc1} <br/> {props.desc2}</p>
        </div>
    );
}

export { HeadingNdesc };