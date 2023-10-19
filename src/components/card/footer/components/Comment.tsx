
import styles from './CardFooter.module.scss';
import commentInputIcon from '../../assets/img/comment_input_icon.svg'

export function Comment() {
    return (
        <>
            <div className={styles.card_footer}>
                {/* field comment */}
                <div className={styles.card_form}>
                    <img alt="" className={styles.input_comment_icon} src={commentInputIcon} />
                    <input className={styles.input_comment} placeholder="Write your comment" type="text" />
                </div>
            </div>
        </>
    )
}