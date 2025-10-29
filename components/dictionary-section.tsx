"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen } from "lucide-react"
import { mockTranslations } from "@/lib/mock-data"

// Компонент секции культурного словаря
export function DictionarySection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPhrase, setSelectedPhrase] = useState<(typeof mockTranslations)[0] | null>(null)

  // Фильтрация фраз по поисковому запросу
  const filteredPhrases = mockTranslations.filter(
    (phrase) =>
      phrase.original.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.modernKazakh.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.russian.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Заголовок секции */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Культурный словарь</h2>
          </div>
          <p className="text-lg text-muted-foreground text-pretty">
            Коллекция старинных казахских выражений и их значений
          </p>
        </div>

        {/* Поиск */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Поиск по словарю..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Список фраз */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Выражения ({filteredPhrases.length})</h3>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {filteredPhrases.map((phrase, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all hover:shadow-md hover:border-primary/50 ${
                    selectedPhrase === phrase ? "border-primary shadow-md" : ""
                  }`}
                  onClick={() => setSelectedPhrase(phrase)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{phrase.original}</CardTitle>
                    <CardDescription className="line-clamp-1">{phrase.russian}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-xs">
                      {phrase.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Детальная информация */}
          <div className="sticky top-24">
            {selectedPhrase ? (
              <Card className="shadow-lg border-primary/20">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {selectedPhrase.category}
                  </Badge>
                  <CardTitle className="text-2xl">{selectedPhrase.original}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Современный казахский
                    </h4>
                    <p className="text-lg text-foreground">{selectedPhrase.modernKazakh}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Русский перевод
                    </h4>
                    <p className="text-lg text-foreground">{selectedPhrase.russian}</p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Культурное значение</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {selectedPhrase.culturalExplanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg">
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground/50 mb-4" />
                  <p className="text-lg text-muted-foreground">Выберите выражение для просмотра деталей</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
