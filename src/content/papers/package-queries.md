---
title: "Package queries: efficient and scalable computation of high-order constraints"
link: "https://link.springer.com/article/10.1007/s00778-017-0483-4"
where: "The VLDB Journal. Vol 27"
when: "2017-01"
authors: [ 
  "Matteo Brucato",
  "Azza Abouzied", 
  "Alexandra Meliou"
]
tags: ["powering-up-users"]
acknowledgments: "This material is based upon work supported by the National Science Foundation under Grants IIS-1420941, IIS- 1421322, and IIS-1453543." 
links: [
  {
    txt: "Paper",
    ref: "/papers/package-queries.pdf"
  }
]
---
Traditional database queries follow a simple model: they define constraints that each tuple in the result must satisfy. This model is computationally efficient, as the database system can evaluate the query conditions on each tuple individually. However, many practical, real-world problems require a collection of result tuples to satisfy constraints collectively, rather than individually. In this paper, we present package queries, a new query model that extends traditional database queries to handle complex constraints and preferences over answer sets. We develop a full-fledged package query system, implemented on top of a traditional database engine. Our work makes several contributions. (1) We design PaQL, a SQL-based query language that supports the declarative specification of package queries. We prove that PaQL is at least as expressive as integer linear programming, and therefore, evaluation of package queries is NP-hard. (2) We present a fundamental evaluation strategy that combines the capabilities of databases and constraint optimization solvers to derive solutions to package queries. The core of our approach is a set of translation rules that transform a package query to an integer linear program. (3) We introduce an offline data partitioning strategy allowing query evaluation to scale to large data sizes. (4) We introduce SKETCHREFINE, a scalable algorithm for package evaluation, with strong approximation guarantees [(1±ε)-factor approximation]. (5) We present a method for parallelizing the REFINE phase of SKETCHREFINE. (6) We present an empirical study of the efficiency gains of providing integer solvers with starting solutions. (7) We present extensive experiments over real-world and benchmark data. The results demonstrate that our methods are effective at deriving high-quality package results and achieve runtime performance that is an order of magnitude faster than directly using ILP solvers over large datasets.
