// import Link from "next/link";
import { getMovieTrailer, Trailer } from "@/lib/api";
import Link from "next/link";

export const TrailerMovie = async ({ id }: { id: number }) => {
  const { results: trailers } = await getMovieTrailer(String(id));
  // console.log("trailers:", trailers);

  const display = trailers.filter((trailer) => {
    if (trailer.name.trim() === "Official Trailer") {
      console.log(trailer.key);

      return trailer.key;
    }
  });
  console.log(display, "url");

  return (
    <div>
      {display.map((movie) => (
        <div className="relative" key={movie.id}>
          <iframe
            className="md:w-[760px] md:h-[428px] w-[390px] h-[246px] "
            width=""
            height=""
            src={`https://www.youtube.com/embed/${movie.key}?si=F9Di2-bsCG9nC-o5`}
            // src="https://www.youtube.com/embed/dSS4yqd0x6o?si=ZbVuVUuMvUlXBKsM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <img
            className="h-[428px] w-[760px]"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          /> */}
        </div>
      ))}
    </div>
  );
};
