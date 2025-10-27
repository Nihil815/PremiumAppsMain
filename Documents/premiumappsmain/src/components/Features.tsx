import { Shield, Smartphone, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with bank-level encryption and security protocols across all our applications.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Sync",
    description: "Seamlessly sync your data across all your devices. Access your information anywhere, anytime.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Automatic cloud backup ensures your important data is never lost and always accessible.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover-lift border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
