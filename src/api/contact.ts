import { ContactSubmission } from '../types/cms';

export interface SubmitContactPayload {
  fullName: string;
  email: string;
  company?: string;
  serviceInterest: string;
  budgetRange?: string;
  message: string;
}

export async function submitContactInquiry(payload: SubmitContactPayload): Promise<{ success: boolean; data?: ContactSubmission; error?: string }> {
  // Milestone v0.1.0 mock submission - will save to Supabase contact_submissions in Phase 3
  const submission: ContactSubmission = {
    id: `sub-${Date.now()}`,
    ...payload,
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: submission,
  };
}
