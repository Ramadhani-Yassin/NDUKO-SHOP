# 🚀 CORRECT Deployment Guide for NDUKO-SHOP

## ❌ What Went Wrong:
You deployed the ENTIRE Laravel project to Vercel, but Vercel can only host static files (Vue frontend), not PHP/Laravel backend.

## ✅ Correct Architecture:

### Frontend (Vue.js) → Vercel
### Backend (Laravel + MySQL) → Railway

---

## 🔧 STEP 1: Fix Vercel Deployment (Frontend Only)

### 1.1 Update Vercel Project Settings:
1. Go to your Vercel dashboard
2. Select your project: `nduko-shop`
3. Go to **Settings** → **General**
4. Update these settings:
   - **Framework Preset**: `Other`
   - **Build Command**: `npm run build`
   - **Output Directory**: `public`
   - **Install Command**: `npm install`

### 1.2 Add Environment Variable:
1. Go to **Settings** → **Environment Variables**
2. Add new variable:
   - **Name**: `VITE_APP_URL`
   - **Value**: `https://your-railway-backend.railway.app` (you'll get this from Railway)

### 1.3 Redeploy:
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment

---

## 🚂 STEP 2: Deploy Backend to Railway

### 2.1 Create Railway Account:
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Connect your GitHub account

### 2.2 Deploy Laravel Backend:
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose **"Ramadhani-Yassin/NDUKO-SHOP"**
4. Railway will automatically detect it's a Laravel project

### 2.3 Add MySQL Database:
1. In your Railway project, click **"New"**
2. Select **"Database"** → **"MySQL"**
3. Railway will create a MySQL database

### 2.4 Configure Environment Variables:
Go to your Laravel service → **Variables** tab and add:

```
APP_NAME=Nduko-Shop
APP_ENV=production
APP_KEY=base64:2XWcOdaa6qw03l0kK0voUneZr3t1yl2uTIeh/ARTr7E=
APP_DEBUG=false
APP_URL=https://your-railway-app.railway.app

DB_CONNECTION=mysql
DB_HOST=your-mysql-host.railway.internal
DB_PORT=3306
DB_DATABASE=railway
DB_USERNAME=root
DB_PASSWORD=your-mysql-password
```

### 2.5 Run Database Migrations:
1. Go to your Laravel service → **Deployments**
2. Click on the latest deployment
3. Go to **"View Logs"**
4. Run these commands in the Railway console:
```bash
php artisan migrate --force
php artisan db:seed --force
```

---

## 🔗 STEP 3: Connect Frontend to Backend

### 3.1 Update Vercel Environment Variable:
1. Go back to Vercel → your project → **Settings** → **Environment Variables**
2. Update `VITE_APP_URL` with your Railway backend URL
3. Redeploy your Vercel project

### 3.2 Test the Connection:
- **Frontend**: `https://nduko-shop.vercel.app`
- **Backend API**: `https://your-railway-app.railway.app`

---

## 🎯 Final Result:
- ✅ **Frontend (Vue)**: Hosted on Vercel (static files)
- ✅ **Backend (Laravel)**: Hosted on Railway (PHP server)
- ✅ **Database (MySQL)**: Hosted on Railway
- ✅ **Total Cost**: $0/month

---

## 🆘 Need Help?
If you get stuck, share your Railway backend URL and I'll help you configure the connection!
