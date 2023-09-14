export const inc = (num) => {
  return {
    type: "inc",
    acc: num,
  };
};
export const dec = () => {
  return {
    type: "dec",
  };
};
