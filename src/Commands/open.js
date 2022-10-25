const open = function (inp) {
  inp = inp.toLowerCase().split(" ").slice(1);
  console.log(inp);

  const hasDomain = (arr) => {
    arr.forEach((item, index) => {
      if (item.includes(".")) {
        if (item.includes("https://") || item.includes("http://")) {
          return true;
        } else {
          inp = "https://" + inp;
          return true;
        }
      }
      return false;
    });
  };

  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  if (hasDomain(inp) || isValidUrl(inp)) {
    window.open(inp, "noopener,noreferrer");
    return (
      <a href={inp} className="link">
        {inp}
      </a>
    );
  } else {
    console.log(hasDomain(inp));
    return (
      <>
        Usage: <code>open {"<link | website.domain>"}</code>
      </>
    );
  }
};

export default open;
