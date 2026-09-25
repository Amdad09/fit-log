'use client';

import { useWorkout } from '@/hooks/useWorkout';
import Link from 'next/link';

const Actions = () => {
    const { todayPlans, savePlans } = useWorkout();

    return (
        <div className="navbar-end flex gap-2 text-xs font-semibold text-slate-400 sm:gap-3 sm:text-sm md:gap-4">
            <Link
                href="/myPlan?tab=add"
                className="flex items-center whitespace-nowrap"
            >
                Plan
                <span className="ml-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-slate-900 sm:ml-2 sm:h-7 sm:w-7">
                    {todayPlans.length}
                </span>
            </Link>

            <Link
                href="/myPlan?tab=save"
                className="flex items-center whitespace-nowrap"
            >
                Saved
                <span className="ml-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-base-content/20 text-xs sm:ml-2 sm:h-7 sm:w-7">
                    {savePlans.length}
                </span>
            </Link>
        </div>
    );
};

export default Actions;
