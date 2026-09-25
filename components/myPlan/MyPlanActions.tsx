
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

          <MyPlanSort sorts={sorts} setSorts={setSorts} />
      </div>
  );
};

export default MyPlanActions;