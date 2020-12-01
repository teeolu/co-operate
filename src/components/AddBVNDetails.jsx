import React, { useState } from "react";

import { Container, FormField } from "../commonStyle";
import { AddBVNDetailsStyle } from "./styles";
import { Grid, Typography, Input, Button, Card } from "../atoms";
import { colors } from "../theme";
import { regexPatterns, errorMessages } from "../utils/formUtils";

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
      <Container>
        <Grid variant="container" style={{ alignItems: "center" }}>
          <Grid variant="item" className="grid">
            <Typography
              component="h1"
              color={colors.green_primary}
              variant="title"
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
                iusto. Sunt amet fugiat rem, sapiente eaque minima quis corporis
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
                />
                <Button type="submit">Add BVN</Button>
              </FormField>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </AddBVNDetailsStyle>
  );
}
