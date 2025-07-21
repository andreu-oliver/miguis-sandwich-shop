
import React from 'react';

const App: React.FC = () => {
    // The video is expected to be at /miguis.mp4 in the web app's root directory.
    const videoUrl = "/miguis.mp4";

    return (
        <main className="bg-white min-h-screen w-full flex flex-col items-center justify-center p-8 font-sans antialiased">
            <div className="w-full max-w-sm text-center">
                
                {/* Video container */}
                <div>
                    <video 
                        src={videoUrl}
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-auto max-w-xs mx-auto rounded-lg"
                        aria-label="Miguis animated logo"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Information Section */}
                <div className="mt-12 text-gray-800 space-y-8">
                    {/* Location Info */}
                    <div>
                        <h2 className="text-base font-bold tracking-wider uppercase text-gray-500">Our Location</h2>
                        <div className="mt-2 text-lg text-gray-700 leading-relaxed">
                            <p>123 Sandwich Lane</p>
                            <p>Foodie Town, FL 12345</p>
                        </div>
                    </div>
                    {/* Hours Info */}
                    <div>
                        <h2 className="text-base font-bold tracking-wider uppercase text-gray-500">Opening Hours</h2>
                        <div className="mt-2 text-lg text-gray-700 leading-relaxed">
                            <p>Mon - Fri: 9am - 8pm</p>
                            <p>Sat - Sun: 11am - 10pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;
