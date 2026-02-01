import { resolveRange } from "../utils/utils";
import { getDisplayRanges } from "../utils/utils";

const RangeChart = ({ biomarkers, input }) => {
  const { name, age, value, gender } = input;
  const rangesToShow = getDisplayRanges(biomarkers[name].ranges, age, gender);
  const getRangeValue = (key) => rangesToShow.find((r) => r.key === key).value ?? "";
  const { status, range } = resolveRange(biomarkers[name].ranges, value, age, gender);

  return (
    <div className="w-full max-w-[900px]">
      <h3 className="text-gray-400 mb-4">Chart Normal</h3>
      <div className="mb-4 flex gap-4 w-full justify-center">
        <p>Age: {age}</p>
        <p>Gender: {String(gender).charAt(0).toUpperCase() + String(gender).slice(1)}</p>
      </div>

      <div className="flex gap-5 border p-4 rounded-xl relative">
        <div className="absolute border-r border-dashed border-black top-0 left-1/3 -translate-x-1/2 h-full"></div>
        <div className="flex flex-col gap-2 justify-between w-full">
          <div className={`flex items-center justify-start text-start gap-2 text-xs text-red-500 ${status === "outHigh" ? "bg-red-100" : ""}`}>
            {status === "outHigh" && (
              <>
                <div className="group absolute left-1/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-red-200 relative">
                    <div className="w-[10px] h-[10px] rounded-full bg-red-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-red-500 text-[10px] px-2 py-1 rounded whitespace-nowrap transition-opacity shadow">Score: {value}</div>
                </div>
                <div className="group absolute left-2/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-gray-200 relative cursor-pointer">
                    <div className="w-[10px] h-[10px] rounded-full bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100  bg-white text-gray-500 text-[10px]  px-2 py-2 rounded shadow w-[98px] text-center transition-opacity  pointer-events-auto ">
                    <p className="mb-1">Schedule your annual re-test</p>
                    <button className="rounded-3xl bg-black text-white px-3 py-1 text-[10px]">Book now</button>
                  </div>
                </div>
              </>
            )}

            <span className="legend-dot bg-red-500" />
            <div>
              {getRangeValue("outHigh")}
              <br />
              Out of range
            </div>
          </div>

          <div className={`flex items-center justify-start text-start gap-2 text-xs text-orange-500 ${status === "inRange" ? "bg-orange-100" : ""}`}>
            {status === "inRange" && (
              <>
                <div className="group absolute left-1/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-orange-200 relative">
                    <div className="w-[10px] h-[10px] rounded-full bg-orange-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-orange-500 text-[10px] px-2 py-1 rounded whitespace-nowrap transition-opacity shadow">Score: {value}</div>
                </div>
                <div className="group absolute left-2/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-gray-200 relative cursor-pointer">
                    <div className="w-[10px] h-[10px] rounded-full bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100  bg-white text-gray-500 text-[10px]  px-2 py-2 rounded shadow w-[98px] text-center transition-opacity  pointer-events-auto ">
                    <p className="mb-1">Schedule your annual re-test</p>
                    <button className="rounded-3xl bg-black text-white px-3 py-1 text-[10px]">Book now</button>
                  </div>
                </div>
              </>
            )}

            <span className="legend-dot bg-orange-400" />
            <div>
              {getRangeValue("inRange")}
              <br />
              In range
            </div>
          </div>

          <div className={`flex items-center justify-start text-start gap-2 text-xs text-green-500 ${status === "optimal" ? "bg-green-100" : ""}`}>
            {status === "optimal" && (
              <>
                <div className="group absolute left-1/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-green-200 relative">
                    <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-green-500 text-[10px] px-2 py-1 rounded whitespace-nowrap transition-opacity shadow">Score: {value}</div>
                </div>

                <div className="group absolute left-2/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-gray-200 relative cursor-pointer">
                    <div className="w-[10px] h-[10px] rounded-full bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100  bg-white text-gray-500 text-[10px]  px-2 py-2 rounded shadow w-[98px] text-center transition-opacity  pointer-events-auto ">
                    <p className="mb-1">Schedule your annual re-test</p>
                    <button className="rounded-3xl bg-black text-white px-3 py-1 text-[10px]">Book now</button>
                  </div>
                </div>
              </>
            )}

            <span className="legend-dot bg-green-500" />
            <div>
              {getRangeValue("optimal")}
              <br />
              Optimal
            </div>
          </div>

          <div className={`flex items-center justify-start text-start gap-2 text-xs text-red-500 ${status === "outLow" ? "bg-red-100" : ""}`}>
            {status === "outLow" && (
              <>
                <div className="group absolute left-1/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-red-200 relative">
                    <div className="w-[10px] h-[10px] rounded-full bg-red-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-red-500 text-[10px] px-2 py-1 rounded whitespace-nowrap transition-opacity shadow">Score: {value}</div>
                </div>

                <div className="group absolute left-2/3 top-1/5 -translate-x-1/2">
                  <div className="w-[20px] h-[20px] rounded-full bg-gray-200 relative cursor-pointer">
                    <div className="w-[10px] h-[10px] rounded-full bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100  bg-white text-gray-500 text-[10px]  px-2 py-2 rounded shadow w-[98px] text-center transition-opacity  pointer-events-auto ">
                    <p className="mb-1">Schedule your annual re-test</p>
                    <button className="rounded-3xl bg-black text-white px-3 py-1 text-[10px]">Book now</button>
                  </div>
                </div>
              </>
            )}

            <span className="legend-dot bg-red-500" />
            <div>
              {getRangeValue("outLow")}
              <br />
              Out of range
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeChart;
