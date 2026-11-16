// ================= REGION BANNER =================
const regionBanner = document.getElementById('regionBanner');
const countrySelect = document.getElementById('countrySelect');

document.getElementById('regionCloseBtn').addEventListener('click', () => {
    regionBanner.style.display = 'none';
});

document.getElementById('regionContinueBtn').addEventListener('click', () => {
    const selectedText = countrySelect.options[countrySelect.selectedIndex].text;
    document.getElementById('footerCountry').textContent =
        selectedText === 'Other country or region' ? 'United States' : selectedText;
    regionBanner.style.display = 'none';
});

// ================= DATA FOR MENUS & 2026 PRODUCTS =================
const megaMenuData = {
    store: {
        primary: ['Shop the Latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'Home', 'Accessories'],
        quick: ['Find a Store', 'Order Status', 'Apple Trade In', 'Financing'],
        special: ['Certified Refurbished', 'Education', 'Business']
    },
    mac: {
        primary: ['Explore All Mac', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio', 'Mac Pro'],
        quick: ['Compare Mac', 'Mac Does That', 'Shop Mac'],
        special: ['Mac Accessories', 'Apple Trade In', 'Financing']
    },
    ipad: {
        primary: ['Explore All iPad', 'iPad Pro', 'iPad Air', 'iPad', 'iPad mini', 'Apple Pencil', 'Keyboards'],
        quick: ['Compare iPad', 'Why iPad', 'Shop iPad'],
        special: ['iPad Accessories', 'Apple Trade In', 'Financing']
    },
    iphone: {
        primary: ['Explore All iPhone', 'iPhone Duo', 'iPhone 18 Pro', 'iPhone Air', 'iPhone 17', 'iPhone 17e'],
        quick: ['Compare iPhone', 'Switch from Android', 'Shop iPhone'],
        special: ['iPhone Accessories', 'Apple Trade In', 'Carrier Deals at Apple']
    },
    watch: {
        primary: ['Explore All Apple Watch', 'Apple Watch Series 12', 'Apple Watch Ultra 4', 'Apple Watch SE'],
        quick: ['Compare Watch', 'Why Apple Watch', 'Shop Apple Watch'],
        special: ['Apple Watch Bands', 'Apple Watch Studio', 'Apple Trade In']
    },
    vision: {
        primary: ['Explore Apple Vision Pro', 'Guided Tour', 'Tech Specs'],
        quick: ['Book a Demo', 'Shop Apple Vision Pro'],
        special: ['Apple Vision Pro Accessories', 'Financing']
    },
    airpods: {
        primary: ['Explore All AirPods', 'AirPods 5', 'AirPods Pro 3', 'AirPods Max 2'],
        quick: ['Compare AirPods', 'Hearing Health'],
        special: ['Shop AirPods', 'Apple Music']
    },
    home: {
        primary: ['Explore Home', 'Apple HomeView', 'HomePod mini 2', 'Apple TV 4K'],
        quick: ['Shop Home', 'Shop Apple Home Collection', 'Shop Home Accessories'],
        special: ['Apple TV app', 'Apple TV+', 'Home app', 'Siri AI']
    },
    entertainment: {
        primary: ['Explore Entertainment', 'Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+'],
        quick: ['Apple Podcasts', 'Apple Books'],
        special: ['App Store', 'Support']
    },
    accessories: {
        primary: ['Shop All Accessories', 'iPhone', 'Mac', 'Apple Watch', 'Apple Vision Pro', 'AirPods', 'Home', 'AirTag'],
        quick: ['Made by Apple', 'Beats by Dr. Dre'],
        special: ['MagSafe', 'Cases & Protection']
    },
    support: {
        primary: ['iPhone', 'Mac', 'iPad', 'Watch', 'Apple Vision Pro', 'AirPods', 'Home', 'Music'],
        quick: ['Community', 'Check Coverage', 'Repair'],
        special: ['Get Help', 'AppleCare+']
    }
};

const productDetails = {
    'Apple HomeView': {
        price: 299,
        desc: 'Designed for life at home. Apple HomeView keeps the whole household connected, entertained, and in the know with a 7-inch Liquid Retina display, Spatial Audio speakers, and conversational Siri AI.',
        specs: [
            '7-inch Liquid Retina display with customizable faces',
            'Conversational Siri AI powered by Apple Intelligence',
            'Recognizes up to six household members automatically',
            'Available in Silver, Starlight, Rose Pink, and Space Gray'
        ]
    },
    'iPhone 18 Pro': {
        price: 1099,
        desc: 'The most advanced camera system ever in an iPhone, featuring a 48MP Fusion Main camera with mechanical variable aperture, redesigned Dynamic Island, and the 2nm A20 Pro chip.',
        specs: [
            '6.3" or 6.9" Super Retina XDR display (3000 nits peak)',
            'A20 Pro chip built on 2-nanometer architecture',
            '48MP Fusion Main camera with variable aperture + 8x Telephoto',
            'Up to 33 hours video playback'
        ]
    },
    'iPhone Duo': {
        price: 1799,
        desc: 'A new iPhone enters the fold. When open, it features a creaseless 7.6-inch Super Retina XDR inner display with nano-texture glass, Split View multitasking, and vapor-cooled A20 Pro performance.',
        specs: [
            '7.6-inch creaseless inner display + outer cover display',
            'Durable titanium frame and precision hinge cover',
            '48MP Dual Fusion camera system with Duo Preview',
            'Dual-battery system for all-day power'
        ]
    },
    'Apple Watch Series 12': {
        price: 399,
        desc: 'Featuring a redesigned magnetic band system for effortless comfort, extended battery life, and next-generation health tracking.',
        specs: [
            'Wide-angle OLED Always-On Retina display',
            'New quick-release magnetic band architecture',
            'Advanced sleep and cardiovascular health insights',
            'Water resistant to 50 meters'
        ]
    },
    'AirPods 5': {
        price: 149,
        desc: 'Best-in-class open-ear Active Noise Cancellation, force sensor with volume swipe on the stem, and Live Translation powered by Apple Intelligence.',
        specs: [
            'Open-ear Active Noise Cancellation & Adaptive Audio',
            'Volume swipe gesture control directly on the stem',
            'Real-time Live Translation across languages',
            'Up to 22 hours total listening time with charging case'
        ]
    },
    'MacBook Pro M6': {
        price: 1999,
        desc: 'Tailored for professionals with a thinner build, Tandem OLED display, and 2nm M6 Pro and M6 Max chips.',
        specs: [
            '14.2" or 16.2" Tandem OLED Liquid Retina XDR display',
            'Apple M6 Pro or M6 Max 2nm chip',
            'Up to 24 hours of battery life',
            'Thunderbolt 5, HDMI, SDXC, and MagSafe 3'
        ]
    },
    'iPad mini': {
        price: 499,
        desc: 'Now with an ultra-vibrant OLED display, thinner bezels, and the A19 Pro chip in an ultra-portable design.',
        specs: [
            '8.3-inch OLED Liquid Retina display',
            'A19 Pro chip with Apple Intelligence',
            'Supports Apple Pencil Pro',
            'IP68 water and dust resistance'
        ]
    },
    'HomePod mini 2': {
        price: 99,
        desc: 'Surprising sound for its size, now upgraded with Siri AI, Ultra Wideband Handoff, and smart home Matter hub support.',
        specs: [
            '360-degree rich acoustic waveguide',
            'Built-in Siri AI and multiroom audio sync',
            'Temperature and humidity sensors',
            'Seamless intercom with Apple HomeView'
        ]
    },
    'Apple Vision Pro': {
        price: 3499,
        desc: 'Seamlessly blends digital content with your physical space using eyes, hands, and voice.',
        specs: [
            'Custom micro-OLED displays with 23 million pixels',
            'Dual-chip M2 + R1 spatial processing',
            'Spatial Audio with dynamic head tracking',
            'visionOS spatial operating system'
        ]
    }
};

// ================= STATE =================
let bag = [];
let currentBuyProduct = { name: 'Apple HomeView', basePrice: 299, color: 'Silver', storage: 'Standard / 256GB', extra: 0 };

// ================= NAVIGATION & DROPDOWNS =================
const megaMenu = document.getElementById('megaMenu');
const megaMenuContent = document.getElementById('megaMenuContent');
const searchDropdown = document.getElementById('searchDropdown');
const bagDropdown = document.getElementById('bagDropdown');
const pageBackdrop = document.getElementById('pageBackdrop');
const navLinks = document.getElementById('navLinks');

function closeAllDropdowns() {
    megaMenu.classList.remove('active');
    searchDropdown.classList.remove('active');
    bagDropdown.classList.remove('active');
    pageBackdrop.classList.remove('active');
}

pageBackdrop.addEventListener('click', closeAllDropdowns);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 834) return;
        const key = link.getAttribute('data-menu');
        const data = megaMenuData[key];
        if (!data) return;

        megaMenuContent.innerHTML = `
            <div class="mega-grid">
                <div class="mega-col primary">
                    <h5>Explore ${link.textContent}</h5>
                    <ul>${data.primary.map(item => `<li><a href="#${key === 'home' ? 'homeview' : key}" onclick="closeAllDropdowns()">${item}</a></li>`).join('')}</ul>
                </div>
                <div class="mega-col secondary">
                    <h5>Shop ${link.textContent}</h5>
                    <ul>${data.quick.map(item => `<li><a href="#${key === 'home' ? 'homeview' : key}" onclick="closeAllDropdowns()">${item}</a></li>`).join('')}</ul>
                </div>
                <div class="mega-col secondary">
                    <h5>More from ${link.textContent}</h5>
                    <ul>${data.special.map(item => `<li><a href="#${key === 'home' ? 'homeview' : key}" onclick="closeAllDropdowns()">${item}</a></li>`).join('')}</ul>
                </div>
            </div>
        `;
        searchDropdown.classList.remove('active');
        bagDropdown.classList.remove('active');
        megaMenu.classList.add('active');
        pageBackdrop.classList.add('active');
    });
});

