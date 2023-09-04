(function(){
    //Para tomar todos los objetos del DOM con la clase o id que vamos a poner, se va a colver un array cuando se le pone los 3 puntos antes y los corchetes
    const titleQuestion=[...document.querySelectorAll('.question_title')];

    titleQuestion.forEach(question=>{
        question.addEventListener('click', ()=>{
            let height=0;
            //Toma la respuesta de la pregunta
            let answer=question.nextElementSibling;
            let addPadding=question.parentElement.parentElement;


            addPadding.classList.toggle('question_padding--add');
            question.children[0].classList.toggle('question_arrow--rotate');
            
            if(answer.clientHeight === 0){
                height=answer.scrollHeight;
            }

            answer.style.height=`${height}px`;
        });
    })
})();