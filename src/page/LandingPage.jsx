import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, Map, Compass, Star, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://i.imgur.com/w8wCns8.jpeg",
  "https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://cdn.pixabay.com/photo/2023/05/04/02/24/bali-7969001_1280.jpg",
  "https://i.imgur.com/p9DRSDl.jpeg",
  "https://i.imgur.com/w8wCns8.jpeg",
  "https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const TravelLanding = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 via-green-50 to-white ">
      <div className="px-4 lg:px-6 h-16 top-0 w-full flex bg-transparent"></div>
      <main className="flex-1">
        {/* section 1 */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={images[currentImageIndex]}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Explore the World with TravelEasy
            </h1>
            <p className="text-lg mb-8">Discover your next adventure with us</p>
            <div className="flex gap-4">
              <Link to="/destinations">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Start Planning
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-black text-white hover:bg-gray-800"
              >
                <Link to="/tours">View Packages</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Popular Destinations
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our most sought-after destinations. From pristine
                  beaches to majestic mountains, find your perfect getaway.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
              {[
                {
                  title: "Bali, Indonesia",
                  image:
                    "https://cdn.pixabay.com/photo/2023/05/04/02/24/bali-7969001_1280.jpg",
                  price: "$1,299",
                },
                {
                  title: "Sapa, VietNam",
                  image: "https://i.imgur.com/p9DRSDl.jpeg",
                  price: "$1,599",
                },
                {
                  title: "Hoi An, VietNam",
                  image: "https://i.imgur.com/B0PAbWf.jpeg",
                  price: "$1,899",
                },
                {
                  title: "Maldives",
                  image: "https://i.imgur.com/w8wCns8.jpeg",
                  price: "$2,199",
                },
              ].map((destination) => (
                <Card key={destination.title} className="overflow-hidden">
                  <img
                    alt={destination.title}
                    className="object-cover w-full h-[200px]"
                    height={200}
                    src={destination.image}
                    width={300}
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{destination.title}</h3>
                    <p className="text-sm text-gray-500">
                      Starting from {destination.price}
                    </p>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center items-center space-y-4">
                <div className="space-y-2 max-lg:text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                    Why Choose TravelEasy
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We make travel planning effortless. Our expert team ensures
                    every journey is memorable and hassle-free.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: <Map className="h-6 w-6" />,
                      title: "Expert Guidance",
                      description:
                        "Professional travel advisors at your service",
                    },
                    {
                      icon: <Hotel className="h-6 w-6" />,
                      title: "Premium Stays",
                      description: "Carefully selected accommodations",
                    },
                    {
                      icon: <Compass className="h-6 w-6" />,
                      title: "Unique Experiences",
                      description: "Authentic local adventures",
                    },
                    {
                      icon: <Star className="h-6 w-6" />,
                      title: "24/7 Support",
                      description: "Always here when you need us",
                    },
                  ].map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-transparent">
                        {feature.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold">{feature.title}</h3>
                        <p className="text-sm text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Features"
                  className="overflow-hidden rounded-xl object-cover object-center"
                  height={550}
                  src="https://i.imgur.com/w8wCns8.jpeg"
                  width={550}
                />
              </div>
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Travelers Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied
                  travelers have to say about their experiences.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  name: "Sarah Thompson",
                  location: "Bali Trip",
                  text: "An unforgettable experience! The attention to detail and personalized service made our trip perfect.",
                },
                {
                  name: "Michael Chen",
                  location: "Greece Adventure",
                  text: "Professional, knowledgeable, and incredibly helpful. They made planning our dream vacation effortless.",
                },
                {
                  name: "Emma Rodriguez",
                  location: "Peru Expedition",
                  text: "The local experiences and accommodations exceeded our expectations. Highly recommend!",
                },
              ].map((testimonial) => (
                <Card key={testimonial.name} className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-500">{testimonial.text}</p>
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-gray-200" />
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* section 5 */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <img
                  alt="Newsletter"
                  className="overflow-hidden rounded-xl object-cover object-center"
                  height={550}
                  src="https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  width={550}
                />
              </div>
              <div className="flex flex-col justify-center items-center max-lg:text-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Stay Updated
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Subscribe to our newsletter for exclusive travel deals,
                    insider tips, and inspiration for your next adventure.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button type="submit">Subscribe</Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    By subscribing, you agree to our terms and privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TravelLanding;
