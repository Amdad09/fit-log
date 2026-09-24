'use client'

import { useWorkout } from "@/hooks/useWorkout";
import Button from "../ui/Button";
import type { Workout } from "@/types/workout";

const WorkoutActions = ({workout}: {workout: Workout}) => {
    const {onAdd, onSave } = useWorkout();
  return (
      <div className="mt-8 flex gap-3">
          <Button
              onClick={() => onAdd(workout)}
              type="button"
              //   onClick={() => onAddToPlan?.(workout)}
              className=""
          >
              {/* <CalendarPlus className="h-4 w-4" /> */}
              Add to today&apos;s plan
          </Button>
          <button
              onClick={() => onSave(workout)}
              type="button"
              //   onClick={() => onSaveForLater?.(workout)}
              className="flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-900"
          >
              {/* <Bookmark className="h-4 w-4" /> */}
              Save for later
          </button>
      </div>
  );
};

export default WorkoutActions;