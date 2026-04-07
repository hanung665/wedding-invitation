export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Hanung Adi Wijaya',
            child: 'Putra pertama',
            father: 'Drs. Maruto Subahagija',
            mother: 'Almh. Istantina',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Dita Yessica Rahayuningtyas',
            child: 'Putri satu-satunya',
            father: 'Gatot Yunanto',
            mother: 'Soekesi',
            image: './src/assets/images/cewe.png'
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
            day: 'Semim',
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
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
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
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

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
