import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, Users } from "lucide-react";

const tours = [
  {
    id: "1",
    title: "Alpine Adventure",
    duration: 7,
    price: 1299,
    difficulty: "moderate",
    groupSize: 12,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1663168496369-a30fdf03b8ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience the majestic Alps with this incredible week-long adventure. Trek through pristine mountain landscapes, stay in authentic mountain huts, and immerse yourself in Alpine culture.",
    highlights: [
      "Summit famous peaks",
      "Traditional Alpine cuisine",
      "Mountain hut experience",
    ],
    included: ["Professional guide", "Accommodation", "Most meals"],
    startDates: ["2025-06-15", "2025-07-01", "2025-07-15"],
  },
  {
    id: "2",
    title: "Coastal Explorer",
    duration: 5,
    price: 999,
    difficulty: "easy",
    groupSize: 15,
    rating: 4.9,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover hidden beaches, dramatic cliffs, and charming coastal villages on this unforgettable journey along the coastline.",
    highlights: ["Secret beaches", "Coastal hiking", "Fresh seafood"],
    included: ["Local guide", "Beach equipment", "Boat tours"],
    startDates: ["2025-05-20", "2025-06-10", "2025-06-25"],
  },
  {
    id: "3",
    title: "Conquer Fansipan",
    duration: 3,
    price: 799,
    difficulty: "easy",
    groupSize: 8,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1551815943-385d5246c8a1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Embark on a challenging trek to the summit of Fansipan, the highest mountain in Vietnam. Experience stunning views and test your endurance in this unforgettable adventure.",
    highlights: [
      "Reach the roof of Indochina",
      "Breathtaking sunrise views",
      "Dense jungle trekking",
    ],
    included: ["Local guide", "Camp gear", "Meals on trek"],
    startDates: ["2025-04-10", "2025-10-05", "2025-11-15"],
  },
  {
    id: "4",
    title: "Caving Expedition in Quang Binh",
    duration: 4,
    price: 1399,
    difficulty: "hard",
    groupSize: 6,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1638795062869-e778a0acce74?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Explore the world's largest cave system in Phong Nha-Ke Bang National Park. This expedition is for thrill-seekers who want to delve deep into uncharted underground worlds.",
    highlights: [
      "Visit Son Doong Cave",
      "Underground rivers and lakes",
      "Stunning stalactites and stalagmites",
    ],
    included: ["Expert guide", "Camping equipment", "Meals and permits"],
    startDates: ["2025-03-15", "2025-09-20", "2025-11-10"],
  },
];

const Tours = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-8 min-h-screen bg-gradient-to-r from-blue-50 via-green-50 to-white">
        <div className="px-4 lg:px-6 h-16 top-0 w-full flex bg-transparent"></div>
        <h2 className="tracking-tight text-4xl font-bold mb-4">
          Available Tours
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={tour.imageUrl}
                  alt={tour.title}
                  className="h-64 w-full object-cover"
                />
                <Badge
                  className={`absolute right-2 top-2 ${
                    tour.difficulty === "easy"
                      ? "bg-green-500 text-black"
                      : tour.difficulty === "moderate"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  variant={
                    tour.difficulty === "easy"
                      ? "default"
                      : tour.difficulty === "moderate"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {tour.difficulty}
                </Badge>
              </div>

              <CardContent className="grid gap-4 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{tour.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tour.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-semibold">{tour.rating}</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{tour.duration} days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Max {tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>
                      Next date:{" "}
                      {new Date(tour.startDates[0]).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Highlights</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {tour.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between border-t p-6">
                <div>
                  <span className="text-2xl font-bold">${tour.price}</span>
                  <span className="text-muted-foreground"> per person</span>
                </div>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tours;
