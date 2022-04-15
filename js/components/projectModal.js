// populate project details in modal


function populateProjectModal(projectInJson, data) {

    var projectModal = `  
            <div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-sm-5">

                                    <div class="title">
                                        <h3>${projectInJson.title}</h3>
                                    </div>

                                    <div class="description">
                                        <h4>${data.descriptionHead}</h4>
                                        <p>
                                            ${projectInJson.description}
                                        </p>
                                    </div>

                                    <div class="technologies">
                                        <h4>${data.technologiesHead}</h4>
                                        
                                        ${(function () {
                                            var usedTechnologies = "";
                                            for (var i = 0; i < projectInJson.technologies.length; i++) {
                                                usedTechnologies =usedTechnologies + `<span>${projectInJson.technologies[i]}</span>`;
                                            }
                                            return usedTechnologies;
                                        })()}

                                    </div>

                                    <div class="copyrights">
                                        <h4>${data.copyrightsHead}</h4>
                                        <p>
                                            ${projectInJson.copyrights}
                                        </p>
                                    </div>
                                    <div class="projectLink">
                                    ${(function(){
                                        if(projectInJson.projectLink === "#"){
                                            return `
                                            <a href='${projectInJson.projectLink}' class='siteBtn btn disabled' title='not live yet'>
                                                Project Link <i class='glyphicon glyphicon-eye-close'></i>
                                            </a>`
                                        } else {
                                            return `<a href='${projectInJson.projectLink}' class='siteBtn' target='_blank'>Project Link</a>`
                                        }
                                    })()}
                                    </div>
                                </div>

                                <div class="col-sm-7">


                                    <div id="projectPhotosCarousel" class="carousel slide" data-ride="carousel" data-interval="2500">
                                       
                                        <!-- Wrapper for slides -->
                                        <div class="carousel-inner" role="listbox">
                                           ${(function(){

                                                var sliderImages= "";
                                                for (var index = 0; index < projectInJson.photos.length; index++) {
                                                    sliderImages = sliderImages +

                                                            `<div class="${(function () {
                                                            if (index === 0) {
                                                                return 'item active';
                                                            }
                                                            return 'item';
                                                        })()}">
                                                                <img src="${projectInJson.photos[index].url}" alt="">
                                            
                                                                <div class="carousel-caption">
                                                                    ${projectInJson.photos[index].caption}
                                                                </div>
                                                            </div>`;
                                                }
                                                return sliderImages;
                                           })()}
                                        </div>

                                        <!-- Controls -->
                                        <a class="left carousel-control" href="#projectPhotosCarousel" role="button" data-slide="prev">
                                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="right carousel-control" href="#projectPhotosCarousel" role="button" data-slide="next">
                                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>

                                    <div class="developerInfo">
                                        <div>
                                            <span class="sale">
                                                <i class="icofont-sale-discount"></i>
                                                ${data.saleHead}
                                            </span>
                                            <b>${projectInJson.sale}</b>
                                        </div>
                                        <div>
                                            <span>${data.designedByHead}</span>
                                            <b>${projectInJson.designedBy}</b>
                                        </div>
                                        <div>
                                            <span>${data.devlopedByHead}</span>
                                            <b>${projectInJson.devlopedBy}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">
                                ${data.okIloveItBtn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;

    $(".recentProjects .container .modal").remove();
    $(".recentProjects .container").append(projectModal);
    $('.carousel').carousel();
}