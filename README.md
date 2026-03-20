# Nest.js + Keycloak Example

Este é um exemplo mínimo e funcional de integração entre Nest.js e Keycloak.

## Configuração do Ambiente

1. **Instale as dependências:**
   ```bash
   yarn install
   ```

2. **Configure as variáveis de ambiente:**
   Copie o arquivo `.env` e ajuste as configurações do seu Keycloak:
   ```env
   KEYCLOAK_REALM=master
   KEYCLOAK_CLIENT_ID=nestjs-app
   KEYCLOAK_CLIENT_SECRET=your-client-secret
   KEYCLOAK_AUTH_SERVER_URL=http://localhost:8080/auth
   KEYCLOAK_COOKIE_ENCRYPTION_PASSWORD=your-encryption-password
   PORT=3000
   NODE_ENV=development
   ```

## Configuração do Keycloak

1. **Crie um realm** no Keycloak (ex: "nestjs-realm")
2. **Crie um client** com as seguintes configurações:
   - Client ID: `nestjs-app`
   - Access Type: `confidential`
   - Standard Flow Enabled: ON
   - Direct Access Grants Enabled: ON
3. **Copie o client secret** gerado e adicione ao `.env`
4. **Crie alguns usuários e roles** para teste

## Endpoints Disponíveis

### Rotas Públicas
- `GET /public` - Acesso livre, sem autenticação
- `GET /auth/login` - Redireciona para o login do Keycloak

### Rotas Protegidas
- `GET /protected` - Requer autenticação
- `GET /auth/profile` - Retorna informações do usuário autenticado
- `GET /auth/logout` - Logout do usuário
- `GET /admin` - Requer role de admin (se configurado)

## Como Executar

1. **Inicie o servidor:**
   ```bash
   yarn start:dev
   ```

2. **Teste os endpoints:**
   - Acesse `http://localhost:3000/public` (deve funcionar)
   - Acesse `http://localhost:3000/protected` (deve redirecionar para login)
   - Após login, acesse `http://localhost:3000/auth/profile` (deve mostrar dados do usuário)

## Estrutura do Projeto

```
src/
├── app.controller.ts          # Controller principal com exemplos de rotas
├── app.module.ts             # Módulo principal da aplicação
├── main.ts                   # Ponto de entrada da aplicação
└── auth/
    ├── auth.module.ts        # Módulo de autenticação
    ├── auth.controller.ts    # Controller de autenticação
    ├── auth.service.ts       # Serviço de autenticação
    ├── keycloak.module.ts    # Configuração do Keycloak
    ├── decorators/
    │   └── public.decorator.ts # Decorator para rotas públicas
    ├── guards/
    │   └── keycloak-auth.guard.ts # Guard de autenticação
    └── strategies/
        └── keycloak.strategy.ts   # Estratégia de autenticação
```

## Observações

- Este exemplo utiliza cookies para manter a sessão do usuário
- O guard `KeycloakAuthGuard` protege automaticamente as rotas que não possuem o decorator `@Public()`
- Para testes locais, você pode usar Docker para rodar o Keycloak:
  ```bash
  docker run -p 8080:8080 quay.io/keycloak/keycloak:latest start-dev
  ```
