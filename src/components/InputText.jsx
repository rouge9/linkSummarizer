import { linkIcon, send, text } from "../assets";

const InputText = ({
  handleSubmit,
  lang,
  setLang,
  textArticle,
  setTextArticle,
}) => {
  return (
    <div className="container">
      <form
        className="relative grid grid-cols-1 gap-2 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <textarea
          className="textarea textarea-bordered resize-none textarea-lg w-full max-w-xl h-96"
          placeholder="Enter Article"
          onChange={(e) => {
            setTextArticle({ ...textArticle, text: e.target.value });
          }}
          value={textArticle.text}
          required
        />
        <div className="flex justify-end items-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-accent mt-1 mr-2">
              {lang}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 mt-2"
            >
              <li>
                <label
                  tabIndex={1}
                  className="btn m-1"
                  onClick={() => {
                    setLang("en");
                  }}
                >
                  en
                </label>
              </li>
              <li>
                <label
                  tabIndex={2}
                  className="btn m-1"
                  onClick={() => {
                    setLang("am");
                  }}
                >
                  am
                </label>
              </li>
            </ul>
          </div>

          <button className="btn btn-outline w-20" type="submit">
            <img src={send} alt="send" className="w-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputText;
