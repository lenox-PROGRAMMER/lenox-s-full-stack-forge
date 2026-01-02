import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Lenox</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors group">
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors group">
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors group">
              <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
