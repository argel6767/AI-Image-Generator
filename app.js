const API_KEY = "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"

const submitIcon = document.querySelector("#submit-icon")

const inputElement =  document.querySelector("input")

async function getImages() {
    const options = {
        method: "POST",
        headers : {
            "Authorization": `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body : JSON.stringify({
            "prompt" : inputElement.value,
            "n" : 4,
            "size" : "1024x1024"
        })
    }

    //fixx
    try {
       const response =  await fetch ('https://api.openai.com/v1/images/generations', options)
       console.log(await response.json())
    }
    catch (error) {
        console.error(error)
    }
    
}

submitIcon.addEventListener('click', getImages)



