import React from 'react';
import Player from './features/player';
import Map from '/features/map';

class App extends React.Component {
  render() {
    return (
      <div>
        <Player />
        {/* <Map /> */}
      </div>
    )
  }
}

export default App;