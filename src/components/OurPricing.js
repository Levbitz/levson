import React from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/Navigationbar/light.js";
//import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Pricing from "components/pricing/ThreePlans";

import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import Footer from "components/footers/FiveColumnDark";
import FAQstns from "./FAQstns";

function OurPricing() {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial heading="Our Paying Customers" />
      <FAQstns />
      <Footer />
    </AnimationRevealPage>
  );
}

export default OurPricing;
