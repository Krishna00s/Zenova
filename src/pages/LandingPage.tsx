import React from 'react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { ArrowUpRight } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Foundation Hero Placeholder */}
      <Section tone="primary" spacing="generous">
        <Container>
          <div className="max-w-4xl space-y-6">
            <Badge variant="lavender">Version 0.1.0 Platform Architecture</Badge>
            <h1 className="text-4xl md:text-6xl font-editorial font-bold tracking-tight text-near-black leading-[1.1]">
              We build digital experiences that people genuinely enjoy using.
            </h1>
            <p className="text-lg md:text-xl text-neutral-slate max-w-2xl leading-relaxed">
              Zenova combines web engineering, post-production video editing, ad creation, and strategic growth campaigns into one calm, connected platform.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link to={ROUTES.SERVICES.WEB_DEV}>
                <Button variant="primary" size="lg" className="gap-2">
                  Explore Capabilities <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to={ROUTES.CONTACT}>
                <Button variant="outline" size="lg">
                  Talk with Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};
