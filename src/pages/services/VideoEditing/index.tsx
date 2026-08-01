import React from 'react';
import { Section } from '../../../components/ui/Section';
import { Container } from '../../../components/ui/Container';
import { Badge } from '../../../components/ui/Badge';
import { SERVICE_ACCENTS } from '../../../constants/theme';

export const VideoEditingPage: React.FC = () => {
  const meta = SERVICE_ACCENTS.videoEditing;

  return (
    <main className="pt-24">
      <Section tone="secondary" spacing="generous">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="violet">{meta.label}</Badge>
            <h1 className="text-4xl md:text-6xl font-editorial font-bold text-near-black leading-tight">
              Video Editing & Post-Production
            </h1>
            <p className="text-lg md:text-xl text-neutral-slate max-w-2xl leading-relaxed">
              Brand documentary films, product showcases, and editorial video content edited with meticulous pacing and rhythm.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default VideoEditingPage;
