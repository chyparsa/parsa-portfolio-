# Personal Portfolio Website

## Project Overview

This project is a personal portfolio website created completely from scratch using HTML, CSS, and JavaScript. The website represents me professionally, introduces my background, highlights my technical skills and experience, displays selected projects, and provides ways for employers and professional contacts to connect with me.

The live website will be hosted using GitHub Pages.

---

# Part 1: Content

## 1. What is your full name as you want it displayed professionally?

Parsa Chy.

## 2. What is the purpose of your portfolio website?

The purpose of my portfolio is to create a professional online presence that presents my background, skills, experience, and projects in one organized location. It will support my search for internships and entry-level software engineering opportunities.

## 3. Who is the target audience?

The primary target audience is recruiters, hiring managers, software engineers, internship coordinators, professors, classmates, and professional contacts.

## 4. What skills do you want to highlight?

I want to highlight Java, JavaScript, HTML, CSS, C, object-oriented programming, data structures, algorithms, operating systems, debugging, Git, GitHub, VS Code, technical support, documentation, communication, and problem solving.

## 5. What projects or work will you showcase?

I will showcase a Student Grade Manager, a CPU Scheduling Simulator, and this personal portfolio website. I can add more projects in the future as I complete them.

## 6. How will you describe yourself in a short professional bio?

I am a Computer Science student at Queens College with experience in Java, web development, data structures, operating systems, and IT support. I enjoy solving problems, understanding how systems work, and creating useful and accessible software.

## 7. What pages will your site include?

The website uses a single-page layout with the following sections: Home, About, Skills, Projects, Experience, and Contact.

## 8. What is your career goal or desired role?

My career goal is to become a software engineer. I am currently interested in software engineering internships and entry-level roles that will allow me to improve my technical skills and contribute to meaningful products.

## 9. What technologies or tools do you have experience with?

Java, JavaScript, C, HTML5, CSS3, Git, GitHub, GitHub Pages, VS Code, browser developer tools, Windows, and macOS.

## 10. What achievements or experiences are worth highlighting?

I am a Computer Science student at Queens College, a College Assistant at the Queens College IT Help Desk, and a former participant in Google Computer Science Summer Institute.

## 11. What call-to-action should visitors take?

Visitors should view my projects, review my resume, connect with me on LinkedIn or GitHub, and contact me about internships or professional opportunities.

## 12. Will you include a resume? In what format?

Yes. I will include a downloadable PDF resume in the `assets` folder.

## 13. What social or professional links will you include?

GitHub, LinkedIn, and a downloadable resume link. The sample links in the project should be replaced with my real profile links before final submission.

---

# Part 2: Design

## 1. What overall style will best represent you?

A modern, minimalist, and professional style best represents me. The design focuses on readability, organization, and clear presentation of information.

## 2. What color scheme will you use and why?

The site uses a light neutral background, dark text, white cards, and purple accent colors. Purple adds personality while still looking professional. The dark text and light background provide strong contrast and readability.

## 3. What fonts will you use?

Playfair Display is used for major headings to create visual interest. Inter is used for body text, navigation, buttons, and smaller headings because it is clear and highly readable.

## 4. How will your design reflect your personality or field?

The clean layout reflects the structured and problem-solving nature of computer science. The purple accent color adds a creative element without distracting from the content.

## 5. What layout will your homepage follow?

The homepage begins with a two-column hero section containing an introduction, call-to-action buttons, social links, and a quick profile card. The remaining sections flow vertically.

## 6. How will you organize project sections visually?

Projects are displayed in responsive cards. Each card includes a project number, title, description, technology tags, and GitHub link.

## 7. Will the site be mobile-friendly?

Yes. CSS media queries change multi-column layouts into single-column layouts, resize typography, and display a mobile navigation menu. Flexible widths and responsive spacing help the site work on phones, tablets, and desktop screens.

## 8. What visual hierarchy will guide visitors?

Large page headings, section labels, clear spacing, card layouts, accent colors, and prominent call-to-action buttons guide visitors from the introduction to skills, projects, experience, and contact information.

## 9. How will consistency be maintained across pages?

Consistency is maintained through reusable CSS variables, repeated card styles, consistent typography, spacing, border radius, button styles, and section layouts.

## 10. How will accessibility be considered?

The website includes semantic HTML, a skip link, descriptive labels, keyboard-accessible navigation, visible focus styles, strong color contrast, readable font sizes, form labels, live status messages, reduced-motion support, and responsive layouts.

## 11. Will you use icons, images, or illustrations?

The design uses a text-based avatar instead of relying on an external image. This keeps the project lightweight and avoids decorative images that do not improve the content. Images can be added later with meaningful alternative text.

## 12. What portfolio websites inspired your design?

The design was inspired by modern software developer portfolios that use clean typography, card-based project layouts, generous spacing, and one-page navigation. General inspiration came from Awwwards, Behance, and developer portfolio examples on GitHub.

