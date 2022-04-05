export const useProjectCard = (priceCount: number, deadlineCount: number) => {
  const price = {
    text: `금액 : ${priceCount}만원 이하`,
  };
  const deadline = {
    text: `기간 : ${deadlineCount}주 이내`,
  };

  const onClick = () => "카드를 선택하셨습니다.";

  return { price, deadline, onClick };
};
