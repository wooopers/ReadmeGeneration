// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //https://img.shields.io/badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let LicenseName;
  switch (license) {
    case "MIT":
      LicenseName = "MT";
      break;
}
if (license) {
  return ``;
}else {
  return ``;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return '${renderLicenseBadge(response.license)}'
  # ${response.title}

  ## Table of Contents  
  * [Description](#description)
  ${renderLicenseLink(response.license)}

}   
 
  ## Description
  ${response.description}

  ![${response.imageALT}](${response.imageURL})

`;
}

module.exports = generateMarkdown;
