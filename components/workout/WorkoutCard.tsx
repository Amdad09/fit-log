import type { Workout } from "@/types/workout";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({workout}: {workout: Workout}) => {
    return (
      <Link
          href={`/workouts/${workout.id}`}
          className="w-full max-w-xs text-left rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-xl shadow-black/30 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
      >
          {/* Image */}
          <div className="relative h-60 w-full">
              <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/10 to-transparent" />

              {/* Muscle group pills */}
              <div className="absolute bottom-3 left-3 flex gap-2">
                  {workout.muscleGroups.map((group) => (
                      <span
                          key={group}
                          className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-neutral-900"
                      >
                          {group}
                      </span>
                  ))}
              </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-3 pb-4">
              <h3 className="text-lg font-bold text-white leading-snug">
                  {workout.name}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-400">
                  {workout.equipment}
              </p>

              <div className="mt-3 border-t border-neutral-800" />

              <div className="mt-3 flex items-center justify-between text-sm text-neutral-300">
                  <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-neutral-400" />
                      <span>{workout.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                      <Flame className="h-4 w-4 text-neutral-400" />
                      <span>{workout.caloriesBurned} kcal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{workout.rating}</span>
                  </div>
              </div>
          </div>
      </Link>
  );
};

export default WorkoutCard;