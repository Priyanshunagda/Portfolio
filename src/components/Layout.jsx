import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    // Add a subtle background particle effect or gradient movement here if desired in the future
    return (
        <div className="min-h-screen text-slate-200 relative overflow-x-hidden">
            {/* Background Gradient Orbs */}
            {/* Dynamic Background */}
            <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-slate-950">
                {/* Gradient Blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Overlay Grid/Noise (optional, kept simple for now) */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
            </div>

            <Navbar />
            <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12 relative z-10 selection:bg-accent-teal/30">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
