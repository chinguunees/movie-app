import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
import { getNowPlayingMovies } from "@/lib/api";
import { getMovieDetails, MovieDetails } from "@/lib/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Movie, MoviesResponse } from "@/lib/types";
import Link from "next/link";
type MovieDetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

export const Nowplaying = async () => {
  const { results: movies } = await getNowPlayingMovies();
  const firstFiveMovies = movies.slice(0, 4);

  return (
    <Carousel>
      <CarouselContent>
        {firstFiveMovies.map((movie) => {
          return (
            <CarouselItem key={movie.id}>
              <NowplayingMobile movie={movie} />
              <NowplayingDesktop movie={movie} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute top-1/4 right-2/9 md:top-1/2 md:right-2/9 ">
        <CarouselNext variant="destructive" />
      </div>
      <div className="absolute top-1/4 left-2/8 md:top-1/2 md:left-2/9">
        <CarouselPrevious variant="destructive" />
      </div>
    </Carousel>
  );
};

const NowplayingMobile = ({ movie }: { movie: Movie }) => {
  return (
    <div className="flex flex-col w-full md:hidden ">
      <div className="relative w-full h-63 ">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-5 flex flex-col ">
        <div className="flex justify-between items-center py-5">
          <div>
            <p>Now Playing:</p>
            <h1 className="font-bold text-2xl text-[#fb8500]">
              {movie.original_title}
            </h1>
          </div>
          <div className="flex">
            <Star />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
        <div className="pb-5">
          <p>{movie.overview}</p>
        </div>
        <Link href={`/${movie.id}`}>
          <Button className="w-[145px] h-[40px]">
            <Play /> Watch Trailer
          </Button>
        </Link>
      </div>
    </div>
  );
};

const NowplayingDesktop = async ({ movie }: { movie: Movie }) => {
  return (
    <div className="hidden flex-col w-full md:flex relative min-w-full h-180">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        className="object-cover"
      />

      <div className="px-5 flex flex-col absolute text-[#212529] dark:text-white md:top-1/4  2xl:top-1/3 right-2/3 translate-x-1/2 w-100 dark:bg-black/77 rounded-2xl dark:text-shadow-2xs bg-white h-74">
        <div className="flex justify-between items-center py-5">
          <div>
            <p>Now Playing:</p>
            <h1 className="font-bold text-2xl text-[#fb8500]">
              {movie.original_title}
            </h1>
          </div>
          <div className="flex">
            <Star fill="#fb8500" color="#fb8500" />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
        <div className="pb-5">
          <p className="">{movie.overview}</p>
        </div>
        <Link href={`/${movie.id}`}>
          <Button className="w-[145px] h-[40px] hover:bg-[#fb8500] dark:hover:text-white">
            <Play /> Watch Trailer
          </Button>
        </Link>
      </div>
    </div>
  );
};
