
import { ChevronDown } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
interface MyPlanActionsProps {
    isToday: 'add' | 'save';
    setIsToday: Dispatch<SetStateAction<'add' | 'save'>>;
}

const MyPlanActions = ({isToday, setIsToday}: MyPlanActionsProps) => {
    
  return (
      <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1 rounded-lg bg-neutral-900 p-1.5 text-sm font-semibold">
              <button
                  onClick={() => setIsToday('add')}
                  type="button"
                  className={` ${isToday === 'add' ? 'rounded-lg text-primary bg-primary/10' : 'hover:text-white text-neutral-300'}  px-4 py-1.5 cursor-pointer`}
              >
                  Today&apos;s Plan
              </button>
              <button
                  onClick={() => setIsToday('save')}
                  type="button"
                  className={` ${isToday === 'save' ? 'rounded-lg text-primary bg-primary/10' : ' hover:text-white text-neutral-300'}  px-4 py-1.5 cursor-pointer`}
              >
                  Saved
              </button>
          </div>

          <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300"
          >
              <span className="text-neutral-500">Sort By</span>
              <span>Duration</span>
              <ChevronDown className="h-4 w-4 text-neutral-500" />
          </button>
      </div>
  );
};

export default MyPlanActions;