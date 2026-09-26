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

const demoMeals: Meal[] = [
    {
        id: '1',
        name: 'Grilled Chicken Rice',
        type: 'Lunch',
        calories: 520,
        protein: 42,
        carbs: 58,
        fat: 12,
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435',
        notes: 'High-protein lunch with grilled chicken and rice.',
    },
    {
        id: '2',
        name: 'Oatmeal with Banana',
        type: 'Breakfast',
        calories: 380,
        protein: 12,
        carbs: 62,
        fat: 9,
        image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc',
        notes: 'A simple and healthy breakfast with oats, banana, and milk.',
    },
    {
        id: '3',
        name: 'Egg Avocado Toast',
        type: 'Breakfast',
        calories: 420,
        protein: 20,
        carbs: 35,
        fat: 22,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
        notes: 'Protein-rich breakfast with eggs, avocado, and whole-grain toast.',
    },
    {
        id: '4',
        name: 'Beef Steak with Vegetables',
        type: 'Dinner',
        calories: 610,
        protein: 48,
        carbs: 28,
        fat: 32,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
        notes: 'High-protein dinner with grilled beef steak and fresh vegetables.',
    },
    {
        id: '5',
        name: 'Chicken Salad',
        type: 'Lunch',
        calories: 410,
        protein: 38,
        carbs: 24,
        fat: 18,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
        notes: 'Light and nutritious salad with grilled chicken and fresh vegetables.',
    },
    {
        id: '6',
        name: 'Greek Yogurt Bowl',
        type: 'Snack',
        calories: 290,
        protein: 18,
        carbs: 32,
        fat: 8,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
        notes: 'Creamy Greek yogurt topped with fruits, nuts, and honey.',
    },
    {
        id: '7',
        name: 'Salmon with Sweet Potato',
        type: 'Dinner',
        calories: 570,
        protein: 40,
        carbs: 45,
        fat: 24,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
        notes: 'Omega-3 rich salmon served with roasted sweet potato.',
    },
    {
        id: '8',
        name: 'Chicken Pasta',
        type: 'Lunch',
        calories: 560,
        protein: 36,
        carbs: 64,
        fat: 16,
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
        notes: 'Balanced pasta meal with grilled chicken and a light sauce.',
    },
    {
        id: '9',
        name: 'Peanut Butter Banana Toast',
        type: 'Snack',
        calories: 340,
        protein: 11,
        carbs: 42,
        fat: 16,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
        notes: 'Quick energy snack with banana and peanut butter.',
    },
    {
        id: '10',
        name: 'Vegetable Omelette',
        type: 'Breakfast',
        calories: 330,
        protein: 24,
        carbs: 14,
        fat: 20,
        image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71',
        notes: 'Protein-packed omelette with eggs and fresh vegetables.',
    },
    {
        id: '11',
        name: 'Chicken Burrito Bowl',
        type: 'Lunch',
        calories: 590,
        protein: 43,
        carbs: 68,
        fat: 15,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
        notes: 'Balanced bowl with chicken, rice, beans, vegetables, and avocado.',
    },
    {
        id: '12',
        name: 'Tuna Sandwich',
        type: 'Lunch',
        calories: 450,
        protein: 32,
        carbs: 48,
        fat: 14,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
        notes: 'High-protein tuna sandwich with whole-grain bread.',
    },
    {
        id: '13',
        name: 'Fruit and Nut Bowl',
        type: 'Snack',
        calories: 310,
        protein: 8,
        carbs: 38,
        fat: 14,
        image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea',
        notes: 'Refreshing snack with mixed fruits, almonds, and walnuts.',
    },
];

export const MealContext = createContext<MealContextProps | null>(null);

const MealContextProvider = ({ children }: MealContextProviderProps) => {
  const [meals, setMeals] = useState<Meal[]>(demoMeals);
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
