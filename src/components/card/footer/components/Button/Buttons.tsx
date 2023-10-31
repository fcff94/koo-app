import { useState } from 'react';
import likeIcon from '@/assets/img/like.svg'
import commentIcon from '@/assets/img/comment.svg'
import retweetIcon from '@/assets/img/retweet.svg'
import whatsappIcon from '@/assets/img/whatsapp.svg'
import shareIcon from '@/assets/img/share.svg'
import { ActionLabel, ButtonLabelCount, CardActions } from './Button.styled';

export function Buttons() {

    const [likeCount, setLikesCounter] = useState(0)
    const [commentCount, setCommentCounter] = useState(0)
    const [retweetCount, setRetweetCounter] = useState(0)

    function addLikeCount() {
        setLikesCounter((prev) => prev + 1)
    }

    function addCommentCount() {
        setCommentCounter((prev) => prev + 1)
    }

    function addRetweetCount() {
        setRetweetCounter((prev) => prev + 1)
    }

    return (
        <>
            {/* actions */}
            <CardActions>
                <ActionLabel>
                    <button onClick={() => addLikeCount()} className='btn_icon'>
                        <img src={likeIcon} alt="like icon" />
                    </button>
                    <ButtonLabelCount>{likeCount}</ButtonLabelCount>
                </ActionLabel>

                <ActionLabel>
                    <button onClick={() => addCommentCount()} className='btn_icon'>
                        <img src={commentIcon} alt="comment icon" />
                    </button>
                    <ButtonLabelCount>{commentCount}</ButtonLabelCount>
                </ActionLabel>

                <ActionLabel>
                    <button onClick={() => addRetweetCount()} className='btn_icon'>
                        <img src={retweetIcon} alt="retweet icon" />
                    </button>
                    <ButtonLabelCount>{retweetCount}</ButtonLabelCount>
                </ActionLabel>

                <ActionLabel>
                    <button className='btn_icon'>
                        <img src={whatsappIcon} alt="whatsapp icon" />
                    </button>
                </ActionLabel>

                <ActionLabel>
                    <button  className='btn_icon'>
                        <img src={shareIcon} alt="share icon" />
                    </button>
                </ActionLabel>
            </CardActions>
        </>
    )
}