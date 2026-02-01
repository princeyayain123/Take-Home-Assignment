import { getColor, resolveRange } from "../utils/utils";
import RangeBar from "./RangeBar";
import biomarkers from "../data/data";
import statusText from "../data/Status";

const StatCard = ({ input, onClick }) => {
  const { name, age, value, gender } = input;
  const { status, range } = resolveRange(biomarkers[name].ranges, value, age, gender);

  const color = getColor(status);

  return (
    <div className="w-full max-w-[900px] px-6 py-4 rounded-xl border border-gray-200 mb-4 cursor-pointer hover:shadow transition" onClick={onClick}>
      <div className=" grid items-center gap-4 grid-cols-1 sm:grid-cols-[1fr_120px] lg:grid-cols-[220px_140px_120px_120px_1fr] ">
        <div className="font-medium text-gray-800 text-start">{biomarkers[name].name}</div>

        <div className="flex items-center gap-2 text-sm text-start">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-gray-400 font-normal">{statusText[status]}</span>
        </div>

        <div className="text-sm text-gray-800 text-start">
          {value}
          <span className="text-gray-500 ml-1">{name === "creatinine" ? "mg/dL" : ""}</span>
        </div>

        <div className="text-sm text-gray-500 text-start">{range}</div>

        <div className="w-full max-w-[140px]">
          <RangeBar status={status} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
