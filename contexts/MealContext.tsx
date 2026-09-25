'use client';
import type { CreateMeal, Meal } from '@/types/meal';
import { createContext, useState, type ReactNode } from 'react';
import { toast } from 'sonner';

interface MealContextProviderProps {
    children: ReactNode;
}

interface MealContextProps {
    meals: Meal[];
    onAdd: (meal: CreateMeal) => void;
  onDelete: (id: string) => void;
  onEdit: (id:string, updateMeal: CreateMeal) => void;
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

export const MealContext = createContext<MealContextProps | null>(null);

const MealContextProvider = ({ children }: MealContextProviderProps) => {
    const [meals, setMeals] = useState<Meal[]>([initialMeal]);

    const handleAddMeal = (meal: CreateMeal) => {
        const newMeal: Meal = {
            id: crypto.randomUUID(),
            ...meal,
        };
        setMeals((prev) => [...prev, newMeal]);
    };

  const handleEditMeal = (id: string, updateMeal: CreateMeal) => {
    setMeals(prev => prev.map(meal => meal.id === id ? {
      id: meal.id,
      ...updateMeal
    } : meal));
  };
  
    const handleDeleteMeal = (id: string) => {
        setMeals((prev) => prev.filter((meal) => meal.id !== id));
        toast.warning('Meal deleted!');
    };
    const data: MealContextProps = {
        meals,
        onAdd: handleAddMeal,
      onDelete: handleDeleteMeal,
        onEdit: handleEditMeal
    };
    return <MealContext.Provider value={data}>{children}</MealContext.Provider>;
};

export default MealContextProvider;
