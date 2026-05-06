"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const API_URL = "https://script.google.com/macros/s/AKfycbyHREcyipyXfTISgUVXvRhG_eqpRY_YUrkqVTN7PfuaqHwZjIvL-51O2adxRoRBsDq1/exec"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (key: "email" | "password", value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify({
                    type: "login",
                    email: form.email,
                    password: form.password,
                }),
            });

            const text = await res.text();
            const result = JSON.parse(text);

            if (result.success === true) {
                toast.success("Login successful");

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        email: form.email,
                        name: result.user.name,
                        loggedIn: true,
                    })
                );

                navigate("/");
            } else {
                toast.error(result.error || "Invalid credentials");
            }

        } catch (err) {
            console.error(err);
            toast.error("Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-white sm:bg-slate-50">
            <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-8 sm:justify-center sm:px-6">
                <div className="flex-1">
                    {/* Header */}
                    <div className="pt-4 text-center sm:pt-0">
                        <div className="mx-auto mb-4 flex justify-center">
                            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Quality Control System Logo"
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>

                        <p className="text-sm font-medium text-slate-500">
                            Quality Control System
                        </p>

                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                            Welcome back
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Login to continue
                        </p>
                    </div>

                    {/* Form */}
                    <div className="mt-8 sm:rounded-2xl sm:border sm:border-slate-200 sm:bg-white sm:p-6 sm:shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    autoCapitalize="none"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className="h-12 rounded-xl px-4 text-base"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        value={form.password}
                                        onChange={(e) => handleChange("password", e.target.value)}
                                        className="h-12 rounded-xl px-4 pr-12 text-base"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 h-12 w-full rounded-xl text-base font-medium"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Logging in...
                                    </span>
                                ) : (
                                    "Login"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} Quality Control System
                </p>
            </div>
        </main>
    );
}