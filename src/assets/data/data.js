export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Dita Yessica Rahayuningtyas',
            child: 'Putri Tunggal',
            father: 'Gatot Yunarto',
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
            jyear: '1959',
            jmonth: 'Besar',
            jdate: '14',
            day: 'Minggu Pon',
            hours: {
                start: '16.00',
                finish: '17.00'
            }
        },
        reception: {
            year: '2026',
            month: 'Juni',
            date: '1',
            jyear: '1959',
            jmonth: 'Besar',
            jdate: '15',
            day: 'Senin Wage',
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
        {
            id: 3,
            name: 'BTC Native Segwit wallet',
            icon: './src/assets/images/bitcoin.png',
            rekening: 'bc1qcht3epwkz8hu9gnpc2ep2tuzr7xz2ca0cat9tf'
        },
        {
            id: 4,
            name: 'ETH wallet',
            icon: './src/assets/images/eth.png',
            rekening: '0x05128dCD21f8b2866ade5c9901C85211245484Cc'
        },
        {
            id: 5,
            name: 'BM Technology (Hanung)',
            icon: './src/assets/images/QRIS-s.png',
            rekening: "<img src='./src/assets/images/QRIS-mdr.png'>"
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
   /*     {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
*/
        {
            id: 4,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
