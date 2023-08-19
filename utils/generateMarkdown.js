// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

"Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised'",
            "Boost Software License 1.0",
            "No license"

function renderLicenseLink(license) {
  var link;
  license = license[0];
  switch(license) {
    case "Apache License 2.0":
      link = "## License Info: https://opensource.org/licenses/Apache-2.0"
      return link;
      // code block
      break;
    case "GNU General Public License v3.0":
      // code block
      break;
    case "MIT License":
      break;
      case "BSD 2-Clause 'Simplified' License":
        // code block
        break;
        case "BSD 3-Clause 'New' or 'Revised'":
          // code block
          break;
        case "Boost Software License 1.0":
            // code block
            break;
        case "No license":
          return "";
              break; 
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseString = license[0].replace(/ /g, "_");
  return `![Static Badge](https://img.shields.io/badge/${licenseString}-blue)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## License: ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}
  
  ## Table of Contents

  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  -[Contribution](#contribution)

  -[Features](#features)

  ## Descrition:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Features:
  ${data.features}
`;
}

module.exports = generateMarkdown; 