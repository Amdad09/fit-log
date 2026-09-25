import MealActions from "@/components/myMeal/MealActions";
import SectionHeading from "@/components/sections/SectionHeading";
import Container from "@/components/ui/Container";
import type { Metadata } from "next";
import Link from "next/link";
// import { Suspense } from "react";
// import LoadingMeal from "./loading";
export const metadata: Metadata = {
    title: 'Meal page',
    description: 'Meals page',
};

const MyMealsPage = () => {

    return (
        <main className="min-h-screen bg-[#17181c] px-4 py-12 text-white sm:px-6 lg:px-8">
            <Container className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <SectionHeading
                        eyebrow="Nutrition"
                        title="My Meals"
                        description="Track your meals and keep your daily nutrition on
                            target."
                    />
                    

                    <Link
                        href="/addMeal"
                        className="rounded-xl bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-lime-300 mb-6"
                    >
                        + Add Meal
                    </Link>
                </div>
                {/* <Suspense fallback={<LoadingMeal/>}> */}
                <MealActions />
                {/* </Suspense> */}
            </Container>
        </main>
    );
};

export default MyMealsPage;
