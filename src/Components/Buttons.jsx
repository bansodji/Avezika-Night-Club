import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ButtonWithArrow = (props) => {
    return (
        <>
            <button className='f-btn-1 uppercase heading font-13 font-500 d-flex align-items-center justify-content-center'>
                <span className='mx-auto'>{props.name}</span> <i class="fas fa-chevron-right ms-auto"></i>
            </button>
        </>
    );
}

const ButtonWithArrowFilled = (props) => {
    return (
        <>
            <button className='f-btn-1-filled uppercase heading font-13 font-500 d-flex align-items-center justify-content-center'>
                <span className='mx-auto'>{props.name}</span> <i class="fas fa-chevron-right ms-auto"></i>
            </button>
        </>
    );
}

export { ButtonWithArrow, ButtonWithArrowFilled };