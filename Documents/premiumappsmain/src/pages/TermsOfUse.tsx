import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
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
                  <FileText className="w-8 h-8 text-primary" />
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text">Terms of Use</h1>
                </div>
                <p className="text-lg text-muted-foreground">
                  Terms of Use - Find My Devices +
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Use (&quot;Agreement&quot;) govern your use of the <strong>Find My Devices</strong> mobile application and related services provided by <strong>MyiPhoneApps</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By downloading or using the app, you agree to these terms. If you do not agree, you must stop using the app immediately.
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">1. Billing and Payments</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If the app or any part of it requires payment, you agree to pay all applicable fees in line with the prices and billing conditions in effect at the time of purchase. For services offered with a free trial, charges may begin automatically once the trial ends depending on your app store settings.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If your subscription is set to auto-renew, you will be billed accordingly based on the term you have selected. All sensitive payment data is encrypted and transmitted securely using SSL. For high-risk transactions, we may request verification documents such as a government-issued ID and a recent bank statement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to change product pricing or features at any time. We may also limit or cancel orders at our discretion, including those placed using the same account, credit card, or billing address.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Accuracy of Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided in the app may occasionally contain errors, outdated details, or incomplete data (e.g. descriptions, availability). We reserve the right to correct such issues at any time without prior notice, including after a transaction has been submitted.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We are not obligated to update any information in the app unless legally required.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">3. Backups</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not guarantee the preservation of any data you interact with via the app. You are solely responsible for keeping backups of any important content or configurations. Although rare, we may keep temporary backups for internal reasons, but we make no commitment to recover any lost data on your behalf.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4. Links to Third-Party Apps</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The app may contain links to other mobile apps or websites for your convenience. These links do not imply any endorsement or partnership unless explicitly stated. We are not responsible for the accuracy, safety, or content of any third-party services. Use them at your own risk and review their own terms of use.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, trademarks, service marks, graphics, and logos appearing in the app are owned by or licensed to <strong>MyiPhoneApps</strong> or other rights holders. You may not copy, modify, distribute, or otherwise exploit any part of the app or its content without prior written permission.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">6. Disclaimer of Warranty</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The app is provided &quot;as is&quot; and &quot;as available.&quot; We make no warranties—express or implied—regarding the app&apos;s operation or your satisfaction. We do not guarantee that the service will be uninterrupted, secure, error-free, or that it will meet your expectations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Use of the app is at your own risk. Any information or material downloaded through the app is done at your own discretion, and you are solely responsible for any resulting damage to your device or data.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the fullest extent allowed by law, we are not liable for any indirect, incidental, or consequential damages such as loss of profits, data, business opportunities, or reputation even if we have been advised of the possibility of such damages. Our maximum liability is limited to either one euro or the amount you paid in the 30 days prior to the incident, whichever is greater.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">8. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to hold <strong>MyiPhoneApps</strong>, its team members, partners, and affiliates harmless from any claims, damages, losses, or expenses (including legal fees) that result from your use of the app or your violation of these terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">9. Severability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any part of this Agreement is deemed invalid or unenforceable, that part will be interpreted to reflect the original intent, and the rest of the Agreement will continue to apply.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">10. Governing Law and Jurisdiction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This Agreement shall be governed by the laws of the <strong>Netherlands</strong>, and any disputes shall be exclusively resolved by the courts located in <strong>Noord Brabant</strong>. You consent to the personal jurisdiction of these courts.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The United Nations Convention on Contracts for the International Sale of Goods does not apply.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">11. Assignment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You may not transfer or assign any of your rights or obligations under this Agreement without our written consent. We may assign our rights or obligations freely, including as part of a merger or acquisition.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">12. Changes and Amendments</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms from time to time. Any changes will take effect once posted within the app or on our website. Your continued use of the app indicates your agreement to the new terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">13. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using the Find My Devices app, you confirm that you have read, understood, and agreed to these Terms of Use. If you do not accept them, do not use the app.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">14. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions or feedback about this Agreement, please contact us at:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <a href="mailto:support@pmapps.online" className="text-primary hover:underline">support@pmapps.online</a>
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

export default TermsOfUse;

