'use client'
import type { Meal } from "@/types/meal";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

interface EditMealButtonProps{
    meal: Meal;
}
const EditMealButton = ({ meal }: EditMealButtonProps) => {
    const router = useRouter();
  return (
      <button
          type="button"
          onClick={() => router.push(`/addMeal?id=${meal.id}`)}
          aria-label={`Edit ${meal.name}`}
          className="flex items-center w-15 justify-center rounded-xl border border-neutral-700 p-2 text-white transition hover:border-lime-400 hover:text-lime-400"
      >
          <Pencil className="h-4 w-4" />
      </button>
  );
};

export default EditMealButton;