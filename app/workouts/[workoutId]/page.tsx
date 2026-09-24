import { getWorkout } from "@/api/workouts";
import Container from "@/components/ui/Container";
import WorkoutActions from "@/components/workout/WorkoutActions";
import Image from "next/image";
import Link from "next/link";

interface WorkoutDetailsProps{
    params: Promise<{workoutId: number }>;
}

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
    const { workoutId } = await params;
    const workout = await getWorkout(workoutId);
    
    const stats: { label: string; value: string | number }[] = [
        { label: 'Equipment', value: workout.equipment },
        { label: 'Difficulty', value: workout.difficulty },
        { label: 'Sets', value: workout.sets },
        { label: 'Reps', value: workout.reps },
        { label: 'Duration', value: `${workout.duration} min` },
        { label: 'Calories', value: `${workout.caloriesBurned} kcal` },
        { label: 'Rating', value: workout.rating },
    ];

    return (
        <div className=" bg-neutral-950">
            <Container className="py-12 md:py-16">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Link
                        href="/"
                        className="transition-colors hover:text-primary"
                    >
                        Workout
                    </Link>

                    <span>/</span>

                    <span className="text-gray-700 dark:text-gray-200">
                        {workout.name}
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-10  p-6 text-white md:grid-cols-2 md:p-10">
                    {/* Image */}
                    <div className="relative h-80 w-full overflow-hidden rounded-3xl md:h-full">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 480px"
                            className="object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-extrabold tracking-tight">
                            {workout.name.toUpperCase()}
                        </h1>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                            {workout.description}
                        </p>

                        <div className="mt-4 flex gap-2">
                            {workout.muscleGroups.map((group) => (
                                <span
                                    key={group}
                                    className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-neutral-900"
                                >
                                    {group}
                                </span>
                            ))}
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

                        {/* Instructions */}
                        <h2 className="mt-8 text-base font-bold">
                            Instructions
                        </h2>
                        <ol className="mt-3 space-y-2 text-sm text-neutral-300">
                            {workout.instructions.map((step, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-neutral-500">
                                        {i + 1}.
                                    </span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>

                        {/* Actions */}
                        <WorkoutActions workout={workout} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WorkoutDetails;