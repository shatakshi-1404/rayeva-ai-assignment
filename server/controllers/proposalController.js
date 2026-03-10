const generateAI = require("../services/aiService")

exports.generateProposal = async (req, res) => {

    try {

        const { budget, requirement } = req.body

        const prompt = `
        Create a sustainable B2B proposal.

        Budget: ${budget}
        Requirement: ${requirement}

        Return JSON:
        product_mix
        cost_breakdown
        sustainability_impact
        `

        const result = await generateAI(prompt)

        res.json({
            success: true,
            data: result
        })

    } catch (error) {

        res.status(500).json({ error: "Proposal generation failed" })

    }

}
