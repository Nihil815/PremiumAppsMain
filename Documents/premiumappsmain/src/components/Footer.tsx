const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold gradient-text">MyiPhoneApps</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Never lose track of your devices again with our advanced tracking technology.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Apps</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => window.open("https://apps.apple.com/app/scan-vision-device-detector/id6744117319", "_blank")}
                  className="hover:text-foreground transition-colors"
                >
                  Find My Device+
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://apps.apple.com/nl/app/pdf-documenten-scannen-editor/id6753771856", "_blank")}
                  className="hover:text-foreground transition-colors"
                >
                  Tap2Scan: PDF Editor
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="hover:text-foreground transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 MyiPhoneApps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
