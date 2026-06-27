import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Bienvenido</CardTitle>
          <CardDescription>Next.js Professional Starter</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Starter listo para producción con Next.js 16, TypeScript y Tailwind CSS.
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm">Empezar</Button>
          <Button size="sm" variant="outline">
            Ver docs
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
