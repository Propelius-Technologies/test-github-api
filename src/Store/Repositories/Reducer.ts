import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const repositoryApi = createApi({
  reducerPath: "repositoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
    headers: {
      Authorization:
        "Bearer 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",
    },
    // prepareHeaders: (headers) => {
    //   headers.set("Access-Control-Allow-Origin", "*");
    //   // headers.set('Access-Control-Allow-Methods', 'GET') //
    //   // headers.set('Access-Control-Allow-Headers', '*') //
    //   return headers;
    // },
  }),
  tagTypes: ["Repository"],
  endpoints: (builder) => ({
    getRepositories: builder.query({
      query: ({ repository }) => ({
        url: `/search/repositories?q=${repository}`,
        method: "GET",
      }),
      providesTags: ["Repository"],
    }),
    getParticularRepository: builder.query({
      query: ({ user, repository }) => `/repos/${user}/${repository}`,
      providesTags: ["Repository"],
    }),
  }),
});

export const { useGetRepositoriesQuery, useGetParticularRepositoryQuery } =
  repositoryApi;
