'use client';

import { useMeal } from '@/hooks/useMeal';
import type { CreateMeal } from '@/types/meal';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import SectionHeading from '../sections/SectionHeading';
import { toast } from 'sonner';

const initialMeal: CreateMeal = {
    name: 'Grilled Chicken Rice',
    type: 'Lunch',
    calories: 520,
    protein: 42,
    carbs: 58,
    fat: 12,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435',
    notes: 'High-protein lunch with grilled chicken and rice.',
};

const AddMealForm = () => {
    const searchParams = useSearchParams();
    const mealId = searchParams.get('id');

    return <MealForm key={mealId ?? 'new'} mealId={mealId} />;
};

const MealForm = ({ mealId }: { mealId: string | null }) => {
    const { onAdd, onEdit, meals } = useMeal();
    const router = useRouter();
    const isEditMode = Boolean(mealId);

    const [meal, setMeal] = useState<CreateMeal>(() => {
        const editingMeal = meals.find((m) => m.id === mealId);
        if (!editingMeal) return initialMeal;

        return {
            name: editingMeal.name,
            type: editingMeal.type,
            calories: editingMeal.calories,
            protein: editingMeal.protein,
            carbs: editingMeal.carbs,
            fat: editingMeal.fat,
            image: editingMeal.image,
            notes: editingMeal.notes,
        };
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;

        setMeal((prev) => ({
            ...prev,
            [name]: ['calories', 'protein', 'carbs', 'fat'].includes(name)
                ? Number(value)
                : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isEditMode && mealId) {
            toast.success('Meal Updated!')
            router.push('/myMeal');
            onEdit(mealId, meal);
        } else {
            onAdd(meal);
            router.push('/myMeal');
            toast.success('Meal Added Successfully!');
            setMeal(initialMeal);
        }
    };

    return (
        <>
            <SectionHeading
                eyebrow="Nutrition"
                title={isEditMode ? 'Edit Meal' : 'Add Meal'}
                description="Add your meal and keep track of your daily nutrition."
            />
            <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-white/10 bg-[#1e1f24] p-6 sm:p-8"
            >
                <h2 className="text-lg font-bold uppercase tracking-wide text-white">
                    {isEditMode ? 'Edit Meal' : 'Add Meal'}
                </h2>

                {/* Meal Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Meal Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={meal.name}
                        onChange={handleChange}
                        placeholder="e.g. Chicken & Rice"
                        className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#ccff00]"
                    />
                </div>

                {/* Meal Type */}
                <div>
                    <label
                        htmlFor="type"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Meal Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={meal.type}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none focus:border-[#ccff00]"
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>

                {/* Nutrition */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="calories"
                            className="mb-2 block text-sm font-medium text-white"
                        >
                            Calories
                        </label>
                        <input
                            id="calories"
                            type="number"
                            name="calories"
                            min={0}
                            required
                            value={meal.calories}
                            onChange={handleChange}
                            placeholder="550"
                            className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="protein"
                            className="mb-2 block text-sm font-medium text-white"
                        >
                            Protein (g)
                        </label>
                        <input
                            id="protein"
                            type="number"
                            name="protein"
                            min={0}
                            required
                            value={meal.protein}
                            onChange={handleChange}
                            placeholder="35"
                            className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="carbs"
                            className="mb-2 block text-sm font-medium text-white"
                        >
                            Carbs (g)
                        </label>
                        <input
                            id="carbs"
                            type="number"
                            name="carbs"
                            min={0}
                            required
                            value={meal.carbs}
                            onChange={handleChange}
                            placeholder="60"
                            className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="fat"
                            className="mb-2 block text-sm font-medium text-white"
                        >
                            Fat (g)
                        </label>
                        <input
                            id="fat"
                            type="number"
                            name="fat"
                            min={0}
                            required
                            value={meal.fat}
                            onChange={handleChange}
                            placeholder="15"
                            className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                        />
                    </div>
                </div>

                {/* Image */}
                <div>
                    <label
                        htmlFor="image"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Food Image URL
                    </label>
                    <input
                        id="image"
                        type="url"
                        name="image"
                        required
                        value={meal.image}
                        onChange={handleChange}
                        placeholder="https://example.com/food.jpg"
                        className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                    />
                </div>

                {/* Notes */}
                <div>
                    <label
                        htmlFor="notes"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Notes
                    </label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={meal.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Add some notes about this meal..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full rounded-xl bg-primary px-5 py-3 font-bold tracking-wide text-neutral-800 transition hover:bg-lime-300 active:scale-[0.98]"
                >
                    {isEditMode ? 'Save Changes' : 'Add Meal'}
                </button>
            </form>
        </>
    );
};

export default AddMealForm;
