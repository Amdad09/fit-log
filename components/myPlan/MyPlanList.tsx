
import type { Workout } from '@/types/workout';

import MyPlanCard from './MyPlanCard';
import Link from 'next/link';

interface MyPlanListProps {
    plans: Workout[] | null;
    isToday: 'add' | 'save';
    doneIds: number[];
    hasDone: (id: number) => void;
}
const MyPlanList = ({ plans, isToday, doneIds, hasDone }: MyPlanListProps) => {
    return (
        <div className='pt-6'>
            {plans?.length === 0 ? (
                <div className='flex flex-col justify-center items-center h-60 rounded-lg border border-gray-900'>
                    <h2 className='text-xl font-bold uppercase'>Nothing here {isToday === 'add'? "today plan's":"Saved plan's"} yet</h2>
                    <p className='text-neutral-400 pt-1 pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <Link href='/' className='py-2 px-4 bg-primary text-neutral-900 font-semibold text-sm rounded-full'>Go to Workout</Link>
                </div>
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
        </div>
    );
};

export default MyPlanList;