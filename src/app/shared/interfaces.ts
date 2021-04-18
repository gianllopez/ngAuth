export interface FormControlErrors {
  required?: string;
  minlength?: string;
  maxlength?: string;
  email?: string;
  username?: string;
};

export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
};

export interface RESTponse {
  user: {
    username: string;
    email: string;
  },
  status: string
};
