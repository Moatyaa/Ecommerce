var quote = document.getElementById("quote")
var author = document.getElementById("author")
var random = 0
var prevRandom = 0
var data = [
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch" 
    },    
    {
        quote: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        author: "― William W. Purkey" 
    },    
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss" 
    },    
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West" 
    },    
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi" 
    },     
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost" 
    },     
    {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author: "― J.K. Rowling, Harry Potter and the Goblet of Fire" 
    },     
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain" 
    },    
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard" 
    }
]


function addQuote(){
    random = Math.floor(Math.random() * (data.length));
    if(prevRandom == random){
        random = Math.floor(Math.random() * (data.length));
    }
    quote.innerHTML = data[random].quote
    author.innerHTML = data[random].author
    prevRandom = random
}



