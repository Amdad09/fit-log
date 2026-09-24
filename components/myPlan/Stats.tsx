import type { Workout } from "@/types/workout";

interface StatsProps {
    plans: Workout[];
    times: number;
    cals: number;
}

const Stats = ({ plans, times, cals }: StatsProps) => {
  return (
      <div className="mt-6 grid grid-cols-3 gap-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <div>
              <p className="text-xs text-neutral-400">Exercises</p>
              <p className="mt-1 text-2xl font-extrabold text-lime-400">{ plans.length}</p>
          </div>
          <div>
              <p className="text-xs text-neutral-400">Minutes</p>
              <p className="mt-1 text-2xl font-extrabold">{times}</p>
          </div>
          <div>
              <p className="text-xs text-neutral-400">Calories</p>
              <p className="mt-1 text-2xl font-extrabold">{cals}</p>
          </div>
      </div>
  );
};

export default Stats;