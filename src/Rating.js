import React from 'react';

const Rating = (props) => {
    return (
            <div className='rating'>
                <i className={`"fal fa-star ${props.rating > 0 && "star"}`}></i>
                <i className={`"fal fa-star ${props.rating > 1 && "star"}`}></i>
                <i className={`"fal fa-star ${props.rating > 2 && 'star'}`}></i>
                <i className={`"fal fa-star ${props.rating > 3 && 'star'}`}></i>
                <i className={`"fal fa-star ${props.rating > 4 && 'star'}`}></i>
                <i className={`"fal fa-star ${props.rating > 5 && 'star'}`}></i>
                <i className={`"fal fa-star ${props.rating > 6 && 'star'}`}></i>
            </div>
    );
};

export default Rating;