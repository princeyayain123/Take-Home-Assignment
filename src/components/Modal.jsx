import biomarkers from "../data/data";
import RangeChart from "./RangeChart";
const Modal = ({ setSelectedStat, selectedStat }) => {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        setSelectedStat(null);
      }}
    >
      <div className="modal relative" onClick={(e) => e.stopPropagation()}>
        <RangeChart biomarkers={biomarkers} input={selectedStat} />
        <button className="absolute top-[20px] right-[20px]" onClick={() => setSelectedStat(null)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full">
          <p className="font-bold">Latest result</p>
          <p className="font-normal">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
