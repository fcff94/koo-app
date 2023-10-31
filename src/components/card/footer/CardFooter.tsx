import { Comment } from "./components/Comment/Comment"
import { Buttons } from "./components/Button/Buttons"
import { CardFooterWrapper } from "./CardFooter.styled"

export function CardFooter() {

    return (
        <>
            <CardFooterWrapper>
                {/* field comment */}
                <Comment />

                {/* actions */}
                <Buttons />
            </CardFooterWrapper>
        </>
    )
}