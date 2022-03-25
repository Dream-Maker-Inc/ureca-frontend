import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { AgreeAllButton } from "./AgreeAllButton";
import { TermItemRow } from "./TermItemRow";
import { useTermsForm } from "./useTermsForm";

export const TermsForm = () => {
  const {
    terms,
    agreedTerms,
    handleAgreedTermChange,
    isAllAgreed,
    handleAllCheckClick,
  } = useTermsForm();

  return (
    <form css={styles.termsForm}>
      <Typography variant="h6" fontWeight={"400"}>
        약관 동의
      </Typography>

      <Stack width={"100%"}>
        <AgreeAllButton checked={isAllAgreed} toggle={handleAllCheckClick} />

        <Stack width={"100%"} mt={"12px"}>
          {terms.map((it, index) => (
            <TermItemRow
              key={it.id}
              checked={agreedTerms[index]}
              toggle={() => handleAgreedTermChange(index, !agreedTerms[index])}
              label={it.title}
              onShowTerm={() => alert("todo popup")}
              requirement={it.requirement}
            />
          ))}
        </Stack>
      </Stack>
    </form>
  );
};

const styles = {
  termsForm: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 24px;
  `,
};
