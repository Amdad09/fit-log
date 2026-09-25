
import { ChevronDown } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
export type SortOption = 'Duration' | 'Calories' | 'Rating'

interface MyPlanSortProps {
    sorts: SortOption;
    setSorts: Dispatch<SetStateAction<SortOption>>;
}


const MyPlanSort = ({ sorts, setSorts }: MyPlanSortProps) => {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-500">Sort By</span>
            <div className="relative inline-block">
                <select
                    className="appearance-none rounded-lg border border-neutral-800 bg-neutral-900 py-1.5 pl-3 pr-9 text-sm text-neutral-300 outline-none focus:border-lime-400"
                    value={sorts}
                    onChange={(e) => setSorts(e.target.value as SortOption)}
                >
                    <option value="Duration">Duration</option>
                    <option value="Calories">Calories</option>
                    <option value="Rating">Rating</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            </div>
        </div>
    );
};

export default MyPlanSort;