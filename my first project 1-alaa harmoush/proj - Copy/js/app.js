const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function playmusic(){
    let audio = new Audio('rock.mp3')
    audio.play()
}

function Stopmusic(){
    let audio = new Audio('')
    audio.play()
}

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Sir");
    }

    else if(hr == 12) {
        speak("Good noon Sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating jarvis");
    speak("Going online");
    wishMe();
    
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine Sir. tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('who created this website')) {
        const finalText = "the creator of this website is Alaa Harmoush.He finished full-stack devaloping course with the best trainer danial awde";
        speech.text = finalText;
    }

    else if(message.includes('how can i contact the admin?')) {
        const finalText = "you can email them at darkphoinex2022@outlook.com.or colling them at 0096178972677";
        speech.text = finalText;
    }

    else if(message.includes('how i can contact the admin?')) {
        const finalText = "you can email them at darkphoinex2022@outlook.com.or colling them at 0096178972677";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "jarvis is my one and only name ";
        speech.text = finalText;
    }
    else if(message.includes('tell me a joke')) {
        const finalText = "Why dont Calculus majors throw house parties? Because you should never drink and derive";
        speech.text = finalText;
    }

    else if(message.includes('tell me a riddle')) {
        const finalText = "What goes in hard and dry but comes out soft and wet? ...................... Gum.";
        speech.text = finalText;
    }

    else if(message.includes('why dark phoenix?')) {
        const finalText = "The creator of this website called his brand the dark phoenix, becouse the phoenix is a bird that is born from ashes and it grows to be the strongest bird in the history.did i answer your question?";
        speech.text = finalText;
    }

    else if(message.includes('rap')) {
        const finalText = "Uh, summa-lumma, dooma-lumma, you assumin Im a human What I gotta do to get it through to you Im superhuman?Innovative and Im made of rubber so that anything You say is ricochetin off of me, and itll glue to you and Im devastating, more than ever demonstrating How to give a motherfuckin audience a feeling like its levitating Never fading, and I know the haters are forever waiting For the day that they can say I fell off, they ll be celebrating Cause I know the way to get em motivated I make elevating music, you make elevator music";
        speech.text = finalText;
    }

    else if(message.includes('tell me a fact')) {
        const finalText = "Danial will give me 100% of the grade";
        speech.text = finalText;
    }

    else if(message.includes('what makes you unique?')) {
        const finalText = "i am unique becouse im the only website with a voice assistant, that can help you with anything or any problem you may have, i have a lot lot of options and the devalopers are frendly";
        speech.text = finalText;
    }

    else if(message.includes('play some music')) {
        speech.text = playmusic();
    }

    else if(message.includes('stop the music')) {
        speech.text = Stopmusic();
    }


    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open store')) {
        window.open("shop.html", "_blank");
        const finalText = "Opening Store";
        speech.text = finalText;
    }

    else if(message.includes('open shop')) {
        window.open("shop.html", "_blank");
        const finalText = "Opening Shop";
        speech.text = finalText;
    }


    else if(message.includes('open home page')) {
        window.open("proj.html", "_blank");
        const finalText = "Opening homepage";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }
    
    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 5;
    speech.pitch = 5;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}