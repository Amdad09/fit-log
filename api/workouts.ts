import type { Workout } from "@/types/workout";

export const getWorkouts = async (): Promise<Workout[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
        next: {revalidate: 24 * 3600}
    });
    if (!res.ok) throw new Error('Fetch failed!');
    return res.json();
};

export const getWorkout = async (id: number): Promise<Workout> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
        next: { revalidate: 24 * 3600 }
    });
    if (!res.ok) throw new Error('Fetch failed!');
    return res.json();
};
