const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');


    if(q1 && q2){
        let score = 0;

        if(q1.value == 'jupiter'){
            score++;
        }
        if(q2.value == 'NovaZelandia'){
            score++;
        }
        if(q3.value == 'dna'){
            score++;
        }
        if(q4.value == 'china'){
            score++;
        }
        if(q5.value == 'SaoPaulo'){
            score++;
        }

        alert('Você acertou ' + score + ' de 5')
    }else{
        alert('Responda todas questões!')
    }
})
