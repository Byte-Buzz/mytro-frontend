"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👇 Здесь отправляй запрос на API
    // await fetch("/api/auth/reset-password", { method: "POST", body: JSON.stringify({ email }) });

    console.log("Reset link sent to:", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-lg border rounded-xl">
        <CardHeader className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Восстановление пароля</h1>
          <p className="text-sm text-muted-foreground">
            Введите адрес электронной почты.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Электронная почта</Label>
              <Input
                id="email"
                type="email"
                placeholder="me@example.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Отправить инструкцию
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:underline"
          >
            Вернуться ко входу
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
