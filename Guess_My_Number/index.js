
'use strict'

const randomNumber = Math.round(Math.random() * 100 % 20) + 1
const comment_node = document.getElementById("comment_result_place");
const input_node = document.getElementById("guess_number_input")
const total_score = document.getElementById("total_score")
const high_score = document.getElementById("high_score");
const total_score_number_area = document.getElementById("total_score_number_area");
const high_score_number_area = document.getElementById("high_score_number_area")

document.getElementById("again_btn").addEventListener('click',()=>{
    input_node.value = ""
    total_score_number_area.innerHTML = 20; 
})
document.getElementById("guess_btn").addEventListener('click', () => {

    if(!input_node.value){
        comment_node.innerHTML = "Input Should not be empty or text"
        input_node.value = ""
    }
    const user_input = Number.parseInt(input_node.value);
    if(user_input < randomNumber){
        comment_node.innerHTML = "Too Low try guess a larger number";
        const currentScore = Number.parseInt(total_score_number_area.value);
        total_score_number_area.innerHTML = currentScore - 1;
    }
    else if( user_input > randomNumber){
        comment_node.innerHTML = "Too High try guess a smaller number";
        const currentScore = Number.parseInt(total_score_number_area.value);
        total_score_number_area.innerHTML = currentScore - 1;
        
    }
    else{
        comment_node.innerHTML = "Yay! you Guessed right"
        high_score_number_area.innerHTML = Math.max(Number.parseInt(high_score_number_area.value),Number.parseInt(total_score_number_area.value))
    }

})