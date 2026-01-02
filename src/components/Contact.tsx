import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">Contact</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. 
              Send me a message and let's create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:lenoxowino2022@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    lenoxowino2022@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-card border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">"</span>
                  I believe in building solutions that not only meet technical requirements 
                  but also create real value for users and businesses.
                  <span className="text-primary font-semibold">"</span>
                </p>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-3">
              <form className="space-y-6 p-6 rounded-xl bg-gradient-card border border-border shadow-card">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="lenoxowino2022@gmail.com"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
