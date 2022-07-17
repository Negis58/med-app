import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { SupplierDto } from './dto/supplier.dto';

@Controller('supplier')
export class SuppliesController {
  constructor(private readonly supplierService: SuppliesService) {}

  @Get(':id')
  async getSubjects(@Param('id') id: number) {
    return await this.supplierService.getSubjects(id);
  }
  @Post()
  async create(@Body() post: SupplierDto) {
    return await this.supplierService.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() post: SupplierDto) {
    return await this.supplierService.update(id, post);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.supplierService.remove(id);
  }
}
