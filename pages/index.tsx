import type { NextPage } from "next";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <main>
      <button css={button}>TestButton</button>
    </main>
  );
};

export default Home;

const button = css`
  width: 120px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #eee;
  background-color: #fff;
`;
