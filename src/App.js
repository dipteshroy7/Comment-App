import "./App.css";

import { CommentCard } from "./components";
import { data } from "./data/data.js";

function App() {
  return (
    <div className="App">
      <CommentCard {...data.comments} />
    </div>
  );
}

export default App;
