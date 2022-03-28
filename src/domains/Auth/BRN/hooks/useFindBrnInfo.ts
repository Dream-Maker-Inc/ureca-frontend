import { BRNApi } from "../services/BRNApi";
import { useMutation } from "react-query";

export const useFindBrnInfo = () => {
  return useMutation((rawBrn: string) => BRNApi.findBrnInfo(rawBrn));
};
