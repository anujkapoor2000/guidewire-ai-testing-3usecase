
---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn
- An **Anthropic API Key** → [console.anthropic.com](https://console.anthropic.com)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/guidewire-ai-testing.git
cd guidewire-ai-testing
```text

---

### 2. Install Dependencies

```bash
npm install
```text

---

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```text

> ⚠️ Never commit `.env.local` to version control. It is already listed in `.gitignore`.

---

### 4. Run the Development Server

```bash
npm run dev
```text

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 5. Build for Production

```bash
npm run build
npm start
```text

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Set production environment variable
vercel env add ANTHROPIC_API_KEY
```text

### Option B — Vercel Dashboard (Recommended)

1. Push your code to **GitHub / GitLab / Bitbucket**
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Under **Environment Variables**, add:

5. Click **Deploy** 🚀

---

## 🔑 Getting an Anthropic API Key

1. Go to [https://console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to **Settings → API Keys**
4. Click **"Create Key"**, name it (e.g. `guidewire-ai-testing`)
5. Copy the key — it is only shown **once**
6. Add billing at [console.anthropic.com/settings/billing](https://console.anthropic.com/settings/billing)

### 💰 Claude Pricing Reference

| Model              | Input              | Output              | Recommended For       |
|--------------------|--------------------|---------------------|-----------------------|
| claude-haiku-3     | $0.25 / 1M tokens  | $1.25 / 1M tokens   | Fast & budget-friendly|
| claude-sonnet-3.5  | $3.00 / 1M tokens  | $15.00 / 1M tokens  | ⭐ Best balance        |
| claude-opus-4-5    | $15.00 / 1M tokens | $75.00 / 1M tokens  | Maximum capability    |

> This app uses **claude-opus-4-5** by default. You can change the model in each `app/api/*/route.ts` file.

---

## 🧩 Supported Guidewire Modules

### PolicyCenter
- New Submission
- Policy Change
- Renewal
- Cancellation
- Reinstatement

### ClaimCenter
- First Notice of Loss (FNOL)
- Claim Assignment
- Reserve Management
- Payment Processing
- Subrogation

### BillingCenter
- Account Creation
- Invoice Generation
- Payment Plans
- Delinquency Processing

### ContactManager
- Contact Creation

> ✏️ All tools also support **custom module input** for any unlisted Guidewire screen or workflow.

---

## 🔒 Security Best Practices

- ✅ API key is stored as a **server-side environment variable** — never exposed to the browser
- ✅ All Claude API calls are made from **Next.js API routes** (server-side only)
- ✅ `.env.local` is excluded from version control via `.gitignore`
- ⚠️ **Never hardcode** your API key directly in source code
- ⚠️ **Rotate your key** immediately if it is accidentally exposed

---

## 🛣️ Roadmap

- [ ] 🔄 Regression Impact Analyzer
- [ ] 📝 Manual → Automated Test Script Converter
- [ ] 📊 Test Coverage Advisor
- [ ] 💬 Guidewire QA Chatbot
- [ ] 📤 Export results to PDF / Excel
- [ ] 🔗 Jira integration for defect logging
- [ ] 🧠 Fine-tuned model on Guidewire-specific data

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License**.
