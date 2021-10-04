import React from 'react';

const Gallery = (props) => {
    return (
        <div className='container'>
            {props.galleryImg.map(img => (
                <div className='slide'
                     style={{'background-image': `url(${img.url})`}}
                >
                    <h3>Ferrari</h3>
                </div>
                )
            )}

        </div>
    );
};

export default Gallery;