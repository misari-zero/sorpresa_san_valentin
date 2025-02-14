function openLetter() {
    const envelope = document.querySelector('.envelope');
    const letterText = document.getElementById('letterText');
    
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        letterText.innerHTML = 'Feliz San Valentín, mi amor ❤️. Eres lo mejor que me ha pasado y quiero estar contigo siempre.';
    } else {
        letterText.innerHTML = '';
    }
}

function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
    createHearts();
}

function createHearts() {
    const heartsContainer = document.querySelector('.heartss');
    heartsContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        //let heart = document.createElement('img');
        heart.innerHTML = '😍';
        //heart.src='img/capibara.png'; //Ruta de la imagen
        //heart.alt='Capibara';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';

        //Definir un tamaño aleatorio entre 20px y 50px
        //let size = Math.random() * 50 + 40;
        //heart.style.width = size + 'px';
        //heart.style.height = 'auto';
        heart.style.fontSize = Math.random() * 50 + 20 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
        
        heartsContainer.appendChild(heart);

        // Desfase de tiempo para que no aparezcan todos a la vez
        setTimeout(() => {
            heart.style.transform = 'translateY(-100px)';
        }, Math.random() * 500);
    }
}
/*
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    heartsContainer.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        //heart.style.left = Math.random() * 100 + 'px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animation = 'float 2s infinite';
        heartsContainer.appendChild(heart);
    }
}*/
