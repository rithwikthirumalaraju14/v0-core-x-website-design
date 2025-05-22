import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CategoryProps {
  title: string
  image: string
}

function CategoryCard({ title, image }: CategoryProps) {
  return (
    <div className="relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-center">
        <h3 className="text-3xl font-bebas tracking-wider text-white">{title}</h3>
        <Button variant="ghost" className="group border border-white text-white hover:bg-white hover:text-black p-2">
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          <span className="sr-only">View {title}</span>
        </Button>
      </div>
    </div>
  )
}

interface ProductProps {
  name: string
  price: string
  image: string
}

function ProductCard({ name, price, image }: ProductProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:scale-[1.02] transition-transform duration-300">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="font-bold text-corex-red mt-1">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-black hover:bg-corex-red text-white">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export default function ShopSection() {
  const categories = [
    {
      title: "Performance Tees",
      image:
        "https://images.unsplash.com/photo-1616279969996-e7980e2c119d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Compression Gear",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    },
    {
      title: "Joggers",
      image:
        "https://images.unsplash.com/photo-1552331866-d5d9f8395601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
    },
    {
      title: "Training Accessories",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ]

  const featuredProducts = [
    {
      name: "X-Perform Training Tee",
      price: "$45.00",
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Core Compression Shorts",
      price: "$38.00",
      image:
        "https://images.unsplash.com/photo-1506902540976-5005d40e1e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "X-Flex Sports Bra",
      price: "$42.00",
      image:
        "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    },
    {
      name: "X-Run Performance Joggers",
      price: "$65.00",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ]

  return (
    <section id="shop" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl mb-6 font-bebas">Shop Core X</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <CategoryCard key={index} title={category.title} image={category.image} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bebas mb-8">Featured Performance Wear</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
