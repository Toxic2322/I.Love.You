document.getElementById('yes').addEventListener('click', function() {
    var title = document.getElementById('title');
    if (title.textContent === 'Do you want to be my girlfriend?') {
        document.getElementById('content').style.display = 'none';
        document.getElementById('aboveVideo').style.display = 'block';
        document.getElementById('video').style.display = 'block';
        document.getElementById('belowVideo').style.display = 'block';
    } else if (title.textContent === 'Are you sure? :(') {
        title.textContent = 'Are you really sure?';
    } else if (title.textContent === 'Are you really sure?') {
        document.getElementById('yes').style.display = 'none';
    }
});

document.getElementById('no').addEventListener('click', function() {
    var title = document.getElementById('title');
    var yesButton = document.getElementById('yes');
    if (title.textContent === 'Are you sure? :(' || title.textContent === 'Are you really sure?') {
        title.textContent = 'Do you want to be my girlfriend?';
        yesButton.style.display = 'inline';
    } else if (title.textContent === 'Do you want to be my girlfriend?') {
        title.textContent = 'Are you sure? :(';
    }
});
