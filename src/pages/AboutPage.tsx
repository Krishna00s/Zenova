import React from 'react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';

export const AboutPage: React.FC = () => {
  return (
    <main className="pt-24">
      <Section tone="secondary" spacing="generous">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge variant="violet">About Zenova</Badge>
            <h1 className="text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Built on trust, clarity, and craftsmanship.
            </h1>
            <p className="text-base md:text-lg text-neutral-slate leading-relaxed">
              We believe good work is not defined by how complicated it looks or how loud it advertises itself. Good work is remembered because it solves real problems with clarity and care.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};
