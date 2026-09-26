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
        <div
            className="
        overflow-hidden rounded-2xl
        border border-neutral-800
        bg-neutral-900/60
        transition-all duration-200
        hover:border-neutral-700
        hover:bg-neutral-900
    "
        >
            <div className="flex flex-col gap-4 p-3 sm:p-4 lg:flex-row lg:items-center">
                {/* Image */}
                <div
                    className="
                relative
                h-48 w-full
                shrink-0
                overflow-hidden rounded-xl
                sm:h-52
                lg:h-24 lg:w-36
            "
                >
                    <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 144px"
                        className="object-cover"
                    />
                </div>

                {/* Workout Info */}
                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <h3 className="truncate text-lg font-bold uppercase tracking-tight text-white">
                                {plan.name}
                            </h3>

                            <p className="mt-0.5 truncate text-sm text-neutral-400">
                                {plan.equipment}
                            </p>
                        </div>

                        {/* Delete - mobile/tablet */}
                        <button
                            onClick={() => onDelete(plan.id)}
                            type="button"
                            aria-label={`Remove ${plan.name}`}
                            className="
                            md:hidden
                        shrink-0 rounded-full p-2
                        text-neutral-500
                        transition-colors duration-200
                        hover:bg-red-500/10
                        hover:text-red-400
                    "
                        >
                            <X className="h-7 w-7" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-300">
                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <Clock className="h-3.5 w-3.5 text-primary" />
                            {plan.duration} min
                        </span>

                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <Flame className="h-3.5 w-3.5 text-primary" />
                            {plan.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <Star className="h-3.5 w-3.5 text-primary" />
                            {plan.rating}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div
                    className="
                flex w-full flex-col gap-2
                sm:flex-row
                lg:w-auto lg:shrink-0
            "
                >
                    <Link
                        href={`/workouts/${plan.id}`}
                        className="
                    inline-flex
                    min-h-10
                    flex-1 items-center justify-center
                    rounded-full
                    border border-neutral-700
                    px-5 py-2.5
                    text-sm font-semibold text-white
                    transition-all duration-200 ease-out
                    hover:-translate-y-0.5
                    hover:border-neutral-500
                    hover:bg-neutral-800
                    active:translate-y-0
                    active:scale-[0.98]
                    lg:flex-none
                "
                    >
                        View Details
                    </Link>

                    {isToday === 'add' && (
                        <Button
                            className={`
                        min-h-10
                        flex-1
                        rounded-full
                        text-sm font-semibold
                        transition-all duration-200
                        lg:flex-none
                        ${
                            isDone
                                ? 'cursor-not-allowed bg-lime-400/50 text-neutral-900'
                                : 'bg-primary text-neutral-950 hover:bg-lime-300'
                        }
                    `}
                            onClick={() => hasDone(plan.id)}
                            type="button"
                            disabled={isDone}
                        >
                            <Check className="mr-1 h-4 w-4" />
                            {isDone ? 'Completed' : 'Mark as Done'}
                        </Button>
                    )}
                    <button
                        onClick={() => onDelete(plan.id)}
                        type="button"
                        aria-label={`Remove ${plan.name}`}
                        className="
                            hidden md:block
                        shrink-0 rounded-full p-2
                        text-neutral-500
                        transition-colors duration-200
                        hover:bg-red-500/10
                        hover:text-red-400
                        cursor-pointer
                    "
                        title='Remove from plan'
                    >
                        <X className="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyPlanCard;
