export interface User {
  id: number;
  email: string;
}

interface UserStateI {
  userMessage: string;
  user: User | null;
  userError: boolean;
  userLoading: boolean;
}
