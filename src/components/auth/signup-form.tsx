import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { FigmaIcon, GithubIcon, InstagramIcon, TwitchIcon, TwitterIcon } from "lucide-react"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Создайте свой аккаунт</h1>
          <p className="text-muted-foreground text-sm text-balance">
            
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Никнейм</FieldLabel>
          <Input id="name" type="text" placeholder="crazyfrequency" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Электронная почта</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.ru" required />
          <FieldDescription>
            
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Пароль</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>
            
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Подтвердите пароль</FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription></FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Зарегистрироваться</Button>
        </Field>
        <FieldSeparator>Или войти с помощью</FieldSeparator>
        <Field>
          <div className="mt-1 flex items-center gap-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <GithubIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <InstagramIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <TwitterIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <FigmaIcon className="h-[18px]! w-[18px]!" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
            >
              <TwitchIcon className="h-[18px]! w-[18px]!" />
            </Button>
          </div>
          <FieldDescription className="px-6 text-center">
            У вас уже есть аккаунт? <a href="#">Войти</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
