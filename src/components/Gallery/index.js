import React, { useState, useRef } from 'react'
import ImageItem from './ImageItem';

const Gallery = () => {

    const [images] = useState([
        "https://picsum.photos/id/237/100/100",
        "https://picsum.photos/id/21/100/100",
        "https://picsum.photos/id/23/100/100",
        "https://picsum.photos/id/123/100/100",
        "https://picsum.photos/id/45/100/100",
        "https://picsum.photos/id/32/100/100"
    ])

    let photoRef = useRef();

    const setImageSource = (source) => {
        photoRef.current.style.width= "400px";
        photoRef.current.style.height= "400px";
        photoRef.current.style.objectFit= "cover";
        photoRef.current.src = source;
    }

    return (
        <>
            <img className='my-2 mx-5 img-fluid' id="photo" ref={photoRef} />
            <div className="d-flex flex-wrap w-50 m-5">
                {
                    images.map((source, index) => <ImageItem source={source} key={index} setImageSource={setImageSource} />)
                }
            </div>
        </>
    )

}

export default Gallery