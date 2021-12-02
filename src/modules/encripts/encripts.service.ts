import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Encript } from 'src/entities/encript.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EncriptsService {
  constructor(@InjectRepository(Encript) private encriptRepository: Repository<Encript>) { }

  create(createEncriptDto: Encript) {
    return this.encriptRepository.save(createEncriptDto)
  }

  findOne(id: number) {
    return this.encriptRepository.findOne(id)
  }
}
