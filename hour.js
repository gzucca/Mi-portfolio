export const getCurrentDate = () => {
  const date = new Date();
  const day = 26;
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateFormatted = date.toLocaleDateString("en-GB");
  const dateCompared = `${day}/${month}/${year}`;
  return dateFormatted > dateCompared;
};
