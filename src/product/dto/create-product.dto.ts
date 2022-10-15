import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';

class ProductHaracteristicDto {
  @IsString()
  name: string;

  @IsString()
  value: string;
}

export class CreateProductDto {
  @IsString()
  images: string;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  oldPrice?: number;

  @IsNumber()
  credit: number;

  @IsString()
  description: string;

  @IsString()
  advantages: string;

  @IsString()
  disAdvantages: string;

  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsArray()
  @ValidateNested()
  @Type(() => ProductHaracteristicDto)
  carachteristics: ProductHaracteristicDto[];
}
