import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
export declare class ReviewService {
    private readonly reviewModel;
    constructor(reviewModel: Model<ReviewModel>);
    create(dto: CreateReviewDto): Promise<ReviewModel>;
    delete(id: string): Promise<ReviewModel | null>;
    findByProductId(productId: string): Promise<ReviewModel[]>;
    getAllReview(): Promise<ReviewModel[]>;
    deleteAll(productId: string): Promise<import("mongodb").DeleteResult>;
}
