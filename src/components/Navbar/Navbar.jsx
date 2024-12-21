import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/images.jpeg";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // timer
    const initialTime = 600;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const [isActive, setIsActive] = useState(true);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        // Only start the countdown if the timer is active
        if (isActive && timeRemaining > 0) {
          const timer = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
          }, 1000);
    
          // Cleanup the interval when the component unmounts or the timer is paused
          return () => clearInterval(timer);
        } else if (timeRemaining === 0) {
          setIsActive(false); // Timer finished, stop the countdown
        }
    }, [timeRemaining, isActive]);

    // Convert seconds into minutes and seconds
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // Format time as MM:SS
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const handleStartPause = () => {
        setIsActive(prevState => !prevState); // Toggle between start and pause
    };

    return (
        <nav className="h-16 flex items-center px-4 sticky top-0 z-10 bg-white shadow-md">
            {/* logo */}
            <div className="border-r-[1px] pr-4 h-full flex items-center justify-center">
                <img src={Logo} alt="logo" className="size-10" />
            </div>

            {/* hamburger */}
            <div className="lg:hidden flex items-center px-4">
                <h1 className="font-bold">Codingal</h1>
                <button className="absolute right-4" onClick={handleMenu}>
                    <RxHamburgerMenu />
                </button>
            </div>

            <div className={`fixed flex flex-col bg-white h-screen top-0 right-0 p-4 my-16 space-y-8 ${showMenu ? '-translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out lg:flex-row lg:static lg:h-auto lg:my-0 lg:space-y-0 lg:p-0 lg:w-full lg:justify-between lg:translate-x-0`}>
            
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-full lg:mx-8 text-gray-500 text-sm font-semibold">
                    <div>
                        <h2>Trial Lesson [Grade 1-3]</h2>
                    </div>

                    <div>
                        <p>{formattedTime}</p>
                    </div>
                </div>

                <div >
                    <button className="rounded-sm bg-orange-600 text-white py-2 px-4 w-max text-sm" onClick={handleModal}>End Class</button>
                </div>
            </div>

            {/* modal */}
            {
                showModal && 
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <Modal setShowModal={setShowModal} handleStartPause={handleStartPause} />
                </div>
            }
        </nav>
    )
}

export default Navbar;