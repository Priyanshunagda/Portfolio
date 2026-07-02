/* eslint-disable react/prop-types */
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen text-slate-200 relative overflow-x-hidden bg-primary-dark">
            {/* Ambient Background Structure */}
            <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-[#090d16]">
                {/* Modern Mesh Gradients */}
                <div 
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-teal/8 rounded-full filter blur-[120px] animate-blob"
                />
                <div 
                    className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-accent-purple/8 rounded-full filter blur-[150px] animate-blob"
                    style={{ animationDelay: '3s' }}
                />
                <div 
                    className="absolute bottom-[-10%] left-[10%] w-[55%] h-[55%] bg-accent-cyan/8 rounded-full filter blur-[130px] animate-blob"
                    style={{ animationDelay: '6s' }}
                />

                {/* Cyberpunk Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <Navbar />
            
            <main className="relative z-10 pt-20 md:pt-24 selection:bg-accent-teal/30 selection:text-accent-teal">
                {children}
            </main>
            
            <Footer />
        </div>
    );
};

export default Layout;
