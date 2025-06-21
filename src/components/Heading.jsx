import React from "react";
function Heading() {
  return (
    <div className="bg-[#F5F9FC] min-h-screen">
      <h1 className=" text-xl font-bold ff-open sans text-center">
        Event einsenden
      </h1>
      <p className=" text-lg font-light ff-open sans text-[#737376] text-center mt-5">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren,
        <br /> no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero
        eos et accusam et <br />
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est <br /> Lorem ipsum dolor sit amet.
      </p>
      <form>
        <input
          type="Kategorie"
          name="Kategorie"
          className="border-1 border-[#D1E0E9] rounded-4xl px-4 py-2 w-[710px] items-center ml-70 mt-10 bg-white "
          placeholder="Kategorie"
        />
        <input
          type="Titel"
          name="Titel"
          className="border-1 border-[#D1E0E9] rounded-4xl px-4 py-2 items-center ml-70 mt-5 bg-white w-[350px] "
          placeholder="Titel"
        />
        <input
          type="Datum"
          name="Datum"
          className="border-1 border-[#D1E0E9] rounded-4xl px-4 py-2 items-center ml-full  mt-5 bg-white w-[350px] ml-5"
          placeholder="Datum"
        />
        <input
          type="Standort"
          name="Standort"
          className="border-1 border-[#D1E0E9] rounded-4xl px-4 py-2 items-center ml-70 mt-5 bg-white w-[350px] "
          placeholder="Standort"
        />
        <input
          type="Preis"
          name="Preis"
          className="border-1 border-[#D1E0E9] rounded-4xl px-4 py-2 items-center ml-full  mt-5 bg-white w-[350px] ml-5"
          placeholder="Preis"
        />
        <input
          type="Details zur Veranstaltung"
          name="Details zur Veranstaltung"
          className="border-1 border-[#D1E0E9] rounded-3xl px-4 py-2 items-center ml-full  mt-5 bg-white w-[730px] h-[100px] ml-70"
          placeholder="Details zur Veranstaltung"
        />
      </form>
      {/* <button className=" bg-[#0071BB] px-5 py-3 rounded-4xl w-[400px] text-white font-bold ff-open sans ml-100 mt-5 cursor-pointer">
        Event einsenden
      </button> */}

      <div className="flex justify-center items-center bg-[#F5F9FC] ">
        <button
          onClick={() => navigate("/submit-event")}
          className="bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold py-3 px-5 rounded-4xl text-lg shadow-lg hover:opacity-90 cursor-pointer mt-5"
        >
          Event einsenden
        </button>
      </div>
    </div>
  );
}

export default Heading;
