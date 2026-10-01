'use client';
import { signOut, useSession } from '@/lib/auth-client';
import { Button, toast } from '@heroui/react';
import Link from 'next/link';
import Actions from '../navbarActions/Actions';
import Container from '../ui/Container';
import CustomLink from '../ui/CustomLink';
import Logo from './Logo';

const Navbar = () => {
    const { data: session } = useSession();

    const links = (
        <>
            <li>
                <CustomLink path="/">Workouts</CustomLink>
            </li>
            {session && (
                <>
                    <li>
                        <CustomLink path="/myPlan">My Plan</CustomLink>
                    </li>
                    <li>
                        <CustomLink path="/myMeal">My Meal</CustomLink>
                    </li>
                    <li>
                        <CustomLink path="/addMeal">Add Meal</CustomLink>
                    </li>
                </>
            )}
            <li>
                <CustomLink path="/dashboard">Dashboard</CustomLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm border-b border-gray-800 z-50 top-0 sticky">
            <Container>
                <div className="navbar p-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="pr-4 lg:hidden"
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
                        <Logo />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-1">
                            {links}
                        </ul>
                    </div>
                    {session ? (
                        <>
                            <Actions />
                            {/* <p>{session?.user?.name}</p> */}

                            <Button className="ml-2" onClick={() => {
                                signOut();
                                toast.success('Logout successfully!')
                            }}>
                                Sign Out
                            </Button>
                        </>
                    ) : (
                        <div className="navbar-end flex gap-2">
                            <Link href="/sign-in">
                                <Button className="ml-3">Sign In</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
