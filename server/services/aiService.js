async function generateAI(prompt) {

    // Mock AI response
    const response = {
        primary_category: "Personal Care",
        sub_category: "Eco Friendly Products",
        seo_tags: [
            "bamboo toothbrush",
            "eco friendly",
            "sustainable oral care",
            "biodegradable toothbrush",
            "plastic free hygiene"
        ],
        sustainability_filters: [
            "biodegradable",
            "plastic-free",
            "eco-friendly materials"
        ]
    };

    return response;
}

module.exports = generateAI;
