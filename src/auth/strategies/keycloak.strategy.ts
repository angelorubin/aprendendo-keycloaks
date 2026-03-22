import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import KeycloakBearerStrategy = require("passport-keycloak-bearer");

@Injectable()
export class KeycloakStrategy extends PassportStrategy(
  KeycloakBearerStrategy,
  "keycloak",
) {
  constructor() {
    super({
      realm: process.env.KEYCLOAK_REALM,
      url: process.env.KEYCLOAK_AUTH_SERVER_URL,
    });
  }

  validate(claims: any) {
    return {
      sub: claims.sub,
      email: claims.email,
      name: claims.name,
      roles: claims.realm_access?.roles || [],
    };
  }
}
