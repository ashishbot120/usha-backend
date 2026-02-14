const mongoose = require("mongoose");

const SiteContentSchema = new mongoose.Schema(
  {
    navbar: {
      links: [{ label: String, href: String }],
      ctaText: String,
    },

    hero: {
      headline: String,
      subline1: String,
      subline2: String,
      projectName: String,
      leftPriceTitle: String,
      leftPrice: String,
      leftPriceSub: String,
      rightPriceTitle: String,
      rightPrice: String,
      rightPriceSub: String,
      addressLine: String,
      enquiryBtnText: String,
    },

    aboutProject: {
      title: String,
      description: String,
      brochureBtnText: String,
    },

    amenities: {
      title: String,
      subtitle: String,
      items: [{ title: String, description: String }],
      viewMoreText: String,
    },

    exploreBuildings: {
      title: String,
      cards: [{ label: String }],
    },

    floorPlans: {
      title: String,
      tabs: [{ label: String }],
      selectedInfo: {
        typeLabel: String,
        areaLabel: String,
        priceLabel: String,
      },
      downloadBtnText: String,
      videoTitle: String,
    },

    developer: {
      title: String,
      description: String,
      stats: [{ value: String, label: String }],
    },

    constructionUpdates: {
      title: String,
      cards: [{ title: String, subtitle: String }],
    },

    faq: {
      title: String,
      items: [{ question: String, answer: String }],
    },

    footer: {
      contactTitle: String,
      contactLine: String,
      copyright: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SiteContent", SiteContentSchema);
