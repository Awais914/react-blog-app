export interface User {
    name: string;
    username: string;
    email: string;
}
export interface AuthInput {
  email: string;
  password: string;
}

export interface SignUpData {
  signUp: {
    user: User;
    token: string | null;
    message: string | null;
  }
}

export interface LoggedInData {
  signIn: {
    user: User;
    token: string | null;
  };
}

export interface CreatePostInput {
  title: string;
  description: string;
  readTime: string | undefined;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  time: string;
  imgUrl: string;
  user?: User;
  createdAt: Date;
}

export interface PostData {
  createPost: {
    message: string;
    status: number;
    post: Post;
  };
}

export interface PaginationInput {
  page: number;
  limit: number;
}

export interface PostsListType {
  allPosts: {
    message: string;
    status: number;
    posts: Post[];
    total: number;
    page: number;
    limit: number;
  }
}
