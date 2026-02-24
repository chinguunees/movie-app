import Image from "next/image";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreLike } from "../components/MoreLike";
import { getMovieDetails, MovieDetails } from "@/lib/api";
import Link from "next/link";
import { TrailerMovie } from "../components/Trailer";
import { CreditMovie } from "../components/Credit";
import { CrewMovie } from "../components/Crew";
import { DirectorMovie } from "../components/Director";
import { Badge } from "@/components/ui/badge";

// import { getMovieDetails } from "@/lib/api";

type MovieDetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { movieId } = await params;
  const movie = await getMovieDetails(movieId);
  console.log(movie);

  return (
    <div>
      <DetailsDesktop movie={movie} />
      <DetailsMobile movie={movie} />
    </div>
  );
}

const DetailsMobile = ({ movie }: { movie: MovieDetails }) => {
  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center mt-8 mx-5">
        <div className="flex flex-col ">
          <h1 className="font-semibold text-[24px]">{movie.title}</h1>
          <p className="text-[14px]">
            {movie.release_date} · PG · {movie.runtime} Minutes
          </p>
        </div>
        <div className="flex flex-col text-[14px]">
          <div className="flex items-center gap-2">
            <Star fill="white" />
            <div className="flex items-start">
              <p className="font-bold">{movie.vote_average.toFixed(1)}</p>
              <p>
                /10
                <br />
                {movie.vote_count}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mx-5">
        <TrailerMovie id={movie.id} />
      </div>
      <div className="flex flex-col mt-8 mx-5 gap-5">
        <div className="flex mx-5 gap-8">
          <img
            className="h-[148px] w-[100px]"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
          <div className="grid grid-cols-2 gap-2 items-center">
            {movie.genres.map((genre) => (
              <Badge key={genre.id} variant={"outline"}>
                {genre.name}{" "}
              </Badge>
            ))}
          </div>
        </div>
        <p>{movie.overview}</p>
        <div className="flex gap-10">
          <p className="font-bold text-[16px]">Director</p>
          <DirectorMovie id={movie.id} />
        </div>
        <div className="flex gap-10">
          <p className="font-bold text-[16px]">Writers</p>
          <CrewMovie id={movie.id} />
        </div>
        <div className="flex gap-10">
          <p className="font-bold text-[16px]">Stars</p>
          <CreditMovie id={movie.id} />
        </div>
      </div>
      <MoreLike id={movie.id} />
    </div>
  );
};

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsDesktop = ({ movie }: { movie: MovieDetails }) => {
  console.log("genre test", movie.genres);
  const movieGenres = movie.genres.map((m) => {
    return m.name;
  });
  // .join(",    ");

  return (
    <div>
      <div className="hidden lg:flex flex-col items-center">
        <div className="flex justify-between items-center mt-[52px] w-screen lg:max-w-[1080px]">
          <div className="flex flex-col max-w-[440px]">
            <h1 className="font-extrabold text-[36px]">{movie.title}</h1>
            <p className="max-w-[440px] text-[18px]">
              {movie.release_date} · PG · {movie.runtime} Minutes
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px]">Rating</p>
            <div className="flex items-center gap-2">
              <Star fill="white" />
              <div className="flex flex-col items-start">
                <p className="font-bold">{movie.vote_average.toFixed(1)}/10</p>
                <p className="text-[12px] text-gray-500">{movie.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-100 mt-[24px] gap-[32px] w-screen lg:max-w-[1080px]">
          <img
            className="h-[428px] w-[290px]"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
          <TrailerMovie id={movie.id} />
          {/* <img
            className="h-[428px] w-[760px]"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          /> */}
        </div>
        <div className="flex flex-col mx-100 mt-[32px] gap-[20px] w-screen max-w-[1080px]">
          <div className="flex gap-5">
            {movie.genres.map((genre) => (
              <Badge key={genre.id} variant={"outline"}>
                {genre.name}{" "}
              </Badge>
            ))}
            {/* <Button variant="outline">{movieGenres}</Button>
            <Badge> {movieGenres} </Badge>
            <Button variant="outline">Action</Button>
            <Button variant="outline">Adventure</Button>
            <Button variant="outline">Drama</Button> */}
          </div>
          <p>{movie.overview}</p>
          <div className="flex gap-10 border-b h-10">
            <p className="font-bold text-[16px] w-16">Director</p>
            <DirectorMovie id={movie.id} />
          </div>
          <div className="flex gap-10 border-b h-10">
            <p className="font-bold text-[16px] w-16">Writers</p>
            <CrewMovie id={movie.id} />
          </div>
          <div className="flex gap-10 border-b h-10">
            <p className="font-bold text-[16px]">Stars</p>
            <CreditMovie id={movie.id} />
          </div>
        </div>
        <div className="mt-[32px]">
          <MoreLike id={movie.id} />
        </div>
      </div>
    </div>
  );
};
