import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Models, Types } from 'mongoose';
import { ReviewModel } from '../review/review.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Products')
    private readonly productModel: Model<ProductModel>,
  ) {}

  async create(dto: CreateProductDto) {
    return this.productModel.create(dto);
  }

  async findById(id: string) {
    return this.productModel.findById(id).exec();
  }

  async deleteById(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async updateProductById(id: string, dto: CreateProductDto) {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async findWithReviews(dto: FindProductDto) {
    return this.productModel
      .aggregate([
        {
          $match: {
            categories: dto.category,
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
        {
          $limit: dto.limit,
        },
        {
          $lookup: {
            from: 'Review',
            localField: '_id',
            foreignField: 'productId',
            as: 'reviews',
          },
        },
        {
          $addFields: {
            reviewCount: { $size: '$reviews' },
            reviewAvg: { $avg: '$reviews.rating' },
            reviews: {
              $function: {
                body: function (reviews) {
                  reviews.sort(
                    (a, b) =>
                      new Date(b.createdAt).valueOf() -
                      new Date(a.createdAt).valueOf(),
                  );
                  return reviews;
                },
                args: ['$reviews'],
                lang: 'js',
              },
            },
          },
        },
      ])
      .exec() as Promise<
      (ProductModel & {
        review: ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
      })[]
    >;
  }
}
