import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 px-4 py-24">
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Become a Member</h1>
        <p className="text-lg text-slate-300 mb-8">
          Join Deadwood to unlock unlimited resources, connect with top developers, and accelerate your learning journey.
        </p>
        {/* Placeholder for join form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-md px-4 py-3 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your name"
            className="rounded-md px-4 py-3 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-5 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
} 