import styles from '@/components/card/header/CardHeader.module.scss';
import verifiedBadge from '@/assets/img/verified_badge.png';
import followIcon from '@/assets/img/follow.svg';
import moreOptionsIcon from '@/assets/img/options.svg';

export function CardHeader({userImg, displayName, username, date}: {userImg: string, displayName: string, username: string, date: string}){
    return (
        <>
            <div className={styles.card_header}>
                    <div className={styles.profile_details_wrapper}>
                        <div className={styles.profile_photo}>
                            <img src={userImg} alt="User profile photo" />
                        </div>
                        <div className={styles.profile_details}>
                            <div className={styles.profile_feedname_wrapper}>
                                <h3 className={styles.profile_feedname}>{displayName}</h3>
                                <div className={styles.profile_verified_badge}>
                                    <img src={verifiedBadge} alt="Verified user badge" />
                                </div>
                            </div>
                            <div className={styles.profile_link_wrapper}>
                                <div className={styles.profile_link}>{username}</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.post_timestamp_actions}>
                        <a href="" className={styles.post_timestamp_link}>
                            <div className={styles.post_timestamp}>
                                {date}
                            </div>
                        </a>

                        <div className={styles.post_actions}>
                            <button className='btn_icon'>
                                <img src={followIcon} className={styles.btn_icon_img} alt="Follow button" />
                            </button>
                            <button className='btn_icon'>
                                <img src={moreOptionsIcon} className={styles.btn_icon_img} alt="More options menu button" />
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}