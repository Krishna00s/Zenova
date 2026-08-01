import React from 'react';
import { Section } from '../../../components/ui/Section';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { SERVICE_ACCENTS } from '../../../constants/theme';

export const WebDevelopmentPage: React.FC = () => {
  const meta = SERVICE_ACCENTS.webDevelopment;

  return (
    <main className="pt-24">
      <Section tone="primary" spacing="generous">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="violet">{meta.label}</Badge>
            <h1 className="text-4xl md:text-6xl font-editorial font-bold text-near-black leading-tight">
              Web Engineering & Digital Architecture
            </h1>
            <p className="text-lg md:text-xl text-neutral-slate max-w-2xl leading-relaxed">
              We design and engineer bespoke web platforms built with extreme precision, fast response times, and calm editorial aesthetics.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default WebDevelopmentPage;
