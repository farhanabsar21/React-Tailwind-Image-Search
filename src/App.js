import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './Components/ImageCard';
import ImageSearch from './Components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=21640252-3a9c7ea3ec5ad15154b208b40&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(imageData => {
          setImages(imageData.hits);
          setIsLoading(false)
        })
      .catch(err => console.log(err))
  }, [term])
  console.log(images)
  return (
    <div className="container mx-auto px-4">
      <ImageSearch searchText={text => setTerm(text)}></ImageSearch>
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-gray-800 text-center mx-auto mt-32">No Image Found</h1>}
      {isLoading ? <h1 className="text-6xl text-gray-800 text-center mx-auto mt-32">Loading...</h1> : <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map(image => <ImageCard image={image} key={image.id}></ImageCard>)}
      </div>}
    </div>
  );
}

export default App;
