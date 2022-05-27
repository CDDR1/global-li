const fetchData = async () => {
    const res = await fetch('https://api-li.computertechclub.com/api/Pages/GetPageLinksByPageID?pageID=2');
    const data = await res.json();

    data.forEach((graph, index) => {
        // Create new grid item to be insrted in the dashboard grid.
        const newGridItem = document.createElement("div");
        newGridItem.classList.add("grid-item");

        // Create the <h2> element that will hold the graph title and append it to the grid item created previously.
        const graphTitle = document.createElement("h2");
        graphTitle.classList.add("graph-title");
        graphTitle.textContent = graph.LinkName;
        newGridItem.appendChild(graphTitle);

        // Create the graph container that will contain the tableau div where the Tableau visualization will be initialized.
        // Append the graph container to the grid item previously created.
        const graphContainer = document.createElement("div");
        graphContainer.classList.add("graph-container");
        newGridItem.appendChild(graphContainer);

        // Create the Tableau viz that will containe the graph. Width and height must be set to 100% so
        // that it is completely responsive. 
        const vizContainer = document.createElement("div");
        vizContainer.id = `vizContainer${index + 1}`;
        vizContainer.style.width = "100%";
        vizContainer.style.height = "100%"; 

        const currGraph = index + 1;
        if (currGraph % 3 === 0 || (currGraph % 3 === 1 && currGraph === data.length)) {
            newGridItem.classList.add("grid-item-large");

        }

        // Append the Tableau div (vizContainer) to the previously created graph container div.
        graphContainer.appendChild(vizContainer);

        // Create the <p> element that will contain the description of the graph and append it to the grid item previously created.
        const graphDescription = document.createElement("p");
        graphDescription.classList.add("graph-description");
        graphDescription.textContent = graph.LinkDescription;
        newGridItem.appendChild(graphDescription);

        // Select the dashboard that contains all the graphs and append the previously created grid item to it. 
        const dashboard = document.querySelector(".dashboard-grid");
        dashboard.appendChild(newGridItem);
            
        const options = {
            hideTabs: true,
        };

        // This is the function that is used to initialize each graph. More info can be found in the Tableau JavaScript API. 
        const viz = new tableau.Viz(vizContainer, graph.LinkUrl, options);
    });
};

window.addEventListener('DOMContentLoaded', fetchData);