# Todo App

A modern, responsive Todo application built with Next.js 14, TypeScript, and Tailwind CSS. This application allows users to manage their tasks.

## Features

- **Task Management**

  - Create, edit, and delete tasks
  - Mark tasks as complete/incomplete
  - Color-code tasks for organization
  - Real-time task counter and completion tracking

- **Modern UI**
  - Clean and minimalist design
  - Dark mode interface
  - Responsive layout for all devices
  - Smooth transitions and animations

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. Create a `.env` file in the root directory:

```
NEXT_PUBLIC_EXTERNAL_API_URL="http://localhost:3001/api"
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
todo-app/
├── src/
│   ├── app/
│   │   ├── hooks/
│   │   │   └── useTodoList.tsx
│   │   ├── create/
│   │   │   └── page.tsx
│   │   ├── edit/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── icons/
│   │   ├── CreateTaskButton.tsx
│   │   ├── EmptyList.tsx
│   │   ├── TaskForm.tsx
│   │   └── TodoList.tsx
│   │   └── TodoListItem.tsx
│   └── lib/
│       ├── constants.ts
│       ├── axios.ts
│       └── types.ts
├── public/
├── tailwind.config.js
└── package.json
```
