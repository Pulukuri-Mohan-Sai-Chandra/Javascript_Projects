
'use strict'

let randomNumber = Math.floor(Math.random() * 100 % 20) + 1
const comment_node = document.getElementById("comment_result_place");
const input_node = document.getElementById("guess_number_input")
const total_score = document.getElementById("total_score")
const high_score = document.getElementById("high_score");
const total_score_number_area = document.getElementById("total_score_number_area");
const high_score_number_area = document.getElementById("high_score_number_area")
const body_container = document.getElementsByTagName("body")
const question_mark_textarea = document.getElementById("question_mark_textarea")

document.getElementById("again_btn").addEventListener('click', () => {
    input_node.value = ""
    total_score_number_area.innerHTML = 20;
    randomNumber = Math.floor(Math.random() * 100 % 20) + 1
    body_container[0].style.backgroundColor = "white"
    question_mark_textarea.innerHTML = "?"
    question_mark_textarea.style.color = "black"
    comment_node.innerHTML = ""
    body_container[0].style.color = "black"
})
document.getElementById("guess_btn").addEventListener('click', () => {
    if (!input_node.value) {
        comment_node.innerHTML = "Input Should not be empty or text"
        input_node.value = ""
    }
    const user_input = Number.parseInt(input_node.value);
    if (user_input < randomNumber) {
        comment_node.innerHTML = "You guessed a small number guess a large one";
        const currentScore = Number.parseInt(total_score_number_area.innerHTML);
        total_score_number_area.innerHTML = currentScore - 1;
    }
    else if (user_input > randomNumber) {
        comment_node.innerHTML = "You guessed a large number guess smaller one";
        const currentScore = Number.parseInt(total_score_number_area.innerHTML);
        total_score_number_area.innerHTML = currentScore - 1;

    }
    else if (user_input == randomNumber) {
        comment_node.innerHTML = "Yay! you Guessed right"
        high_score_number_area.innerHTML = Math.max(Number.parseInt(high_score_number_area.innerHTML), Number.parseInt(total_score_number_area.innerHTML))
        body_container[0].style.backgroundColor = "#8FD14F"
        question_mark_textarea.innerHTML = randomNumber
        question_mark_textarea.style.color = "white"
        body_container[0].style.color = "white"
    }

})
window.onload = () => {
    input_node.value = ""
    total_score_number_area.innerHTML = 20;
    randomNumber = Math.floor(Math.random() * 100 % 20) + 1
    body_container[0].style.backgroundColor = "white"
    question_mark_textarea.innerHTML = "?"
    question_mark_textarea.style.color = "black"
    body_container[0].style.color = "black"
}