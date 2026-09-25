import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import WorkoutContextProvider from '@/contexts/WorkoutContext';
import { Toaster } from 'sonner';
import MealContextProvider from '@/contexts/MealContext';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Fit Log',
    description: 'Fit Log application',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="en"
            data-theme="mydark"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <WorkoutContextProvider>
                    <MealContextProvider>
                        <Navbar />
                        {children}

                        <Footer />
                        <Toaster
                            theme="dark"
                            position="top-right"
                            toastOptions={{
                                style: {
                                    background: '#171717',
                                    border: '1px solid #262626',
                                    color: '#ffffff',
                                },
                                classNames: {
                                    success:
                                        '!bg-neutral-900 !border-neutral-700 !border-l-4 !border-l-lime-400',
                                    error: '!bg-neutral-900 !border-neutral-700 !border-l-4 !border-l-red-500',
                                    info: '!bg-neutral-900 !border-neutral-700 !border-l-4 !border-l-blue-400',
                                    warning:
                                        '!bg-neutral-900 !border-neutral-700 !border-l-4 !border-l-red-400',
                                },
                            }}
                        />
                    </MealContextProvider>
                </WorkoutContextProvider>
            </body>
        </html>
    );
}
