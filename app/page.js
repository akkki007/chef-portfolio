"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { ChefHat, Clock, Star, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { H1, H2, H3, P, Lead, Small } from "@/components/ui/typography"
import Link from "next/link"
import { ResumeSections } from "@/components/ResumeSections"

export default function ChefPortfolio() {
  const items = [2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17];
  const nextRef = useRef(null);

  // Auto advance carousel by triggering next click every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (nextRef.current) {
        nextRef.current.click();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-bold">Chef Sairaj</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors">
                About
              </a>
              <a href="#specialties" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Specialties
              </a>
              <a href="/gallery" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Gallery
              </a>
            </nav>
            <Button
              variant="outline"
              className="hidden md:flex border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              Download My CV
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Utensils className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Small className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                Culinary Artist
              </Small>
              <H1>
                Crafting Culinary <span className="text-amber-600">Masterpieces</span>
              </H1>
              <Lead>
                With over 3 years of experience, I create unforgettable dining experiences through innovative cuisine and
                exceptional service.
              </Lead>
              
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/pic.jpg"
                alt="Chef in action"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ResumeSections/>

      {/* Specialties Section */}
      <section id="specialties" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <H2>
              My <span className="text-amber-600">Culinary Specialties</span>
            </H2>
            <P>
              I specialize in a variety of cuisines and techniques, bringing together traditional methods and innovative
              approaches.
            </P>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Western Cuisine",
                description: "Authentic pasta dishes, risottos, and regional specialties from across Italy.",
                image: "/Frame 1.png",
              },
              {
                title: "Italian Cuisine",
                description: "Classic Italian recipes with a focus on fresh, high-quality ingredients.",
                image: "/Frame 2.png",
              },
              {
                title: "Indian Cuisine",
                description: "Aromatic spices and traditional dishes that celebrate the rich culinary heritage of India.",
                image: "/Frame 3.png",
              },
              {
                title: "European Cuisine",
                description: "Innovative techniques that transform familiar flavors into surprising new forms.",
                image: "/Frame 4.png",
              },
              {
                title: "French Cuisine",
                description: "Exquisite sweet creations that balance flavor, texture, and visual appeal.",
                image: "/Frame 2-1.png",
              },
              {
                title: "American Cuisine",
                description: "Expert knowledge of wine and food pairing to create complete dining experiences.",
                image: "/Frame 5.png",
              },
            ].map((specialty, index) => (
              <Card key={index} className="overflow-hidden border-none bg-transparent shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={specialty.image || "/placeholder.svg"}
                    alt={specialty.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <H3 className="mb-2">{specialty.title}</H3>
                  <P className="text-gray-600">{specialty.description}</P>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-amber-600">Culinary Portfolio</span>
            </h2>
            <p className="text-gray-600">
              A showcase of my signature dishes and culinary creations from various events and collaborations.
            </p>
          </div>
          <Carousel className="w-full max-w-5xl mx-auto" loop>
            <CarouselContent style={{scrollBehavior: "smooth", transition: "transform 0.5s ease"}}>
              {items.map((item) => (
                <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={`/${item}.jpg`}
                        alt={`Dish ${item}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext ref={nextRef} className="right-2" />
          </Carousel>
          <div className="mt-12 text-center">
            <Link href="/gallery" className="text-amber-600 hover:underline">
              <Button className="bg-amber-600 hover:bg-amber-700">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <ChefHat className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold">Chef Sairaj</span>
            </div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Chef Sairaj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

