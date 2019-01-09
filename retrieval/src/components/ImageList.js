import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const image = props.images.map((image) => { //deconstructed the images object
        return <ImageCard key={image.id} image={image} />
    });

    return (
        <div>
            <h5>Retrieved { props.images.length } images</h5>
            <div className="image-list">
                {image}
            </div>
        </div>
    );
}

export default ImageList;