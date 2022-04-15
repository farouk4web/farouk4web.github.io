// about page


function aboutContent(data) {
    var aboutPage = `
            <div class="container">
                <div class="intro">
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="${data.aboutDeveloperPicturSrc}" alt="UserPhoto" class="userPhoto img-circle img-responsive center-block">
                        </div>
                        <div class="col-sm-8">
                            <div class="mainInfo">
                                <h2>${data.developerName}</h2>
                                <h3>${data.jobTitle}</h3>
                            </div>

                            <div class="summary">
                                <p>
                                    ${data.summary}
                                </p>
                            </div>

                            <div class="socialLinks">
                                ${(function () {

                                    var socialLinks = "";
                                    // get socialAccounts
                                    for (var s = 0; s < data.socialAccounts.length; s++) {
                                        socialLinks = socialLinks +
                                            `<a href="${data.socialAccounts[s].url}" data-color="${data.socialAccounts[s].mainColor}" target="_blank">
                                                <i class="${data.socialAccounts[s].icon}"></i>
                                            </a>`;
                                    }

                                    return socialLinks;
                                })()}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-5">
                        <div class="basicData">
                            
                            <div class="personalInfo">
                                <h3>${data.personalInformationHead}</h3>
                                <div>
                                    <b><i class="icofont-google-map"></i> ${data.addressHead} :</b>
                                    <span>${data.address}</span>
                                </div>
                                <div>
                                    <b><i class="icofont-university"></i> ${data.educationHead} :</b>
                                    <span>${data.education}</span>
                                </div>
                                <div>
                                    <b><i class="icofont-ui-calendar"></i> ${data.dateOfBirthHead} :</b>
                                    <span>${data.dateOfBirth}</span>
                                </div>

                                <div>
                                    <b><i class="icofont-heart"></i> ${data.maritalStatusHead} :</b>
                                    <span>${data.maritalStatus}</span>
                                </div>
                                <div>
                                    <b> <i class="icofont-military"></i> ${data.militaryStatusHead} :</b>
                                    <span>${data.militaryStatus}</span>
                                </div>
                            </div>

                            <div class="languages">
                                <h3>${data.languagesHead}</h3>
                                ${(function () {

                                    var languges = "";
                                    // get languages
                                    for (var i = 0; i < data.languages.length; i++) {

                                        languges = languges +
                                            `<div>
                                                <b><i class="icofont-globe"></i> ${data.languages[i].name}</b>
                                                <span>${data.languages[i].level}</span>
                                             </div>`;
                                    }
                                    return languges;
                                })()}
                            </div>
                            
                            <div class="freelancerBtns">
                                <h3>${data.hireMeHead}</h3>
                                <div class='text-center'>
                                    ${(function () {
                                        var freelancerLinks = "";
                                        // get freelanceSites
                                        for (var f = 0; f < data.freelanceSites.length; f++) {
                                            freelancerLinks = freelancerLinks +
                                                `<a href="${data.freelanceSites[f].url}" class="text-center" target="_blank">
                                                    ${data.freelanceSites[f].siteTilte}
                                                </a>`;
                                        }
                                        return freelancerLinks;
                                    })()}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-sm-7">
                        <div class="skills text-center">
                            <h3 class="text-left">${data.mySkillsHead}</h3>

                            <div class="row">
                            ${(function () {

                                var skills = "";
                                // get skills
                                for (var k = 0; k < data.skills.length; k++) {
                                    skills = skills + `
                                            <div class="col-xs-6">
                                                <div class="item">
                                                    <span>${data.skills[k]}</span>
                                                </div>
                                            </div>
                                    `;
                                }

                                return skills;
                            })()}
                            </div>
                        </div>

                        <div class="inPlanSkills text-center">
                            <h3 class="text-left">${data.inPlanSkillsHead}</h3>

                            <div class="row">
                                ${(function () {

                                    var inPlanSkills = "";
                                    // get skills
                                    for (var k = 0; k < data.inPlanSkills.length; k++) {
                                        inPlanSkills = inPlanSkills + `
                                                        <div class="col-xs-6">
                                                            <div class="item">
                                                                <span>${data.inPlanSkills[k]}</span>
                                                            </div>
                                                        </div>
                                                `;
                                    }

                                    return inPlanSkills;
                                })()}
                            </div>
                        </div>

                    </div>

                    
                </div>

                <div class="personalSkills">
                    <h3>${data.personalSkillsAndHobbiesHead}</h3>
                    <div class='text-center'>
                        ${(function () {
                            var personalSkills = "";
                            // get personal skills
                            for (var p = 0; p < data.personalSkillsAndHobbies.length; p++) {
                                personalSkills = personalSkills +
                                    `<span>${data.personalSkillsAndHobbies[p]}</span>`;
                            }
                            return personalSkills;    
                        })()}
                    </div>
                </div>

                <div class="downloadCvBtn">
                    <a href="${data.cvLink}" download class="siteBtn">
                        <i class="glyphicon glyphicon-download"></i> ${data.downloadCvHead}
                    </a>
                </div>
            </div>`;

    $(".about").append(aboutPage);
}