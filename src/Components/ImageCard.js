import React from 'react';

const ImageCard = ({image}) => {
    // tags are separated with comma and acting as string
    // we have to turn them into array
    const tags = image.tags.split(",");
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt={image.tags} className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-gray-600 text-xl mb-2">
                    Photo By {image.user}
                </div>
                <ul>
                    <li><strong>Views: </strong>{image.views}</li>
                    <li><strong>Downloads: </strong>{image.downloads}</li>
                    <li><strong>Likes: </strong>{image.likes}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {/* ekhane tag er shte image id dise eta wrong... tai amra tag er shate index o diye dibo */}
                {tags.map((tag, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                    #{tag}
                </span>)}
            </div>
        </div>
    );
};

export default ImageCard;