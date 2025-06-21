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
        <h2 className="text-5xl ml-20 font-bold ff-Montserrat ">
          HIT ME HARD AND {genre}
        </h2>
        <div className="flex items-center gap-4">
          <img
            src="../images/bille.png"
            alt="Billie Eilish"
            className="w-50 h-50 rounded-full object-cover  ml-20 mt-30"
          />
          <p className="text-3xl font-bold ff-Poppins ml-5">
            Billie Eilish {letter}
          </p>
          <p className="text-sm text-[#CECECE] mt-30 ff-Montserrat ml-[-195px] mb-10">
            Released May 17, 2024
          </p>
        </div>
        <img
          src="../images/artist.png"
          alt="Album Cover"
          className="w-60 h-60  rounded-lg ml-230 mt-[-340px]"
        />
      </div>
    </div>
  );
}
