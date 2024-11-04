function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    
    xhr.open("GET", url, true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const page = pages[Object.keys(pages)[0]]; 
            const extract = page.extract; 
            
            callback(extract); 
        } else {
            console.error("Failed to fetch Wikipedia article");
        }
    };
    
    xhr.onerror = function() {
        console.error("An error occurred during the request");
    };
    
    xhr.send();
}

queryWikipedia(createElement);