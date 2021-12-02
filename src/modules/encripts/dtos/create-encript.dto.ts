import { IsNotEmpty } from "class-validator";

export class CreateEncriptDTO {
  @IsNotEmpty()
  encripted_name: string;

  constructor(values: any){
    this.encripted_name = values.name
  }
}
