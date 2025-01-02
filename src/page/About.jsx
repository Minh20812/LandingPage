import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Users, Award, Heart, MapPin, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const StatsCard = ({ icon, value, label }) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          {icon}
        </div>
        <div className="mt-4 text-3xl font-bold">{value}</div>
        <div className="mt-1 text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="rounded-full bg-primary/10 p-4 text-primary">
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const TeamMemberCard = ({ name, role, image }) => {
  return (
    <Card className="overflow-hidden">
      <img
        src={image}
        alt={name}
        width={400}
        height={400}
        className="aspect-square object-cover"
      />
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
};

const images = [
  "https://i.imgur.com/w8wCns8.jpeg",
  "https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://cdn.pixabay.com/photo/2023/05/04/02/24/bali-7969001_1280.jpg",
  "https://i.imgur.com/p9DRSDl.jpeg",
  "https://i.imgur.com/w8wCns8.jpeg",
  "https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-green-50 to-white">
      <div className="px-4 lg:px-6 h-16 top-0 w-full flex bg-transparent"></div>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images[currentImageIndex]}
            alt="Hero"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white p-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Crafting Unforgettable Travel Experiences
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300 text-center">
            Since 2010, we've been helping travelers discover the world's most
            beautiful destinations and create memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatsCard
              icon={<Globe2 className="h-6 w-6" />}
              value="50+"
              label="Countries"
            />
            <StatsCard
              icon={<Users className="h-6 w-6" />}
              value="10k+"
              label="Happy Travelers"
            />
            <StatsCard
              icon={<Award className="h-6 w-6" />}
              value="150+"
              label="Travel Awards"
            />
            <StatsCard
              icon={<Heart className="h-6 w-6" />}
              value="98%"
              label="Satisfaction Rate"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2010, our journey began with a simple mission: to
                  make extraordinary travel experiences accessible to everyone.
                  What started as a small team of passionate travelers has grown
                  into a global community of adventurers and explorers.
                </p>
                <p>
                  We believe that travel has the power to transform lives, break
                  down barriers, and create lasting connections. Our team of
                  expert travel consultants works tirelessly to craft unique
                  itineraries that combine must-see destinations with
                  off-the-beaten-path experiences.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <a href="/contact">Get in Touch</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1723780889230-5758aae84339?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our team planning a trip"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Heart className="h-8 w-8" />}
              title="Passion for Travel"
              description="We're travelers at heart, passionate about creating extraordinary experiences."
            />
            <ValueCard
              icon={<Users className="h-8 w-8" />}
              title="Customer First"
              description="Your satisfaction and safety are our top priorities, always."
            />
            <ValueCard
              icon={<Globe2 className="h-8 w-8" />}
              title="Sustainability"
              description="We're committed to responsible tourism and protecting the places we visit."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Passionate travel experts ready to help you plan your next
              adventure
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <TeamMemberCard
              name="Sarah Johnson"
              role="Founder & CEO"
              image="https://i1-vnexpress.vnecdn.net/2024/12/31/2024-11-13T000000Z-706137900-M-1906-1692-1735618818.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=KQbhozZw4SyfHntzY-skFQ"
            />
            <TeamMemberCard
              name="Michael Chen"
              role="Head of Operations"
              image="https://i1-vnexpress.vnecdn.net/2024/12/31/2024-11-13T000000Z-706137900-M-1906-1692-1735618818.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=KQbhozZw4SyfHntzY-skFQ"
            />
            <TeamMemberCard
              name="Emma Davis"
              role="Travel Consultant"
              image="https://i1-vnexpress.vnecdn.net/2024/12/31/2024-11-13T000000Z-706137900-M-1906-1692-1735618818.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=KQbhozZw4SyfHntzY-skFQ"
            />
            <TeamMemberCard
              name="James Wilson"
              role="Customer Experience"
              image="https://i1-vnexpress.vnecdn.net/2024/12/31/2024-11-13T000000Z-706137900-M-1906-1692-1735618818.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=KQbhozZw4SyfHntzY-skFQ"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="absolute inset-0">
          {/* <img
            src="/placeholder.svg?height=400&width=1920"
            alt="Beautiful destination"
            width={1920}
            height={400}
            className="h-[400px] w-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Adventure?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300">
              Let us help you plan your perfect trip. Get in touch with our
              travel experts today.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white" asChild>
                <a href="/tours">View Tours</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
