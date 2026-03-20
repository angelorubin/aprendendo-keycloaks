"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const KeycloakBearerStrategy = require("passport-keycloak-bearer");
let KeycloakStrategy = class KeycloakStrategy extends (0, passport_1.PassportStrategy)(KeycloakBearerStrategy, "keycloak") {
    constructor() {
        super({
            realm: process.env.KEYCLOAK_REALM,
            url: process.env.KEYCLOAK_AUTH_SERVER_URL,
        });
    }
    validate(claims) {
        return {
            sub: claims.sub,
            email: claims.email,
            name: claims.name,
            roles: claims.realm_access?.roles || [],
        };
    }
};
exports.KeycloakStrategy = KeycloakStrategy;
exports.KeycloakStrategy = KeycloakStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], KeycloakStrategy);
//# sourceMappingURL=keycloak.strategy.js.map