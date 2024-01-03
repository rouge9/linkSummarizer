import { linkIcon, send } from "../assets";

const InputUrl = ({ handleSubmit, setArticle, article }) => {
  return (
    <form
      className="relative flex justify-center items-center w-full"
      onSubmit={handleSubmit}
    >
      <img src={linkIcon} alt="linkIcon" className="absolute left-2 my-2 w-5" />
      <input
        className="url_input peer"
        type="url"
        placeholder="Enter URL"
        onChange={(e) => {
          setArticle({ ...article, url: e.target.value });
        }}
        value={article.url}
        required
      />
      <button
        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
        type="submit"
      >
        <img src={send} alt="send" className="w-5" />
      </button>
    </form>
  );
};

export default InputUrl;
