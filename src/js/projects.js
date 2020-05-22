'use strict'
// 
// 
// 
// 
// 
// ------------------------------------------------------------Problème avec webgl -> à finir jeudi
// 
// 
// 
// 
// 
// 
window.addEventListener('load', () => {
    // Project hover
    const projectLists = document.querySelectorAll('.ctnr-project')

    if (window.innerWidth >= 1200) {


        const projectStudentManager = projectLists[0];
        const projectKwickChat = projectLists[1];
        const projectWebGl = projectLists[2];
        const projectGlobalMagazine = projectLists[3];
        const projectCrud = projectLists[4];
        const projectTest = projectLists[5];

        // if (projectStudentManager) {
        // const children = projectStudentManager.childNodes;
        // const nextElement = projectKwickChat.childNodes[1];

        // children.forEach(element => {
        //     nextElement.appendChild(element);
        // });
        // }

        // if (projectKwickChat) {
        //     const children = projectKwickChat.childNodes;
        //     const nextElement = projectWebGl.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element);
        //     });
        // }

        // if (projectWebGl) {
        //     const children = projectWebGl.childNodes;
        //     const nextElement = projectTest.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element)
        //     });
        // }

        // if (projectGlobalMagazine) {
        //     const children = projectGlobalMagazine.childNodes;
        //     const nextElement = projectCrud.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element);
        //     });
        // }

        // if (projectCrud) {
        //     const children = projectCrud.childNodes;
        //     const nextElement = projectTest.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element);
        //     });
        // }

        for (let i = 0; i < projectLists.length; i++) {



            projectLists[i].addEventListener('mouseenter', () => {
                // let isAppend = false

                // // webgl to last
                // if (projectLists[i] == projectLists[2]) {

                //     const children = projectLists[2].childNodes;
                //     const nextElement = projectLists[5].childNodes[1];

                //     if (isAppend == false) {

                //         children.forEach(element => {
                //             nextElement.appendChild(element);
                //             isAppend = true;
                //         });

                //     }

                // }
            })

            projectLists[i].addEventListener('mouseleave', () => {

                if (projectLists[i] == projectLists[2]) {
                    // console.log(projectTest.childNodes[0]);
                }
            })

        }

    }
});



