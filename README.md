# Election Guide Platform 🗳️

![Democracy in Motion](/election_guide_banner_1777714650781.png)

An interactive, modular digital assistant designed to guide Indian citizens through the democratic election process. This platform provides location-specific timelines, registration support, and voting guidance through a premium, **"Digital Theatre"** inspired interface.

## 🎭 The Aesthetic
Built with a "Digital Theatre" philosophy, the platform prioritizes:
- **Cinematic Atmosphere**: Deep charcoal backgrounds with high-contrast neon accents.
- **Precision Typography**: Utilizing monumentally scaled thin typography for a modern, architectural feel.
- **Fluid Interactions**: Smooth transitions and micro-animations that make the democratic process feel alive and accessible.

## ✨ Key Features

- **🗳️ Interactive Election Timeline**: A step-by-step navigational guide through the phases of the Indian electoral process—from delimitation and voter registration to polling, counting, and government formation.
- **🤖 Intelligent Assistant**: A theme-aware conversational interface secured with reCAPTCHA v3 to answer citizen queries in real-time.
- **✅ Cinematic Voter Checklist**: A high-fidelity interactive checklist ensuring voters are fully prepared for polling day.
- **🎮 Educational Quiz Engine**: Gamified learning modules designed to help citizens understand their democratic rights and the intricacies of the electoral system.
- **📚 Resource Hub**: A curated repository of official ECI (Election Commission of India) documentation and essential resources.

## 🛠️ Technical Excellence

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom semantic tokens.
- **Icons**: [Hugeicons](https://hugeicons.com/) (Stroke Rounded) & [Lucide React](https://lucide.dev/).
- **Analytics**: Integrated **Google Analytics 4 (GA4)** for tracking user engagement and interactions.

### Backend & Security
- **Server**: Node.js + Express for secure API handling.
- **Security**: **reCAPTCHA v3** backend verification to protect the assistant from automated abuse.
- **Validation**: Server-side token validation with a scoring threshold of `0.5`.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Local Development

1. **Clone & Install**:
   ```bash
   git clone https://github.com/abhra92/Election_Guide_Platform.git
   cd Election_Guide_Platform
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env` file in the root directory (and `server/` if needed) with:
   ```env
   VITE_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   VITE_GA_ID=your_ga4_id
   ```

3. **Launch**:
   ```bash
   # Run both frontend and verification server concurrently
   npm run dev:all
   ```

## 🐳 Deployment

The application is containerized for seamless deployment using Docker and Nginx.

```bash
# Build the production image
docker build -t election-guide .

# Run the container
docker run -p 8080:80 election-guide
```

For detailed deployment instructions to **Google Cloud Run**, please refer to [deploy.md](./deploy.md).

## 📄 License
This project is licensed under the MIT License. Developed for the citizens of India. 🇮🇳
