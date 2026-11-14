// All of the site's text lives here. Edit this file to change what the
// homepage and About page say. The project grid is in data/projects.js.

export const site = {
  name: "Joyce Lin",
  firstName: "Joyce",
  email: "joycelin.collaborate@gmail.com",
  linkedin: "https://www.linkedin.com/in/joyceyhlin",
  description:
    "Joyce Lin is a community developer, researcher and evaluator with more than a decade of non-profit experience, based in Richmond, BC.",

  // Homepage hero
  headline:
    "That’s me on the left with a mic, doing what I love. I work where research meets community: turning data and lived experience into knowledge that people and organizations can use for learning, decision-making, and planning. Over a decade in BC’s non-profit sector has taught me that good evidence starts with good relationships.",
  subheadline:
    "an experienced community development collaborator based in Richmond, BC.",

  // Shown under "Featured Work" on the homepage
  // Each inner list is shown on its own line.
  skills: [
    [
      "Public Engagement",
      "Knowledge Mobilization",
      "Program Design and Coordination",
    ],
    ["Community Engaged Research", "Evaluation"],
  ],
};

export const about = {
  tagline:
    "Collaborating with all neighbours to build our community’s shared future.",

  // Each item is one paragraph. A paragraph can be plain text, or a list of
  // pieces where { text, href } becomes a link.
  bio: [
    [
      "I am a community developer with more than a decade of experience in the non-profit sector, as well as an early-career researcher and evaluator. Most recently, I was the Research & Knowledge Mobilization Specialist at ",
      { text: "Vantage Point", href: "https://www.thevantagepoint.ca/" },
      ". In that role, I supported the BC Non-Profit Network to show the composition, economic significance, strengths, assets, and sustainability challenges of BC’s non-profit sector, using existing data and community-driven evidence. Community-engaged research ethics and principles are at the centre of my practice and how I manage projects. I value participatory processes, relationships, and different ways of knowing and seeing. You can get a sense of what I mean from my project ",
      {
        text: "Network-Driven",
        href: "https://dspace.library.uvic.ca/items/b8a63d34-f0a3-4156-a90d-451363891d4f",
      },
      ", published on UVicSpace.",
    ],
    "A first-generation immigrant myself, I began my community development work in 2014 in youth and settlement services, co-designing services and programs with newcomer youth. Early in my career, the newcomer preteens and youth I was in community with showed me how participatory decision-making can foster belonging and inclusion.",
    "I am both a specialist and a generalist. Over my years in the non-profit sector, I have dabbled in a bit of everything: program evaluation and reporting, grant writing, social enterprise operations, supportive employment case management, data analytics, event planning, and lots of coordination!",
    "Today, I am raising my young family in Richmond, BC, on the lands of the Musqueam and hən̓q̓əmin̓əm̓-speaking Peoples. I am grateful to have called these lands home since the age of seven. I am a proud graduate of General Currie Elementary and Richmond Secondary, and a past employee of Domino’s Pizza on No. 2 Road, Roots at Richmond Centre, and Richmond Family Place.",
    "After years of supporting community development through provincial organizations, I am looking for ways to take part directly in community building in my home community of Richmond, working with non-profits, local government, and businesses alike. I am open to the unpredictable possibilities of “showing up” with my collaborative spirit, heart, and skills, and of “being in community with others.” If my interests align with yours or your organization’s needs, let’s connect!",
  ],

  education: [
    "Master of Arts in Community Development, University of Victoria",
    "Bachelor of Arts, University of British Columbia",
  ],

  pastRoles: [
    "Research & Knowledge Mobilization Specialist, Vantage Point",
    "Sector Development Coordinator, Vantage Point",
    "Provincial Outreach Coordinator, Vantage Point",
    "GO Group Manager, Pacific Autism Family Network",
    "Drive Youth Employment Services Data Coordinator, Frog Hollow Neighbourhood House",
    "Preteen & Youth Programs Coordinator, Frog Hollow Neighbourhood House",
  ],
};
