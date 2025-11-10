# Greta AI - AI-Powered Website Generation Platform

A modern, production-ready web application that generates stunning websites using AI and provides 37+ premium templates across multiple industries.

## Features

- 🎨 **Dark Theme UI** - Beautiful emerald and cyan gradient design
- 🤖 **AI-Powered Generation** - Create websites from natural language prompts
- 📑 **37+ Templates** - Pre-built templates for every industry
- 🎭 **Full Customization** - Real-time preview and editing
- 📦 **WordPress Export** - Download complete WordPress themes
- 💾 **Supabase Integration** - Database persistence and storage
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Production Ready** - Optimized and deployment-ready

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Static export (compatible with all platforms)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd nextjs-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── create/            # AI prompt generation
│   ├── generate/          # Template browsing
│   ├── customize/         # Template customization
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Utility functions
│   ├── supabase.ts       # Supabase client
│   ├── templates.ts      # Template definitions
│   ├── prompt-generator.ts # AI generation logic
│   └── wordpress-generator.ts # WordPress export
├── public/               # Static assets
├── supabase/            # Database migrations
└── out/                 # Static export output
```

## Database Setup

The application uses Supabase with the following tables:

1. **templates** - Pre-built template definitions
2. **generated_apps** - AI-generated websites
3. **prompt_history** - User prompt tracking

Run migrations automatically through the Supabase MCP integration or manually in your Supabase dashboard.

## Building for Production

Build the static export:

```bash
npm run build
```

The output will be in the `out` directory, ready for deployment.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel (Recommended)
- Netlify
- GitHub Pages
- AWS Amplify
- Cloudflare Pages
- Any static hosting provider

**Quick Deploy to Vercel**:
```bash
npm i -g vercel
vercel
```

**Quick Deploy to Netlify**:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## Usage

### Browse Templates
Navigate to `/generate` to browse 37+ pre-built templates organized by category.

### Create with AI
Navigate to `/create` and describe your website:
- "Create a modern SaaS landing page for a project management tool"
- "Build a restaurant website with menu and reservations"
- "Design an e-commerce store for handmade jewelry"

### Customize Templates
Click any template to customize:
- Change company name, title, subtitle
- Adjust color schemes
- Real-time preview
- Download as HTML or WordPress theme

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### AI Generation
The AI analyzes prompts and automatically:
- Detects app type (SaaS, E-commerce, Restaurant, etc.)
- Selects appropriate color schemes
- Generates complete HTML with Tailwind CSS
- Includes industry-specific components
- Creates responsive, production-ready code

### Template System
- 37+ professional templates
- Categories: SaaS, E-commerce, Restaurants, Real Estate, Healthcare, Fitness, and more
- Fully customizable with real-time preview
- Export as HTML or complete WordPress themes

### WordPress Export
- Complete theme with multiple pages
- Automatic page creation on activation
- Responsive design
- SEO optimized structure
- Contact forms and integrations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review [Next.js Documentation](https://nextjs.org/docs)
- Check [Supabase Documentation](https://supabase.com/docs)

## Acknowledgments

- Built with Next.js
- Styled with Tailwind CSS
- Powered by Supabase
- Icons by Lucide

---

**Built with ❤️ using Greta AI**
