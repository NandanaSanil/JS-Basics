function setBackground(color) {
            const screen = document.getElementById("screen");

            if (color === 'red') {
                // Change background to a red-themed image
                screen.style.backgroundImage = "url('https://via.placeholder.com/300x300/FF0000/FFFFFF?text=Red+Image')";
            } else {
                // For other colors, simply set the background color
                screen.style.backgroundImage = ""; // Reset the background image if any
                screen.style.backgroundColor = color;
            }
        }
   