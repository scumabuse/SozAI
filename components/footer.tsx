import { Heart } from "lucide-react"

// Компонент футера
export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© 2025 SozAI. Все права защищены.</p>
            <p className="text-xs text-muted-foreground mt-1">Сохраняем культурное наследие казахского народа</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Создано с</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>для казахского языка</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
