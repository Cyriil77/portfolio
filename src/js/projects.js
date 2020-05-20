'use strict'

window.addEventListener('load', () => {
    // Project hover
    const projectLists = document.querySelectorAll('.ctnr-project')

    if (window.innerWidth >= 1200) {


        const projectStudentManager = projectLists[0]
        const projectKwickChat = projectLists[1]
        const projectWebGl = projectLists[2]
        const projectGlobalMagazine = projectLists[3]
        const projectCrud = projectLists[4]
        const projectTest = projectLists[5]

        // if (projectStudentManager) {
        // const children = projectStudentManager.childNodes;
        // const nextElement = projectKwickChat.childNodes[1];

        // children.forEach(element => {
        //     nextElement.appendChild(element);
        // });
        // }

        // if (projectKwickChat) {
        //     const children = projectKwickChat.childNodes
        //     const nextElement = projectWebGl.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element)
        //     });
        // }

        // if (projectWebGl) {
        //     const children = projectWebGl.childNodes
        //     const nextElement = projectTest.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element)
        //     });
        // }

        // if (projectGlobalMagazine) {
        //     const children = projectGlobalMagazine.childNodes
        //     const nextElement = projectCrud.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element)
        //     });
        // }

        // if (projectCrud) {
        //     const children = projectCrud.childNodes
        //     const nextElement = projectTest.childNodes[1];

        //     children.forEach(element => {
        //         nextElement.appendChild(element)
        //     });
        // }

        for (let i = 0; i < projectLists.length; i++) {

            let isAppend = false

            // Student manager to kwick chat
            if (projectLists[i] == projectLists[0]) {

                const children = projectLists[0].childNodes;
                const nextElement = projectLists[1].childNodes[1];

                if (isAppend == false) {

                    children.forEach(element => {
                        nextElement.appendChild(element);
                        isAppend = true
                    });

                }

            }

            // Kwick chat to webgl
            if (projectLists[i] == projectLists[1]) {

                const children = projectLists[1].childNodes;
                const nextElement = projectLists[2].childNodes[1];

                if (isAppend == false) {

                    children.forEach(element => {
                        nextElement.appendChild(element);
                        isAppend = true
                    });

                }

            }

            // webgl to last
            if (projectLists[i] == projectLists[2]) {

                const children = projectLists[2].childNodes;
                const nextElement = projectLists[5].childNodes[1];

                if (isAppend == false) {

                    children.forEach(element => {
                        nextElement.appendChild(element);
                        isAppend = true
                    });

                }

            }

            //Global to crud
            if (projectLists[i] == projectLists[3]) {

                const children = projectLists[3].childNodes;
                const nextElement = projectLists[4].childNodes[1];

                if (isAppend == false) {

                    children.forEach(element => {
                        nextElement.appendChild(element);
                        isAppend = true
                    });

                }

            }

            projectLists[i].addEventListener('mouseenter', () => {

            })

            projectLists[i].addEventListener('mouseleave', () => {

            })

        }

    }
});



