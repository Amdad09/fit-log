import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <div className="py-10 md:py-14 lg:py-16 bg-base-100 ">
            <Container>
                <div className="hero bg-base-200 py-10 md:py-14 lg:py-16 rounded-2xl">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Image
                            alt="Tailwind CSS hero component"
                            src="/banner.png"
                            width={800}
                            height={500}
                            className="max-w-sm rounded-lg "
                        />
                        <div className="w-2xl">
                            <h1 className="text-5xl font-bold">
                                Box Office News!
                            </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            
                            <Button className="btn btn-primary uppercase">
                                Browse Workouts
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
