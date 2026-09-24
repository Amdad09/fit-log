import { getWorkouts } from '@/api/workouts';
import Container from '@/components/ui/Container';
import WorkoutCard from '@/components/workout/WorkoutCard';

const WorkoutsPage = async () => {
    const workouts = await getWorkouts();
    return (
        <div className="pb-16 md:pb-20 lg:pb-24">
            <Container>
                <div>
                    <h2 className="uppercase text-2xl font-bold">
                        The Library
                    </h2>
                    <p className="text-secondary-content pt-1 pb-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ratione pariatur fugiat error?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {workouts.map((workout) => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default WorkoutsPage;
