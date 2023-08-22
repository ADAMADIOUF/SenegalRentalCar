import { CONTACT_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendContactForm: builder.mutation({
      query: (data) => ({
        url: CONTACT_URL,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useSendContactFormMutation } = contactApiSlice
