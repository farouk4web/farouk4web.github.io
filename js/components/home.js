// home page


function homeContent(data) {
    var homePage = `
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7">
                                <div class="mainInfo">
                                    <h3>${data.welcomeMsg}</h3>
                                    <h1>${data.developerName}</h1>
                                    <h2>${data.jobTitle}</h2>
                                </div>

                                <div class="socialLinks">
                                    <a href="${data.socialAccounts[0].url}" data-color="${data.socialAccounts[0].mainColor}">
                                        <i class="${data.socialAccounts[0].icon}"></i>
                                    </a>
                                    <a href="${data.socialAccounts[2].url}" data-color="${data.socialAccounts[2].mainColor}" target="_blank">
                                        <i class="${data.socialAccounts[2].icon}"></i>
                                    </a>
                                    <a href="${data.socialAccounts[1].url}" data-color="${data.socialAccounts[1].mainColor}" target="_blank">
                                        <i class="${data.socialAccounts[1].icon}"></i>
                                    </a>
                                </div>
                                
                            </div>
                            <div class="col-sm-5">
                                <div class="userPhoto">
                                    <img src="${data.homeDeveloperPicturSrc}" class="img-responsive center-block">
                                </div>
                            </div>
                        </div>
                    </div>`;

    $(".home").append(homePage);
}
