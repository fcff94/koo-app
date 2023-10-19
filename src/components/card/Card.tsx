import styles from './Card.module.scss';
import {CardHeader} from './CardHeader';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';

export function CardComponent() {
    return (
        <>
            <div className={styles.card_wrapper}>

                <CardHeader />
                
                {/* text */}
                <CardContent />

               {/* Footer */}
               <CardFooter/>
            </div>
        </>
    );
}