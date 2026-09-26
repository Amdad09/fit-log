'use client'
import {Flame, Beef, Wheat, Droplet} from "lucide-react";
import { useMeal } from "@/hooks/useMeal";
import MealCard from "./MealCard";
import Link from "next/link";
import Button from "../ui/Button";
import {motion} from 'framer-motion'
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
                  <p className="mt-3 text-3xl font-black text-white">
                      {calories}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">kcal today</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Beef className="h-3.5 w-3.5 text-lime-400" />
                      Protein
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">
                      {protien}g
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">consumed</p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <Wheat className="h-3.5 w-3.5 text-lime-400" />
                      Carbs
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">
                      {carbons}g
                  </p>
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
                  <div className="flex flex-col justify-center items-center h-70 rounded-lg border-2 border-gray-800 p-6 text-center">
                      <h2 className="text-xl font-bold uppercase">
                          Nothing here yet
                      </h2>
                      <p className="text-neutral-400 pt-1 pb-3">
                          Proper nutrition is just as important as exercise
                      </p>
                      <Link href="/addMeal">
                          <Button className="mt-4 hover:bg-lime-300">
                              + Add Meal
                          </Button>
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
                          {meals.map((meal, index) => (
                              <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{once: true, amount: 0.15}}
                                  transition={{
                                      duration: 0.4,
                                      delay: index * 0.05,
                                      ease: 'easeOut'
                                  }}
                                  key={meal.id}>
                                  <MealCard
                                      meal={meal}
                                      onDelete={onDelete}
                                      onEdit={onEdit}
                                  />
                              </motion.div>
                          ))}
                      </div>
                  </div>
              )}
          </section>
      </div>
  );
};

export default MealActions;