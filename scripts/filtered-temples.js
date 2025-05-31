// Header hambuger button secction
document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});

const temples = [
    {
        templeName: "Atlanta Georgia Temple",
        location: "Southeastern United States",
        dedicated: "1983, June, 1",
        area: 34500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Bern Switzerland Temple",
        location: "Zollifen, Switzerland",
        dedicated: "1955, November, 15",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Atlanta Georgia Temple",
        location: "Southeastern United States",
        dedicated: "1983, June, 1",
        area: 34500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
        width: "400px",
        height: "250px"
    },
      {
       templeName: "Bern Switzerland Temple",
        location: "Zollifen, Switzerland",
        dedicated: "1955, November, 15",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
       templeName: "Atlanta Georgia Temple",
        location: "Southeastern United States",
        dedicated: "1983, June, 1",
        area: 34500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
        width: "400px",
        height: "250px"
    },
      {
        templeName: "Bern Switzerland Temple",
        location: "Zollifen, Switzerland",
        dedicated: "1955, November, 15",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Atlanta Georgia Temple",
        location: "Southeastern United States",
        dedicated: "1983, June, 1",
        area: 34500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Bern Switzerland Temple",
        location: "Zollifen, Switzerland",
        dedicated: "1955, November, 15",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Atlanta Georgia Temple",
        location: "Southeastern United States",
        dedicated: "1983, June, 1",
        area: 34500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
        width: "400px",
        height: "250px"
    },
];


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container.home');
    const navLinks = document.querySelectorAll('.navigation a');
    const titleName = document.querySelector('.title');

    const displayTemples = (filteredTemples) => {
        container.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';
            card.innerHTML = `
                <img src="${temple.imageUrl}"  loading="lazy"  width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
                <div class="temple-info">
                    <h2>${temple.templeName}</h2>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = temples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                titleName.innerHTML = 'Old Temples';
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                titleName.innerHTML = 'New Temples';
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                titleName.innerHTML = 'Large Temples';
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                titleName.innerHTML = 'Small Temples';
                break;
            default:
                filteredTemples = temples;
                titleName.innerHTML = 'All Temples';
                break;
        }
        displayTemples(filteredTemples);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
            filterTemples(e.target.id);
        });
    });

    filterTemples('home-nav');
});


// Footer information
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    copyrightYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last update: ${lastModified}`;
});