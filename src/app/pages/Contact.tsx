import { useState } from 'react';
import { Mail, Github, Linkedin, Facebook, Instagram, GraduationCap, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no actual email is sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12 relative">
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 mb-8">
        <h1 className="text-5xl mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Get In Touch
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-8 lg:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <h2 className="text-3xl mb-4">Send a Message</h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out for collaboration, questions about my projects, or just to connect!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transition-all inline-flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:border-primary/30 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-lg shadow-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1">Email</h3>
                <a
                  href="mailto:gdeanbenedict@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  gdeanbenedict@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:border-primary/30 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-lg shadow-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1">School</h3>
                <p className="text-sm text-muted-foreground">
                  Polytechnic University of the Philippines
                  <br />
                  Section: BSIT 2-1
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:border-primary/30 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <h3 className="mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dean-benedict-gomez-b27965322/' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/AltTenor123' },
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/dean.gomez.984/' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bene__data/' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all shadow-lg shadow-primary/10 hover:shadow-primary/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all">
            <h3 className="mb-2">Open to Opportunities</h3>
            <p className="text-sm text-muted-foreground">
              I'm currently exploring internship and collaboration opportunities in software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
