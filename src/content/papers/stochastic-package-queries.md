---
title: "Stochastic Package Queries in Probabilistic Databases"
link: "https://dl.acm.org/doi/abs/10.1145/3318464.3389765"
where: "SIGMOD'20"
when: "2020-06"
authors: [ 
  "Matteo Brucato", 
  "Nishant Yadav", 
  "Azza Abouzied" , 
  "Peter J. Haas" , 
  "Alexandra Meliou"
]
tags: ["powerup"]
acknowledgments: "This work was supported by the NYUAD Center for Interacting Urban Networks (CITIES), and funded by: Tamkeen under the NYUAD Research Institute Award CG001, the Swiss Re Institute under the Quantum Cities initiative, and the National Science Foundation under grants IIS-1453543 and IIS-1943971. The authors would like to thank the anonymous reviewers for their valuable insights, and Arya Mazumdar, Nishad Ranade, and Senay Solak for their help and suggestions during various phases of the work." 
awards: []
links: [
  {
    txt: "Paper",
    ref: "/papers/stochastic-package-queries.pdf"
  },
  {
    txt: "Talk",
    ref: "https://www.youtube.com/watch?v=APmuaZbZnOg"
  }
]
---
We provide methods for in-database support of decision making under uncertainty. Many important decision problems correspond to selecting a "package" (bag of tuples in a relational database) that jointly satisfy a set of constraints while minimizing some overall "cost" function; in most real-world problems, the data is uncertain. We provide methods for specifying---via a SQL extension---and processing stochastic package queries (SPQS), in order to solve optimization problems over uncertain data, right where the data resides. Prior work in stochastic programming uses Monte Carlo methods where the original stochastic optimization problem is approximated by a large deterministic optimization problem that incorporates many "scenarios", i.e., sample realizations of the uncertain data values. For large database tables, however, a huge number of scenarios is required, leading to poor performance and, often, failure of the solver software. We therefore provide a novel ßs algorithm that, instead of trying to solve a large deterministic problem, seamlessly approximates it via a sequence of smaller problems defined over carefully crafted "summaries" of the scenarios that accelerate convergence to a feasible and near-optimal solution. Experimental results on our prototype system show that ßs can be orders of magnitude faster than prior methods at finding feasible and high-quality packages.
