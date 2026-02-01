const RangeBar = (object) => {
  const { status } = object;

  return (
    <div className="relative flex items-center justify-end">
      <div className="relative w-2 gap-[1px] rounded-full flex flex-col justify-between items-center py-2">
        <div className="relative flex items-center">
          {status === "outHigh" && (
            <>
              <div className="absolute left-[-78px] w-[80px] h-[5px] bg-red-100 z-0" />
              <div className="absolute -left-12 flex items-center justify-center z-20">
                <div className="absolute w-6 h-6 rounded-full bg-red-200 opacity-60" />
                <div className="relative w-2 h-2 rounded-full bg-red-500" />
              </div>
            </>
          )}
          <div className="relative w-1 h-[5px] rounded-full bg-red-500 z-10" />
        </div>

        <div className="relative flex items-center">
          {status === "inRange" && (
            <>
              <div className="absolute left-[-78px] w-[80px] h-[5px] bg-orange-100 z-0" />
              <div className="absolute -left-12 flex items-center justify-center z-20">
                <div className="absolute w-6 h-6 rounded-full bg-orange-200 opacity-60" />
                <div className="relative w-2 h-2 rounded-full bg-orange-500" />
              </div>
            </>
          )}
          <div className="relative w-1 h-[5px] rounded-full bg-orange-400 z-10" />
        </div>

        <div className="relative flex items-center">
          {status === "optimal" && (
            <>
              <div className="absolute left-[-78px] w-[80px] h-[30px] bg-green-50 z-0" />
              <div className="absolute -left-12 flex items-center justify-center z-20">
                <div className="absolute w-6 h-6 rounded-full bg-green-200 opacity-60" />
                <div className="relative w-2 h-2 rounded-full bg-green-500" />
              </div>
            </>
          )}
          <div className="relative w-1 h-[30px] rounded-full bg-green-500 z-10" />
        </div>

        <div className="relative flex items-center">
          {status === "outLow" && (
            <>
              <div className="absolute left-[-78px] w-[80px] h-[5px] bg-red-100 z-0" />
              <div className="absolute -left-12 flex items-center justify-center z-20">
                <div className="absolute w-6 h-6 rounded-full bg-red-200 opacity-60" />
                <div className="relative w-2 h-2 rounded-full bg-red-500" />
              </div>
            </>
          )}
          <div className="relative w-1 h-[5px] rounded-full bg-red-500 z-10" />
        </div>
      </div>
    </div>
  );
};

export default RangeBar;
