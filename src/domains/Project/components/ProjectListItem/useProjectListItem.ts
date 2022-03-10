export const useProjectListItem = (restDeadline: number) => {
  const deadline = {
    isDanger: restDeadline < 7,
    text: `마감 ${restDeadline}일 전`,
  };

  const onClick = () => alert("ok");

  return { deadline, onClick };
};
