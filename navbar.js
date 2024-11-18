// Menu icon
const icon = document.querySelector('.navbar-phone span');

// Modal
const modal = document.querySelector('.modal');

let open = 0;

icon.addEventListener('click', function(){
    modal.classList.toggle('modal-down');
    if (open == 0)
    {
        open = 1;
        icon.innerText = "close";
        icon.style.color = "var(--background)";
    }
    else
    {
        open = 0;
        icon.innerText = "menu";
        icon.style.color = "var(--text)";
    }
});