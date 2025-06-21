import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function GenreFilter({ selectedGenre }) {
  const genres = ['All', 'Pop', 'Rock'];
  const navigate = useNavigate();

  return (
    <div className="flex space-x-2">
      {genres.map((g) => (
        <button
          key={g}
          className={`px-4 py-2 border rounded ${selectedGenre === g ? 'bg-black text-white rounded-2xl' : 'bg-white cursor-pointer'}`}
          onClick={() => navigate(`/${g}/A`)}
        >
          {g}
        </button>
      ))}
      <select onChange={(e) => navigate(`/${e.target.value}/A`)}>
        <option value="More">More</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <opttion value="Music">Music</opttion>
      </select>
    </div>
  );
}
