//Your API Key goes here
const API_KEY = "API_KEY"

//various queries for the needed hmtl element in index
const submitIcon = document.querySelector("#submit-icon")
const inputElement =  document.querySelector("input")
const imageSection = document.querySelector(".images-section")

//async arror function
const getImages = async() => {
    //request body
    const options = {
        method: "POST",
        headers : {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            prompt : inputElement.value,
            n : 4,
            size : "1024x1024"
        })
    }
    //try to fetch OpenAI API
    try {
        const response =  await fetch ('https://api.openai.com/v1/images/generations', options)
        const pictures =  await response.json()
        //once response is back run this code
        //check for the images and then attach them to new containers
        pictures?.data.forEach(pictureObject => {
            const imageContainer = document.createElement('div')
            //create a image-container class
            imageContainer.classList.add('image-container')
            const imageElement = document.createElement('img')
            //add each img element with the src attribute with the url of the picture
            imageElement.setAttribute('src', pictureObject.url)
            //put each image in imageContainer and put the imageContainer
            //in imageSection
            imageContainer.append(imageElement)
            imageSection.append(imageContainer)
       });
    }
    catch (error) { //catch error if the API request fails and print error
        console.error(error)
    }
    
}

//do the actual API fetch when the submit icon is clicked
submitIcon.addEventListener('click', getImages)



