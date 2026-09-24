'use client'
import { useWorkout } from "@/hooks/useWorkout";
import MyPlanActions from "./MyPlanActions";
import MyPlanList from "./MyPlanList";
import Stats from "./Stats";
import { useState } from "react";
import { toast } from "sonner";

const ActionsPage = () => {
    const { todayPlans, savePlans, times, cals, onDeletePlan, onDeleteSave } = useWorkout();
    const [isToday, setIsToday] = useState<'add' | 'save'>('add');
    const [doneIds, setDoneIds] = useState<number[]>([]);
    
    const plans = isToday === 'add' ? todayPlans : savePlans;
    const onDelete = isToday === 'add' ? onDeletePlan : onDeleteSave;
    const handleHasDone = (id: number) => {
        toast.success('Workout has done!')
        setDoneIds(prev => prev.includes(id) ? prev : [...prev, id]);
    };

    

  return (
      <div>
          {/* Stats */}
          <Stats plans={plans} times={ times} cals={cals} />

          {/* Tabs + Sort */}
          <MyPlanActions isToday={isToday} setIsToday={setIsToday} />

          {/* List */}
          <MyPlanList
              plans={plans}
              isToday={isToday}
              doneIds={doneIds}
              hasDone={handleHasDone}
              onDelete={onDelete}
          />
      </div>
  );
};

export default ActionsPage;