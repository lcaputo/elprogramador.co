const siteUrl = "https://elprogramador.co"

module.exports = {
    siteUrl,
    sourceDir : "build",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        polices: [
            { userAgent: "*", allow: "/" },
        ],
    },
}