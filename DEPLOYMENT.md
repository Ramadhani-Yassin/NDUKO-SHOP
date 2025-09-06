# NDUKO-SHOP Deployment Guide

## 🚀 Free Hosting Setup

### Backend (Laravel + MySQL) - Railway
### Frontend (Vue) - Vercel

## Step 1: Deploy Backend to Railway

1. **Sign up for Railway**: https://railway.app
2. **Connect GitHub**: Link your GitHub account
3. **Create New Project**: 
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose "Ramadhani-Yassin/NDUKO-SHOP"

4. **Add MySQL Database**:
   - In your Railway project, click "New"
   - Select "Database" → "MySQL"
   - Railway will provide connection details

5. **Configure Environment Variables**:
   ```
   APP_NAME=Nduko-Shop
   APP_ENV=production
   APP_KEY=base64:your-generated-key
   APP_DEBUG=false
   APP_URL=https://your-railway-app.railway.app
   
   DB_CONNECTION=mysql
   DB_HOST=your-mysql-host
   DB_PORT=3306
   DB_DATABASE=railway
   DB_USERNAME=root
   DB_PASSWORD=your-mysql-password
   ```

6. **Deploy**: Railway will automatically deploy your Laravel app

## Step 2: Deploy Frontend to Vercel

1. **Sign up for Vercel**: https://vercel.com
2. **Connect GitHub**: Link your GitHub account
3. **Import Project**:
   - Click "New Project"
   - Import "Ramadhani-Yassin/NDUKO-SHOP"
   - Framework Preset: "Other"
   - Root Directory: "./"

4. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `public`
   - Install Command: `npm install`

5. **Environment Variables**:
   ```
   VITE_APP_URL=https://your-railway-app.railway.app
   ```

## Step 3: Database Migration

1. **Access Railway Console**:
   - Go to your Railway project
   - Click on your Laravel service
   - Go to "Deployments" → "View Logs"

2. **Run Migrations**:
   ```bash
   php artisan migrate --force
   php artisan db:seed --force
   ```

## Step 4: Update Frontend API URL

Update your Vue components to use the Railway backend URL instead of localhost.

## 🎉 Your app will be live at:
- **Frontend**: https://your-vercel-app.vercel.app
- **Backend API**: https://your-railway-app.railway.app

## Free Tier Limits:
- **Railway**: 500 hours/month, 1GB MySQL storage
- **Vercel**: Unlimited static hosting
- **Total Cost**: $0/month
