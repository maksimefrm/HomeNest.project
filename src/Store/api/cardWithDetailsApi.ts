import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PropertyDetails } from './types';
import { API_KEY, baseUrl } from '../../constants';

export const propertyDetailApi = createApi({
    reducerPath: 'propertyDetailApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');
            headers.set('X-RapidAPI-Key', API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getPropertyById: builder.query<PropertyDetails, string>({
            query: (id) => ({
                url: `/properties/detail?externalID=${id}`,
                params: { property_id: id },
            }),
        }),
    }),
});

export const { useGetPropertyByIdQuery } = propertyDetailApi;
