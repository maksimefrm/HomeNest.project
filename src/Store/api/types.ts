export interface Property {
    id: string;
    price: number;
    rooms: number;
    baths: number;
    area: number;
    title: string;
    coverPhoto: {
        url: string;
    };
    location: {
        name: string;
    }[];
    score: number;
}
