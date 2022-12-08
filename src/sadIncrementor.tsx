import { FC, memo, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions/moodActions";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(sadButtonClicked(quantity, new Date()));
    setQuantity(0);
  };
  return (
    <div className=" m-4">
      <h1 className="text-red-500">Sad Intensity</h1>
      <input
        type="number"
        className="p-2 rounded-md border-2 w-20 border-red-400"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />

      <Button onClick={increment} theme="primary">
        Add
      </Button>
    </div>
  );
};

export default memo(SadIncrementor);
