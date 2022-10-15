import { IsNumber, IsString, Max, Min } from 'class-validator';
import { Types } from 'mongoose';

export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @Max(5)
  @Min(1, { message: 'Rating too low' })
  @IsNumber()
  rating: number;

  @IsString()
  productId: string;
}
