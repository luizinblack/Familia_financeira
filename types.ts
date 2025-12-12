export enum UserRole {
  SYSTEM_ADMIN = 'SYSTEM_ADMIN', // Dono do Software
  ADMIN = 'ADMIN', // Chefe da Família
  MEMBER = 'MEMBER' // Membro da Família
}

export type UserPlan = 'free' | 'premium';

export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string; // New field
  password?: string;
  avatar: string;
  role: UserRole;
  plan: UserPlan; // New field for subscription
}

export enum ExpenseCategory {
  MERCADO = 'Mercado',
  LAZER = 'Lazer',
  CONTAS_FIXAS = 'Contas Fixas',
  TRANSPORTE = 'Transporte',
  SAUDE = 'Saúde',
  EDUCACAO = 'Educação',
  INVESTIMENTOS = 'Investimentos',
  OUTROS = 'Outros'
}

export type ExpenseStatus = 'paid' | 'pending' | 'cancelled';

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  description: string;
  location: string;
  category: ExpenseCategory;
  date: string; // ISO String YYYY-MM-DD
  status: ExpenseStatus; // Changed from boolean 'paid'
  notes?: string;
  attachmentName?: string;
  attachmentData?: string; // Base64 for demo purposes
}

export interface FilterState {
  search: string;
  category: string;
  userId: string;
  startDate: string;
  endDate: string;
}

export interface Budget {
  category: ExpenseCategory;
  limit: number;
}