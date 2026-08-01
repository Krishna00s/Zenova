\# Technology Stack



\## Purpose



This document explains the technologies used to build Zenova and why they were chosen.



Technology should always support the long-term vision of the platform.



Every decision should prioritize:



\- Reliability

\- Maintainability

\- Security

\- Scalability

\- Performance

\- Developer Experience



Zenova should be built on technologies that are widely adopted, well documented and easy to maintain.



During the early stages of the project, every technology should provide a generous free tier whenever possible.



The goal is to build a production-ready platform without unnecessary costs.



\---



\# Frontend



The public website and dashboard will be built using React.



React provides a component-based architecture that allows us to reuse interfaces across the entire platform.



Reasons:



\- Mature ecosystem

\- Excellent developer experience

\- Component reusability

\- Large community

\- Long-term stability



\---



\## Build Tool



Vite will be used as the development environment.



Reasons:



\- Extremely fast development server

\- Fast builds

\- Simple configuration

\- Excellent React support



\---



\## Styling



Tailwind CSS will be used for styling.



Reasons:



\- Consistent design system

\- Utility-first workflow

\- Easy maintenance

\- Responsive development

\- Small production bundle



The design language defined inside Design\_Language.md always takes priority over utility usage.



\---



\## Routing



React Router will handle navigation.



The application should behave like a modern single-page application while maintaining intuitive URLs.



Examples:



/



about



services/web-development



services/video-editing



services/ad-creation



services/paid-promotions



contact



login



dashboard



portal



\---



\## Animations



GSAP will power interface animations.



Animations should never exist purely for decoration.



Every animation should improve storytelling, navigation or user understanding.



Examples:



\- Hero animations

\- Scroll storytelling

\- Section transitions

\- Card reveals

\- Text reveals

\- Image movement



Animations should always feel calm and intentional.



\---



\# Backend



The backend will expose secure APIs used by the public website, dashboard and client portal.



Responsibilities include:



\- Authentication

\- Authorization

\- Project Management

\- Content Management

\- File Uploads

\- Contact Forms

\- Client Portal

\- User Management



The frontend should never communicate directly with the database.



\---



\# Database



PostgreSQL will serve as the primary database.



Reasons:



\- Reliability

\- Scalability

\- Strong relational model

\- Excellent tooling

\- Industry standard



\---



\# Database ORM



Prisma will manage database access.



Reasons:



\- Type safety

\- Easy migrations

\- Excellent developer experience

\- Clean database queries



\---



\# Authentication



Supabase Authentication will manage user login.



Reasons:



\- Secure authentication

\- Email/password support

\- Session management

\- Free tier

\- Easy integration



Authentication should support multiple user roles.



\---



\# File Storage



Supabase Storage will store uploaded files.



Examples:



\- Images

\- Videos

\- PDFs

\- Client Assets

\- Logos



Files should never be stored directly inside the project repository.



\---



\# Deployment



Frontend:



Vercel



Backend:



A free cloud hosting provider that supports Node.js applications.



Database:



Supabase PostgreSQL



The deployment architecture should allow migration to paid infrastructure without changing the application architecture.



\---



\# User Roles



The platform supports four roles.



Visitor



Public access only.



Client



Access only to their own projects and resources.



Team Member



Can manage assigned projects and platform content.



Administrator



Full access to the platform.



Permissions should always follow the principle of least privilege.



\---



\# Security



Security is part of the architecture from the beginning.



The platform should include:



\- Secure Authentication

\- Password Hashing

\- Protected Routes

\- Role Based Access Control

\- Input Validation

\- Secure File Uploads

\- Environment Variables

\- HTTPS

\- Rate Limiting

\- Session Management

\- Audit Logs



Security should never be treated as a feature added later.



\---



\# Content Management



The platform should behave like its own CMS.



Projects, testimonials, blogs and services should all be managed from the dashboard.



Adding new work should never require editing React components.



Publishing new content should automatically update the public website.



\---



\# Performance



Performance is part of the user experience.



The platform should prioritize:



\- Lazy loading

\- Code splitting

\- Image optimization

\- Responsive media

\- Optimized animations

\- Efficient API requests

\- Accessibility



Fast experiences create trust.



\---



\# Future Ready



The architecture should support future expansion without major rewrites.



Possible future additions include:



\- Blog

\- Careers

\- CRM

\- Analytics

\- Knowledge Base

\- Proposal Generator

\- Contracts

\- Invoicing

\- Team Calendar

\- Internal Notes



Technology decisions made today should make future development easier rather than more difficult.



\---



\# Final Principle



Technology should never define Zenova.



Technology is simply the foundation that allows thoughtful ideas, honest design and meaningful experiences to exist.



Visitors may never know what powers the platform.



That means we've built it correctly.

