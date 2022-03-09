import { ChangeEvent, useState } from "react";

export const usePortfolioMobileAppbar = (
  onSearchSubmit: (keyword: string) => void
) => {
  const [isSearchMode, setSearchMode] = useState(false);
  const toggleSearchMode = () => setSearchMode((old) => !old);

  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearchSubmit(keyword);
  };

  return {
    searchMode: {
      value: isSearchMode,
      toggle: toggleSearchMode,
    },
    searchState: {
      value: keyword,
      onChange: handleKeywordChange,
      onKeyUp: handleKeyUp,
    },
  };
};
