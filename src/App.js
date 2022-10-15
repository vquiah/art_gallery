
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=30466314-593c987a4ee9d0c2aadb0816a&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto border- border-teal-500 py-10 px-10 bg-gray-600">
      <h1 className='text-4xl text-center text-teal-300'>Welcome to VKYI Gallary</h1>
      <h3 className='text-1xl text-center'>Search Up Any Image from Our Gallery Below</h3>
      <SearchBar searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid gap-4 md:grid-cols-4">
        {images.map(image => (
          <Cards key={image.id} image={image} />
        ))}
      </div>}
      <footer className=' bg-black text-teal-400 text-center justify-start mt-6'>
      <ul className="className='text-1xl flex text-center justify-center items-center gap-8 py-5 ">
           
           <li >
               <a href="https://twitter.com/victoryquiah" target="_blank">
                   <i class="fab fa-twitter"></i>
               </a>
           </li>
           <li >
               <a href="https://github.com/vquiah" target="_blank">
                   <i class="fab fa-github"></i>
               </a>
           </li>
           <li >
               <a href="https://www.linkedin.com/in/vquiah/" target="_blank">
                   <i class="fab fa-linkedin"></i>
               </a>
           </li>
       </ul>
      <a href="https://victoryquiah.netlify.app/" target="_blank" className='text-1xl text-center ' ><p>made by VYKI</p></a>
      </footer>
    </div>
  );
}

export default App;