#!/bin/bash

echo "🚀 Preparing NDUKO-SHOP for deployment..."

# Generate production app key
echo "📝 Generating production app key..."
php artisan key:generate --show

echo ""
echo "✅ Deployment files created:"
echo "   - railway.json (Railway configuration)"
echo "   - Procfile (Railway process file)"
echo "   - nixpacks.toml (Railway build configuration)"
echo "   - .env.production (Production environment template)"
echo "   - vercel.json (Vercel configuration)"
echo "   - DEPLOYMENT.md (Complete deployment guide)"
echo ""
echo "📋 Next steps:"
echo "   1. Commit these files to your GitHub repository"
echo "   2. Follow the DEPLOYMENT.md guide"
echo "   3. Deploy backend to Railway"
echo "   4. Deploy frontend to Vercel"
echo ""
echo "🔗 Your GitHub repo: https://github.com/Ramadhani-Yassin/NDUKO-SHOP"
