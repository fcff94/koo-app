import styles from "@/components/card/header/CardHeader.module.scss";
import verifiedBadge from "@/assets/img/verified_badge.png";
import followIcon from "@/assets/img/follow.svg";
import moreOptionsIcon from "@/assets/img/options.svg";

import {
  ProfileLinkWrapper,
  ProfileLink,
  BtnIconImg,
  PostActions,
  PostTimestampActions,
  PostTimestamp,
  HeaderWrapper,
  HeaderImageWrapper,
  HeaderImage,
  ProfileDetails,
  ProfileFeednameWrapper,
  ProfileFeedname,
  ProfileVerifiedBadge,
  ProfileVerifiedBadgeImage,
} from "./CardHeader.styled";

export function CardHeader({
  userImg,
  displayName,
  username,
  date,
}: {
  userImg: string;
  displayName: string;
  username: string;
  date: string;
}) {
  return (
    <>
      <HeaderWrapper>
        <HeaderImageWrapper>
          <div>
            <HeaderImage src={userImg} alt="User profile photo" />
          </div>
          <ProfileDetails>
            <ProfileFeednameWrapper>
              <ProfileFeedname>
                {displayName}
              </ProfileFeedname>
              <ProfileVerifiedBadge>
                <ProfileVerifiedBadgeImage
                  src={verifiedBadge}
                  alt="Verified user badge"
                />
              </ProfileVerifiedBadge>
            </ProfileFeednameWrapper>
            <ProfileLinkWrapper>
              <ProfileLink>
                {username}
              </ProfileLink>
            </ProfileLinkWrapper>
          </ProfileDetails>
        </HeaderImageWrapper>

        <PostTimestampActions>
          <a href="">
            <PostTimestamp>
              {date}
            </PostTimestamp>
          </a>

          <PostActions>
            <button className="btn_icon">
              <BtnIconImg
                src={followIcon}
                alt="Follow button"
              />
            </button>
            <button className="btn_icon">
              <BtnIconImg
                src={moreOptionsIcon}
                alt="More options menu button"
              />
            </button>
          </PostActions>
        </PostTimestampActions>
      </HeaderWrapper>
    </>
  );
}
