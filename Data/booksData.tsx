const Books = [
  {
    id: 1,
    title: "Basic Physics",
    author: "Karl F Kuhn",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/znmdknx/Rectangle-7-3.png",
    bookThumbnail: "https://i.ibb.co/znmdknx/Rectangle-7-3.png",
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
    isStartRead: false,
    isBookmarked: false,
    type: {
      recommendations: true,
      PeopleYouareFollowingAlsoRead: true,
      TopRatings: true,
    },
  },
  {
    id: 2,
    title: "Bio Organic Chemistry",
    author: "Sidney M Hecht",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/SBvDs2J/Rectangle-7-2.png",
    bookThumbnail: "https://i.ibb.co/SBvDs2J/Rectangle-7-2.png",
    category: "Chemistry",
    rating: 4.2,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 1120,
    releaseDate: "12th September 1998",
    language: "English",
    followersCount: 1200,
    isStartRead: true,
    isBookmarked: false,
    type: {
      recommendations: true,
      PeopleYouareFollowingAlsoRead: true,
      TopRatings: true,
    },
  },
  {
    id: 3,
    title: "Crystal Chemistry",
    author: "Gerald Ferey",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/bd0wnzM/Rectangle-7.png",
    bookThumbnail: "https://i.ibb.co/bd0wnzM/Rectangle-7.png",
    category: "Chemistry",
    rating: 3.5,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 1110,
    releaseDate: "12th September 1998",
    language: "English",
    followersCount: 1200,
    isStartRead: true,
    isBookmarked: true,
    type: {
      recommendations: true,
      PeopleYouareFollowingAlsoRead: true,
      TopRatings: true,
    },
  },
  {
    id: 4,
    title: "Biology",
    author: "SergeyVasutin",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/fX75fLm/Rectangle-7-1.png",
    bookThumbnail: "https://i.ibb.co/fX75fLm/Rectangle-7-1.png",
    category: "Chemistry",
    rating: 3.5,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 530,
    releaseDate: "12th September 1998",
    language: "English",
    followersCount: 1200,
    isStartRead: true,
    isBookmarked: false,
    type: {
      recommendations: true,
      PeopleYouareFollowingAlsoRead: true,
      TopRatings: true,
    },
  },
  {
    id: 5,
    title: "Concise Inorganic Chemistry",
    author: "J D Lee",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/QPRHYn1/Rectangle-13-8.png",
    bookThumbnail: "",
    category: "Chemistry",
    rating: 4.5,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 830,
    releaseDate: "12th September 1998",
    language: "English",
    followersCount: 1200,
    isStartRead: false,
    isBookmarked: false,
    type: {
      recommendations: false,
      PeopleYouareFollowingAlsoRead: false,
      TopRatings: false,
    },
  },
  {
    id: 6,
    title: "Concise Inorganic Chemistry",
    author: "J D Lee",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/m5fSLGm/Rectangle-13-1.png",
    category: "Chemistry",
    rating: 4.5,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 830,
    releaseDate: "12th September 1998",
    language: "English",
    followersCount: 1200,
    isStartRead: false,
    isBookmarked: false,
    bookThumbnail: "",
    type: {
      recommendations: false,
      PeopleYouareFollowingAlsoRead: false,
      TopRatings: false,
    },
  },
  {
    id: 7,
    title: "Concise Inorganic Chemistry",
    author: "J D Lee",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/xq5s0QM/Rectangle-13.png",
    category: "Chemistry",
    rating: 4.5,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 830,
    releaseDate: "12th September 1998",
    language: "English",
    followersCount: 1200,
    isStartRead: false,
    isBookmarked: false,
    bookThumbnail: "",
    type: {
      recommendations: false,
      PeopleYouareFollowingAlsoRead: false,
      TopRatings: false,
    },
  },
  {
    id: 8,
    title: "Concise Inorganic Chemistry",
    author: "J D Lee",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/bz79hHT/Rectangle-13-4.png",
    category: "Chemistry",
    rating: 4.5,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 830,
    followersCount: 1200,
    releaseDate: "12th September 1998",
    language: "English",
    isStartRead: false,
    isBookmarked: false,
    bookThumbnail: "",
    type: {
      recommendations: false,
      PeopleYouareFollowingAlsoRead: false,
      TopRatings: false,
    },
  },
  {
    id: 9,
    title: "Concise Inorganic Chemistry",
    author: "J D Lee",
    authorImg: "https://i.ibb.co/6w4bQgB/Ellipse-9.png",
    bookImage: "https://i.ibb.co/m5fSLGm/Rectangle-13-1.png",
    category: "Chemistry",
    rating: 4.5,
    bookDescription:
      "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons",
    bookDesc:
      "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks",
    authorDesc:
      "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
    reviewsCount: 830,
    releaseDate: "12th September 1998",
    language: "English",
    followersCount: 1200,
    bookThumbnail: "",
    isStartRead: false,
    isBookmarked: false,
    type: {
      recommendations: false,
      PeopleYouareFollowingAlsoRead: false,
      TopRatings: false,
    },
  },
];

export default Books;
