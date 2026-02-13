"use client";
import { Button } from "@/components/ui/button";
import { Movie } from "@/lib/types";
import { Search } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChangeEventHandler, useEffect, useState } from "react";
import { searchMovies } from "@/lib/api";

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
        {movies.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </div>
  );
};
