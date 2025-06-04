"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { ChefHat, Clock, Star, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { H1, H2, H3, P, Lead, Small } from "@/components/ui/typography"
import Link from "next/link"

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
              <a href="#testimonials" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Contact
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
                Award-winning chef with over 15 years of experience creating unforgettable dining experiences.
              </Lead>
              
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
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
      <section id="about" className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Chef portrait" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <H2>
                About <span className="text-amber-600">Chef Sairaj</span>
              </H2>
              <P>
                I began my culinary journey in the heart of Tuscany, where I learned the importance of fresh, seasonal
                ingredients and traditional cooking methods. My passion for food has taken me around the world, allowing
                me to blend diverse culinary traditions into my unique style.
              </P>
              <P>
                Today, I bring my expertise to private events, cooking classes, and consulting for restaurants that want
                to elevate their menu offerings. My philosophy is simple: respect the ingredients, honor tradition, and
                don&apos;t be afraid to innovate.
              </P>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <div>
                    <P className="font-medium">15+ Years</P>
                    <Small className="text-gray-500">Experience</Small>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-600" />
                  <div>
                    <P className="font-medium">5 Michelin</P>
                    <Small className="text-gray-500">Stars</Small>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-amber-600" />
                  <div>
                    <P className="font-medium">1000+</P>
                    <Small className="text-gray-500">Happy Clients</Small>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-amber-600" />
                  <div>
                    <P className="font-medium">200+</P>
                    <Small className="text-gray-500">Signature Dishes</Small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-amber-600">Testimonials</span>
            </h2>
            <p className="text-gray-600">What my clients say about their culinary experiences with me.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Wedding Client",
                quote:
                  "Chef Sairaj created a magical dining experience for our wedding. Our guests are still talking about the food months later!",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Michael Chen",
                role: "Restaurant Owner",
                quote:
                  "Working with Chef Sairaj to revamp our menu was the best decision we made. Our restaurant has never been busier.",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Emma Rodriguez",
                role: "Cooking Class Student",
                quote:
                  "I learned more in one class with Chef Sairaj than I did in months of trying to teach myself. His techniques are game-changing.",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-none shadow-lg">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&apos;{testimonial.quote}&apos;</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="ml-[35vw]">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl w-[40vw] font-bold">
                Let&apos;s Create Something <span className="text-amber-600">Extraordinary</span>
              </h2>
              <p className="text-gray-600 max-w-md">
                With extensive experience in fine dining establishments and private events, I&apos;m seeking opportunities 
              to contribute my skills and creativity to an innovative culinary team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">chef.antonio@example.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
           
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

