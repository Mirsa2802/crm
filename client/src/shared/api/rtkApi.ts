import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_API_URL } from '../const/api/baseApiUrl'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../const/localStorage/accessTokenKey'

// @ts-expect-error i don't know how to do it...
export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (Headers) => {
      const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY)
      if (token && token !== null) {
        Headers.set('Authorization', token)
      }
      return Headers
    },
  }),
  endpoints: () => ({}),
})
