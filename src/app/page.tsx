'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Facebook, Instagram, Twitter, ChevronDown, ChefHat } from 'lucide-react';
import Image from 'next/image';

const menuData = {
  "SANDWICH": [
    { name: "Bombay Sandwich", price: "₹130" },
    { name: "Veg Cheese Sandwich", price: "₹110" },
    { name: "Veg Sandwich", price: "₹90" },
    { name: "Plain Cheese Sandwich", price: "₹140" },
    { name: "Cheese Chatni Sandwich", price: "₹140" },
    { name: "Cheese Jam Sandwich", price: "₹140" },
    { name: "Samosa Veg Sandwich", price: "₹90" },
    { name: "Samosa Veg Cheese Sandwich", price: "₹110" },
    { name: "Chocolate Sandwich", price: "₹140" },
    { name: "Bread Butter", price: "₹90" },
    { name: "Bread Butter Jam", price: "₹90" },
    { name: "Chatni Butter", price: "₹90" }
  ],

  "JAIN / SWAMINARAYAN": [
    { name: "Veg Swaminarayan Sandwich", price: "₹90" },
    { name: "Veg Cheese Swaminarayan Sandwich", price: "₹110" },
    { name: "Veg Jain Sandwich", price: "₹90" },
    { name: "Veg Cheese Jain Sandwich", price: "₹110" }
  ],

  "EXTRAS": [
    { name: "Extra Wafer", price: "₹50" },
    { name: "Cheese Wafer", price: "₹170" }
  ],


  "GRILL SANDWICH": [
    { name: "Bombay Toasted Sandwich", price: "₹120" },
    { name: "Samosa Veg Grill Sandwich", price: "₹140" },
    { name: "Samosa Veg Cheese Grill Sandwich", price: "₹160" },
    { name: "Chocolate Grill Sandwich", price: "₹100" },
    { name: "Plain Cheese Grill Sandwich", price: "₹90" },
    { name: "Cheese Chain Grill", price: "₹110" },
    { name: "Cheese Jam Grill", price: "₹100" },
    { name: "Bread Butter Toasted", price: "₹60" },
    { name: "Chatni Butter Toasted", price: "₹70" },
    { name: "Jam Butter Toasted", price: "₹70" }
  ],

  
  "SPECIAL GRILL": [
    { name: "Tandoori Paneer Grill (Onion, Capsicum, Cheese, Parcer)", price: "₹180" },
    { name: "Chilli Cheese Grill (Onion, Capsicum, Cheese, Mayo)", price: "₹160" },
    { name: "Mayogrill (Cabbage, Tomato, Cheese)", price: "₹140" },
    { name: "Tangi Cheese Tomato Grill (Onion, Capsicum, Tomato, Cheese)", price: "₹150" },
    { name: "Cheese Chili Corn (Mayo, Cheese, Corn)", price: "₹150" },
    { name: "Jalapeno Corn (Jalapeno, Corn, Mayo, Cheese)", price: "₹160" },
    { name: "Club Bombay Sandwich (3 Layer) (Cucumber, Tomato, Potato, Cheese, Mayo)", price: "₹180" },
    { name: "Allo Mutter", price: "₹130" },
    { name: "Kolhapuri Grill", price: "₹140" },
    { name: "Paneer Masala Grill Sandwich", price: "₹160" },
    { name: "Paneer Pudina Grill", price: "₹150" },
    { name: "Mushroom Mayo Grill", price: "₹140" },
    { name: "Paneer Mushroom Mayo Grill (8 Layers)", price: "₹200" }
  ],

  "3 LAYERS JUMBO GRILL SANDWICH": [
    { name: "Tandoori Paneer Grill", price: "₹220" },
    { name: "Kolapuri Cheese Grill", price: "₹210" },
    { name: "Chili Cheese Grill", price: "₹190" },
    { name: "Special Mayo Grill", price: "₹180" },
    { name: "Jalapeno Corn Grill", price: "₹200" },
    { name: "Club Bombay Sandwich", price: "₹210" },
    { name: "Aloo Mutter", price: "₹170" },
    { name: "Paneer Mashroom Thy Grill", price: "₹230" },
    { name: "Bites Special", price: "₹250" }
  ],

  "STUFF BUN PARATHA": [
    { name: "Veg Cheese Paratha", price: "₹120" },
    { name: "Cheese Chatni Paratha", price: "₹110" },
    { name: "Chatpata Paratha", price: "₹100" },
    { name: "Cheese Corn Paratha", price: "₹130" },
    { name: "Mashroom Paratha", price: "₹120" },
    { name: "Tandoori Paneer Paratha", price: "₹150" },
    { name: "Chocolate Cheese Paratha", price: "₹110" },
    { name: "Plain Cheese Paratha", price: "₹90" },
    { name: "Bites Bombay Special Paratha", price: "₹180" }
  ],

  "PIZZA": [
    { name: "Veg Cheese Pizza", price: "₹150" },
    { name: "Marchereita Pizza", price: "₹200" },
    { name: "Hot & Spicy Marcherita Pizza", price: "₹200" },
    { name: "Italian Cheese Pizza", price: "₹220" },
    { name: "Mexican Cheese Pizza", price: "₹220" },
    { name: "Tandoori Paneer Pizza", price: "₹230" },
    { name: "Paneer Chatpata Pizza", price: "₹230" },
    { name: "Cheese and Corn Pizza", price: "₹200" },
    { name: "Bites Bombay Special Pizza", price: "₹250" }
  ],

  "STUFF GRILL KHULCHA": [
    { name: "Panner Pudina Khulcha", price: "₹130" },
    { name: "Veg Cheese Pudina Khulcha", price: "₹120" },
    { name: "Cheese Tomato Khulcha", price: "₹120" },
    { name: "Panner Corn Khulcha", price: "₹130" },
    { name: "Mushroom Cheese Khulcha", price: "₹130" },
    { name: "Tandoori Cheese Khulcha", price: "₹150" },
    { name: "Bites Special Khulcha", price: "₹200" }
  ],

  "BURGER": [
    { name: "Veg Burger", price: "₹80" },
    { name: "Veg Cheese Burger", price: "₹110" },
    { name: "Chili Cheese Burger", price: "₹110" },
    { name: "Italian Cheese Burger", price: "₹110" },
    { name: "Paneer Stuff Burger", price: "₹120" },
    { name: "Cheese Creamy Burger", price: "₹110" },
    { name: "Cheese Paneer Tandoori Burger", price: "₹130" },
    { name: "Bites Special Burger", price: "₹150" }
  ],

  "FRENCH FRIES": [
    { name: "French Fries", price: "₹70" },
    { name: "Mayo French Fries", price: "₹90" },
    { name: "Cheese Mayo French Fries", price: "₹110" },
    { name: "Cheese French Fries", price: "₹100" },
    { name: "Perry Perry French Fries", price: "₹100" }
  ],

  "HOT DOG": [
    { name: "Veg. Hot Dog", price: "₹80" },
    { name: "Veg. Cheese Hot Dog", price: "₹100" },
    { name: "Cheese Roll", price: "₹140" },
    { name: "Chill Veg. Hot Dog", price: "₹80" },
    { name: "Chill Veg. Cheese Hot Dog", price: "₹100" },
    { name: "Veg. Italian Hot Dog", price: "₹80" },
    { name: "Veg. Cheese Italian Hot Dog", price: "₹100" },
    { name: "Tandoori Cheese Hot Dog", price: "₹120" },
    { name: "Tandoori Veg Hot Dog", price: "₹100" },
    { name: "Corn Cheese Hot Dog", price: "₹110" },
    { name: "Mayo Cheese Chatni Hot Dog", price: "₹140" },
    { name: "Bite's Special Hot Dog", price: "₹150" }
  ],

  "FRANKIE": [
    { name: "Veg. Frankie", price: "₹100" },
    { name: "Veg. Cheese Frankie", price: "₹120" },
    { name: "Peri Peri Cheese Frankie", price: "₹140" },
    { name: "Chilli Cheese Frankie", price: "₹120" },
    { name: "Italian Cheese Frankie", price: "₹120" },
    { name: "Paneer Frankie", price: "₹150" },
    { name: "Tandoori Paneer Frankie", price: "₹150" },
    { name: "Bite's Special Frankie", price: "₹170" }
  ],

  "GARLIC BREAD": [
    { name: "Chese Garlic Bread", price: "₹130" },
    { name: "Veg Thousand Garlic Bread", price: "₹150" },
    { name: "Paneer Tandoori Cheese Garlic Bread", price: "₹170" },
    { name: "Cheese Corn Garlic Bread", price: "₹150" },
    { name: "Cheese Chilli Garlic Bread", price: "₹150" }
  ],

  "JUICE": [
    { name: "Orange", price: "₹60" },
    { name: "Fresh Sweet Lime", price: "₹60" },
    { name: "Pineapple", price: "₹70" },
    { name: "Watermelon", price: "₹70" },
    { name: "Ganga-Jamuna", price: "₹80" },
    { name: "Mix Fruit", price: "₹90" },
    { name: "Apple", price: "₹80" },
    { name: "Black Grapes", price: "₹80" },
    { name: "Guava Juice", price: "₹70" }
  ],

  "BEVERAGES": [
    { name: "Coldrinks", price: "₹40" },
    { name: "Water", price: "₹20" }
  ]
};


