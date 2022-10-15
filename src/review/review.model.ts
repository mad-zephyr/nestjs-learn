import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

// export type ReviewModelDocument = ReviewModel & Document;

@Schema({ timestamps: true, _id: true })
export class ReviewModel {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  productId: string;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
