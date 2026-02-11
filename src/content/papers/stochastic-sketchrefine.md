---
title: "Stochastic SketchRefine: Scaling In-Database Decision-Making under Uncertainty to Millions of Tuples."
link: "https://dl.acm.org/doi/10.1145/3737450"
where: "VLDB 2025"
when: "2025-05"
authors: [ 
  "Riddho R. Haque",
  "Anh L. Mai",
  "Matteo Brucato",
  "Azza Abouzied",
  "Peter J. Haas",
  "Alexandra Meliou"
]
tags: ["dm"]
links: [
  {
    txt: "Paper",
    ref: "/papers/stochastic-sketchrefine"
  }
]
---
Decision making under uncertainty often requires choosing packages, or bags of tuples, that collectively optimize expected outcomes while limiting risks. Processing Stochastic Package Queries (SPQs) involves solving very large optimization problems on uncertain data. Monte Carlo methods create numerous scenarios, or sample realizations of the stochastic attributes of all the tuples, and generate packages with optimal objective values across these scenarios. The number of scenarios needed for accurate approximation—and hence the size of the optimization problem when using prior methods—increases with variance in the data, and the search space of the optimization problem increases exponentially with the number of tuples in the relation. Existing solvers take hours to process SPQs on large relations containing stochastic attributes with high variance. Besides enriching the SPaQL language to capture a broader class of risk specifications, we make two fundamental contributions toward scalable SPQ processing. First, we propose risk-constraint linearization (RCL), which converts SPQs into Integer Linear Programs (ILPs) whose size is independent of the number of scenarios used. Solving these ILPs gives us feasible and near-optimal packages. Second, we propose Stochastic SketchRefine, a divide and conquer framework that breaks down a large stochastic optimization problem into subproblems involving smaller subsets of tuples. Our experiments show that, together, RCL and Stochastic SketchRefine produce high-quality packages in orders of magnitude lower runtime than the state of the art.