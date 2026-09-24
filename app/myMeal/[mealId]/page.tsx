'use client'
import Image from "next/image";
import { Pencil, Trash2 } from 'lucide-react';
import { use } from "react";
import { useMeal } from "@/hooks/useMeal";
import Container from "@/components/ui/Container";
interface MealDetailsProps{
    params: Promise<{mealId: string}>
}
const MealDetails = ({ params }: MealDetailsProps) => {
    const { mealId } = use(params);
    const {meals} = useMeal();
    const meal = meals.find(meal => meal.id === mealId);

    if(!meal) return <div>Not found the meal!</div>
    // const meal = 
    const stats: { label: string; value: string | number }[] = [
        { label: 'Type', value: meal.type },
        { label: 'Calories', value: `${meal.calories} kcal` },
        { label: 'Protein', value: `${meal.protein}g` },
        { label: 'Carbs', value: `${meal.carbs}g` },
        { label: 'Fat', value: `${meal.fat}g` },
    ];
    return (
        <div className="bg-neutral-950 text-white py-12 md:py-16">
            <Container>
                <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 md:p-10">
                    {/* Image */}
                    <div className="relative h-80 w-full overflow-hidden rounded-3xl md:h-full">
                        <Image
                            src={meal.image}
                            alt={meal.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 480px"
                            className="object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            {meal.name.toUpperCase()}
                        </h1>
                        {meal.notes && (
                            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                                {meal.notes}
                            </p>
                        )}

                        <div className="mt-4 flex gap-2">
                            <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-neutral-900">
                                {meal.type}
                            </span>
                        </div>

                        {/* Stats table */}
                        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-800">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                                        i % 2 === 0
                                            ? 'bg-neutral-900'
                                            : 'bg-neutral-900/40'
                                    }`}
                                >
                                    <span className="text-neutral-400">
                                        {stat.label.toUpperCase()}
                                    </span>
                                    <span className="font-medium text-white">
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex gap-3">
                            <button
                                type="button"
                                //   onClick={() => onEdit?.(meal)}
                                className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-lime-300"
                            >
                                <Pencil className="h-4 w-4" />
                                Edit
                            </button>
                            <button
                                type="button"
                                //   onClick={() => onDelete?.(meal)}
                                className="flex items-center gap-2 rounded-full border border-red-500/20 px-5 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                            >
                                <Trash2 className="h-4 w-4" />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MealDetails;