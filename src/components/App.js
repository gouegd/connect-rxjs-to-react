import React from "react";
import Counter from "app/components/Counter";
import Stuff from "app/components/Stuff";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter/>
        <Stuff/>
      </div>
    );
  }
}

export default App;
