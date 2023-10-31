import styled from "styled-components";

type CardMediaProps = {
  role: string;
};

type ImageProps = {
  alt: string;
  src: string;
};

export const CardTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap
`;

export const CardText = styled.span`
  text-align: left;
  white-space: pre-wrap;
  line-height: 1.4;
  padding: 0 16px;
  width: 100%;
  font-size: 16px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $text-primary;
  font-weight: 400;
  padding-bottom: 0;
`;

export const CardMedia = styled.div<CardMediaProps>`
`

export const MediaContainer = styled.div`
  margin: 14px 0;
`

export const MediaContainerPreview = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  margin: 0px;
  cursor: pointer;
  max-height: 500px;
  min-height: auto;
`

export const Img = styled.img<ImageProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
`