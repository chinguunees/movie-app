import { getCredit } from "@/lib/api";

export const CrewMovie = async ({ id }: { id: number }) => {
  const { crew: crew } = await getCredit(id);

  const display = crew.filter((c) => {
    if (c.job === "Writer") {
      return c.name;
    } else {
      return "No Information Found";
    }
  });

  return (
    <div className="flex gap-2">
      {display.slice(0, 5).map((actor) => (
        <p key={actor.credit_id}>{actor.name}</p>
      ))}
    </div>
  );
};
