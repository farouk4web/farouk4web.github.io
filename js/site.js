$(document).ready(function () {

    // get the project data from the json file
    var data;
    $.ajax({
        url: "js/data/projectData.json",
        url: "https://api.npoint.io/c01fc9b0e8aa91218aed",
        type: "get",

        cache: false,
        async: false,

        success: function (response) {
            data = response;
        }
    });


    // set title of site
    $("head title").text(`${data.developerName}`);

    // call main functions to create the content
    menuBtns(data);
    homeContent(data);
    aboutContent(data);
    recentProjectsContent(data);


    // menu button 
    $(".menuBtn").on("click", function () {
        $(".menu").fadeToggle('slow');
    });

    // menu links 
    $(".menu").on("click", "a", function () {
        var pageTitle = $(this).attr("data-pageTitle");

        $("#" + pageTitle).siblings().css("display", "none");
        $("#" + pageTitle).css("display", "block");

        $("head title").text(`${data.developerName} | ${pageTitle}`);

        $(this).parents(".menu").css("display", "none");
    });

    // when click project show all details i modal
    $(".project").on("click", function () {
        
        var projectIndex = $(this).attr("data-projectIndex"),
            projectInJson = data.projects[projectIndex];

        populateProjectModal(projectInJson, data);

        $("#projectModal").modal("show");

    });


    $(".socialLinks a").each(function(){

        
    });

});