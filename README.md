# Election Guide Platform 🗳️

An interactive, modular digital assistant designed to guide Indian citizens through the democratic election process. This platform provides location-specific timelines, registration support, and voting guidance through a premium, "digital theatre" inspired interface.

## ✨ Features

- **Interactive Election Timeline**: A step-by-step guide through the phases of the Indian electoral process, from registration to government formation.
- **Smart Assistant**: A theme-aware conversational interface to answer queries regarding the election process.
- **Voter Checklist**: A cinematic, interactive checklist for voters to ensure they are prepared for polling day.
- **Educational Quiz**: Gamified learning to help citizens understand their democratic rights and the electoral system.
- **Resource Center**: Curated links to official ECI (Election Commission of India) resources and important documentation.
- **Dark-First Design**: A premium, Shopify-inspired aesthetic with cinematic radial gradients and sophisticated typography (Neue Haas Grotesk style).

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Hugeicons](https://hugeicons.com/) & [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: Docker & Nginx

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhra92/Election_Guide_Platform.git
   cd Election_Guide_Platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🐳 Docker Deployment

To run the application using Docker:

1. Build the image:
   ```bash
   docker build -t election-guide .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 election-guide
   ```

## 📄 License

This project is licensed under the MIT License.
