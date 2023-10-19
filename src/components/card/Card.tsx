import styles from './Card.module.scss';
import {CardHeader} from '@/components/card/header/CardHeader';
import { CardContent } from '@/components/card/content/CardContent';
import { CardFooter } from '@/components/card/footer/CardFooter';

export function CardComponent() {
    return (
        <>
            <div className={styles.card_wrapper}>

                <CardHeader />
                
                {/* text */}
                <CardContent />

               {/* Footer */}
               <CardFooter />
            </div>
        </>
    );
}