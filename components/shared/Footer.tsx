import Container from "../ui/Container";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content py-16 md:py-20 lg:py-24">
            <Container>
                <footer className="footer sm:footer-horizontal  items-center">
                    <aside className="grid-flow-col items-center">
                        <Logo />
                    </aside>
                    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <p>
                            © 2026 FitLog — Workout Library. Train hard, log
                            honest.
                        </p>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;