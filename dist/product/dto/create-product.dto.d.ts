declare class ProductHaracteristicDto {
    name: string;
    value: string;
}
export declare class CreateProductDto {
    images: string;
    title: string;
    price: number;
    oldPrice?: number;
    credit: number;
    description: string;
    advantages: string;
    disAdvantages: string;
    categories: string[];
    tags: string[];
    carachteristics: ProductHaracteristicDto[];
}
export {};
