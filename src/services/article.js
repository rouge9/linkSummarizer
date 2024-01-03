import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPIDAPIKEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUrlSummmary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.url)}&length=3`,
    }),
  }),
});

export const textApi = createApi({
  reducerPath: "textApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTextSummary: builder.query({
      query: (params) => ({
        url: "summarize-text",
        method: "POST",
        body: {
          lang: params.lang,
          text: params.text,
        },
      }),
    }),
  }),
});

export const { useLazyGetUrlSummmaryQuery } = articleApi;

export const { useLazyGetTextSummaryQuery } = textApi;