document.getElementById('globalNav').addEventListener('mouseleave', () => {
    megaMenu.classList.remove('active');
    if (!searchDropdown.classList.contains('active') && !bagDropdown.classList.contains('active')) {
        pageBackdrop.classList.remove('active');
    }
});

document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ================= LIVE SEARCH =================
const liveSearchInput = document.getElementById('liveSearchInput');
const searchResults = document.getElementById('searchResults');

document.getElementById('searchToggle').addEventListener('click', () => {
    const isOpen = searchDropdown.classList.contains('active');
    closeAllDropdowns();
    if (!isOpen) {
        searchDropdown.classList.add('active');
        pageBackdrop.classList.add('active');
        liveSearchInput.focus();
    }
});

document.getElementById('clearSearchBtn').addEventListener('click', () => {
    liveSearchInput.value = '';
    liveSearchInput.focus();
});

liveSearchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const allProducts = Object.keys(productDetails);
    if (!q) return;

    const matches = allProducts.filter(p => p.toLowerCase().includes(q));
    if (matches.length > 0) {
        searchResults.innerHTML = `
            <p class="dropdown-label">Suggested Products</p>
            <ul>
                ${matches.map(m => `<li><a href="#" onclick="closeAllDropdowns(); openBuyModal('${m}', ${productDetails[m].price})">→ ${m} — From $${productDetails[m].price}</a></li>`).join('')}
            </ul>
        `;
    } else {
        searchResults.innerHTML = `<p class="dropdown-label">No exact matches for "${e.target.value}"</p>`;
    }
});

