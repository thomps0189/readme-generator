// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "BSD":
      return `[!(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case "ISC":
      return `[!(ttps://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    case "Apache":
      return `[!(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "GNU":
      return `[!(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "N/A":
      return `N/A`
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.github})

  # Table of Contents
    
  - [Description](#description)\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributors](#contributors)\n
  - [Test Instructions](#test)\n
  - [License](#license)\n
  - [Contact](#github)\n

  # Description 
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributors
  ${data.contributors}

  # Test
  ${data.test}

  # License
  ${data.license}

  # Contact/Questions
  - GitHub Link: github.com/${data.github}
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
