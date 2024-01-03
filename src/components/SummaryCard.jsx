import { loader } from "../assets";

const SummaryCard = ({ isLoading, isError, data }) => {
  return (
    <div className="flex flex-col gap-2 mt-8 justify-center items-center">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full">
          <img src={loader} alt="loader" className="w-10" />
          <p className="text-sm">Loading...</p>
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-sm">Something went wrong.</p>
          <span className="text-xs text-red-500"> {isError?.data?.error}</span>
        </div>
      ) : (
        data?.toReversed()[0]?.summary && (
          <div className="flex flex-col gap-2">
            <h2 className="font-satoshi font-bold text-gray-700 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p className="font-inter font-medium text-sm text-gray-700">
                {data?.toReversed()[0]?.summary}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SummaryCard;
