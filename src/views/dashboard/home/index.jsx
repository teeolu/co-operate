import React, { useState } from "react";

import { Typography, Grid, Card, Button } from "../../../atoms";
import { HomeStyle } from "./style";
import OptionCard from "../../../components/OptionsCard";
import CompleteSubscriptionModal from "../../../modals/CompleteSubscriptionModal";
import AddBVNDetails from "../../../components/AddBVNDetails";
import { colors } from "../../../theme";
import Introduction from "./Introduction";

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
        <Introduction />
        <AddBVNDetails />
        <div className="select-plans">
          <Typography
            component="h3"
            color={colors.green_primary}
            variant="semi-title"
          >
            Here's what to do next, select a plan...
          </Typography>
          <Typography component="p" variant="paragraph">
            Any option you select is a good one to start. You can always
            increase it with increase in capacity...
          </Typography>
          <Grid
            style={{ marginTop: "4rem" }}
            repeat={3}
            variant="container"
            spacing="3rem"
            className="plans-options-grid"
          >
            {plans.map((plan, i) => {
              return (
                <Grid key={i}>
                  <OptionCard
                    className="plans"
                    amount={plan.amount}
                    description={plan.description}
                    name="Per month"
                    renderProps={renderHoverBox}
                  />
                </Grid>
              );
            })}
            <Grid>
              <Card
                noShadow
                style={{ background: "transparent" }}
                align="center"
              >
                <Button variant="secondary" hideArrow>
                  <Typography variant="title" className="expand">
                    &#8594;
                  </Typography>
                </Button>
              </Card>
            </Grid>
          </Grid>
        </div>
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
