# Setup Instructions for Barbershop SaaS

## Infrastructure Setup

### 1. Supabase Project

**Step 1:** Create Supabase account
- Go to https://supabase.com
- Sign up
- Create new project

**Step 2:** Configure database
- Wait for project to initialize
- Go to Project Settings → API
- Copy:
  - `URL` → `NEXT_PUBLIC_SUPABASE_URL`
  - `anon public key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY`

**Step 3:** Apply database schema
- Go to SQL Editor
- Copy contents from `supabase/migrations/20260526_initial_schema.sql`
- Paste and execute
- Verify tables appear in Database tab

**Step 4:** Configure RLS
- Create file `supabase/migrations/20260526_rls_policies.sql`
- Add RLS policies (see section below)
- Execute in SQL Editor

### 2. Keycloak Instance

**Option A: Cloud (Managed)**
- Go to https://www.keycloak.cloud (Keycloak managed service)

**Option B: Self-Hosted** (for local development)
- Docker: `docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak`
- Access: http://localhost:8080

**Step 1:** Configure Realm
- Create realm: `barbershop`
- Navigate to Clients
- Create client: `barbershop-web`
- Copy `Client ID` → `NEXT_PUBLIC_KEYCLOAK_CLIENT_ID`
- Generate client secret → `KEYCLOAK_CLIENT_SECRET`

**Step 2:** Configure Roles
- In Realm Roles, create:
  - `owner`
  - `admin`
  - `barber`
  - `client`

**Step 3:** Set Redirect URIs
- Valid Redirect URIs: `http://localhost:3000/callback`
- Valid Post Logout URIs: `http://localhost:3000`

### 3. Local Environment

**Step 1:** Clone & install
```bash
git clone https://github.com/orotimaru2023/barbershop-saas
cd barbershop-saas
npm install
```

**Step 2:** Configure `.env.local`
```bash
cp .env.example .env.local
```

Fill in:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

NEXT_PUBLIC_KEYCLOAK_URL=https://xxx.keycloak.cloud
NEXT_PUBLIC_KEYCLOAK_REALM=barbershop
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=barbershop-web
KEYCLOAK_CLIENT_SECRET=xxx
```

**Step 3:** Run dev server
```bash
npm run dev
```

Open http://localhost:3000

## Database Schema

**Copy-paste this into Supabase SQL Editor:**

See `supabase/migrations/20260526_initial_schema.sql`

Tables:
- `barbershops` - Barbershop data
- `barbers` - Employee profiles
- `services` - Haircut types
- `bookings` - Appointments (core)
- `clients` - Customer records
- `pricing` - Price variations per barber
- `barber_schedules` - Weekly availability
- `notifications` - Email/SMS/WhatsApp logs
- `user_roles` - RBAC mapping

## Testing Connection

**Create file:** `src/pages/api/health.ts`

```typescript
import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('barbershops').select('count');
    if (error) throw error;
    res.status(200).json({ status: 'ok', database: 'connected' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
}
```

Test: `curl http://localhost:3000/api/health`

## Next Steps

Once infrastructure is running:

1. **Week 2:** Build booking UI
2. **Week 3:** Add notifications
3. **Week 4:** Deploy to production

See `PHASE1_CHECKLIST.md` for detailed tasks.
