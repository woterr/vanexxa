const echo = function (input) {
  input = input.toLowerCase().split(" ").slice(1);
  const output = input.join(" ");
  return output;
};

export default echo;
