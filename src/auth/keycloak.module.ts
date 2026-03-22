import { Module } from '@nestjs/common';
import { KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        authServerUrl: configService.get<string>('KEYCLOAK_AUTH_SERVER_URL'),
        realm: configService.get<string>('KEYCLOAK_REALM'),
        clientId: configService.get<string>('KEYCLOAK_CLIENT_ID'),
        secret: configService.get<string>('KEYCLOAK_CLIENT_SECRET'),
        cookieKey: configService.get<string>('KEYCLOAK_COOKIE_ENCRYPTION_PASSWORD'),
        logLevels: ['warn', 'error', 'debug'],
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [ResourceGuard, RoleGuard],
  exports: [KeycloakConnectModule],
})
export class KeycloakModule {}
