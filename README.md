# Route F5 🚀

**AI-driven roadmaps to plan smarter, learn faster, and grow together.**

A modern, student-first goal tracking and roadmap platform built with Next.js, featuring AI-powered insights, beautiful UI, and seamless user experience.

## ✨ Features

- 🎯 **Goal Tracking** - Set, track, and achieve your goals with visual progress indicators
- 🗺️ **AI-Powered Roadmaps** - Get intelligent step-by-step roadmaps for your goals
- 💡 **AI Insights** - Receive personalized recommendations and suggestions
- 🌙 **Dark Mode** - Beautiful dark theme with smooth transitions
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🔐 **Authentication** - Secure authentication with NextAuth.js
- ⚡ **Fast & Modern** - Built with Next.js 15, React 19, and Tailwind CSS
- 🎨 **Beautiful UI** - Minimal, professional design with Framer Motion animations

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Authentication:** NextAuth.js
- **Database:** MongoDB with Mongoose
- **Deployment:** Ready for Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdityaBisht07/Route-F5.git
   cd Route-F5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your environment variables (see Configuration section)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/route-f5

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
Route-F5/
├── components/          # React components
│   ├── DashboardNavbar.tsx
│   ├── GoalCard.tsx
│   ├── RoadmapCard.tsx
│   └── AIInsightCard.tsx
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── dashboard.tsx
│   ├── home.tsx
│   └── signin.tsx
├── lib/               # Utility functions
│   ├── mongodb.ts
│   └── mongoose.ts
├── models/            # Database models
│   └── Profile.ts
├── styles/            # Global styles
│   └── globals.css
└── public/           # Static assets
```

## 🎨 Features in Detail

### Dashboard
- View all your goals at a glance
- Track progress with visual indicators
- Access AI-powered roadmaps
- Get personalized insights and recommendations

### Dark Mode
- Toggle between light and dark themes
- Smooth transitions
- Persistent theme preference
- System preference detection

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**AdityaBisht07**
- GitHub: [@AdityaBisht07](https://github.com/AdityaBisht07)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ for students who want to achieve their goals faster and smarter.

