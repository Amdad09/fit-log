'use client'
import {Flame, Beef, Wheat, Droplet} from "lucide-react";
import { useMeal } from "@/hooks/useMeal";
import MealCard from "./MealCard";
import Link from "next/link";

const MealActions = () => {
    const { meals, onDelete, onEdit } = useMeal();
    const calories = meals.reduce((total, meal) => total + meal.calories, 0);
    const fat = meals.reduce((total, meal) => total + meal.fat, 0);
    const protien = meals.reduce((total, meal) => total + meal.protein, 0);
    const carbons = meals.reduce((total, meal) => total + meal.carbs, 0);

  return (
      <div>
          <section className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Flame className="h-3.5 w-3.5 text-lime-400" />
                      Calories
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">{calories}</p>
                  <p className="mt-1 text-xs text-neutral-500">kcal today</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Beef className="h-3.5 w-3.5 text-lime-400" />
                      Protein
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">{protien}g</p>
                  <p className="mt-1 text-xs text-neutral-500">consumed</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Wheat className="h-3.5 w-3.5 text-lime-400" />
                      Carbs
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">{carbons}g</p>
                  <p className="mt-1 text-xs text-neutral-500">consumed</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Droplet className="h-3.5 w-3.5 text-lime-400" />
                      Fat
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">{fat}g</p>
                  <p className="mt-1 text-xs text-neutral-500">consumed</p>
              </div>
          </section>
          {/* Meals */}
          <section className="mt-14">
              {meals.length === 0 ? (
                  <div className="flex flex-col justify-center items-center h-60 rounded-lg border-2 border-gray-800">
                      <h2 className="text-xl font-bold uppercase">
                          Nothing here yet
                      </h2>
                      <p className="text-neutral-400 pt-1 pb-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                      </p>
                      <Link
                          href="/addMeal"
                          className="rounded-xl bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
                      >
                          + Add Meal
                      </Link>
                  </div>
              ) : (
                  <div>
                      <div className="mb-6 flex items-center justify-between">
                          <div>
                              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ccff00]">
                                  Today
                              </p>

                              <h2 className="mt-1 text-2xl font-black uppercase">
                                  Today&apos;s Meals
                              </h2>
                          </div>

                          <span className="rounded-full border border-white/10 bg-[#1e1f24] px-3 py-1 text-xs text-gray-400 hover:text-primary">
                              {meals.length} Meals
                          </span>
                      </div>

                      {/* Cards */}
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {meals.map((meal) => (
                              <MealCard
                                  key={meal.id}
                                  meal={meal}
                                  onDelete={onDelete}
                                  onEdit={onEdit}
                              />
                          ))}
                      </div>
                  </div>
              )}
          </section>
      </div>
  );
};

export default MealActions;