import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex gap-4">
      <div>
        <div className=" flex flex-row items-center gap-1 ">
          <div>{icon}</div>
          <span>-</span>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="mt-1 text-muted-foreground">{content}</div>
      </div>
    </div>
  );
};

const FaqCard = ({ question, answer }) => {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="font-semibold">{question}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{answer}</p>
    </div>
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }
    if (!formData.email.includes("@")) {
      errors.email = "Please enter a valid email address.";
    }
    if (formData.phone.length < 10) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (!formData.subject) {
      errors.subject = "Please select a subject.";
    }
    if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      console.log("Form submitted:", formData);
      alert("Message sent! We'll get back to you as soon as possible.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

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
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images[currentImageIndex]}
            alt="Hero"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300 text-center">
            Have questions about our tours? Want to create a custom itinerary?
            We're here to help make your dream vacation a reality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="max-sm:text-center">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">
                Get in touch with our travel experts. We're here to help and
                answer any questions you might have.
              </p>
            </div>

            <div className="lg:flex lg:flex-col gap-10 justify-between grid grid-cols-2">
              <ContactInfo
                icon={<MapPin className="h-6 w-6" />}
                title="Visit Us"
                content={
                  <>
                    123 Travel Street
                    <br />
                    Ho Chi Minh, NY 10001
                    <br />
                    Viet Nam
                  </>
                }
              />

              <ContactInfo
                icon={<Phone className="h-6 w-6" />}
                title="Call Us"
                content={
                  <>
                    +84 (09) 123-4567
                    <br />
                    +84 (09) 765-4321
                  </>
                }
              />

              <ContactInfo
                icon={<Mail className="h-6 w-6" />}
                title="Email Us"
                content="info@travelcompany.com"
              />

              <ContactInfo
                icon={<Clock className="h-6 w-6" />}
                title="Office Hours"
                content={
                  <>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </>
                }
              />
            </div>

            {/* Map */}
            {/* <div className="aspect-video w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Office location map"
                className="h-full w-full object-cover"
              />
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-8">
            <h2 className="text-2xl font-bold text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+84 (09) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full rounded border border-gray-300 p-2"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Question</option>
                  <option value="custom">Custom Tour Request</option>
                  <option value="support">Customer Support</option>
                </select>
                {formErrors.subject && (
                  <p className="text-red-500 text-sm">{formErrors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your travel plans..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[120px]"
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
        {/* FAQ Section */}
        <section className="bg-muted/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-2 text-muted-foreground">
                Find quick answers to common questions about our services
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FaqCard
                question="How do I book a tour?"
                answer="You can book a tour through our website by selecting your desired tour and following the booking process, or contact our team for assistance."
              />
              <FaqCard
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, PayPal, and bank transfers. Payment plans are available for select tours."
              />
              <FaqCard
                question="Can I customize a tour?"
                answer="Yes! We specialize in creating custom itineraries. Contact our team to start planning your perfect trip."
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ContactPage;
