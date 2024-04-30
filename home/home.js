function code_red_viewmore() {
    window.location="/code-red/guns.html";
}

function code_purple_viewmore() {
    window.location="/code-purple/monitoring-device.html";
}

function code_yellow_viewmore() {
    window.location="/code-yellow/clean-up.html";
}

function code_green_viewmore() {
    window.location="/code-green/owners-info.html";
}

document.addEventListener('DOMContentLoaded', function() {
    var logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('token');
    window.location.href = '/index/index.html';
    });
});