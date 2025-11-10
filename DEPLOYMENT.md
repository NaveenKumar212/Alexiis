# Deployment Guide for Greta AI

This application is configured for static export and can be deployed to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:
1. A Supabase account with your database configured
2. Environment variables set up (see `.env` file)
3. The application builds successfully locally

## Environment Variables

You need to set these environment variables in your hosting platform:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest option as it's made by the creators of Next.js.

### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Web**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your Git repository
   - Add environment variables in the project settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts and add your environment variables when asked.

### Configuration:
The `vercel.json` file is already configured for you.

---

## Option 2: Deploy to Netlify

### Steps:

1. **Via Web**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `out`
   - Add environment variables in Site settings → Environment variables
   - Click "Deploy"

2. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Configuration:
The `netlify.toml` file is already configured for you.

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Update package.json**:
   Add this to your scripts:
   ```json
   "deploy": "next build && touch out/.nojekyll && git add -f out && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select `gh-pages` branch
   - Click "Save"

**Note**: For GitHub Pages, you may need to update `next.config.js` with your repository name as the basePath.

---

## Option 4: Deploy to AWS Amplify

### Steps:

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
5. Add environment variables
6. Click "Save and deploy"

---

## Option 5: Deploy to Cloudflare Pages

### Steps:

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
5. Add environment variables
6. Click "Save and Deploy"

---

## Option 6: Manual Deploy (Any Static Host)

### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `out` folder**:
   Upload the entire contents of the `out` directory to your hosting provider.

3. **Configure your server**:
   Make sure your server is configured to:
   - Serve `index.html` for all routes (SPA fallback)
   - Support trailing slashes
   - Serve static assets from `_next` folder

### Servers:
- **Apache**: Use the `.htaccess` file in the `out` directory
- **Nginx**: Configure try_files directive
- **Any CDN**: Upload to S3, Google Cloud Storage, etc.

---

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Verify environment variables are set correctly
- Run `npm run build` locally to identify issues

### Routes Not Working
- Ensure your hosting platform is configured for SPA routing
- Check that redirects/rewrites are properly configured
- Verify the `_redirects` file is in the `out` directory

### Database Connection Issues
- Verify Supabase URL and API key are correct
- Check RLS policies in Supabase
- Ensure CORS is enabled in Supabase project settings

### Styling Issues
- Verify Tailwind CSS is building correctly
- Check that all CSS files are being imported
- Clear cache and rebuild: `rm -rf .next && npm run build`

---

## Production Checklist

Before deploying to production:

- [ ] Environment variables are set correctly
- [ ] Supabase database is configured with proper RLS policies
- [ ] Application builds successfully: `npm run build`
- [ ] All routes work correctly in the static export
- [ ] Mobile responsiveness is tested
- [ ] Browser compatibility is verified
- [ ] Performance is optimized (check with Lighthouse)
- [ ] SEO meta tags are configured
- [ ] Analytics are set up (if needed)
- [ ] Error tracking is configured (if needed)

---

## Custom Domain

After deploying, you can configure a custom domain:

- **Vercel**: Project Settings → Domains
- **Netlify**: Site settings → Domain management
- **GitHub Pages**: Repository Settings → Pages → Custom domain
- **Cloudflare Pages**: Project Settings → Custom domains

---

## Support

For issues specific to:
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Supabase**: [Supabase Documentation](https://supabase.com/docs)
- **Deployment Platform**: Check their respective documentation

---

## Quick Start Summary

The fastest way to deploy:

```bash
# 1. Ensure environment variables are set in .env
# 2. Build the project
npm run build

# 3. Deploy to your preferred platform
# Vercel:
vercel

# OR Netlify:
netlify deploy --prod

# OR manually upload the 'out' folder to any static host
```

Your application will be live and ready to use!
