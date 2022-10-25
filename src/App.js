import { useEffect, useRef, useState } from "react";
import "./App.css";
import commands from "./commands.json";
import {
  help,
  echo,
  search,
  open,
  system,
  searchEngine,
  about,
} from "./Commands/Handler.index";

function App() {
  const inputRef = useRef(null);
  const parentRef = useRef(null);

  // TIME
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [time, setTime] = useState(getTime());

  setInterval(() => {
    setTime(getTime());
  }, 1000);

  function getTime() {
    const today = new Date();
    let min = today.getMinutes();
    let hr = today.getHours();
    let secs = today.getSeconds();
    if (today.getMinutes() < 10) {
      min = "0" + today.getMinutes();
    }
    if (today.getHours() <= 9) {
      hr = "0" + today.getHours();
    }
    if (today.getSeconds() <= 9) {
      secs = "0" + today.getSeconds();
    }
    const time = `${hr}:${min}:${secs}`;

    let day = today.getDay() + 1;
    let month = today.getMonth();
    let date = today.getDate();

    return `${weekday[day]}, ${months[month]} ${date} | ${time}`;
  }

  // FOCUS INPUT ON TERMINAL CLICK

  const handleClick = () => {
    inputRef.current.focus();
  };

  // OUTPUT COMPONENTS

  const [component, setComponent] = useState([]);

  // MAKING AN ARRAY FOR INPUT STRING

  const filter = (arr) => {
    const find = [];
    let k = 0;

    for (let i = 1; i < arr.length; i++) {
      find[k] = arr[i];
      k++;
    }
    return find;
  };

  // THEMES
  const themes = ["default", "light", "rosepine", "dracula", "nord"];

  // SEARCH ENGINE

  useEffect(() => {
    const theme = localStorage.getItem("terminal-theme");
    if (theme) {
      document.body.classList.add(theme);
    } else {
      document.body.className = "";
      document.body.classList.add("default");
    }
  }, []);

  // ON ENTER

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      event.target.value !== null &&
      event.target.value.trim().length !== 0
    ) {
      const inp = event.target.value.toLowerCase().split(" ")[0];
      let commandOutputTest;
      if (commands.some((el) => el.name === inp)) {
        if (inp === "help") {
          const output = help();
          commandOutputTest = output;
        }
        if (inp === "echo") {
          const output = echo(event.target.value);
          commandOutputTest = output;
        }
        if (inp === "search") {
          const output = search(
            filter(event.target.value.toLowerCase().split(" "))
          );
          commandOutputTest = output;
        }
        if (inp === "clear") {
          setComponent([]);
          event.target.value = "";
          if (component.current.children[0]) {
            component.current.removeChild().catch((e) => console.log(e));
          }
        }
        if (inp === "open") {
          const output = open(event.target.value);
          commandOutputTest = output;
        }
        if (inp === "system") {
          const output = system();
          commandOutputTest = output;
        }
        if (inp === "theme") {
          let output;
          let type = event.target.value;
          type = type.toLowerCase().split(" ").slice(1);

          if (themes.includes(type[0])) {
            document.body.className = "";
            document.body.classList.add(type);
            localStorage.setItem("terminal-theme", type);
            output = (
              <p>
                Set the theme to <span className="bold">{type}</span>
              </p>
            );
          } else {
            output = (
              <div>
                <p>The available themes are:</p>{" "}
                <ul>
                  {themes.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>{" "}
              </div>
            );
          }

          commandOutputTest = output;
        }
        if (inp === "search-engine") {
          const output = searchEngine(event.target.value);
          commandOutputTest = output;
        }
        if (inp === "about") {
          commandOutputTest = about();
        }
      } else {
        commandOutputTest = (
          <>
            Command not found. Try <code>help</code>
          </>
        );
      }
      var cmd = event.target.value;
      setComponent([
        ...component,
        { command: cmd, commandOutput: commandOutputTest },
      ]);
      event.target.value = "";
    }
  };

  return (
    <div className="terminal" onClick={handleClick}>
      <div className="terminal-content">
        <span>{time}</span>
        <div className="prev-content" ref={parentRef}>
          {component.map((item, index) => {
            return (
              <div className="output" key={index}>
                <p className="prompt-title">
                  <span className="curved-line">~</span>
                  <span className="dollar">$</span>
                  <span>{item.command}</span>
                </p>
                <span>{item.commandOutput}</span>
              </div>
            );
          })}
        </div>
        <div className="set">
          <div className="prompt">
            <p className="prompt-title">
              <span className="curved-line">~</span>
              <span className="dollar">$</span>
            </p>
            <input
              type="text"
              className="prompt-input"
              name="input"
              autoFocus
              ref={inputRef}
              autoComplete="off"
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
