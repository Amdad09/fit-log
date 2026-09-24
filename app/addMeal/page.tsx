import AddMealFrom from "@/components/addMeal/AddMealFrom";
import Container from "@/components/ui/Container";

const AddMealPage = () => {
    return (
        <div className="py-12 md:py-16">
            <Container>
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
                        Nutrition
                    </p>

                    <h1 className="text-xl font-bold uppercase tracking-tight sm:text-2xl">
                        Add Meal
                    </h1>

                    <p className="mt-3 text-sm text-gray-400">
                        Add your meal and keep track of your daily nutrition.
                    </p>
                </div>

                <AddMealFrom/>
            </Container>
        </div>
    );
};

export default AddMealPage;