const sidediv = document.getElementById('sidebar');
const content = document.getElementById('content');
const sidebarul = document.getElementById('sidebar-ul');


function openSidebar() {
    if (sidediv.hasAttribute('data-active') == true) {
        sidediv.style.width = '0px';
        content.style.marginLeft = '0px';
        sidediv.removeAttribute('data-active');
    } else {
        sidediv.style.width = '250px';
        content.style.marginLeft = '250px';
        sidediv.setAttribute('data-active', 'true');
    }
}

function closeSidebar() {
    sidediv.style.width = '0';
    content.style.marginLeft = '0';
}