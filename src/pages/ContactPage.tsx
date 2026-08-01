import React from 'react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';

export const ContactPage: React.FC = () => {
  return (
    <main className="pt-24">
      <Section tone="secondary" spacing="generous">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge variant="violet">Start a Conversation</Badge>
            <h1 className="text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Let's build something together.
            </h1>
            <p className="text-base md:text-lg text-neutral-slate leading-relaxed">
              Tell us about your project, timeline, and vision. We will follow up within 24 hours.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};
