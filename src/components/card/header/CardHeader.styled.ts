import styled from "styled-components";

type ImageProps = {
  alt: string;
  src: string;
};

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px 12px;
`;

export const HeaderImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const HeaderImage = styled.img<ImageProps>`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
`;

export const ProfileFeednameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  height: 24px;
`;
export const ProfileVerifiedBadge = styled.div`
  min-width: 15px;
  min-height: 15px;
  align-self: flex-start;
  margin-top: 4px !important;
  margin-left: 5px;
  position: relative;
`;
export const ProfileVerifiedBadgeImage = styled.img<ImageProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
`;

export const ProfileFeedname = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $text-primary;
`;
export const ProfileLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;
export const ProfileLink = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 14px;
  color: $text-tertiary;
  margin-bottom: 0;
  letter-spacing: -0.24px;
  width: 100%;
  font-style: normal;

  @media (min-width: 676px) {
    width: 50%;
  }
`;

export const PostTimestampActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  height: 24px;
  margin-top: 3px;

  a {
    text-decoration: none;
  }

`;

export const PostActions = styled.div`
  &:hover {
    cursor: grab;
  }
`;

export const PostTimestamp = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.078px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: $text-tertiary;
  position: relative;
`;
export const BtnIconImg = styled.img<ImageProps>`
  padding-top: 1px;
  margin-right: 0;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
