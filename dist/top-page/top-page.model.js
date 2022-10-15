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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPageModelSchema = exports.TopPageModel = exports.TopLevelCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var TopLevelCategory;
(function (TopLevelCategory) {
    TopLevelCategory[TopLevelCategory["Courses"] = 0] = "Courses";
    TopLevelCategory[TopLevelCategory["Services"] = 1] = "Services";
    TopLevelCategory[TopLevelCategory["Books"] = 2] = "Books";
    TopLevelCategory[TopLevelCategory["Products"] = 3] = "Products";
})(TopLevelCategory = exports.TopLevelCategory || (exports.TopLevelCategory = {}));
class HhData {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "count", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "juniorSalary", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "middleSalary", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "seniorSalary", void 0);
class Advantages {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Advantages.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Advantages.prototype, "description", void 0);
let TopPageModel = class TopPageModel {
};
__decorate([
    (0, mongoose_1.Prop)({ enum: TopLevelCategory }),
    __metadata("design:type", Number)
], TopPageModel.prototype, "firstCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "secondCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], TopPageModel.prototype, "alias", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => HhData }),
    __metadata("design:type", HhData)
], TopPageModel.prototype, "hh", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => [Advantages] }),
    __metadata("design:type", Array)
], TopPageModel.prototype, "advantages", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "seoText", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "tagsTitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => [String] }),
    __metadata("design:type", Array)
], TopPageModel.prototype, "tags", void 0);
TopPageModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, _id: true, collection: 'TopPageModel' })
], TopPageModel);
exports.TopPageModel = TopPageModel;
const TopPageModelSchema = mongoose_1.SchemaFactory.createForClass(TopPageModel);
exports.TopPageModelSchema = TopPageModelSchema;
TopPageModelSchema.index({ '$**': 'text' });
//# sourceMappingURL=top-page.model.js.map