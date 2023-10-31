import styled from "styled-components";

type ImageProps = {
    alt: string;
    src: string;
  };

export const CardForm = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    margin: 16px 16px 0;
    border: 1px solid;
`

export const InputCommentIcon = styled.image<ImageProps>`
    width: 24px;
    height: 24px;
    margin-left: 5px;
`
export const InputComment = styled.input`
    border: none;
    margin-left: 8px;
`