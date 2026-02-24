import { getCredit } from "@/lib/api";

export const CreditMovie = async ({ id }: { id: number }) => {
  const { cast: credits, crew } = await getCredit(id);

  const display = credits.filter((credit) => {
    if (credit.known_for_department === "Acting") {
      return credit.name;
    }
  });

  const stars = display.sort((d) => d.popularity);

  return (
    <div className="flex gap-2">
      {stars.slice(0, 5).map((actor) => (
        <p key={actor.id}>{actor.name}</p>
      ))}
    </div>
  );
};
