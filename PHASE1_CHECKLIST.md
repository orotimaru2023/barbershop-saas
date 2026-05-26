# Phase 1 - MVP Setup Checklist

## Week 1: Foundation

### Completed ✅
- [x] Next.js project initialized with App Router
- [x] TypeScript, Tailwind, PostCSS configured
- [x] Zustand stores (Auth, Booking) setup
- [x] Database schema created in `supabase/migrations/`
- [x] Project structure organized
- [x] GitHub repository created

### In Progress 🔄
- [ ] **Supabase Setup** (p1w1-001)
  - [ ] Create Supabase project at https://supabase.com
  - [ ] Get project URL and anon key
  - [ ] Add to `.env.local`
  - [ ] Run migrations: `supabase db push`
  - [ ] Enable RLS policies
  - [ ] Test connection with client

- [ ] **Keycloak Setup** (p1w1-003)
  - [ ] Create Keycloak account/instance
  - [ ] Configure realm: `barbershop`
  - [ ] Create OAuth2 client
  - [ ] Setup roles: owner, admin, barber, client
  - [ ] Add to `.env.local`

- [ ] **Database Schema** (p1w1-004)
  - [ ] Execute SQL migrations
  - [ ] Verify tables created
  - [ ] Add sample data
  - [ ] Test relationships

- [ ] **RLS Policies** (p1w1-005)
  - [ ] Configure policies for users
  - [ ] Setup multi-tenant isolation
  - [ ] Test with different roles

- [ ] **Auth Integration** (p1w1-006)
  - [ ] Keycloak + Supabase token sync
  - [ ] Login/Signup API
  - [ ] JWT handling
  - [ ] Protected routes

### Pending ⏳
- Week 2: Booking features
- Week 3: Dashboards & notifications
- Week 4: Polish & deploy

## Environment Setup

### Required
```bash
# Clone repository
git clone https://github.com/orotimaru2023/barbershop-saas
cd barbershop-saas

# Install dependencies
npm install

# Create env file
cp .env.example .env.local
```

### Credentials to Add
```
NEXT_PUBLIC_SUPABASE_URL=xxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

NEXT_PUBLIC_KEYCLOAK_URL=xxx
NEXT_PUBLIC_KEYCLOAK_REALM=barbershop
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=xxx
KEYCLOAK_CLIENT_SECRET=xxx
```

## Run Dev Server

```bash
npm run dev
# Open http://localhost:3000
```

## Database Operations

```bash
# Initialize Supabase locally (optional)
supabase init

# Push migrations
supabase db push

# Pull latest schema
supabase db pull
```

## Next Critical Path

**Week 1 → Week 2:** Once Supabase + Keycloak are live:
1. Create booking form component
2. Add calendar selector
3. Implement service/barber selection
4. Build booking API endpoint
5. Test end-to-end booking flow

## Support

See `DEVELOPMENT.md` for full guide.
