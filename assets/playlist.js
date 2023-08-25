const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const footer = $(".master_play .title");
const footerThumb = $(".master_play #poster_master_play");
const audio = $("#audio");
const footerAuthor = $(".master_play .master_play__author");
const playBtn = $(".btn-toggle-play");
const masterPlay = $(".masterPlay");
const playListPlay = $(".playListPlay");
const wave = document.getElementsByClassName("wave")[0];
const nextBtn = $("#next");
const prevBtn = $("#back");
const playlist = $(".menu_side .playlist");
const pop_playlist = $(".popular_song .pop_song");
const pop_artists = $(".popular_artists .item");
const PLAYER_STORAGE_KEY = "GATSBY-PLAYER";

const app = {
    currentIndex: 0,
    isPlaying: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    // API - Playlist
    songs: [
        // Play list Song
        {
            stt: "01",
            id: "1",
            name: "Nevada",
            singer: "Monstercat",
            path: "./assets/music/song1.mp3",
            image: "./assets/img/song1.jpg",
        },
        {
            stt: "02",
            id: "2",
            name: "Because I'm Stupid",
            singer: "SS501",
            path: "./assets/music/song2.mp3",
            image: "./assets/img/song2.jpg",
        },
        {
            stt: "03",
            id: "3",
            name: "Stand By Me",
            singer: "SS501",
            path: "./assets/music/song3.mp3",
            image: "./assets/img/song3.jpg",
        },
        {
            stt: "04",
            id: "4",
            name: "Monody",
            singer: "TheFatRat, Laura Brehm",
            path: "./assets/music/song4.mp3",
            image: "https://avatar-ex-swe.nixcdn.com/song/2017/11/01/8/9/5/4/1509514275012_500.jpg",
        },
        {
            stt: "05",
            id: "5",
            name: "The Calling",
            singer: "Nightcore, TheFatRat,<br> Laura Brehm",
            path: "./assets/music/song5.mp3",
            image: "./assets/img/song5.jpg",
        },
        {
            stt: "06",
            id: "6",
            name: "Unity",
            singer: "TheFatRat",
            path: "./assets/music/song6.mp3",
            image: "https://avatar-nct.nixcdn.com/song/2017/11/01/8/9/5/4/1509514704914_640.jpg",
        },
        {
            stt: "07",
            id: "7",
            name: "Never Be Alone",
            singer: "TheFatRat",
            path: "./assets/music/song7.mp3",
            image: "https://assets.gtgraphics.de/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2tJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7943b38dcdb060270f23aef043145e96ef242db9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7169841a733ae5073a9c105751b6e0a10336b854/rule-the-world-thefatrat.jpg",
        },
        {
            stt: "08",
            id: "8",
            name: "Fly Away",
            singer: "TheFatRat",
            path: "./assets/music/song8.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq8Rir5R-Y3AA5xtWQV1LmAfGaE2QHTnCXA&usqp=CAU",
        },
        {
            stt: "09",
            id: "9",
            name: "Jackpot",
            singer: "TheFatRat",
            path: "https://vietup.net/files/d29646c12699d62410451b13df02a43f/58f0e4e38f510df52cb01edd8251158d/Jackpot-TheFatRat.mp3",
            image: "https://kenh14cdn.com/thumb_w/660/2019/5/13/photo-1-1557764616221573109405.png",
        },

        {
            stt: "10",
            id: "10",
            name: "Never Be Alone",
            singer: "TheFatRat",
            path: "./assets/music/song7.mp3",
            image: "https://assets.gtgraphics.de/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2tJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7943b38dcdb060270f23aef043145e96ef242db9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7169841a733ae5073a9c105751b6e0a10336b854/rule-the-world-thefatrat.jpg",
        },

        // Popular Song
        {
            stt: "08",
            id: "8",
            name: "Fly Away",
            singer: "TheFatRat",
            path: "./assets/music/song8.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq8Rir5R-Y3AA5xtWQV1LmAfGaE2QHTnCXA&usqp=CAU",
        },
        {
            stt: "09",
            id: "9",
            name: "Jackpot",
            singer: "TheFatRat",
            path: "https://vietup.net/files/d29646c12699d62410451b13df02a43f/58f0e4e38f510df52cb01edd8251158d/Jackpot-TheFatRat.mp3",
            image: "https://kenh14cdn.com/thumb_w/660/2019/5/13/photo-1-1557764616221573109405.png",
        },
        {
            stt: "07",
            id: "7",
            name: "Never Be Alone",
            singer: "TheFatRat",
            path: "./assets/music/song7.mp3",
            image: "https://assets.gtgraphics.de/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2tJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7943b38dcdb060270f23aef043145e96ef242db9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7169841a733ae5073a9c105751b6e0a10336b854/rule-the-world-thefatrat.jpg",
        },
        {
            stt: "08",
            id: "8",
            name: "Fly Away",
            singer: "TheFatRat",
            path: "./assets/music/song8.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq8Rir5R-Y3AA5xtWQV1LmAfGaE2QHTnCXA&usqp=CAU",
        },
        {
            stt: "09",
            id: "9",
            name: "Jackpot",
            singer: "TheFatRat",
            path: "https://vietup.net/files/d29646c12699d62410451b13df02a43f/58f0e4e38f510df52cb01edd8251158d/Jackpot-TheFatRat.mp3",
            image: "https://kenh14cdn.com/thumb_w/660/2019/5/13/photo-1-1557764616221573109405.png",
        },
    ],
    // API - Pop-Song
    songs2: [{}],
    // API - Pop-Artists
    artists: [{}],
    // Render - Playlist
    render: function () {
        const renderSong = this.songs.map((song, index) => {
            return `
          <li class="songItem song ${
              index === this.currentIndex ? "active3" : " "
          }" data-index="${index}">
          <span>${song.stt}</span>
          <img src="${song.image}" alt="${song.singer}">
          <h5>
          ${song.name}
          <div class="subtitle">${song.singer}</div>
          </h5>
          
          </li>
          `;
        });
        playlist.innerHTML = renderSong.join("");
    },
    // Render - Pop-Song
    render2: function () {
        const renderSong2 = app.songs.map((song, index) => {
            return `
            <li class="songItem song ${
                index === this.currentIndex ? "active3" : ""
            }" data-index="${index}">
            <div class="img_play">
              <img
                src="${song.image}"
                alt="${song.singer}">
              
            </div>
            <h5>${song.name}
              <br>
              <div class="subtitle">${song.singer}</div>
            </h5>
          </li>
              `;
        });
        pop_playlist.innerHTML = renderSong2.join("");
    },
    // Render - Pop-Artists
    render3: function () {
        const renderArtists = app.songs.map((song, index) => {
            return `
            <div class="pop-artists">
                <li>
                    <img src="${song.image}"alt="${song.singer}" title="${song.singer}">
                </li>
                <p class="subtitle_pop-artists">${song.singer}</p>
            </div>

              `;
        });
        pop_artists.innerHTML = renderArtists.join("");
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    handleEvents: function () {
        // Xử lí Btn Play/Pause
        playBtn.onclick = function () {
            if (app.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };
        // Khi Play
        audio.onplay = function () {
            app.isPlaying = true;
            masterPlay.classList.remove("bi-play-fill");
            masterPlay.classList.add("bi-pause-fill");
            wave.classList.add("active2");
        };
        // Khi Pause
        audio.onpause = function () {
            app.isPlaying = false;
            masterPlay.classList.remove("bi-play-fill");
            masterPlay.classList.add("bi-play-fill");
            wave.classList.remove("active2");
        };
        // Khi Next / Prev
        nextBtn.onclick = function () {
            app.nextSong();
            audio.play();
            app.render();
            app.scrollToActiveSong();
        };
        prevBtn.onclick = function () {
            app.prevSong();
            audio.play();
            app.render();
            app.scrollToActiveSong();
        };
        // Khi audio Ended
        audio.onended = function () {
            nextBtn.click();
        };

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active3)");
            const songOption = e.target.closest(".option");

            if (songNode || songOption || songOptions) {
                app.currentIndex = Number(songNode.dataset.index);
                app.loadCurrentSong();
                app.render();
                audio.play();
                // Xử lí khi click vào song
                if (songNode && !songOption) {
                }
                // Xử lí khi click vào option
                if (songOption) {
                }
            }
        };
        // Lắng nghe hành vi click vào pop_song
        pop_playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active3)");
            const songOption = e.target.closest(".option");

            if (songNode || songOption || songOptions) {
                app.currentIndex = Number(songNode.dataset.index);
                app.loadCurrentSong();
                app.render2();
                audio.play();
            }
        };
    },
    // Kéo View khi Active quá UI
    scrollToActiveSong: function () {
        setTimeout(() => {
            $(".song.active3").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }, 100);
    },
    loadCurrentSong: function () {
        footer.textContent = this.currentSong.name;
        footerThumb.src = this.currentSong.image;
        audio.src = this.currentSong.path;
        footerAuthor.textContent = this.currentSong.singer;
    },
    // Next/Prev Song
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    start: function () {
        // Định nghĩa các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe/ xử lí các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // render playlist
        this.render();
        this.render2();
        this.render3();
    },
};
app.start();
// -----------------

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
bar2.style.width = `0%`;
dot.style.left = `0%`;

