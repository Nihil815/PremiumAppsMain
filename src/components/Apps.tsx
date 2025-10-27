import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import findMyDeviceIcon from "@/assets/findmydevice-icon.png";
import tap2ScanIcon from "@/assets/tap2scan-icon.png";

const apps = [
  {
    name: "Find My Device+",
    description: "Never lose track of your devices with real-time location tracking, device ringing, and multi-device support. Advanced features to keep your gadgets safe.",
    iconImage: findMyDeviceIcon,
    features: ["Real-Time GPS Tracking", "Remote Device Ring", "Multi-Device Management", "Location History"],
    appStoreUrl: "https://apps.apple.com/app/scan-vision-device-detector/id6744117319",
  },
  {
    name: "Tap2Scan: PDF Editor",
    description: "Transform your documents with professional PDF editing tools. Scan, edit, annotate, and share PDFs effortlessly from your mobile device.",
    iconImage: tap2ScanIcon,
    features: ["Document Scanning", "PDF Editing Tools", "Cloud Sync", "Digital Signatures"],
    appStoreUrl: "https://apps.apple.com/nl/app/pdf-documenten-scannen-editor/id6753771856",
  },
];

const Apps = () => {
  return (
    <section id="apps" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="gradient-text">iPhone Apps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully crafted applications to enhance your productivity and simplify daily tasks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <Card
              key={index}
              className="group hover-lift border-border/50 bg-card/80 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img src={app.iconImage} alt={`${app.name} Icon`} className="w-full h-full object-cover" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="group/btn"
                    onClick={() => window.open(app.appStoreUrl, "_blank")}
                  >
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{app.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="default"
                  className="w-full group/download"
                  onClick={() => window.open(app.appStoreUrl, "_blank")}
                >
                  <Download className="mr-2 h-4 w-4 group-hover/download:animate-bounce" />
                  Download Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
