"use client";
import { Button } from "@/components/ui/button";
import { Movie } from "@/lib/types";
import { Search } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChangeEventHandler, useEffect, useState } from "react";
import { searchMovies } from "@/lib/api";
import Link from "next/link";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }
    setLoading(true);

    const timer = setTimeout(async () => {
      const data = await searchMovies(searchValue);
      setMovies(data.results);
      console.log(data);
    }, 500);

    setLoading(false);

    return () => clearTimeout(timer);
  }, [searchValue]);

  movies.map((movie) => console.log(movie.id));

  return (
    <div className="max-w-150 min-w-10 relative">
      <Field orientation="horizontal">
        <Input
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </Field>
      <div
        className={`bg-white h-auto w-150 rounded-2xl text-black p-5 font-normal z-50 absolute ${movies.length === 0 ? "hidden" : "block"}`}
      >
        {movies.slice(0, 8).map((movie) => (
          <div className="flex gap-2 items-center">
            <Link href={`/${movie.id}`} key={movie.id}>
              <div className="flex gap-2 items-center">
                <img
                  className="w-[67px] h-[100px] rounded-lg mb-3"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                />
                <p>{movie.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
