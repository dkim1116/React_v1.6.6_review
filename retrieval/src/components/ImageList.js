import React from 'react';

const ImageList = (props) => {
    const image = props.images.map(({ description, id, urls}) => { //deconstructed the images object
        return <img alt={description} key={id} src={urls.regular} />
    });

    return (
        <div>
            <h5>Retrieved { props.images.length } images</h5>
            {image}
        </div>
    );
}

export default ImageList;