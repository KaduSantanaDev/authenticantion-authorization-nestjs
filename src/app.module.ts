import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {MongooseModule} from "@nestjs/mongoose";


@Module({
  imports: [UsersModule, AuthModule, MongooseModule.forRoot('mongodb+srv://root:1234@cluster0.2x3yv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
