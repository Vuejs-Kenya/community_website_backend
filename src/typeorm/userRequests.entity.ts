import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserRequests {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  user: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({
    nullable: false,
    default: false
  })
  isVerified: boolean

  @Column({
    nullable: false,
    default: false
  })
  isAdmin: boolean
}