import { Module } from "@nestjs/common";
import { KeycloakModule } from "./keycloak.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { KeycloakStrategy } from "./strategies/keycloak.strategy";

@Module({
  imports: [KeycloakModule],
  controllers: [AuthController],
  providers: [AuthService, KeycloakStrategy],
  exports: [AuthService],
})
export class AuthModule {}
