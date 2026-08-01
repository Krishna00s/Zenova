import React from 'react';
import { HeroChapter } from './LandingPage/chapters/HeroChapter';
import { CapabilitiesChapter } from './LandingPage/chapters/CapabilitiesChapter';
import { ProudWorkChapter } from './LandingPage/chapters/ProudWorkChapter';
import { WorkingTogetherChapter } from './LandingPage/chapters/WorkingTogetherChapter';
import { HumanTrustChapter } from './LandingPage/chapters/HumanTrustChapter';
import { ContactChapter } from './LandingPage/chapters/ContactChapter';

export const LandingPage: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* Chapter 1: Hero Experience */}
      <HeroChapter />

      {/* Chapter 2: Capabilities Invitations */}
      <CapabilitiesChapter />

      {/* Chapter 3: The Work Speaks First */}
      <ProudWorkChapter />

      {/* Chapter 4: Working Together Should Feel Simple */}
      <WorkingTogetherChapter />

      {/* Chapter 5: Human Trust & Values */}
      <HumanTrustChapter />

      {/* Chapter 6: Let's Make It Real */}
      <ContactChapter />
    </main>
  );
};

export default LandingPage;
