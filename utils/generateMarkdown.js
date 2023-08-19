
// Returns the license link for each license option
// If there is no license, it returns an empty string

function renderLicenseLink(license) {
  var link;
  license = license[0];
  switch(license) {
    case "Apache License 2.0":
      link = "## License Info: https://opensource.org/licenses/Apache-2.0"
      return link;
      break;
    case "GNU General Public License v3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0.en.html"
      return link;
      break;
    case "MIT License":
      link = "https://opensource.org/license/mit/"
      return link;
      break;
      case "BSD 2-Clause 'Simplified' License":
        link = "https://opensource.org/license/bsd-2-clause/"
      return link;
        break;
        case "BSD 3-Clause 'New' or 'Revised'":
          link = "https://opensource.org/license/bsd-3-clause/"
      return link;
          break;
        case "Boost Software License 1.0":
          link = "https://www.boost.org/users/license.html"
          return link;
            break;
        case "No license":
          return "";
              break; 
    default:
      return "";
  }
}

// Returns the license section and returns a license badge of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  var licenseString = license[0].replace(/ /g, "_");
  return `![Static Badge](https://img.shields.io/badge/${licenseString}-blue)`
}

// Generates markdown for README
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