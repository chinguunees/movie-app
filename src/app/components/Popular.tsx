import { Moviecard } from "./Moviecard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export const Popular = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col px-5 2xl:px-20 lg:px-15 md:px-10 max-w-[1437px] ">
        <div className="flex justify-between mt-8 items-center md:px-15">
          <h1 className="text-[24px] font-bold">Popular</h1>
          <Link href="/popular">
            <Button variant="ghost">See More</Button>
          </Link>
        </div>
        <div className="flex flex-col px-5 2xl:px-20 lg:px-15 md:px-10 items-center">
          <div className="grid grid-cols-2 md:hidden gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Moviecard
                key={i}
                img="/starwars.png"
                rating={7.9}
                name="Star Wars III"
              />
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 md:gap-10 lg:justify-between 2xl:gap-10 lg:grid-cols-4 2xl:grid-cols-5 mt-13 2xl:max-w-[1437px] ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Moviecard
                key={i}
                img="/starwars.png"
                rating={7.9}
                name="Star Wars III"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
