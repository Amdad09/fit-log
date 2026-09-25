'use client'
import type { Workout } from '@/types/workout';
import { useState } from 'react';
import Search from '../search/Search';
import Container from '../ui/Container';
import WorkoutCard from './WorkoutCard';
interface WorkoutLibraryProps {
    workouts: Workout[];
}
const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filterWorkouts = workouts.filter((workout) =>
        workout.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <Container>
            <div className='flex justify-between items-center gap-8'>
                <div className=''>
                    <h2 className="uppercase text-2xl font-bold">
                        The Library
                    </h2>
                    <p className="text-secondary-content pt-1 pb-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ratione pariatur fugiat error?
                    </p>
                </div>
                <div className='w-full max-w-md'>
                    <Search onSearch={setSearchTerm} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filterWorkouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>
        </Container>
    );
};

export default WorkoutLibrary;
