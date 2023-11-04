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
        <img src="https://media.licdn.com/dms/image/C5603AQH6YLJNpKYptw/profile-displayphoto-shrink_800_800/0/1645321274249?e=2147483647&v=beta&t=U_poGN-aEKqAlOmeSyEXxy5VmTAWYOPXKC4Xvm6uB78" alt="pratik shukla" style={{border:"50%"}}/>
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

