

document.querySelector(".menubar").addEventListener("click", function() {
    var linksNav = document.querySelector(".links_nav");
    linksNav.classList.toggle("showing");

    var bxone = document.querySelector(".bx_one");
    var bxtwo = document.querySelector(".bx_two");
    
    // Get the computed style of bx_one
    var style1 = window.getComputedStyle(bxone);
    // Get display style
    var bxoneDisplay = style1.getPropertyValue("display");
    
    if (bxoneDisplay === "none") {
        bxone.style.display = "block";
        bxtwo.style.display = "none";
    } else {
        bxone.style.display = "none";
        bxtwo.style.display = "block";
    }
    
});





const words = ["I'm Frontend Developer", "I'm Backend Developer", "I'm Fullstack Developer"]; // Array of words
const textElement = document.querySelector(".type_g"); 
let wordIndex = 0; 
let letterIndex = 0; 


function type(){
    if(words.length == 2){
        
    }
}


function typeWord() {
    if (wordIndex < words.length) {
        const word = words[wordIndex];
        const currentText = word.substring(0, letterIndex + 1);
        textElement.textContent = currentText;

        if (letterIndex === word.length) {
         
            setTimeout(eraseWord, 500); 
        } else {
            // Type the next letter
            setTimeout(typeWord, 200); 
            letterIndex++;
        }
    } else {
        // All words have been typed
        wordIndex = 0; 
        setTimeout(typeWord, 500); 
    }
}

function eraseWord() {
    if (letterIndex >= 0) {
        const word = words[wordIndex];
        const currentText = word.substring(0, letterIndex);
        textElement.textContent = currentText;

        if (letterIndex === 0 && wordIndex === words.length - 1) {
            wordIndex = 0;
            letterIndex = 0; 
            setTimeout(typeWord, 500); 
        } else if (letterIndex === 0   ) {
            wordIndex++;
            setTimeout(typeWord, 200); 
        } else {
            // Erase the next letter
            setTimeout(eraseWord, 200); 
            letterIndex--;
        }
    }
}


setTimeout(typeWord, 200); 


