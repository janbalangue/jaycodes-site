import SubmitButton from "@/components/submit-button";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form className="flex flex-col gap-4">
            <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
            />
            <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
            />
            <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded"
            ></textarea>
            <SubmitButton />
        </form>
        </div>
    );
    }