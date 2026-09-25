import Hero from "@/components/sections/Hero";
import WorkoutsPage from "./workouts/page";
import { Suspense } from "react";
import LoadingWorkout from "./loading";

export default function Home() {
  return (
      <>
          <Hero />
          <Suspense fallback={<LoadingWorkout />}>
              <WorkoutsPage />
          </Suspense>
      </>
  );
}
