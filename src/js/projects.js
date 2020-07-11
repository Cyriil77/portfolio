'use strict';

window.addEventListener('load', () => {

    const projectLists = document.querySelectorAll('.ctnr-project');

    // Div to compare on hover (ctnr-projet)
    const eLChildrenStudentManager = projectLists[0];
    const eLChildrenKwick = projectLists[1];
    const eLChildrenWebGL = projectLists[2];
    const eLChildrenGlobalMagazine = projectLists[3];
    const eLChildrenCrud = projectLists[4];
    const eLChildrenLast = projectLists[5];

    if (window.innerWidth > 1200) {

        // Student manager

        eLChildrenStudentManager.childNodes[1].childNodes[0].appendChild(eLChildrenStudentManager.childNodes[0]);
        eLChildrenStudentManager.childNodes[0].childNodes[0].appendChild(eLChildrenStudentManager.childNodes[1]);

        // // Kwick
        eLChildrenKwick.childNodes[1].childNodes[0].appendChild(eLChildrenKwick.childNodes[0]);
        eLChildrenKwick.childNodes[0].childNodes[0].appendChild(eLChildrenKwick.childNodes[1]);

        // // Webgl
        eLChildrenWebGL.childNodes[1].childNodes[0].appendChild(eLChildrenWebGL.childNodes[0]);
        eLChildrenWebGL.childNodes[0].childNodes[0].appendChild(eLChildrenWebGL.childNodes[1]);

        // // eLChildrenGlobalMagazine
        eLChildrenGlobalMagazine.childNodes[1].childNodes[0].appendChild(eLChildrenGlobalMagazine.childNodes[0]);
        eLChildrenGlobalMagazine.childNodes[0].childNodes[0].appendChild(eLChildrenGlobalMagazine.childNodes[1]);

        // // eLChildrenCrud
        eLChildrenCrud.childNodes[1].childNodes[0].appendChild(eLChildrenCrud.childNodes[0]);
        eLChildrenCrud.childNodes[0].childNodes[0].appendChild(eLChildrenCrud.childNodes[1]);

        // // // eLChildrenLast
        eLChildrenLast.childNodes[1].childNodes[0].appendChild(eLChildrenLast.childNodes[0]);
        eLChildrenLast.childNodes[0].childNodes[0].appendChild(eLChildrenLast.childNodes[1]);

        for (let i = 0; i < projectLists.length; i++) {

            projectLists[i].addEventListener('mouseenter', () => {

                if (projectLists[i] == eLChildrenStudentManager) {
                    const childrenElHover = eLChildrenStudentManager.childNodes[0].childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'block';
                        element.parentNode.style.display = 'flex';
                    })
                }
                if (projectLists[i] == eLChildrenKwick) {
                    const childrenElHover = eLChildrenKwick.childNodes[0].childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'block';
                        element.parentNode.style.display = 'flex';
                    })
                }
                if (projectLists[i] == eLChildrenWebGL) {
                    const childrenElHover = eLChildrenWebGL.childNodes[0].childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'block';
                        element.parentNode.style.display = 'flex';
                    })
                }
                if (projectLists[i] == eLChildrenGlobalMagazine) {
                    const childrenElHover = eLChildrenGlobalMagazine.childNodes[0].childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'block';
                        element.parentNode.style.display = 'flex';
                    })
                }
                if (projectLists[i] == eLChildrenCrud) {
                    const childrenElHover = eLChildrenCrud.childNodes[0].childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'block';
                        element.parentNode.style.display = 'flex';
                    })
                }
                if (projectLists[i] == eLChildrenLast) {
                    const childrenElHover = eLChildrenLast.childNodes[0].childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'block';
                        element.parentNode.style.display = 'flex';
                    })
                }

            })

            projectLists[i].addEventListener('mouseleave', () => {

                if (projectLists[i] == eLChildrenStudentManager) {
                    const childrenElHover = eLChildrenStudentManager.childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'none';
                    })
                }
                if (projectLists[i] == eLChildrenKwick) {
                    const childrenElHover = eLChildrenKwick.childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'none';
                    })
                }
                if (projectLists[i] == eLChildrenWebGL) {
                    const childrenElHover = eLChildrenWebGL.childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'none';
                    })
                }
                if (projectLists[i] == eLChildrenGlobalMagazine) {
                    const childrenElHover = eLChildrenGlobalMagazine.childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'none';
                    })
                }
                if (projectLists[i] == eLChildrenCrud) {
                    const childrenElHover = eLChildrenCrud.childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'none';
                    })
                }
                if (projectLists[i] == eLChildrenLast) {
                    const childrenElHover = eLChildrenLast.childNodes[0].childNodes;
                    childrenElHover.forEach(element => {
                        element.style.display = 'none';
                    })
                }

            })

        }

    }
});



