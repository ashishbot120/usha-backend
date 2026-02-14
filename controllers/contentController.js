const SiteContent = require("../models/SiteContent");

// GET /api/content
async function getContent(req, res) {
  let doc = await SiteContent.findOne();

  // If empty DB, seed default content once
  if (!doc) {
    doc = await SiteContent.create({
      navbar: {
        links: [
          { label: "Home", href: "#home" },
          { label: "Overview", href: "#overview" },
          { label: "Connectivity", href: "#connectivity" },
          { label: "Amenities", href: "#amenities" },
          { label: "Floor Plans", href: "#floorplans" },
          { label: "Developer", href: "#developer" },
          { label: "Contact", href: "#contact" },
        ],
        ctaText: "Enquiry Now",
      },
      hero: {
        headline: "THINKING OF A FANTASTIC VICINITY?",
        subline1: "20+ PREMIUM LUXURIOUS AMENITIES",
        subline2: "SPACIOUS BALCONY HOMES",
        projectName: "VIGNHARATA INFINITY",
        leftPriceTitle: "SMART 1 BHK",
        leftPrice: "₹ 69.99 Lacs*",
        leftPriceSub: "onwards",
        rightPriceTitle: "PREMIUM 2 BHK",
        rightPrice: "₹ 96.99 Lacs*",
        rightPriceSub: "onwards",
        addressLine: "Bldg. No. 232/224, Circle, Kanamwar Nagar, Vikhroli (East)",
        enquiryBtnText: "Enquiry Now",
      },
      aboutProject: {
        title: "About Project",
        description:
          "At Vignharata Enclave, every detail reflects the grander gesture of the most authentic and desirable home. Guided by a humane approach, the architecture places people at the heart of the space.",
        brochureBtnText: "Download Brochure",
      },
      amenities: {
        title: "Amenities",
        subtitle:
          "Thoughtfully crafted surroundings that reflect tradition, comfort and human-centered design approach.",
        items: [
          { title: "Gymnasium", description: "" },
          { title: "Kids Play Area", description: "" },
          { title: "Jogging Track", description: "" },
          { title: "Yoga Deck", description: "" },
        ],
        viewMoreText: "View more",
      },
      exploreBuildings: {
        title: "Explore More Buildings in the Township",
        cards: [
          { label: "Newly Launched - Vignharata Enclave" },
          { label: "Newly Launched - Vignharata Aaradhya" },
          { label: "Newly Launched - Vignharata..." },
        ],
      },
      floorPlans: {
        title: "Floor Plans",
        tabs: [{ label: "1 BHK" }, { label: "2 BHK" }, { label: "5.6 BHK" }],
        selectedInfo: {
          typeLabel: "Type - 1BHK",
          areaLabel: "Area - 380-411 R.C Sq.ft",
          priceLabel: "Price - Click for price",
        },
        downloadBtnText: "Download Floor Plan",
        videoTitle: "Project Video",
      },
      developer: {
        title: "About Developer",
        description:
          "Vignharata Developers is a name built on trust, timely delivery and customer satisfaction.",
        stats: [
          { value: "6", label: "Projects" },
          { value: "1.32 LAC", label: "Sq.ft Delivered" },
          { value: "449+", label: "Happy Families" },
          { value: "3.77 LAC", label: "Sq.ft Ongoing" },
          { value: "2.7 LAC", label: "Sq.ft Upcoming" },
        ],
      },
      constructionUpdates: {
        title: "Construction Updates",
        cards: [
          { title: "Tower Construction", subtitle: "View More" },
          { title: "Completion", subtitle: "View More" },
          { title: "Completed", subtitle: "View More" },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What makes this project special?",
            answer: "It combines premium amenities, smart layouts, and a prime location.",
          },
          {
            question: "Is brochure available?",
            answer: "Yes, you can download the brochure from the About Project section.",
          },
        ],
      },
      footer: {
        contactTitle: "Contact",
        contactLine: "For enquiries, call or email us.",
        copyright: "© 2026 Real Estate Project",
      },
    });
  }

  res.json(doc);
}

module.exports = { getContent };
