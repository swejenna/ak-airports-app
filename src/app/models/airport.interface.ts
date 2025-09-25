export interface Airport {
    id?: string;
    name?: string;
    location: {
        latitude: number;
        longitude: number;
    };
    faaid?: string;
    status?: string;
    owner?: string;
    region?: string;
    website?: string;
}