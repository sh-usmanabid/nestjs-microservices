import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./local.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

@Module({
    imports: [ClientsModule.register([{
        name: 'USER_CLIENT',
        transport: Transport.TCP,
        options: {
            host: 'localhost',
            port: 4010,
        }
    }]), JwtModule.register({
        secret: 'secretKey',
        signOptions: { expiresIn: '60s' }
    })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy]
})

export class AuthModule {}