audio.addEventListener("timeupdate", () => {
    // Time start/end
    let music_curr = audio.currentTime;
    let music_dur = audio.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    // Time chạy thanh ngang
    let proGressBar = parseInt((audio.currentTime / audio.duration) * 100);
    seek.value = proGressBar;

    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
});

seek.addEventListener("change", () => {
    audio.currentTime = (seek.value * audio.duration) / 100;
});

// Vol
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
vol_bar.style.width = `100%`;
vol_dot.style.left = `100%`;

vol.addEventListener("change", () => {
    if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol.value > 0) {
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol.value > 50) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    audio.volume = vol_a / 100;
});

// Arrow Scroll Pop_Song
let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
let pop_songs = document.getElementsByClassName("pop_song")[0];

left_scroll.addEventListener("click", () => {
    pop_songs.scrollLeft -= 330;
});
right_scroll.addEventListener("click", () => {
    pop_songs.scrollLeft += 330;
});

// Arrow Scroll Pop_Artists
let left_scrolls = document.getElementById("left_scrolls");
let right_scrolls = document.getElementById("right_scrolls");
let item = document.getElementsByClassName("item")[0];

left_scrolls.addEventListener("click", () => {
    item.scrollLeft -= 330;
});
right_scrolls.addEventListener("click", () => {
    item.scrollLeft += 330;
});
