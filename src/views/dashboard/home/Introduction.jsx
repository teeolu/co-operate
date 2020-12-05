import React from "react";

import { IntroductionStyle } from "./style";
import { Grid, Typography, Card } from "../../../atoms";
import { colors } from "../../../theme";
import peopleIllustrator from "../../../assets/illustrators/undraw_everywhere_together_bdmn.svg";

export default function Introduction() {
  const whatWeDo = [
    {
      title: "  Joining our resources",
      description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
      odit laudantium, ratione quos sunt corrupti officiis rerum nulla
      ut totam...`
    },
    {
      title: "  Be formidable",
      description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
      odit laudantium, ratione quos sunt corrupti officiis rerum nulla
      ut totam...`
    },
    {
      title: "Strengthen eachother",
      description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
      odit laudantium, ratione quos sunt corrupti officiis rerum nulla
      ut totam...`
    }
  ];

  return (
    <IntroductionStyle className="introduction">
      <Typography
        component="h3"
        color={colors.green_primary}
        variant="semi-title"
      >
        Here's what we are up to...
      </Typography>
      <Grid
        variant="container"
        className="bvn-details-grid"
        style={{ alignItems: "center" }}
      >
        <Grid variant="item" className="grid-1">
          {whatWeDo.map((item, i) => (
            <div key={i} className="what-we-do">
              <Typography component="h4" variant="paragraph">
                {item.title}
              </Typography>
              <Typography component="p" variant="paragraph">
                {item.description}
              </Typography>
            </div>
          ))}
        </Grid>
        <Grid variant="item" className="grid-2">
          <Card className="illustration" noShadow>
            <img src={peopleIllustrator} alt="People illustrator" />
          </Card>
        </Grid>
      </Grid>
    </IntroductionStyle>
  );
}
