import React from "react";
import { useHistory } from "react-router-dom";

import {
  HomePageHeaderStyle,
  HomePageStyle,
  HomePageMainStyle,
  HomePageCommunityStyle,
  HomePageFooterStyle
} from "./styles";
import { Container } from "../../commonStyle";
import { Typography, Button } from "../../atoms";
import bankCreditData from "../../assets/bank_credit_comparison.png";
import communityImg1 from "../../assets/community_images/c_img_1.jpg";
import communityImg2 from "../../assets/community_images/c_img_2.jpg";
import communityImg3 from "../../assets/community_images/c_img_3.jpg";
import communityImg4 from "../../assets/community_images/c_img_4.jpg";
import communityImg6 from "../../assets/community_images/c_img_6.jpg";
import communityImg7 from "../../assets/community_images/c_img_7.jpg";
import { PUBLIC_PATHS } from "../../routes";

export default function HomePage(props) {
  const history = useHistory();
  return (
    <HomePageStyle>
      <HomePageHeaderStyle>
        <Container>
          <div className="homepage-nav">
            <div className="logo"></div>
          </div>
          <div className="header-content">
            <Typography component="h1" variant="title">
              It’s time to re-imagine credit
            </Typography>
          </div>
        </Container>
      </HomePageHeaderStyle>
      <Container>
        <HomePageMainStyle>
          <div className="card">
            <img src={bankCreditData} alt="Bank credit to private sector" />
            <caption>
              <Typography component="p" variant="caption">
                <a href="https://www.theglobaleconomy.com/compare-countries/">
                  Bank credit to the private sector as percent of GDP
                </a>
              </Typography>
            </caption>
          </div>
          <Typography component="p" variant="description" className="text">
            For that indicator, we provide data for Nigeria from 1960 to 2019.
            The average value for Nigeria during that period was 8.21 percent
            with a minimum of 3.7 percent in 1960 and a maximum of 19.6 percent
            in 2009. The latest value from 2019 is 10.43 percent. For
            comparison, the world average in 2019 based on 143 countries is
            55.98 percent. See the global rankings for that indicator or use the
            country comparator to compare trends over time.
          </Typography>

          <Typography
            component="h1"
            variant="title"
            style={{ textAlign: "center", lineHeight: 1.1 }}
          >
            Credits are expensive because you're not known, and if you are not
            known, you can't be trusted
          </Typography>
          <Typography component="p" variant="description" className="text">
            For that indicator, we provide data for Nigeria from 1960 to 2019.
            The average value for Nigeria during that period was 8.21 percent
            with a minimum of 3.7 percent in 1960 and a maximum of 19.6 percent
            in 2009. The latest value from 2019 is 10.43 percent. For
            comparison, the world average in 2019 based on 143 countries is
            55.98 percent. See the global rankings for that indicator or use the
            country comparator to compare trends over time.
            <br />
            <br />
            For that indicator, we provide data for Nigeria from 1960 to 2019.
            The average value for Nigeria during that period was 8.21 percent
            with a minimum of 3.7 percent in 1960 and a maximum of 19.6 percent
            in 2009. The latest value from 2019 is 10.43 percent. For
            comparison, the world average in 2019 based on 143 countries is
            55.98 percent. See the global rankings for that indicator or use the
            country comparator to compare trends over time.
          </Typography>
          <Typography
            component="h1"
            variant="title"
            style={{ textAlign: "center", lineHeight: 1.1 }}
          >
            Where to go? back to the base, communities!
          </Typography>
          <Typography component="p" variant="description" className="text">
            For that indicator, we provide data for Nigeria from 1960 to 2019.
            The average value for Nigeria during that period was 8.21 percent
            with a minimum of 3.7 percent in 1960 and a maximum of 19.6 percent
            in 2009. The latest value from 2019 is 10.43 percent. For
            comparison, the world average in 2019 based on 143 countries is
            55.98 percent. See the global rankings for that indicator or use the
            country comparator to compare trends over time.
          </Typography>
        </HomePageMainStyle>
      </Container>
      <HomePageCommunityStyle>
        <figure className="c-item c-item-1">
          <img src={communityImg1} alt="" className="c_img" />
        </figure>
        <figure className="c-item c-item-2">
          <img src={communityImg2} alt="" className="c_img" />
        </figure>
        <figure className="c-item c-item-3">
          <img src={communityImg3} alt="" className="c_img" />
        </figure>
        <figure className="c-item c-item-4">
          <img src={communityImg4} alt="" className="c_img" />
        </figure>
        <figure className="c-item c-item-6">
          <img src={communityImg6} alt="" className="c_img" />
        </figure>
        <figure className="c-item c-item-7">
          <img src={communityImg7} alt="" className="c_img" />
        </figure>
      </HomePageCommunityStyle>
      <Container style={{ height: "100vh" }}>
        <HomePageFooterStyle>
          <div style={{ flex: 1 }}>
            <Typography
              component="h1"
              variant="title"
              style={{ lineHeight: 1.1 }}
            >
              Been known starts with joining our community
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "4rem"
              }}
            >
              <Button
                style={{ fontWeight: "bold" }}
                hideArrow
                onClick={() => history.push(PUBLIC_PATHS.SIGNUP)}
              >
                Start been known
              </Button>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div className="logo"></div>
            </div>
            <Typography component="p" variant="description">
              Be known
            </Typography>
          </div>
        </HomePageFooterStyle>
      </Container>
    </HomePageStyle>
  );
}
