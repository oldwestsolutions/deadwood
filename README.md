# Stack Overflow Clone

A modern Q&A platform built with Next.js, TypeScript, and PostgreSQL.

## Features

- User authentication (sign up, login, logout)
- Ask questions
- Answer questions
- Vote on questions and answers
- Comment on questions and answers
- Tag system
- User reputation system

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- NextAuth.js
- bcryptjs

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd stackoverflow-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/stackoverflow_clone"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npx prisma db push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── api/               # API routes
│   ├── questions/         # Question-related pages
│   ├── tags/             # Tag-related pages
│   └── users/            # User-related pages
├── components/            # React components
├── lib/                   # Utility functions and configurations
└── types/                # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
