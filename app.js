const API_KEY = "YOUR API KEY HERE"

const submitIcon = document.querySelector("#submit-icon")

function getImages() {
    const options = {
        method: "POST",
        headers : {
            "Authorization": `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body : JSON.stringify({
            "prompt" : "",
            "n" : 4,
            "size" : "1024x1024"
        })
    }
    try {
        fetch ('https://api.openai.com/v1/images/generations', options)
    }
    catch (error) {
        console.error(error)
    }
    
}

submitIcon.addEventListener('click', getImages) 



