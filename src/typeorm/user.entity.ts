import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRequests } from "./userRequests.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

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

  @Column
    firstName: string

  @Column
    lastName: string

  @Column({
    nullable: false,
    default: false
  })
    isVerified: boolean;

  @Column({
    nullable: false,
    default: false
  })
    isAdmin: boolean

  @OneToMany(type => UserRequests, userRequests => userRequests.user)
  userRequests: UserRequests[]

}