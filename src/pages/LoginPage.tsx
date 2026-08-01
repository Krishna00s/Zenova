import React from 'react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';

export const LoginPage: React.FC = () => {
  return (
    <main className="pt-24">
      <Section tone="primary" spacing="generous">
        <Container size="small">
          <div className="space-y-6 text-center max-w-md mx-auto">
            <Badge variant="lavender">Client & Admin Portal</Badge>
            <h1 className="text-3xl md:text-4xl font-editorial font-bold text-near-black">
              Welcome to Zenova Workspace
            </h1>
            <p className="text-sm text-neutral-slate">
              Access your project milestones, shared deliverables, and real-time status.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};
