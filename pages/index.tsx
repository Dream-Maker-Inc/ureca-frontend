import { css } from "@emotion/react";
import { Button } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <button css={button}>Test Button</button>
      <Button variant="contained">Test Mui Button</Button>
      test
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
