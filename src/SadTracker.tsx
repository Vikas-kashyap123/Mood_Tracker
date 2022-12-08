import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelector } from "./selectors/moodSelectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {
  console.log("happyTracker Refreshed");
  const sadMoments = useSelector(sadMomentsSelector);
  return (
    <div className="bg-red-500 font-bold rounded-md p-2 m-4 text-white w-full h-full ">
      {sadMoments.length == 0 && (
        <div className="text-gray-500">Add Sadness</div>
      )}
      {sadMoments.map((m) => (
        <div key={m.when}>
          <div>
            <h1>Intensity : {m.intensity}</h1>
            <h1>
              Time :{" "}
              <span className="text-sm text-blue-600">
                {m.when.toISOString()}
              </span>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(SadTracker);
