import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, MapPin, Star, Calendar, DollarSign } from "lucide-react";

const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  const destinations = [
    {
      id: 1,
      name: "Bali Paradise",
      location: "Bali, Indonesia",
      description:
        "Experience the perfect blend of beaches, culture, and relaxation in beautiful Bali.",
      price: 1299,
      rating: 4.8,
      image:
        "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "Asia",
      duration: "7 days",
    },
    {
      id: 2,
      name: "Santorini Sunset",
      location: "Santorini, Greece",
      description:
        "Discover the magical sunsets and white-washed buildings of Santorini.",
      price: 1599,
      rating: 4.9,
      image:
        "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "Europe",
      duration: "6 days",
    },
    {
      id: 3,
      name: "Machu Picchu Explorer",
      location: "Cusco, Peru",
      description:
        "Trek through history to the ancient Incan citadel of Machu Picchu.",
      price: 1899,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1574700584428-17f6bcd3bd28?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "South America",
      duration: "8 days",
    },
    {
      id: 4,
      name: "Safari Adventure",
      location: "Serengeti, Tanzania",
      description:
        "Witness the great migration and Africa's incredible wildlife.",
      price: 2499,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1602410125631-7e736e36797c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "Africa",
      duration: "10 days",
    },
    {
      id: 5,
      name: "Northern Lights",
      location: "Reykjavik, Iceland",
      description:
        "Chase the aurora borealis in Iceland's stunning landscapes.",
      price: 1999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "Europe",
      duration: "5 days",
    },
    {
      id: 6,
      name: "Great Barrier Reef",
      location: "Queensland, Australia",
      description: "Dive into the world's largest coral reef system.",
      price: 2299,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      continent: "Oceania",
      duration: "7 days",
    },
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContinent =
      selectedContinent === "all" ||
      destination.continent === selectedContinent;
    const matchesPrice =
      selectedPrice === "all" ||
      (selectedPrice === "under1500" && destination.price < 1500) ||
      (selectedPrice === "1500to2000" &&
        destination.price >= 1500 &&
        destination.price <= 2000) ||
      (selectedPrice === "over2000" && destination.price > 2000);

    return matchesSearch && matchesContinent && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-green-50 to-white">
      <div className="px-4 lg:px-6 h-16 top-0 w-full flex bg-transparent"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-gray-600 mb-6">
            Discover amazing places around the world and plan your next
            adventure
          </p>

          <div className="grid gap-4 md:grid-cols-[1fr_200px_200px] items-end">
            <Input
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white"
            />

            <Select
              value={selectedContinent}
              onValueChange={setSelectedContinent}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select continent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Continents</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="North America">North America</SelectItem>
                <SelectItem value="South America">South America</SelectItem>
                <SelectItem value="Africa">Africa</SelectItem>
                <SelectItem value="Oceania">Oceania</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under1500">Under $1,500</SelectItem>
                <SelectItem value="1500to2000">$1,500 - $2,000</SelectItem>
                <SelectItem value="over2000">Over $2,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  width={600}
                  height={400}
                  className="w-full h-[200px] object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white/90"
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to favorites</span>
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold">{destination.name}</h2>
                    <p className="text-gray-500 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {destination.location}
                    </p>
                  </div>
                  <Badge variant="secondary">{destination.continent}</Badge>
                </div>

                <p className="text-gray-600 mb-4">{destination.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {destination.rating}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 border-t flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-xl font-bold">{destination.price}</span>
                  <span className="text-gray-500 ml-1">per person</span>
                </div>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No destinations found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;
