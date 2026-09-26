'use client';
import { useWorkout } from '@/hooks/useWorkout';
import { useState } from 'react';
import MyPlanActions from './MyPlanActions';
import MyPlanList from './MyPlanList';
import type { SortOption } from './MyPlanSort';
import Stats from './Stats';
import Link from 'next/link';
import WorkoutComplete from './WorkoutComplete';
// import { useSearchParams } from "next/navigation";

const ActionsPage = () => {
    const { todayPlans, hasDone, donePlans, savePlans, onDeletePlan, onDeleteSave } =
        useWorkout();
    // const searchParams = useSearchParams();
    // const tab = searchParams.get('tab');
    const [isToday, setIsToday] = useState<'add' | 'save'>('add');

    // const [doneIds, setDoneIds] = useState<number[]>([]);
    // const [donePlans, setDonePlans] = useState<Workout[]>([]);
    const [sorts, setSorts] = useState<SortOption>('Duration');

    const plans = isToday === 'add' ? todayPlans : savePlans;
    const onDelete = isToday === 'add' ? onDeletePlan : onDeleteSave;
    

    // const handleHasDone = (id: number) => {
    //     const workout = todayPlans.find((plan) => plan.id === id);

    //     if (!workout) return;

    //     toast.success('Workout has done!');
    //     setDoneIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    //     setDonePlans((prev) => [...prev, workout]);
    //     setTodayPlans((prev) => prev.filter((plan) => plan.id !== id));
    // };

    const calories = donePlans.reduce((total, plan) => total + plan.caloriesBurned, 0);
    const times = donePlans.reduce((total, plan) => total + plan.duration, 0);

    const sortedPlans = [...plans].sort((a, b) => {
        if (sorts === 'Duration') {
            return a.duration - b.duration;
        }
        if (sorts === 'Calories') {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sorts === 'Rating') {
            return b.rating - a.rating;
        }

        return 0;
    });

    return (
        <div>
            {/* Stats */}
            <Stats plans={plans} />

            {isToday === 'add' && (
                <div className="space-y-6 pt-12">
                    {/* Progress Header */}
                    {/* <h3 className="text-xl font-bold mt-8 leading-[1.2em] uppercase tracking-wide">
                        My Daily Progress{' '}
                    </h3> */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Daily Progress
                            </p>

                            <p className="mt-1 text-xl font-bold tracking-tight text-base-content sm:text-2xl">
                                {donePlans.length}
                                <span className="text-base-content/40">/5</span>
                                <span className="text-sm font-medium text-base-content/50">
                                    exercises
                                </span>

                                <span className="ml-2">{calories}</span>
                                <span className="text-sm font-medium text-base-content/50">
                                    calories
                                </span>
                                <span className="ml-2">{times}</span>
                                <span className="text-sm font-medium text-base-content/50">
                                    minutes
                                </span>

                                <span className="ml-2 text-sm font-medium text-base-content/50">
                                    ({donePlans.length < 5 ? 'Continue...' : 'Completed'})
                                </span>
                            </p>
                        </div>

                        {/* Progress percentage */}
                        <div className="text-sm font-semibold text-base-content/50">
                            {donePlans.length === 5
                                ? 'All workouts completed'
                                : `${5 - donePlans.length} remaining`}
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="w-full overflow-x-auto pb-2">
                        <ul className="steps min-w-155 w-full">
                            {Array.from({ length: 5 }).map((_, index) => {
                                const isDone = index < donePlans.length;
                                const workout = donePlans[index];

                                return (
                                    <li
                                        key={index}
                                        className={`step ${
                                            isDone ? 'step-primary' : ''
                                        }`}
                                    >
                                        {isDone ? (
                                            <Link
                                                href={`/workouts/${workout?.id}`}
                                                className="
                                    max-w-28 truncate
                                    border-b border-primary/50
                                    text-xs font-semibold
                                    text-base-content/60
                                    transition-colors
                                    hover:border-primary
                                    hover:text-primary
                                    sm:max-w-36
                                    sm:text-sm
                                "
                                            >
                                                {workout?.name}
                                            </Link>
                                        ) : (
                                            <span className="text-xs font-medium text-base-content/40 sm:text-sm">
                                                Workout {index + 1}
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Celebration */}
                    {donePlans.length === 5 && <WorkoutComplete />}
                </div>
            )}

            {/* Tabs + Sort */}
            <MyPlanActions
                isToday={isToday}
                setIsToday={setIsToday}
                sorts={sorts}
                setSorts={setSorts}
            />

            {/* List */}
            <MyPlanList
                //   plans={plans}
                sortedPlans={sortedPlans}
                isToday={isToday}
                donePlans={donePlans}
                hasDone={hasDone}
                onDelete={onDelete}
            />
        </div>
    );
};

export default ActionsPage;
