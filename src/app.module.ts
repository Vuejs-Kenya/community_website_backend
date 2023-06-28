import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { UserModule } from './user/user.module';
import { VideosModule } from './videos/videos.module';
import { PostsModule } from './posts/posts.module';
import { EventsModule } from './events/events.module';

import entities from './typeorm';

@Module({
  imports: [
  ConfigModule.forRoot({isGlobal: true}),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
  }),
  RegisterModule, 
  UserModule, VideosModule, PostsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
