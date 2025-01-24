export type AppetizersModel = {
    id: number;
    image: string;
    title: string;
    description: string
    values: {
        small: number | null,
        large: number | null,
    };
}