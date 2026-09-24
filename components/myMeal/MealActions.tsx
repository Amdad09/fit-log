'use client'
import {Flame, Beef, Wheat, Droplet} from "lucide-react";
import { useMeal } from "@/hooks/useMeal";
import MealCard from "./MealCard";

const MealActions = () => {
    const { meals } = useMeal();
  return (
      <div>
          
          <section className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Flame className="h-3.5 w-3.5 text-lime-400" />
                      Calories
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">1,590</p>
                  <p className="mt-1 text-xs text-neutral-500">kcal today</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Beef className="h-3.5 w-3.5 text-lime-400" />
                      Protein
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">101g</p>
                  <p className="mt-1 text-xs text-neutral-500">consumed</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Wheat className="h-3.5 w-3.5 text-lime-400" />
                      Carbs
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">180g</p>
                  <p className="mt-1 text-xs text-neutral-500">consumed</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Droplet className="h-3.5 w-3.5 text-lime-400" />
                      Fat
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">42g</p>
                  <p className="mt-1 text-xs text-neutral-500">consumed</p>
              </div>
          </section>
          {/* Meals */}
          <section className="mt-14">
              <div className="mb-6 flex items-center justify-between">
                  <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ccff00]">
                          Today
                      </p>

                      <h2 className="mt-1 text-2xl font-black uppercase">
                          Today&apos;s Meals
                      </h2>
                  </div>

                  <span className="rounded-full border border-white/10 bg-[#1e1f24] px-3 py-1 text-xs text-gray-400">
                      3 Meals
                  </span>
              </div>

              {/* Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {meals.map((meal) => (
                      <MealCard key={meal.id} meal={meal} />
                  ))}
              </div>
          </section>
      </div>
  );
};

export default MealActions;