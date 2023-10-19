import { useState } from 'react';
import styles from '@/components/card/footer/CardFooter.module.scss';
import { Comment } from './components/Comment';
import { Buttons } from './components/Buttons';

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
                <Comment />

                {/* actions */}
                <Buttons />
            </div>
        </>
    )
}