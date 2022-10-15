import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(dto: CreateReviewDto): Promise<import("./review.model").ReviewModel>;
    delete(id: string): Promise<import("./review.model").ReviewModel>;
    getByProduct(productId: string, email: string): Promise<import("./review.model").ReviewModel[]>;
    getAll(): Promise<import("./review.model").ReviewModel[]>;
}
