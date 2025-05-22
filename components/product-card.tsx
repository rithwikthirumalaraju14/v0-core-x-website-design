import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden bg-zinc-800 border-zinc-700 hover:border-green-500 transition-colors group">
      <div className="relative aspect-square overflow-hidden bg-zinc-900">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="secondary" size="sm" className="bg-green-500 hover:bg-green-600 text-black">
            Quick View
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-zinc-400 mb-1">{category}</div>
        <h3 className="font-medium text-white mb-1">{name}</h3>
        <div className="font-bold text-green-500">${price}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-zinc-700 hover:bg-green-500 hover:text-black transition-colors">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
