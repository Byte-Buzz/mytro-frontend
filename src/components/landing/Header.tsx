"use client";

import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/landing/ThemeProvider";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="text-2xl">Mytro</div>
            </a>

            <nav className="hidden md:flex gap-6">
              <a href="function" className="text-muted-foreground hover:text-foreground transition-colors">
                Функции
              </a>
              <a href="about-us" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
              className="rounded-xl"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" className="hidden sm:flex rounded-xl">
              Войти
            </Button>
            <Button className="rounded-xl">
              Зарегистрироваться
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
