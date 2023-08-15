let songs = [
    { 
        songName: "Aise Kyun",
        songFilePath: "./assets/songs/1.mp3",  
        coverPath: "./assets/covers/c1.jpg",
        albumName: "Mismatched: S1",  
        songDuration: "4:24",  
        artistData:
            [
                {artistName: "Anurag Saikia", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "Raghav Chaitanya", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "Nikhita Gandhi", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"}
            ]
    },
    { 
        songName: "Tere Bina",
        songFilePath: "./assets/songs/2.mp3",
        coverPath: "./assets/covers/c2.jpg",  
        albumName: "Tere Bina",
        songDuration: "2:37",
        artistData:
            [
                {artistName: "Zaeden", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"}
            ]
    },
    { 
        songName: "Pehli DaFa",
        songFilePath: "./assets/songs/3.mp3",
        coverPath: "./assets/covers/c3.jpg",
        albumName: "Pehli Dafa",
        songDuration: "4:58",
        artistData:
            [
                {artistName: "Atif Aslam", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "Shiraz Uppal", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"}
            ]
    },
    { 
        songName: "Ghungaroo",
        songFilePath: "./assets/songs/4.mp3",
        coverPath: "./assets/covers/c4.jpg",
        albumName: "War",
        songDuration: "5:04",
        artistData:
            [
                {artistName: "Vishal-Shekhar", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "Arijit Singh", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: " Shilpa Rao", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: " Kumaar", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"}
            ]
    },
    { 
        songName: "Heer Ranjha",
        songFilePath: "./assets/songs/5.mp3",
        coverPath: "./assets/covers/c5.jpg",
        albumName: "Heer Ranjha",
        songDuration: "4:21",
        artistData:
            [
                {artistName: "Bhuvan Bam", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
            ]
    },
    { 
        songName: "O Mere Dil Ke Chain",
        songFilePath: "./assets/songs/6.mp3",
        coverPath: "./assets/covers/c6.jpg",
        albumName: "O Mere Dil Ke Chain",
        songDuration: "3:22",
        artistData:
            [
                {artistName: "Sanam", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "R D Burman", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
            ]
    },
    { 
        songName: "I Almost Do",
        songFilePath: "./assets/songs/7.mp3",
        coverPath: "./assets/covers/c7.jpg",
        albumName: "Red (Deluxe Addition)",
        songDuration: "4:04",
        artistData:
            [
                {artistName: "Taylor Swift", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "R D Burman", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
            ]
    },
    { 
        songName: "Tum Hi Ho Bandhu (From \"Cocktail\")",
        songFilePath: "./assets/songs/8.mp3",
        coverPath: "./assets/covers/c8.jpg",
        albumName: "Cocktail",
        songDuration: "4:42",
        artistData:
            [
                {artistName: "Niraj Shridhar", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "Kavita Seth", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
            ]
    },
    { 
        songName: "Aapka Kya Hoga (Dhanno)",
        songFilePath: "./assets/songs/9.mp3",
        coverPath: "./assets/covers/c9.jpg",
        albumName: "Housefull",
        songDuration: "5:07",
        artistData:
            [
                {artistName: "Mikka Singh", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "Sunidhi Chauhan", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
                {artistName: "Sajid Khan", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
            ]
    },
    { 
        songName: "Baadshah O Baadshah",
        songFilePath: "./assets/songs/10.mp3",
        coverPath: "./assets/covers/c10.jpg",
        albumName: "Badshah (Motion Pictures)",
        songDuration: "6:39",
        artistData:
            [
                {artistName: "Abhijit", artistPageUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KEAbC"},
            ]
    },
];




// -------------------- Dynamic Html and Css adding -------------------- 
const songQueueWrapper = document.querySelector('.song-queue-wrapper');
songs.forEach((song, index) => {
    const row = document.createElement('div');
    row.setAttribute('role', 'row');
    row.setAttribute('aria-rowindex', index + 2);

    row.innerHTML = `
        <div class="tracklist-row custom-grid-template custom-grid-gap">
            <div class="song-index" role="gridcell" aria-colindex="1" tabindex="-1">
                <div class="gridcell-song-num-wrapper">
                    <span class="gridcell-song-num" data-encore-id="type">${index + 1}</span>
                    <button class="song-play-button" aria-label="play-song" tabindex="-1">
                        <i class="fa-solid fa-play songPlayItem" id="${index + 1}"></i>
                    </button>
                </div>
            </div>
            <div class="song-title-column" role="gridcell" aria-colindex="2" tabindex="-1">
                <img src="${song.coverPath}" alt="Img" class="me-3 flex-shrink-0 bg-dark song-cover-image" width="40" height="40">
                <div class="song-info-grid-wrapper">
                    <a class="internal-track-link" href="javascript:void(0);" tabindex="-1">
                        <div class="song-title stand-alone-song ellipse-one-line">${song.songName}</div>
                    </a>
                    <span class="f-res song-artists ellipse-one-line">
                        ${getArtistNames(song.artistData)}
                    </span>
                </div>
            </div>
            <div class="album-title-column" role="gridcell" aria-colindex="3" tabindex="-1">
                <span class="f-res album-name-wrapper">
                    <a class="ellipse-one-line" href="javascript:void(0);" tabindex="-1">${song.albumName}</a>
                </span>
            </div>
            <div class="date-add-title-column" role="gridcell" aria-colindex="4" tabindex="-1">
                <span class="f-res date-added">4 days ago</span>
            </div>
            <div class="duration-column" role="gridcell" aria-colindex="5" tabindex="-1">
                <button aria-checked="false" tabindex="-1" class="f-res add-to-favourite-btn-wrapper control-btn-heart" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourite">
                    <span class="d-flex">
                        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>
                    </span>
                </button>
                <div class="me-3 f-res duration-time" data-encore-id="type">${song.songDuration}</div>
            </div>
        </div>
    `;

    songQueueWrapper.appendChild(row);
});


// --------------- adding artist names ---------------
function getArtistNames(all_data){
    let str = [];
    all_data.forEach((data) => {
        const a = document.createElement("a");
        a.setAttribute('href', data.artistPageUrl)
        a.innerHTML = data.artistName;
        str.push(a.outerHTML);
    });
    return str.join(", ");
}




let artists = [
    {
        artistImage: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg",
        playListName: "Top 50 - India",
    },
    {
        artistImage: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
        playListName: "Top 50 - Global",
    },
    {
        artistImage: "https://i.scdn.co/image/ab67706f000000023ec51dd9c17a9add42c2e249",
        playListName: "This Is Arijit Singh",
    },
    {
        artistImage: "https://i.scdn.co/image/ab67706f00000002bc10ef09f6d3ca27092204b8",
        playListName: "This Is Arman Malik",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-default.jpg",
        playListName: "This Is A R Rehman",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0QBBOU-default.jpg",
        playListName: "This Is Pritam",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0arULD-default.jpg",
        playListName: "This Is Shreya Ghoshal",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0Kr1PQ-default.jpg",
        playListName: "This Is Sachin-Jigar",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO40xRQ6-default.jpg",
        playListName: "This is Vishal Shekhar",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1n6IJz-default.jpg",
        playListName: "This is Atif Aslam",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0FcUGj-default.jpg",
        playListName: "This Is Sonu Nigam",
    },
    {
        artistImage: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0sDxsT-default.jpg",
        playListName: "This Is Tulsi Kumar",
    },
]

const artistWrapper = document.querySelector("#artist-wrapper");
artists.forEach((artist , index)=>{
    let swiperSlide = document.createElement('div');
    swiperSlide.classList.add("swiper-slide");

    swiperSlide.innerHTML = `
        <div class="playlist-card-wrapper">
            <div class="h-100">
                <div class="playlist-card-img-wrapper">
                    <div class="img-padding" style="--card-color: #682828;">
                        <div>
                            <img src="${artist.artistImage}" alt="not-found" class="playlist-card-img">
                        </div>
                    </div>
                    <div class="playlist-play-btn-wrapper">
                        <div class="flex-shrink-0">
                            <button class="playlist-play-btn">
                                <span class="playlist-btn-svg-wrapper bright-accent">
                                    <span class="quick-play-btn-icon-wrapper">
                                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="playlist-card-content-wrapper">
                    <a href="" class="playlist-name-wrapper">
                        <div class="daily-playlist-name ellipse-true">${artist.playListName}</div>
                    </a>
                    <div class="f-res daily-playlist-artists clamp-true">This is Armaan Malik. The essential tracks all in one playlist.</div>
                </div>
            </div>
        </div>
    `

    artistWrapper.appendChild(swiperSlide);
});