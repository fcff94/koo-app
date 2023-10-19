import styles from './Card.module.scss';
import profilePhoto from '../../assets/img/profile_photo.jpeg';
import verifiedBadge from '../../assets/img/verified_badge.png';
import followIcon from '../../assets/img/follow.svg';
import moreOptionsIcon from '../../assets/img/options.svg';
import postPhoto from '../../assets/img/post_media_photo.jpg';

export function CardComponent() {
    return (
        <>
            <div className={styles.card_wrapper}>
                <div className={styles.card_header}>
                    <div className={styles.profile_details_wrapper}>
                        <div className={styles.profile_photo}>
                            <img src={profilePhoto} alt="User profile photo" />
                        </div>
                        <div className={styles.profile_details}>
                            <div className={styles.profile_feedname_wrapper}>
                                <h3 className={styles.profile_feedname}>Koo English</h3>
                                <div className={styles.profile_verified_badge}>
                                    <img src={verifiedBadge} alt="Verified user badge" />
                                </div>
                            </div>
                            <div className={styles.profile_link_wrapper}>
                                <div className={styles.profile_link}>@kooenglish</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.post_timestamp_actions}>
                        <a href="" className={styles.post_timestamp_link}>
                            <div className={styles.post_timestamp}>
                                19 Feb 2021
                            </div>
                        </a>

                        <div className={styles.post_actions}>
                            <button className={styles.btn_icon}>
                                <img src={followIcon} className={styles.btn_icon_img} alt="Follow button" />
                            </button>
                            <button className={styles.btn_icon}>
                                <img src={moreOptionsIcon} className={styles.btn_icon_img} alt="More options menu button" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.card_text_wrapper}>
                    <span className={styles.card_text}>
                        <p>Welcome to the Koo family 🙂</p>
                        <p>1. Follow people you like by clicking on the '+ Follow' button to see their posts in your feed.</p>
                        <p>2. Share your thoughts with others and gain a following.</p>
                        <p>Happy Koo to you!</p>
                    </span>
                </div>

                <div className={styles.card_media} role="presentation">
                    <div className={styles.media_container}>
                        <div className={styles.media_container_preview}>
                            <img src={postPhoto} alt="Post photo of a cat" />
                        </div>
                    </div>
                </div>

                <div className="card_form">

                </div>

                <div className="card_actions">

                </div>
            </div>
        </>
    );
}