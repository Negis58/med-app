import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'r1022', timestamps: false })
export class SubjectModel extends Model {
  @Column({ type: DataType.STRING(11), allowNull: false, primaryKey: true })
  p00: string;
  @Column({ type: DataType.STRING(500) })
  p01: string;
  @Column({ type: DataType.STRING(1), defaultValue: 0, allowNull: false })
  utv: string;
  @Column({ type: DataType.STRING(500) })
  p02: string;
  @Column({ type: DataType.STRING(1), defaultValue: 0 })
  sp: string;
}
