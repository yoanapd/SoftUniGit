function projectsCreation(input) {
 

    let name = input["0"];
        let countProjects = Number(input[1]);
        let needHours = 3 * countProjects;

        console.log(`The architect ${name} will need ${needHours} hours to complete ${countProjects} project/s.`)


}
projectsCreation(["Niki", 8])

