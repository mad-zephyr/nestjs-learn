import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { TopLevelCategory, TopPageModelDocument } from './top-page.model';

@Injectable()
export class TopPageService {
  constructor(
    @InjectModel('TopPage')
    private readonly topPageModel: Model<TopPageModelDocument>,
  ) {}

  async create(dto: CreateTopPageDto) {
    const result = await this.topPageModel.create(dto);
    return result.save();
  }

  async findById(id: string) {
    return await this.topPageModel.findById(id).exec();
  }

  async findByAlias(alias: string) {
    return await this.topPageModel.findOne({ alias });
  }

  async findByText(text: string) {
    return await this.topPageModel.find({
      $text: { $search: text, $caseSensitive: false },
    });
  }

  async deleteById(id: string) {
    return await this.topPageModel.findByIdAndRemove(id).exec();
  }

  async findByCategory(firstCategory: TopLevelCategory) {
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

  async updateById(id: string, dto: CreateTopPageDto) {
    return await this.topPageModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
  }

  async findByTopLevelcategory(firstCategory: TopLevelCategory) {
    return await this.topPageModel
      .find({ firstCategory }, { alias: 1, secondCategory: 1, title: 1 })
      .exec();
  }
}
