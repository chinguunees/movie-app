import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getTopratedMovies } from "@/lib/api";
import { Moviecard } from "../components/Moviecard";

export const Toprated = async () => {
  const { results: movies } = await getTopratedMovies();
  return (
    <div className="flex justify-center mt-[52px]">
      <div className="flex flex-col px-5 2xl:px-20 lg:px-15 md:px-10 max-w-[1537px] ">
        <div className="flex justify-between mt-8 items-center md:px-15">
          <h1 className="text-[24px] font-bold">Top Rated</h1>
        </div>
        <div className="flex flex-col px-5 2xl:px-20 lg:px-15 md:px-10 items-center">
          <div className="grid grid-cols-2 md:hidden gap-5">
            {movies.map((movie) => (
              <Link href={`/${movie.id}`} key={movie.id}>
                <Moviecard
                  img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average}
                  name={movie.title}
                />
              </Link>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 md:gap-10 lg:justify-between 2xl:gap-5 lg:grid-cols-4 2xl:grid-cols-5 mt-0 2xl:max-w-[1437px] ">
            {movies.map((movie) => (
              <Link href={`/${movie.id}`} key={movie.id}>
                <Moviecard
                  img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average}
                  name={movie.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Toprated;
