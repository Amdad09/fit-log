const Stats = () => {
  return (
      <div className="mt-6 grid grid-cols-3 gap-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <div>
              <p className="text-xs text-neutral-400">Exercises</p>
              <p className="mt-1 text-2xl font-extrabold text-lime-400">2</p>
          </div>
          <div>
              <p className="text-xs text-neutral-400">Minutes</p>
              <p className="mt-1 text-2xl font-extrabold">23</p>
          </div>
          <div>
              <p className="text-xs text-neutral-400">Calories</p>
              <p className="mt-1 text-2xl font-extrabold">190</p>
          </div>
      </div>
  );
};

export default Stats;