const API_KEY = "YOUR API KEY HERE"

const submitIcon = document.querySelector("#submit-icon")

function getImages() {
    try {
        fetch ('https://api.openai.com/v1/images/generations')
    }
    catch (error) {
        console.error(error)
    }
    
}

submitIcon.addEventListener('click', getImages) 



