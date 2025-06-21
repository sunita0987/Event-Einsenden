import { useParams } from "react-router-dom";
import GenreFilter from "../components/GenreFilter";
import AlphabetFilter from "../components/AlphabetFilter";
import React from "react";

export default function SongsPage() {
  const { genre = "All", letter = "A" } = useParams();

  return (
    <div>
      <GenreFilter selectedGenre={genre} />
      <AlphabetFilter selectedLetter={letter} />
      <div className=" bg-black rounded-3xl w-full h-[300px] text-white text-6xl">
        <h2>hit Me Hard and {genre}</h2>
        <div className="flex items-center gap-4">
          <img
            src="../images/bille.png"
            alt="Billie Eilish"
            className="w-40 h-40 rounded-full object-cover  ml-20 mt-30"
          />
          <p>Billie Eilish {letter}</p>
          <p className="text-sm text-[#CECECE] mt-30">Released May 17, 2024</p>
        </div>
        <img
          src="../images/artist.png"
          alt="Album Cover"
          className="w-32 h-32  rounded-lg "
        />
      </div>
    </div>
  );
}
