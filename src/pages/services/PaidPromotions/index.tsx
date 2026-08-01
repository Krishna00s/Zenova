import React from 'react';
import { Section } from '../../../components/ui/Section';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { SERVICE_ACCENTS } from '../../../constants/theme';

export const PaidPromotionsPage: React.FC = () => {
  const meta = SERVICE_ACCENTS.paidPromotions;

  return (
    <main className="pt-24">
      <Section tone="secondary" spacing="generous">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="violet">{meta.label}</Badge>
            <h1 className="text-4xl md:text-6xl font-editorial font-bold text-near-black leading-tight">
              Paid Promotions & Strategic Growth
            </h1>
            <p className="text-lg md:text-xl text-neutral-slate max-w-2xl leading-relaxed">
              Targeted digital campaign management built around empirical conversion data and long-term return on investment.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default PaidPromotionsPage;
