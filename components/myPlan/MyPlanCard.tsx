import type { Workout } from '@/types/workout';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
interface MyPlanCardProps {
    plan: Workout;
    isToday: 'add' | 'save';
    doneIds: number[];
    hasDone: (id: number) => void;
    onDelete: (id: number) => void;
}
const MyPlanCard = ({ plan, isToday, doneIds, hasDone ,onDelete }: MyPlanCardProps) => {
    const isDone = doneIds.includes(plan.id);
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3">
            <div className="relative h-25 w-43 shrink-0 overflow-hidden rounded-xl">
                <Image src={plan.image} alt={plan.name} fill />
            </div>

            <div className="flex-1">
                <h3 className="truncate mb-0.5 text-lg uppercase font-bold">
                    {plan.name}
                </h3>
                <p className="truncate text-sm mb-2 text-neutral-400">
                    {plan.equipment}
                </p>
                <div className="mt-1 flex items-center gap-3 text-sm text-neutral-200">
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
                    className="
  inline-flex items-center gap-2
  rounded-full
  border border-neutral-700
  px-5 py-2.5
  text-sm font-semibold text-white
  transition-all duration-200 ease-out
  hover:border-neutral-500
  hover:bg-neutral-900
  hover:-translate-y-0.5
  active:translate-y-0
  active:scale-[0.98]
  cursor-pointer
"
                >
                    View Details
                </Link>

                {isToday === 'add' && (
                    <Button
                        className={`${isDone ? 'bg-lime-400 opacity-50 cursor-not-allowed ' : 'bg-primary hover:bg-lime-300'} rounded-full`}
                        onClick={() => hasDone(plan.id)}
                        type="button"
                        disabled={isDone}
                    >
                        <Check className='mr-1' />
                        {isDone ? 'Completed' : 'Mark as Done'}
                    </Button>
                )}

                <button
                    onClick={() => onDelete(plan.id)}
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
