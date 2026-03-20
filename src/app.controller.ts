import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { Public } from "./auth/decorators/public.decorator";
import { KeycloakAuthGuard } from "./auth/guards/keycloak-auth.guard";

@Controller()
export class AppController {
  @Get()
  @Public()
  getRoot(): string {
    return "Welcome to Keycloak NestJS App! Available routes: /public, /protected, /admin";
  }

  @Get("public")
  @Public()
  getPublicRoute(): string {
    return "This is a public route - no authentication required";
  }

  @Get("protected")
  @UseGuards(KeycloakAuthGuard)
  getProtectedRoute(@Request() req): any {
    return {
      message: "This is a protected route - authentication required",
      user: req.user,
    };
  }

  @Get("admin")
  @UseGuards(KeycloakAuthGuard)
  getAdminRoute(@Request() req): any {
    return {
      message: "This is an admin route - admin role required",
      user: req.user,
    };
  }
}
