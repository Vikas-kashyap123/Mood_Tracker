import { FC, memo, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions/moodActions";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = (props) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(happyButtonClicked(quantity, new Date()));
    setQuantity(0);
  };

  return (
    <div className="m-4">
      <h1 className="text-green-500">Happy Intensity</h1>
      <input
        type="number"
        className="p-2 rounded-md w-20  border-2 border-green-400"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />
      <Button onClick={increment} theme="secondary">
        Add
      </Button>
    </div>
  );
};

export default memo(HappyIncrementor);
