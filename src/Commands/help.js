import commands from "../commands.json";

const help = function () {
  const array2 = [];
  for (let i = 0; i < commands.length; i++) {
    array2.push(commands[i].name);
  }
  const output = array2.map((item, index) => {
    return <code key={index}>{item}</code>;
  });
  return output;
};

export default help;
