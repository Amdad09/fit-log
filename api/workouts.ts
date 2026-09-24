import type { Workout } from "@/types/workout";

export const getWorkouts = async (): Promise<Workout[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
        cache: 'force-cache',
    });
    return res.json();
};

export const getWorkout = async (id: number): Promise<Workout> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
        cache: 'force-cache',
    });
    return res.json();
};
