'use client';
import type { CreateMeal, Meal } from '@/types/meal';
import { createContext, useEffect, useState, type ReactNode } from 'react';
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

export const MealContext = createContext<MealContextProps | null>(null);

const MealContextProvider = ({ children }: MealContextProviderProps) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    
    const storedMeals = localStorage.getItem('meals');
    if (storedMeals) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMeals(JSON.parse(storedMeals));
    }
    setIsLoading(true);
  },[])

  useEffect(() => {
    if (!isLoading) return;
    localStorage.setItem('meals', JSON.stringify(meals));
    }, [meals, isLoading])
  
  
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
