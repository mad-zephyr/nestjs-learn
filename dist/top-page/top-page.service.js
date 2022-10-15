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
exports.TopPageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TopPageService = class TopPageService {
    constructor(topPageModel) {
        this.topPageModel = topPageModel;
    }
    async create(dto) {
        const result = await this.topPageModel.create(dto);
        return result.save();
    }
    async findById(id) {
        return await this.topPageModel.findById(id).exec();
    }
    async findByAlias(alias) {
        return await this.topPageModel.findOne({ alias });
    }
    async findByText(text) {
        return await this.topPageModel.find({
            $text: { $search: text, $caseSensitive: false },
        });
    }
    async deleteById(id) {
        return await this.topPageModel.findByIdAndRemove(id).exec();
    }
    async findByCategory(firstCategory) {
        return await this.topPageModel
            .aggregate()
            .match({
            firstCategory,
        })
            .group({
            _id: {
                secondCategory: '$secondCategory',
            },
            pages: {
                $push: {
                    alias: '$alias',
                    title: '$title',
                },
            },
        })
            .exec();
    }
    async updateById(id, dto) {
        return await this.topPageModel
            .findByIdAndUpdate(id, dto, { new: true })
            .exec();
    }
    async findByTopLevelcategory(firstCategory) {
        return await this.topPageModel
            .find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1 })
            .exec();
    }
};
TopPageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('TopPage')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TopPageService);
exports.TopPageService = TopPageService;
//# sourceMappingURL=top-page.service.js.map