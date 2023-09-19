import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
    headers: {
      Authorization:
        "Bearer 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",
    },
  }),

  tagTypes: ["User"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ user, count, page }) =>
        `/search/users?q=${user}&per_page=${count || 10}&page=${page || 1}`,
      providesTags: ["User"],
    }),
    getPerticulerUser: builder.query({
      query: ({ user }) => `/users/${user}`,
      providesTags: ["User"],
    }),
    getUserRepos: builder.query({
      query: ({ user }) => `/users/${user}/repos`,
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetPerticulerUserQuery,
  useGetUserReposQuery,
} = userApi;
