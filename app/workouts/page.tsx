import { getWorkouts } from '@/api/workouts';

import WorkoutLibrary from '@/components/workout/WorkoutLibrary';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home | Workout',
    description: 'Workout page',
};

const WorkoutsPage = async () => {
    const workouts = await getWorkouts();
    
    return (
        <div id="library" className="pb-16 md:pb-20 lg:pb-24">
            <WorkoutLibrary workouts={workouts} />
        </div>
    );
};

export default WorkoutsPage;
