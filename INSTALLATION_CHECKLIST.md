# 📋 Installation Checklist

Print this or keep it open while setting up Alexis.

---

## Before You Start

- [ ] Node.js 18+ installed
  - Check: Open terminal and type `node --version`
  - Should show: v18.x.x or higher
  - If not: Download from [nodejs.org](https://nodejs.org)

- [ ] Code editor installed (VS Code recommended)
  - Download from [code.visualstudio.com](https://code.visualstudio.com)

- [ ] Project downloaded/cloned from GitHub
  - Location: ___________________________________

---

## Step 1: Install Dependencies ⏱️ 2-5 minutes

- [ ] Open terminal in project folder
- [ ] Run command: `npm install`
- [ ] Wait for "added XXX packages" message
- [ ] No errors shown (red text is okay for warnings)

**✅ Check:** You should see a `node_modules` folder appear

---

## Step 2: Create Supabase Account ⏱️ 2 minutes

- [ ] Go to [supabase.com](https://supabase.com)
- [ ] Click "Start your project"
- [ ] Sign up with GitHub (or email)
- [ ] Verify email if needed

**✅ Check:** You can see the Supabase dashboard

---

## Step 3: Create Supabase Project ⏱️ 3 minutes

- [ ] Click "New project" button
- [ ] Fill in project details:
  - [ ] Name: `greta-ai` (or your choice)
  - [ ] Database Password: _________________________ (SAVE THIS!)
  - [ ] Region: Choose closest to you
- [ ] Click "Create new project"
- [ ] Wait for project to initialize (2-3 min)

**✅ Check:** Project shows "Active" status with green dot

---

## Step 4: Get API Credentials ⏱️ 1 minute

In your Supabase project:

- [ ] Click ⚙️ Settings (bottom left)
- [ ] Click "API" in left menu
- [ ] Copy and save:

**Project URL:**
```
_________________________________________________
```

**anon/public key:** (long string starting with "eyJ...")
```
_________________________________________________
```

**✅ Check:** You have both values saved somewhere safe

---

## Step 5: Setup Database ⏱️ 2 minutes

In Supabase dashboard:

- [ ] Click "SQL Editor" in left sidebar
- [ ] Click "+ New query" button

**First Migration:**
- [ ] Open file: `supabase/migrations/20251110101215_create_site_generator_schema.sql`
- [ ] Copy all content
- [ ] Paste into SQL Editor
- [ ] Click "Run" button (or press Ctrl/Cmd + Enter)
- [ ] Should say "Success. No rows returned"

**Second Migration:**
- [ ] Click "+ New query" button again
- [ ] Open file: `supabase/migrations/20251110105203_create_prompt_generation_schema.sql`
- [ ] Copy all content
- [ ] Paste into SQL Editor
- [ ] Click "Run" button
- [ ] Should say "Success. No rows returned"

**Verify:**
- [ ] Click "Table Editor" in left sidebar
- [ ] You should see these tables:
  - [ ] `templates`
  - [ ] `generated_apps`
  - [ ] `prompt_history`

**✅ Check:** All 3 tables are visible

---

## Step 6: Create .env File ⏱️ 2 minutes

- [ ] Open project in your code editor
- [ ] Create new file named `.env` in the root folder
  - (Same level as `package.json`)
- [ ] Add this content:

```env
NEXT_PUBLIC_SUPABASE_URL=paste_url_from_step_4
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_key_from_step_4
```

- [ ] Replace the values with your actual Supabase credentials
- [ ] Remove any extra spaces
- [ ] Save the file

**✅ Check:**
- [ ] File is named exactly `.env` (with the dot)
- [ ] File is in root folder (next to package.json)
- [ ] No extra spaces in the values

---

## Step 7: Start the Application ⏱️ 30 seconds

- [ ] Open terminal in project folder
- [ ] Run command: `npm run dev`
- [ ] Wait for "Ready in X.Xs" message
- [ ] Should show: "Local: http://localhost:3000"

**✅ Check:** No error messages in red

---

## Step 8: Test the Application ⏱️ 2 minutes

- [ ] Open browser
- [ ] Go to: `http://localhost:3000`
- [ ] You should see the Alexis homepage

**Test Features:**

- [ ] **Homepage loads** - You see "Build Beautiful Websites Instantly"
- [ ] Click **"Create with AI"** button
  - [ ] Page loads (black background, prompt input)
- [ ] Type: "Create a restaurant website"
- [ ] Click **"Generate Website"**
  - [ ] Shows "Generating..." loading state
  - [ ] Preview appears (iframe with generated site)
  - [ ] "Download HTML" button works
- [ ] Click **"Templates"** in navigation
  - [ ] Template cards appear
- [ ] Everything works! 🎉

**✅ Check:** All features working

---

## 🎯 Final Verification

Your setup is complete if:

- [ ] ✅ `npm run dev` starts without errors
- [ ] ✅ http://localhost:3000 opens and shows homepage
- [ ] ✅ Can generate websites with AI prompts
- [ ] ✅ Can browse and view templates
- [ ] ✅ Can download generated HTML files
- [ ] ✅ No console errors (F12 → Console tab)

---

## ❌ Troubleshooting

### Issue: "Cannot connect to Supabase"

- [ ] Check `.env` file exists in root folder
- [ ] Verify URL and key are correct (no typos)
- [ ] Make sure values don't have quotes around them
- [ ] Restart dev server (Ctrl+C, then `npm run dev`)

### Issue: "Tables not found"

- [ ] Go to Supabase → Table Editor
- [ ] Verify all 3 tables exist
- [ ] If not, re-run migration files in SQL Editor

### Issue: "Port 3000 already in use"

- [ ] Run on different port: `npm run dev -- -p 3001`
- [ ] Or kill process using port 3000:
  - Mac/Linux: `lsof -ti:3000 | xargs kill -9`
  - Windows: `netstat -ano | findstr :3000` then `taskkill /PID <number> /F`

### Issue: "Module not found"

- [ ] Delete `node_modules` folder
- [ ] Delete `package-lock.json` file
- [ ] Run `npm install` again

### Issue: Changes in .env not working

- [ ] Stop server (Ctrl+C)
- [ ] Restart: `npm run dev`
- [ ] Environment variables need server restart

---

## 📞 Still Need Help?

Check these files in your project:

- **[SETUP.md](./SETUP.md)** - Detailed setup with explanations
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick 5-minute guide
- **[README.md](./README.md)** - Project overview
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - How to deploy

---

## ✅ Success!

**Congratulations!** 🎉

Your Alexis application is running!

**What's Next?**

- Explore the AI generation feature
- Try different prompt examples
- Browse and customize templates
- When ready, see [DEPLOYMENT.md](./DEPLOYMENT.md) to publish online

---

**Setup Date:** _______________

**Setup Time:** _______________ minutes

**Notes:**
_________________________________________________
_________________________________________________
_________________________________________________
