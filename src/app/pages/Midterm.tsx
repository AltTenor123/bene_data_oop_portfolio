import React, { useState, useRef, useEffect } from 'react';
import { X, ArrowRight, Code2, FileText, BookOpen } from 'lucide-react';
import { midtermContent } from '../data/midtermContent';
import PDFViewer from '../components/PDFViewer';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'activities' | 'seatwork' | 'quizzes' | 'assignment';
  tagColor: string;
  tagLabel: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'act1',
    title: 'Midterm Activity #1',
    description: 'Variables - Variable tracking and reference checking with how memory changes each step of the program.',
    category: 'activities',
    tagColor: 'bg-blue-500',
    tagLabel: 'ACT1',
  },
  {
    id: 'act2',
    title: 'Midterm Activity #2',
    description: 'Operators - Program Making with Operators',
    category: 'activities',
    tagColor: 'bg-blue-500',
    tagLabel: 'ACT2',
  },
  {
    id: 'act3',
    title: 'Midterm Activity #3',
    description: 'Simple Wallet System - A wallet system that allows users to view balance, add money, and spend money with transaction counting.',
    category: 'activities',
    tagColor: 'bg-blue-500',
    tagLabel: 'ACT3',
  },
  {
    id: 'act4',
    title: 'Midterm Activity #4',
    description: 'Grade Evaluation System',
    category: 'activities',
    tagColor: 'bg-blue-500',
    tagLabel: 'ACT4',
  },
  {
    id: 'act5',
    title: 'Midterm Activity #5',
    description: 'Personal Expense Tracker',
    category: 'activities',
    tagColor: 'bg-blue-500',
    tagLabel: 'ACT5',
  },
  {
    id: 'sw1',
    title: 'Midterm Seatwork #1',
    description: 'Code Tracking (Arithmetic, Logical, and Binary Operations)',
    category: 'seatwork',
    tagColor: 'bg-cyan-400',
    tagLabel: 'SW1',
  },
  {
    id: 'sw2',
    title: 'Midterm Seatwork #2',
    description: 'Basic ATM System',
    category: 'seatwork',
    tagColor: 'bg-cyan-400',
    tagLabel: 'SW2',
  },
  {
    id: 'sw3',
    title: 'Midterm Seatwork #3',
    description: 'Student Age Analyzer',
    category: 'seatwork',
    tagColor: 'bg-cyan-400',
    tagLabel: 'SW3',
  },
  {
    id: 'quiz1',
    title: 'Midterm Quiz #1',
    description: 'Questions, answers, and explanations',
    category: 'quizzes',
    tagColor: 'bg-indigo-500',
    tagLabel: 'QUIZ1',
  },
  {
    id: 'quiz2',
    title: 'Midterm Quiz #2',
    description: 'Questions, answers, and explanations',
    category: 'quizzes',
    tagColor: 'bg-indigo-500',
    tagLabel: 'QUIZ2',
  },
  {
    id: 'exam1',
    title: 'Midterm Exam',
    description: 'Reflection on Midterm Examination',
    category: 'assignment',
    tagColor: 'bg-emerald-500',
    tagLabel: 'EXAM',
  },
];

