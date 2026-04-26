import { Link } from 'react-router';
import { FileCode, GraduationCap, Calendar, Eye, X, Briefcase } from 'lucide-react';
import { useState } from 'react';
import PDFViewer from '../components/PDFViewer';

export default function Home() {
  const [showCVModal, setShowCVModal] = useState(false);
  return (
    <div className="container mx-auto px-6 lg:px-8 py-12 relative">
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10">
<div className="mb-8 p-8 lg:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl shadow-primary/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.35)] hover:border-primary/30 transition-all relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Featuring...
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    Bene_Data
                  </span>
                </h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-mono">Object-Oriented Programming</span>
                </div>
              </div>

              <p className="text-muted-foreground text-lg max-w-2xl">
                OOP Portfolio of Dean Benedict B Gomez from BSIT 2-1
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/midterm"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transition-all inline-flex items-center gap-2"
                >
                  View Portfolio
                  <FileCode className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setShowCVModal(true)}
                  className="px-6 py-3 rounded-xl border-2 border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all inline-flex items-center gap-2"
                >
                  View CV
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side - Picture */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 hover:shadow-[0_0_24px_rgba(37,99,235,0.45)] transition-all">
                <img
                  src="/images/profile.jpg"
                  alt="Dean Benedict B Gomez"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 filter hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Course', value: 'BSIT', icon: GraduationCap },
          { label: 'Year Level', value: '2nd Year', icon: Calendar },
          { label: 'Term', value: 'Midterm', icon: FileCode },
        ].map((stat, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg shadow-primary/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.35)] hover:border-primary/30 hover:scale-105 transition-all overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-lg shadow-primary/10">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">{stat.label}</p>
                <p className="text-2xl">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 p-8 lg:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl shadow-primary/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.35)] hover:border-primary/30 transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <h2 className="text-3xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This e-portfolio presents my Midterm Project in Object-Oriented Programming. It includes quizzes, activities, and assignments that demonstrate my understanding of OOP concepts. Through these projects, I've developed skills in Java programming, problem-solving, and applying object-oriented principles to real-world scenarios.
              </p>
              <p>
                Aspiring to be Information Technology Specialist, Cybersecurity Expert, and DevOps Engineer. Currently studying at Polytechnic University of the Philippines and affiliated to different Organization.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl shadow-primary/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.35)] hover:border-primary/30 transition-all relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shadow-lg shadow-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl">Affiliations</h3>
            </div>
            <ul className="space-y-4">
              {[
                { role: 'Chief of Finance', org: 'AcademiTech Research and Knowledge (ARK)' },
                { role: 'Director for Non-Academics Affairs', org: 'PUP - Association of DOST Scholars' },
                { role: 'Member', org: 'Google Developer Groups on Campus PUP' },
                { role: 'Member', org: 'AWS Cloud Club PUP' },
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 shadow-lg shadow-primary/50" />
                  <div className="text-sm">
                    <p className="text-foreground font-mono">{item.role}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>  
      </div>

      {showCVModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setShowCVModal(false)}
        >
          <div
              className="relative w-full max-w-6xl h-[90vh] bg-card/95 backdrop-blur-xl border border-primary/30 rounded-3xl shadow-2xl shadow-primary/30 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/50 bg-card/95 backdrop-blur-xl shadow-lg shadow-primary/10">
              <h2 className="text-2xl font-mono">Curriculum Vitae</h2>
              <button
                onClick={() => setShowCVModal(false)}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative flex-1 min-h-0">
              <PDFViewer url="/cv-updated.pdf" title="Curriculum Vitae" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