// ================= SHOPPING BAG =================
document.getElementById('bagToggle').addEventListener('click', () => {
    const isOpen = bagDropdown.classList.contains('active');
    closeAllDropdowns();
    if (!isOpen) {
        bagDropdown.classList.add('active');
        pageBackdrop.classList.add('active');
        renderBag();
    }
});

const buyModal = document.getElementById('buyModal');
const learnModal = document.getElementById('learnModal');

function openBuyModal(name, basePrice) {
    closeAllDropdowns();
    closeModals();
    currentBuyProduct = { name, basePrice, color: 'Silver', storage: 'Standard / 256GB', extra: 0 };
    document.getElementById('buyProductTitle').textContent = `Buy ${name}`;
    updateBuyPrice();
    buyModal.classList.add('active');
}

function updateBuyPrice() {
    const total = currentBuyProduct.basePrice + currentBuyProduct.extra;
    document.getElementById('buyProductPrice').textContent = `Total: $${total.toLocaleString()}`;
}

document.querySelectorAll('.color-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentBuyProduct.color = btn.getAttribute('data-color');
        document.getElementById('selectedColorText').textContent = `Finish: ${currentBuyProduct.color}`;
    });
});

document.querySelectorAll('.storage-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.storage-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentBuyProduct.storage = btn.getAttribute('data-size');
        currentBuyProduct.extra = parseInt(btn.getAttribute('data-extra'));
        updateBuyPrice();
    });
});

