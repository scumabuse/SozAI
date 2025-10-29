import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Heart, Users, Sparkles } from "lucide-react"

// Компонент секции "О проекте"
export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: "Сохранение культуры",
      description: "Помогаем сохранить и передать будущим поколениям богатство казахского языка и культуры",
    },
    {
      icon: Sparkles,
      title: "Современные технологии",
      description: "Используем искусственный интеллект для точного перевода диалектов и старинных выражений",
    },
    {
      icon: Users,
      title: "Для всех",
      description: "Доступный инструмент для изучающих язык, исследователей и всех интересующихся культурой",
    },
    {
      icon: Heart,
      title: "С любовью к языку",
      description: "Создано с уважением к традициям и стремлением сделать язык доступнее",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Заголовок */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground text-balance">О проекте SozAI</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            SozAI — это умный переводчик казахских диалектов и старинных выражений, созданный для сохранения и
            популяризации богатого культурного наследия казахского народа.
          </p>
        </div>

        {/* Миссия */}
        <Card className="shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Наша миссия</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы стремимся сделать казахский язык более доступным и понятным для современного поколения, сохраняя при
              этом его историческую глубину и культурное богатство. Наш проект помогает людям понимать старинные
              выражения, диалекты и традиционные обороты речи.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              С помощью современных технологий искусственного интеллекта мы создаем мост между традиционным и
              современным казахским языком, делая культурное наследие доступным каждому.
            </p>
          </CardContent>
        </Card>

        {/* Особенности */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center">Что мы предлагаем</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Контакты */}
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
            <CardDescription className="text-base">
              Есть вопросы или предложения? Мы всегда рады обратной связи!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">
              <strong>Email:</strong> info@sozai.kz
            </p>
            <p className="text-muted-foreground">
              <strong>Telegram:</strong> @sozai_support
            </p>
            <p className="text-muted-foreground">
              <strong>Instagram:</strong> @sozai.kz
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
