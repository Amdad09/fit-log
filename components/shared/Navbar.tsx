
import CustomLink from '../ui/CustomLink';
import Container from '../ui/Container';
import Logo from './Logo';
import Actions from '../navbarActions/Actions';

const Navbar = () => {
    const links = (
        <>
            <li>
                <CustomLink path="/">Workouts</CustomLink>
            </li>
            <li>
                <CustomLink path="/myPlan">My Plan</CustomLink>
            </li>
        </>
    );
    return (
        <div className="bg-base-100 shadow-sm border-b border-gray-800 z-50 top-0 sticky">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    aria-label="Menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {' '}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />{' '}
                                </svg>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                {links}
                            </ul>
                        </div>
                        <Logo/>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{links}</ul>
                    </div>
                    <Actions/>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
