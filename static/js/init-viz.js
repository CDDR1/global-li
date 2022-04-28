// TESTING IF THIS IS GOING TO WORK
const urls = ["https://public.tableau.com/views/Top10LIFDIInvestorsbycountry/Bycountry", 
"https://public.tableau.com/views/LIFDIEmploymentbycountry/Bycountry", 
"https://public.tableau.com/views/LIFDIEmployment/LIFDIEmployment"];

const fetchUrls = urls => {
    urls.forEach((url, index) => {
        const containerDiv = document.createElement("div");
        containerDiv.id = `vizContainer${index + 1}`;
        containerDiv.style.width = "100%";
        containerDiv.style.height = "100%";
    
        const dashboardContainers = document.querySelectorAll('.dashboard-container');
        dashboardContainers[index].appendChild(containerDiv);
    
        const options = {
            hideTabs: true
        };
        const viz = new tableau.Viz(containerDiv, url, options);
    });
};
window.addEventListener('DOMContentLoaded', fetchUrls(urls));

//==================================================================================================
// const initViz = () => {
//     const containerDiv1 = document.getElementById("vizContainer1"),
//         url = "https://public.tableau.com/views/Top10LIFDIInvestorsbycountry/Bycountry",
//         options = {
//             hideTabs: true
//         };
//     const viz = new tableau.Viz(containerDiv1, url, options);


//     const containerDiv2 = document.getElementById("vizContainer2"),
//     url2 = "https://public.tableau.com/views/LIFDIEmploymentbycountry/Bycountry",
//     options2 = {
//         hideTabs: true
//     };
//     const viz2  = new tableau.Viz(containerDiv2, url2, options);

//     const containerDiv3 = document.getElementById("vizContainer3"),
//     url3 = "https://public.tableau.com/views/LIFDIEmployment/LIFDIEmployment",
//     options3 = {
//         hideTabs: true
//     };
//     const viz3 = new tableau.Viz(containerDiv3, url3, options);
// }

// window.addEventListener('DOMContentLoaded', initViz);

//==================================================================================================

// Let's try fetching the API here...
// FOR REFERENCE: data[0].PageLink[0].LinkName
// const createGridItem = (title, graph, description, index) => {
//     const gridItem = document.createElement('div');
//     gridItem.classList.add('grid-item');

//     const titleElement = document.createElement('h2');
//     titleElement.classList.add('graph-title');
//     titleElement.textContent = title;
//     gridItem.appendChild(titleElement);

//     const graphContainer = document.createElement('div');
//     graphContainer.classList.add('graph-container');
//     graphContainer.innerHTML = graph;
//     gridItem.appendChild(graphContainer);

//     const descriptionElement = document.createElement('p');
//     descriptionElement.classList.add('graph-description');
//     descriptionElement.textContent = description;
//     gridItem.appendChild(descriptionElement);

//     if ((index + 1) % 3 === 0) {
//         gridItem.classList.add('grid-item-large');
//     }

//     const grid = document.querySelector('.dashboard-grid');
//     grid.appendChild(gridItem);
// };

// const fetchData = () => {
//     fetch('https://api-li.computertechclub.com/api/Pages/GetallPages')
//         .then(res => res.json())
//         .then(data => {
//             data[0].PageLink.forEach((item, index) => {
//                 createGridItem(item.LinkName, item.LinkUrl, item.LinkDescription, index);
//             });
//         })
//         .catch(err => console.log(err));
// };

// window.addEventListener('DOMContentLoaded', fetchData);