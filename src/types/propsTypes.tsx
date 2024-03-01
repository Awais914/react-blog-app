import { Comment } from "types";

export interface AddCommentProps {
  postId: number;
  type: "COMMENT" | "REPLY";
}

export interface RepliesProps extends Comment {
  display: boolean;
}