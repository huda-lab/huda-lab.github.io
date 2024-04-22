---
title: ""
link: "https://dl.acm.org/doi/10.1145/3447750"
where: "IEEE Data Engineering Bulletin 2022"
when: "2022-09"
authors: [ 
  "Azza Abouzied",
  "Peter J. Haas",
  "Alexandra Meliou"
]
tags: ["dm"]
funding: ["CITIES", "ASPIRE AARE20-307"]
links: [
  {
    txt: "Paper",
    ref: "/papers/in-db-decision-support.pdf"
  }
]
---
Decision makers in a broad range of domains, such as finance,
transportation, manufacturing, and healthcare, often need to derive optimal
decisions given a set of constraints and objectives. Traditional solutions
to such constrained optimization problems are typically
application-specific, complex, and do not generalize. Further, the usual
workflow requires slow, cumbersome, and error-prone data movement between a
database and predictive-modeling and optimization packages. All of these
problems are exacerbated by the unprecedented size of modern data-intensive
optimization problems. The emerging research area of in-database
prescriptive analytics aims to provide seamless domain-independent,
declarative, and scalable approaches powered by the system where the data
typically resides: the database. Integrating optimization with database
technology opens up prescriptive analytics to a much broader community,
amplifying its benefits. In the context of our prior and ongoing work in
this area, we discuss some strategies for addressing key challenges related
to usability, scalability, data uncertainty, dynamic environments with
changing data and models, and the need to support decision-making agents.
We indicate how deep integration between the DBMS, predictive models, and
optimization software creates opportunities for rich prescriptive-query
functionality with good scalability and performance