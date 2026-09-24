'use client'
import type { Meal } from "@/types/meal";
import { createContext, useState, type ReactNode } from "react";

interface MealContextProviderProps{
  children: ReactNode;
}

interface MealContextProps{
  meals: Meal[];
  onAdd: (meal: Meal) => void;
}

const initialMeal: Meal = {
    id: '1',
    name: 'Chicken & Rice',
    type: 'Lunch',
    calories: 550,
    protein: 35,
    carbs: 60,
    fat: 15,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435',
    notes: 'High-protein lunch after workout.',
};

export const MealContext = createContext<MealContextProps|null>(null);

const MealContextProvider = ({ children }:MealContextProviderProps) => {
  const [meals, setMeals] = useState<Meal[]>([initialMeal]);

  const handleAddMeal = (meal: Meal) => {
    setMeals(prev => [...prev, meal]);
  };

  const data: MealContextProps = {
    meals,
    onAdd: handleAddMeal
  }
  return (
    <MealContext.Provider value={data}>
        {children}
    </MealContext.Provider>
  );
};

export default MealContextProvider;