import postPhoto from '@/assets/img/post_media_photo.jpg';

import {
    CardTextWrapper,
    CardText,
    CardMedia,
    MediaContainer,
    MediaContainerPreview,
    Img
  } from "./CardContent.styled";

export function CardContent({text}: {text: string}){
    return (
        <>
            <CardTextWrapper>
                    <CardText>
                        {text}
                    </CardText>
            </CardTextWrapper>

                {/* media */}
                <CardMedia role="presentation">
                    <MediaContainer>
                        <MediaContainerPreview>
                            <Img src={postPhoto} alt="Post photo of a cat" />
                        </MediaContainerPreview>
                    </MediaContainer>
                </CardMedia>
        </>
    )
}