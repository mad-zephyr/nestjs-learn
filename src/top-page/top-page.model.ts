import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { syncIndexes } from 'mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

class Advantages {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema({ timestamps: true, _id: true, collection: 'TopPageModel' })
export class TopPageModel {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: () => HhData })
  hh?: HhData;

  @Prop({ type: () => [Advantages] })
  advantages: Advantages[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop({ type: () => [String] })
  tags: string[];
}

export type TopPageModelDocument = TopPageModel & Document;

const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);
TopPageModelSchema.index({ '$**': 'text' });

export { TopPageModelSchema };
