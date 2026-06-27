import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  JsonLd,
} from '@/components/ui'
import { siteConfig } from '@/config/site'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  }

  return (
    <>
      <JsonLd data={jsonLd} />
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
    </>
  )
}
