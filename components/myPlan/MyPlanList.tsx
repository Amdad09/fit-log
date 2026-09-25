
import type { Workout } from '@/types/workout';

import MyPlanCard from './MyPlanCard';
import Link from 'next/link';
import Button from '../ui/Button';

interface MyPlanListProps {
    // plans: Workout[] | null;
    sortedPlans: Workout[] | null;
    isToday: 'add' | 'save';
    doneIds: number[];
    hasDone: (id: number) => void;
    onDelete: (id: number) => void;
}
const MyPlanList = ({
    sortedPlans,
    // plans,
    isToday,
    doneIds,
    hasDone,
    onDelete,
}: MyPlanListProps) => {
    return (
        <div className="pt-6">
            {sortedPlans?.length === 0 ? (
                <div className="flex flex-col justify-center p-6 items-center h-80 rounded-lg border border-gray-900">
                    <h2 className="text-xl font-bold uppercase">
                        Nothing here{' '}
                        {isToday === 'add' ? "today plan's" : "Saved plan's"}{' '}
                        yet
                    </h2>
                    <p className="text-neutral-400 pt-1 pb-3">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link href="/">
                        <Button className='mt-4'>Go to Workouts</Button>
                    </Link>
                </div>
            ) : (
                <div className="mt-4 space-y-3">
                    {sortedPlans?.map((plan) => (
                        <MyPlanCard
                            key={plan.id}
                            plan={plan}
                            isToday={isToday}
                            doneIds={doneIds}
                            hasDone={hasDone}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyPlanList;