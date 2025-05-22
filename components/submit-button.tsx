'use client';

export default function SubmitButton() {
    return (
        <button
            onClick={() => alert('Submitted!')}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
            Submit
        </button>
    );
}