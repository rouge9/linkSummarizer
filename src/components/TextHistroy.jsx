import { copy, tick } from "../assets";

const TextHistroy = ({ history, copied, handleCopy }) => {
  console.log(copied);
  return (
    <div className="flex flex-col gap-2 max-h-40 overflow-y-auto w-full mt-4">
      {history?.toReversed()?.map((item, index) => (
        <div
          key={index}
          className="flex flex-row gap-2 p-2 border border-gray-300 rounded-md"
        >
          <div className="copy_btn" onClick={() => handleCopy(item?.text)}>
            <img src={copied === item?.text ? tick : copy} alt="copy" />
          </div>
          <p className="flex-1 font-satoshi font-medium text-sm truncate">
            {item?.text.slice(0, 40) + "..."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TextHistroy;
