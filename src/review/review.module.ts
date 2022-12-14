import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from './review.controller';
import { ReviewModelSchema } from './review.model';
import { ReviewService } from './review.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Review',
        schema: ReviewModelSchema,
        collection: 'Review',
      },
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
