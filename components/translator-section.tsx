"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Volume2, Loader2 } from "lucide-react"
import { mockTranslations } from "@/lib/mock-data"

// Компонент секции переводчика
export function TranslatorSection() {
  const [inputText, setInputText] = useState("")
  const [translation, setTranslation] = useState<(typeof mockTranslations)[0] | null>(null)
  const [isTranslating, setIsTranslating] = useState(false)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  // Функция перевода (использует mock-данные)
  const handleTranslate = () => {
    if (!inputText.trim()) return

    setIsTranslating(true)

    // Имитация задержки API
    setTimeout(() => {
      // Поиск перевода в mock-данных
      const found = mockTranslations.find(
        (t) =>
          t.original.toLowerCase().includes(inputText.toLowerCase()) ||
          inputText.toLowerCase().includes(t.original.toLowerCase()),
      )

      setTranslation(found || mockTranslations[0])
      setIsTranslating(false)
    }, 800)
  }

  // Имитация воспроизведения аудио
  const handlePlayAudio = () => {
    setIsPlayingAudio(true)
    setTimeout(() => {
      setIsPlayingAudio(false)
    }, 2000)
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Заголовок секции */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-foreground text-balance">Переводчик казахских диалектов</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Введите старинное или диалектное выражение на казахском языке
          </p>
        </div>

        {/* Поле ввода */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Введите текст</CardTitle>
            <CardDescription>Напишите фразу на казахском языке для перевода</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Например: Ақ сүйек..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-32 text-lg resize-none"
            />
            <Button
              onClick={handleTranslate}
              disabled={!inputText.trim() || isTranslating}
              className="w-full"
              size="lg"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Перевожу...
                </>
              ) : (
                "Перевести"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Результат перевода */}
        {translation && (
          <Card className="shadow-lg border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Результат перевода
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePlayAudio}
                  disabled={isPlayingAudio}
                  className="gap-2 bg-transparent"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? "animate-pulse" : ""}`} />
                  {isPlayingAudio ? "Воспроизведение..." : "Слушать"}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Оригинальный текст */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Оригинал</h3>
                <p className="text-xl font-medium text-foreground">{translation.original}</p>
              </div>

              {/* Современный перевод на казахском */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Современный казахский
                </h3>
                <p className="text-xl text-foreground">{translation.modernKazakh}</p>
              </div>

              {/* Перевод на русский */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Русский перевод</h3>
                <p className="text-xl text-foreground">{translation.russian}</p>
              </div>

              {/* Культурное объяснение */}
              <div className="space-y-2 pt-4 border-t border-border">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">Культурное значение</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{translation.culturalExplanation}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
