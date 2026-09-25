import type { CreateMeal, Meal } from '@/types/meal';
import Image from 'next/image';
import { Beef, Wheat, Droplet, Eye, Trash2 } from 'lucide-react';
import Link from 'next/link';
import EditMealButton from '../addMeal/EditMealButton';

interface MealCardProps {
    meal: Meal;
    onDelete: (id: string) => void;
    onEdit: (id: string, updateMeal: CreateMeal) => void;
}

export default function MealCard({ meal, onDelete }: MealCardProps) {
    return (
        <article className="w-full max-w-xs rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-xl shadow-black/30 transition-transform hover:-translate-y-1">
            {/* Image */}
            <div className="relative h-44 w-full">
                <Image
                    src={meal.image}
                    alt={meal.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/10 to-transparent" />

                {/* Meal type pill */}
                <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-neutral-900">
                        {meal.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 pt-3 pb-4">
                <h3 className="text-lg font-bold text-white leading-snug">
                    {meal.name}
                </h3>
                <p className="mt-0.5 text-sm text-lime-400">
                    {meal.calories} kcal
                </p>

                <div className="mt-3 border-t border-neutral-800" />

                <div className="mt-3 flex items-center justify-between text-sm text-neutral-300">
                    <div className="flex items-center gap-1.5">
                        <Beef className="h-4 w-4 text-neutral-400" />
                        <span>{meal.protein}g</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Wheat className="h-4 w-4 text-neutral-400" />
                        <span>{meal.carbs}g</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Droplet className="h-4 w-4 text-neutral-400" />
                        <span>{meal.fat}g</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                    <Link
                        href={`/myMeal/${meal.id}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-lime-400 px-3 py-2 text-xs font-semibold text-neutral-900 transition hover:bg-lime-300"
                    >
                        <Eye className="h-3.5 w-3.5" />
                        View Details
                    </Link>
                    <EditMealButton meal={ meal} />
                    <button
                        type="button"
                        onClick={() => onDelete?.(meal.id)}
                        aria-label={`Delete ${meal.name}`}
                        className="flex items-center justify-center rounded-xl border border-red-500/20 p-2 text-red-400 transition hover:bg-red-500/10"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </article>
    );
}
