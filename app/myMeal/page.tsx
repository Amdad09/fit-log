import MealActions from "@/components/myMeal/MealActions";
import Container from "@/components/ui/Container";
import Link from "next/link";
// import { Suspense } from "react";
// import LoadingMeal from "./loading";


const MyMealsPage = () => {

    return (
        <main className="min-h-screen bg-[#17181c] px-4 py-12 text-white sm:px-6 lg:px-8">
            <Container className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                            Nutrition
                        </p>

                        <h1 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            My Meals
                        </h1>

                        <p className="mt-3 max-w-xl text-gray-400">
                            Track your meals and keep your daily nutrition on
                            target.
                        </p>
                    </div>

                    <Link
                        href="/addMeal"
                        className="rounded-xl bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
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
