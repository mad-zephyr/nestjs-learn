import mongoose from 'mongoose';
export declare class ReviewModel {
    name: string;
    title: string;
    description: string;
    rating: number;
    productId: string;
}
export declare const ReviewModelSchema: mongoose.Schema<ReviewModel, mongoose.Model<ReviewModel, any, any, any, any>, {}, {}, {}, {}, "type", ReviewModel>;
