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
  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }
    const timer = setTimeout(async () => {
      const data = await searchMovies(searchValue);
      setMovies(data.results);
      console.log(data);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="max-w-150 min-w-10">
      <Field orientation="horizontal">
        <Input
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </Field>
    </div>
  );
};
