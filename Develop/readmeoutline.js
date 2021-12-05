function includeDescription(description) {
    if (description === true) {
        return `this is the description`
    } else {
        return ""
    }
}

function generateReadme(data) {
    console.log("data is ==>", data)
    return `
    Hello this is my description ${includeDescription(data.description)}
    `
}

module.exports = generateReadme