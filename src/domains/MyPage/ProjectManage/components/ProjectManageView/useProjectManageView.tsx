import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { FilterType } from "../../type/FilterType";
import { ProjectType } from "../../type/ProjectType";
import { StatusType } from "../../type/StatusType";
import { ProjectListItemProps } from "../ProjectListItem";

export const useProjectManageView = () => {
  const [project, setProject] = useState(ProjectType.ALL as string);
  const [filter, setFilter] = useState(FilterType.NICKNAME as string);
  const [keyword, setKeyword] = useState("");

  const handleProjectChange = (e: SelectChangeEvent) => {
    setProject(e.target.value);
  };

  const handleFilterChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
  };

  const handleKeywordChange = (value: string) => {
    setKeyword(value);
  };

  const handleSubmit = () => alert("submit");

  const projectsData: ProjectListItemProps[] = [
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.COMPLETED,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응형지 리뉴얼얼 개형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.COMPLETED,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.CANCELD,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.COMPLETED,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.PROCESSING,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응형 홈페이지형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.PROCESSING,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title: "반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.COMPLETED,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응형 홈페이지 리뉴얼 이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.CANCELD,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.PROCESSING,
      },
    },
    {
      avatar: {
        imgUrl:
          "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandName: "드림메이커",
      },
      project: {
        id: "213456789",
        title:
          "반응형 홈페이지 지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼 개발운영 중 반응형 홈페이지 리뉴얼",
        transactionDate: "22.03.14 ~",
        price: "100,000원",
        state: StatusType.COMPLETED,
      },
    },
  ];

  return {
    projects: projectsData,
    projectState: {
      value: project,
      onChange: handleProjectChange,
    },
    filterState: {
      value: filter,
      onChange: handleFilterChange,
    },
    keywordState: {
      value: keyword,
      onChange: handleKeywordChange,
    },

    selectState: {
      onClick: handleSubmit,
    },
  };
};
