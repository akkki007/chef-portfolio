'use client';
import { useState } from 'react';
import Image from 'next/image';
import { H1, H2 } from '@/components/ui/typography';
import { ChefHat, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Gallery = () => {
    const images = [
        { id: 1, src: '/2.jpg', alt: 'Food dish 1' },
        { id: 2, src: '/3.jpg', alt: 'Food dish 2' },
        { id: 3, src: '/4.jpg', alt: 'Food dish 3' },
        { id: 4, src: '/5.jpg', alt: 'Food dish 4' },
        { id: 5, src: '/6.jpg', alt: 'Food dish 5' },
        { id: 6, src: '/7.jpg', alt: 'Food dish 6' },
        { id: 7, src: '/8.jpg', alt: 'Food dish 7' },
        { id: 8, src: '/9.jpg', alt: 'Food dish 8' },
        { id: 9, src: '/10.jpg', alt: 'Food dish 9' },
        { id: 10, src: '/11.jpg', alt: 'Food dish 10' },
        { id: 11, src: '/12.jpg', alt: 'Food dish 11' },
        { id: 12, src: '/13.jpg', alt: 'Food dish 12' },
        { id: 13, src: '/14.jpg', alt: 'Food dish 13' },
        { id: 14, src: '/15.jpg', alt: 'Food dish 14' },
        { id: 15, src: '/16.jpg', alt: 'Food dish 15' },
        { id: 16, src: '/17.jpg', alt: 'Food dish 16' },
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="container mx-auto px-4 py-8">
              <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-amber-600" />
              <Link href="/" className="text-lg font-bold text-amber-600 hover:text-amber-800 transition-colors">
                <span className="text-xl font-bold">Chef Sairaj</span>
                </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium hover:text-amber-600 transition-colors">
                Home
              </Link>
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
            <H2 className="text-center my-16">Gallery</H2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                    <div 
                        key={image.id}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-[90vw] h-[90vh]">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;