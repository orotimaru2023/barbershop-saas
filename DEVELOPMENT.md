# Barbershop SaaS - Development Guide

## Phase 1: MVP (Weeks 1-4)

### Week 1: Setup
- [ ] Supabase project + database schema
- [ ] Keycloak authentication
- [ ] Next.js project structure
- [ ] Database RLS policies

### Week 2: Booking Features
- [ ] Booking form UI
- [ ] Calendar component
- [ ] Services/Barbers management
- [ ] Booking API endpoints

### Week 3: Dashboards & Notifications
- [ ] Email notifications (Resend)
- [ ] Barber dashboard
- [ ] Cancellation flow
- [ ] Earnings tracking

### Week 4: Polish & Deploy
- [ ] Admin dashboard
- [ ] Dashboard charts
- [ ] QA testing
- [ ] Deploy to staging/production

## Stack

- **Frontend**: Next.js 15 + Shadcn + Tailwind
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **Auth**: Keycloak Cloud
- **Deploy**: Vercel
- **Email**: Resend
- **DB**: PostgreSQL (Supabase)

## Getting Started

```bash
# Clone repo
git clone https://github.com/orotimaru2023/barbershop-saas
cd barbershop-saas

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Add your Supabase & Keycloak credentials

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Database

See `supabase/migrations/` for schema.

## Deployment

1. Push to main branch
2. Vercel auto-deploys
3. Check health at `/api/health`
