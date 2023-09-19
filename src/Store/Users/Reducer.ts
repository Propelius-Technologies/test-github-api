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
      query: ({ user, page }) => {
        return {
          url: `/search/users?q=${user}`,

          params: {
            page: page || 0, // Page number
            per_page: 10, // Number of results per page (max: 100)
          },
        };
      },
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
