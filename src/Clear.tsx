import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { clearButtonClicked } from "./actions";
import Button from "./Button";

type ClearProps = {};

const Clear: FC<ClearProps> = (props) => {
  const dispatch = useDispatch();
  const handleClearButton = () => {
    dispatch(clearButtonClicked);
  };
  return (
    <>
      <Button onClick={handleClearButton} className="bg-yellow-400">
        Clear
      </Button>
    </>
  );
};

Clear.defaultProps = {};

export default memo(Clear);
