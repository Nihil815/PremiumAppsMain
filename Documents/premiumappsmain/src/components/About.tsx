import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Shield, Zap, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your privacy and data security are our top priorities. All our apps are built with industry-leading security standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth and responsive experiences across all our applications.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed for users of all skill levels. Beautiful and functional.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We don't compromise on quality. Every detail is crafted to perfection.",
  },
];

const avatarUrls = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4,c0aede,d1d4f9",
  "https://api.dicebear.com/7.x/personas/svg?seed=Alex&backgroundColor=ffd5dc,ffdfbf",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=Jordan&backgroundColor=ffd93d",
  "https://api.dicebear.com/7.x/open-peeps/svg?seed=Morgan&backgroundColor=b6e3f4",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto space-y-20">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose <span className="gradient-text">MyiPhoneApps?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering exceptional mobile experiences that make a difference in your daily life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Join Thousands of Happy Users
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference that premium quality makes. Download our apps today and discover 
                how technology can simplify your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-card border border-border">
                  <div className="flex -space-x-2">
                    {avatarUrls.map((url, i) => (
                      <Avatar key={i} className="w-8 h-8 border-2 border-card">
                        <AvatarImage src={url} alt={`User ${i + 1}`} />
                        <AvatarFallback>User</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">1 Million+ Active Users</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-card border border-border">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">4.8 Average Rating</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
