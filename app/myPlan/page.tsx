
import Container from '@/components/ui/Container';
import ActionsPage from '@/components/myPlan/ActionsPage';

export default function MyPlanPage() {
    
  return (
      <div className="bg-neutral-950 text-white py-16 md:py-20 lg:py-24">
          <Container>
              <div className="">
                  {/* Header */}
                  <h1 className="text-2xl font-extrabold tracking-tight">
                      MY PLAN
                  </h1>
                  <p className="mt-1 text-sm text-neutral-400">
                      Cap of five lifts for today. Finish them, then load more.
                  </p>

                  <ActionsPage/>
                  
              </div>
          </Container>
      </div>
  );
}
