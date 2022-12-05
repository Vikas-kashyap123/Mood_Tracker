import { FC, memo } from "react";
import { happyMomentsSelector } from "./selectors";
import { useSelector } from "react-redux";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
  const happyMoments = useSelector(happyMomentsSelector);
  return (
    <div className="bg-green-500 text-wrap font-bold rounded-md p-2 m-4 text-white w-full h-full ">
      {happyMoments.length == 0 && (
        <div className="text-gray-500"> Add happiness...</div>
      )}
      {happyMoments.map((m) => (
        <div key={m.intensity}>
          <h1>Intensity : {m.intensity}</h1>
          <h1>
            Time :{" "}
            <span className="text-blue-500 text-sm">
              {m.when.toISOString()}
            </span>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default memo(HappyTracker);
