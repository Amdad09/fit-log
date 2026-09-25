'use client'
import { useWorkout } from "@/hooks/useWorkout";
import MyPlanActions from "./MyPlanActions";
import MyPlanList from "./MyPlanList";
import Stats from "./Stats";
import { useState } from "react";
import { toast } from "sonner";
import type { SortOption } from "./MyPlanSort";
// import { useSearchParams } from "next/navigation";

const ActionsPage = () => {
    const { todayPlans, savePlans, onDeletePlan, onDeleteSave } = useWorkout();
    // const searchParams = useSearchParams();
    // const tab = searchParams.get('tab');
    const [isToday, setIsToday] = useState<'add' | 'save'>('add');
    
    const [doneIds, setDoneIds] = useState<number[]>([]);
    const [sorts, setSorts] = useState<SortOption>('Duration');
    
    const plans = isToday === 'add' ? todayPlans : savePlans;
    const onDelete = isToday === 'add' ? onDeletePlan : onDeleteSave;
    const handleHasDone = (id: number) => {
        toast.success('Workout has done!')
        setDoneIds(prev => prev.includes(id) ? prev : [...prev, id]);
    };

    const sortedPlans = [...plans].sort((a, b) => {
        if (sorts === 'Duration') {
            return a.duration - b.duration;
        }
         if (sorts === 'Calories') {
             return a.caloriesBurned - b.caloriesBurned;
         }

         if (sorts === 'Rating') {
             return b.rating - a.rating;
         }

         return 0;
    })

  return (
      <div>
          {/* Stats */}
          <Stats plans={plans} />

          {/* Tabs + Sort */}
          <MyPlanActions
              isToday={isToday}
              setIsToday={setIsToday}
              sorts={sorts}
              setSorts={setSorts}
          />

          {/* List */}
          <MyPlanList
              //   plans={plans}
              sortedPlans={sortedPlans}
              isToday={isToday}
              doneIds={doneIds}
              hasDone={handleHasDone}
              onDelete={onDelete}
          />
      </div>
  );
};

export default ActionsPage;