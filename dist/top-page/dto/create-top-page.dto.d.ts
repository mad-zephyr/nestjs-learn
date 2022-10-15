import { TopLevelCategory } from '../top-page.model';
declare class HhDataDto {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}
declare class AdvantagesDto {
    title: string;
    description: string;
}
export declare class CreateTopPageDto {
    firstCategory: TopLevelCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: HhDataDto;
    advantages: AdvantagesDto[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
export {};
