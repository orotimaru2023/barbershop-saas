# ⚡ Quick Start: Configurar Supabase (45 minutos)

## 🎯 Objetivo
Criar projeto Supabase, aplicar migrations e testar conexão.

---

## PASSO 1: Criar Conta Supabase (5 min)

### Se não tem conta:
1. Abra: https://supabase.com
2. Clique "Sign Up"
3. Use GitHub / Google / Email
4. Confirme email
5. ✅ Pronto!

### Se já tem:
1. Faça login: https://supabase.com/auth/signin
2. Vá para dashboard
3. ✅ Continue para Passo 2

---

## PASSO 2: Criar Novo Projeto (5 min)

1. No dashboard, clique **"New Project"** (botão azul)
2. Preencha:
   - **Name:** `barbershop-saas` (ou seu nome)
   - **Database Password:** Gere uma senha forte (copie para depois!)
   - **Region:** `South America (São Paulo)` se possível
   - **Pricing:** `Free` (para MVP)
3. Clique **"Create new project"**
4. ⏳ Espere 5-10 minutos (vai inicializar database)
5. ✅ Quando terminar, vai mostrar "Your project is ready"

---

## PASSO 3: Copiar Credenciais (5 min)

Quando o projeto estiver pronto:

1. Na barra lateral esquerda, clique **"Settings"**
2. Clique **"API"**
3. Você vai ver:

```
Project URL: https://xxx.supabase.co
Anon public key: eyJhbGc...
Service role key: eyJhbGc...
```

4. **Copie e guarde** estes 3 valores:
   - `Project URL` → será `NEXT_PUBLIC_SUPABASE_URL`
   - `Anon public key` → será `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `Service role key` → será `SUPABASE_SERVICE_ROLE_KEY`

---

## PASSO 4: Aplicar Database Schema (15 min)

Agora vamos criar as 13 tabelas necessárias:

1. Na barra lateral, clique **"SQL Editor"**
2. Clique **"New query"**
3. **Copie TODO o conteúdo** de: `supabase/migrations/20260526_initial_schema.sql`
   
   (Ou acesse direto no GitHub:
   https://raw.githubusercontent.com/orotimaru2023/barbershop-saas/main/supabase/migrations/20260526_initial_schema.sql)

4. **Cole no SQL Editor** do Supabase
5. Clique **"Run"** (botão azul)
6. ⏳ Espere executar
7. ✅ Deve mostrar "Queries executed successfully"

### Verificar se funcionou:
1. Na barra lateral, clique **"Table Editor"**
2. Deve listar 13 tabelas:
   - barbershops
   - barbers
   - services
   - bookings
   - clients
   - pricing
   - barber_schedules
   - cut_history
   - notifications
   - barbershop_settings
   - daily_revenue
   - user_roles

Se todas aparecem ✅ → Sucesso!

---

## PASSO 5: Configurar .env.local (5 min)

Agora adicionar credenciais ao projeto:

1. Na raiz do projeto, **abra** `.env.local`
   ```bash
   # No seu editor, edite o arquivo
   nano .env.local
   # ou abra com seu editor favorito
   ```

2. **Preencha com os valores do Passo 3:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
   
   # Deixe em branco por enquanto (Keycloak vem depois):
   NEXT_PUBLIC_KEYCLOAK_URL=
   NEXT_PUBLIC_KEYCLOAK_REALM=
   NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=
   KEYCLOAK_CLIENT_SECRET=
   ```

3. **Salve o arquivo**
4. ✅ Pronto!

---

## PASSO 6: Testar Conexão (10 min)

Terminal:
```bash
# 1. Instalar dependências
npm install

# 2. Iniciar dev server
npm run dev
```

Você deve ver:
```
ready - started server on 0.0.0.0:3000
```

Então:
```bash
# 3. Em outro terminal, testar conexão
curl http://localhost:3000/api/health
```

Deve retornar:
```json
{"status":"ok","database":"connected","tables_accessible":true}
```

Se retornar erro, verifique:
- [ ] Supabase project foi criado?
- [ ] Migrations foram aplicadas?
- [ ] Credenciais estão corretas em .env.local?
- [ ] Dev server está rodando?

---

## ✅ CHECKLIST: Supabase Configurado!

- [ ] Conta Supabase criada
- [ ] Novo project criado
- [ ] Credenciais copiadas
- [ ] SQL migrations aplicadas
- [ ] 13 tabelas criadas
- [ ] .env.local preenchido
- [ ] Dev server rodando
- [ ] /api/health retorna OK

**Se tudo marcado:** 🎉 Supabase está funcionando!

---

## 🎯 Próximo: Configurar Keycloak

Quando terminar Supabase, siga: [KEYCLOAK_SETUP.md](./KEYCLOAK_SETUP.md)

---

## 🆘 Troubleshooting

### Problema: "Database connection failed"
- [ ] Verificar .env.local tem valores corretos
- [ ] Verificar se Supabase project está ativo
- [ ] Tentar novamente em 2-3 minutos

### Problema: "Tables not found"
- [ ] Verificar se migrations foram aplicadas
- [ ] Ir a Table Editor e contar tabelas (deve ser 13)
- [ ] Se < 13, recopiar e executar SQL novamente

### Problema: "CORS error"
- [ ] Normal em dev, vai funcionar em produção
- [ ] Pode ignorar por enquanto

---

## 📞 Precisa de ajuda?

1. Releia este guia
2. Verifique [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
3. Abra issue no GitHub

---

**Status:** ✅ Supabase Setup Complete  
**Tempo:** ~45 minutos  
**Próximo:** Keycloak Setup (30 min)

Quer que eu crie o guia de Keycloak também? Clique abaixo!
