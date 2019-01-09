import React from 'react';

const ImageList = (props) => {
    const image = props.images.map((image) => {
        return <img key={ image.id } src={ image.urls.regular } />
    });

    return (
        <div>
            <h5>Retrieved { props.images.length } images</h5>
            {image}
        </div>
    );
}

export default ImageList;