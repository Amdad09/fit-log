'use client'
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";

export const useWorkout = () => {
    const context = useContext(WorkoutContext);
    if (!context) throw new Error('Failed');
    return context;
};