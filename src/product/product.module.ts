import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductModelSchema } from './product.model';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Products',
        schema: ProductModelSchema,
        collection: 'Products',
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
