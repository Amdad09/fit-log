import ActionsPage from '@/components/myPlan/ActionsPage';
import SectionHeading from '@/components/sections/SectionHeading';
import Container from '@/components/ui/Container';

export default function MyPlanPage() {
    return (
        <div className="bg-neutral-950 text-white py-12 md:py-16 lg:py-20">
            <Container>
                <div className="">
                    <SectionHeading
                        eyebrow="Fitness"
                        title="MY PLAN"
                        description="Cap of five lifts for today. Finish them, then load more."
                    />

                    <ActionsPage />
                </div>
            </Container>
        </div>
    );
}
