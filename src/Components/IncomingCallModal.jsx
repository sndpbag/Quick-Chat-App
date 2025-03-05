import React from 'react';

const IncomingCallModal = ({ showCallModal, callType, setShowCallModal }) => {
    if (!showCallModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl animate-in">
                <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                        {[1, 2, 3].map(wave => (
                            <div
                                key={wave}
                                className="call-wave"
                                style={{ animationDelay: `${(wave - 1) * 0.6}s` }}
                            ></div>
                        ))}
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 relative z-10">
                            <img
                                src="/api/placeholder/100/100"
                                alt="Emma Watson"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Emma Watson</h3>
                    <p className="text-purple-500 font-medium mb-6">
                        <span>{callType === 'video' ? 'Video Call' : 'Audio Call'}</span>
                        <span className="animate-pulse-slow"> incoming...</span>
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setShowCallModal(false)}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white transition-all"
                        >
                            <i className="fas fa-phone-slash"></i>
                        </button>
                        <button
                            onClick={() => setShowCallModal(false)}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white transition-all"
                        >
                            <i className={`fas ${callType === 'video' ? 'fa-video' : 'fa-phone'}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomingCallModal; // ✅ শুধুমাত্র একবার এক্সপোর্ট করা হয়েছে।
