import { useState } from 'react';
import styles from './CardFooter.module.scss';
import likeIcon from '../../assets/img/like.svg'
import commentIcon from '../../assets/img/comment.svg'
import retweetIcon from '../../assets/img/retweet.svg'
import whatsappIcon from '../../assets/img/whatsapp.svg'
import shareIcon from '../../assets/img/share.svg'
import commentInputIcon from '../../assets/img/comment_input_icon.svg'

export function CardFooter() {

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
            <div className={styles.card_footer}>
                {/* field comment */}
                <div className={styles.card_form}>
                    <img alt="" className={styles.input_comment_icon} src={commentInputIcon} />
                    <input className={styles.input_comment} placeholder="Write your comment" type="text" />
                </div>

                {/* actions */}
                <div className={styles.card_actions}>
                    <div className={styles.action_label}>
                        <button onClick={() => addLikeCount()} className='btn_icon'>
                            <img src={likeIcon} alt="like icon" />
                        </button>
                        <span className={styles.btn_label_count}>{likeCount}</span>
                    </div>

                    <div className={styles.action_label}>
                        <button onClick={() => addCommentCount()} className='btn_icon'>
                            <img src={commentIcon} alt="comment icon" />
                        </button>
                        <span className={styles.btn_label_count}>{commentCount}</span>
                    </div>

                    <div className={styles.action_label}>
                        <button onClick={() => addRetweetCount()} className='btn_icon'>
                            <img src={retweetIcon} alt="retweet icon" />
                        </button>
                        <span className={styles.btn_label_count}>{retweetCount}</span>
                    </div>

                    <div className={styles.action_label}>
                        <button className='btn_icon'>
                            <img src={whatsappIcon} alt="whatsapp icon" />
                        </button>
                    </div>

                    <div className={styles.action_label}>
                        <button  className='btn_icon'>
                            <img src={shareIcon} alt="share icon" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}