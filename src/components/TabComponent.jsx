const TabComponent = ({ setMode }) => {
  return (
    <div className="tabs">
      <a
        id="tab1"
        className="tab tab-bordered tab-active text-lg"
        onClick={() => {
          document.getElementById("tab1").classList.add("tab-active");
          document.getElementById("tab2").classList.remove("tab-active");
          setMode("url");
        }}
      >
        URL
      </a>
      <a
        id="tab2"
        className="tab tab-bordered text-lg"
        onClick={() => {
          document.getElementById("tab2").classList.add("tab-active");
          document.getElementById("tab1").classList.remove("tab-active");
          setMode("text");
        }}
      >
        Article
      </a>
    </div>
  );
};

export default TabComponent;
