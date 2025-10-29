"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { TranslatorSection } from "@/components/translator-section"
import { DictionarySection } from "@/components/dictionary-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

// Главная страница приложения SozAI
export default function Home() {
  // Состояние для управления активной секцией
  const [activeSection, setActiveSection] = useState<"home" | "dictionary" | "about">("home")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Хедер с навигацией */}
      <Header activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Основной контент */}
      <main className="flex-1">
        {activeSection === "home" && <TranslatorSection />}
        {activeSection === "dictionary" && <DictionarySection />}
        {activeSection === "about" && <AboutSection />}
      </main>

      {/* Футер */}
      <Footer />
    </div>
  )
}
