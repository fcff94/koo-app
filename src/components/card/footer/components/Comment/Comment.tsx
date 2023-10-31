
import { CardForm, InputComment, InputCommentIcon } from './Comment.styled'
import commentInputIcon from '@/assets/img/comment_input_icon.svg'

export function Comment() {
    return (
        <>
                {/* field comment */}
                <CardForm>
                    <InputCommentIcon src={commentInputIcon} alt="" />
                    <InputComment  placeholder="Write your comment" type="text" />
                </CardForm>
        </>
    )
}