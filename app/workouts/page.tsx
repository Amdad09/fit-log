import { getWorkouts } from '@/api/workouts';

import WorkoutLibrary from '@/components/workout/WorkoutLibrary';

const WorkoutsPage = async () => {
    const workouts = await getWorkouts();
    
    return (
        <div className="pb-16 md:pb-20 lg:pb-24">
            <WorkoutLibrary workouts={workouts}/>
        </div>
    );
};

export default WorkoutsPage;
