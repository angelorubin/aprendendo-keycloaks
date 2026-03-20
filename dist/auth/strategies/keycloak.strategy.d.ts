import KeycloakBearerStrategy = require("passport-keycloak-bearer");
declare const KeycloakStrategy_base: new (...args: [opt: KeycloakBearerStrategy.Options & {
    passReqToCallback: true;
}, verify: VerifyCallbackWithRequest] | [options: KeycloakBearerStrategy.Options, verify?: VerifyCallback] | [opt: KeycloakBearerStrategy.Options & {
    passReqToCallback: false;
}, verify: VerifyCallback] | [opt: KeycloakBearerStrategy.Options & {
    passReqToCallback: true;
}] | [opt: KeycloakBearerStrategy.Options & {
    passReqToCallback: false;
}]) => KeycloakBearerStrategy & {
    validate(...args: any[]): unknown;
};
export declare class KeycloakStrategy extends KeycloakStrategy_base {
    constructor();
    validate(claims: any): {
        sub: any;
        email: any;
        name: any;
        roles: any;
    };
}
export {};
