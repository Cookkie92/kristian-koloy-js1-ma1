const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// var hello = "hello"

// //Question 1

const cat = {
    complain: function() {
        console.log("meow");
    }
        
    
}
cat.complain();

// //Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// console.log(heading)

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    //console.dir(paragraphs[i].innerHTML);

    paragraphs[i].style.color = "red";
}


// //Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `
    <p>New paragraph</p>
`;
resultsContainer.style.background = "yellow";

//console.log(resultsContainer);

// //Question 7

function findCats (list){
    for(let i = 0; i < list.length; i++){
        // console.log(list[i].name);
    }
}

findCats(cats);

//Question 8


function createCats(cats){
    
    let kittens = "";

    for(let i = 0; i < cats.length; i++){

        let age = "Age unknown";

        if(cats[i].age){
            age = cats[i].age;
        }

        kittens +=`<div>
                    <h5>${cats[i].name}</h5>
                    <p>${age}</p>
                </div>
    `;
    }
    const finalHtml =  kittens

    return finalHtml;
}
const newHtml = createCats(cats);

console.log(newHtml);

const container = document.querySelector(".cat-container");

container.innerHTML = newHtml;

// this is wrong, rewrite code tomorrow

// const container = document.querySelector(".cat-container");

// console.log();

// let html = "";

// function createCats(){
//     for(let i = 0; i < cats.length; i++){

//         let age = "Age unknown";

//         if(cats[i].age){
//             age = cats[i].age;
//         }
//         html += `<div>
//                     <h5>${cats[i].name}</h5>
//                     <p>${age}</p>
        
//                 </div>
//         `;
//     }
//     container.innerHTML = html;
//     console.log(html);
// }



// createCats();






// function createCats(){
//     let html =""
//     for(let i = 0; i < cats.length; i++){
//         let ageNot = "Uknown age";
//         if (cats[i].age) {
//             catsNot = cats[i].age;

//         }
//         html += `<div>
//             <h5>${cats[i].name}</h5>
//             <p>Age: ${cats[i].age}</p>
//         </div>
//         `;
//     }
//     return html;
// }
// createCats();


 // kittens = kittens + "<h5>" + cats[i].name + cats[i].age +  "</h5>";
        // console.log(kittens);
