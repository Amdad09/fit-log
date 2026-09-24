'use client'
import type { Workout } from "@/types/workout";
import { createContext, useState, type ReactNode } from "react";
interface WorkoutContextProviderProps{
    children: ReactNode;
}

interface WorkoutContextProps {
    todayPlans: Workout[];
    savePlans: Workout[];
    onAdd: (workout: Workout) => void;
    onSave: (workout: Workout) => void;
    onDeletePlan: (id: number) => void;
    onDeleteSave: (id: number) => void;
}

export const WorkoutContext = createContext < WorkoutContextProps| null>(null);

const WorkoutContextProvider = ({ children }: WorkoutContextProviderProps) => {
    const [todayPlans, setTodayPlans] = useState<Workout[]>([]);
    const [savePlans, setSavePlans] = useState<Workout[]>([]);

    const handleAddTodayPlan = (workout: Workout) => {
        setTodayPlans(prev => [...prev, workout]);
    };

    const handleSaveNextPlan = (workout: Workout) => {
        setSavePlans(prev => [...prev, workout]);
    };

    const handleDeleteFromPlan = (id: number) => {
        setTodayPlans(prev => prev.filter(p => p.id !== id));
    };
    const handleDeleteFromSave = (id: number) => {
        setSavePlans(prev => prev.filter(p => p.id !== id));
    };

    const data = {
        todayPlans, savePlans,
        onAdd: handleAddTodayPlan ,
        onSave: handleSaveNextPlan, 
        onDeletePlan: handleDeleteFromPlan,
        onDeleteSave: handleDeleteFromSave
    }
  return (
    <WorkoutContext.Provider value={data}>
        {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;