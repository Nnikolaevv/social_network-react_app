import React from 'react';

const style = {
    container: {
        width: '100%',
        display: 'flex',
        padding: '0 20px',
    },

    slide: {
        height: '80vh',
        borderRadius: '20px',
        margin: '10px',
        cursor: 'pointer',
        color: 'white',
        flex: '1',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        transition: 'all 500ms ease-in-out'
    },

    slideH3: {
        position: 'absolute',
        fontSize: '24px',
        bottom: '20px',
        left: '20px',
        margin: 0,
        opacity: 0,
    },

    slideActive: {
        flex: 10,
    },

    slideActiveH3: {
        opacity: 1,
        transition: 'opacity 0.3s ease-in 0.4s',
    }
}

const Gallery = (props) => {
    //
    // const classes =

    // const slidesPlugin = (activeSlide = 0) => {
    //     const slides = document.querySelectorAll('.slide')
    //
    //     slides[activeSlide].classList.add('active')
    //
    //     slides.forEach(slide => {
    //         slide.addEventListener('click', () => {
    //             clearActiveClasses()
    //             slide.classList.add('active')
    //         })
    //     })
    //
    //     const clearActiveClasses = () => {
    //         slides.forEach(slide => {
    //             slide.classList.remove('active')
    //         })
    //     }
    // }
    //
    // slidesPlugin()


    const addClassName = (e) => {

    }


    return (
        <div className={style.container}>
            {props.galleryImg.map(img => (
                    <div onClick={addClassName}
                        style={{'background-image': `url(${img.url})`}}
                    >
                        <h3 style={style.slideH3}>{img.name}</h3>
                    </div>
                )
            )}
        </div>
    );
};

export default Gallery;