import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "This will not be visible in modern browsers!";
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    });
    document.addEventListener("visibilitychange", (e) => {
      if(document.visibilityState == "hidden"){
        alert("Did you just change tabs? Or maybe minimized the browser?")
      }
    });
    console.log(
      "Why can't we display custom messages on confirmation dialogue: https://stackoverflow.com/questions/38879742/is-it-possible-to-display-a-custom-message-in-the-beforeunload-popup"
    );
    setInterval(() => {
      setCount((arg) => arg + 0.5);
    }, 1000);
  }, []);
  return (
    <>
      <div>{count.toFixed()}</div>
    </>
  );
}

export default App;
