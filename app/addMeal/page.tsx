import AddMealFrom from "@/components/addMeal/AddMealFrom";
import SectionHeading from "@/components/sections/SectionHeading";
import Container from "@/components/ui/Container";

const AddMealPage = () => {
    return (
        <div className="py-12 md:py-16">
            <Container>
                
                    <SectionHeading
                        eyebrow="Nutrition"
                        title="Add Meal"
                        description="Add your meal and keep track of your daily nutrition."
                    />
                    

                <AddMealFrom />
            </Container>
        </div>
    );
};

export default AddMealPage;