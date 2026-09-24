import { MealContext } from "@/contexts/MealContext";
import { useContext } from "react";

export const useMeal = () => {
    const context = useContext(MealContext);
    if (!context) throw new Error('Failed');
    return context;
};