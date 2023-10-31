import styles from '@/components/card/content/CardContent.module.scss';
import postPhoto from '@/assets/img/post_media_photo.jpg';

export function CardContent({text}: {text: string}){
    return (
        <>
            <div className={styles.card_text_wrapper}>
                    <span className={styles.card_text}>
                        {text}
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