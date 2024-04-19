---
title: "Qetch: Time series querying with expressive sketches"
link: "https://dl.acm.org/doi/abs/10.1145/3173574.3173962"
where: "SIGMOD '18"
when: "2018-05"
authors: [ 
  "Miro Mannino",
  "Azza Abouzied"
]
tags: ["powering-up-users"]
links: [
  {
    txt: "Paper",
    ref: "/papers/qetch-sigmod.pdf"
  },
  {
    txt: "Video",
    ref: "https://youtu.be/T11OS4qO1c4"
  },
  {
    txt: "Source Code & Data",
    ref: "https://github.com/huda-lab/qetch"
  }
]
---
Query-by-sketch tools allow users to sketch a pattern to search a time series database for matches. Prior work adopts a bottom-up design approach: the sketching interface is built to reflect the inner workings of popular matching algorithms like Dynamic time warping (DTW) or Euclidean distance (ED). We design Qetch, a query-by-sketch tool for time series data, top-down. Users freely sketch patterns on a scale-less canvas. By studying how humans sketch time series patterns we develop a matching algorithm that accounts for human sketching errors. Qetch's top-down design and novel matching algorithm enable the easy construction of expressive queries that include regular expressions over sketches and queries over multiple time series. Our demonstration showcases Qetch and summarizes results from our evaluation of Qetch's effectiveness.
