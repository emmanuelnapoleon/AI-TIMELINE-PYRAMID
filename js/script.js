// ===================================
// 1. MILESTONE INFORMATION
// ===================================

// We will add the researched information
// for all 18 milestones later.

const milestones = {
    1: {
        year: "To be added",
        event: "Milestone 1",
        subfield: "Foundations of AI",
        what: "Historical information will be added.",
        significance: "The significance will be added.",
        impact: "The real-world impact will be added."
    }
};


// ===================================
// 2. MILESTONE CATEGORIES
// ===================================

// Each milestone belongs to a particular
// stage in the development of AI.

function getSubfield(number) {

    if (number >= 1 && number <= 3) {
        return "Foundations of AI";
    }

    if (number >= 4 && number <= 8) {
        return "Symbolic AI & Expert Systems";
    }

    if (number >= 9 && number <= 14) {
        return "Machine Learning & Deep Learning";
    }

    if (number >= 15 && number <= 17) {
        return "Generative AI & LLMs";
    }

    if (number === 18) {
        return "Future of AI";
    }

    return "Unknown category";
}


// ===================================
// 3. SELECT HTML ELEMENTS
// ===================================

// Find the pyramid containing the buttons.

const pyramid = document.querySelector(".pyramid");


// Find the information panel.

const detailsPanel = document.querySelector("#milestone-details");


// ===================================
// 4. DISPLAY MILESTONE INFORMATION
// ===================================

function displayMilestone(number) {

    // Find the milestone information.

    const milestone = milestones[number];


    // If information has not been researched,
    // create temporary information for display.

    const details = milestone || {
        year: "To be added",
        event: `Milestone ${number}`,
        subfield: getSubfield(number),
        what: "Historical information will be added.",
        significance: "The significance will be added.",
        impact: "The real-world impact will be added."
    };


    // Update the information panel.

    detailsPanel.innerHTML = `
        <h3>${details.event}</h3>

        <p><strong>Year:</strong> ${details.year}</p>

        <p><strong>Subfield:</strong> ${details.subfield}</p>

        <p class="detail-label">What happened?</p>
        <p>${details.what}</p>

        <p class="detail-label">Why it matters</p>
        <p>${details.significance}</p>

        <p class="detail-label">Real-world impact</p>
        <p>${details.impact}</p>
    `;
}


// ===================================
// 5. LISTEN FOR BUTTON CLICKS
// ===================================

// Listen for clicks inside the pyramid.

pyramid.addEventListener("click", function(event) {

    // Check whether the clicked element is a milestone button.

    const button = event.target.closest(".milestone");

    if (!button) {
        return;
    }


    // Get the milestone number from its ID.

    const milestoneNumber = Number(
        button.id.replace("milestone-", "")
    );


    // Check that the number is valid.

    if (
        !Number.isInteger(milestoneNumber) ||
        milestoneNumber < 1 ||
        milestoneNumber > 18
    ) {
        return;
    }


    // Display the selected milestone information.

    displayMilestone(milestoneNumber);


    // ===================================
    // 6. HIGHLIGHT THE SELECTED BUTTON
    // ===================================

    // Remove the active class from all buttons.

    const milestoneButtons = pyramid.querySelectorAll(".milestone");

    milestoneButtons.forEach(function(otherButton) {
        otherButton.classList.remove("active");
    });


    // Highlight the button that was clicked.

    button.classList.add("active");

});