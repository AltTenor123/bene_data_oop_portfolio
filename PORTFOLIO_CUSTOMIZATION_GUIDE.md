# OOP E-Portfolio Customization Guide

Welcome to your Object-Oriented Programming E-Portfolio! This guide will help you customize the portfolio with your personal information and coursework.

## Quick Start Customization

### 1. Update Your Personal Information

**Home Page (`src/app/pages/Home.tsx`)**

Replace the following placeholders:
- Line 24: `Your Name` → Your actual name
- Line 33: `BSIT Student | Your School Name | Section` → Your course, school, and section
- Lines 56-58: Update the stat cards with your actual information

**Contact Page (`src/app/pages/Contact.tsx`)**

- Line 87: `your.email@example.com` → Your email address
- Lines 96-100: Update school name and section
- Lines 111-113: Add your actual social media links (GitHub, LinkedIn, Facebook)

### 2. Add Your Profile Photo

**Home Page (`src/app/pages/Home.tsx`)**

Replace the placeholder icon (lines 52-57) with your actual photo:

```tsx
<div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 flex items-center justify-center overflow-hidden">
  <img 
    src="/path/to/your/photo.jpg" 
    alt="Your Name"
    className="w-full h-full object-cover"
  />
</div>
```

### 3. Customize the About Me Section

**Home Page (`src/app/pages/Home.tsx`)**

Lines 68-72: Replace the default text with your own introduction, highlighting your interests, goals, and what you've learned in OOP.

### 4. Add Your Midterm Work

**Midterm Page (`src/app/pages/Midterm.tsx`)**

For each portfolio item in the modal:

1. **Upload Screenshots**: Replace the placeholder (lines 198-205) with your actual code screenshots
2. **Add Code**: Replace the example code (lines 213-221) with your actual Java implementation
3. **Write Explanations**: Fill in the explanation textarea (lines 224-232) with details about:
   - What the program does
   - The problem it solves
   - Your approach to implementation
4. **Document Learnings**: Fill in the learnings textarea (lines 236-244) with:
   - What you learned from the activity
   - Challenges you faced
   - How you overcame them

### 5. Change Color Scheme (Optional)

**Theme File (`src/styles/theme.css`)**

The current theme uses blue accents. To change colors:

- Line 4: `--background` → Main background color
- Line 8: `--primary` → Primary accent color (currently blue #3B82F6)
- Line 10: `--secondary` → Secondary color
- Line 14: `--accent` → Accent color for gradients

**Activity Tag Colors (`src/app/pages/Midterm.tsx`)**

Lines 18-72: Each category has a `tagColor` property:
- Activities: `bg-blue-500`
- Seatwork: `bg-cyan-400`
- Quizzes: `bg-indigo-500`
- Assignment: `bg-emerald-500`

## Navigation Structure

The portfolio has 4 main pages:

1. **Home** (`/`) - Introduction and overview
2. **Midterm** (`/midterm`) - All midterm coursework organized by category
3. **Finals** (`/finals`) - Placeholder for final term work
4. **Contact** (`/contact`) - Contact form and information

## Adding Screenshots

To upload screenshots for your activities:

1. Save your screenshots in the `public/screenshots/` folder (create if needed)
2. Reference them in the modal component:
   ```tsx
   <img 
     src="/screenshots/activity1-screenshot.png" 
     alt="Activity 1" 
     className="w-full rounded-lg"
   />
   ```

## Tips for a Great Portfolio

1. **Use Clear Screenshots**: Capture both your code and output
2. **Write Detailed Explanations**: Show that you understand the concepts
3. **Be Honest About Learnings**: Include both successes and challenges
4. **Keep It Professional**: Use proper grammar and formatting
5. **Update Regularly**: Add new work as you complete it

## Submission Checklist

Before submitting:

- [ ] Personal information updated (name, school, section)
- [ ] Profile photo added (optional but recommended)
- [ ] All midterm activities documented with:
  - [ ] Screenshots
  - [ ] Code implementations
  - [ ] Explanations
  - [ ] Learnings
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] All navigation links function properly
- [ ] Reviewed for spelling and grammar

## Need Help?

If you encounter issues:

1. Check that all file paths are correct
2. Ensure images are in the correct format (PNG, JPG)
3. Verify that all required fields are filled
4. Test navigation between pages

Good luck with your OOP portfolio!
