import { useParams } from 'react-router-dom';
import GenreFilter from '../components/GenreFilter';
import AlphabetFilter from '../components/AlphabetFilter';
import React from 'react';

export default function SongsPage() {
  const { genre = 'All', letter = 'A' } = useParams();

  return (
    <div>
      <GenreFilter selectedGenre={genre} />
      <AlphabetFilter selectedLetter={letter} />
       <div className=' bg-black rounded-3xl w-full h-[300px] text-white text-6xl'>
      <h2>hit Me Hard and {genre}</h2>
      </div>
    </div>
  );
}