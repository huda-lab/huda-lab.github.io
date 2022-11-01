var projects = [
    {
        id: 14,
        title: "Synner",
        status: "archive",
        subtitle: "Generating Realistic Synthetic Data",
        authors: ["Miro Mannino", "Azza Abouzied"],
        members: [0, 3, 6, 7, 10, 14],
        links: [
            {
                txt: "Paper @ UIST 2019",
                ref: "http://azza.azurewebsites.net/files/Synner-UIST2019.pdf"
            },
            {
                txt: "30s Video",
                ref: "https://www.youtube.com/watch?v=dS6dS5JdNr8"
            },
            {
                txt: "Video",
                ref: "https://www.youtube.com/watch?v=5LuHyJsKY3I"
            },
            {
                txt: "Source Code & Data",
                ref: "https://github.com/huda-lab/synner"
            },
            {
                txt: "Live Demo",
                ref: "http://Synner.io"
            },
            {
                txt: "Git",
                ref: ""
            }
        ],
        abstract: "Synner is a tool that helps users generate real-looking synthetic data by visually and declaratively specifying the properties of the dataset such as each field’s statistical distribution, its domain, and its relationship to other fields. It provides instant feedback on every user interaction by updating multiple visualizations of the generated dataset and even suggests data generation specifications from a few user examples and interactions. Synner visually communicates the inherent randomness of statistical data generation. Our evaluation of Synner demonstrates its effectiveness at generating realistic data when compared with Mockaroo, a popular data generation tool, and with hired developers who coded data generation scripts for a fee.",
        teaserpic: "images/projects/synner.png",
        thumbnail: "images/projects/synner-thumb.png"
    },
    {
        id: 13,
        status: "active",
        title: "Scalable Package Queries",
        subtitle: "Scaling package queries over probabilistic databases",
        authors: ["Matteo Brucato", "Peter Haas", "Alexandra Meliou", "Azza Abouzied"],
        members: [19, 0],
        grants: ["NSF Award IIS-1420941", "NSF EAGER In-Database Prescriptive Analytics (2019)"],
        award: "CACM 2019 Research Highlight Award | ACM SIGMOD Research Highlight Award | Best of VLDB 2016",
        links: [
            {
                txt: "Paper @ CACM 2019",
                ref: "https://cacm.acm.org/magazines/2019/2/234358-scalable-computation-of-high-order-optimization-queries/abstract"
            },
            {
                txt: "Paper @ VLDBJ 2017",
                ref: "https://link.springer.com/article/10.1007/s00778-017-0483-4"
            },
            {
                txt: "Paper @ SIGMOD Record 2017",
                ref: "http://dl.acm.org/citation.cfm?id=3093761"
            },
            {
                txt: "Paper @ VLDB 2016",
                ref: "http://arxiv.org/abs/1512.03564"
            },
            {
                txt: "Git",
                ref: ""
            }
        ],
        abstract: "Traditional database queries follow a simple model: they define constraints that each tuple in the result must satisfy. This model is computationally efficient, as the database system can evaluate the query conditions on each tuple individually. However, many practical, real-world problems require a collection of result tuples to satisfy constraints collectively, rather than individually. In this project, we present package queries, a new query model that extends traditional database queries to handle complex constraints and preferences over answer sets. We develop a full-fledged package query system, implemented on top of a traditional database engine. Our work makes several contributions. First, we design PaQL, a SQL-based query language that supports the declarative specification of package queries and a stochastic variant that supports probabilistic constraints over uncertain data. Second, we present a fundamental evaluation strategy that combines the capabilities of databases and constraint optimization solvers to derive solutions to package queries. Third, we introduce an offline data partitioning strategy allowing query evaluation to scale to large data sizes. Fourth, we introduce SKETCHREFINE, a scalable algorithm for package evaluation, with strong approximation guarantees. Finally, we present extensive experiments over real-world and benchmark data that demonstrate our scalable and efficient runtime performance over large datasets.",
        teaserpic: "images/projects/packagebuilder.png",
        thumbnail: "images/projects/packagebuilder-thumb.png"
    },
    {
        id: 16,
        status: "archive",
        title: "Texture",
        subtitle: "A Collaborative Framework for Structure Identification over Print Documents",
        authors: ["Maeda Hanafi", "Miro Mannino", "Azza Abouzied"],
        members: [0, 1, 3, 8, 9, 11, 12, 13],
        links: [
            {
                txt: "Paper @ HILDA 2019",
                ref: "http://hilda.io/2019/proceedings/HILDA2019_paper_8.pdf"
            },
            {
                txt: "Git",
                ref: ""
            }
        ],
        abstract: "We describe Texture, a framework for data extraction over print documents that allows end-users to construct data extraction rules over an inferred document structure. To effectively infer this structure, we enable developers to contribute multiple heuristics that identify different structures in English print documents, crowd-workers and annotators to manually label these structures, and end-users to search and decide which heuristics to apply and how to boost their performance with the help of ground-truth data collected from crowd-workers and annotators. Texture’s design supports each of these different user groups through a suite of tools. We demonstrate that even with a handful of student-developed heuristics, we can achieve reasonable precision and recall when identifying structures across different document collections.",
        teaserpic: "images/projects/texture.png",
        thumbnail: "images/projects/texture-thumb.png"
    },

    {
        id: 12,
        status: "archive",
        title: "Qetch",
        subtitle: "Expressive Time Series Querying with Hand-Drawn Scale-Free Sketches",
        authors: ["Miro Mannino", "Azza Abouzied"],
        members: [0, 3],
        award: "Best Paper Award (top 1%)",
        links: [
            {
                txt: "Paper @ CHI 2018",
                ref: "https://github.com/huda-lab/qetch/raw/resources/CHI_18_QETCH.pdf"
            },
            {
                txt: "Source Code & Data",
                ref: "https://github.com/huda-lab/qetch"
            },
            {
                txt: "Video",
                ref: "https://youtu.be/T11OS4qO1c4"
            },
            {
                txt: "Git",
                ref: ""
            }
        ],
        abstract: "We present Qetch, a tool where users freely sketch patterns on a scale-less canvas to query time series data without specifying query length or amplitude. We study how humans sketch time series patterns — humans preserve visually salient perceptual features but often non-uniformly scale and locally distort a pattern — and we develop a novel matching algorithm that accounts for human sketching errors. Qetch enables the easy construction of complex and expressive queries with two key features: regular expressions over sketches and relative positioning of sketches to query multiple time-aligned series. Through user studies, we demonstrate the effectiveness of Qetch’s different interaction features. We also demonstrate the effectiveness of Qetch’s matching algorithm compared to popular algorithms on targeted, and exploratory query-by- sketch search tasks on a variety of data sets.",
        teaserpic: "images/projects/qetch.png",
        thumbnail: "images/projects/qetch-thumb.png"
    },
    {
        id: 11,
        status: "archive",
        title: "SEER",
        subtitle: "Auto-Generating Information Extraction Rules from User-Specified Examples.",
        authors: ["Maeda Hanafi", "Azza Abouzied", "Laura Chiticariu", "Yunyao Li"],
        members: [0, 1],
        links: [
            {
                txt: "Paper @ CHI 2017",
                ref: "https://doi.org/10.1145/3025453.3025540"
            },
            {
                txt: "Video",
                ref: "https://www.youtube.com/watch?v=pS18h5REC3o"
            },
            {
                txt: "Demo @ SIGMOD 2017",
                ref: "https://doi.org/10.1145/3035918.3056443"
            }
        ],
        abstract: "Time-consuming and complicated best describe the current state of the Information Extraction (IE) field. Machine learning approaches to IE require large collections of labeled datasets that are difficult to create and use obscure mathematical models, occasionally returning unwanted results that are unexplainable. Rule-based approaches, while resulting in easy-to-understand IE rules, are still time-consuming and labor-intensive. SEER combines the best of these two approaches: a learning model for IE rules based on a small number of user-specified examples. In this paper, we explain the design behind SEER and present a user study comparing our system against a commercially available tool in which users create IE rules manually. Our results show that SEER helps users complete text extraction tasks more quickly, as well as more accurately.",
        teaserpic: "images/projects/seer.png",
        thumbnail: "images/projects/seer-thumb.png"
    },
    {
    id: 10,
    title: "Data-Driven Decision Making in Health",
    subtitle: "Suggesting the best next course of action for patients in ICUs",
    authors: ["Dennis Shasha", "Azza Abouzied", "Hashim Hayat", "Rick Hull", "Elisa Sorrentino", "Farah Shamout", "Abbas Shojaee", "Yifan Li"],
    links: [
    {
        txt: "Tech Report Available on Request",
        ref: "mailto:azza@nyu.edu"
    },
    ],
    abstract: "In this work, we propose a system for analyzing Intensive Care Unit (ICU) visits and thereby supporting the diagnosis and treatment of patients in ICU settings. The goal of the system is to infer recommendations for actions that medical staff should perform on a given patient. To achieve this, we find patients in similar conditions, and devise a number of strategies for recommending actions that should improve a patient’s medical state. These recommendations are derived from the set of similar patients and a patient’s most recent test results.",
    teaserpic: "images/projects/health-diagnosis.png",
    thumbnail: "images/projects/health-diagnosis-thumb.png"
},
    // {
    //     id: 9,
    //     title: "Teaching Query Languages",
    //     subtitle: "Using Visual Query Plans and Data to Explain Relational and Graph Queries",
    //     authors: ["Yousra Hassan", "Miro Mannino", "Azza Abouzied", "Semih Salihoglu"],
    //     links: [
    //         {
    //             txt: "Tech Report Available on Request",
    //             ref: "mailto:azza@nyu.edu"
    //         },
    //     ],
    //     abstract: "We build an educational tool to help students understand relational (SQL) and graph (SPARQL) query language students. The tool creates interactive query plan visualizations and demonstrates the behavior of query operators through intermediate results. The tool integrates into Jupyter Notebook to allow educators to utilize our tool within a commonly used teaching and code-demonstration framework.",
    //     teaserpic: "images/projects/queryplan-full.png",
    //     thumbnail: "images/projects/queryplan.png"
    // },
    {
        id: 8,
        status: "active",
        title: "EpiPolicy",
        subtitle: "Policy Optimization to Control Epidemic Outbreaks",
        authors: ["Miro Mannino", "Anh Mai", "Zain Tariq", "Dennis Shasha", "Azza Abouzied"],
        links: [
            {
                txt: "Tech Report Available on Request",
                ref: "mailto:azza@nyu.edu"
            },
            {
                txt: "Official Website",
                ref: "https://epipolicy.github.io/"
            },
            {
                txt: "Short Video",
                ref: "https://www.youtube.com/watch?v=JDYb4_coAf4&ab_channel=HuDaLab-NYUAD"
            },
            {
                txt: "Longer Video",
                ref: "https://www.youtube.com/watch?v=KJ7-Wt5bEeM&ab_channel=HuDaLab-NYUAD"
            }
        ],
        abstract: "EpiPolicy is a population-based epidemic simulator and policy aid that allows users to customize its compartmental model to capture different epidemic scenarios for epidemics like COVID-19. Its user interface makes it easy to define various interventions such as social distancing, school closure, vaccination, and disease-specific interventions. EpiPolicy aids policy makers by simulating and constructing locale-specific intervention schedules that reduce disease burden, and minimize social and economic costs.",
        teaserpic: "images/projects/epidemic-intervention.png",
        thumbnail: "images/projects/epidemic-intervention-thumb.png"
    },
    // {
    //     id: 21,
    //     status: "active",
    //     title: "Hill and Dale",
    //     subtitle: "Streaming queries with AQuery",
    //     authors: ["Ahmad Chatha", "Kostas Zoumbatianos", "Dennis Shasha", "Azza Abouzied"],
    //     links: [
    //         {
    //             txt: "Tech Report Available on Request",
    //             ref: "mailto:azza@nyu.edu"
    //         },
    //     ],
    //     abstract: "",
    //     teaserpic: "",
    //     thumbnail: ""
    // },
    // {
    //     id: 23,
    //     status: "active",
    //     title: "Validating Generative Models",
    //     subtitle: "Evaluating the realism of synthetic data sets generated by GANs and language models",
    //     authors: ["Miro Mannino", "Ofer Mendelevitch", "Azza Abouzied"],
    //     links: [
    //         {
    //             txt: "Tech Report Available on Request",
    //             ref: "mailto:azza@nyu.edu"
    //         },
    //     ],
    //     abstract: "",
    //     teaserpic: "",
    //     thumbnail: ""
    // },
    {
        id: 9,
        status: "active",
        title: "Impact3D",
        subtitle: "Visualizing the impact of Charitable Donations with Augmented Reality",
        authors: ["Lauren McMillen", "Azza Abouzied"],
        links: [
            {
                txt: "Tech Report Available on Request",
                ref: "mailto:azza@nyu.edu"
            },
        ],
        abstract: "",
        teaserpic: "",
        thumbnail: ""
    },
    {
        id: 17,
        status: "active",
        title: "CREST",
        subtitle: "A Collaborative Real Estate Search Tool",
        authors: ["Junior Garcia", "Azza Abouzied"],
        links: [
            {
                txt: "Tech Report Available on Request",
                ref: "mailto:azza@nyu.edu"
            },
        ],
        abstract: "",
        teaserpic: "images/projects/crest.jpg",
        thumbnail: "images/projects/crest-thumb.jpg"
    },

];
