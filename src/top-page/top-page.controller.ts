import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import {
  NOT_FOUND_TOPPAGE_ALIAS_ERROR,
  NOT_FOUND_TOPPAGE_ID_ERROR,
} from './top-page.constants';
import { TopPageService } from './top-page.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { TopLevelCategory } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly topPageService: TopPageService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: CreateTopPageDto) {
    return await this.topPageService.create(dto);
  }

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
    const topPage = await this.topPageService.findById(id);
    if (!topPage) {
      throw new NotFoundException(NOT_FOUND_TOPPAGE_ID_ERROR + id);
    }
    return topPage;
  }

  @Get('getByAlias/:alias')
  async getByAlias(@Param('alias') alias: string) {
    const topPage = await this.topPageService.findByAlias(alias);
    if (!topPage) {
      throw new NotFoundException(NOT_FOUND_TOPPAGE_ALIAS_ERROR + alias);
    }
    return topPage;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const topPage = await this.topPageService.deleteById(id);
    if (!topPage) {
      throw new NotFoundException(NOT_FOUND_TOPPAGE_ID_ERROR + id);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async patch(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: CreateTopPageDto,
  ) {
    const updatedPage = await this.topPageService.updateById(id, dto);
    if (!updatedPage) {
      throw new NotFoundException(NOT_FOUND_TOPPAGE_ID_ERROR + id);
    }
    return updatedPage;
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindTopPageDto) {
    return await this.topPageService.findByTopLevelcategory(dto.firstCategory);
  }

  @Post('textSearch/:text')
  async textSearch(@Param('text') text: string) {
    return await this.topPageService.findByText(text);
  }

  @Post('findByCategory')
  async findByCategory(@Body() dto: FindTopPageDto) {
    return await this.topPageService.findByCategory(dto.firstCategory);
  }
}