document.getElementById('addToBagConfirmBtn').addEventListener('click', () => {
    const finalPrice = currentBuyProduct.basePrice + currentBuyProduct.extra;
    bag.push({
        id: Date.now(),
        name: currentBuyProduct.name,
        details: `${currentBuyProduct.color} · ${currentBuyProduct.storage}`,
        price: finalPrice
    });
    updateBagBadge();
    closeModals();
    bagDropdown.classList.add('active');
    pageBackdrop.classList.add('active');
    renderBag();
});

function updateBagBadge() {
    document.getElementById('bagCount').textContent = bag.length;
}

function renderBag() {
    const container = document.getElementById('bagItemsContainer');
    const footer = document.getElementById('bagFooter');

    if (bag.length === 0) {
        container.innerHTML = `
            <h3 class="bag-empty-title">Your Bag is empty.</h3>
            <p class="bag-empty-sub">Explore products and click "Buy" to add items to your Apple Bag.</p>
        `;
        footer.style.display = 'none';
        return;
    }

    let total = 0;
    container.innerHTML = bag.map(item => {
        total += item.price;
        return `
            <div class="bag-item">
                <div class="bag-item-info">
                    <strong>${item.name}</strong>
                    <span>${item.details}</span>
                </div>
                <div>
                    <strong>$${item.price.toLocaleString()}</strong>
                    <button class="remove-item-btn" onclick="removeFromBag(${item.id})">Remove</button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('bagTotal').textContent = `$${total.toLocaleString()}`;
    footer.style.display = 'block';
}

function removeFromBag(id) {
    bag = bag.filter(item => item.id !== id);
    updateBagBadge();
    renderBag();
}

function checkoutBag() {
    alert(`Thank you for shopping at Apple!\nOrder Total: ${document.getElementById('bagTotal').textContent}`);
    bag = [];
    updateBagBadge();
    closeAllDropdowns();
}

function openLearnModal(title) {
    closeAllDropdowns();
    closeModals();
    const info = productDetails[title];
    document.getElementById('learnTitle').textContent = title;

    if (info) {
        document.getElementById('learnDesc').textContent = info.desc;
        document.getElementById('learnSpecs').innerHTML = info.specs.map(s => `<li>${s}</li>`).join('');
        const buyBtn = document.getElementById('learnToBuyBtn');
        buyBtn.style.display = 'inline-block';
        buyBtn.onclick = () => openBuyModal(title, info.price);
    } else {
        document.getElementById('learnDesc').textContent = `Stream and experience ${title} across Apple HomeView, iPhone, iPad, Mac, and Apple TV.`;
        document.getElementById('learnSpecs').innerHTML = '';
        document.getElementById('learnToBuyBtn').style.display = 'none';
    }

    learnModal.classList.add('active');
}

function closeModals() {
    buyModal.classList.remove('active');
    learnModal.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllDropdowns();
        closeModals();
    }
});

// ================= CAROUSEL =================
const tvTrack = document.getElementById('tvTrack');
const tvDots = document.querySelectorAll('.tv-dot');
const playPauseBtn = document.getElementById('playPauseBtn');
let slideIndex = 0;
let isPlaying = true;

function goToSlide(idx) {
    slideIndex = idx;
    tvTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
    tvDots.forEach(d => d.classList.remove('active'));
    tvDots[slideIndex].classList.add('active');
}

tvDots.forEach(dot => {
    dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.getAttribute('data-slide')));
    });
});

setInterval(() => {
    if (isPlaying) {
        goToSlide((slideIndex + 1) % tvDots.length);
    }
}, 4500);

playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? '❚❚' : '▶';
});