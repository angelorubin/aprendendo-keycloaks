import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakModule } from './auth/keycloak.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { KeycloakAuthGuard } from './auth/guards/keycloak-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    KeycloakModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: KeycloakAuthGuard,
    },
  ],
})
export class AppModule {}
