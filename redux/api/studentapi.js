import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const studentApi=createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.BACKEND_URL}/api/student`,
    }),
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: (params) => ({
                url: `/`,
            }),
            providesTags: ["students"]
        }),
        getStudentDetails: builder.query({
            query: (id) => `/${id}`,
        }),
        createStudent: builder.mutation({
            query(body) {
                return {
                    url: "/",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["students"],
        }),

        deleteStudent: builder.mutation({
            query(id) {
                return {
                    url: `/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["students"],
        }),
    }),
})

export const {
    useCreateStudentMutation,
    useGetStudentsQuery,
    useDeleteStudentMutation,
    useLazyGetStudentDetailsQuery, useGetStudentDetailsQuery
}=studentApi