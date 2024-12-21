import { useState } from "react";

const Modal = (props) =>{
    const [selectedReason, setSelectedReason] = useState('');
    const [selectedSubReason, setSelectedSubReason] = useState('');
    const [otherReason, setOtherReason] = useState('');

    // Handle reason change
    const handleReasonChange = (event) => {
        setSelectedReason(event.target.value);
        setSelectedSubReason(''); // Reset sub-reason when reason changes
    };

    // Handle sub-reason change
    const handleSubReasonChange = (event) => {
        setSelectedSubReason(event.target.value);
    };

    const handleClose = () => {
        props.setShowModal(false);
    }

    const handleEndClass = () => {
        props.handleStartPause(); // Pause the timer
        props.setShowModal(false);
    }

    return (
        <div className="p-8 rounded-md bg-white">
            <h1 className="text-xl font-semibold">Select a reason to end class</h1>
            
            <div className="mt-4">
                <label className="block mb-2">
                <input
                    type="radio"
                    name="endClassReason"
                    value="Class Completed"
                    checked={selectedReason === 'Class Completed'}
                    onChange={handleReasonChange}
                    className="mr-2"
                />
                Class Completed
                </label>
                <label className="block mb-2">
                <input
                    type="radio"
                    name="endClassReason"
                    value="Class Interrupted/aborted"
                    checked={selectedReason === 'Class Interrupted/aborted'}
                    onChange={handleReasonChange}
                    className="mr-2"
                />
                Class Interrupted/aborted
                </label>
            </div>

            {/* Sub-reasons shown if "Class Interrupted/aborted" is selected */}
            {selectedReason === 'Class Interrupted/aborted' && (
            <div className="p-4 pt-0 text-sm">
                <label className="block mb-2">
                    <input
                    type="radio"
                    name="subReason"
                    value="Student didn't show up for the class"
                    checked={selectedSubReason === "Student didn't show up for the class"}
                    onChange={handleSubReasonChange}
                    className="mr-2"
                    />
                    Student didn't show up for the class.
                </label>
                <label className="block mb-2">
                    <input
                    type="radio"
                    name="subReason"
                    value="Student didn't show any interest"
                    checked={selectedSubReason === "Student didn't show any interest"}
                    onChange={handleSubReasonChange}
                    className="mr-2"
                    />
                    Student didn't show any interest.
                </label>
                <label className="block mb-2">
                    <input
                    type="radio"
                    name="subReason"
                    value="Student got disconnected"
                    checked={selectedSubReason === 'Student got disconnected'}
                    onChange={handleSubReasonChange}
                    className="mr-2"
                    />
                    Student got disconnected.
                </label>
                <label className="block mb-2">
                    <input
                    type="radio"
                    name="subReason"
                    value="I got disconnected"
                    checked={selectedSubReason === 'I got disconnected'}
                    onChange={handleSubReasonChange}
                    className="mr-2"
                    />
                    I got disconnected.
                </label>
                <label className="block mb-2">
                    <input
                    type="radio"
                    name="subReason"
                    value="Others"
                    checked={selectedSubReason === 'Others'}
                    onChange={handleSubReasonChange}
                    className="mr-2"
                    />
                    Others.
                </label>

                {selectedSubReason === 'Others' && (
                    <textarea
                        className="w-full p-2 mt-2 border rounded-sm"
                        placeholder="Type here"
                        rows={4}
                        cols={50}
                        value={otherReason}
                        onChange={(e) => setOtherReason(e.target.value)}
                    />
                )}
            </div>
            )}

            <div className="flex space-x-4 mt-4">
                <button className="rounded-sm bg-orange-600 text-white py-2 px-6" onClick={handleEndClass}>End Class</button>
                <button className="rounded-sm py-2 px-6" onClick={handleClose}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal;