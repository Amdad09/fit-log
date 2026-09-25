import AddMealFrom from "@/components/addMeal/AddMealFrom";
import Container from "@/components/ui/Container";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Add meal form',
    description: 'Add meal form page',
};
const AddMealPage = () => {
    return (
        <div className="py-12 md:py-16">
            <Container>
                <AddMealFrom />
            </Container>
        </div>
    );
};

export default AddMealPage;