import { useEffect, useState } from "react";
import { formatDate, formatTime, getGreetingData } from "../utils/formatUtils";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

export default function Header() {
    const [user, setUser] = useState("");

    const navigate = useNavigate()

    const today = formatDate(new Date());
    const currentTime = formatTime(new Date());
    const greetingData = getGreetingData();

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("user");

        toast.success("Logout successful");

        setTimeout(() => {
            navigate("/login");
        }, 300);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            setUser(parsedUser.name || parsedUser.email || "");
        }
    }, []);

    return (
        <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">

                {/* LEFT: Greeting */}
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Quality Control
                    </p>

                    <div className="mt-1 flex items-center gap-2">

                        {/* Left Icon (only once) */}
                        <greetingData.icon className="h-6 w-6 text-amber-500" />

                        {/* Flip Text */}
                        <div className="relative h-6 sm:h-7 overflow-hidden">
                            <div className="animate-flipText flex flex-col">

                                {/* Greeting */}
                                <p className="h-6 sm:h-7 flex items-center text-sm text-slate-700 font-semibold">
                                    {greetingData.text}, {user}
                                </p>

                                {/* Time */}
                                <p className="h-6 sm:h-7 flex items-center text-sm text-slate-500">
                                    {currentTime}
                                </p>

                                {/* Duplicate for loop */}
                                <p className="h-6 sm:h-7 flex items-center text-sm text-slate-700 font-semibold">
                                    {greetingData.text}, {user}
                                </p>

                            </div>
                        </div>

                    </div>

                    <p className="mt-1 text-sm text-slate-600">{today}</p>
                </div>

                {/* RIGHT: Actions */}
                <div className="flex items-center gap-2">

                    {/* Optional user badge */}
                    <div className="hidden sm:flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-1.5 text-sm text-slate-700">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Active
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="relative overflow-hidden flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 bg-white shadow-sm transition-all duration-200 active:scale-95 group"
                    >
                        {/* Background animation layers */}
                        <span className="absolute left-1/2 top-full w-[140%] h-[180%] -translate-x-1/2 rounded-full bg-black/5 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:top-[-35%] group-hover:scale-y-[1.3] group-hover:scale-x-[0.8]" />

                        <span className="absolute left-[55%] top-[180%] w-[160%] h-[190%] -translate-x-1/2 rounded-full bg-teal-600 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:top-[-45%] group-hover:scale-y-[1.3] group-hover:scale-x-[0.8]" />

                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                            <LogOut className="h-4 w-4" />
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}