const system = function () {
  return (
    <div>
      <span>Platform: {window.navigator.platform}</span>
      <br />
      <span>Language: {window.navigator.language}</span>
      <br />
      <span>Browser: {window.navigator.userAgentData.brands[1].brand}</span>
    </div>
  );
};

export default system;
