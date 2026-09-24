import type { Workout } from '@/types/workout';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
interface MyPlanCardProps {
    plan: Workout;
    isToday: 'add' | 'save';
    doneIds: number[];
    hasDone: (id: number) => void;
}
const MyPlanCard = ({ plan, isToday, doneIds, hasDone }: MyPlanCardProps) => {
    const isDone = doneIds.includes(plan.id);
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{plan.name}</p>
                <p className="truncate text-xs text-neutral-400">
                    {plan.equipment}
                </p>
                <div className="mt-1 flex items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {plan.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                        <Flame className="h-3.5 w-3.5 text-primary" />
                        {plan.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-primary" />
                        {plan.rating}
                    </span>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
                <Link
                    href={`/workouts/${plan.id}`}
                    className="rounded-full border border-neutral-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                    View Details
                </Link>

                {isToday === 'add' && (
                    <button
                        onClick={() => hasDone(plan.id)}
                        type="button"
                        className={`flex items-center gap-1.5 rounded-full  px-4 py-1.5 text-sm font-semibold text-neutral-900  ${isDone ? 'bg-lime-400/30 cursor-not-allowed ' : 'bg-primary hover:bg-lime-500'}`}
                        // disabled={isDone}
                    >
                        <Check className="h-4 w-4" />
                        {isDone ? 'Completed' : 'Mark as Done'}
                    </button>
                )}

                <button
                    type="button"
                    aria-label="Remove"
                    className="p-1 text-neutral-500 hover:text-white"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default MyPlanCard;
