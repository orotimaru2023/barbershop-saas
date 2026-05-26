#!/usr/bin/env bash

# Quick setup script for Barbershop SaaS
# Run: bash QUICK_SETUP.sh

set -e

echo "🚀 Barbershop SaaS - Quick Setup"
echo "=================================="
echo ""

# Check prerequisites
echo "📋 Checking prerequisites..."
command -v node >/dev/null 2>&1 || { echo "❌ Node.js not installed"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm not installed"; exit 1; }
command -v git >/dev/null 2>&1 || { echo "❌ git not installed"; exit 1; }
echo "✅ Prerequisites OK"
echo ""

# Clone if not already cloned
if [ ! -d \".git\" ]; then
  echo \"📥 Cloning repository...\"
  git clone https://github.com/orotimaru2023/barbershop-saas .
  echo \"✅ Repository cloned\"
else
  echo \"✅ Already in repository\"
fi
echo \"\"

# Install dependencies
echo \"📦 Installing dependencies...\"
npm install
echo \"✅ Dependencies installed\"
echo \"\"

# Create env file if doesn't exist
if [ ! -f \".env.local\" ]; then
  echo \"📝 Creating .env.local...\"
  cp .env.example .env.local
  echo \"⚠️  Please edit .env.local with your credentials:\"
  echo \"   1. Open .env.local\"
  echo \"   2. Add Supabase URL and keys from supabase.com\"
  echo \"   3. Add Keycloak details from keycloak.cloud\"
  echo \"\"
else
  echo \"✅ .env.local already exists\"
  echo \"\"
fi

echo \"\"
echo \"✅ Setup complete!\"
echo \"\"
echo \"📖 Next steps:\"
echo \"   1. Setup infrastructure: see SETUP_INSTRUCTIONS.md\"
echo \"   2. Add credentials to .env.local\"
echo \"   3. Run: npm run dev\"
echo \"   4. Open: http://localhost:3000\"
echo \"\"
echo \"📚 Documentation:\"
echo \"   - SETUP_INSTRUCTIONS.md - Detailed infrastructure setup\"
echo \"   - PHASE1_CHECKLIST.md - Week-by-week tasks\"
echo \"   - DEVELOPMENT.md - Code conventions\"
echo \"   - README.md - Project overview\"
echo \"\"
