import Clear from "./Clear";
import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import SadIncrementor from "./sadIncrementor";
import SadTracker from "./SadTracker";

function App() {
  return (
    <div className="px-3 mx-4  sm:px-10 flex flex-col justify-center items-center">
      <HappyTracker />
      <SadTracker />
      <Clear />
      <HappyIncrementor />
      <SadIncrementor />
    </div>
  );
}

export default App;
