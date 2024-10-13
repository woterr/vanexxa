import searchEngines from "../searchEngines.json";

const searchEngine = function (inp) {
  inp = inp.toLowerCase().split(" ").slice(1)[0];
  let output;

  const checkEngine = (engine) => {
    return searchEngines.some((el) => el.name === inp) ? true : false;
  };

  const returnPath = (engine) => {
    var result = searchEngines.filter(function (o) {
      return o.name === engine;
    });

    console.log(result[0].path);
    return result[0].path;
  };

  if (checkEngine(inp)) {
    localStorage.setItem("searchEngine", returnPath(inp));
    return (output = (
      <>
        Set the search engine to{" "}
        <span className="bold" style={{ textTransform: "capitalize" }}>
          {inp}
        </span>
      </>
    ));
  } else {
    output = (
      <div>
        <p>
          Usage:{" "}
          <code>
            <span className="bold">search-engine {"<value>"}</span>
          </code>{" "}
          <br />
          The available Search Engines are:
        </p>{" "}
        <ul>
          {searchEngines.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
  return output;
};

export default searchEngine;
