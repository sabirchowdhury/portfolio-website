import { techs } from "@/utils/techs";

const technicalExperience = [
  {
    title: "Full Stack Developer",
    company: "Wonders of Maths/Educai",
    dates: "June 2021 - September 2022",
    preInfo: [
      "I closely collaborated with the founder and CTO to successfully launch an ed-tech platform used by leading UK tutoring agencies and 1000+ tutors & students globally.",
      "In my role I: developed and deployed interactive features; worked closely with product team; led major feature workflows and onboarded 4 new developers. My responsibilities also included maintaining industry coding standards and reviewing/testing code across the team.",
    ],
    bulletPoints: [],
    techs: [
      {
        type: "Front End & Testing: ",
        tags: [
          techs.TypeScript,
          techs.JavaScript,
          techs.React,
          techs.HTML,
          techs.CSS,
          techs.TailwindCSS,
          techs.Remix,
          techs.Babel,
          techs.Cypress,
          "Behaviour-Driven Development",
          techs.Husky,
        ],
      },
      {
        type: "Back End & Database: ",
        tags: [
          techs.NodeJS,
          techs.ExpressJS,
          techs.Remix,
          techs.BlitzJS,
          techs.PostgreSQL,
          techs.Prisma,
        ],
      },

      {
        type: "Deployment, Services & Other: ",
        tags: [
          techs.AWS,
          techs.Docker,
          techs.GCS,
          techs.NGINX,
          techs.GitHub,
          techs.Flightcontrol,
          techs.Render,
          techs.StoryBook,
          techs.StoryBlok,
          techs.CICD,
        ],
      },
    ],
  },
];

export default technicalExperience;
