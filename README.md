# FitLog — Fitness & Workout Tracker

FitLog is a modern fitness tracking web application designed to help users discover workouts, create daily workout plans, track their progress, and manage their meals in one place.

The project focuses on a clean, responsive user experience with practical workout and meal management features.

---

## 🚀 Live Demo

🔗 **Live Website:** https://fit-log-ruby.vercel.app/

---

## 📸 Features

### 🏋️ Workout Library

- Browse available workouts
- Search workouts by name
- View detailed workout information
- See workout duration, calories burned, equipment, and rating
- Responsive workout cards

### 📋 My Plan

- Add workouts to today's plan
- Save workouts for later
- Mark workouts as completed
- Track daily workout progress
- Visual 5-step progress tracker
- View completed workouts directly from the progress tracker
- Sort workouts by:
  - Duration
  - Calories
  - Rating
- Delete workouts from the plan
- Celebration animation after completing all 5 workouts

### 🍱 Meal Management

- Add meals
- View meal information
- Edit existing meals
- Delete meals
- Manage meals from a dedicated My Meal section

### 🎨 User Interface

- Fully responsive design
- Mobile, tablet, and desktop layouts
- Dark-themed modern interface
- Reusable UI components
- Smooth hover and transition effects
- Framer Motion animations
- Toast notifications for user actions

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Framer Motion

### State Management

- React Context API
- React Hooks

### UI & UX

- Responsive Design
- Sonner Toast
- Lucide React Icons
- Next.js Image
- CSS transitions and animations

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── dashboard/
│   ├── myMeal/
│   ├── myPlan/
│   ├── workouts/
│   ├── addMeal/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── common/
│   ├── workout/
│   ├── meal/
│   ├── myPlan/
│   └── ...
│
├── context/
│   └── WorkoutContext.tsx
│
├── hooks/
│   └── useWorkout.ts
│
├── types/
│   ├── workout.ts
│   └── meal.ts
│
└── data/
    └── ...