import React from 'react';
import { useFeedTypeContext } from "./context/FeedTypeContext";
import './App.css';

function App() {

  const { selectedFeedType } = useFeedTypeContext()

  return (
    <div className="App">
      <div>{selectedFeedType}</div>
    </div>
  );
}

export default App;
