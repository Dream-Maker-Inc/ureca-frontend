import { SignupFormAtom } from "@/recoil/Signup";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

type AgreedTermsModel = {
  id: number;
  title: string;
  requirement: boolean;
};

const terms: AgreedTermsModel[] = [
  {
    id: 0,
    title: "유레카 서비스 이용 약관",
    requirement: true,
  },
  {
    id: 1,
    title: "개인 정보 처리 방침",
    requirement: true,
  },
  {
    id: 2,
    title: "전자 거래 이용 약관",
    requirement: true,
  },
  {
    id: 3,
    title: "제3자 정보 제공 동의",
    requirement: false,
  },
  {
    id: 4,
    title: "홍보 및 마케팅 메시지 수신 동의",
    requirement: false,
  },
];

export const useTermsForm = () => {
  const setSignupForm = useSetRecoilState(SignupFormAtom);

  const [agreedTerms, setAgreedTerms] = useState<boolean[]>(
    terms.map(() => false)
  );

  const handleAgreedTermChange = (index: number, checked: boolean) => {
    const copied = [...agreedTerms];
    copied[index] = checked;
    setAgreedTerms(copied);
  };

  const isAllAgreed = agreedTerms.every((it) => it === true);
  const handleAllCheckClick = () => {
    const copied = [...agreedTerms];
    setAgreedTerms(copied.map(() => !isAllAgreed));
  };

  const isValidRequirementTerms = agreedTerms
    .filter((_, index) => terms[index].requirement)
    .every((it) => it);

  useEffect(() => {
    setSignupForm((old) => ({
      ...old,
      agreedTerms: agreedTerms.map((it, index) => ({
        id: terms[index].id,
        agreed: it,
      })),
      validation: { ...old.validation, isValidRequirementTerms },
    }));
  }, [agreedTerms, isValidRequirementTerms, setSignupForm]);

  return {
    terms,
    agreedTerms,
    handleAgreedTermChange,
    isAllAgreed,
    handleAllCheckClick,
  };
};
