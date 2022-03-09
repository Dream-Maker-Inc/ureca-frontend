import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { replace } = useRouter();
  useEffect(() => {
    replace("/debug");
  });

  return <main>home</main>;
};

export default Home;
