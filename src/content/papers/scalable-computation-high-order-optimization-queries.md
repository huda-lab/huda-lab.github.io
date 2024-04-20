---
title: "Scalable computation of high-order optimization queries"
link: "https://dl.acm.org/doi/abs/10.1145/3299881"
where: "Communications of the ACM. Vol. 62, No. 2"
when: "2019-01"
authors: [ 
  "Matteo Brucato",
  "Azza Abouzied", 
  "Alexandra Meliou"
]
tags: ["dm"]
acknowledgments: "This research is supported by the National Science Foundation under grants IIS-1420941, IIS-1421322, and IIS-1453543." 
awards: ["CACM Research Highlight"]
links: [
  {
    txt: "Paper",
    ref: "/papers/scalable-computation-high-order-optimization-queries.pdf"
  },
  {
    txt: "Technical Perspective by Surajit Chaudhuri",
    ref: "https://cacm.acm.org/research/technical-perspective-to-do-or-not-to-do/"
  }
]
---
Constrained optimization problems are at the heart of significant applications in a broad range of domains, including finance, transportation, manufacturing, and healthcare. Modeling and solving these problems has relied on application-specific solutions, which are often complex, error-prone, and do not generalize. Our goal is to create a domain-independent, declarative approach, supported and powered by the system where the data relevant to these problems typically resides: the database. We present a complete system that supports package queries, a new query model that extends traditional database queries to handle complex constraints and preferences over answer sets, allowing the declarative specification and efficient evaluation of a significant class of constrained optimization problems---integer linear programs (ILP)---within a database.