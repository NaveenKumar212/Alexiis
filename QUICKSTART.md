# ⚡ Quick Start - 5 Minutes Setup

Get Alexis running in 5 minutes! Follow these steps in order.

## ✅ Checklist

### Step 1: Install Dependencies (2 min)
```bash
npm install
```
Wait for completion. You should see "added XXX packages".

---

### Step 2: Create Supabase Project (2 min)

1. Go to https://supabase.com
2. Sign up/Login
3. Click "New Project"
4. Name: `greta-ai`
5. Create a password (save it!)
6. Click "Create new project"
7. Wait 2 minutes

---

### Step 3: Get Supabase Credentials (1 min)

In Supabase dashboard:
1. Click ⚙️ **Settings** → **API**
2. Copy **Project URL**
3. Copy **anon public** key

---

### Step 4: Setup Database (1 min)

In Supabase dashboard:
1. Click **SQL Editor**
2. Click **New query**
3. Copy content from `supabase/migrations/20251110101215_create_site_generator_schema.sql`
4. Click **Run**
5. Repeat with `supabase/migrations/20251110105203_create_prompt_generation_schema.sql`

---

### Step 5: Create .env File (1 min)

Create a file named `.env` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_key_here
```

Replace the values with what you copied in Step 3.

---

### Step 6: Run the App! (30 sec)

```bash
npm run dev
```

Open: **http://localhost:3000**

---

## 🎉 Done!

You should see the Alexis homepage.

Try these:
- Click "Create with AI"
- Enter: "Create a restaurant website"
- Click "Generate Website"
- See your AI-generated site!

---

## ❌ Something Wrong?

### Can't connect to Supabase?
- Check `.env` file is in the root folder (next to package.json)
- Verify URL and key are correct (no extra spaces)
- Restart: Press `Ctrl+C`, then `npm run dev`

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Tables not found?
- Go to Supabase → SQL Editor
- Run the migration files again

---

**Need detailed help?** See [SETUP.md](./SETUP.md)

**Ready to deploy?** See [DEPLOYMENT.md](./DEPLOYMENT.md)
