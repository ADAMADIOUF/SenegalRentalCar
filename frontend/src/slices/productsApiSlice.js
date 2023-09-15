import {
  PRODUCTS_URL,
  BOOKING_URL,
  UPLOAD_URL,
  UPLOAD_URL_OWNER,
} from '../constants'
import { apiSlice } from './apiSlice'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),

      keepUnusedDataFor: 5,
    }),

    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),

      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
      }),

      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: 'PUT',
        body: data,
      }),

      invalidatesTags: ['Product'],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    uploadProductImageOwner: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL_OWNER}`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
    }),
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: BOOKING_URL,
        method: 'POST',
        body: bookingData,
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateBookingMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useUploadProductImageOwnerMutation,
  useDeleteProductMutation,
} = productsApiSlice
