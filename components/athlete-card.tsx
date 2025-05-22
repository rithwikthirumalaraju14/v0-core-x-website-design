import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AthleteCardProps {
  name: string
  sport: string
  quote: string
  image: string
}

export default function AthleteCard({ name, sport, quote, image }: AthleteCardProps) {
  return (
    <Card className="overflow-hidden bg-zinc-800 border-zinc-700 hover:border-green-500 transition-colors">
      <div className="relative h-80 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-bold text-xl text-white">{name}</h3>
          <p className="text-green-500">{sport}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <blockquote className="text-zinc-300 italic">"{quote}"</blockquote>
      </CardContent>
    </Card>
  )
}
