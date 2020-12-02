import React, { useState } from "react";

import { Typography, Grid, Card, Button } from "../../../atoms";
import { HomeStyle } from "./style";
import OptionCard from "../../../components/OptionsCard";
import CompleteSubscriptionModal from "../../../modals/CompleteSubscriptionModal";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = [
    {
      amount: 500,
      name: "beginner",
      description: ""
    },
    {
      amount: 1500,
      name: "beginner",
      description: ""
    },
    {
      amount: 5000,
      name: "beginner",
      description: ""
    },
    {
      amount: 10000,
      name: "beginner",
      description: ""
    },
    {
      amount: 25000,
      name: "beginner",
      description: ""
    },
    {
      amount: 50000,
      name: "beginner",
      description: ""
    },
    {
      amount: 100000,
      name: "beginner",
      description: ""
    },
    {
      amount: 250000,
      name: "beginner",
      description: ""
    }
  ];

  function handleSelectPlan(plan) {
    setSelectedPlan(plan);
  }

  function renderHoverBox(plan) {
    return (
      <Card className="select-plan-box">
        <Button
          variant="tertiary"
          curved
          hideArrow
          onClick={() => handleSelectPlan(plan)}
        >
          select plan
        </Button>
      </Card>
    );
  }

  return (
    <HomeStyle>
      <Typography component="h1" variant="title">
        Welcome Olusola
      </Typography>
      <Card noShadow>
        <Typography component="h4" variant="paragraph">
          Here's what to do next, select a plan
        </Typography>
        <Typography component="p" variant="paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit
          laudantium, ratione quos sunt corrupti officiis rerum nulla iusto.
        </Typography>
        <Grid
          style={{ marginTop: "4rem" }}
          repeat={3}
          variant="container"
          spacing="3rem"
        >
          {plans.map((plan, i) => {
            return (
              <Grid>
                <OptionCard
                  className="plans"
                  key={i}
                  amount={plan.amount}
                  description={plan.description}
                  name="Per month"
                  renderProps={renderHoverBox}
                />
              </Grid>
            );
          })}
          <Grid>
            <Card noShadow style={{ background: "transparent" }} align="center">
              <Button variant="secondary" hideArrow>
                <Typography variant="title" className="expand">
                  &#8594;
                </Typography>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Card>
      {Boolean(selectedPlan) && (
        <CompleteSubscriptionModal
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />
      )}
    </HomeStyle>
  );
}
