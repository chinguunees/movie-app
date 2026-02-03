"use client";
import Image from "next/image";
import { Header } from "./components/Header";
import { Nowplaying } from "./components/Nowplaying";
import { Upcoming } from "./components/Upcoming";
import { Toprated } from "./components/Toprated";
import { Popular } from "./components/Popular";
import { FooterArea } from "./components/FooterArea";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
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
