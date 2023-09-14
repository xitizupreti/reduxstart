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

export const div = (num) => {
  return {
    type: "div",
    acc: num,
  };
};

export const mul = (num) => {
  return {
    type: "mul",
    acc: num,
  };
};
