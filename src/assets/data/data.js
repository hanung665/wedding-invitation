export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Dita Yessica Rahayuningtyas',
            child: 'Putri Tunggal',
            father: 'Gatot Yunanto',
            mother: 'Soekesi',
            image: './src/assets/images/cewe.png'
        },
        P: {
            id: 2,
            name: 'Hanung Adi Wijaya',
            child: 'Putra Pertama',
            father: 'Drs. Maruto Subahagija',
            mother: 'Almh. Istantina',
            image: './src/assets/images/cowo.png'
            
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Mei',
            date: '31',
            day: 'Minggu',
            hours: {
                start: '16.00',
                finish: '17.00'
            }
        },
        reception: {
            year: '2026',
            month: 'Juni',
            date: '1',
            day: 'Senin',
            hours: {
                start: '10.00',
                finish: '17.00'
            }
        },
        address: 'Jl. Anggrek, Lingk. Wonorejo, Timur Terminal Lodoyo, Kel. Kalipang, Kec. Sutojayan, Kab. Blitar, Jawa Timur'
    },

    link: {
        calendar: 'https://calendar.app.google/jozANZHg6HxbqnCCA',
        map: 'https://maps.app.goo.gl/oVgHuP64zCnFUXNN8',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpeg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpeg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpeg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpeg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpeg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Dita Yessica Rahayuningtyas',
            icon: './src/assets/images/bca.png',
            rekening: '0113011847'
        },
        {
            id: 2,
            name: 'Hanung A. Wijaya',
            icon: './src/assets/images/bri.png',
            rekening: '050701015623504'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyY_vj-l7C8BaZw9MpHyqLrXGm4AEDyLnEjYelmPjTeZ3eXmoInp3kzALgAYcXDGaLN/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
