import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const image = props.images.map((image) => { //deconstructed the images object
        return <ImageCard key={image.id} image={image} />
    });

    return (
        <div className="image-list">
            <h5>Retrieved { props.images.length } images</h5>
            {image}
        </div>
    );
}

export default ImageList;