"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function NewPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setError("Неверная или просроченная ссылка.");
      return;
    }

    if (password !== confirm) {
      setError("Пароли не совпадают.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {

      console.log("Updated password:", password);
      setUpdated(true);
    } catch (err) {
      setError("Произошла ошибка. Попробуйте ещё раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md border rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center">
          Введите новый пароль
        </h1>

        {!updated ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {!token && (
              <p className="text-red-500 text-sm">
                Неверная или устаревшая ссылка для восстановления пароля.
              </p>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="space-y-2">
              <Label htmlFor="password">Новый пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите новый пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm">Повторите пароль</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="Повторите новый пароль"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Обновляем..." : "Сохранить пароль"}
            </Button>
          </form>
        ) : (
          <p className="text-center text-green-600 text-sm">
            Пароль успешно обновлён! Теперь вы можете войти.
          </p>
        )}
      </div>
    </div>
  );
}
