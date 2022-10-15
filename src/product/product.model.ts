import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

class ProductHaracteristic {
  name: string;
  value: string;
}
@Schema({ timestamps: true, _id: true })
export class ProductModel {
  @Prop()
  images: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  credit: number;

  @Prop()
  description: string;

  @Prop()
  advantages: string;

  @Prop()
  disAdvantages: string;

  @Prop({ type: () => [String] })
  categories: string[];

  @Prop({ type: () => [String] })
  tags: string[];

  @Prop({ options: () => [ProductHaracteristic], _id: false })
  carachteristics: ProductHaracteristic[];
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);
