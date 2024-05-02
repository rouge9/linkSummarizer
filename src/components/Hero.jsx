const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-4">
        <div className="flex items-center text-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-brain-circuit"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M9 13a4.5 4.5 0 0 0 3-4" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M12 13h4" />
            <path d="M12 18h6a2 2 0 0 1 2 2v1" />
            <path d="M12 8h8" />
            <path d="M16 8V5a2 2 0 0 1 2-2" />
            <circle cx="16" cy="13" r=".5" />
            <circle cx="18" cy="3" r=".5" />
            <circle cx="20" cy="21" r=".5" />
            <circle cx="20" cy="8" r=".5" />
          </svg>
          <span className="ml-2 font-bold text-xl">Link Sumz</span>
        </div>
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
