import Clear from "./Clear";
import HappyIncrementor from "./HappyIncrementor";
import HappyTracker from "./HappyTracker";
import ProductListPage from "./ProductListPage";
import SadIncrementor from "./sadIncrementor";
import SadTracker from "./SadTracker";

function App() {
  return (
    <div className="px-3 mx-4  sm:px-10 flex flex-col justify-center items-center">
      <ProductListPage />
    </div>
  );
}

export default App;
