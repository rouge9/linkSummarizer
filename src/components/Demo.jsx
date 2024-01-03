import { useState, useEffect } from "react";
import {
  useLazyGetUrlSummmaryQuery,
  useLazyGetTextSummaryQuery,
} from "../services/article";
import InputUrl from "./InputUrl";
import InputText from "./InputText";
import HistoryCard from "./HIstoryCard";
import SummaryCard from "./SummaryCard";
import TabComponent from "./TabComponent";
import TextHistroy from "./TextHistroy";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [lang, setLang] = useState("en");

  const [textArticle, setTextArticle] = useState({
    text: "",
    summary: "",
  });

  const [textHistory, setTextHistory] = useState([]);

  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState("");
  const [mode, setMode] = useState("url");

  const [getUrlSummmary, { isLoading, isError }] = useLazyGetUrlSummmaryQuery();
  const [
    postTextSummary,
    { data, isLoading: isTextLoading, isError: isTextError },
  ] = useLazyGetTextSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    const textArticlesFromLocalStorage = JSON.parse(
      localStorage.getItem("textArticles")
    );

    if (textArticlesFromLocalStorage) {
      setTextHistory(textArticlesFromLocalStorage);
    }

    if (articlesFromLocalStorage) {
      setHistory(articlesFromLocalStorage);
    }
  }, []);

  const handleUrlSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getUrlSummmary({ url: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const newHistory = [...history, newArticle];

      setArticle({
        url: "",
        summary: "",
      });
      setHistory(newHistory);
    }
  };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postTextSummary({
      lang: lang,
      text: textArticle.text,
    });

    if (data?.summary) {
      const newText = { ...textArticle, summary: data.summary };
      const newTextHistroy = [...textHistory, newText];

      setTextArticle({
        text: "",
        summary: "",
      });

      setTextHistory(newTextHistroy);
    }
  };

  const handleCopy = (text) => {
    setCopied(text);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <div className="container">
      <div className="flex justify-center items-center mt-5 mb-5">
        <TabComponent setMode={setMode} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col mt-8">
          {mode === "url" ? (
            <InputUrl
              handleSubmit={handleUrlSubmit}
              setArticle={setArticle}
              article={article}
            />
          ) : (
            <InputText
              lang={lang}
              setLang={setLang}
              handleSubmit={handleTextSubmit}
              setTextArticle={setTextArticle}
              textArticle={textArticle}
            />
          )}
          {mode === "url" ? (
            <HistoryCard
              history={history}
              copied={copied}
              handleCopy={handleCopy}
            />
          ) : (
            <TextHistroy
              history={textHistory}
              copied={copied}
              handleCopy={handleCopy}
            />
          )}
        </div>
        <div className="flex flex-col">
          <SummaryCard
            data={mode === "url" ? history : textHistory}
            isError={isError || isTextError}
            isLoading={isLoading || isTextLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
