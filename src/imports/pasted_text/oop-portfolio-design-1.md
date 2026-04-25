Design a multi-page personal e-portfolio website for a computer science student showcasing their Object-Oriented Programming (OOP) coursework. The design must be production-ready, visually polished, and suitable for submission as an academic requirement.

GLOBAL DESIGN SYSTEM
Color Palette — Dark theme: use a near-black base (#0A0A0F or #0D0D1A), deep blue accents (#1E3A5F, #2563EB, #3B82F6), white/off-white for text (#F0F4FF, #CBD5E1), and subtle cyan highlights (#67E8F9) for interactive elements. Use layered shadows (box-shadow with blue tint), glassmorphism panels (frosted glass effect with backdrop-filter blur), and soft glowing halos behind key elements to create depth. Apply a subtle dot-grid or noise texture overlay on the background for atmosphere.
Typography — Pair a bold geometric display font (e.g., Space Grotesk Bold or Syne) for headings with a clean monospace font (e.g., JetBrains Mono or Fira Code) for code-related labels and tags, and a readable sans-serif (e.g., DM Sans) for body text.
Layout Philosophy — Use a Bento Box grid system throughout. Cards and sections are modular, rounded (border-radius: 16–24px), with varying sizes — some cards span 2 columns, some are tall, some are compact — creating a dynamic asymmetric grid feel. Apply consistent inner padding (24–32px), visible card borders with low-opacity blue (rgba(59, 130, 246, 0.2)), and a glowing hover state on all interactive cards.
Components to include globally: top navigation bar with logo/name on the left and nav links (Home, Midterm, Finals, Contact) on the right with an active underline indicator; smooth hover states on all buttons and links; animated transitions between sections.

PAGE 1 — HOME
Hero section in bento-box style, clean and professional. Left bento card (large, 2-col span): greeting text "Hi, I am" in small caps, full name in large bold display font, course title "Object-Oriented Programming" as a glowing blue badge, and school/section details below. Include two CTA buttons side by side — a solid blue "View Portfolio" button and an outlined "Download CV" button. Add a row of 3 smaller stat cards below (e.g., "Course: BSIT", "Year: 2nd Year", "Term: Midterm") styled like the inspiration's experience/project/client counter cards. Right bento card: a circular profile photo placeholder with a blue glow ring around it, positioned on a dark card with subtle noise texture. Below the hero, add a short "About Me" bento card spanning full width where the student can type a brief introduction. All cards should have a soft blue inner glow on the edges to emphasize depth.

PAGE 2 — MIDTERM
Section header: "Midterm Portfolio" in large display font with a blue underline accent.
Divide this page into four distinct sub-sections, each clearly labeled with a section divider — a full-width row with the category name on the left in bold monospace font and a thin blue horizontal line extending to the right. All sub-sections live on the same scrollable page, stacked vertically.
Each sub-section uses a bento grid gallery layout where each item is a clickable card. Cards should have: a colored tag badge in the top-left corner, the title in bold monospace font, a one-line description in small body text, and a subtle arrow icon in the bottom-right. When a card is clicked, trigger a modal/overlay popup that expands with: the full title, a screenshot upload placeholder, a code block area, an "Explanation" text area, and a "Learnings" text area. The modal should have a frosted glass background with a blue-tinted overlay.

Sub-section 1 — Activities (tag badge color: Blue — #3B82F6)
Grid of activity cards, slightly larger bento size. Include:

Midterm Activity #1 — Variables
Midterm Activity #2 — Operators
Midterm Activity #3 — Simple Wallet System
Midterm Activity #4 — Grade Evaluation System
Midterm Activity #5 — Personal Expense Tracker


Sub-section 2 — Seatwork (tag badge color: Cyan — #67E8F9)
Grid of seatwork cards, medium bento size. Include:

Midterm Seatwork #1 — Code Tracking (Arithmetic, Logical, and Binary Operations)
Midterm Seatwork #2 — Basic ATM System
Midterm Seatwork #3 — Student Age Analyzer


Sub-section 3 — Quizzes (tag badge color: Indigo — #6366F1)
Grid of quiz cards, compact bento size. Include:

Midterm Quiz #1
Midterm Quiz #2


Sub-section 4 — Assignment (tag badge color: Emerald — #10B981)
Single card, medium bento size. Include:

Midterm Assignment #1 — Introduction to Java


Each sub-section should have visible breathing room (generous vertical spacing of 48–64px) between it and the next, so the page feels organized and easy to scan. Add a subtle sticky tab bar just below the main section header with four tabs — "Activities", "Seatwork", "Quizzes", "Assignment" — that smooth-scrolls to the corresponding sub-section when clicked. The active tab should have a blue underline and brighter text.

PAGE 3 — FINALS
Display a single large centered bento card with a "🔒 Coming Soon" icon, the heading "Finals Portfolio", and a subtext: "This section will be updated once the Final Term is completed. Check back soon." Style the card with a dimmed, desaturated look compared to the rest of the site — slightly lower opacity, a dashed border instead of solid, and a lock or hourglass icon with a soft blue glow. Add a small animated pulse on the icon to draw subtle attention.

PAGE 4 — CONTACT
Use a catalog/grid card layout inspired by the reference image. Left side: a large bento card containing the heading "Get In Touch", subtext about reaching out for collaboration or inquiries, and a contact form with fields for Name, Email, and Message, plus a solid blue Submit button. Right side: a vertical stack of smaller bento cards — one for email address, one for social media links (GitHub, LinkedIn, Facebook), and one for school/section info. Each info card has an icon on the left and the detail on the right. Apply the same glassmorphism card style throughout.

FUNCTIONAL ELEMENTS TO INCLUDE
Navigation bar fixed at the top with logo, nav links, and an active state highlight. All nav items should be clickable with hover color change to blue. "View Portfolio" and CTA buttons should have hover animations (slight scale-up + glow). Portfolio grid cards should have hover states (lift shadow + glowing border). Modal/popup overlays for Midterm cards triggered on click. A back-to-top floating button in the bottom-right corner. Smooth scroll behavior between sections. Responsive layout consideration with mobile breakpoints suggested.

STYLE SUMMARY
Dark background, blue and white accents, glassmorphism panels, bento box grid layout, monospace code aesthetic, glowing shadows for depth, clean and professional overall feel with a modern tech student identity.

I want to revise some details and parts of my portfolio 

On Home Page 
- I want to change the menu part to be a Hamburger Menu 
- Insert my name as "Dean Benedict B Gomez" and make sure that the size is appropriate and responsive 
- Change the "Download CV" and make it "View CV" and they can view my CV, via Modal View. I will upload my CV here

- Include this in the "About Me" part, add another paragraph stating this "Aspiring to be Information Technology Specialist, Cybersecurity Expert, and DevOps Engineer. Currently studying at Polytechnic University of the Philippines and affiliated to different Organization" 
- Add, this picture on the Right side part 

- Create a list of my Affiliated Organization such as 
1) Chief of Finance in AcademiTech Research and Knowledge (ARK) 
2) Directory for Non-Academics Affairs in PUP - Association of DOST Scholars 
3) Member of Google Developer Groups on Campus PUP
4) Member of AWS Cloud Club PUP 

On the Midterm Section 
- For the Midterm Activities, remove the Learnings Part 
- On Midterm Seatwork #1, remove the Screenshot, Code Implementation, Learning , and just keep the Explanation
- On Midterm Seatwork #2 and #3, remove the learnings 
- On Midterm Quizzes, just keep the Explanation 
- Remove the "Midterm Assignment #1" and Change it to Midterm Exam, but it will only contains the reflection 

There's no need to change in Finals Section 

For Contact 
Insert the following 
Email: gdeanbenedict@gmail.com 
School: Polytechnic University of the Philippines 
Section: BSIT 2-1 

On Connect with me, hyperlink the following in their corresponding Logo 
LinkedIn: https://www.linkedin.com/in/dean-benedict-gomez-b27965322/
GitHub: https://github.com/AltTenor123
Facebook: https://www.facebook.com/dean.gomez.984/
Instagram: https://www.instagram.com/bene__data/ 