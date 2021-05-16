import React, { useState } from 'react';

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        searchText(text)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex items-center">
                    <input onChange={e => setText(e.target.value)} type="text" placeholder="search your image" className="rounded-l-full py-3 px-4 w-full border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"/>
                    <button type="submit" className="px-6 py-2.5 bg-green-500 text-white font-semibold text-lg rounded-r-full border-t border-b border-l">search</button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;