const url = "https://cdn.jsdelivr.net/gh/aldymartinus/cdn@master/Indonesia%20Pilihan/";

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    preload: 'metadata',
    audio: [
        {
            name: 'Burung Camar',
            artist: 'Vina Panduwinata',
            url: `${url}01 Burung Camar - Vina Panduwinata.mp3`,
            cover: `${url}cover-webp/Festival Lagu Populer Indonesia (1985).webp`,
            theme: '#4165ba'
        },
        {
            name: 'Bawalah Daku Dalam Bahagia',
            artist: 'Broery Pesolima',
            url: `${url}02 Bawalah Daku Dalam Bahagia - Broery Pesolima.mp3`,
            cover: `${url}cover-webp/Festival Lagu Populer Indonesia (1985).webp`,
            theme: '#4165ba'
        }, {
            name: 'Selamat Datang Cinta',
            artist: 'Harvey Malaiholo',
            url: `${url}03 Selamat Datang Cinta - Harvey Malaiholo.mp3`,
            cover: `${url}cover-webp/Festival Lagu Populer Indonesia (1985).webp`,
            theme: '#4165ba'
        },
        {
            name: 'Prahara Cinta',
            artist: 'Lydia & Imaniar',
            url: `${url}04 Lydia Imaniar -  Prahara Cinta.mp3`,
            cover: `${url}cover-webp/Prahara Cinta - Lydia & Imaniar (1987).webp`,
            theme: '#4165ba'
        }, {
            name: 'Masa Bodo',
            artist: 'Katara Singers',
            url: `${url}05 Katara Singers - Masa Bodo.mp3`,
            cover: `${url}cover-webp/Katara - Ternyata (1989).webp`,
            theme: '#4165ba'
        }, {
            name: 'Ternyata',
            artist: 'Katara Singers',
            url: `${url}06 Katara Singers -  Ternyata.mp3`,
            cover: `${url}cover-webp/Katara - Ternyata (1989).webp`,
            theme: '#4165ba'
        }, {
            name: 'Hari Ini Dia, Esok Siapa',
            artist: 'Tika Bisono & Pahama',
            url: `${url}07 Hari Ini Dia, Esok Siapa - Tika Bisono & Pahama.mp3`,
            cover: `${url}cover-webp/Suara Persaudaraan (1985).webp`,
            theme: '#4165ba'
        }, {
            name: 'Penyayang',
            artist: 'Lydia & Imaniar',
            url: `${url}08 Penyayang - Lydia & Imaniar.mp3`,
            cover: `${url}cover-webp/Suara Persaudaraan (1985).webp`,
            theme: '#4165ba'
        }, {
            name: 'Jingga',
            artist: 'Christine Panjaitan',
            url: `${url}09 Jingga - Christine Panjaitan.mp3`,
            cover: `${url}cover-webp/Festival Lagu Populer Indonesia (1985).webp`,
            theme: '#4165ba'
        },
        {
            name: 'Sakura',
            artist: 'Fariz RM',
            url: `${url}10 Fariz RM - 桜.mp3`,
            cover: `${url}cover-webp/Fariz RM - Sakura (1980).jpeg`,
            theme: '#4165ba'
        }, {
            name: 'Melayang',
            artist: 'January Christy',
            url: `${url}11 January Christy -  Melayang.mp3`,
            cover: `${url}cover-webp/January Christy - Melayang (1986).webp`,
            theme: '#4165ba'
        }, {
            name: 'Perdamaian',
            artist: 'Vina P, Utha L & Yopie L',
            url: `${url}12 Perdamaian - Vina P, Utha L & Yopie L.mp3`,
            cover: `${url}cover-webp/Suara Persaudaraan (1985).webp`,
            theme: '#4165ba'
        },
        {
            name: 'Persaudaraan',
            artist: 'Candra D, Dian PP, Carry P, Ajie S',
            url: `${url}13 Persaudaraan - Candra D, Dian PP, Carry P, Ajie S.mp3`,
            cover: `${url}cover-webp/Suara Persaudaraan (1985).webp`,
            theme: '#4165ba'
        },
    ]
});

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.aplayer-list');
    if (list && list.children[0]) {
        list.children[0].style.maxHeight = 'none';
        list.style.maxHeight = 'none';
    }
});

