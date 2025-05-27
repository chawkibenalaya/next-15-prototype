"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export default function RegisterPage() {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
    });
    const [error, setError] = useState("");
    const router = useRouter();
    const { login } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error(await res.text());
            const { token, refreshToken, ...user } = await res.json();
            login(user);
            router.push("/");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleRegister} className="max-w-md mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-bold">Register</h1>
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-2 w-full" required />
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-2 w-full" required />
            <input name="username" placeholder="Username" value={form.username} onChange={handleChange} className="border p-2 w-full" required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" required />
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full" required />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="bg-green-600 text-white px-4 py-2">Register</button>
        </form>
    );
}
