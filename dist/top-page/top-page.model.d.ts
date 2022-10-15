/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare enum TopLevelCategory {
    Courses = 0,
    Services = 1,
    Books = 2,
    Products = 3
}
declare class HhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}
declare class Advantages {
    title: string;
    description: string;
}
export declare class TopPageModel {
    firstCategory: TopLevelCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: HhData;
    advantages: Advantages[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
export declare type TopPageModelDocument = TopPageModel & Document;
declare const TopPageModelSchema: import("mongoose").Schema<TopPageModel, import("mongoose").Model<TopPageModel, any, any, any, any>, {}, {}, {}, {}, "type", TopPageModel>;
export { TopPageModelSchema };
