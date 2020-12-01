import React from "react";

import { Typography, Modal } from "../atoms";
import { formatCurrency } from "../utils/currency";

export default function CompleteSubscriptionModal({
  selectedPlan,
  setSelectedPlan
}) {
  return (
    <Modal
      title="Complete subscription..."
      yesText="Continue"
      noText="Cancel"
      isLoading={true}
      yesAction={() => null}
      noAction={() => setSelectedPlan(null)}
      onClose={() => setSelectedPlan(null)}
    >
      <Typography variant="sub-title" component="h6">
        {formatCurrency(selectedPlan.amount)}
      </Typography>
      <Typography variant="paragraph" component="p">
        {selectedPlan.description ||
          `
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro odit
          laudantium, ratione quos sunt corrupti officiis rerum nulla iusto.`}
      </Typography>
    </Modal>
  );
}
