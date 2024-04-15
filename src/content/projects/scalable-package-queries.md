---
id: "scalable-package-queries"
status: "active"
title: "Scalable Package Queries"
subtitle: "Scaling package queries over probabilistic databases"
authors: [ 
  "Matteo Brucato",
  "Peter Haas",
  "Alexandra Meliou",
  "Azza Abouzied",
]
grants: [
  "NSF Award IIS-1420941",
  "NSF EAGER In-Database Prescriptive Analytics (2019)",
]
award: "CACM 2019 Research Highlight Award | ACM SIGMOD Research Highlight Award | Best of VLDB 2016"
links: [
  {
    txt: "Paper @ CACM 2019",
    ref: "https://cacm.acm.org/magazines/2019/2/234358-scalable-computation-of-high-order-optimization-queries/abstract",
  },
  {
    txt: "Paper @ VLDBJ 2017",
    ref: "https://link.springer.com/article/10.1007/s00778-017-0483-4",
  },
  {
    txt: "Paper @ SIGMOD Record 2017",
    ref: "http://dl.acm.org/citation.cfm?id=3093761",
  },
  {
    txt: "Paper @ VLDB 2016",
    ref: "http://arxiv.org/abs/1512.03564",
  },
  {
    txt: "Git",
    ref: "",
  },
]
abstract:
  "Traditional database queries follow a simple model: they define constraints that each tuple in the result must satisfy. This model is computationally efficient, as the database system can evaluate the query conditions on each tuple individually. However, many practical, real-world problems require a collection of result tuples to satisfy constraints collectively, rather than individually. In this project, we present package queries, a new query model that extends traditional database queries to handle complex constraints and preferences over answer sets. We develop a full-fledged package query system, implemented on top of a traditional database engine. Our work makes several contributions. First, we design PaQL, a SQL-based query language that supports the declarative specification of package queries and a stochastic variant that supports probabilistic constraints over uncertain data. Second, we present a fundamental evaluation strategy that combines the capabilities of databases and constraint optimization solvers to derive solutions to package queries. Third, we introduce an offline data partitioning strategy allowing query evaluation to scale to large data sizes. Fourth, we introduce SKETCHREFINE, a scalable algorithm for package evaluation, with strong approximation guarantees. Finally, we present extensive experiments over real-world and benchmark data that demonstrate our scalable and efficient runtime performance over large datasets."
teaserpic: "images/projects/packagebuilder.png"
thumbnail: "images/projects/packagebuilder-thumb.png"
---