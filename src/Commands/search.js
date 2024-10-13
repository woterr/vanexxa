const search = function (inp) {
  inp = inp.join(" ");
  const searchEngine = localStorage.getItem("searchEngine");

  if (searchEngine === null ){
    return (
      <p>You have no Search Engine set up. Use <code>search-engine {"<value>"}</code> to set a default search engine. </p>
    )
  }

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
