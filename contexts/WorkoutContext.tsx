'use client';
import type { Workout } from '@/types/workout';
import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { toast } from 'sonner';
interface WorkoutContextProviderProps {
    children: ReactNode;
}

interface WorkoutContextProps {
    todayPlans: Workout[];
    savePlans: Workout[];
    onAdd: (workout: Workout) => void;
    onSave: (workout: Workout) => void;
    onDeletePlan: (id: number) => void;
    onDeleteSave: (id: number) => void;
    hasDone: (workout: Workout) => void;
    donePlans: Workout[];
    setTodayPlans: Dispatch<SetStateAction<Workout[]>>
}

export const WorkoutContext = createContext<WorkoutContextProps | null>(null);

const WorkoutContextProvider = ({ children }: WorkoutContextProviderProps) => {
    const [todayPlans, setTodayPlans] = useState<Workout[]>([]);
    const [savePlans, setSavePlans] = useState<Workout[]>([]);
    const [donePlans, setDonePlans] = useState<Workout[]>([]);
    
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedPlans = localStorage.getItem('todayPlans');
        const storedSaves = localStorage.getItem('savePlans');
        const storedDone = localStorage.getItem('donePlans');

        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (storedPlans) setTodayPlans(JSON.parse(storedPlans));
        if (storedSaves) setSavePlans(JSON.parse(storedSaves));
        if (storedDone) setDonePlans(JSON.parse(storedDone));
        setIsLoaded(true);
    }, []);

    
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem('donePlans', JSON.stringify(donePlans));
    }, [donePlans, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem('todayPlans', JSON.stringify(todayPlans));
    }, [todayPlans, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem('savePlans', JSON.stringify(savePlans));
    }, [savePlans, isLoaded]);



    const handleAddTodayPlan = (workout: Workout) => {
        const alreadyAdded = todayPlans.some((plan) => plan.id === workout.id);
        if (alreadyAdded) {
            toast.info(`Already added ${workout.name} workout`);
        } else {
            toast.success(`Added ${workout.name} workout`);
            setTodayPlans((prev) => [...prev, workout]);
        }
    };

    const handleHasDone = (workout: Workout) => {
        toast.success(`${workout.name} workout has done!!`);
        setDonePlans(prev => [...prev, workout]);
        setTodayPlans(prev => prev.filter(plan => plan.id !== workout.id));
    };

    const handleSaveNextPlan = (workout: Workout) => {
        const alreadyAdded = savePlans.some((plan) => plan.id === workout.id);
        if (alreadyAdded) {
            toast.info(`Already saved ${workout.name} workout`);
        } else {
            toast.success(`Saved ${workout.name} workout`);
            setSavePlans((prev) => [...prev, workout]);
        }
    };

    const handleDeleteFromPlan = (id: number) => {
        toast.warning(`Deleted the workout from today plans`);
        setTodayPlans((prev) => prev.filter((p) => p.id !== id));
    };

    const handleDeleteFromSave = (id: number) => {
        toast.warning(`Deleted the workout from save plans`);
        setSavePlans((prev) => prev.filter((p) => p.id !== id));
    };

    const data = {
        todayPlans,
        savePlans,
        onAdd: handleAddTodayPlan,
        onSave: handleSaveNextPlan,
        onDeletePlan: handleDeleteFromPlan,
        onDeleteSave: handleDeleteFromSave,
        hasDone: handleHasDone,
        donePlans,
        setTodayPlans
    };
    return (
        <WorkoutContext.Provider value={data}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContextProvider;
