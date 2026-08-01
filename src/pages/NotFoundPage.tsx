import React from 'react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="pt-24">
      <Section tone="primary" spacing="generous">
        <Container size="small">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-editorial font-bold text-deep-violet">404</h1>
            <h2 className="text-2xl font-editorial text-near-black">Page Not Found</h2>
            <p className="text-sm text-neutral-slate">
              The chapter or resource you are looking for has moved or does not exist.
            </p>
            <div>
              <Link to={ROUTES.HOME}>
                <Button variant="primary">Return Home</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};