export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <Image src="/logo.jpeg" alt="Logo" width={64} height={64} className="w-16 h-16 text-white" />
              </div>
              <span className="text-xl font-bold text-orange-600">
                Bombay Sandwich
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-red-800">
        <div className="absolute inset-0 bg-gradient-to-br from-chili/50 via-saffron/30 to-gray-900 z-10 opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 to-transparent opacity-50"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-fresh-green/90 text-white px-4 py-2 text-sm font-bold shadow-lg shadow-green-900/50 border-green-400">
              🌶️ Authentic Street Food
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-sm">
            Bombay Sandwich
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the vibrant flavors of authentic and premium grilled sandwiches, brusting out the original spices  and fresh ingredients 
          </p>

          
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-saffron text-white">Complete Menu</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Explore Our Delicious Menu
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From classic grilled sandwiches to innovative fusion creations, discover your perfect meal
            </p>
          </div>

          {/* Menu Items */}
          <div className="grid gap-6">
            {Object.entries(menuData).map(([category, items]) => (
              <Card key={category} className="overflow-hidden transition-all duration-300 bg-white border-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-chili flex items-center">
                    <span className="w-2 h-8 bg-saffron rounded-full mr-3"></span>
                    {category}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-orange-50/30 rounded-lg border border-orange-100 transition-all duration-200"
                      >
                        <span className="text-gray-700 font-medium">{item.name}</span>
                        <span className="text-saffron font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-fresh-green text-white">Visit Us</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Location
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find us in the heart of the city
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="p-8 text-center transition-shadow duration-300 w-full max-w-md md:w-auto bg-white border-orange-100">
              <MapPin className="w-12 h-12 text-chili mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Location</h3>
              <p className="text-gray-600">
                SB - 1/2/33/34, Center Point R.C. Dutt Road, Alkapuri, Vadodara
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                  <Image src="/logo.jpeg" alt="Logo" width={64} height={64} className="w-16 h-16 text-white" />
                </div>
                <span className="text-xl font-bold text-saffron">Bombay Sandwich</span>
              </div>
              <p className="text-gray-400">
                Authentic Mumbai street food experience with modern quality standards.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-saffron">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 1991 Bombay Sandwich. All rights reserved. Made with ❤️ in Mumbai</p>
            <p className="mt-4">
              Digital Menu crafted with precision by{' '}
              <a
                href="https://lazlle.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron transition-colors underline"
              >
                Lazlle & Co
              </a>
              <br />
              <span className="text-sm">Professional QR Code Menu Solutions for Restaurants</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}