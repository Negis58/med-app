import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { SubjectModel } from '../subjects/subject.model';

@Table({ tableName: 'mpe1gem', schema: 'minzdrav', timestamps: false })
export class SupplierModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataType.INTEGER })
  npp: number;
  @Column({ type: DataType.STRING(1000) })
  naim_org: string;
  @Column({ type: DataType.STRING(1000) })
  adr_fact: string;
  @Column({ type: DataType.STRING(100) })
  inn: string;
  @Column({ type: DataType.FLOAT(17, 6) })
  plazma_max: number;
  @Column({ type: DataType.FLOAT(17, 6) })
  plazma_cena: number;
  @Column({ type: DataType.FLOAT(17, 6) })
  erm_max: number;
  @Column({ type: DataType.FLOAT(17, 6) })
  erm_cena: number;
  @Column({ type: DataType.FLOAT(17, 6) })
  immg_max: number;
  @Column({ type: DataType.FLOAT(17, 6) })
  immg_cena: number;
  @Column({ type: DataType.FLOAT(17, 6) })
  alb_max: number;
  @Column({ type: DataType.FLOAT(17, 6) })
  alb_cena: number;
  @ForeignKey(() => SubjectModel)
  @Column({ type: DataType.STRING(11), allowNull: false })
  r1022: string;
  @BelongsTo(() => SubjectModel)
  subject: SubjectModel;
}
