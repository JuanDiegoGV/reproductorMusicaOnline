const audio = document.querySelector("audio")
const songName = document.querySelector(".songName")
const leftButton = document.querySelector(".leftButton")
const playButton = document.querySelector(".playButton")
const rightButton = document.querySelector(".rightButton")

const songList = [
    {
        path: "J. Balvin_ Skrillex - In Da Getto (Letra_Lyrics)(MP3_128K).mp3",
        name: "in da getto - j balvin"
    },
    {
        path: "Plan B - Mi Vecinita(MP3_128K).mp3",
        name: "mi vecinita - plan b"
    },
    {
        path: "se aloca j balvin letra(MP3_128K).mp3",
        name: "se aloca - j balvin"
    }
]

let numSong = 0
let playing = false


function playSong() {
    audio.play()
    playing = true
    playButton.innerHTML = '<i class="bi bi-pause-circle"></i>'
}

function stopSong() {
    audio.pause()
    playing = false
    playButton.innerHTML = '<i class="bi bi-play-circle"></i>'
}

playButton.addEventListener("click", () => {
    if (!playing) {
        playSong()
    } else {
        stopSong()
    }
})

function loadSong(songList) {
    songName.textContent = songList.name
    audio.src = songList.path
}
loadSong(songList[numSong])


rightButton.addEventListener("click", () => {
    numSong++
    if (numSong == songList.length) {
        numSong = 0
    }
    loadSong(songList[numSong])
    playSong()
})

leftButton.addEventListener("click", () => {
    numSong--
    if (numSong < 0) {
        numSong = songList.length - 1
    }
    loadSong(songList[numSong])
    playSong()
})