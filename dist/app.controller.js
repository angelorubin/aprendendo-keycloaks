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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("./auth/decorators/public.decorator");
const keycloak_auth_guard_1 = require("./auth/guards/keycloak-auth.guard");
let AppController = class AppController {
    getRoot() {
        return "Welcome to Keycloak NestJS App! Available routes: /public, /protected, /admin";
    }
    getPublicRoute() {
        return "This is a public route - no authentication required";
    }
    getProtectedRoute(req) {
        return {
            message: "This is a protected route - authentication required",
            user: req.user,
        };
    }
    getAdminRoute(req) {
        return {
            message: "This is an admin route - admin role required",
            user: req.user,
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getRoot", null);
__decorate([
    (0, common_1.Get)("public"),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getPublicRoute", null);
__decorate([
    (0, common_1.Get)("protected"),
    (0, common_1.UseGuards)(keycloak_auth_guard_1.KeycloakAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getProtectedRoute", null);
__decorate([
    (0, common_1.Get)("admin"),
    (0, common_1.UseGuards)(keycloak_auth_guard_1.KeycloakAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getAdminRoute", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map