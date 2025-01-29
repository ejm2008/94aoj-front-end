export type HamburgersModel = {
    value: number;
    id: number;
    image: Array<string>;
    title: string;
    description: string
    values: {
        single: number,
        combo: number,
    };
};
