

document.addEventListener("DOMContentLoaded", function() {
    const codeElement = document.getElementById("code");
    const copyButton = document.querySelector(".copy-button");
    const saveButton = document.querySelector(".save-button");
    const lockButton = document.querySelector(".lock-button");

    // Sample code for demonstration
   // codeElement.textContent = "function greet() {\n    console.log('Hello, World!');\n}";

    // Copy button functionality
    copyButton.addEventListener("click", function() {
        const codeText = codeElement.textContent;
        navigator.clipboard.writeText(codeText).then(function() {
            alert("Code copied to clipboard!");
        }).catch(function(err) {
            console.error("Failed to copy: ", err);
        });
    });

    // Save button functionality (dummy functionality, you can replace it with an actual save logic)
    saveButton.addEventListener("click", function() {
        alert("Code saved!");
    });

    // Lock/Unlock button functionality
    lockButton.addEventListener("click", function() {
        codeElement.contentEditable = codeElement.contentEditable === "true" ? "false" : "true";
        lockButton.textContent = codeElement.contentEditable === "true" ? "Lock" : "Unlock";
    });
});
