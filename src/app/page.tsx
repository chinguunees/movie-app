"use client";
import Image from "next/image";
import { Header } from "./components/Header";
import { Nowplaying } from "./components/Nowplaying";
import { Upcoming } from "./components/Upcoming";
import { Toprated } from "./components/Toprated";
import { Popular } from "./components/Popular";
import { FooterArea } from "./components/FooterArea";
import { Carousel } from "@/components/ui/carousel";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div>
      <Header />

      <Nowplaying />
      <Upcoming />
      <Toprated />
      <Popular />
      <FooterArea />
      <Carousel />
    </div>
  );
}
