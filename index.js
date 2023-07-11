// Fetch the data from 'data.json' file
fetch('data.json') 
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector(".summary-container");
        const btn = document.querySelector(".btn");

        // For each item in the fetched data array
        data.forEach(item => {
            // Create a new div element
            const div = document.createElement("div");
             // Add the class 'summary-blocks' to the div
            div.classList.add("summary-blocks");
            // Set the id of the div to the lowercased category of the item
            div.id = item.category.toLowerCase();
            // Set the innerHTML of the div to the HTML string below
            div.innerHTML = `
                <img src="${item.icon}" alt="" class="traits-img">
                <p class="trait">${item.category}</p>
                <p class="out-of-hundred"><span class="score">${item.score}</span> / 100</p>
            `;
            container.insertBefore(div, btn);
        });

        document.querySelector(".result-container").classList.remove("initial-slide-left");
        document.querySelector(".summary-container").classList.remove("initial-slide-right");
        document.querySelector(".result-container").classList.add("slide-in-left");
        document.querySelector(".summary-container").classList.add("slide-in-right");
    })
    // If there's an error while fetching the data
    .catch(err => {
        console.log("Error reading data " + err)
        
        // Create a new paragraph element and set the textContent of the paragraph to the error message
        let error = document.createElement("p");
        error.textContent = "An error occurred while fetching the data.";
        container.insertBefore(error, btn);
    });
