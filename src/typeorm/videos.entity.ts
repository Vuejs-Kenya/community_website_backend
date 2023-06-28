import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  linked_url: string;

  @CreateDateColumn({
    nullable: false
  })
  createdDate: Date;

  @UpdateDateColumn({
    nullable: true
  })
  updatedDate: Date;

  @Column({
    nullable: false,
    default: false
  })
  isVerified: boolean
}