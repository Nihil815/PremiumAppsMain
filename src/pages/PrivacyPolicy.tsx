import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text">Privacy Policy</h1>
                </div>
                <p className="text-lg text-muted-foreground">
                  Privacy Policy for Find My Devices +
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for using <strong>Find My Devices</strong>. This Privacy Policy explains how we handle your information and respect your privacy when you use our iOS app.
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">1. No Collection of Personal Data</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Find My Devices does <strong>not</strong> collect, store, or transmit any personally identifiable information. You can use the app freely without creating an account or entering any personal details.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Analytics</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use <strong>Firebase Analytics</strong> to understand how users interact with the app and to improve its performance. This may include data such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>App usage patterns (e.g., feature usage, session duration)</li>
                    <li>Device and OS information</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    This information is:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Collected in an <strong>anonymized</strong> form</li>
                    <li>Not linked to your identity</li>
                    <li>Not shared with third parties for advertising or profiling</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    For more information, see: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://firebase.google.com/support/privacy</a>
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">3. No Media or File Access</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Find My Devices does not access or store your media files, photos, videos, or any content on your device.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4. No Data Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do <strong>not</strong> share any information with third parties, and we do not use your data for advertising or marketing.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">5. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our app is designed to be safe for users of all ages. We do not knowingly collect data from children under the age of 13.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Even though we do not collect personal data, you are welcome to reach out if you have concerns or questions about your privacy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Contact us at: <a href="mailto:support@pmapps.online" className="text-primary hover:underline">support@pmapps.online</a>
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">7. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. If we make changes, we will post the updated version here with a new effective date. We encourage you to check back periodically.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

