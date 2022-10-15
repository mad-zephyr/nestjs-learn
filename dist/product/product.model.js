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
exports.ProductModelSchema = exports.ProductModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class ProductHaracteristic {
}
let ProductModel = class ProductModel {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ProductModel.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ProductModel.prototype, "oldPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ProductModel.prototype, "credit", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "advantages", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductModel.prototype, "disAdvantages", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => [String] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "categories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => [String] }),
    __metadata("design:type", Array)
], ProductModel.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ options: () => [ProductHaracteristic], _id: false }),
    __metadata("design:type", Array)
], ProductModel.prototype, "carachteristics", void 0);
ProductModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, _id: true })
], ProductModel);
exports.ProductModel = ProductModel;
exports.ProductModelSchema = mongoose_1.SchemaFactory.createForClass(ProductModel);
//# sourceMappingURL=product.model.js.map