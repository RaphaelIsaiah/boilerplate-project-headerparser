# 🌐 Request Header Parser Microservice

## A [freeCodeCamp](https://freecodecamp.org) Certification Project

![FCC Badge](https://img.shields.io/badge/freeCodeCamp-Certification%20Project-0A0A23?logo=freecodecamp)

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)
![License](https://img.shields.io/badge/License-MIT-teal)

A lightweight API that parses HTTP request headers to return client IP, language, and software info in JSON format. Perfect for debugging and client detection.

![Demo Screenshot](https://i.postimg.cc/hjdS1cNX/Request-Header-Parser.png)

## 🚀 Try It Live

[![Vercel](https://vercel.com/button)](https://boilerplate-project-headerparser-six.vercel.app/)

## ⚡ Powered By

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&color=134e4a)](https://vercel.com)  
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind_CSS-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

## 🌟 Features

- Real-time header parsing
- Clean JSON response
- Mobile-friendly interface
- Open-source (MIT Licensed)

## 🔍 Example Output

```json
{
  "ipaddress": "127.0.0.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0...)"
}
```

## 🛠️ API Endpoint

### `GET /api/whoami`

Returns:

- `ipaddress` : Client IP (supports IPv4/IPv6)
- `language` : Accept-Language header
- `software` : User-Agent header

## 🖥️ Local Setup

```bash
git clone https://github.com/RaphaelIsaiah/boilerplate-project-headerparser
cd biolerplate-project-headerparser
npm install
npm start
```

Server runs on `http://localhost:3000`

## 🌈 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Tailwind CSS
- **Deployment**: Vercel

## 📜 License

MIT © 2025 [Raphael Isaiah](https://github.com/RaphaelIsaiah)

---

✨ **Tip**: Bookmark this API for quick client diagnostics during development!
