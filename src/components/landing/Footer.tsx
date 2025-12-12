import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Возможности", href: "#" },
    { label: "Цены", href: "#" },
    { label: "Безопасность", href: "#" },
    { label: "Дорожная карта", href: "#" }
  ],
  company: [
    { label: "О компании", href: "#" },
    { label: "Блог", href: "#" },
    { label: "Карьера", href: "#" },
    { label: "Пресса", href: "#" }
  ],
  resources: [
    { label: "Центр помощи", href: "#" },
    { label: "Сообщество", href: "#" },
    { label: "Гайды", href: "#" },
    { label: "API документация", href: "#" }
  ],
  legal: [
    { label: "Конфиденциальность", href: "#" },
    { label: "Условия", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Лицензии", href: "#" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="mb-4">
              <div className="text-2xl">Inspire</div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Организуйте своё творческое вдохновение и сотрудничайте с командой — всё в одной красивой платформе.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Ресурсы</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Inspire. Все права защищены.</p>
          <p>Создано с любовью для творческих людей</p>
        </div>
      </div>
    </footer>
  );
}
