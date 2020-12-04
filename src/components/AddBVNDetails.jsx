import React, { useState } from "react";

import { FormField } from "../commonStyle";
import { AddBVNDetailsStyle } from "./styles";
import { Grid, Typography, Input, Button, Card } from "../atoms";
import { colors } from "../theme";
import { errorMessages } from "../utils/formUtils";
import LinearLoader from "../atoms/LinearLoader";

export default function AddBVNDetails() {
  const [form, setForm] = useState({});

  function handleInputChange(name, value) {
    setForm(state => ({ ...state, [name]: value }));
  }

  function handleSubmitBVN(event) {
    event.preventDefault();
  }

  return (
    <AddBVNDetailsStyle>
      <LinearLoader isLoading={false} />
      <Grid variant="container" style={{ alignItems: "center" }}>
        <Grid variant="item" className="grid">
          <Typography
            component="h1"
            color={colors.green_primary}
            variant="sub-title"
          >
            Add your BVN...
          </Typography>
          <div>
            <Typography component="h4" variant="paragraph">
              Here's why we need your BVN
            </Typography>
            <Typography component="p" variant="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              odit laudantium, ratione quos sunt corrupti officiis rerum nulla
              ut totam...
            </Typography>
            <Button className="readmore-btn" variant="secondary">
              Read more
            </Button>
          </div>
        </Grid>
        <Grid variant="item">
          <Card className="bvn-form" noShadow>
            <FormField onSubmit={handleSubmitBVN}>
              <Input
                onInputChange={handleInputChange}
                name="bvn"
                required
                // pattern={regexPatterns.bvn}
                maxLength={11}
                minLength={11}
                errorMessage={errorMessages.bvn}
                autoFocus
                placeHolder="Add your BVN here..."
              />
              <Button
                style={{ background: colors.green_secondary }}
                type="submit"
              >
                Add BVN
              </Button>
            </FormField>
          </Card>
        </Grid>
      </Grid>
    </AddBVNDetailsStyle>
  );
}
