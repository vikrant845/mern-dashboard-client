import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_PUBLIC_API_URL }),
  reducerPath: 'main',
  tagTypes: ['Kpis', 'Product', 'Transaction'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'kpi/kpis',
      providesTags: ['Kpis']
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => 'product/products',
      providesTags: ['Product']
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => '/transaction/transactions',
      providesTags: ['Transaction']
    })
  })
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;