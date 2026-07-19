const chapters = {
    chapter1: {
        title: "1 Introduction",
        sections: [
            {
                id: "summary",
                title: "Summary",
                content: `
                    <p>This page is a blog currently in progress. All research projects and experiments conducted by Karisma Yumnam will be discussed in this page</p>
                `
            },
            {
                id: "why-important",
                title: "Why this Matters",
                content: `
                    <p> Sharing knowledge and experience with the world</p>
                `
            },
            {
                id: "audience",
                title: "Who This Chapter Is For",
                content: `
                    <p>This chapter is useful for students, researchers, data scientists, 
                    and practitioners who want to understand precision agriculture, data science, explainable AI, hydrology and meteorology.</p>
                `
            }
        ]
    },

    // chapter2: {
    //     title: "2 Interpretability",
    //     sections: [
    //         {
    //             id: "definition",
    //             title: "Definition",
    //             content: `
    //                 <p>Interpretability means the ability to explain or understand 
    //                 how a machine learning model makes predictions.</p>
    //             `
    //         },
    //         {
    //             id: "types",
    //             title: "Types of Interpretability",
    //             content: `
    //                 <p>Interpretability can be global or local. Global interpretability 
    //                 explains the overall model, while local interpretability explains 
    //                 individual predictions.</p>
    //             `
    //         }
    //     ]
    // },

    // chapter3: {
    //     title: "3 Methods Overview",
    //     sections: [
    //         {
    //             id: "model-specific",
    //             title: "Model-Specific Methods",
    //             content: `
    //                 <p>Model-specific methods are designed for particular model types, 
    //                 such as linear regression, decision trees, or neural networks.</p>
    //             `
    //         },
    //         {
    //             id: "model-agnostic",
    //             title: "Model-Agnostic Methods",
    //             content: `
    //                 <p>Model-agnostic methods can be applied to many different models. 
    //                 Examples include PDP, ICE, SHAP, and permutation importance.</p>
    //             `
    //         }
    //     ]
    // }
};

function loadChapter(chapterKey) {
    const chapter = chapters[chapterKey];

    let contentHTML = `<h1>${chapter.title}</h1>`;
    let tocHTML = "";

    chapter.sections.forEach(section => {
        contentHTML += `
            <section id="${section.id}">
                <h2>${section.title}</h2>
                ${section.content}
            </section>
        `;

        tocHTML += `
            <a href="#${section.id}">${section.title}</a>
        `;
    });

    document.getElementById("content").innerHTML = contentHTML;
    document.getElementById("section-list").innerHTML = tocHTML;
}

// Load first chapter by default
loadChapter("chapter1");