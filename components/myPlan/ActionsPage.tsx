'use client'
import { useWorkout } from "@/hooks/useWorkout";
import MyPlanActions from "./MyPlanActions";
import MyPlanList from "./MyPlanList";
import Stats from "./Stats";
import { useState } from "react";

const ActionsPage = () => {
    const { todayPlans, savePlans } = useWorkout();
    const [isToday, setIsToday] = useState<'add' | 'save'>('add');
    const plans = isToday === 'add' ? todayPlans : savePlans;

    const [doneIds, setDoneIds] = useState<number[]>([]);
    const handleHasDone = (id: number) => {
        setDoneIds(prev => prev.includes(id) ? prev : [...prev, id]);
    };

  return (
      <div>
          {/* Stats */}
          <Stats />

          {/* Tabs + Sort */}
          <MyPlanActions isToday={isToday} setIsToday={setIsToday} />

          {/* List */}
          <MyPlanList
              plans={plans}
              isToday={isToday}
              doneIds={doneIds}
              hasDone={handleHasDone}
          />
      </div>
  );
};

export default ActionsPage;