import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-4">
        <img src={logo} alt="logo" className="w-32 object-contain" />
        <button
          className="black_btn"
          type="button"
          onClick={() => {
            window.open("https://github.com/rouge9");
          }}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles With <br />
        <span className="orange_gradient">OpenAi GPT-4 Model</span>
      </h1>
      <h2 className="desc">
        This is a demo of the OpenAI GPT-4 model. It can summarize any article
        you give it. The model is still in beta and is not available to the
        public yet. The model is trained on 45GB of text from the internet. The
        model is not perfect and will make mistakes.
      </h2>
    </header>
  );
};

export default Hero;
