'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Facebook, Instagram, Twitter, ChefHat, Clock, Flame, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

const menuData = {
  "SANDWICH": [
    { name: "Bombay Sandwich", price: "₹130", popular: true },
    { name: "Veg Cheese Sandwich", price: "₹110", popular: true },
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
    { name: "Veg Swaminarayan Sandwich", price: "₹90", popular: true },
    { name: "Veg Cheese Swaminarayan Sandwich", price: "₹110" },
    { name: "Veg Jain Sandwich", price: "₹90" },
    { name: "Veg Cheese Jain Sandwich", price: "₹110" }
  ],

  "EXTRAS": [
    { name: "Extra Wafer", price: "₹50" },
    { name: "Cheese Wafer", price: "₹170", popular: true }
  ],

  "GRILL SANDWICH": [
    { name: "Bombay Toasted Sandwich", price: "₹120", popular: true },
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
    { name: "Tandoori Paneer Grill (Onion, Capsicum, Cheese, Parcer)", price: "₹180", popular: true },
    { name: "Chilli Cheese Grill (Onion, Capsicum, Cheese, Mayo)", price: "₹160" },
    { name: "Mayogrill (Cabbage, Tomato, Cheese)", price: "₹140" },
    { name: "Tangi Cheese Tomato Grill (Onion, Capsicum, Tomato, Cheese)", price: "₹150" },
    { name: "Cheese Chili Corn (Mayo, Cheese, Corn)", price: "₹150" },
    { name: "Jalapeno Corn (Jalapeno, Corn, Mayo, Cheese)", price: "₹160", popular: true },
    { name: "Club Bombay Sandwich (3 Layer) (Cucumber, Tomato, Potato, Cheese, Mayo)", price: "₹180" },
    { name: "Allo Mutter", price: "₹130" },
    { name: "Kolhapuri Grill", price: "₹140" },
    { name: "Paneer Masala Grill Sandwich", price: "₹160" },
    { name: "Paneer Pudina Grill", price: "₹150" },
    { name: "Mushroom Mayo Grill", price: "₹140" },
    { name: "Paneer Mushroom Mayo Grill (8 Layers)", price: "₹200", popular: true }
  ],

  "3 LAYERS JUMBO GRILL SANDWICH": [
    { name: "Tandoori Paneer Grill", price: "₹220", popular: true },
    { name: "Kolapuri Cheese Grill", price: "₹210" },
    { name: "Chili Cheese Grill", price: "₹190" },
    { name: "Special Mayo Grill", price: "₹180" },
    { name: "Jalapeno Corn Grill", price: "₹200" },
    { name: "Club Bombay Sandwich", price: "₹210" },
    { name: "Aloo Mutter", price: "₹170" },
    { name: "Paneer Mashroom Thy Grill", price: "₹230" },
    { name: "Bites Special", price: "₹250", popular: true }
  ],

  "STUFF BUN PARATHA": [
    { name: "Veg Cheese Paratha", price: "₹120", popular: true },
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
    { name: "Veg Cheese Pizza", price: "₹150", popular: true },
    { name: "Marchereita Pizza", price: "₹200" },
    { name: "Hot & Spicy Marcherita Pizza", price: "₹200" },
    { name: "Italian Cheese Pizza", price: "₹220" },
    { name: "Mexican Cheese Pizza", price: "₹220" },
    { name: "Tandoori Paneer Pizza", price: "₹230", popular: true },
    { name: "Paneer Chatpata Pizza", price: "₹230" },
    { name: "Cheese and Corn Pizza", price: "₹200" },
    { name: "Bites Bombay Special Pizza", price: "₹250" }
  ],

  "STUFF GRILL KHULCHA": [
    { name: "Panner Pudina Khulcha", price: "₹130", popular: true },
    { name: "Veg Cheese Pudina Khulcha", price: "₹120" },
    { name: "Cheese Tomato Khulcha", price: "₹120" },
    { name: "Panner Corn Khulcha", price: "₹130" },
    { name: "Mushroom Cheese Khulcha", price: "₹130" },
    { name: "Tandoori Cheese Khulcha", price: "₹150" },
    { name: "Bites Special Khulcha", price: "₹200" }
  ],

  "BURGER": [
    { name: "Veg Burger", price: "₹80", popular: true },
    { name: "Veg Cheese Burger", price: "₹110" },
    { name: "Chili Cheese Burger", price: "₹110" },
    { name: "Italian Cheese Burger", price: "₹110" },
    { name: "Paneer Stuff Burger", price: "₹120" },
    { name: "Cheese Creamy Burger", price: "₹110" },
    { name: "Cheese Paneer Tandoori Burger", price: "₹130" },
    { name: "Bites Special Burger", price: "₹150" }
  ],

  "FRENCH FRIES": [
    { name: "French Fries", price: "₹70", popular: true },
    { name: "Mayo French Fries", price: "₹90" },
    { name: "Cheese Mayo French Fries", price: "₹110" },
    { name: "Cheese French Fries", price: "₹100" },
    { name: "Perry Perry French Fries", price: "₹100" }
  ],

  "HOT DOG": [
    { name: "Veg. Hot Dog", price: "₹80", popular: true },
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
    { name: "Veg. Frankie", price: "₹100", popular: true },
    { name: "Veg. Cheese Frankie", price: "₹120" },
    { name: "Peri Peri Cheese Frankie", price: "₹140" },
    { name: "Chilli Cheese Frankie", price: "₹120" },
    { name: "Italian Cheese Frankie", price: "₹120" },
    { name: "Paneer Frankie", price: "₹150" },
    { name: "Tandoori Paneer Frankie", price: "₹150" },
    { name: "Bite's Special Frankie", price: "₹170" }
  ],

  "GARLIC BREAD": [
    { name: "Chese Garlic Bread", price: "₹130", popular: true },
    { name: "Veg Thousand Garlic Bread", price: "₹150" },
    { name: "Paneer Tandoori Cheese Garlic Bread", price: "₹170" },
    { name: "Cheese Corn Garlic Bread", price: "₹150" },
    { name: "Cheese Chilli Garlic Bread", price: "₹150" }
  ],

  "JUICE": [
    { name: "Orange", price: "₹60", popular: true },
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
    { name: "Coldrinks", price: "₹40", popular: true },
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
              <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.jpeg" 
                  alt="Logo" 
                  width={64} 
                  height={64} 
                  className="w-16 h-16 object-cover"
                />
              </div>
              <span className="text-xl font-bold text-orange-600">
                Bites Bombay Sandwich
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 via-orange-500/50 to-gray-900/80 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-1 shadow-2xl">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={128}
                height={128}
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            <span className="block">BITES BOMBAY</span>
            <span className="block text-orange-200">SANDWICH</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant flavors of authentic Mumbai street food with premium grilled sandwiches,
            bursting with original spices and fresh ingredients
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-orange-300" />
              <span className="text-white font-medium">10 AM - 11 PM</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Flame className="w-5 h-5 text-orange-300" />
              <span className="text-white font-medium">Fresh & Hot</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-orange-300" />
              <span className="text-white font-medium">Since 1991</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-8 py-2 text-base">
              <ChefHat className="w-5 h-5 mr-2" />
              Our Complete Menu
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Taste the Bombay Magic
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Each category showcases our signature specialties, carefully crafted with authentic Mumbai flavors
            </p>
          </div>

          {/* Menu Categories */}
          <div className="space-y-16">
            {Object.entries(menuData).map(([category, items]) => (
              <div key={category} className="scroll-mt-20" id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-orange-100">
                  {/* Category Header with Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-r from-orange-50 to-orange-100">
                    {/* Category Image Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                          <Sparkles className="w-12 h-12 text-orange-500" />
                        </div>
                        <p className="text-lg font-medium text-gray-700">Category Image for</p>
                        <p className="text-2xl font-bold text-gray-900">{category}</p>
                        <p className="text-sm text-gray-500 mt-2">Replace with your image</p>
                      </div>
                    </div>
                    
                    {/* Category Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <Badge className="bg-white text-gray-900 font-bold px-4 py-2 text-base">
                              {category}
                            </Badge>
                            <p className="text-white mt-2 text-sm font-medium">
                              {items.length} delicious options
                            </p>
                          </div>
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2">
                            <Star className="w-4 h-4 mr-1" />
                            Category
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items Grid */}
                  <div className="bg-white p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="group relative bg-gradient-to-br from-white to-orange-50 rounded-xl border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 p-4 hover:shadow-lg"
                        >
                          {/* Popular Badge */}
                          {item.popular && (
                            <div className="absolute -top-2 -right-2 z-10">
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 text-xs font-bold">
                                <Flame className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            </div>
                          )}

                          <div className="flex flex-col h-full">
                            <div className="flex-1 mb-3">
                              <h4 className="font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 line-clamp-2 text-lg">
                                {item.name}
                              </h4>
                            </div>
                            
                            <div className="flex items-center justify-between pt-3 border-t border-orange-100">
                              <div className="relative">
                                <span className="text-2xl font-bold text-gray-900">
                                  {item.price}
                                </span>
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-transparent group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300"></div>
                              </div>
                              
                              
                            </div>
                          </div>

                          {/* Hover effect corner */}
                          <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-orange-500 to-red-600 transform rotate-45 translate-x-6 -translate-y-6 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-8 py-2">
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Restaurant
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Find Us in Vadodara
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experience the authentic taste at our conveniently located restaurant
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Location Details */}
            <Card className="border-0 shadow-2xl rounded-2xl bg-gradient-to-br from-white to-orange-50 p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Location</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">SB - 1/2/33/34, Center Point</span><br />
                    R.C. Dutt Road, Alkapuri<br />
                    Vadodara, Gujarat
                  </p>
                  <div className="flex items-center justify-center gap-2 text-orange-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Open: 10:00 AM - 11:00 PM</span>
                  </div>
                </div>
                
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-orange-500">
                  <Image 
                    src="/logo.jpeg" 
                    alt="Logo" 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Bites Bombay Sandwich
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Since 1991 • Taste of Mumbai</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bringing authentic Mumbai street food flavors to Vadodara with quality ingredients,
                traditional recipes, and modern presentation. A family favorite since three decades.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a href="#" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-6 h-6" />
                  </div>
                </a>
                <a href="#" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6" />
                  </div>
                </a>
                <a href="#" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Twitter className="w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-lg mb-4">
              Since 1991  Bites Bombay Sandwich. All rights reserved.
            </p>
            <p className="text-gray-500 mb-6">
              Made with ❤️ in Mumbai • Served with pride in Vadodara
            </p>
            <p className="text-gray-600 text-sm">
              Digital Menu crafted by{' '}
              <a
                href="https://lazlle.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline transition-colors"
              >
                Lazlle & Co
              </a>
              {' • '}
              <span className="text-gray-500">Professional QR Code Menu Solutions for Restaurants</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
