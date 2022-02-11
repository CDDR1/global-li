const initViz = () => {
    const containerDiv = document.getElementById('vizContainer');
    url = 'https://public.tableau.com/views/LIFDIDashboard/FDIDashboard';
    const viz = new tableau.Viz(containerDiv, url);
};

window.addEventListener('DOMContentLoaded', initViz);