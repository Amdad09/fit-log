'use client'
import { useWorkout } from '@/hooks/useWorkout';
import Link from 'next/link';
const Actions = () => {
    const {todayPlans, savePlans } = useWorkout();
    return (
        <div className="navbar-end font-semibold text-slate-400 gap-4">
            <Link href="/myPlan" className="">
                Plan{' '}
                <span className="text-slate-900 ml-2 bg-primary w-8 h-8 inline-flex items-center justify-center border rounded-full">
                    {todayPlans.length}
                </span>
            </Link>
            <Link href="/myPlan" className="">
                Saved{' '}
                <span className="text-slate-400 ml-2 w-8 h-8 inline-flex items-center justify-center border rounded-full">
                    {savePlans.length}
                </span>
            </Link>
        </div>
    );
};

export default Actions;
