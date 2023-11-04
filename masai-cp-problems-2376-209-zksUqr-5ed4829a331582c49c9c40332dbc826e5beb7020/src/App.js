import React from "react";
import Avatar from "./Components/Avatar";
import Button from "./Components/Button";
function App() {
  function Caption() {
    return (
      <div>
        <h2>this is h1 tag</h2>
      </div>
    );
  }

  function Image() {
    return (
      <div>
        <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
      </div>
    );
  }

  return (
    <div className="App">
      <Button />
      <Avatar cap={Caption} img={Image} /> 
    </div>
  );
}

export default App;

