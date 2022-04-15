// menu Btns


function menuBtns(data) {

    for (var i = 0; i < data.menuLinks.length; i++) {

        $(".navgation .menu ul").append(`
                        <li>
                            <a href="#" data-pageTitle="${ data.menuLinks[i].url}">
                                <i class="${ data.menuLinks[i].icon}"></i> ${data.menuLinks[i].title}
                            </a>
                        </li>`);

    }
}