"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

interface HeaderProps {
  activeSection: "home" | "dictionary" | "about"
  onNavigate: (section: "home" | "dictionary" | "about") => void
}

// Компонент хедера с навигацией
export function Header({ activeSection, onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип и название */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Languages className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SozAI</h1>
              <p className="text-xs text-muted-foreground">Қазақ тілі аудармашысы</p>
            </div>
          </div>

          {/* Навигация */}
          <nav className="flex items-center gap-2">
            <Button
              variant={activeSection === "home" ? "default" : "ghost"}
              onClick={() => onNavigate("home")}
              className="transition-all"
            >
              Главная
            </Button>
            <Button
              variant={activeSection === "dictionary" ? "default" : "ghost"}
              onClick={() => onNavigate("dictionary")}
              className="transition-all"
            >
              Словарь
            </Button>
            <Button
              variant={activeSection === "about" ? "default" : "ghost"}
              onClick={() => onNavigate("about")}
              className="transition-all"
            >
              О проекте
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
