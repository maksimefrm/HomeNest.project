import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, baseUrl } from '../../constants';

export const realEstateApi = createApi({
    reducerPath: 'realEstateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');
            headers.set('X-RapidAPI-Key', API_KEY);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getProperties: builder.query({
            query: () => ({
                url: '/properties/list',
                method: "GET",
                params: {
                    locationExternalIDs: '5002',
                    purpose: 'for-sale',
                    hitsPerPage: '24',
                    page: '0',
                    lang: 'en',
                },
            }),
        }),
        
    }),
});

export const { useGetPropertiesQuery } = realEstateApi;