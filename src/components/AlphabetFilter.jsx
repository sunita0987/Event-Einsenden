import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

export default function AlphabetFilter({ selectedLetter }) {
  const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '#'];
  const { genre = 'All' } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap space-x-2 mt-4">
      {letters.map((l) => (
        <button
          key={l}
          className={`px-2 ${selectedLetter === l ? 'text-black font-bold ' : 'text-gray-500'}`}
          onClick={() => navigate(`/${genre}/${l}`)}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