export default function Midterm() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('activities');

  const activitiesRef = useRef<HTMLDivElement>(null);
  const seatworkRef = useRef<HTMLDivElement>(null);
  const quizzesRef = useRef<HTMLDivElement>(null);
  const assignmentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      activities: activitiesRef,
      seatwork: seatworkRef,
      quizzes: quizzesRef,
      assignment: assignmentRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      const offset = 100;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveTab(section);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: activitiesRef, name: 'activities' },
        { ref: seatworkRef, name: 'seatwork' },
        { ref: quizzesRef, name: 'quizzes' },
        { ref: assignmentRef, name: 'assignment' },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-6 lg:px-8 py-12 relative">
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 mb-8">
        <h1 className="text-5xl mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Midterm Portfolio
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50" />
      </div>

      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 -mx-6 px-6 lg:-mx-8 lg:px-8 mb-12 shadow-lg shadow-primary/5">
        <div className="flex gap-2 overflow-x-auto py-4">
          {[
            { id: 'activities', label: 'Activities' },
            { id: 'seatwork', label: 'Seatwork' },
            { id: 'quizzes', label: 'Quizzes' },
            { id: 'assignment', label: 'Exam' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-6 py-2 rounded-lg transition-all whitespace-nowrap relative ${
                activeTab === tab.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <Section
        ref={activitiesRef}
        title="Activities"
        subtitle="Interactive Java programs demonstrating practical OOP applications. Click to expand and see code implementations and explanations."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems
            .filter((item) => item.category === 'activities')
            .map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
        </div>
      </Section>

      <Section
        ref={seatworkRef}
        title="Seatwork"
        subtitle="In-class exercises focusing on code analysis and system implementation."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems
            .filter((item) => item.category === 'seatwork')
            .map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
        </div>
      </Section>

      <Section
        ref={quizzesRef}
        title="Quizzes"
        subtitle="Assessment results with detailed explanations and problem-solving approaches."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems
            .filter((item) => item.category === 'quizzes')
            .map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
        </div>
      </Section>

      <Section
        ref={assignmentRef}
        title="Exam"
        subtitle="Reflection on the Midterm Examination experience and learnings."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems
            .filter((item) => item.category === 'assignment')
            .map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
        </div>
      </Section>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ title, subtitle, children }, ref) => {
    return (
      <div ref={ref} className="mb-16 scroll-mt-32">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-mono">{title}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        <p className="text-muted-foreground mb-8">{subtitle}</p>
        {children}
      </div>
    );
  }
);

Section.displayName = 'Section';

function PortfolioCard({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg shadow-primary/10 hover:shadow-primary/30 hover:border-primary/50 hover:scale-105 transition-all relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div
        className={`absolute top-4 left-4 px-3 py-1 rounded-lg ${item.tagColor} text-white text-xs font-mono shadow-lg`}
      >
        {item.tagLabel}
      </div>

      <div className="relative mt-8 mb-4">
        <h3 className="text-xl mb-2 font-mono">{item.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>

      <div className="flex items-center justify-end text-primary">
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
}

function Modal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const content = midtermContent[item.id] || {};
  const isSeatwork1 = item.id === 'sw1';
  const isSeatwork2or3 = item.id === 'sw2' || item.id === 'sw3';
  const isQuiz = item.category === 'quizzes';
  const isExam = item.id === 'exam1';
  const isActivity = item.category === 'activities';

  const showPDF = !!content.pdfUrl;
  const showCode = !!content.code;
  const showReflection = true;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border border-primary/30 rounded-3xl shadow-2xl shadow-primary/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/50 bg-card/95 backdrop-blur-xl shadow-lg shadow-primary/10">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-lg ${item.tagColor} text-white text-xs font-mono shadow-lg`}>
              {item.tagLabel}
            </div>
            <h2 className="text-2xl font-mono">{item.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative p-6 space-y-6">
          {showPDF && (
            <div className="p-6 rounded-2xl bg-muted/20 border border-border/30 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="text-lg">PDF Document</h3>
              </div>
              <div className="rounded-xl overflow-hidden border border-border/30 bg-background/50 h-[700px]">
                <PDFViewer url={content.pdfUrl!} title={item.title} />
              </div>
            </div>
          )}

          {showCode && (
            <div className="p-6 rounded-2xl bg-muted/20 border border-border/30 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg">Code Implementation</h3>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30 font-mono text-sm shadow-inner overflow-auto max-h-[500px]">
                <pre className="text-muted-foreground whitespace-pre-wrap">
                  {content.code}
                </pre>
              </div>
            </div>
          )}

          {showReflection && (
            <div className="p-6 rounded-2xl bg-muted/20 border border-border/30 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-lg">Explanation / Reflection</h3>
              </div>
              <textarea
                placeholder="Share your reflections and explanations..."
                className="w-full min-h-[150px] p-4 rounded-xl bg-background/50 border border-border/30 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/10"
                defaultValue={content.reflection || ''}
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
