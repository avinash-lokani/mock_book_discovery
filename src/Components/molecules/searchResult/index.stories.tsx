import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchResult from ".";

import book1 from "../../../../public/assets/images/book1.png";
import book2 from "../../../../public/assets/images/book2.png";

export default {
  title: "Molecule/SearchResult",
  component: SearchResult,
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const searchResult = Template.bind({});
searchResult.args = {
  results: [
    {
      id: 1,
      title: "Basic Physics",
      author: "Karl F Kuhn",
      authorImg: "./assets/images/author.png",
      bookImage: "./assets/images/physics.png",
      category: "Chemistry",
      rating: 4.5,
      bookDescription:
        "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
      bookDesc:
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
      authorDesc:
        "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
      reviewsCount: 1210,
      releaseDate: "12th September 1998",
      language: "English",
      followersCount: 1200,
      isStartRead: true,
      isBookmarked: true,
      type: {
        recommendations: true,
        PeopleYouareFollowingAlsoRead: false,
        TopRatings: false,
      },
    },
  ],
};