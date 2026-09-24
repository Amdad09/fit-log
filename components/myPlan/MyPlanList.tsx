
import type { Workout } from '@/types/workout';

import MyPlanCard from './MyPlanCard';

interface MyPlanListProps {
    plans: Workout[] | null;
    isToday: 'add' | 'save';
    doneIds: number[];
    hasDone: (id: number) => void;
}
const MyPlanList = ({ plans, isToday, doneIds, hasDone }: MyPlanListProps) => {
    return (
        <>
            {plans?.length === 0 ? (
                <div></div>
            ) : (
                <div className="mt-4 space-y-3">
                    {plans?.map((plan) => (
                        <MyPlanCard
                            key={plan.id}
                            plan={plan}
                            isToday={isToday}
                            doneIds={doneIds}
                            hasDone={hasDone}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default MyPlanList;