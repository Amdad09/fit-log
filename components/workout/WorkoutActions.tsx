'use client';

import { useWorkout } from '@/hooks/useWorkout';
import type { Workout } from '@/types/workout';
import { CalendarPlus, CloudCheck } from 'lucide-react';
import Button from '../ui/Button';

const WorkoutActions = ({ workout }: { workout: Workout }) => {
    const { onAdd, onSave, donePlans, todayPlans } = useWorkout();
    return (
        <div className="mt-8 flex gap-3">
            <Button
                onClick={() => {
                    onAdd(workout)
                }}
                type="button"
                disabled={(todayPlans.length + donePlans.length) === 5}
                title='You can not select more than 5 workouts'
            >
                {/* <CalendarPlus className="h-4 w-4" /> */}
                <CalendarPlus className='mr-2'/>
                Add to today&apos;s plan
            </Button>
            <button
                onClick={() => onSave(workout)}
                type="button"
                //   onClick={() => onSaveForLater?.(workout)}
                className="
  inline-flex items-center gap-2
  rounded-full
  border border-neutral-700
  px-5 py-2.5
  text-sm font-semibold text-white
  transition-all duration-200 ease-out
  hover:border-neutral-500
  hover:bg-neutral-900
  hover:-translate-y-0.5
  active:translate-y-0
  active:scale-[0.98]
  cursor-pointer
"
            >
                {/* <Bookmark className="h-4 w-4" /> */}
                <CloudCheck className="" />
                Save for later
            </button>
        </div>
    );
};

export default WorkoutActions;
