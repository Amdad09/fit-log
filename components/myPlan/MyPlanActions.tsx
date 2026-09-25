
// import { ChevronDown } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import MyPlanSort, { type SortOption } from "./MyPlanSort";
interface MyPlanActionsProps {
    isToday: 'add' | 'save';
    setIsToday: Dispatch<SetStateAction<'add' | 'save'>>;
    sorts: SortOption;
    setSorts: Dispatch<SetStateAction<SortOption>>
}

const MyPlanActions = ({isToday, setIsToday, sorts, setSorts}: MyPlanActionsProps) => {
    
  return (
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex w-full gap-1 rounded-xl bg-neutral-900 p-1.5 text-sm font-semibold sm:w-auto">
              <button
                  onClick={() => setIsToday('add')}
                  type="button"
                  className={`
                flex-1
                rounded-lg
                px-4 py-2
                text-center
                transition-all duration-200
                cursor-pointer
                sm:flex-none
                ${
                    isToday === 'add'
                        ? 'bg-primary/10 text-primary'
                        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                }
            `}
              >
                  Today&apos;s Plan
              </button>

              <button
                  onClick={() => setIsToday('save')}
                  type="button"
                  className={`
                flex-1
                rounded-lg
                px-4 py-2
                text-center
                transition-all duration-200
                cursor-pointer
                sm:flex-none
                ${
                    isToday === 'save'
                        ? 'bg-primary/10 text-primary'
                        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                }
            `}
              >
                  Saved
              </button>
          </div>

          {/* Sort */}
          <div className="w-full sm:w-auto">
              <MyPlanSort sorts={sorts} setSorts={setSorts} />
          </div>
      </div>
  );
};

export default MyPlanActions;