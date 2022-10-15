"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReviewService = class ReviewService {
    constructor(reviewModel) {
        this.reviewModel = reviewModel;
    }
    async create(dto) {
        const resultReview = await this.reviewModel.create(dto);
        return resultReview.save();
    }
    async delete(id) {
        return await this.reviewModel.findByIdAndDelete(id).exec();
    }
    async findByProductId(productId) {
        return await this.reviewModel.find({ productId: productId }).exec();
    }
    async getAllReview() {
        return await this.reviewModel.find({}).exec();
    }
    async deleteAll(productId) {
        return await this.reviewModel
            .deleteMany({
            productId: new mongoose_2.Types.ObjectId(productId),
        })
            .exec();
    }
};
ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Review')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map