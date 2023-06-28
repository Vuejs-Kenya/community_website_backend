import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Post {
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
  description: string;

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