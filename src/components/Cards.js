import React from 'react'

const Cards =  ({ image }) => {
    const tags = image.tags.split(',');
  
    return (
      <div className="max-w-sm rounded-b-3xl rounded-t-3xl overflow-hidden shadow-lg bg-black">
        <img src={image.webformatURL} alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-blue-300 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul className='text-blue-200'>
            <li >
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-3">
            #{tag}
          </span>
          ))}
        </div>
      </div>
    )
  }
  

export default Cards