External inspiration resources:

- https://www.awwwards.com/
- https://www.behance.net/
- https://github.com/topics/portfolio-website

---

# Part 3: Interactivity

## 1. What interactive elements will your site include?

The site includes a mobile navigation menu, smooth scrolling, buttons, project links, professional profile links, an animated scroll reveal effect, a contact form, form validation, and a back-to-top link.

## 2. Will your site include a contact form? How will it work?

Yes. The contact form accepts a name, email address, and message. JavaScript validates the fields and displays clear feedback. Because GitHub Pages is static, a real submission service such as Formspree can be connected later.

## 3. What JavaScript features will you implement?

JavaScript controls the responsive navigation menu, automatically updates the copyright year, reveals content while scrolling, validates the contact form, and displays success or error feedback.

## 4. How will users receive feedback from interactions?

The navigation button changes its accessible label and expanded state. Form fields display error messages when information is missing or invalid. A live status message tells users whether the form passed validation.

## 5. How does interactivity improve the user experience?

The interactive features make the site easier to navigate on mobile devices, provide immediate form feedback, create a more polished presentation, and help visitors understand the result of their actions.

---

# Information Organization

1. Home introduces my professional identity and main goals.
2. About provides a professional biography.
3. Skills organizes technical and professional strengths.
4. Projects displays selected work.
5. Experience highlights work and educational experiences.
6. Contact gives visitors a clear next step.

---

# Visual Design and Wireframe

## Desktop Wireframe

```text
+--------------------------------------------------------------+
| Logo                     About Skills Projects Experience    |
+--------------------------------------------------------------+
| Professional title         | Quick Profile Card              |
| Name and introduction      | Location                        |
| View Projects / Contact    | Education                       |
| GitHub LinkedIn Resume     | Career Focus                    |
+--------------------------------------------------------------+
| About Me                    | Biography                       |
+--------------------------------------------------------------+
|                         Skills Cards                         |
+--------------------------------------------------------------+
|                       Project Cards                          |
+--------------------------------------------------------------+
|                     Experience Timeline                      |
+--------------------------------------------------------------+
| Contact Introduction       | Contact Form                    |
+--------------------------------------------------------------+
| Footer                                                       |
+--------------------------------------------------------------+
```

## Mobile Wireframe

```text
+---------------------------+
| Logo          Menu Button |
+---------------------------+
| Professional title        |
| Name and introduction     |
| Buttons and links         |
+---------------------------+
| Quick Profile Card        |
+---------------------------+
| About                     |
+---------------------------+
| Skill Card                |
| Skill Card                |
+---------------------------+
| Project Card              |
| Project Card              |
+---------------------------+
| Experience                |
+---------------------------+
| Contact Form              |
+---------------------------+
| Footer                    |
+---------------------------+
```

---

# Technical Overview

- HTML5 provides semantic structure.
- CSS3 provides layout, typography, responsive behavior, transitions, and accessibility support.
- JavaScript provides navigation behavior, scroll animations, dynamic year display, and form validation.
- Git is used for version control.
- GitHub stores the repository.
- GitHub Pages hosts the live website.

---

# Project Timeline and Milestones

| Milestone | Tasks | Status |
|---|---|---|
| Planning | Answer project questions and define content | Complete |
| Wireframe | Create desktop and mobile layouts | Complete |
| HTML | Build semantic page structure | Complete |
| CSS | Add visual design and responsiveness | Complete |
| JavaScript | Add navigation, animation, and validation | Complete |
| Testing | Test on desktop and mobile widths | Complete |
| Personalization | Replace links and add real resume | To do |
| Deployment | Publish using GitHub Pages | To do |

---

# File Structure

```text
parsa-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── resume.pdf
```

---

# How to Run the Website

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension.

---

# How to Publish with GitHub Pages

1. Create a new public GitHub repository.
2. Upload all project files or push them using Git.
3. Open the repository settings.
4. Select **Pages** from the sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/root` folder.
7. Save the settings.
8. Wait for GitHub to provide the live website URL.

---

# Customization Before Submission

- Replace the example GitHub and LinkedIn links with real profile links.
- Add a real PDF resume as `assets/resume.pdf`.
- Replace project links with real repository URLs.
- Review all text for accuracy.
- Test the site on desktop and mobile screens.

---

## Accessibility and Motion Update

The final design includes semantic HTML landmarks, a keyboard-accessible navigation menu, a skip link, visible focus indicators, descriptive labels, accessible error messages, an `aria-live` form status, sufficient text contrast, responsive typography, and support for Windows forced-colors mode.

The decorative butterfly is hidden from assistive technology with `aria-hidden="true"`. Visitors who enable **Reduce Motion** in their operating system will not see the butterfly or automatic marquee animation. A **Pause motion** control in the footer also lets visitors stop animations manually.

The contact form validates fields accessibly, moves keyboard focus to the first error, and prepares a message in the visitor's email application instead of pretending to submit data to a server.
