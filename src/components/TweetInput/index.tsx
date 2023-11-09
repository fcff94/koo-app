import { CardForm, InputComment, InputCommentIcon } from "./Comment.styled";
import commentInputIcon from "@/assets/img/comment_input_icon.svg";

export type TypeNewTweet = {
  tweet: string;
  setTweet(tweet: string): void;
};

export function TweetInput({ tweet, setTweet }: TypeNewTweet) {
  return (
    <>
      {/* field comment */}
      <CardForm>
        <InputCommentIcon src={commentInputIcon} alt="" />
        <InputComment
          value={tweet}
          onChange={(event) => setTweet(event.target.value)}
          placeholder="What's in your mind?"
          type="text"
        />
      </CardForm>
    </>
  );
}
