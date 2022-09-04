import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { UserModule } from "./user/user.module";

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'usmanabid',
    password: '',
    database: 'usmanabid',
    synchronize: true,
    entities: [User]
  })],
})

export class AppModule { }
