// recent projects page


function recentProjectsContent(data) {

    var recentProjects = `
            <div class="container">
                <h2 class="text-center">${data.recentProjectsHead}</h2>
                <div class="row allProjects">

                    ${(function () {
                        var projects = "";

                        for (var i = 0; i < data.projects.length; i++) {

                            projects = projects +
                                `<div class="col-sm-4">
                                    <div class="project" data-projectIndex="${data.projects[i].index}" data-projectPicture="${data.projects[i].photos[0].url}">
                                        <div class="overlay">
                                            <span class="sale"><i class="icofont-sale-discount"></i> ${data.projects[i].sale}</span>
                                            <div class="details">
                                                <h3>${data.projects[i].title}</h3>
                                                <p>
                                                    ${data.projects[i].description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }

                        return projects;
                    })()}

                </div>
            </div>`;

    $(".recentProjects").append(recentProjects);


    //set project picture as background
    $(".project").each(function () {
        $(this).css("backgroundImage", `url(${$(this).attr("data-projectPicture")}`);
    });

}

  