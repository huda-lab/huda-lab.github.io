---
title: "Scaling Package Queries to a Billion Tuples via Hierarchical Partitioning and Customized Optimization"
link: "https://arxiv.org/abs/2307.02860"
when: "2024-01"
where: "VLDB 2024"
authors: [ 
  "Ahn Mai",
  "Matteo Brucato",
  "Miro Mannino",
  "Azza Abouzied",
  "Peter Haas",
  "Alexandra Meliou"
]
funding: ["CITIES", "ASPIRE AARE20-307"]
acknowledgments: "This work was supported by the ASPIRE Award for Research Excellence (AARE-2020) grant AARE20-307 and NYUAD CITIES, funded by Tamkeen under the Research Institute Award CG001, and by the National Science Foundation under grants 1943971 and 2211918." 
tags: ["dm"]
links: [
  {
    txt: "Paper",
    ref: "/papers/scaling-package-queries.pdf",
  },
  {
    txt: "Paper (Extended)",
    ref: "https://arxiv.org/pdf/2307.02860.pdf",
  },
  {
    txt: "GitHub Repository",
    ref: "https://github.com/alm818/PackageQuery"
  }
]
---
A package query returns a package -- a multiset of tuples -- that maximizes or minimizes a linear objective function subject to linear constraints, thereby enabling in-database decision support. Prior work has established the equivalence of package queries to Integer Linear Programs (ILPs) and developed the SketchRefine algorithm for package query processing. While this algorithm was an important first step toward supporting prescriptive analytics scalably inside a relational database, it struggles when the data size grows beyond a few hundred million tuples or when the constraints become very tight. In this paper, we present Progressive Shading, a novel algorithm for processing package queries that can scale efficiently to billions of tuples and gracefully handle tight constraints. Progressive Shading solves a sequence of optimization problems over a hierarchy of relations, each resulting from an ever-finer partitioning of the original tuples into homogeneous groups until the original relation is obtained. This strategy avoids the premature discarding of high-quality tuples that can occur with SketchRefine. Our novel partitioning scheme, Dynamic Low Variance, can handle very large relations with multiple attributes and can dynamically adapt to both concentrated and spread-out sets of attribute values, provably outperforming traditional partitioning schemes such as KD-Tree. We further optimize our system by replacing our off-the-shelf optimization software with customized ILP and LP solvers, called Dual Reducer and Parallel Dual Simplex respectively, that are highly accurate and orders of magnitude faster.