import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),

  tagTypes: ["User"],

  endpoints: (builder) => ({
    getUsers: builder.query({
      // query: () => `users`,
      query: ({ user = "sa" }) => `/search/users?q=${user}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
