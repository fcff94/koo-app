import styles from './Card.module.scss';
import { CardHeader } from '@/components/card/header/CardHeader';
import { CardContent } from '@/components/card/content/CardContent';
import { CardFooter } from '@/components/card/footer/CardFooter';

export function CardComponent({
  userImg,
  displayName,
  userName,
  date,
  text,
}: {
  userImg: string;
  displayName: string;
  userName: string;
  date: string;
  text: string;
}) {
  return (
    <>
      <div className={styles.card_wrapper}>
        <CardHeader
          userImg={userImg}
          displayName={displayName}
          username={userName}
          date={date}
        />

        {/* text */}
        <CardContent text={text} />

        {/* Footer */}
        <CardFooter />
      </div>
    </>
  );
}
