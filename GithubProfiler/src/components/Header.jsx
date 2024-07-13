import React, { useState } from 'react';
import SlightFlip from './magicui/flip-text';
import ShimmerButton from './magicui/shimmer-button';
import GithubGif from '../assets/Github.gif';
import { NeonGradientCard } from './magicui/neon-gradient-card';

const Header = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState(null); // Initialize data state as null

  const fetchUserData = (e) => {
    e.preventDefault()
    if (input.trim() !== '') {
      fetch(`https://api.github.com/users/${input}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setData(null); // Clear data on error
        });
    }
    setInput(''); // Clear input after fetching
  }

  return (
    <div className='text-orange-500 '>
      <div className='font-semibold'>
        <SlightFlip className="text-4xl font-mono tracking-[-0.1em] text-white dark:text-white md:text-5xl md:leading-[5rem]" word="Github Profiler"/>
      </div>      
      <div className='flex items-center justify-center mt-3'>        
        <input 
          placeholder='Search Github Username' 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className='bg-gray-800 p-2 rounded-lg  text-white'
        />        
        <ShimmerButton type='submit' onClick={fetchUserData} className='ml-2 py-2'>Search</ShimmerButton>        
        <img src={GithubGif} alt="GitHub Animation" className="w-40 h-40 ml-2" />      
      </div>

      {data && (
        <div className='flex justify-center mt-3'> {/* Center the card */}
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <div className='bg-gray-800 p-2 rounded-lg text-white'>
              <img src={data.avatar_url} alt="Github Avatar" className="w-40 h-40 mx-auto mb-3 rounded-full" /> {/* Center the image */}
              <div className='font-semibold'>Username: {data.login}</div>          
              <div className='font-semibold'>Bio: {data.bio}</div>
              <div className='font-semibold'>Followers: {data.followers}</div>
              <div className='font-semibold'>Following: {data.following}</div>
              <div className='font-semibold'>Public Repos: {data.public_repos}</div>            
              <a href={data.html_url} target="_blank" rel="noopener noreferrer" className='font-semibold'>Github Profile: {data.html_url}</a>
            </div>
          </NeonGradientCard>
        </div>
      )}
    </div>
  );
}

export default Header;