import Maths from "../public/assets/icons/maths.svg";
import Social from "../public/assets/icons/social.svg";
import Others from "../public/assets/icons/others.svg";
import Communication from "../public/assets/icons/communication.svg";
import Lifestyle from "../public/assets/icons/lifestyle.svg";
import Exams from "../public/assets/icons/exams.svg";
import Science from "../public/assets/icons/science.svg";
import Textbooks from "../public/assets/icons/textbooks.svg";
import colors from "../src/core-utils/colors";

const allTopicsList = [
  {
    id: "1",
    subject: "Mathametics",
    topic1: "Algebra & linear algebra",
    topic2: "Calculus",
    topic3: "Statistics & Logistics",
    topic4: "Trignometry",
    icon: Maths,
    color: colors.YELLOW,
    bColor: colors.LIGHT_YELLOW,
  },
  {
    id: "2",
    subject: "Social Science",
    topic1: "History",
    topic2: "Geography, maps & atlas",
    topic3: "Civics & economics",
    topic4: "Psychology",
    icon: Social,
    color: colors.GREEN,
    bColor: colors.LIGHT_GREEN,
  },
  {
    id: "3",
    subject: "Others",
    topic1: "Computer & Internet",
    topic2: "Development",
    topic3: "Novels",
    topic4: "Politics",
    icon: Others,
    color: colors.BLUE,
    bColor: colors.LIGHT_BLUE,
  },
  {
    id: "4",
    subject: "Communication skills",
    topic1: "Aptitude",
    topic2: "Vocabulary",
    topic3: "Languages & linguistics",
    topic4: "Writing",
    icon: Communication,
    color: colors.PLANT_GREEN,
    bColor: colors.LIGHT_PLANT_GREEN,
  },
  {
    id: "5",
    subject: "Lifestyle",
    topic1: "Art & crafts",
    topic2: "Fashion & beauty",
    topic3: "Hotel management",
    topic4: "Travel & photography",
    icon: Lifestyle,
    color: colors.AQUA,
    bColor: colors.LIGHT_AQUA,
  },
  {
    id: "6",
    subject: "Exams preparation",
    topic1: "Defence",
    topic2: "Engineering entrance",
    topic3: "Medical entrance",
    topic4: "Exams by UPSC",
    icon: Exams,
    color: colors.RED,
    bColor: colors.LIGHT_RED,
  },

  {
    id: "7",
    subject: "Science",
    topic1: "Biology",
    topic2: "Chemistry",
    topic3: "Medical Science",
    topic4: "Physics",
    icon: Science,
    color: colors.SKY_BLUE,
    bColor: colors.LIGHT_SKY_BLUE,
  },
  {
    id: "8",
    subject: "Textbooks & Guides",
    topic1: "Higher education",
    topic2: "School textbooks",
    topic3: "Reference",
    topic4: "Study guides",
    icon: Textbooks,
    color: colors.PINK,
    bColor: colors.LIGHT_PINK,
  },
];

export default allTopicsList;
