const chapters = {
    chapter1: {
        title: "What is the science behind vegetation indices?",
        sections: [
            {
                id: "context",
                title: "Context",
                content: `
                    <p>
                    In various articles on remote sensing applications in agriculture, vegetation indices
                    are among the most widely used types of data. Their formulas are usually presented in
                    the papers, with the Normalized Difference Vegetation Index (NDVI) being one of the most widely
                    used indices. Its formula is simple: the ratio of the difference between reflectance in the 
                    near-infrared and red bands to the sum of reflectance in those two bands.</p>
                    <p>
                    But what exactly is NDVI? Is it merely a mathematical formula that captures crop growth, 
                    health, and leaf area index, as scientists often suggest?
                    </p>
                `
            },
            {
                id: "basics",
                title: "Basics of Light",
                content: `
                    <p> 
                    To understand this, we first need to explore the physics of how light interacts with plants at 
                    different wavelengths. We know that light has a dual nature—it exhibits both wave-like and 
                    particle-like properties. In this context, we focus on the wave nature of light to understand 
                    how different wavelengths interact with plant tissues. Light is an electromagnetic wave 
                    characterized by wavelength and frequency (see figure below). Our eyes can only perceive between 
                    0.4 to 0.7 microns, which is often referred to as the visible range.</p>
                     <figure class="content-figure">
                        <img
                            src="images/Blogs/One/Fig1.png"
                            alt="electromagnetic spectrum"
                            class="figure-image"
                        >
    
                    </figure>

                    <p>
                    This is a good example to reflect on a deeper philosophical question: Do we understand our 
                    experiences objectively, or do we understand it only through the limits of our existing 
                    frameworks?</p>
                `
            },
            {
                id: "interraction",
                title: "Light-Plant Interaction",
                content: `
                    <p>
                    When light hits an object, it either reflects, absorbs or refracts. This signature of how much 
                    in each category differs with different objects or conditions of the plants, and with different 
                    wavelengths.</p>
                    <p>
                    When light strikes an object, part of it is reflected, absorbed, and transmitted through the 
                    object. The proportions of reflected, absorbed, and transmitted light depend on the properties 
                    of the object and the wavelength of light. In plants, these interactions change depending on 
                    factors such as leaf structure, pigment concentration, water content, and physiological 
                    condition. This wavelength-dependent behavior gives rise to what we call a spectral signature 
                    (see figure below).
                    </p>
                    <figure class="content-figure">
                        <img
                            src="images/Blogs/One/Fig2.png"
                            alt="Spectral signature of vegetation"
                            class="figure-image"
                        >
    
                    </figure>

                    <p>
                    Plants generally exhibit high reflectance in the near-infrared region due to the internal 
                    structure of their leaves. In particular, the interfaces between air spaces and cells within 
                    the spongy mesophyll cause substantial scattering of near-infrared light, some of which escapes 
                    the leaf as reflected radiation. However, this reflectance is not constant. It varies depending 
                    on the structural and physiological conditions of the plant, including whether the plant is 
                    healthy, stressed, senescing, or dead.
                    </p>
                    <p>
                    These differences in how plants reflect light at different wavelengths are what gave rise to 
                    the concept of vegetation indices. The idea is simple: if plants reflect light differently 
                    depending on their characteristics and conditions, can we use these differences to learn 
                    something about them?
                    </p>

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