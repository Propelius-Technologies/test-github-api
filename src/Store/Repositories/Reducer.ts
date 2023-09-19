import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const repositoryApi = createApi({
  reducerPath: "repositoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
    headers: {
      Authorization: `Bearer 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`,
    },
  }),
  tagTypes: ["Repository"],
  endpoints: (builder) => ({
    getRepositories: builder.query({
      query: ({ repository, page }) => ({
        url: `/search/repositories?q=${repository}`,
        method: "GET",

        params: {
          page: page || 0, // Page number
          per_page: 10, // Number of results per page (max: 100)
        },
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
