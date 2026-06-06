const songs = {
    
    jtwya: {
        title: "𝓙ust The Way You Are",
        image: "jtwya.jpg",
        audio: "jtwya.mp3",
        message: `Hey, Joyyy!! 
I know ang sudden nito, but I really just can’t help it. I’ve been wanting to tell you this, and promise me that you’ll actually believe this ha??!! HAHAHAHA. I like you so much, Joy. I like you just the way you are, the way you look so very beautiful in every post, story, or any chance that I see your face, I get so captivated by you. I love your personality, how you always make me smile and laugh with our silly and nonsensical conversations, how admirable you are when it comes to serious talks, and how you make me flustered with how you jokingly flirt with me. If you ever feel insecure with the way you are, don’t be, because for me, you’re amazing, just the way you are. Your insecurities may look imperfect to you, but they’re parts of what make you incredibly special and unique, so no need to change any of them. 
[To the 2nd song !]`
    },

    oca: {

        title: "𝓞ne Call Away",

        image: "oca.png",

        audio: "oca.mp3",

        message: `I know life gets heavy sometimes, and that the world may feel so so so much overwhelming. But I want to be one of the people you can always turn to, talk to, run to, and be with. I’m not a good replier, but just know that I am always available to listen and to give you comfort the way you need it. This applies not just with problems, but also I want to be the person you’d run to share your good news with. No matter what happens, no matter where you are, and no matter what time it is–I promise you that I am always only one call away. 
        [To the 3rd song !] `
    },

    ybsh: {

        title: "𝓨ou'll Be Safe Here",

        image: "ybsh.jpg",

        audio: "ybsh.mp3",

        message: `"Close your eyes, dry your tears, ‘cause when nothing seems clear, you’ll be safe here."
            If given the chance, I also promise to be your safe space–your sanctuary. Through every problem, rain or shine, kahit thunderstorm pa ‘yan, through every doubt and broken days, you’ll always have me, and always be safe here with me. I want to share and carry your problems and burdens whenever you’re feeling defeated. I will always be right here, for you, to hold you close and dry your tears. I’ve always got your back! I want to love you perfectly. I’m falling for you, mhie ko, completely and honestly. You don’t need to give me an answer right now or right away, but I just really wanted to express myself, and needed you to know. <3`
    }

};

function openSong(songId){

    const song = songs[songId];

    document
        .getElementById("musicModal")
        .classList.add("hidden");

    document
        .getElementById("songPopup")
        .classList.remove("hidden");

    document
        .getElementById("songTitle")
        .textContent = song.title;

    document
        .getElementById("songMessage")
        .textContent = song.message;

    document
        .getElementById("playerCover")
        .src = song.image;

    const player =
        document.getElementById("songPlayer");

    player.src = song.audio;

    player.play();
}

let transitioned = false;

document.addEventListener("click", () => {

    if (transitioned) return;

    transitioned = true;

    const heart = document.getElementById("heart");

    heart.classList.add("zoomHeart");

    setTimeout(() => {

        document.getElementById("heartScene").style.display = "none";

        const envelopeScene =
            document.getElementById("envelopeScene");

        envelopeScene.style.display = "flex";

    }, 2000);

});

const envelope =
    document.getElementById("envelope");

envelope.addEventListener("click", (e) => {

    e.stopPropagation();

    envelope.style.display = "none";

    document
        .getElementById("musicModal")
        .classList.remove("hidden");

});

document
    .getElementById("closeBtn")
    .addEventListener("click", () => {

        document
            .getElementById("musicModal")
            .classList.add("hidden");

        envelope.style.display = "block";

});

document
    .getElementById("backBtn")
    .addEventListener("click", () => {

        const player =
            document.getElementById("songPlayer");

        player.pause();

        player.currentTime = 0;

        document
            .getElementById("songPopup")
            .classList.add("hidden");

        document
            .getElementById("musicModal")
            .classList.remove("hidden");

});
