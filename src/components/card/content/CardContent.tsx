import styles from '@/components/card/content/CardContent.module.scss';
import postPhoto from '@/assets/img/post_media_photo.jpg';

export function CardContent(){
    return (
        <>
            <div className={styles.card_text_wrapper}>
                    <span className={styles.card_text}>
                        <p>Welcome to the Koo family 🙂</p>
                        <p>1. Follow people you like by clicking on the '+ Follow' button to see their posts in your feed.</p>
                        <p>2. Share your thoughts with others and gain a following.</p>
                        <p>Happy Koo to you!</p>
                    </span>
                </div>

                {/* media */}
                <div className={styles.card_media} role="presentation">
                    <div className={styles.media_container}>
                        <div className={styles.media_container_preview}>
                            <img src={postPhoto} alt="Post photo of a cat" />
                        </div>
                    </div>
                </div>
        </>
    )
}