const search = function (inp) {
  inp = inp.join(" ");
  const searchEngine = localStorage.getItem("searchEngine");

  if (inp.trim().length !== 0) {
    window.open(`${searchEngine}${inp}`, "_blank", "noopener,noreferrer");
    return (
      <a href={`${searchEngine}${inp}`} className="link">
        {inp}
      </a>
    );
  } else {
    return (
      <>
        Usage: <code>search {"<keyword(s)>"}</code>
      </>
    );
  }
};

export default search;
