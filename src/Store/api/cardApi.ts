import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '5e1a11f8dcmsh72d27566c729e7cp189e12jsnfb2763e9a807'; // Замени на твой RapidAPI ключ

export const realEstateApi = createApi({
    reducerPath: 'realEstateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bayut.p.rapidapi.com',
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