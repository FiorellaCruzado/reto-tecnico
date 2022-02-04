import React, { useState } from 'react';

const Card = (props) => {
    return (
        <div className='grouptext' style={{gridGap: props.gridgap}}>
            <div className='grouptext__title'>
                <div className='grouptext__title__header'>
                    <span>{props.header}</span>
                </div>
                <div className='grouptext__title__body'>
                    <span className='grouptext__title__body__text'>{props.title}</span>
                    <span className='grouptext__title__body__text grouptext__title__body__text--red'>{props.titlered}</span>
                </div>
            </div>
            <div className='grouptext__description'>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

export default Card;
