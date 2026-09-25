'use client'
import type { Workout } from '@/types/workout';
import { useState } from 'react';
import Search from '../search/Search';
import Container from '../ui/Container';
import WorkoutCard from './WorkoutCard';
import SectionHeading from '../sections/SectionHeading';
interface WorkoutLibraryProps {
    workouts: Workout[];
}
const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filterWorkouts = workouts.filter((workout) =>
        workout.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <Container className='py-12 md:py-16 lg:py-20'>
            <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                    eyebrow="FITNESS"
                    title="THE LIBRARY"
                    description="Twelve lifts covering every major muscle group."
                />

                <div className="w-full lg:max-w-md pb-6">
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
