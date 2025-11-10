# Complete Setup Guide - Alexis

Follow these steps to get the Alexis application running on your local machine.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **npm** or **yarn** (comes with Node.js)
- A **Supabase account** ([Sign up free](https://supabase.com))
- A **code editor** (VS Code recommended)
- **Git** installed (optional, if cloning from GitHub)

---

## 🚀 Step 1: Download/Clone the Project

If you downloaded from GitHub:
```bash
cd path/to/downloaded/project
```

If cloning:
```bash
git clone <repository-url>
cd nextjs-app
```

---

## 📦 Step 2: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Supabase, Tailwind, etc.)

**Wait for the installation to complete.** This may take 2-5 minutes.

---

## 🗄️ Step 3: Set Up Supabase Database

### 3.1 Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** or **"New Project"**
3. Sign in with GitHub (or create an account)
4. Click **"New project"**
5. Fill in:
   - **Name**: greta-ai (or any name you like)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to you
6. Click **"Create new project"**
7. Wait 2-3 minutes for the project to be created

### 3.2 Get Your Supabase Credentials

1. In your Supabase project, click **"Settings"** (gear icon in sidebar)
2. Click **"API"** in the left menu
3. You'll see:
   - **Project URL** - Copy this
   - **anon/public** key - Copy this (under "Project API keys")

**Keep these safe - you'll need them in the next step!**

### 3.3 Run Database Migrations

1. In Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste the first migration file content from `supabase/migrations/20251110101215_create_site_generator_schema.sql`
4. Click **"Run"** button
5. Repeat for the second migration: `supabase/migrations/20251110105203_create_prompt_generation_schema.sql`

**Alternatively**, if you have the Supabase CLI installed:
```bash
supabase db push
```

### 3.4 Verify Database Setup

1. In Supabase dashboard, click **"Table Editor"**
2. You should see these tables:
   - `templates`
   - `generated_apps`
   - `prompt_history`

If you see these tables, your database is ready! ✅

---

## 🔐 Step 4: Configure Environment Variables

### 4.1 Create .env File

In the project root directory, create a file named `.env` (note the dot at the beginning):

```bash
# On Windows (Command Prompt)
type nul > .env

# On Windows (PowerShell)
New-Item .env

# On Mac/Linux
touch .env
```

### 4.2 Add Your Credentials

Open the `.env` file in your code editor and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**Replace** `your_supabase_url_here` and `your_supabase_anon_key_here` with the values you copied from Supabase in Step 3.2.

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG0iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjc2ODg2OSwiZXhwIjoxOTQ4MzQ0ODY5fQ.abc123def456
```

**Save the file.**

---

## ▶️ Step 5: Run the Development Server

Now you're ready to run the application!

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.2.33
- Local:        http://localhost:3000
- Network:      http://192.168.1.x:3000

✓ Ready in 2.5s
```

---

## 🌐 Step 6: Open the Application

1. Open your web browser
2. Go to: **http://localhost:3000**
3. You should see the Alexis homepage! 🎉

---

## ✅ Step 7: Test the Features

### Test AI Generation:
1. Click **"Create with AI"** in the navigation
2. Try a prompt like: "Create a modern restaurant website with menu"
3. Click **"Generate Website"**
4. You should see a preview of the generated website
5. Click **"Download HTML"** to save it

### Test Templates:
1. Click **"Templates"** in the navigation
2. Browse the 37+ templates
3. Click on any template card
4. Customize the template settings
5. Download as HTML or WordPress theme

---

## 🔧 Troubleshooting

### "Module not found" Error
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### "Cannot connect to Supabase" Error
- Check that your `.env` file exists in the project root
- Verify the Supabase URL and API key are correct
- Make sure there are no extra spaces in the `.env` file
- Restart the dev server: Press `Ctrl+C` and run `npm run dev` again

### "Tables not found" Error
- Go to Supabase dashboard → SQL Editor
- Run the migration files again
- Check Table Editor to verify tables exist

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or kill the process (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Environment Variables Not Loading
- Make sure `.env` is in the root directory (same level as `package.json`)
- Variables must start with `NEXT_PUBLIC_` to be available in the browser
- Restart the dev server after changing `.env`

---

## 🏗️ Building for Production

When you're ready to deploy:

```bash
# Build the static export
npm run build

# The output will be in the 'out' folder
# Upload this folder to any static hosting service
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

## 📁 Project Structure

```
greta-ai/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── create/            # AI generation page
│   ├── generate/          # Templates page
│   └── customize/         # Customization page
├── components/            # React components
├── lib/                   # Utility functions
│   ├── supabase.ts       # Database client
│   ├── templates.ts      # Template definitions
│   ├── prompt-generator.ts  # AI generation
│   └── wordpress-generator.ts  # WordPress export
├── public/               # Static files
├── supabase/            # Database migrations
│   └── migrations/
├── .env                 # Environment variables (create this!)
├── package.json         # Dependencies
└── next.config.js       # Next.js configuration
```

---

## 🎯 Quick Reference

### Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm run start

# Lint code
npm run lint

# Install new package
npm install package-name
```

### Important URLs

- **Local App**: http://localhost:3000
- **Supabase Dashboard**: https://supabase.com/dashboard
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

## 🆘 Getting Help

If you encounter issues:

1. **Check the error message** carefully - it usually tells you what's wrong
2. **Verify all steps** were completed in order
3. **Check your `.env` file** - most issues are here
4. **Restart the dev server** - many issues are fixed by restarting
5. **Check Supabase dashboard** - verify tables and RLS policies exist

### Common Issues Checklist

- [ ] Node.js 18+ installed? Check with `node --version`
- [ ] Dependencies installed? Run `npm install`
- [ ] `.env` file created in root directory?
- [ ] Supabase credentials correct in `.env`?
- [ ] Database migrations run in Supabase?
- [ ] Tables visible in Supabase Table Editor?
- [ ] Dev server running? `npm run dev`
- [ ] Browser at http://localhost:3000?

---

## 🎉 Success!

If you can:
- ✅ Open http://localhost:3000
- ✅ See the Alexis homepage
- ✅ Generate a website with AI
- ✅ Browse and customize templates

**Congratulations! Your setup is complete!** 🚀

Now you can:
- Explore the different features
- Generate websites with AI prompts
- Customize templates
- Download HTML or WordPress themes
- Deploy to production (see DEPLOYMENT.md)

---

## 🔄 Updating the Project

If you pull new changes from GitHub:

```bash
# Pull latest changes
git pull

# Install any new dependencies
npm install

# Run any new migrations in Supabase
# Check supabase/migrations/ for new files

# Restart dev server
npm run dev
```

---

## 📞 Support

For more information:
- [README.md](./README.md) - Project overview and features
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

---

**Happy building with Alexis! 🎨✨**
