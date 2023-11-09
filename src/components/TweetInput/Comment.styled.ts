import styled from "styled-components";

type ImageProps = {
    alt: string;
    src: string;
  };

export const CardForm = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: white;
    margin: 20px 0;
`

export const InputCommentIcon = styled.img<ImageProps>`
    width: 24px;
    height: 24px;
    margin-left: 5px;
`

export const InputComment = styled.input`
    border: none;
    margin-left: 8px;
    outline: none;
    border: none;
    height: 100px
`