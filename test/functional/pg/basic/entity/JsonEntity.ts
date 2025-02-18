import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class JsonEntity {
  @PrimaryGeneratedColumn()
  id!: number


  // -------------------------------------------------------------------------
  // JSON Type
  // -------------------------------------------------------------------------

  @Column('json')
  json!: Object

  @Column('jsonb')
  jsonb!: Object
}
