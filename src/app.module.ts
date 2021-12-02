import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncriptsModule } from './modules/encripts/encripts.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EncriptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
