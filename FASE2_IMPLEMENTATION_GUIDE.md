# 🚀 Phase 2: Implementation Guide

**Status:** Ready for Implementation  
**Last Updated:** 2026-05-26  
**Credentials Status:** ✅ Supabase configured

---

## 📋 Quick Checklist

- [ ] **1. Apply SQL Migrations** (Supabase Dashboard)
- [ ] **2. Configure RLS Policies** (Supabase Dashboard)
- [ ] **3. Test Supabase Connection** (npm run dev)
- [ ] **4. Setup Keycloak** (Docker or Cloud)
- [ ] **5. Configure OAuth2** (Keycloak + Next.js)
- [ ] **6. Build Booking Components** (Week 2)

---

## 🔧 STEP 1: Apply SQL Migrations (5 minutes)

### Where: Supabase Dashboard

1. **Open Dashboard:**
   ```
   https://app.supabase.com
   → Select project "lzkohjylxbovrvckhalt"
   ```

2. **Go to SQL Editor:**
   ```
   Left sidebar → "SQL Editor"
   → Click "New Query"
   ```

3. **Copy Full SQL Migration:**
   ```
   File: supabase/migrations/20260526_initial_schema.sql
   ```

4. **Paste into Supabase SQL Editor & Click "Run"**

5. **Verify Success:**
   - Should see: "Queries executed successfully"
   - Go to "Table Editor" → See all 13 tables

### 13 Tables Created:
✅ barbershops  
✅ barbers  
✅ services  
✅ bookings  
✅ clients  
✅ pricing  
✅ barber_schedules  
✅ cut_history  
✅ notifications  
✅ user_roles  
✅ barbershop_settings  
✅ daily_revenue  

---

## 🔒 STEP 2: Configure RLS Policies (10 minutes)

### What: Row-Level Security - Ensure multi-tenant isolation

**Go to:** Supabase Dashboard → Authentication → Policies

### Apply These 4 Policies:

#### Policy 1: Barbers (read own barbershop)
```sql
SELECT auth.uid() IN (
  SELECT user_id FROM barbers 
  WHERE barbershop_id = barbershops.id
)
```
- Table: `barbers`
- Operation: SELECT
- For Role: `authenticated`

#### Policy 2: Bookings (read own barbershop)
```sql
SELECT EXISTS (
  SELECT 1 FROM user_roles
  WHERE user_roles.keycloak_user_id = auth.uid()
  AND user_roles.barbershop_id = bookings.barbershop_id
)
```
- Table: `bookings`
- Operation: SELECT, INSERT, UPDATE
- For Role: `authenticated`

#### Policy 3: Clients (read own barbershop)
```sql
SELECT barbershop_id IN (
  SELECT barbershop_id FROM user_roles
  WHERE keycloak_user_id = auth.uid()
)
```
- Table: `clients`
- Operation: SELECT
- For Role: `authenticated`

#### Policy 4: Anonymous booking (create bookings without auth)
```sql
SELECT true
```
- Table: `bookings`
- Operation: INSERT
- For Role: `anon`

---

## 🧪 STEP 3: Test Supabase Connection (5 minutes)

### Terminal:
```bash
cd barbershop-saas
npm install
npm run dev
```

### In Another Terminal:
```bash
curl http://localhost:3000/api/health
```

### Expected Response:
```json
{
  "status": "ok",
  "database": "connected",
  "tables_accessible": true,
  "timestamp": "2026-05-26T17:00:00.000Z"
}
```

If you see this → ✅ **Supabase fully connected!**

---

## 🔐 STEP 4: Setup Keycloak (15 minutes)

### Option A: Docker (Recommended for Dev)

```bash
docker run -d \
  -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest \
  start-dev
```

Wait 40 seconds, then:
```
http://localhost:8080/admin
Login: admin / admin
```

### Option B: Cloud (keycloak.cloud - $30-100/month)

```
https://keycloak.cloud
→ Create Account
→ Create Realm
```

---

## 🔑 STEP 5: Configure OAuth2 (20 minutes)

### In Keycloak Admin Console:

#### 5.1 Create Realm
```
Left menu → "Create Realm"
Name: barbershop
Enabled: Yes
```

#### 5.2 Create Client
```
Left menu → Clients → "Create client"
Client ID: barbershop-web
Client Protocol: openid-connect
```

#### 5.3 Client Settings
```
Access Type: public
Valid Redirect URIs: http://localhost:3000/api/auth/callback
Web Origins: http://localhost:3000
```

#### 5.4 Create Roles
```
Realm Roles → "Create role"
- owner
- admin
- barber
- client
```

#### 5.5 Get Client Credentials

In Keycloak, under your client settings:
- Copy: **Client ID** (barbershop-web)
- Note: **Realm Name** (barbershop)
- URL: **Keycloak URL** (http://localhost:8080 or your cloud URL)

---

## ⚙️ STEP 6: Update .env.local

```env
NEXT_PUBLIC_KEYCLOAK_URL=http://localhost:8080
NEXT_PUBLIC_KEYCLOAK_REALM=barbershop
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=barbershop-web
KEYCLOAK_CLIENT_SECRET=<get-from-keycloak-client-credentials>
```

---

## ✅ STEP 7: Test Full Integration

### Start App:
```bash
npm run dev
```

### Verify:
1. Homepage loads → ✅
2. API health check passes → ✅
3. Can see Keycloak login button → ✅
4. Can create a bookings (anonymous) → ✅

---

## 📚 What's Next (Week 2 Tasks)

- [ ] Build booking form component
- [ ] Implement calendar picker
- [ ] Create barber selection flow
- [ ] Build booking confirmation
- [ ] Setup WhatsApp notifications
- [ ] Create barber dashboard
- [ ] Implement earnings analytics

---

## 🆘 Troubleshooting

### "Tables not accessible"
→ Check RLS policies (Step 2)
→ Verify `auth.uid()` is set

### "Keycloak not connecting"
→ Check URL in .env.local
→ Verify realm name matches
→ Check redirect URIs in Keycloak

### "CORS errors"
→ In Keycloak: Add Web Origins
→ In Supabase: Check allowed origins

---

## 📞 Status Tracking

| Task | Status | Done By |
|------|--------|---------|
| SQL Migrations | Ready | User |
| RLS Policies | Ready | User |
| Connection Test | Ready | User |
| Keycloak Setup | Ready | User |
| OAuth2 Config | Ready | User |
| Phase 1 Complete | ✅ | Done |

**Current Phase:** Ready for Phase 2 development  
**Estimated Time to Complete:** 1-2 hours  
**Next Review:** After Keycloak setup
