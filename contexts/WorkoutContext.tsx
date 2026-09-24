'use client'
import type { Workout } from "@/types/workout";
import { createContext, useState, type ReactNode } from "react";
import { toast } from "sonner";
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
    times: number;
    cals: number;
}

export const WorkoutContext = createContext < WorkoutContextProps| null>(null);

const WorkoutContextProvider = ({ children }: WorkoutContextProviderProps) => {
    const [todayPlans, setTodayPlans] = useState<Workout[]>([]);
    const [savePlans, setSavePlans] = useState<Workout[]>([]);
    const [times, setTimes] = useState<number>(0);
    const [cals, setCals] = useState<number>(0);

    const handleAddTodayPlan = (workout: Workout) => {
        const alreadyAdded = todayPlans.some(plan => plan.id === workout.id);
        if (alreadyAdded) {
            toast.info(`Already added ${workout.name} workout`);
        } else {
            toast.success(`Added ${workout.name} workout`);
            setTodayPlans(prev => [...prev, workout]);
            setTimes((prev) => prev + workout.duration);
            setCals((prev) => prev + workout.caloriesBurned);
        }
    };

    const handleSaveNextPlan = (workout: Workout) => {
        const alreadyAdded = savePlans.some(plan => plan.id === workout.id);
        if (alreadyAdded) {
            toast.info(`Already saved ${workout.name} workout`);
        } else {
            toast.success(`Saved ${workout.name} workout`);
            setSavePlans(prev => [...prev, workout]);
            setTimes(prev => prev + workout.duration);
            setCals(prev => prev + workout.caloriesBurned);
        }
    };

    const handleDeleteFromPlan = (id: number) => {
        toast(`Deleted the workout from today plans`);
        setTodayPlans(prev => prev.filter(p => p.id !== id));
    };

    const handleDeleteFromSave = (id: number) => {
        toast(`Deleted the workout from save plans`);
        setSavePlans(prev => prev.filter(p => p.id !== id));
    };

    const data = {
        todayPlans, savePlans,
        onAdd: handleAddTodayPlan ,
        onSave: handleSaveNextPlan, 
        onDeletePlan: handleDeleteFromPlan,
        onDeleteSave: handleDeleteFromSave,
        times: times,
        cals: cals
    }
  return (
    <WorkoutContext.Provider value={data}>
        {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;