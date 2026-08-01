import React from 'react';
import { Section } from '../../../components/ui/Section';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { SERVICE_ACCENTS } from '../../../constants/theme';

export const AdCreationPage: React.FC = () => {
  const meta = SERVICE_ACCENTS.adCreation;

  return (
    <main className="pt-24">
      <Section tone="primary" spacing="generous">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="lavender">{meta.label}</Badge>
            <h1 className="text-4xl md:text-6xl font-editorial font-bold text-near-black leading-tight">
              Ad Creation & Distribution
            </h1>
            <p className="text-lg md:text-xl text-neutral-slate max-w-2xl leading-relaxed">
              Visually compelling ad collateral and motion campaign creative designed for genuine audience engagement.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default AdCreationPage;
