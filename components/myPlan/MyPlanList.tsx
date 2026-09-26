
import type { Workout } from '@/types/workout';

import MyPlanCard from './MyPlanCard';
import Link from 'next/link';
import Button from '../ui/Button';
import CardMotion from '../motion/CardMotion';

interface MyPlanListProps {
    // plans: Workout[] | null;
    sortedPlans: Workout[] | null;
    isToday: 'add' | 'save';
    donePlans: Workout[];
    hasDone: (workout: Workout) => void;
    onDelete: (id: number) => void;
}
const MyPlanList = ({
    sortedPlans,
    // plans,
    isToday,
    donePlans,
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
                        <Button className="mt-4" disabled={donePlans.length === 5}title='Not available for today!'>Go to Workouts</Button>
                    </Link>
                </div>
            ) : (
                <div className="mt-4 space-y-3">
                    {sortedPlans?.map((plan) => (
                        <CardMotion key={plan.id}>
                            <MyPlanCard
                                plan={plan}
                                isToday={isToday}
                                donePlans={donePlans}
                                hasDone={hasDone}
                                onDelete={onDelete}
                            />
                        </CardMotion>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyPlanList;