import { Module } from '@nestjs/common';
import { EncriptsService } from './encripts.service';
import { EncriptsController } from './encripts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encript } from 'src/entities/encript.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Encript])],
  controllers: [EncriptsController],
  providers: [EncriptsService]
})
export class EncriptsModule {}
