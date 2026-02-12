"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `test: ${count}`;
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex m-10 items-center justify-center gap-5 font-black text-2xl">
      {count}
      <Button onClick={increaseCount}> test</Button>
    </div>
  );
};

export default Home;
