export interface Property {
    externalID: string;
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
    message: string
}

export interface PropertyDetails {
    id: string;
    coverPhoto: {
        url: string;
    };
    price: number;
    score: number;
    rooms: number;
    baths: number;
    title: string;
    product: string;
    description: string;
    phoneNumber: {
        mobile: string
        phone: string
        whatsapp: string
    }
    contactName: string
    type: string
    location: { name: string }[];
}
