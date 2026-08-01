import { User, UserRole } from '../types/cms';

export async function getCurrentUser(): Promise<User | null> {
  // Milestone v0.1.0 mock abstraction - will connect to Supabase Auth in Phase 3
  return null;
}

export async function checkUserRole(): Promise<UserRole> {
  const user = await getCurrentUser();
  return user ? user.role : 'visitor';
}
