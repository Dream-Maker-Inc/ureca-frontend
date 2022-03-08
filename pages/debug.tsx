import { RoutePath } from "@/ui/constants/Path";
import { Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

const Debug: NextPage = () => {
  return (
    <main>
      <Stack spacing={2}>
        <Typography variant="h4">디버깅 페이지</Typography>
        <Stack direction={"row"} spacing={10}>
          <Stack alignItems={"center"}>
            <Typography>PC ver</Typography>
            <Link href={RoutePath.Auth} passHref>
              <Button>인증 페이지</Button>
            </Link>
            <Link href={RoutePath.Portfolios} passHref>
              <Button>포트폴리오 페이지</Button>
            </Link>
          </Stack>

          <Stack alignItems={"center"}>
            <Typography>Mobile ver</Typography>
          </Stack>
        </Stack>
      </Stack>
    </main>
  );
};
export default Debug;
