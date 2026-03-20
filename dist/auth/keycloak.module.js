"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakModule = void 0;
const common_1 = require("@nestjs/common");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const config_1 = require("@nestjs/config");
let KeycloakModule = class KeycloakModule {
};
exports.KeycloakModule = KeycloakModule;
exports.KeycloakModule = KeycloakModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_keycloak_connect_1.KeycloakConnectModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    authServerUrl: configService.get('KEYCLOAK_AUTH_SERVER_URL'),
                    realm: configService.get('KEYCLOAK_REALM'),
                    clientId: configService.get('KEYCLOAK_CLIENT_ID'),
                    secret: configService.get('KEYCLOAK_CLIENT_SECRET'),
                    cookieKey: configService.get('KEYCLOAK_COOKIE_ENCRYPTION_PASSWORD'),
                    logLevels: ['warn', 'error', 'debug'],
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [nest_keycloak_connect_1.ResourceGuard, nest_keycloak_connect_1.RoleGuard],
        exports: [nest_keycloak_connect_1.KeycloakConnectModule],
    })
], KeycloakModule);
//# sourceMappingURL=keycloak.module.js.map