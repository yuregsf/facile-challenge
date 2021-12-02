import { IsNotEmpty } from "class-validator";
import { encrypt } from "src/utils/encrypt";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Encript {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    transformer: {
      from: encrypt,
      to: encrypt
    }
  })
  @IsNotEmpty({
    message: "O campo \"name\" é obrigatório"
  })
  name: String;
}
