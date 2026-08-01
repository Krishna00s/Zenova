import React from 'react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';

export const WorkPage: React.FC = () => {
  return (
    <main className="pt-24">
      <Section tone="primary" spacing="generous">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge variant="lavender">Portfolio Archive</Badge>
            <h1 className="text-4xl md:text-5xl font-editorial font-bold text-near-black">
              Selected Work & Case Studies
            </h1>
            <p className="text-base md:text-lg text-neutral-slate leading-relaxed">
              Explore our showcase of web platforms, editorial video edits, and digital product designs.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};
