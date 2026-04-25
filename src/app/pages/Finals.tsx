import { Lock } from 'lucide-react';

export default function Finals() {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-12 min-h-[calc(100vh-4rem)] relative">
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 flex items-center justify-center min-h-[600px]">
        <div className="max-w-2xl w-full p-12 rounded-3xl bg-card/30 backdrop-blur-sm border-2 border-dashed border-border/30 shadow-2xl shadow-primary/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative p-8 rounded-full bg-muted/20 border border-primary/30 shadow-lg shadow-primary/20">
              <Lock className="w-16 h-16 text-primary/60" />
            </div>
          </div>

          <h1 className="text-4xl mb-4">
            <span className="bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 bg-clip-text text-transparent">
              Finals Portfolio
            </span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            This section will be updated once the Final Term is completed. Check back soon to see my progress and achievements in the second half of Object-Oriented Programming.
          </p>

          <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted/20 border border-border/30 shadow-lg shadow-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse shadow-lg shadow-primary/50" />
            <span className="text-sm text-muted-foreground font-mono">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
