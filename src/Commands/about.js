const about = function () {
  return (
    <div>
      <p>
        <a href="/" className="bold link ">
          Vanexxa
        </a>{" "}
        is a browser console that masquerades as your browser's default
        startpage.
      </p>
      <p>
        Vanexxa features numerous commands, including <code>search</code>,{" "}
        <code>open</code> and <code>theme</code>. It enables the user to
        transition between their preferred theme and functionalities akin to a
        startpage.
      </p>
      <br />
      <p>
        Created by{" "}
        <a className="link" href="https://woter.vercel.app/">
          Woter
        </a>
      </p>
    </div>
  );
};

export default about;
