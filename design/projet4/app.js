const projectDivTitle = document.querySelector(".projectTitle");
const projectDivPhoto = document.querySelector(".projectPhoto");
const projectDivDescription = document.querySelector(".projectDescription");
const projectDivURL = document.querySelector(".projectURL");
const url = "http://localhost:1337";
let allProject = [];
init();

function init(){
    getProject1(/* parameters */)
}

function getProject1(/* parameters */){
    fetch(`${url}/projets/13` /* parameters */)
        .then((data) => data.json())
        .then((result) => {
            allProject = result;
            console.log("allProject", allProject)
            projectDivTitle.innerHTML = allProject.Titre;

            // 1ere FONCTION POUR AFFICHER LA PHOTO DEPUIS LE JSON
            var div = document.createElement('div');
            // console.log(allProject.Photo[0].url);
            div.innerHTML = '';
            div.innerHTML +=
                '<span style="display:inline;"><img class="imgone" src="'+url+allProject.PhotoOne[0].url+'"></span>';
                
            document.getElementById('imageOne').appendChild(div);

            // 2eme FONCTION POUR AFFICHER LA PHOTO DEPUIS LE JSON
            var divT = document.createElement('div');
            divT.innerHTML = '';
            divT.innerHTML +=
                '<span style="display:inline;"><img class="imgtwo" src="'+url+allProject.PhotoTwo[0].url+'"></span>';
            document.getElementById('imageTwo').appendChild(divT);

            // 3eme FONCTION POUR AFFICHER LA PHOTO DEPUIS LE JSON

            var divTh = document.createElement('div');
            divTh.innerHTML = '';
            divTh.innerHTML +=
                '<span style="display:inline;"><img class="imgthree" src="'+url+allProject.PhotoThree[0].url+'"></span>';
            document.getElementById('imageThree').appendChild(divTh);

            projectDivDescription.innerHTML = allProject.Description;


            var projURL = document.createElement('div');
            projURL.innerHTML = '';
            projURL.innerHTML +=
                '<span style="display:inline;"><a class="buttonURL" href="'+allProject.URL_projet+'">&nbsp View Site &nbsp</a></span>';
            document.getElementById('projectURL').appendChild(projURL);
            
        })

        .catch((err) => {
            console.error(err);
        })
}


function renderProject(project){
    let list = [];
    project.forEach(p => {
        const item = `<li>${p.Titre}</li>`;
        list = [...list, item];

    });
    console.log(list);
    projectDiv.innerHTML = `<ul>${list.join("")}</ul>`;
} 
