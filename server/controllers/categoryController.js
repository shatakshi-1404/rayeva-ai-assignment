const generateAI = require("../services/aiService")

exports.generateCategory = async (req, res) => {
    try {

        const { description } = req.body

        // Validate input
        if (!description) {
            return res.status(400).json({
                success: false,
                message: "Product description is required"
            })
        }

        const prompt = `
Analyze this product description and return JSON.

Product: ${description}

Return JSON with:
- primary_category
- sub_category
- seo_tags (5-10)
- sustainability_filters
`

        const result = await generateAI(prompt)

        res.status(200).json({
            success: true,
            product_description: description,
            data: result
        })

    } catch (error) {

        console.error(error)

        res.status(500).json({
            success: false,
            message: "AI generation failed"
        })
    }
}
