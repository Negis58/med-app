import { Module } from '@nestjs/common';
import { SupplierModel } from './supplier.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { SuppliesController } from './supplies.controller';
import { SuppliesService } from './supplies.service';

@Module({
  providers: [SuppliesService],
  imports: [SequelizeModule.forFeature([SupplierModel])],
  controllers: [SuppliesController],
})
export class SuppliesModule {}
