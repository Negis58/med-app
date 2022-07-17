import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize, { Op } from 'sequelize';
import { SupplierModel } from './supplier.model';
import { SupplierDto } from './dto/supplier.dto';

@Injectable()
export class SuppliesService {
  constructor(
    @InjectModel(SupplierModel)
    private readonly supplierModel: typeof SupplierModel,
  ) {}

  async getSubjects(id) {
    return await this.supplierModel.findAll({ where: { r1022: id } });
  }
  async create(post: SupplierDto) {
    return await this.supplierModel.create({
      npp: post.npp,
      naim_org: post.naim_org,
      adr_fact: post.adr_fact,
      inn: post.inn,
      plazma_max: post.plazma_max,
      plazma_cena: post.plazma_cena,
      erm_max: post.erm_max,
      erm_cena: post.erm_cena,
      immg_max: post.immg_max,
      immg_cena: post.immg_cena,
      alb_max: post.alb_max,
      alb_cena: post.alb_cena,
      r1022: post.r1022,
    });
  }

  async update(id: number, data: SupplierDto) {
    return await this.supplierModel.update(
      { ...data },
      { where: { id: id }, returning: true },
    );
  }

  async remove(id: number) {
    return await this.supplierModel.destroy({ where: { id: id } });
  }
}
