import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoIntroModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  // Track button position on mount and resize
  useEffect(() => {
    const updateButtonPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };

    updateButtonPosition();
    window.addEventListener("resize", updateButtonPosition);
    return () => window.removeEventListener("resize", updateButtonPosition);
  }, []);

  const handleOpenVideo = () => {
    // Update position right when clicked to ensure accuracy
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setIsOpen(true);
  };

  const handleCloseVideo = () => {
    setIsOpen(false);
  };

  // Handle video playback based on modal state
  useEffect(() => {
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current
          .play()
          .catch((e) => console.log("Video play failed:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  // Calculate the size needed to cover the screen with a circle
  const getCircleSize = () => {
    // Use Pythagorean theorem to get the diagonal size of the screen
    // and multiply by 1.5 to ensure it fully covers
    const width = window.innerWidth;
    const height = window.innerHeight;
    return Math.sqrt(width * width + height * height) * 1.5;
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Marketing page content placeholder */}
      <header className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Axtra</h1>
              <span className="ml-2 text-xs">DIGITAL AGENCY STUDIO</span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li className="font-medium">HOME</li>
                <li className="font-medium">ABOUT</li>
                <li className="font-medium">PAGES</li>
                <li className="font-medium">SERVICES</li>
                <li className="font-medium">TEAM</li>
                <li className="font-medium">BLOG</li>
                <li className="font-medium">CONTACT</li>
              </ul>
            </nav>
            <div className="flex items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 pb-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <p className="text-xl mb-4">DIGITAL</p>
            <h1 className="text-8xl font-bold mb-8">MARK</h1>
            <h1 className="text-8xl font-bold mb-8">ETING</h1>
            <p className="text-lg mb-8 max-w-md">
              Static and dynamic secure code review can prevent a day before
              your product is even released. We can integrate with your dev
              environment
            </p>
          </div>

          <div className="lg:w-1/2 relative">
            <img
              src="/api/placeholder/800/500"
              alt="Marketing team working"
              className="w-full rounded-lg shadow-lg"
            />

            {/* Video button that will open the modal */}
            <div
              className="absolute flex items-center justify-center"
              style={{ right: "20%", top: "50%" }}
            >
              <button
                ref={buttonRef}
                onClick={handleOpenVideo}
                className="bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-105 flex flex-col items-center justify-center w-24 h-24"
              >
                <div className="bg-black rounded-full flex items-center justify-center w-12 h-12 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold">WATCH</span>
                <span className="text-xs font-bold">VIDEO INTRO</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Debug element to show button position - remove in production */}
      {/* <div className="fixed z-50 w-4 h-4 bg-red-500 rounded-full" style={{ 
        left: `${buttonPosition.x}px`, 
        top: `${buttonPosition.y}px`, 
        transform: 'translate(-50%, -50%)' 
      }} /> */}

      {/* Video Modal with Circle Animation */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Circular expanding container */}
            <motion.div
              className="absolute"
              initial={{
                width: 0,
                height: 0,
                borderRadius: "9999px",
                top: 0,
                left: 0,
                x: buttonPosition.x,
                y: buttonPosition.y,
              }}
              animate={{
                width: getCircleSize(),
                height: getCircleSize(),
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              exit={{
                width: 0,
                height: 0,
                x: buttonPosition.x,
                y: buttonPosition.y,
                transition: { duration: 0.5 },
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
                pointerEvents: "auto",
                overflow: "hidden",
              }}
            >
              {/* Video background */}
              <div className="absolute inset-0 bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/api/placeholder/1920/1080" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center max-w-xl px-6">
                    <h2 className="text-4xl font-bold mb-4">
                      Digital Marketing Services
                    </h2>
                    <p className="text-lg mb-6">
                      Discover how our digital marketing solutions can help your
                      business grow online.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Close button that appears after animation */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5 },
              }}
              exit={{ opacity: 0 }}
              onClick={handleCloseVideo}
              className="fixed top-6 right-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-30 transition-colors duration-300 z-60 pointer-events-auto"
              style={{ zIndex: 60 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Minimized video circle preview */}
      <AnimatePresence>
        {!isOpen && videoRef.current && (
          <motion.button
            onClick={handleOpenVideo}
            className="fixed z-40 bottom-6 right-6 overflow-hidden shadow-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              width: "80px",
              height: "80px",
              borderRadius: "9999px",
              transition: { delay: 0.3 },
            }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="relative w-full h-full bg-black rounded-full">
              <video
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              >
                <source src="/api/placeholder/200/200" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
