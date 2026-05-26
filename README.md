# 💈 Barbershop SaaS

**Modern platform for barbershop scheduling with web booking + WhatsApp bot integration**

![Status](https://img.shields.io/badge/status-Phase%201%20MVP-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20Supabase%20%7C%20Keycloak-purple)

## Features

### 📅 Booking Management
- Web-based booking form with calendar
- Select service, barber, date, and time
- Real-time availability updates
- Booking confirmation via email
- Booking cancellation with notifications

### 👨‍💼 Barber Dashboard
- View daily/weekly/monthly schedule
- Mark haircuts as completed
- Track earnings per cut/day/month/year
- View client history
- Manage availability

### 📊 Admin Dashboard
- Business KPIs (revenue, bookings, occupancy)
- Earnings tracking per barber
- Service management
- Barber management
- Schedule configuration

### 💬 WhatsApp Bot (Phase 2)
- Natural language booking via WhatsApp
- Appointment reminders
- Cancellation handling
- Status updates

### 🔐 Security
- Role-based access control (owner, admin, barber, client)
- Row-Level Security in database
- OAuth2 authentication
- Multi-tenant data isolation

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js 15 + React 19 + TypeScript |
| **Styling** | Tailwind CSS + Shadcn/UI |
| **Backend** | Supabase (PostgreSQL + Edge Functions) |
| **Database** | PostgreSQL with RLS policies |
| **Auth** | Keycloak (OAuth2/OpenID Connect) |
| **State** | Zustand |
| **Deployment** | Vercel |
| **Email** | Resend (Phase 2) |
| **AI/Bot** | LangGraph + WhatsApp MCP (Phase 2) |

## Quick Start

### Prerequisites
- Node.js 18+
- Supabase account
- Keycloak instance
- Git

### Installation

```bash
# Clone repo
git clone https://github.com/orotimaru2023/barbershop-saas
cd barbershop-saas

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Fill in Supabase & Keycloak credentials

# Run dev server
npm run dev
```

Open http://localhost:3000

## Setup Guide

1. **[Setup Instructions](./SETUP_INSTRUCTIONS.md)** - Detailed infrastructure setup
2. **[Phase 1 Checklist](./PHASE1_CHECKLIST.md)** - Week-by-week tasks
3. **[Development Guide](./DEVELOPMENT.md)** - Code structure & conventions

## Project Structure

```
barbershop-saas/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utilities (Supabase client, etc.)
│   ├── store/            # Zustand state management
│   ├── types/            # TypeScript interfaces
│   └── pages/api/        # API routes
├── supabase/
│   ├── migrations/       # SQL database schemas
│   └── config.ts         # Supabase configuration
├── public/               # Static assets
├── SETUP_INSTRUCTIONS.md # Detailed setup
├── PHASE1_CHECKLIST.md   # Task checklist
├── DEVELOPMENT.md        # Development guide
└── package.json          # Dependencies
```

## Roadmap

### Phase 1: MVP (Weeks 1-4) ✅ In Progress
- [x] Project setup & database schema
- [ ] Supabase infrastructure
- [ ] Keycloak authentication
- [ ] Web booking form
- [ ] Email notifications
- [ ] Barber dashboard
- [ ] Admin dashboard
- [ ] Deploy to production

### Phase 2: AI & Notifications (Weeks 5-6)
- [ ] WhatsApp MCP integration
- [ ] LangGraph conversation flow
- [ ] WhatsApp bot booking
- [ ] SMS notifications
- [ ] Langfuse analytics

### Phase 3: Advanced Features (Weeks 7-12)
- [ ] Multi-barbershop support
- [ ] Payment processing (Stripe)
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] AI recommendations

## API Endpoints (Phase 1)

```
GET  /api/services              - List services
GET  /api/barbers               - List barbers
GET  /api/availability          - Available slots
POST /api/bookings              - Create booking
GET  /api/bookings/:id          - Get booking
PUT  /api/bookings/:id          - Update booking
DELETE /api/bookings/:id        - Cancel booking
GET  /api/dashboard             - Admin KPIs
GET  /api/earnings/:barber_id   - Barber earnings
```

## Database Schema

Key tables:
- `barbershops` - Business entity
- `barbers` - Employees with schedules
- `services` - Service offerings
- `bookings` - Appointments (core)
- `clients` - Customer records
- `pricing` - Price variations
- `cut_history` - Analytics
- `notifications` - Delivery logs

**Security:** Row-Level Security (RLS) enforces multi-tenant isolation at database level.

## Environment Variables

See `.env.example`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Keycloak
NEXT_PUBLIC_KEYCLOAK_URL=https://xxx.keycloak.cloud
NEXT_PUBLIC_KEYCLOAK_REALM=barbershop
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=xxx
KEYCLOAK_CLIENT_SECRET=xxx
```

## Cost Estimates

**MVP (Single Barbershop):**
- Supabase: $25-50/month
- Vercel: Free-50/month
- Keycloak: $30-100/month
- **Total: ~$95-200/month**

**At Scale (10k+ Users):**
- Services: ~$450-850/month
- Add: Stripe ($25), Resend ($25)

## Development

### Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run linter
npm run type-check   # TypeScript check
```

### Database

```bash
supabase db push     # Apply migrations
supabase db pull     # Download schema
```

### Deployment

```bash
# Push to main branch
git push origin main

# Vercel auto-deploys
# Check: https://vercel.com
```

## Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/booking-improvements`
3. Commit changes: `git commit -m "Add booking feature"`
4. Push: `git push origin feature/booking-improvements`
5. Open Pull Request

## License

MIT License - see LICENSE file for details

## Support

For setup help:
1. Check [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
2. Review [DEVELOPMENT.md](./DEVELOPMENT.md)
3. Check GitHub Issues

## Contact

- GitHub: [@orotimaru2023](https://github.com/orotimaru2023)
- Issues: [GitHub Issues](https://github.com/orotimaru2023/barbershop-saas/issues)

---

**Made with ❤️ for barbershop owners worldwide**
