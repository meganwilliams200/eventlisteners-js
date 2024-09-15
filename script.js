// Function to show message
function showMessage(event) {
    const messageId = message${event.target.id.slice(-1)};
    document.getElementById(messageId).style.display = 'block';
}

// Function to hide message
function hideMessage(event) {
    const messageId = message${event.target.id.slice(-1)};
    document.getElementById(messageId).style.display = 'none';
}

// Function to hide button
function hideButton(event) {
    event.target.style.display = 'none';
}

// Adding event listeners to buttons
document.getElementById('button1').addEventListener('click', changeColor);
document.getElementById('button1').addEventListener('mouseover', showMessage);
document.getElementById('button1').addEventListener('mouseout', hideMessage);
document.getElementById('button1').addEventListener('dblclick', hideButton);

document.getElementById('button2').addEventListener('click', changeColor);
document.getElementById('button2').addEventListener('mouseover', showMessage);
document.getElementById('button2').addEventListener('mouseout', hideMessage);
document.getElementById('button2').addEventListener('dblclick', hideButton);

document.getElementById('button3').addEventListener('click', changeColor);
document.getElementById('button3').addEventListener('mouseover', showMessage);
document.getElementById('button3').addEventListener('mouseout', hideMessage);
document.getElementById('button3').addEventListener('dblclick', hideButton);