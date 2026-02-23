import Link from "next/link";
import { getMovieTrailer } from "@/lib/api";

type MovieDetailsPageProps = {
  id: any;
};
// export const Trailer = async ({ id }: MovieDetailsPageProps) => {
//   const { results: movies } = await getMovieTrailer(id);
//   return <div>PISDA WE
//     <div>
//         {movies.map((movie)=> )}
//     </div>
//   </div>;
// };
