# 📸 Visual Setup Guide

This guide shows you what you should see at each step.

---

## 1️⃣ Install Dependencies

### What to type:
```bash
npm install
```

### What you'll see:
```
npm WARN deprecated ...
added 345 packages, and audited 346 packages in 45s
...
found 0 vulnerabilities
```

✅ **Success looks like:** Message saying "added XXX packages"
❌ **Error looks like:** Red text saying "npm ERR!"

---

## 2️⃣ Supabase Dashboard - Create Project

### What you'll see:

**After creating project:**
- Green "Active" badge
- Project name displayed
- Database URL visible

**Navigation sidebar should show:**
- Table Editor
- SQL Editor
- Database
- Authentication
- Storage
- Edge Functions
- Settings

✅ **Success:** Project status shows green "Active"

---

## 3️⃣ Supabase - Get API Credentials

### Settings → API page shows:

**Project URL section:**
```
https://abcdefghijklm.supabase.co
```

**Project API keys section:**
- `anon` `public` key:
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- `service_role` `secret` key (DON'T use this one!)

✅ **What to copy:**
- The URL (https://.....)
- The `anon public` key (the long eyJ... string)

❌ **Don't copy:**
- The `service_role` key

---

## 4️⃣ Supabase - SQL Editor

### Running migrations:

**SQL Editor should look like:**
```sql
/*
  # Create Site Generator Schema

  1. New Tables
    - `templates`
      ...
*/

CREATE TABLE IF NOT EXISTS templates (
  ...
);
```

**After clicking Run:**
- Green checkmark ✓
- Message: "Success. No rows returned"

✅ **Success:** Green checkmark with "Success" message
❌ **Error:** Red X with error message

---

## 5️⃣ Supabase - Table Editor

### After running migrations:

**Left sidebar shows:**
- 📊 templates (0 rows)
- 📊 generated_apps (0 rows)
- 📊 prompt_history (0 rows)

**Click on any table to see:**
- Column names (id, name, created_at, etc.)
- Empty rows (no data yet - that's normal!)
- RLS badge (shows Row Level Security is enabled)

✅ **Success:** All 3 tables visible in sidebar
❌ **Problem:** Tables missing

---

## 6️⃣ Project Structure in Code Editor

### Your folder should look like:

```
greta-ai/
├── 📁 app/
├── 📁 components/
├── 📁 lib/
├── 📁 node_modules/         ← Should exist after npm install
├── 📁 public/
├── 📁 supabase/
├── 📄 .env                  ← YOU CREATE THIS
├── 📄 .gitignore
├── 📄 package.json
├── 📄 next.config.js
└── 📄 README.md
```

### .env file should contain:

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

✅ **Success:** `.env` file exists in root with both values
❌ **Problem:** File missing or in wrong folder

---

## 7️⃣ Start Development Server

### What to type:
```bash
npm run dev
```

### What you'll see:
```
▲ Next.js 14.2.33
  - Local:        http://localhost:3000
  - Environments: .env

✓ Ready in 2.5s
```

✅ **Success:** Shows "Ready" with URL
❌ **Error:** Red text or "Port already in use"

**Browser console (F12):**
- Should show no red errors
- Some gray text is normal

---

## 8️⃣ Homepage (http://localhost:3000)

### What you should see:

**Header:**
- "Alexis" logo (top left, emerald/cyan gradient)
- Navigation links: Home, Templates, Create with AI
- "Get Started" button (emerald/cyan gradient)

**Hero Section:**
- Large heading: "Build Beautiful Websites Instantly"
- Subheading about AI-powered generation
- Two buttons: "Get Started" and "View Templates"

**Features Section:**
- Three cards showing main features
- Icons and descriptions
- Dark background with white cards

**Footer:**
- Alexis branding
- Links and copyright

✅ **Success:** All sections visible, no broken images
❌ **Problem:** White screen, error messages, broken layout

---

## 9️⃣ Create Page (/create)

### What you should see:

**Header:**
- "Describe Your Dream Website" heading
- "AI-Powered Generation" badge

**Main Area:**
- Large text input box
- Character counter
- "Generate Website" button (emerald/cyan)

**Example Prompts:**
- 6 example cards with different industries
- Click any to auto-fill the prompt

**How it Works:**
- 3 numbered steps explaining the process

✅ **Success:** Page loads, input is interactive
❌ **Problem:** Blank page, loading forever

---

## 🔟 AI Generation Working

### What happens:

**1. Type prompt:**
```
Create a modern restaurant website with menu
```

**2. Click "Generate Website":**
- Button shows "Generating..." with spinner
- Takes 1-3 seconds

**3. Preview appears:**
- Split view with generated HTML preview
- "Download HTML" button at top
- "New Prompt" button
- Detected features shown as badges

**4. Generated website shows:**
- Restaurant-themed design
- Orange color scheme
- Relevant content (menu, reservations, etc.)
- Proper navigation and layout

✅ **Success:** Preview loads with relevant content
❌ **Problem:** Error message, no preview

---

## 1️⃣1️⃣ Templates Page (/generate)

### What you should see:

**Filter Tabs:**
- All, SaaS, E-commerce, Restaurant, etc.
- Active tab highlighted

**Template Grid:**
- Multiple template cards (3 per row on desktop)
- Each card shows:
  - Template name
  - Description
  - Badge with type
  - "Customize" button

**Hover Effects:**
- Cards lift up slightly
- Shadow appears

✅ **Success:** Multiple templates visible, clickable
❌ **Problem:** No templates, broken images

---

## 1️⃣2️⃣ Console (F12 → Console)

### What's NORMAL to see:
```
Download the React DevTools...
```
(Gray text - informational)

### What's a PROBLEM:
```
Error: Failed to fetch
Error: Supabase client error
404 Not Found
```
(Red text - actual errors)

✅ **Good:** No red error messages
❌ **Problem:** Red errors about Supabase, network, etc.

---

## ✅ Everything Working Checklist

When everything is set up correctly:

- [ ] **npm run dev** starts without errors
- [ ] **Homepage loads** at http://localhost:3000
- [ ] **Navigation works** - can click between pages
- [ ] **AI generation works** - generates different content for different prompts
- [ ] **Templates load** - can see template cards
- [ ] **Download works** - can download HTML files
- [ ] **Console is clean** - no red errors in browser console (F12)

---

## 📊 What Success Looks Like - Summary

| Step | Success Indicator |
|------|------------------|
| Install | "added XXX packages" message |
| Supabase Project | Green "Active" status |
| Database | 3 tables in Table Editor |
| .env File | File exists in root with both values |
| Dev Server | "Ready in X.Xs" message |
| Homepage | Full page with Alexis branding |
| AI Generate | Preview loads with relevant design |
| Templates | Grid of template cards visible |

---

## 🚫 Common Error Screens

### Error: "Cannot connect to Supabase"
**Looks like:** Alert popup or error in console
**Fix:** Check .env file, restart server

### Error: "Port 3000 already in use"
**Looks like:** Error in terminal when starting
**Fix:** Use different port or close other apps

### Error: "Module not found"
**Looks like:** Error mentioning package names
**Fix:** Run `npm install` again

### Error: Blank white page
**Looks like:** Nothing renders
**Fix:** Check browser console (F12) for errors

---

## 💡 Pro Tips

1. **Keep browser console open (F12)** while testing
   - Helps catch errors immediately

2. **Test with different prompts:**
   - "Create a fitness gym website"
   - "Build an e-commerce store for jewelry"
   - "Make a healthcare clinic site"
   - Each should generate different designs!

3. **Verify color schemes change:**
   - Restaurant = Orange
   - SaaS = Blue
   - Fitness = Red
   - Healthcare = Teal

4. **Check responsive design:**
   - Resize browser window
   - Should adapt to mobile sizes

---

## 🎯 Final Check - 60 Second Test

1. ✅ Run `npm run dev` - starts in under 5 seconds
2. ✅ Open http://localhost:3000 - loads instantly
3. ✅ Click "Create with AI" - page switches
4. ✅ Type "restaurant website" - input works
5. ✅ Click Generate - preview appears in 2-3 seconds
6. ✅ Content is restaurant-themed - not generic
7. ✅ Click "Templates" - 37+ templates load
8. ✅ Click any template - customization page opens

**All 8 steps work?** 🎉 **Setup is perfect!**

---

**Need more help?** See [SETUP.md](./SETUP.md) for detailed troubleshooting!
