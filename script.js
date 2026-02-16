// ==================== GAME DATA ====================
const gameData = {
    version: 5, // Naikkan ke versi 5!
    coins: 500,
    diamonds: 0,
    exp: 0,
    level: 1,
    currentRod: 0,
    currentBait: 0,
    currentDepth: "surface",
    depthGear: {
        boat: false,
        ship: false,
        snorkel: false,
        submarine: false,
        turtleHat: false,    // Untuk Atlantis
        maskOfSatoshi: false, // Untuk Crypto
        ghostShip: false      // NEW: Untuk buka dungeon
    },
    backpack: [],
    selectedFish: [],
    totalSellValue: 0,
    activePotions: [],
    totalFishCaught: 0,
    gachaStats: {
        totalSpins: 0,
        rodsObtained: [],
        secretGachaCount: 0,
        cryptoGachaCount: 0,
        mysteryBoxes: {
            basic: 0,
            normal: 0,
            secret: 0
        }
    },
    village: {
        hutLevel: 1,
        assistants: 0,
        lastAssistantFish: 0
    },
    settings: {
        animations: true,
        notifications: true
    },
    aquarium: {
        basic: {},
        legendary: {},
        mythical: {},
        secret: {},
        special: {}
    },
    pets: {
        owned: [],
        active: null
    },
    skills: {
        lucky: { level: 0, bonus: 0 },
        cast: { level: 0, bonus: 0 }
    },
    gamepass: {
        owned: false,
        level: 1,
        exp: 0,
        rewardsClaimed: []
    },
    rank: {
        current: "Warrior",
        exp: 0,
        wins: 0,
        losses: 0,
        totalBattles: 0,
        leaderboardPosition: 0,
        highestRank: "Warrior"
    },
    updateSettings: {
        lastUpdateCheck: Date.now(),
        updateAvailable: false,
        updateIgnored: false,
        remindLater: false,
        remindTime: null
    },
    atlantis: {
        active: true,
        spotId: 7
    },
    favoriteFish: [],
    
    // ==================== NEW: DUNGEON SYSTEM ====================
    dungeon: {
        unlocked: false, // Dungeon terkunci sampai punya Ghost Ship + One Ring
        fishEquipment: {
            equippedFish: null,
            weapon: null,
            armor: null
        },
        dungeonProgress: {
            1: { completed: false, bossesDefeated: [] },
            2: { completed: false, bossesDefeated: [] },
            3: { completed: false, bossesDefeated: [] },
            4: { completed: false, bossesDefeated: [] }
        },
        currentBattle: null,
        battleInProgress: false,
        playerTurn: true
    },
    
    // Special items untuk dungeon
    specialItems: {
        oneRing: false // One Ring dari exchange
    }
};

// ==================== VERSION CONTROL ====================
const GAME_VERSIONS = {
    current: 5,
    latest: 5,
    releaseDate: "2024-02-16",
    features: {
        1: "🎣 Game dasar",
        2: "✨ Spot Brainrot & Crypto, Exchange Bitcoin",
        3: "🌊 Sistem Kedalaman & Depth Gear",
        4: "🐕 Pets & Skill Tree",
        5: "🏆 Event Spesial",
        6: "🌊 Atlantis, Mystery Boxes, Favorite Fish, Exchange Coin-Diamond",
        7: "🏆 Leaderboard & 4 Rank (Warrior, Legend, Mythical, Immortal)",
        8: "🎭 Mask of Satoshi, Turtle Hat, Gacha Crypto, Rods & Baits baru",
        9: "⚔️ DUNGEON UPDATE! Ghost Ship (500💎), One Ring (10 Secret), 12 Bosses!"
    }
};

// ==================== FISHING SPOTS ====================
const fishingSpots = [
    {
        id: 0,
        name: "Danau Biasa",
        background: "linear-gradient(135deg, #87CEEB, #1E90FF)",
        color: "#1E90FF",
        fishes: [
            { id: 0, name: "Ikan Mas", rarity: "basic", chance: 25, price: 10, emoji: "🐟" },
            { id: 1, name: "Ikan Lele", rarity: "basic", chance: 20, price: 8, emoji: "🐠" },
            { id: 2, name: "Ikan Nila", rarity: "basic", chance: 15, price: 12, emoji: "🐡" },
            { id: 3, name: "Ikan Guppy", rarity: "basic", chance: 10, price: 6, emoji: "🐠" },
            { id: 4, name: "Ikan Hiu", rarity: "legendary", chance: 8, price: 50, emoji: "🦈" },
            { id: 5, name: "Ikan Pari", rarity: "legendary", chance: 7, price: 45, emoji: "🐠" },
            { id: 6, name: "Ikan Todak", rarity: "legendary", chance: 5, price: 55, emoji: "🐟" },
            { id: 7, name: "Ikan Salmon", rarity: "legendary", chance: 5, price: 60, emoji: "🐠" },
            { id: 8, name: "Ikan Naga", rarity: "mythical", chance: 2, price: 150, emoji: "🐉" },
            { id: 9, name: "Ikan Phoenix", rarity: "mythical", chance: 1.5, price: 180, emoji: "🐦‍🔥" },
            { id: 10, name: "Ikan Unicorn", rarity: "mythical", chance: 0.5, price: 200, emoji: "🦄" },
            { id: 11, name: "Ikan Legenda", rarity: "secret", chance: 0.1, price: 1000, emoji: "🌟", spot: "danau" },
            { id: 12, name: "Ikan Kosmik", rarity: "secret", chance: 0.05, price: 2500, emoji: "🌌", spot: "danau" }
        ]
    },
    {
        id: 1, 
        name: "Kuil Suci",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: "#4B0082",
        fishes: [
            { id: 100, name: "Ikan Suci", rarity: "basic", chance: 20, price: 15, emoji: "🐟" },
            { id: 101, name: "Ikan Monk", rarity: "basic", chance: 18, price: 12, emoji: "🐠" },
            { id: 102, name: "Ikan Bless", rarity: "basic", chance: 12, price: 18, emoji: "🐡" },
            { id: 103, name: "Ikan Zen", rarity: "basic", chance: 10, price: 14, emoji: "🐠" },
            { id: 104, name: "Ikan Divine", rarity: "legendary", chance: 10, price: 80, emoji: "✨" },
            { id: 105, name: "Ikan Angel", rarity: "legendary", chance: 8, price: 95, emoji: "🪽" },
            { id: 106, name: "Ikan Temple", rarity: "legendary", chance: 7, price: 110, emoji: "⛰️" },
            { id: 107, name: "Ikan Spirit", rarity: "legendary", chance: 5, price: 120, emoji: "👻" },
            { id: 108, name: "Ikan Deva", rarity: "mythical", chance: 4, price: 300, emoji: "💥" },
            { id: 109, name: "Ikan Buddha", rarity: "mythical", chance: 3, price: 450, emoji: "🦚" },
            { id: 110, name: "Ikan Nirvana", rarity: "mythical", chance: 1, price: 600, emoji: "🪷" },
            { id: 111, name: "Rahata Turtle", rarity: "secret", chance: 0.1, price: 2500, emoji: "🐢", spot: "kuil" },
            { id: 112, name: "Mbah To Fish", rarity: "secret", chance: 0.05, price: 5000, emoji: "🫎", spot: "kuil" },
            { id: 113, name: "Raji Fish", rarity: "secret", chance: 0.01, price: 10000, emoji: "🪼", spot: "kuil" }
        ]
    },
    {
        id: 2,
        name: "Laut Dalam", 
        background: "linear-gradient(135deg, #00008B, #000080, #191970)",
        color: "#000080",
        fishes: [
            { id: 200, name: "Ikan Teri", rarity: "basic", chance: 15, price: 20, emoji: "🐟" },
            { id: 201, name: "Ikan Tuna", rarity: "basic", chance: 15, price: 25, emoji: "🐠" },
            { id: 202, name: "Ikan Tongkol", rarity: "basic", chance: 10, price: 30, emoji: "🐡" },
            { id: 203, name: "Ikan Sarden", rarity: "basic", chance: 10, price: 18, emoji: "🐠" },
            { id: 204, name: "Ikan Paus", rarity: "legendary", chance: 10, price: 200, emoji: "🐋" },
            { id: 205, name: "Ikan Gurita", rarity: "legendary", chance: 9, price: 180, emoji: "🦑" },
            { id: 206, name: "Ikan Lumba", rarity: "legendary", chance: 8, price: 220, emoji: "🐬" },
            { id: 207, name: "Ikan Hiu Martil", rarity: "legendary", chance: 5, price: 250, emoji: "🦈" },
            { id: 208, name: "Ikan Naga Laut", rarity: "mythical", chance: 6, price: 800, emoji: "🦎" },
            { id: 209, name: "Ikan Poseidon", rarity: "mythical", chance: 4, price: 1200, emoji: "🔱" },
            { id: 210, name: "Ikan Siren", rarity: "mythical", chance: 2, price: 1500, emoji: "🧜‍♀️" },
            { id: 211, name: "Kraken Raksasa", rarity: "secret", chance: 0.1, price: 8000, emoji: "🐙", spot: "laut" },
            { id: 212, name: "Leviathan", rarity: "secret", chance: 0.05, price: 20000, emoji: "🐍", spot: "laut" },
            { id: 213, name: "Cthulhu", rarity: "secret", chance: 0.001, price: 50000, emoji: "👹", spot: "laut" }
        ]
    },
    {
        id: 3,
        name: "Sungai Emas",
        background: "linear-gradient(135deg, #FFD700, #FFA500, #FF8C00)",
        color: "#FFD700", 
        fishes: [
            { id: 300, name: "Ikan Koi", rarity: "basic", chance: 15, price: 30, emoji: "🐟" },
            { id: 301, name: "Ikan Komet", rarity: "basic", chance: 12, price: 25, emoji: "🐠" },
            { id: 302, name: "Ikan Mas Koki", rarity: "basic", chance: 8, price: 35, emoji: "🐡" },
            { id: 303, name: "Ikan Kaca", rarity: "basic", chance: 5, price: 28, emoji: "🐠" },
            { id: 304, name: "Ikan Dragon", rarity: "legendary", chance: 10, price: 300, emoji: "🐲" },
            { id: 305, name: "Ikan Phoenix Gold", rarity: "legendary", chance: 9, price: 350, emoji: "🔥" },
            { id: 306, name: "Ikan Unicorn Gold", rarity: "legendary", chance: 8, price: 400, emoji: "🦄" },
            { id: 307, name: "Ikan Titan", rarity: "legendary", chance: 5, price: 450, emoji: "⚡" },
            { id: 308, name: "Ikan Emperor", rarity: "mythical", chance: 5, price: 1200, emoji: "🦂" },
            { id: 309, name: "Ikan Celestial", rarity: "mythical", chance: 4, price: 1800, emoji: "⭐" },
            { id: 310, name: "Ikan Eternal", rarity: "mythical", chance: 2, price: 2500, emoji: "💎" },
            { id: 311, name: "Golden Leviathan", rarity: "secret", chance: 0.05, price: 10000, emoji: "🐉", spot: "sungai" },
            { id: 312, name: "Sun Fish", rarity: "secret", chance: 0.01, price: 15000, emoji: "☀️", spot: "sungai" },
            { id: 313, name: "Moster Locness", rarity: "secret", chance: 0.005, price: 50000, emoji: "🦕", spot: "sungai" }
        ]
    },
    {
        id: 4,
        name: "Luar Angkasa",
        background: "linear-gradient(135deg, #000033, #000066, #19003a, #330066)",
        color: "#6600cc",
        fishes: [
            { id: 400, name: "Bintang Jatuh", rarity: "basic", chance: 18, price: 60, emoji: "⭐" },
            { id: 401, name: "Komet Kecil", rarity: "basic", chance: 15, price: 55, emoji: "☄️" },
            { id: 402, name: "Debu Kosmik", rarity: "basic", chance: 12, price: 50, emoji: "✨" },
            { id: 403, name: "Alien Fish", rarity: "legendary", chance: 5, price: 800, emoji: "👽" },
            { id: 404, name: "Blob Fish", rarity: "legendary", chance: 5, price: 750, emoji: "🐷" },
            { id: 405, name: "Ikan UFO", rarity: "mythical", chance: 0.5, price: 1000, emoji: "🛸" },
            { id: 406, name: "Ikan Gileg", rarity: "mythical", chance: 0.1, price: 2000, emoji: "🌠" },
            { id: 407, name: "404 Fish", rarity: "secret", chance: 0.001, price: 50000, emoji: "🦠", spot: "angkasa" },
            { id: 408, name: "1x1x1 Fish", rarity: "secret", chance: 0.0009, price: 100000, emoji: "💠", spot: "angkasa" },
            { id: 409, name: "Elshark Gran Maja", rarity: "secret", chance: 0.0001, price: 1000000, emoji: "🎃", spot: "angkasa" }
        ]
    },
    {
        id: 5,
        name: "🧠 Brainrot",
        background: "linear-gradient(135deg, #ff00ff, #00ffff, #ff00ff)",
        color: "#ff00ff",
        fishes: [
            { id: 500, name: "Skibidi Toilet", rarity: "basic", chance: 25, price: 69, emoji: "🚽", spot: "brainrot" },
            { id: 501, name: "Sigma Male", rarity: "basic", chance: 25, price: 42, emoji: "😎", spot: "brainrot" },
            { id: 502, name: "Gyat", rarity: "basic", chance: 20, price: 100, emoji: "🍑", spot: "brainrot" },
            { id: 503, name: "Hawk Tuah", rarity: "legendary", chance: 8, price: 420, emoji: "🌬️", spot: "brainrot" },
            { id: 504, name: "Skull Emoji", rarity: "legendary", chance: 7, price: 500, emoji: "💀", spot: "brainrot" },
            { id: 505, name: "Ohio Final Boss", rarity: "legendary", chance: 5, price: 666, emoji: "👹", spot: "brainrot" },
            { id: 506, name: "Ambatukam", rarity: "mythical", chance: 3, price: 999, emoji: "🏃", spot: "brainrot" },
            { id: 507, name: "Among Us", rarity: "mythical", chance: 2, price: 777, emoji: "ඞ", spot: "brainrot" },
            { id: 508, name: "Big Smoke Order", rarity: "mythical", chance: 2, price: 888, emoji: "🍔", spot: "brainrot" },
            { id: 509, name: "Skibidi Toilet Rizzler Sigma", rarity: "secret", chance: 0.2, price: 69420, emoji: "🧠", spot: "brainrot" },
            { id: 510, name: "Brainrot Overlord", rarity: "secret", chance: 0.1, price: 999999, emoji: "👑", spot: "brainrot" }
        ]
    },
    {
        id: 6,
        name: "₿ Crypto",
        background: "linear-gradient(135deg, #F7931A, #4CAF50, #F7931A)",
        color: "#F7931A",
        fishes: [
            { id: 600, name: "Dogecoin", rarity: "basic", chance: 35, price: 10, emoji: "🐕", spot: "crypto" },
            { id: 601, name: "Shiba Inu", rarity: "basic", chance: 35, price: 8, emoji: "🐕‍🦺", spot: "crypto" },
            { id: 602, name: "HypeLiquid", rarity: "legendary", chance: 15, price: 500, emoji: "🔋", spot: "crypto" },
            { id: 603, name: "Solana", rarity: "legendary", chance: 10, price: 500, emoji: "🌌", spot: "crypto" },
            { id: 604, name: "Binance Coin", rarity: "mythical", chance: 3, price: 3000, emoji: "🪙", spot: "crypto" },
            { id: 605, name: "Ethereum", rarity: "mythical", chance: 2, price: 2500, emoji: "💎", spot: "crypto" },
            { id: 606, name: "Bitcoin", rarity: "secret", chance: 0.1, price: 50000, emoji: "₿", spot: "crypto" }
        ]
    }
];

// ==================== ATLANTIS SPOT ====================
const atlantisSpot = {
    id: 7,
    name: "🌊 Atlantis",
    background: "linear-gradient(135deg, #00ffff, #006994, #000080)",
    color: "#00ffff",
    isEventSpot: false,
    fishes: [
        { id: 700, name: "Dolphin", rarity: "legendary", chance: 70, price: 200, emoji: "🐬", spot: "atlantis" },
        { id: 701, name: "Whale", rarity: "mythical", chance: 29.9, price: 500, emoji: "🐋", spot: "atlantis" },
        { id: 702, name: "Neptunus", rarity: "special", chance: 0.1, price: 50000, emoji: "🧜‍♂️", spot: "atlantis" }
    ]
};
fishingSpots.push(atlantisSpot);

// ==================== WEATHER DATA ====================
const weather = {
    current: "sunny",
    effects: {
        sunny: { luck: 1.0, text: "Cerah ☀️", color: "#FFD700", buff: "Normal", icon: "☀️" },
        rainy: { luck: 1.3, text: "Hujan 🌧️", color: "#4682B4", buff: "+30% Luck", icon: "🌧️" },
        stormy: { luck: 2.0, text: "Badai ⚡", color: "#4B0082", buff: "+100% Luck", icon: "⚡" },
        foggy: { luck: 0.8, text: "Berkabut 🌫️", color: "#808080", buff: "-20% Luck", icon: "🌫️" },
        windy: { luck: 1.5, text: "Berangin 💨", color: "#87CEEB", buff: "+50% Luck", icon: "💨" }
    }
};

// ==================== DEPTH SYSTEM ====================
const depthLevels = {
    surface: { name: "Permukaan", description: "Tidak perlu gear", requiredGear: null, luckMultiplier: 1.0, rareBonus: 1.0, icon: "🌊" },
    middle: { name: "Tengah", description: "Butuh Perahu atau Kapal", requiredGear: ["boat", "ship"], luckMultiplier: 1.3, rareBonus: 1.5, icon: "🏊‍♂️" },
    deep: { name: "Dalam", description: "Butuh Snorkel", requiredGear: ["snorkel"], luckMultiplier: 1.8, rareBonus: 2.5, icon: "🐠" },
    abyss: { name: "Abyss", description: "Butuh Kapal Selam", requiredGear: ["submarine"], luckMultiplier: 2.5, rareBonus: 5.0, icon: "👻" }
};

// ==================== DEPTH GEAR dengan GHOST SHIP ====================
const depthGear = [
    { id: "boat", name: "Perahu", description: "Bisa memancing di kedalaman Tengah", price: 2000, currency: "coins", emoji: "🚣" },
    { id: "ship", name: "Kapal", description: "Bisa memancing di kedalaman Tengah", price: 5000, currency: "coins", emoji: "🚢" },
    { id: "snorkel", name: "Snorkel", description: "Bisa memancing di kedalaman Dalam", price: 10000, currency: "coins", emoji: "🤿" },
    { id: "submarine", name: "Kapal Selam", description: "Bisa memancing di kedalaman Abyss", price: 100, currency: "diamonds", emoji: "🛸" },
    { id: "turtleHat", name: "🐢 Turtle Hat", description: "Memungkinkan memancing di Atlantis", price: 100000, currency: "coins", emoji: "🐢" },
    { id: "maskOfSatoshi", name: "🎭 Mask of Satoshi", description: "Memungkinkan memancing di Crypto Spot", price: 500, currency: "diamonds", emoji: "🎭" },
    // NEW: Ghost Ship untuk buka dungeon (WAJIB)
    { id: "ghostShip", name: "👻 GHOST SHIP", description: "Kapal hantu mistis - WAJIB untuk buka dungeon", price: 500, currency: "diamonds", emoji: "🚢👻" }
];

// ==================== SECRET FISH GACHA POOL ====================
const secretFishPool = [
    { id: 11, name: "Ikan Legenda", emoji: "🌟", price: 1000, rarity: "secret", spot: "danau" },
    { id: 12, name: "Ikan Kosmik", emoji: "🌌", price: 2500, rarity: "secret", spot: "danau" },
    { id: 111, name: "Rahata Turtle", emoji: "🐢", price: 2500, rarity: "secret", spot: "kuil" },
    { id: 112, name: "Mbah To Fish", emoji: "🫎", price: 5000, rarity: "secret", spot: "kuil" },
    { id: 113, name: "Raji Fish", emoji: "🪼", price: 10000, rarity: "secret", spot: "kuil" },
    { id: 211, name: "Kraken Raksasa", emoji: "🐙", price: 8000, rarity: "secret", spot: "laut" },
    { id: 212, name: "Leviathan", emoji: "🐍", price: 20000, rarity: "secret", spot: "laut" },
    { id: 213, name: "Cthulhu", emoji: "👹", price: 50000, rarity: "secret", spot: "laut" },
    { id: 311, name: "Golden Leviathan", emoji: "🐉", price: 10000, rarity: "secret", spot: "sungai" },
    { id: 312, name: "Sun Fish", emoji: "☀️", price: 15000, rarity: "secret", spot: "sungai" },
    { id: 313, name: "Moster Locness", emoji: "🦕", price: 50000, rarity: "secret", spot: "sungai" },
    { id: 407, name: "404 Fish", emoji: "🦠", price: 50000, rarity: "secret", spot: "angkasa" },
    { id: 408, name: "1x1x1 Fish", emoji: "💠", price: 100000, rarity: "secret", spot: "angkasa" },
    { id: 409, name: "Elshark Gran Maja", emoji: "🎃", price: 1000000, rarity: "secret", spot: "angkasa" },
    { id: 509, name: "Skibidi Toilet Rizzler Sigma", emoji: "🧠", price: 69420, rarity: "secret", spot: "brainrot" },
    { id: 510, name: "Brainrot Overlord", emoji: "👑", price: 999999, rarity: "secret", spot: "brainrot" },
    { id: 606, name: "Bitcoin", emoji: "₿", price: 50000, rarity: "secret", spot: "crypto" },
    { id: 702, name: "Neptunus", emoji: "🧜‍♂️", price: 50000, rarity: "special", spot: "atlantis" }
];

// ==================== EQUIPMENT DATA ====================
const rods = [
    { id: 0, name: "Pancingan Bambu", luck: 1, price: 0, owned: true, emoji: "🎋" },
    { id: 1, name: "Pancingan Besi", luck: 2, price: 350, owned: false, emoji: "⚙️" },
    { id: 2, name: "Pancingan Emas", luck: 5, price: 700, owned: false, emoji: "🪙" },
    { id: 3, name: "Pancingan Platinum", luck: 10, price: 1000, owned: false, emoji: "💎" },
    { id: 4, name: "Pancingan Legendaris", luck: 20, price: 3000, owned: false, emoji: "🏆" },
    { id: 5, name: "Pancingan Dragon", luck: 40, price: 6000, owned: false, emoji: "🐲" },
    { id: 6, name: "Pancingan Cosmic", luck: 80, price: 10000, owned: false, emoji: "🌌" },
    { id: 7, name: "Element Rod", luck: 120, price: 0, owned: false, unlocked: false, special: true, emoji: "⚡" },
    { id: 8, name: "Trident Rod", luck: 200, price: 0, owned: false, unlocked: false, special: true, emoji: "🔱" },
    { id: 9, name: "Galaxy Sword Rod", luck: 404, price: 440044, owned: false, emoji: "⚔️" },
    { id: 10, name: "Tyo Rod", luck: 999, price: 999999, owned: false, emoji: "👑" },
    { id: 11, name: "1x1x1 Rod", luck: 1111, price: 0, owned: false, unlocked: false, special: true, emoji: "🪬" },
    { id: 12, name: "GhostFinn Rod", luck: 10000, price: 0, owned: false, fromExchange: false, unlocked: false, emoji: "👻" },
    { id: 13, name: "Timothy Rod", luck: 15000, price: 500, currency: "diamonds", owned: false, emoji: "⏰" },
    { id: 14, name: "Satoshi Rod", luck: 20000, price: 0, owned: false, fromExchange: true, unlocked: false, emoji: "₿" }
];

const baits = [
    { id: 0, name: "Umpan Biasa", luck: 1, price: 0, owned: true, emoji: "🪱" },
    { id: 1, name: "Umpan Cacing", luck: 1.5, price: 200, owned: false, emoji: "🪱" },
    { id: 2, name: "Umpan Udang", luck: 2, price: 300, owned: false, emoji: "🦐" },
    { id: 3, name: "Umpan Ikan Kecil", luck: 5, price: 600, owned: false, emoji: "🐟" },
    { id: 4, name: "Umpan Ajaib", luck: 7, price: 700, owned: false, emoji: "✨" },
    { id: 5, name: "Umpan Emas", luck: 15, price: 1500, owned: false, emoji: "🪙" },
    { id: 6, name: "Umpan Dark Matter", luck: 111, price: 22222, owned: false, emoji: "⚫" },
    { id: 7, name: "Umpan Singularity", luck: 125, price: 30000, owned: false, emoji: "🌀" },
    { id: 8, name: "Elshark Bait", luck: 150, price: 50000, owned: false, emoji: "🦈" },
    { id: 9, name: "Bitcoin Bait", luck: 10000, price: 0, owned: false, fromQuest: true, emoji: "₿" },
    { id: 10, name: "Vitalik Bait", luck: 8000, price: 0, owned: false, fromExchange: true, emoji: "💎" }
];

const potions = [
    { id: 0, name: "Luck Potion x2", multiplier: 2, duration: 10, price: 400, emoji: "🧪" },
    { id: 1, name: "Luck Potion x3", multiplier: 3, duration: 8, price: 600, emoji: "🔮" },
    { id: 2, name: "Luck Potion x5", multiplier: 5, duration: 5, price: 1000, emoji: "💎" },
    { id: 3, name: "Luck Potion x10", multiplier: 10, duration: 3, price: 2000, emoji: "✨" },
    { id: 4, name: "Super Luck Potion x100", multiplier: 100, duration: 1, price: 20000, emoji: "🍺" }
];

const gachaRods = [
    { id: 100, name: "Wooden Enchant", luck: 1.2, rarity: "common", chance: 60, emoji: "🎣" },
    { id: 101, name: "Silver Enchant", luck: 2.0, rarity: "rare", chance: 25, emoji: "🥈" },
    { id: 102, name: "Dragon Enchant", luck: 4.0, rarity: "epic", chance: 10, emoji: "🐲" },
    { id: 103, name: "Legendary Enchant", luck: 8.0, rarity: "legendary", chance: 4, emoji: "⚡" },
    { id: 104, name: "Mythic Enchant", luck: 15.0, rarity: "mythical", chance: 1, emoji: "🌟" }
];

// ==================== PETS DATA ====================
const pets = [
    { id: 1, name: "Anjing Keberuntungan", description: "x5 Luck saat memancing", effect: { type: "luck_multiplier", value: 5 }, price: 5000, currency: "coins", emoji: "🐕" },
    { id: 2, name: "Kucing Koin", description: "+100 koin bonus setiap dapat ikan", effect: { type: "coin_bonus", value: 100 }, price: 8000, currency: "coins", emoji: "🐈" },
    { id: 3, name: "Ayam Exp", description: "+10 EXP Gamepass setiap memancing", effect: { type: "exp_bonus", value: 10 }, price: 10000, currency: "coins", emoji: "🐓" },
    { id: 4, name: "Serigala Berlian", description: "10% chance mendapat 1 💎 diamond", effect: { type: "diamond_chance", value: 10, diamond_amount: 1 }, price: 50, currency: "diamonds", emoji: "🐺" }
];

// ==================== MYSTERY BOXES ====================
const mysteryBoxes = {
    basic: {
        name: "Basic Box",
        price: 1000,
        currency: "coins",
        emoji: "📦",
        description: "Berisi hadiah random!",
        items: [
            { type: "coins", amount: 100, chance: 70, emoji: "💰" },
            { type: "diamonds", amount: 10, chance: 20, emoji: "💎" },
            { type: "rod", id: 5, name: "Pancingan Dragon", chance: 10, emoji: "🐲" }
        ]
    },
    normal: {
        name: "Normal Box",
        price: 5000,
        currency: "coins",
        emoji: "📦✨",
        description: "Box dengan hadiah lebih baik!",
        items: [
            { type: "rod", id: 3, name: "Pancingan Platinum", chance: 60, emoji: "💎" },
            { type: "rod", id: 5, name: "Pancingan Dragon", chance: 30, emoji: "🐲" },
            { type: "bait", id: 6, name: "Dark Matter Bait", chance: 10, emoji: "⚫" }
        ]
    },
    secret: {
        name: "Secret Box",
        price: 100,
        currency: "diamonds",
        emoji: "📦💎",
        description: "Box premium untuk pencari tantangan!",
        items: [
            { type: "secretFish", chance: 80, emoji: "🐟" },
            { type: "bait", id: 8, name: "Elshark Bait", chance: 15, emoji: "🦈" },
            { type: "rod", id: 10, name: "Tyo Rod", chance: 5, emoji: "👑" }
        ]
    }
};

// ==================== CRYPTO GACHA ====================
const cryptoGacha = {
    name: "Crypto Gacha",
    price: 25,
    currency: "diamonds",
    emoji: "🎰",
    description: "Dapatkan crypto random!",
    items: [
        { type: "fish", id: 602, name: "HypeLiquid", chance: 30, emoji: "🔋" },
        { type: "fish", id: 603, name: "Solana", chance: 30, emoji: "🌌" },
        { type: "fish", id: 605, name: "Ethereum", chance: 15, emoji: "💎" },
        { type: "fish", id: 604, name: "Binance Coin", chance: 15, emoji: "🪙" },
        { type: "fish", id: 606, name: "Bitcoin", chance: 10, emoji: "₿" }
    ]
};

// ==================== DUNGEON WEAPONS & ARMOR ====================
const dungeonWeapons = [
    { id: 1, name: "Pisau Karang", attack: 10, price: 2000, currency: "coins", emoji: "🔪", description: "Senjata basic +10 ATK" },
    { id: 2, name: "Tombak Nelayan", attack: 25, price: 5000, currency: "coins", emoji: "🔱", description: "Tombak tajam +25 ATK" },
    { id: 3, name: "Pedang Laut", attack: 50, price: 15000, currency: "coins", emoji: "⚔️", description: "Pedang bertenaga ombak +50 ATK" },
    { id: 4, name: "Trident Emas", attack: 100, price: 50, currency: "diamonds", emoji: "🔱✨", description: "Senjata legendaris +100 ATK" },
    { id: 5, name: "Excalibur Ikan", attack: 250, price: 200, currency: "diamonds", emoji: "🗡️👑", description: "Senjata terkuat +250 ATK" }
];

const dungeonArmors = [
    { id: 1, name: "Baju Sisik", defense: 5, price: 1500, currency: "coins", emoji: "🛡️", description: "Armor sisik +5 DEF" },
    { id: 2, name: "Zirah Kerang", defense: 15, price: 4000, currency: "coins", emoji: "🐚", description: "Perlindungan kerang +15 DEF" },
    { id: 3, name: "Baju Baja", defense: 30, price: 10000, currency: "coins", emoji: "🛡️⚙️", description: "Armor baja kokoh +30 DEF" },
    { id: 4, name: "Jubah Hantu", defense: 60, price: 40, currency: "diamonds", emoji: "👻", description: "Jubah misterius +60 DEF" },
    { id: 5, name: "Armor Naga", defense: 150, price: 150, currency: "diamonds", emoji: "🐲🛡️", description: "Armor legendaris +150 DEF" }
];

// ==================== DUNGEON BOSSES ====================
const dungeonBosses = [
    // LEVEL 1 DUNGEON
    {
        id: 101,
        name: "Kepiting Raksasa",
        emoji: "🦀",
        level: 1,
        hp: 300,
        attack: 25,
        defense: 10,
        reward: { coins: 2000, exp: 100 }
    },
    {
        id: 102,
        name: "Gurita Pasir",
        emoji: "🐙",
        level: 1,
        hp: 400,
        attack: 20,
        defense: 15,
        reward: { coins: 2500, exp: 120 }
    },
    {
        id: 103,
        name: "Lobster Perang",
        emoji: "🦞",
        level: 1,
        hp: 350,
        attack: 30,
        defense: 5,
        reward: { coins: 2200, exp: 110 }
    },
    
    // LEVEL 2 DUNGEON
    {
        id: 201,
        name: "Belut Listrik",
        emoji: "⚡🐍",
        level: 2,
        hp: 600,
        attack: 40,
        defense: 20,
        reward: { coins: 4000, exp: 200 }
    },
    {
        id: 202,
        name: "Ikan Keli Hantu",
        emoji: "👻🐟",
        level: 2,
        hp: 550,
        attack: 35,
        defense: 30,
        reward: { coins: 4500, exp: 220 }
    },
    {
        id: 203,
        name: "Pari Malaikat",
        emoji: "😇🐠",
        level: 2,
        hp: 500,
        attack: 45,
        defense: 25,
        reward: { coins: 4200, exp: 210 }
    },
    
    // LEVEL 3 DUNGEON
    {
        id: 301,
        name: "Naga Laut",
        emoji: "🐉",
        level: 3,
        hp: 1000,
        attack: 70,
        defense: 40,
        reward: { coins: 8000, exp: 400 }
    },
    {
        id: 302,
        name: "Kraken Tua",
        emoji: "🐙👁️",
        level: 3,
        hp: 1200,
        attack: 60,
        defense: 50,
        reward: { coins: 9000, exp: 450 }
    },
    {
        id: 303,
        name: "Leviathan",
        emoji: "🐍🌊",
        level: 3,
        hp: 1100,
        attack: 65,
        defense: 45,
        reward: { coins: 8500, exp: 420 }
    },
    
    // LEVEL 4 DUNGEON (BOSS LEGENDARIS)
    {
        id: 401,
        name: "Morgoth",
        emoji: "👑🔥",
        level: 4,
        hp: 3000,
        attack: 150,
        defense: 100,
        reward: { coins: 50000, exp: 2000, special: true }
    },
    {
        id: 402,
        name: "Sauron",
        emoji: "👁️🗿",
        level: 4,
        hp: 3500,
        attack: 140,
        defense: 120,
        reward: { coins: 60000, exp: 2500, special: true }
    },
    {
        id: 403,
        name: "Valar",
        emoji: "✨👼",
        level: 4,
        hp: 4000,
        attack: 130,
        defense: 150,
        reward: { coins: 70000, exp: 3000, special: true }
    }
];

// ==================== DUNGEON LEVELS ====================
const dungeonLevels = [
    {
        id: 1,
        name: "🐚 Pantai Berbisik",
        description: "Dungeon pemula, ombak berbisik membawa rahasia",
        entryFee: 5000,
        requiredLevel: 5,
        background: "linear-gradient(135deg, #00b4d8, #0077b6)",
        color: "#00b4d8",
        bossIds: [101, 102, 103]
    },
    {
        id: 2,
        name: "🕳️ Gua Kegelapan",
        description: "Gelap gulita, penuh monster mengerikan",
        entryFee: 10000,
        requiredLevel: 10,
        background: "linear-gradient(135deg, #2b2b2b, #1a1a1a)",
        color: "#2b2b2b",
        bossIds: [201, 202, 203]
    },
    {
        id: 3,
        name: "🌋 Jurang Maut",
        description: "Jurang terdalam di lautan",
        entryFee: 20000,
        requiredLevel: 15,
        background: "linear-gradient(135deg, #8b0000, #330000)",
        color: "#8b0000",
        bossIds: [301, 302, 303]
    },
    {
        id: 4,
        name: "👑 Throne of Gods",
        description: "Dungeon terakhir, tempat para dewa",
        entryFee: 50000,
        requiredLevel: 20,
        background: "linear-gradient(135deg, #4a00e0, #8e2de2)",
        color: "#4a00e0",
        bossIds: [401, 402, 403]
    }
];

// ==================== EXCHANGE RECIPES + ONE RING ====================
const exchangeRecipes = [
    {
        id: 1,
        name: "Mythic to Rahata",
        description: "Tukar 5 ikan Mythic dengan 1 Rahata Turtle",
        input: [ { type: "fish", rarity: "mythical", quantity: 5, exactFish: false } ],
        output: { type: "fish", id: 111, name: "Rahata Turtle", emoji: "🐢", quantity: 1 }
    },
    {
        id: 2,
        name: "Rahata to 1x1x1",
        description: "Tukar 10 Rahata Turtle dengan 1 1x1x1 Fish",
        input: [ { type: "fish", id: 111, quantity: 10, name: "Rahata Turtle" } ],
        output: { type: "fish", id: 408, name: "1x1x1 Fish", emoji: "💠", quantity: 1 }
    },
    {
        id: 3,
        name: "1x1x1 to Elshark",
        description: "Tukar 2 1x1x1 Fish dengan 1 Elshark Gran Maja",
        input: [ { type: "fish", id: 408, quantity: 2, name: "1x1x1 Fish" } ],
        output: { type: "fish", id: 409, name: "Elshark Gran Maja", emoji: "🎃", quantity: 1 }
    },
    {
        id: 4,
        name: "Elshark to GhostFinn Rod",
        description: "Tukar 5 Elshark Gran Maja dengan GhostFinn Rod (10,000 Luck)",
        input: [ { type: "fish", id: 409, quantity: 5, name: "Elshark Gran Maja" } ],
        output: { type: "rod", id: 12, name: "GhostFinn Rod", luck: 10000, emoji: "👻", quantity: 1 }
    },
    {
        id: 5,
        name: "Bitcoin to Diamond",
        description: "Tukar 1 Bitcoin dengan 250 Diamond",
        input: [ { type: "fish", id: 606, quantity: 1, name: "Bitcoin" } ],
        output: { type: "diamond", quantity: 250, emoji: "💎" }
    },
    {
        id: 6,
        name: "Coin to Diamond",
        description: "Tukar 1000 Coin dengan 1 Diamond",
        input: [ { type: "coin", quantity: 1000 } ],
        output: { type: "diamond", quantity: 1, emoji: "💎" }
    },
    {
        id: 7,
        name: "Coin to Diamonds",
        description: "Tukar 9000 Coin dengan 10 Diamond (Hemat 1000!)",
        input: [ { type: "coin", quantity: 9000 } ],
        output: { type: "diamond", quantity: 10, emoji: "💎" }
    },
    {
        id: 8,
        name: "Diamond to Coin",
        description: "Tukar 1 Diamond dengan 200 Coin",
        input: [ { type: "diamond", quantity: 1 } ],
        output: { type: "coin", quantity: 200, emoji: "💰" }
    },
    {
        id: 9,
        name: "Satoshi Rod",
        description: "Tukar 2 Bitcoin dengan Satoshi Rod (20,000 Luck)",
        input: [ { type: "fish", id: 606, quantity: 2, name: "Bitcoin" } ],
        output: { type: "rod", id: 14, name: "Satoshi Rod", luck: 20000, emoji: "₿", quantity: 1 }
    },
    {
        id: 10,
        name: "Vitalik Bait",
        description: "Tukar 10 Ethereum dengan Vitalik Bait (8,000 Luck)",
        input: [ { type: "fish", id: 605, quantity: 10, name: "Ethereum" } ],
        output: { type: "bait", id: 10, name: "Vitalik Bait", luck: 8000, emoji: "💎", quantity: 1 }
    },
    // ===== ONE RING EXCHANGE =====
    {
        id: 11,
        name: "💍 ONE RING",
        description: "Tukar 10 ikan Secret dengan One Ring (WAJIB untuk buka dungeon)",
        input: [ { type: "fish", rarity: "secret", quantity: 10, exactFish: false } ],
        output: { type: "special", id: "oneRing", name: "One Ring", emoji: "💍", quantity: 1 }
    }
];

// ==================== SKILL TREE DATA ====================
const skillTree = {
    lucky: { name: "Lucky Skill", description: "Menambah keberuntungan +100% per level", maxLevel: 10, basePrice: 1000, priceMultiplier: 2, emoji: "🍀" },
    cast: { name: "Cast Skill", description: "Chance mendapat ikan double +5% per level", maxLevel: 5, basePrice: 2000, priceMultiplier: 2.5, emoji: "🎣" }
};

// ==================== GAMEPASS LEVELS ====================
const gamepassLevels = [
    { level: 1, expRequired: 100, rewards: { coins: 1000, bait: "Umpan Cacing" } },
    { level: 2, expRequired: 200, rewards: { coins: 2000, potion: "Luck Potion x2" } },
    { level: 3, expRequired: 300, rewards: { coins: 3000, rod: "Pancingan Besi" } },
    { level: 4, expRequired: 400, rewards: { coins: 4000, bait: "Umpan Udang" } },
    { level: 5, expRequired: 500, rewards: { coins: 5000, fish: "Ikan Naga" } },
    { level: 6, expRequired: 600, rewards: { coins: 6000, potion: "Luck Potion x3" } },
    { level: 7, expRequired: 700, rewards: { coins: 7000, bait: "Umpan Ikan Kecil" } },
    { level: 8, expRequired: 800, rewards: { coins: 8000, rod: "Pancingan Emas" } },
    { level: 9, expRequired: 900, rewards: { coins: 9000, fish: "Ikan Phoenix" } },
    { level: 10, expRequired: 1000, rewards: { coins: 10000, pet: "Anjing Keberuntungan" } },
    { level: 11, expRequired: 1100, rewards: { coins: 11000, potion: "Luck Potion x5" } },
    { level: 12, expRequired: 1200, rewards: { coins: 12000, bait: "Umpan Emas" } },
    { level: 13, expRequired: 1300, rewards: { coins: 13000, rod: "Pancingan Platinum" } },
    { level: 14, expRequired: 1400, rewards: { coins: 14000, fish: "Ikan Divine" } },
    { level: 15, expRequired: 1500, rewards: { coins: 15000, pet: "Kucing Koin" } },
    { level: 16, expRequired: 1600, rewards: { coins: 16000, potion: "Luck Potion x10" } },
    { level: 17, expRequired: 1700, rewards: { coins: 17000, bait: "Umpan Dark Matter" } },
    { level: 18, expRequired: 1800, rewards: { coins: 18000, rod: "Pancingan Legendaris" } },
    { level: 19, expRequired: 1900, rewards: { coins: 19000, fish: "Kraken Raksasa" } },
    { level: 20, expRequired: 2000, rewards: { coins: 20000, rod: "GhostFinn Rod" } }
];

// ==================== LEADERBOARD NPC RANKS ====================
const leaderboardNPCs = [
    { rank: 1, name: "👑 KingFisher", rankTitle: "Immortal", exp: 50000, wins: 500, emoji: "👑" },
    { rank: 2, name: "⚡ AquaMaster", rankTitle: "Immortal", exp: 45000, wins: 450, emoji: "⚡" },
    { rank: 3, name: "🌊 DeepHunter", rankTitle: "Mythical", exp: 9500, wins: 200, emoji: "🌊" },
    { rank: 4, name: "🐋 WhaleSlayer", rankTitle: "Mythical", exp: 9200, wins: 190, emoji: "🐋" },
    { rank: 5, name: "🎣 ProFisher", rankTitle: "Legend", exp: 4800, wins: 100, emoji: "🎣" }
];

// ==================== RANK BATTLE DATA ====================
const rankData = {
    Warrior: {
        nextRank: "Legend",
        entryFee: 100,
        winReward: { diamonds: 10, exp: 100 },
        lossPenalty: { exp: 25 },
        maxExp: 2000,
        color: "#CD7F32",
        emoji: "⚔️",
        opponents: [
            { name: "Nelayan Pemula", fish: { price: 1000, emoji: "🐟" } },
            { name: "Anak Kampung", fish: { price: 1500, emoji: "🐠" } },
            { name: "Mbah Karto", fish: { price: 2000, emoji: "🐡" } }
        ]
    },
    Legend: {
        nextRank: "Mythical",
        entryFee: 500,
        winReward: { diamonds: 20, exp: 200 },
        lossPenalty: { exp: 50 },
        maxExp: 5000,
        color: "#C0C0C0",
        emoji: "🏆",
        opponents: [
            { name: "Kapten Nelayan", fish: { price: 8000, emoji: "🦈" } },
            { name: "Laksamana", fish: { price: 12000, emoji: "🐋" } },
            { name: "Raja Laut", fish: { price: 15000, emoji: "🐉" } }
        ]
    },
    Mythical: {
        nextRank: "Immortal",
        entryFee: 2000,
        winReward: { diamonds: 35, exp: 300 },
        lossPenalty: { exp: 100 },
        maxExp: 10000,
        color: "#FFD700",
        emoji: "🌟",
        opponents: [
            { name: "Dewa Laut", fish: { price: 80000, emoji: "🔱" } },
            { name: "Kraken Lord", fish: { price: 120000, emoji: "🐙" } },
            { name: "Leviathan", fish: { price: 150000, emoji: "🐍" } }
        ]
    },
    Immortal: {
        nextRank: "Immortal",
        entryFee: 5000,
        winReward: { diamonds: 50, exp: 500 },
        lossPenalty: { exp: 200 },
        maxExp: Infinity,
        color: "#FF00FF",
        emoji: "👑",
        opponents: [
            { name: "Poseidon", fish: { price: 500000, emoji: "🔱" } },
            { name: "Cthulhu Ancient", fish: { price: 750000, emoji: "👹" } },
            { name: "God of Sea", fish: { price: 1000000, emoji: "🌊" } }
        ]
    }
};

// ==================== QUEST SYSTEM ====================
const quests = [
    { id: 1, name: "Element Rod Quest", desc: "Tangkap 2 ikan Secret di Kuil Suci", target: 2, progress: 0, completed: false, reward: "Element Rod", type: "secret_kuil" },
    { id: 2, name: "Trident Rod Quest", desc: "Tangkap 1 Secret di semua spot", target: 4, progress: 0, completed: false, reward: "Trident Rod", type: "secret_all_spots" },
    { id: 3, name: "1x1x1 Rod Quest", desc: "Tangkap 5 ikan Secret di Luar Angkasa", target: 5, progress: 0, completed: false, reward: "1x1x1 Rod", type: "secret_angkasa" },
    { id: 4, name: "Bitcoin Bait Quest", desc: "Dapatkan 1 Bitcoin untuk mendapatkan Bitcoin Bait", target: 1, progress: 0, completed: false, reward: "Bitcoin Bait", type: "bitcoin" }
];

// ==================== GAME VARIABLES ====================
let currentSpot = 0;
let currentDepth = "surface";
let isFishing = false;
let currentPullHandler = null;
let autoSellSettings = { basic: false, legendary: false };
let caughtSecretSpots = { danau: false, kuil: false, laut: false, sungai: false, angkasa: false, brainrot: false, crypto: false, atlantis: false };

// ==================== DOM ELEMENTS ====================
let coinsElement, diamondsElement, expElement, levelElement, fishBtn, gachaBtn;
let backpackItems, shopItems, sellItems, sellTotal, sellBtn, sellAllBtn;
let resultModal, gachaModal, exchangeModal, rankModal, dungeonModal, battleModal;
let resultTitle, resultContent, gachaTitle, gachaContent;
let minigameIndicator;

// ==================== VILLAGE UPGRADES ====================
function getVillageUpgrades() {
    return [
        { type: 'hut', name: 'Fishing Hut Upgrade', desc: `Level ${gameData.village.hutLevel + 1} (+10% Luck)`, price: gameData.village.hutLevel * 1000 + 1000, owned: false, emoji: '🏠' },
        { type: 'assistant', name: 'Hire Assistant', desc: 'Auto-fish every 30 seconds', price: 2000, owned: gameData.village.assistants >= 3, emoji: '👥' }
    ];
}

// ==================== CHECK DUNGEON UNLOCK ====================
function checkDungeonUnlock() {
    const hasGhostShip = gameData.depthGear.ghostShip;
    const hasOneRing = gameData.specialItems.oneRing;
    
    gameData.dungeon.unlocked = hasGhostShip && hasOneRing;
    
    // Update UI dungeon button
    const dungeonBtn = document.getElementById('dungeon-menu-btn');
    if (dungeonBtn) {
        if (gameData.dungeon.unlocked) {
            dungeonBtn.disabled = false;
            dungeonBtn.style.background = 'linear-gradient(45deg, #ff0000, #ff6b6b)';
            dungeonBtn.style.cursor = 'pointer';
            dungeonBtn.title = "Masuk Dungeon";
            dungeonBtn.innerHTML = "⚔️ MASUK DUNGEON ⚔️";
        } else {
            dungeonBtn.disabled = true;
            dungeonBtn.style.background = '#666';
            dungeonBtn.style.cursor = 'not-allowed';
            dungeonBtn.title = "TERKUNCI! Butuh Ghost Ship (500💎) + One Ring (10 Secret Fish)";
            dungeonBtn.innerHTML = "🔒 DUNGEON TERKUNCI 🔒";
        }
    }
    
    return gameData.dungeon.unlocked;
}

// ==================== INITIALIZATION ====================
function initGame() {
    initializeDOMElements();
    
    if (!checkRequiredElements()) {
        setTimeout(initGame, 100);
        return;
    }
    
    loadGame();
    updateUI();
    setupEventListeners();
    loadBackpack();
    loadShop('rods');
    loadSellItems();
    createSpotButtons();
    createDepthButtons();
    createFishAnimation();
    startPotionTimer();
    startWeatherCycle();
    startAssistantTimer();
    
    loadQuests();
    updateGachaTab();
    loadPetShop();
    loadExchange();
    loadSkillTree();
    loadGamepass();
    loadRankBattle();
    loadDepthGearShop();
    
    checkForUpdateOnStart();
    checkDungeonUnlock(); // Cek status dungeon
    
    showNotification("🎮 Game loaded successfully! Cari Ghost Ship & One Ring untuk buka dungeon!", "success");
}

function initializeDOMElements() {
    coinsElement = document.getElementById('coins');
    diamondsElement = document.getElementById('diamonds');
    expElement = document.getElementById('exp');
    levelElement = document.getElementById('level');
    fishBtn = document.getElementById('fish-btn');
    gachaBtn = document.getElementById('gacha-btn');
    backpackItems = document.getElementById('backpack-items');
    shopItems = document.getElementById('shop-items');
    sellItems = document.getElementById('sell-items');
    sellTotal = document.getElementById('sell-total');
    sellBtn = document.getElementById('sell-btn');
    sellAllBtn = document.getElementById('sell-all-btn');
    resultModal = document.getElementById('result-modal');
    gachaModal = document.getElementById('gacha-modal');
    exchangeModal = document.getElementById('exchange-modal');
    rankModal = document.getElementById('rank-modal');
    dungeonModal = document.getElementById('dungeon-modal');
    battleModal = document.getElementById('battle-modal');
    resultTitle = document.getElementById('result-title');
    resultContent = document.getElementById('result-content');
    gachaTitle = document.getElementById('gacha-title');
    gachaContent = document.getElementById('gacha-content');
    minigameIndicator = document.getElementById('minigame-indicator');
}

function checkRequiredElements() {
    const required = [
        coinsElement, levelElement, fishBtn, gachaBtn,
        backpackItems, shopItems, sellItems
    ];
    return required.every(element => element !== null);
}

// ==================== DEPTH SYSTEM FUNCTIONS ====================
function createDepthButtons() {
    const depthContainer = document.getElementById('depth-buttons');
    if (!depthContainer) {
        const spotContainer = document.querySelector('.spot-buttons');
        if (spotContainer) {
            const newDepthContainer = document.createElement('div');
            newDepthContainer.id = 'depth-buttons';
            newDepthContainer.className = 'depth-buttons';
            spotContainer.parentNode.insertBefore(newDepthContainer, spotContainer.nextSibling);
        }
        return;
    }
    
    depthContainer.innerHTML = '';
    
    Object.keys(depthLevels).forEach(depth => {
        const depthBtn = document.createElement('button');
        depthBtn.className = 'depth-btn';
        depthBtn.setAttribute('data-depth', depth);
        depthBtn.textContent = `${depthLevels[depth].icon} ${depthLevels[depth].name}`;
        
        const canAccess = checkDepthAccess(depth);
        
        if (depth === currentDepth) {
            depthBtn.classList.add('active');
        }
        
        if (!canAccess && depth !== 'surface') {
            depthBtn.classList.add('locked');
            depthBtn.disabled = true;
            depthBtn.title = depthLevels[depth].description;
        } else {
            depthBtn.addEventListener('click', () => switchDepth(depth));
        }
        
        depthContainer.appendChild(depthBtn);
    });
}

function checkDepthAccess(depth) {
    if (depth === 'surface') return true;
    
    const requiredGear = depthLevels[depth].requiredGear;
    if (!requiredGear) return false;
    
    return requiredGear.some(gear => gameData.depthGear[gear]);
}

function switchDepth(depth) {
    if (!checkDepthAccess(depth)) {
        showNotification(`❌ Butuh ${depthLevels[depth].description}!`, "error");
        return;
    }
    
    currentDepth = depth;
    updateDepthButtons();
    showNotification(`📍 Pindah ke ${depthLevels[depth].name}`, "success");
}

function updateDepthButtons() {
    const depthButtons = document.querySelectorAll('.depth-btn');
    depthButtons.forEach(btn => {
        const depth = btn.getAttribute('data-depth');
        if (depth === currentDepth) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==================== DEPTH GEAR SHOP dengan GHOST SHIP ====================
function loadDepthGearShop() {
    const gearContainer = document.getElementById('depth-gear-items');
    if (!gearContainer) {
        const depthGearTab = document.getElementById('depth-gear');
        if (depthGearTab) {
            const newContainer = document.createElement('div');
            newContainer.id = 'depth-gear-items';
            newContainer.className = 'items-grid';
            depthGearTab.querySelector('.depth-gear-container')?.appendChild(newContainer);
        }
        return;
    }
    
    gearContainer.innerHTML = '';
    
    depthGear.forEach(gear => {
        const isOwned = gameData.depthGear[gear.id];
        const canAfford = gear.currency === "coins" ? 
            gameData.coins >= gear.price : gameData.diamonds >= gear.price;
        
        const gearCard = document.createElement('div');
        gearCard.className = 'item-card';
        
        // Special styling untuk Ghost Ship
        const isGhostShip = gear.id === "ghostShip";
        
        gearCard.innerHTML = `
            <div style="background: ${isGhostShip ? 'rgba(128,0,128,0.3)' : 'rgba(255,255,255,0.05)'}; 
                        padding: 15px; border-radius: 8px; margin: 5px; text-align: center;
                        ${isGhostShip ? 'border: 2px solid #9400D3;' : ''}">
                <div style="font-size: 3rem; margin-bottom: 10px;">${gear.emoji}</div>
                <div style="font-weight: bold; color: ${isGhostShip ? '#FF00FF' : 'white'}; margin-bottom: 5px;">${gear.name}</div>
                <p style="color: #ccc; font-size: 0.9rem; margin-bottom: 10px;">${gear.description}</p>
                ${isGhostShip ? '<p style="color: #FFD700; font-size: 0.8rem;">✨ WAJIB untuk buka dungeon!</p>' : ''}
                <div style="color: ${gear.currency === 'diamonds' ? '#00ffff' : '#FFD700'}; margin: 10px 0;">
                    ${gear.price} ${gear.currency === 'diamonds' ? '💎' : '🪙'}
                </div>
                ${isOwned ? 
                    `<button class="owned-btn" disabled style="width: 100%; padding: 8px; background: #4CAF50; border: none; border-radius: 6px; color: white;">✓ DIMILIKI</button>` :
                    `<button class="buy-gear-btn" ${!canAfford ? 'disabled' : ''} 
                            style="width: 100%; padding: 8px; background: ${canAfford ? '#4CAF50' : '#666'}; border: none; border-radius: 6px; color: white; cursor: ${canAfford ? 'pointer' : 'not-allowed'};">
                        ${canAfford ? '🛒 BELI' : '❌ TIDAK CUKUP'}
                    </button>`
                }
            </div>
        `;
        
        const buyBtn = gearCard.querySelector('.buy-gear-btn');
        if (buyBtn && !isOwned && canAfford) {
            buyBtn.addEventListener('click', () => buyDepthGear(gear));
        }
        
        gearContainer.appendChild(gearCard);
    });
}

function buyDepthGear(gear) {
    if (gear.currency === "coins" && gameData.coins >= gear.price) {
        gameData.coins -= gear.price;
    } else if (gear.currency === "diamonds" && gameData.diamonds >= gear.price) {
        gameData.diamonds -= gear.price;
    } else {
        showNotification("❌ Tidak cukup resources!", "error");
        return;
    }
    
    gameData.depthGear[gear.id] = true;
    showNotification(`✅ Berhasil membeli ${gear.name}!`, "success");
    
    updateUI();
    loadDepthGearShop();
    createDepthButtons();
    checkDungeonUnlock(); // Cek ulang unlock dungeon
    
    if (gear.id === "ghostShip") {
        showNotification("👻 Ghost Ship didapatkan! Sekarang cari One Ring di Exchange!", "success");
    }
}

// ==================== ASSISTANT SYSTEM ====================
function startAssistantTimer() {
    setInterval(() => {
        if (gameData.village.assistants > 0 && !isFishing) {
            const now = Date.now();
            if (now - gameData.village.lastAssistantFish > 30000) {
                gameData.village.lastAssistantFish = now;
                assistantFish();
            }
        }
    }, 5000);
}

function assistantFish() {
    const assistants = gameData.village.assistants;
    for (let i = 0; i < assistants; i++) {
        setTimeout(() => {
            const fish = getRandomFish();
            gameData.backpack.push({ ...fish, catchTime: Date.now(), perfectCatch: false });
            gameData.totalFishCaught++;
            addToAquarium(fish);
            
            if (autoSellSettings[fish.rarity]) {
                gameData.coins += fish.price;
                gameData.backpack.pop();
            }
            
            showNotification(`👥 Assistant caught: ${fish.emoji} ${fish.name}`, "info");
            updateUI();
            loadBackpack();
        }, i * 1000);
    }
}

// ==================== PET SHOP ====================
function loadPetShop() {
    const petContainer = document.getElementById('pet-shop-items');
    if (!petContainer) {
        const petsTab = document.getElementById('pets');
        if (petsTab) {
            const newContainer = document.createElement('div');
            newContainer.id = 'pet-shop-items';
            newContainer.className = 'pets-shop';
            petsTab.appendChild(newContainer);
        }
        return;
    }
    
    petContainer.innerHTML = '';
    
    pets.forEach(pet => {
        const isOwned = gameData.pets.owned.includes(pet.id);
        const isActive = gameData.pets.active === pet.id;
        const canAfford = pet.currency === "coins" ? gameData.coins >= pet.price : gameData.diamonds >= pet.price;
        
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        
        petCard.innerHTML = `
            <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">${pet.emoji}</div>
                <h3 style="color: white; margin-bottom: 5px;">${pet.name}</h3>
                <p style="color: #ccc; font-size: 0.9rem; margin-bottom: 10px;">${pet.description}</p>
                <p style="color: ${pet.currency === 'diamonds' ? '#00ffff' : '#ffd700'}; margin-bottom: 15px;">
                    ${pet.price} ${pet.currency === 'diamonds' ? '💎' : '🪙'}
                </p>
                ${isOwned ? 
                    `<button class="pet-activate-btn" ${isActive ? 'disabled' : ''}
                            style="width: 100%; padding: 8px; background: ${isActive ? '#666' : '#4CAF50'}; border: none; border-radius: 6px; color: white; cursor: ${isActive ? 'not-allowed' : 'pointer'};">
                        ${isActive ? '✓ ACTIVE' : '🔓 ACTIVATE'}
                    </button>` :
                    `<button class="pet-buy-btn" ${!canAfford ? 'disabled' : ''}
                            style="width: 100%; padding: 8px; background: ${canAfford ? '#4CAF50' : '#666'}; border: none; border-radius: 6px; color: white; cursor: ${canAfford ? 'pointer' : 'not-allowed'};">
                        ${canAfford ? '🛒 BELI' : '❌ TIDAK CUKUP'}
                    </button>`
                }
            </div>
        `;
        
        const btn = petCard.querySelector('.pet-buy-btn, .pet-activate-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                if (isOwned) {
                    activatePet(pet.id);
                } else if (canAfford) {
                    buyPet(pet);
                }
            });
        }
        
        petContainer.appendChild(petCard);
    });
}

function buyPet(pet) {
    if (pet.currency === "coins" && gameData.coins >= pet.price) {
        gameData.coins -= pet.price;
    } else if (pet.currency === "diamonds" && gameData.diamonds >= pet.price) {
        gameData.diamonds -= pet.price;
    } else {
        showNotification("❌ Tidak cukup resources!", "error");
        return;
    }
    
    gameData.pets.owned.push(pet.id);
    showNotification(`✅ Berhasil membeli ${pet.name}!`, "success");
    updateUI();
    loadPetShop();
}

function activatePet(petId) {
    gameData.pets.active = petId;
    showNotification(`✨ ${pets.find(p => p.id === petId).name} aktif!`, "success");
    loadPetShop();
    updateLuckDisplay();
}

// ==================== SKILL TREE ====================
function loadSkillTree() {
    const skillContainer = document.getElementById('skill-tree');
    if (!skillContainer) {
        const skillsTab = document.getElementById('skills');
        if (skillsTab) {
            const newContainer = document.createElement('div');
            newContainer.id = 'skill-tree';
            newContainer.className = 'skill-tree';
            skillsTab.appendChild(newContainer);
        }
        return;
    }
    
    skillContainer.innerHTML = '';
    skillContainer.style.display = 'flex';
    skillContainer.style.flexWrap = 'wrap';
    skillContainer.style.justifyContent = 'center';
    
    const luckySkill = createSkillCard('lucky', skillTree.lucky);
    const castSkill = createSkillCard('cast', skillTree.cast);
    
    skillContainer.appendChild(luckySkill);
    skillContainer.appendChild(castSkill);
}

function createSkillCard(skillKey, skillData) {
    const currentLevel = gameData.skills[skillKey].level;
    const maxLevel = skillData.maxLevel;
    const nextPrice = Math.floor(skillData.basePrice * Math.pow(skillData.priceMultiplier, currentLevel));
    const canUpgrade = currentLevel < maxLevel && gameData.coins >= nextPrice;
    
    const card = document.createElement('div');
    card.className = 'skill-card';
    
    card.innerHTML = `
        <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; width: 250px;">
            <div style="font-size: 3rem; margin-bottom: 10px;">${skillData.emoji}</div>
            <h3 style="color: #FFD700; margin-bottom: 5px;">${skillData.name}</h3>
            <p style="color: #ccc; font-size: 0.9rem; margin-bottom: 15px;">${skillData.description}</p>
            
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="color: #fff;">Level ${currentLevel}/${maxLevel}</span>
                    <span style="color: #4CAF50;">+${skillKey === 'lucky' ? currentLevel*100 : currentLevel*5}%</span>
                </div>
                <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.2); border-radius: 4px; overflow: hidden;">
                    <div style="width: ${(currentLevel/maxLevel)*100}%; height: 100%; background: linear-gradient(to right, #4CAF50, #8BC34A);"></div>
                </div>
            </div>
            
            ${currentLevel < maxLevel ? `
                <p style="color: #FFD700; margin-bottom: 10px;">Harga: ${nextPrice} 🪙</p>
                <button class="upgrade-skill-btn" ${!canUpgrade ? 'disabled' : ''}
                        style="width: 100%; padding: 8px; background: ${canUpgrade ? '#4CAF50' : '#666'}; border: none; border-radius: 6px; color: white; cursor: ${canUpgrade ? 'pointer' : 'not-allowed'};">
                    ${canUpgrade ? '⬆️ UPGRADE' : '❌ TIDAK CUKUP'}
                </button>
            ` : '<p style="color: gold;">✨ MAX LEVEL</p>'}
        </div>
    `;
    
    const upgradeBtn = card.querySelector('.upgrade-skill-btn');
    if (upgradeBtn && canUpgrade) {
        upgradeBtn.addEventListener('click', () => upgradeSkill(skillKey, nextPrice));
    }
    
    return card;
}

function upgradeSkill(skillKey, price) {
    if (gameData.coins < price) {
        showNotification("❌ Koin tidak cukup!", "error");
        return;
    }
    
    gameData.coins -= price;
    gameData.skills[skillKey].level++;
    
    showNotification(`✅ ${skillKey === 'lucky' ? 'Lucky' : 'Cast'} Skill naik ke level ${gameData.skills[skillKey].level}!`, "success");
    
    updateUI();
    loadSkillTree();
    updateLuckDisplay();
}

// ==================== GAMEPASS ====================
function loadGamepass() {
    const gamepassContainer = document.getElementById('gamepass-container');
    if (!gamepassContainer) {
        const gamepassTab = document.getElementById('gamepass');
        if (gamepassTab) {
            const newContainer = document.createElement('div');
            newContainer.id = 'gamepass-container';
            newContainer.className = 'gamepass-container';
            gamepassTab.appendChild(newContainer);
        }
        return;
    }
    
    if (!gameData.gamepass.owned) {
        gamepassContainer.innerHTML = `
            <div style="text-align: center; padding: 30px; background: rgba(255,255,255,0.05); border-radius: 10px; margin: 10px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">🎟️</div>
                <h2 style="color: #FFD700; margin-bottom: 20px;">GAMEPASS PREMIUM</h2>
                <p style="color: #ccc; margin-bottom: 30px;">Buka 20 level eksklusif dengan hadiah spesial!</p>
                <p style="color: #00ffff; font-size: 1.5rem; margin-bottom: 20px;">Harga: 1000 💎 Diamond</p>
                <button onclick="buyGamepass()" style="padding: 12px 30px; background: #4CAF50; border: none; border-radius: 25px; color: white; font-weight: bold; font-size: 1.2rem; cursor: pointer;">
                    🚀 BELI GAMEPASS
                </button>
            </div>
        `;
        return;
    }
    
    const currentLevel = gameData.gamepass.level;
    const currentExp = gameData.gamepass.exp;
    const currentLevelReq = gamepassLevels.find(l => l.level === currentLevel)?.expRequired || 0;
    const progressPercent = (currentExp / currentLevelReq) * 100;
    
    let levelsHTML = '';
    for (let i = 1; i <= 20; i++) {
        const levelData = gamepassLevels.find(l => l.level === i);
        const isUnlocked = i <= currentLevel;
        const isCurrent = i === currentLevel;
        const rewardClaimed = gameData.gamepass.rewardsClaimed.includes(i);
        
        levelsHTML += `
            <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; margin: 5px; display: flex; align-items: center; gap: 15px; opacity: ${isUnlocked ? 1 : 0.5};">
                <div style="font-size: 2rem; min-width: 40px; text-align: center;">${isUnlocked ? (rewardClaimed ? '✅' : '🎁') : '🔒'}</div>
                <div style="flex: 1;">
                    <h4 style="color: #FFD700; margin-bottom: 3px;">Level ${i}</h4>
                    <p style="color: #ccc; font-size: 0.9rem;">Exp: ${levelData.expRequired}</p>
                    <p style="color: #4CAF50; font-size: 0.9rem;">Hadiah: ${Object.entries(levelData.rewards).map(([k,v]) => `${k}: ${v}`).join(', ')}</p>
                </div>
                ${isCurrent ? '<div style="color: #00ffff;">▶ CURRENT</div>' : ''}
                ${isUnlocked && !rewardClaimed && i <= currentLevel ? 
                    `<button onclick="claimGamepassReward(${i})" style="background: #4CAF50; border: none; border-radius: 4px; padding: 5px 10px; color: white; cursor: pointer;">AMBIL</button>` : ''}
            </div>
        `;
    }
    
    gamepassContainer.innerHTML = `
        <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 20px; margin: 10px;">
            <h2 style="color: #FFD700; text-align: center; margin-bottom: 20px;">🎟️ GAMEPASS PROGRESS</h2>
            
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="color: white;">Level ${currentLevel}</span>
                    <span style="color: #4CAF50;">${currentExp}/${currentLevelReq} EXP</span>
                </div>
                <div style="width: 100%; height: 15px; background: rgba(255,255,255,0.2); border-radius: 8px; overflow: hidden;">
                    <div style="width: ${progressPercent}%; height: 100%; background: linear-gradient(to right, #4CAF50, #8BC34A);"></div>
                </div>
            </div>
            
            <div style="max-height: 400px; overflow-y: auto; padding: 10px;">
                ${levelsHTML}
            </div>
        </div>
    `;
}

function buyGamepass() {
    if (gameData.gamepass.owned) {
        showNotification("⚠️ Kamu sudah memiliki Gamepass!", "warning");
        return;
    }
    
    if (gameData.diamonds < 1000) {
        showNotification(`❌ Butuh 1000 💎 diamond untuk membeli Gamepass!`, "error");
        return;
    }
    
    gameData.diamonds -= 1000;
    gameData.gamepass.owned = true;
    gameData.gamepass.level = 1;
    gameData.gamepass.exp = 0;
    gameData.gamepass.rewardsClaimed = [];
    
    showNotification(`🎉 SELAMAT! Kamu sekarang memiliki Gamepass! Level 1`, "success");
    
    updateUI();
    loadGamepass();
}

function addGamepassExp(amount) {
    if (!gameData.gamepass.owned) return;
    if (gameData.gamepass.level >= 20) return;
    
    gameData.gamepass.exp += amount;
    
    const currentLevelReq = gamepassLevels.find(l => l.level === gameData.gamepass.level)?.expRequired || Infinity;
    
    while (gameData.gamepass.exp >= currentLevelReq && gameData.gamepass.level < 20) {
        gameData.gamepass.exp -= currentLevelReq;
        gameData.gamepass.level++;
        showNotification(`🎁 Gamepass Level ${gameData.gamepass.level} tercapai!`, "success");
    }
    
    loadGamepass();
}

function claimGamepassReward(level) {
    if (gameData.gamepass.rewardsClaimed.includes(level)) {
        showNotification("⚠️ Hadiah sudah diambil!", "warning");
        return;
    }
    
    const levelData = gamepassLevels.find(l => l.level === level);
    if (!levelData) return;
    
    giveGamepassReward(levelData.rewards);
    gameData.gamepass.rewardsClaimed.push(level);
    
    showNotification(`✅ Hadiah Level ${level} berhasil diambil!`, "success");
    loadGamepass();
    updateUI();
}

function giveGamepassReward(rewards) {
    if (rewards.coins) gameData.coins += rewards.coins;
    
    if (rewards.rod) {
        const rodToGive = rods.find(r => r.name === rewards.rod);
        if (rodToGive) {
            rodToGive.owned = true;
            showNotification(`🎣 Mendapatkan rod: ${rodToGive.name}!`, "success");
        }
    }
    
    if (rewards.bait) {
        const baitToGive = baits.find(b => b.name === rewards.bait);
        if (baitToGive) {
            baitToGive.owned = true;
            showNotification(`🪱 Mendapatkan umpan: ${baitToGive.name}!`, "success");
        }
    }
    
    if (rewards.potion) {
        const potionToGive = potions.find(p => p.name === rewards.potion);
        if (potionToGive) {
            gameData.activePotions.push({ ...potionToGive, startTime: Date.now() });
            showNotification(`🧪 Mendapatkan potion: ${potionToGive.name}!`, "success");
        }
    }
    
    if (rewards.fish) {
        const fishToGive = getAllFishes().find(f => f.name === rewards.fish);
        if (fishToGive) {
            gameData.backpack.push({ ...fishToGive, catchTime: Date.now(), perfectCatch: false, fromGamepass: true });
            showNotification(`🐟 Mendapatkan ikan: ${fishToGive.name}!`, "success");
        }
    }
    
    if (rewards.pet) {
        const petToGive = pets.find(p => p.name === rewards.pet);
        if (petToGive && !gameData.pets.owned.includes(petToGive.id)) {
            gameData.pets.owned.push(petToGive.id);
            showNotification(`🐕 Mendapatkan pet: ${petToGive.name}!`, "success");
        }
    }
}

// ==================== UPDATE SYSTEM ====================
function checkForUpdateOnStart() {
    const currentVer = gameData.version;
    const latestVer = GAME_VERSIONS.latest;
    
    if (currentVer < latestVer && !gameData.updateSettings.updateIgnored) {
        gameData.updateSettings.updateAvailable = true;
        if (!gameData.updateSettings.remindLater) {
            showUpdateNotification();
        } else {
            if (gameData.updateSettings.remindTime && Date.now() > gameData.updateSettings.remindTime) {
                gameData.updateSettings.remindLater = false;
                showUpdateNotification();
            }
        }
    }
    updateUIVersion();
}

function showUpdateNotification() {
    let notif = document.getElementById('update-notification');
    if (!notif) {
        notif = document.createElement('div');
        notif.id = 'update-notification';
        notif.className = 'modal';
        notif.innerHTML = `
            <div class="modal-content" style="border: 3px solid #00ffff;">
                <span class="close" onclick="closeUpdateNotif()">&times;</span>
                <h3 style="color: #00ffff;">🎉 UPDATE TERSEDIA!</h3>
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 4rem; margin: 20px;">⬇️</div>
                    <p style="font-size: 1.2rem; margin-bottom: 15px;">
                        Versi baru <strong>${GAME_VERSIONS.latest}.0</strong> telah tersedia!
                    </p>
                    <p style="color: #00ff00; margin-bottom: 20px;" id="notif-features">
                        ✨ ${GAME_VERSIONS.features[GAME_VERSIONS.latest] || 'Fitur baru!'}
                    </p>
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                        <button onclick="performUpdate()" style="padding: 10px 20px; background: #4CAF50; border: none; border-radius: 5px; color: white; cursor: pointer;">⬇️ Update Sekarang</button>
                        <button onclick="remindLater()" style="padding: 10px 20px; background: #FFA500; border: none; border-radius: 5px; color: white; cursor: pointer;">⏰ Nanti Saja</button>
                        <button onclick="ignoreUpdate()" style="padding: 10px 20px; background: #666; border: none; border-radius: 5px; color: white; cursor: pointer;">❌ Abaikan</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(notif);
    }
    notif.style.display = 'block';
}

function closeUpdateNotif() {
    const notif = document.getElementById('update-notification');
    if (notif) notif.style.display = 'none';
}

function updateUIVersion() {
    const currentEl = document.getElementById('current-version');
    const latestEl = document.getElementById('latest-version');
    const statusEl = document.getElementById('update-status');
    const updateBtn = document.getElementById('update-now-btn');
    const remindBtn = document.getElementById('remind-later-btn');
    const ignoreBtn = document.getElementById('ignore-update-btn');
    const featuresDiv = document.getElementById('update-features');
    
    if (currentEl) currentEl.textContent = gameData.version + '.0';
    if (latestEl) latestEl.textContent = GAME_VERSIONS.latest + '.0';
    
    if (statusEl) {
        if (gameData.version < GAME_VERSIONS.latest) {
            statusEl.innerHTML = '⚠️ Update tersedia!';
            statusEl.style.color = '#FFA500';
            if (updateBtn) updateBtn.style.display = 'block';
            if (remindBtn) remindBtn.style.display = 'block';
            if (ignoreBtn) ignoreBtn.style.display = 'block';
            if (featuresDiv) {
                let features = '';
                for (let v = gameData.version + 1; v <= GAME_VERSIONS.latest; v++) {
                    if (GAME_VERSIONS.features[v]) {
                        features += `<li>✨ ${GAME_VERSIONS.features[v]}</li>`;
                    }
                }
                featuresDiv.innerHTML = `<strong>✨ Fitur baru yang akan didapat:</strong><ul style="margin-top: 5px; margin-left: 20px;">${features}</ul>`;
            }
        } else {
            statusEl.innerHTML = '✅ Game sudah versi terbaru';
            statusEl.style.color = '#00ff00';
            if (updateBtn) updateBtn.style.display = 'none';
            if (remindBtn) remindBtn.style.display = 'none';
            if (ignoreBtn) ignoreBtn.style.display = 'none';
            if (featuresDiv) featuresDiv.innerHTML = '<p style="color: #00ff00;">✅ Semua fitur terbaru sudah tersedia!</p>';
        }
    }
}

function performUpdate() {
    if (confirm("⚠️ Update akan mereset progress game. Lanjutkan?")) {
        localStorage.removeItem('fishLegSave');
        gameData.version = GAME_VERSIONS.latest;
        gameData.updateSettings.updateAvailable = false;
        gameData.updateSettings.updateIgnored = false;
        gameData.updateSettings.remindLater = false;
        closeUpdateNotif();
        updateUIVersion();
        showNotification("✅ Update berhasil! Game akan direfresh.", "success");
        setTimeout(() => { location.reload(); }, 2000);
    }
}

function remindLater() {
    gameData.updateSettings.remindLater = true;
    gameData.updateSettings.remindTime = Date.now() + (60 * 60 * 1000);
    closeUpdateNotif();
    showNotification("⏰ Akan diingatkan lagi 1 jam lagi", "info");
}

function ignoreUpdate() {
    if (confirm("Yakin ingin mengabaikan update ini?")) {
        gameData.updateSettings.updateIgnored = true;
        gameData.updateSettings.updateAvailable = false;
        closeUpdateNotif();
        updateUIVersion();
        showNotification("❌ Update diabaikan", "info");
    }
}

function checkManualUpdate() {
    const latestVer = GAME_VERSIONS.latest;
    if (gameData.version < latestVer) {
        if (gameData.updateSettings.updateIgnored) {
            if (confirm("Update sebelumnya diabaikan. Ingin melihat update sekarang?")) {
                gameData.updateSettings.updateIgnored = false;
                showUpdateNotification();
            }
        } else {
            showUpdateNotification();
        }
    } else {
        showNotification("✅ Game sudah versi terbaru!", "success");
    }
}

// ==================== CRYPTO GACHA FUNCTION ====================
function spinCryptoGacha() {
    if (gameData.diamonds < 25) {
        showNotification("❌ Diamond tidak cukup! Butuh 25 💎", "error");
        return;
    }
    
    gameData.diamonds -= 25;
    gameData.gachaStats.cryptoGachaCount++;
    
    const random = Math.random() * 100;
    let cumulative = 0;
    let selectedItem = null;
    
    for (const item of cryptoGacha.items) {
        cumulative += item.chance;
        if (random <= cumulative) {
            selectedItem = item;
            break;
        }
    }
    
    if (!selectedItem) selectedItem = cryptoGacha.items[0];
    
    const allFishes = getAllFishes();
    const cryptoFish = allFishes.find(f => f.id === selectedItem.id);
    
    if (cryptoFish) {
        gameData.backpack.push({
            ...cryptoFish,
            catchTime: Date.now(),
            perfectCatch: false,
            fromCryptoGacha: true
        });
        
        addToAquarium(cryptoFish);
        showCryptoGachaResult(cryptoFish);
    }
    
    updateUI();
    loadBackpack();
    loadSellItems();
}

function showCryptoGachaResult(fish) {
    if (!gachaModal || !gachaTitle || !gachaContent) return;
    
    gachaTitle.textContent = "🎰 Crypto Gacha";
    gachaContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 5rem; margin: 20px 0; animation: bounce 1s infinite;">${fish.emoji}</div>
            <h3 style="color: #F7931A; margin-bottom: 10px;">${fish.name}</h3>
            <p style="color: #ccc;">Rarity: ${fish.rarity.toUpperCase()}</p>
            <p style="color: #FFD700; font-size: 1.5rem;">${fish.price} koin</p>
            <p style="color: #4CAF50; margin-top: 20px;">✓ Ditambahkan ke backpack!</p>
        </div>
    `;
    
    gachaModal.style.display = 'block';
}

// ==================== FISHING SYSTEM ====================
function getRandomFish() {
    const currentSpotData = fishingSpots[currentSpot];
    
    // CEK ITEM KHUSUS UNTUK SPOT TERTENTU
    if (currentSpot === 6) { // Crypto spot
        if (!gameData.depthGear.maskOfSatoshi) {
            showNotification("❌ Butuh Mask of Satoshi untuk memancing di Crypto spot!", "error");
            return null;
        }
    }
    
    if (currentSpot === 7) { // Atlantis spot
        if (!gameData.depthGear.turtleHat) {
            showNotification("❌ Butuh Turtle Hat untuk memancing di Atlantis!", "error");
            return null;
        }
    }
    
    const currentRod = rods[gameData.currentRod];
    const currentBait = baits[gameData.currentBait];
    const currentDepthData = depthLevels[currentDepth];
    
    let totalLuck = currentRod.luck * currentBait.luck;
    
    const equippedGachaRod = gameData.gachaStats.rodsObtained.length > 0 ? 
        Math.max(...gameData.gachaStats.rodsObtained.map(id => 
            gachaRods.find(r => r.id === id)?.luck || 1
        )) : 1;
    totalLuck *= equippedGachaRod;
    
    totalLuck *= (1 + gameData.village.hutLevel * 0.1);
    
    const activePet = pets.find(p => p.id === gameData.pets.active);
    if (activePet && activePet.effect.type === "luck_multiplier") {
        totalLuck *= activePet.effect.value;
    }
    
    totalLuck *= (1 + (gameData.skills.lucky.level * 100) / 100);
    
    if (gameData.activePotions.length > 0) {
        totalLuck *= gameData.activePotions[0].multiplier;
    }
    
    totalLuck *= weather.effects[weather.current].luck;
    totalLuck *= currentDepthData.luckMultiplier;
    
    const luckBonus = Math.min(totalLuck, 10);
    
    const weightedFishes = currentSpotData.fishes.map(fish => {
        let finalChance = fish.chance;
        
        if (fish.rarity === "basic") {
            finalChance = Math.max(fish.chance / (1 + luckBonus * 0.1 * currentDepthData.rareBonus), 5);
        } 
        else if (fish.rarity === "legendary") {
            finalChance = fish.chance * (1 + luckBonus * 0.3 * currentDepthData.rareBonus);
        }
        else if (fish.rarity === "mythical") {
            finalChance = fish.chance * (1 + luckBonus * 0.5 * currentDepthData.rareBonus);
        }
        else if (fish.rarity === "secret") {
            finalChance = fish.chance * (1 + luckBonus * 0.8 * currentDepthData.rareBonus);
        }
        else if (fish.rarity === "special") {
            finalChance = fish.chance * (1 + luckBonus * 1.5 * currentDepthData.rareBonus);
        }
        
        return { ...fish, finalChance: Math.max(finalChance, 0.1) };
    });
    
    let totalChance = weightedFishes.reduce((sum, fish) => sum + fish.finalChance, 0);
    const random = Math.random() * totalChance;
    let cumulativeChance = 0;
    
    for (const fish of weightedFishes) {
        cumulativeChance += fish.finalChance;
        if (random <= cumulativeChance) {
            return { ...fish };
        }
    }
    
    return { ...currentSpotData.fishes[0] };
}

// ==================== startFishing ====================
function startFishing() {
    if (isFishing) return;
    
    // Cek item khusus untuk spot tertentu
    if (currentSpot === 6 && !gameData.depthGear.maskOfSatoshi) {
        showNotification("❌ Beli Mask of Satoshi dulu di Depth Gear untuk mancing di Crypto!", "error");
        return;
    }
    
    if (currentSpot === 7 && !gameData.depthGear.turtleHat) {
        showNotification("❌ Beli Turtle Hat dulu di Depth Gear untuk mancing di Atlantis!", "error");
        return;
    }
    
    isFishing = true;
    fishBtn.disabled = true;
    fishBtn.textContent = "🎣 Casting...";
    
    const hook = document.querySelector('.hook');
    const fishingLine = document.querySelector('.fishing-line');
    
    if (hook && fishingLine) {
        hook.style.top = '200px';
        fishingLine.style.height = '200px';
    }
    
    setTimeout(() => {
        if (!isFishing) return;
        
        if (minigameIndicator) {
            minigameIndicator.style.display = 'block';
            startMinigame();
        }
        
        if (fishBtn) {
            fishBtn.textContent = "TARIK!";
            fishBtn.style.background = '#FF6B6B';
            fishBtn.disabled = false;
        }
        
        const autoCatchTimer = setTimeout(() => {
            if (isFishing) {
                finishFishing(getRandomFish(), false);
                cleanupFishing();
            }
        }, 3000);
        
        currentPullHandler = function() {
            clearTimeout(autoCatchTimer);
            const perfectCatch = minigameIndicator && minigameIndicator.style.display !== 'none' ? 
                checkMinigameResult() : false;
            const caughtFish = getRandomFish();
            finishFishing(caughtFish, perfectCatch);
            cleanupFishing();
        };
        
        if (fishBtn) {
            fishBtn.addEventListener('click', currentPullHandler);
        }
        
    }, 2000);
}

function startMinigame() {
    const needle = document.querySelector('.indicator-needle');
    if (needle) {
        needle.style.animation = 'needleSweep 1.5s infinite linear';
    }
}

function checkMinigameResult() {
    const needle = document.querySelector('.indicator-needle');
    const target = document.querySelector('.indicator-target');
    
    if (!needle || !target) return false;
    
    const needleRect = needle.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    
    const needleCenter = needleRect.left + needleRect.width / 2;
    const targetLeft = targetRect.left;
    const targetRight = targetRect.right;
    
    return needleCenter >= targetLeft && needleCenter <= targetRight;
}

function cleanupFishing() {
    if (currentPullHandler && fishBtn) {
        fishBtn.removeEventListener('click', currentPullHandler);
        currentPullHandler = null;
    }
    
    if (minigameIndicator) {
        minigameIndicator.style.display = 'none';
    }
    
    const needle = document.querySelector('.indicator-needle');
    if (needle) {
        needle.style.animation = 'none';
    }
}

function finishFishing(fish, perfectCatch = false) {
    isFishing = false;
    
    const hook = document.querySelector('.hook');
    const fishingLine = document.querySelector('.fishing-line');
    
    if (hook && fishingLine) {
        hook.style.top = '150px';
        fishingLine.style.height = '150px';
    }
    
    let priceMultiplier = 1;
    if (perfectCatch) {
        priceMultiplier = 1.5;
        showNotification("🎯 PERFECT CATCH! +50% Bonus", "success");
    }
    
    const finalPrice = Math.floor(fish.price * priceMultiplier);
    
    let totalCoins = finalPrice;
    const activePet = pets.find(p => p.id === gameData.pets.active);
    if (activePet && activePet.effect.type === "coin_bonus") {
        totalCoins += activePet.effect.value;
        showNotification(`💰 Pet bonus: +${activePet.effect.value} koin!`, "success");
    }
    
    if (activePet && activePet.effect.type === "diamond_chance") {
        if (Math.random() * 100 < activePet.effect.value) {
            gameData.diamonds += activePet.effect.diamond_amount;
            showNotification(`💎 Pet bonus: +${activePet.effect.diamond_amount} diamond!`, "success");
        }
    }
    
    gameData.backpack.push({
        ...fish,
        catchTime: Date.now(),
        perfectCatch: perfectCatch,
        finalValue: totalCoins,
        depth: currentDepth
    });
    
    gameData.totalFishCaught++;
    
    gameData.exp += 10;
    checkLevelUp();
    
    if (gameData.gamepass.owned && activePet && activePet.effect.type === "exp_bonus") {
        addGamepassExp(activePet.effect.value);
    }
    
    if (gameData.skills.cast.level > 0) {
        const doubleChance = gameData.skills.cast.level * 5;
        if (Math.random() * 100 < doubleChance) {
            gameData.backpack.push({
                ...fish,
                catchTime: Date.now(),
                perfectCatch: perfectCatch,
                finalValue: totalCoins,
                doubleCatch: true,
                depth: currentDepth
            });
            showNotification(`✨ Skill Cast: Dapat ikan double!`, "success");
            
            gameData.exp += 10;
            if (gameData.gamepass.owned && activePet && activePet.effect.type === "exp_bonus") {
                addGamepassExp(activePet.effect.value);
            }
        }
    }
    
    updateQuestProgress(fish);
    
    if (autoSellSettings[fish.rarity]) {
        gameData.coins += totalCoins;
        gameData.backpack.pop();
        if (gameData.backpack[gameData.backpack.length - 1]?.doubleCatch) {
            gameData.coins += totalCoins;
            gameData.backpack.pop();
        }
        showAutoSellNotification(fish, totalCoins);
    } else {
        showFishingResult(fish, totalCoins, perfectCatch);
    }
    
    addToAquarium(fish);
    
    if (fishBtn) {
        fishBtn.textContent = "🎣 Mancing!";
        fishBtn.style.background = 'linear-gradient(to right, #ff8a00, #e52e71)';
        fishBtn.disabled = false;
    }
    
    updateUI();
    loadBackpack();
    loadSellItems();
}

function checkLevelUp() {
    const expNeeded = gameData.level * 100;
    if (gameData.exp >= expNeeded) {
        gameData.exp -= expNeeded;
        gameData.level++;
        showNotification(`🎉 Level Up! Sekarang level ${gameData.level}!`, "success");
    }
    if (expElement) expElement.textContent = `${gameData.exp}/${gameData.level * 100}`;
}

// ==================== LUCK DISPLAY ====================
function updateLuckDisplay() {
    const luckDisplay = document.getElementById('luck-display');
    if (!luckDisplay) return;
    
    const totalLuck = calculateTotalLuck();
    const activePet = pets.find(p => p.id === gameData.pets.active);
    const currentDepthData = depthLevels[currentDepth];
    const currentWeather = weather.effects[weather.current];
    
    luckDisplay.innerHTML = `
        <div style="text-align: center; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #FFD700; margin-bottom: 10px;">🎯 Total Luck: ${totalLuck.toFixed(1)}x</h4>
            <div style="font-size: 0.9rem; text-align: left;">
                <div>🎣 Rod: ${rods[gameData.currentRod].name} (${rods[gameData.currentRod].luck}x)</div>
                <div>🪱 Bait: ${baits[gameData.currentBait].name} (${baits[gameData.currentBait].luck}x)</div>
                <div>🏠 Hut: +${gameData.village.hutLevel * 10}%</div>
                ${activePet ? `<div>🐕 Pet: ${activePet.name}</div>` : ''}
                <div>🍀 Lucky Skill: +${gameData.skills.lucky.level * 100}%</div>
                ${gameData.activePotions.length > 0 ? 
                    `<div>🧪 Potion: ${gameData.activePotions[0].name} (${gameData.activePotions[0].multiplier}x)</div>` : ''}
                <div>🌤️ Weather: ${currentWeather.text} (${currentWeather.luck}x)</div>
                <div>📍 Depth: ${currentDepthData.name} (${currentDepthData.luckMultiplier}x luck)</div>
            </div>
        </div>
    `;
}

function calculateTotalLuck() {
    const currentRod = rods[gameData.currentRod];
    const currentBait = baits[gameData.currentBait];
    const currentDepthData = depthLevels[currentDepth];
    
    let totalLuck = currentRod.luck * currentBait.luck;
    
    const equippedGachaRod = gameData.gachaStats.rodsObtained.length > 0 ? 
        Math.max(...gameData.gachaStats.rodsObtained.map(id => 
            gachaRods.find(r => r.id === id)?.luck || 1
        )) : 1;
    totalLuck *= equippedGachaRod;
    
    totalLuck *= (1 + gameData.village.hutLevel * 0.1);
    
    const activePet = pets.find(p => p.id === gameData.pets.active);
    if (activePet && activePet.effect.type === "luck_multiplier") {
        totalLuck *= activePet.effect.value;
    }
    
    totalLuck *= (1 + (gameData.skills.lucky.level * 100) / 100);
    
    if (gameData.activePotions.length > 0) {
        totalLuck *= gameData.activePotions[0].multiplier;
    }
    
    totalLuck *= weather.effects[weather.current].luck;
    totalLuck *= currentDepthData.luckMultiplier;
    
    return totalLuck;
}

// ==================== GACHA TAB UPDATE ====================
function updateGachaTab() {
    updateGachaStats();
    loadGachaRewards();
    
    const gachaSection = document.querySelector('.gacha-section');
    if (!gachaSection) return;
    
    const existingBasic = document.getElementById('basic-box-btn');
    const existingNormal = document.getElementById('normal-box-btn');
    const existingSecret = document.getElementById('secret-box-btn');
    const existingSecretGacha = document.getElementById('secret-gacha-btn');
    const existingCryptoGacha = document.getElementById('crypto-gacha-btn');
    
    if (existingBasic) existingBasic.remove();
    if (existingNormal) existingNormal.remove();
    if (existingSecret) existingSecret.remove();
    if (existingSecretGacha) existingSecretGacha.remove();
    if (existingCryptoGacha) existingCryptoGacha.remove();
    
    const secretGachaBtn = document.createElement('button');
    secretGachaBtn.id = 'secret-gacha-btn';
    secretGachaBtn.className = 'gacha-btn';
    secretGachaBtn.style.marginTop = '20px';
    secretGachaBtn.style.background = 'linear-gradient(45deg, #00FFFF, #FF00FF)';
    secretGachaBtn.innerHTML = '🎁 Gacha Ikan Secret (50 💎)';
    secretGachaBtn.onclick = spinSecretGacha;
    
    // Crypto Gacha button
    const cryptoGachaBtn = document.createElement('button');
    cryptoGachaBtn.id = 'crypto-gacha-btn';
    cryptoGachaBtn.className = 'gacha-btn';
    cryptoGachaBtn.style.marginTop = '10px';
    cryptoGachaBtn.style.background = 'linear-gradient(45deg, #F7931A, #4CAF50)';
    cryptoGachaBtn.innerHTML = '🎰 Gacha Crypto (25 💎)';
    cryptoGachaBtn.onclick = spinCryptoGacha;
    
    const gachaStats = gachaSection.querySelector('.gacha-stats');
    if (gachaStats) {
        gachaStats.after(secretGachaBtn);
        secretGachaBtn.after(cryptoGachaBtn);
    }
    
    const mysteryBoxDiv = document.createElement('div');
    mysteryBoxDiv.className = 'mystery-boxes';
    mysteryBoxDiv.style.marginTop = '30px';
    mysteryBoxDiv.style.padding = '20px';
    mysteryBoxDiv.style.background = 'rgba(0,0,0,0.3)';
    mysteryBoxDiv.style.borderRadius = '10px';
    
    mysteryBoxDiv.innerHTML = `
        <h3 style="color: #FFD700; margin-bottom: 15px;">🎁 MYSTERY BOXES</h3>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 200px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                <div style="font-size: 3rem;">📦</div>
                <h4 style="color: white;">Basic Box</h4>
                <p style="color: #ccc;">1000 coin</p>
                <button id="basic-box-btn" onclick="buyMysteryBox('basic')" class="gacha-btn" style="padding: 10px 20px; font-size: 14px; margin: 0;">Beli</button>
            </div>
            <div style="flex: 1; min-width: 200px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                <div style="font-size: 3rem;">📦✨</div>
                <h4 style="color: white;">Normal Box</h4>
                <p style="color: #ccc;">5000 coin</p>
                <button id="normal-box-btn" onclick="buyMysteryBox('normal')" class="gacha-btn" style="padding: 10px 20px; font-size: 14px; margin: 0;">Beli</button>
            </div>
            <div style="flex: 1; min-width: 200px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: center;">
                <div style="font-size: 3rem;">📦💎</div>
                <h4 style="color: white;">Secret Box</h4>
                <p style="color: #00ffff;">100 diamond</p>
                <button id="secret-box-btn" onclick="buyMysteryBox('secret')" class="gacha-btn" style="padding: 10px 20px; font-size: 14px; margin: 0; background: linear-gradient(45deg, #FF00FF, #00FFFF);">Beli</button>
            </div>
        </div>
    `;
    
    gachaSection.appendChild(mysteryBoxDiv);
    
    updateLuckDisplay();
}

// ==================== GACHA FUNCTIONS ====================
function loadGachaRewards() {
    const gachaRewards = document.getElementById('gacha-rewards');
    if (!gachaRewards) return;
    
    gachaRewards.innerHTML = '';
    
    gachaRods.forEach(rod => {
        const rewardItem = document.createElement('div');
        rewardItem.className = 'gacha-reward-item';
        const isObtained = gameData.gachaStats.rodsObtained.includes(rod.id);
        
        rewardItem.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 5px 0;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.5rem;">${rod.emoji}</span>
                    <div>
                        <div style="font-weight: bold; color: ${getRarityColor(rod.rarity)}">${rod.name}</div>
                        <div style="font-size: 0.8rem; color: #00ffff;">Luck: +${rod.luck}x</div>
                    </div>
                </div>
                <div style="color: ${isObtained ? '#4CAF50' : '#FF6B6B'}; font-size: 0.9rem;">
                    ${isObtained ? '✓ Obtained' : 'Not Obtained'}
                </div>
            </div>
        `;
        
        gachaRewards.appendChild(rewardItem);
    });
}

function spinGacha() {
    if (gameData.coins < 500) {
        showNotification("❌ Koin tidak cukup! Butuh 500 koin", "error");
        return;
    }
    
    gameData.coins -= 500;
    gameData.gachaStats.totalSpins++;
    
    const random = Math.random() * 100;
    let cumulativeChance = 0;
    let obtainedRod = null;
    
    for (const rod of gachaRods) {
        cumulativeChance += rod.chance;
        if (random <= cumulativeChance) {
            obtainedRod = rod;
            break;
        }
    }
    
    if (!obtainedRod) {
        obtainedRod = gachaRods[0];
    }
    
    if (!gameData.gachaStats.rodsObtained.includes(obtainedRod.id)) {
        gameData.gachaStats.rodsObtained.push(obtainedRod.id);
    }
    
    showGachaResult(obtainedRod);
    updateUI();
    updateGachaTab();
}

function showGachaResult(rod) {
    if (!gachaModal || !gachaTitle || !gachaContent) return;
    
    gachaTitle.textContent = "Hasil Gacha!";
    gachaContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin: 20px 0;">${rod.emoji}</div>
            <h3 style="color: ${getRarityColor(rod.rarity)}; margin-bottom: 10px;">${rod.name}</h3>
            <p style="color: #ccc;">Rarity: ${rod.rarity.toUpperCase()}</p>
            <p style="color: #00ffff;">Luck Bonus: +${rod.luck}x</p>
            <p style="color: #4CAF50; margin-top: 20px;">🎉 Selamat! Rod baru telah ditambahkan!</p>
        </div>
    `;
    
    gachaModal.style.display = 'block';
}

function updateGachaStats() {
    const totalSpins = document.getElementById('total-spins');
    const rodsObtained = document.getElementById('rods-obtained');
    const secretGachaCount = document.getElementById('secret-gacha-count');
    const cryptoGachaCount = document.getElementById('crypto-gacha-count');
    
    if (totalSpins) totalSpins.textContent = gameData.gachaStats.totalSpins;
    if (rodsObtained) rodsObtained.textContent = gameData.gachaStats.rodsObtained.length;
    if (secretGachaCount) secretGachaCount.textContent = gameData.gachaStats.secretGachaCount;
    if (cryptoGachaCount) cryptoGachaCount.textContent = gameData.gachaStats.cryptoGachaCount;
}

function getRarityColor(rarity) {
    switch(rarity) {
        case 'common': return '#87CEEB';
        case 'rare': return '#4CAF50';
        case 'epic': return '#FF69B4';
        case 'legendary': return '#FFD700';
        case 'mythical': return '#FF0000';
        case 'secret': return '#00FFFF';
        case 'special': return '#FF00FF';
        default: return '#FFFFFF';
    }
}

// ==================== SECRET FISH GACHA ====================
function spinSecretGacha() {
    if (gameData.diamonds < 50) {
        showNotification("❌ Diamond tidak cukup! Butuh 50 💎", "error");
        return;
    }
    
    gameData.diamonds -= 50;
    gameData.gachaStats.secretGachaCount++;
    
    const randomIndex = Math.floor(Math.random() * secretFishPool.length);
    const secretFish = { ...secretFishPool[randomIndex] };
    
    gameData.backpack.push({
        ...secretFish,
        catchTime: Date.now(),
        perfectCatch: false,
        fromGacha: true
    });
    
    addToAquarium(secretFish);
    showSecretGachaResult(secretFish);
    updateUI();
    loadBackpack();
    loadSellItems();
}

function showSecretGachaResult(fish) {
    if (!gachaModal || !gachaTitle || !gachaContent) return;
    
    gachaTitle.textContent = "Gacha Ikan Secret!";
    gachaContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 5rem; margin: 20px 0; animation: bounce 1s infinite;">${fish.emoji}</div>
            <h3 style="color: #00FFFF; margin-bottom: 10px;">${fish.name}</h3>
            <p style="color: #ccc;">Rarity: ${fish.rarity.toUpperCase()}</p>
            <p style="color: #FFD700; font-size: 1.5rem;">${fish.price} koin</p>
            <p style="color: #4CAF50; margin-top: 20px;">✓ Ditambahkan ke backpack!</p>
        </div>
    `;
    
    gachaModal.style.display = 'block';
}

// ==================== MYSTERY BOX FUNCTIONS ====================
function buyMysteryBox(boxType) {
    const box = mysteryBoxes[boxType];
    if (!box) return;
    
    if (box.currency === "coins" && gameData.coins < box.price) {
        showNotification(`❌ Koin tidak cukup! Butuh ${box.price} koin`, "error");
        return;
    }
    if (box.currency === "diamonds" && gameData.diamonds < box.price) {
        showNotification(`❌ Diamond tidak cukup! Butuh ${box.price} diamond`, "error");
        return;
    }
    
    if (box.currency === "coins") {
        gameData.coins -= box.price;
    } else {
        gameData.diamonds -= box.price;
    }
    
    gameData.gachaStats.mysteryBoxes[boxType]++;
    
    const random = Math.random() * 100;
    let cumulative = 0;
    let selectedItem = null;
    
    for (const item of box.items) {
        cumulative += item.chance;
        if (random <= cumulative) {
            selectedItem = item;
            break;
        }
    }
    
    if (!selectedItem) selectedItem = box.items[0];
    
    processMysteryBoxReward(selectedItem, boxType);
}

function processMysteryBoxReward(item, boxType) {
    let rewardMessage = "";
    
    switch(item.type) {
        case "coins":
            gameData.coins += item.amount;
            rewardMessage = `💰 +${item.amount} koin!`;
            break;
            
        case "diamonds":
            gameData.diamonds += item.amount;
            rewardMessage = `💎 +${item.amount} diamond!`;
            break;
            
        case "rod":
            const rodToGive = rods.find(r => r.id === item.id);
            if (rodToGive) {
                rodToGive.owned = true;
                rewardMessage = `🎣 Mendapatkan ${rodToGive.name}!`;
            }
            break;
            
        case "bait":
            const baitToGive = baits.find(b => b.id === item.id);
            if (baitToGive) {
                baitToGive.owned = true;
                rewardMessage = `🪱 Mendapatkan ${baitToGive.name}!`;
            }
            break;
            
        case "secretFish":
            const randomIndex = Math.floor(Math.random() * secretFishPool.length);
            const secretFish = { ...secretFishPool[randomIndex] };
            
            gameData.backpack.push({
                ...secretFish,
                catchTime: Date.now(),
                perfectCatch: false,
                fromMysteryBox: true
            });
            
            addToAquarium(secretFish);
            rewardMessage = `🐟 Mendapatkan ${secretFish.name}!`;
            break;
    }
    
    showMysteryBoxResult(boxType, item, rewardMessage);
    updateUI();
    loadBackpack();
    loadSellItems();
    loadShop('rods');
}

function showMysteryBoxResult(boxType, item, rewardMessage) {
    const box = mysteryBoxes[boxType];
    
    if (!gachaModal || !gachaTitle || !gachaContent) return;
    
    gachaTitle.textContent = `🎁 ${box.name}`;
    
    let emoji = "🎁";
    if (item.emoji) emoji = item.emoji;
    else if (item.type === "coins") emoji = "💰";
    else if (item.type === "diamonds") emoji = "💎";
    
    gachaContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 5rem; margin: 20px 0; animation: bounce 1s infinite;">${emoji}</div>
            <h3 style="color: #FFD700; margin-bottom: 10px;">Selamat!</h3>
            <p style="color: white; font-size: 1.2rem; margin-bottom: 20px;">${rewardMessage}</p>
            <p style="color: #00ffff;">Dari ${box.name}</p>
            <button onclick="document.getElementById('gacha-modal').style.display='none'" 
                    style="margin-top: 20px; padding: 10px 30px; background: #4CAF50; border: none; border-radius: 25px; color: white; cursor: pointer;">
                OK
            </button>
        </div>
    `;
    
    gachaModal.style.display = 'block';
}

// ==================== FAVORITE FISH FUNCTIONS ====================
function toggleFavoriteFish(index) {
    if (index < 0 || index >= gameData.backpack.length) return;
    
    const fishIndex = gameData.favoriteFish.indexOf(index);
    
    if (fishIndex === -1) {
        gameData.favoriteFish.push(index);
        showNotification(`⭐ ${gameData.backpack[index].name} ditambahkan ke favorit!`, "success");
    } else {
        gameData.favoriteFish.splice(fishIndex, 1);
        showNotification(`❌ ${gameData.backpack[index].name} dihapus dari favorit`, "info");
    }
    
    loadBackpack();
}

function updateFavoriteIndicesAfterSell(soldIndices) {
    soldIndices.sort((a, b) => b - a);
    gameData.favoriteFish = gameData.favoriteFish.filter(idx => !soldIndices.includes(idx));
    for (const soldIdx of soldIndices) {
        gameData.favoriteFish = gameData.favoriteFish.map(idx => idx > soldIdx ? idx - 1 : idx);
    }
}

// ==================== WEATHER SYSTEM ====================
function startWeatherCycle() {
    changeWeather();
    setInterval(changeWeather, 300000);
}

function changeWeather() {
    const weatherTypes = Object.keys(weather.effects);
    const randomIndex = Math.floor(Math.random() * weatherTypes.length);
    weather.current = weatherTypes[randomIndex];
    updateWeatherDisplay();
    showNotification(`🌤️ Cuaca berubah: ${weather.effects[weather.current].text}`, "info");
}

function updateWeatherDisplay() {
    const weatherDisplay = document.getElementById('weather-display');
    if (!weatherDisplay) return;
    const currentWeather = weather.effects[weather.current];
    weatherDisplay.innerHTML = `${currentWeather.icon} ${currentWeather.text}`;
    weatherDisplay.style.color = currentWeather.color;
}

// ==================== BACKPACK FUNCTIONS ====================
function loadBackpack() {
    if (!backpackItems) return;
    
    if (gameData.backpack.length === 0) {
        backpackItems.innerHTML = '<p class="empty-message">Belum ada ikan di backpack</p>';
        return;
    }
    
    backpackItems.innerHTML = '';
    
    gameData.backpack.forEach((fish, index) => {
        const fishCard = document.createElement('div');
        fishCard.className = 'item-card';
        fishCard.setAttribute('data-index', index);
        
        let rarityColor = '';
        switch(fish.rarity) {
            case 'basic': rarityColor = '#87CEEB'; break;
            case 'legendary': rarityColor = '#FFD700'; break;
            case 'mythical': rarityColor = '#FF69B4'; break;
            case 'secret': rarityColor = '#00FFFF'; break;
            case 'special': rarityColor = '#FF00FF'; break;
        }
        
        const isFavorite = gameData.favoriteFish.includes(index);
        
        fishCard.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin: 5px; border-left: 5px solid ${rarityColor}; position: relative;">
                ${isFavorite ? '<div style="position: absolute; top: 5px; right: 5px; font-size: 1.5rem;">⭐</div>' : ''}
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="font-size: 2rem;">${fish.emoji}</div>
                    <div style="flex: 1;">
                        <div style="font-weight: bold; color: white; display: flex; align-items: center; gap: 10px;">
                            ${fish.name}
                            <button onclick="toggleFavoriteFish(${index})" style="background: none; border: none; color: gold; font-size: 1.2rem; cursor: pointer; padding: 0 5px;">
                                ${isFavorite ? '★' : '☆'}
                            </button>
                        </div>
                        <div style="color: ${rarityColor};">${fish.rarity.toUpperCase()}</div>
                        <div style="color: #FFD700;">${fish.price} koin</div>
                        ${fish.perfectCatch ? '<div style="color: #FFD700; font-size: 0.8rem;">🎯 Perfect</div>' : ''}
                        ${fish.doubleCatch ? '<div style="color: #4CAF50; font-size: 0.8rem;">✨ Double</div>' : ''}
                        ${fish.depth ? `<div style="color: #00ffff; font-size: 0.8rem;">📍 ${fish.depth}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        backpackItems.appendChild(fishCard);
    });
}

function sortBackpack(sortType) {
    switch(sortType) {
        case 'rarity':
            gameData.backpack.sort((a, b) => {
                const rarityOrder = { 'special': 5, 'secret': 4, 'mythical': 3, 'legendary': 2, 'basic': 1 };
                return rarityOrder[b.rarity] - rarityOrder[a.rarity];
            });
            break;
        case 'price':
            gameData.backpack.sort((a, b) => b.price - a.price);
            break;
    }
    loadBackpack();
}

// ==================== SHOP FUNCTIONS ====================
function loadShop(category) {
    if (!shopItems) return;
    
    shopItems.innerHTML = '';
    
    let items = [];
    if (category === 'rods') {
        items = rods.filter(rod => {
            if (rod.special) return rod.unlocked;
            if (rod.id === 12) return rod.unlocked || rod.owned;
            if (rod.id === 13) return rod.owned; // Timothy Rod (beli dengan diamond)
            if (rod.id === 14) return rod.unlocked || rod.owned; // Satoshi Rod dari exchange
            return true;
        });
    }
    else if (category === 'baits') {
        items = baits.filter(bait => {
            if (bait.id === 9) return bait.owned; // Bitcoin Bait dari quest
            if (bait.id === 10) return bait.unlocked || bait.owned; // Vitalik Bait dari exchange
            return true;
        });
    }
    else if (category === 'potions') items = potions;
    else if (category === 'upgrades') items = getVillageUpgrades();
    
    if (items.length === 0) {
        shopItems.innerHTML = '<p class="empty-message">Tidak ada item</p>';
        return;
    }
    
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
        let isOwned = false, canAfford = false, isEquipped = false;
        
        if (category === 'potions') {
            canAfford = gameData.coins >= item.price;
            isOwned = false;
        } else if (category === 'upgrades') {
            canAfford = gameData.coins >= item.price;
            isOwned = item.owned || false;
        } else {
            isOwned = item.owned;
            if (item.currency === "diamonds") {
                canAfford = gameData.diamonds >= item.price;
            } else {
                canAfford = gameData.coins >= item.price;
            }
            isEquipped = category === 'rods' ? item.id === gameData.currentRod : item.id === gameData.currentBait;
        }
        
        let buttonText = 'Beli';
        let isDisabled = false;
        
        if (category === 'potions') {
            buttonText = canAfford ? 'Beli & Pakai' : 'Koin Tidak Cukup';
            isDisabled = !canAfford;
        } else if (category === 'upgrades') {
            buttonText = canAfford ? 'Beli' : 'Koin Tidak Cukup';
            isDisabled = !canAfford || isOwned;
        } else {
            if (isOwned) {
                buttonText = isEquipped ? 'Sedang Digunakan' : 'Gunakan';
                isDisabled = isEquipped;
            } else {
                if (item.special && !item.unlocked) {
                    buttonText = 'Locked (Quest)';
                    isDisabled = true;
                } else if ((item.id === 12 || item.id === 14) && !item.unlocked) {
                    buttonText = 'Locked (Exchange)';
                    isDisabled = true;
                } else if (item.id === 9 && !item.owned) {
                    buttonText = 'Locked (Quest)';
                    isDisabled = true;
                } else if (item.id === 10 && !item.unlocked) {
                    buttonText = 'Locked (Exchange)';
                    isDisabled = true;
                } else if (item.currency === "diamonds") {
                    buttonText = canAfford ? 'Beli (💎)' : 'Diamond Tidak Cukup';
                    isDisabled = !canAfford;
                } else {
                    buttonText = canAfford ? 'Beli' : 'Koin Tidak Cukup';
                    isDisabled = !canAfford;
                }
            }
        }
        
        const emoji = item.emoji || (category === 'rods' ? '🎣' : '🪱');
        const priceDisplay = item.currency === "diamonds" ? `${item.price} 💎` : (item.price > 0 ? `${item.price} 🪙` : (item.id === 0 ? 'Quest/Exchange' : 'Quest'));
        
        itemCard.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin: 5px; text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 10px;">${emoji}</div>
                <div style="font-weight: bold; color: white; margin-bottom: 5px;">${item.name}</div>
                ${item.luck ? `<div style="color: #00ffff; font-size: 13px;">+${item.luck}x Luck</div>` : ''}
                ${item.multiplier ? `<div style="color: #4CAF50; font-size: 13px;">${item.multiplier}x Boost</div>` : ''}
                ${item.duration ? `<div style="color: #ccc; font-size: 12px;">${item.duration} menit</div>` : ''}
                <div style="color: #FFD700; margin: 10px 0; font-size: 14px;">${priceDisplay}</div>
                <button class="buy-btn" ${isDisabled ? 'disabled' : ''}>
                    ${buttonText}
                </button>
            </div>
        `;
        
        const buyBtn = itemCard.querySelector('.buy-btn');
        
        if (category === 'potions' && canAfford) {
            buyBtn.addEventListener('click', () => buyPotion(item));
        } else if (category === 'upgrades' && canAfford && !isOwned) {
            buyBtn.addEventListener('click', () => buyUpgrade(item.type));
        } else if (!isOwned && canAfford && !item.special && item.id !== 12 && item.id !== 14 && item.id !== 9 && item.id !== 10) {
            if (item.currency === "diamonds") {
                buyBtn.addEventListener('click', () => buyRodWithDiamond(item));
            } else {
                buyBtn.addEventListener('click', () => buyItem(item, category));
            }
        } else if (isOwned && !isEquipped && !isDisabled) {
            buyBtn.addEventListener('click', () => equipItem(item, category));
        }
        
        shopItems.appendChild(itemCard);
    });
    
    updateLuckDisplay();
}

function buyRodWithDiamond(rod) {
    if (gameData.diamonds < rod.price) {
        showNotification("❌ Diamond tidak cukup!", "error");
        return;
    }
    
    gameData.diamonds -= rod.price;
    rod.owned = true;
    
    showNotification(`✅ Berhasil membeli ${rod.name}!`, "success");
    updateUI();
    loadShop('rods');
}

function buyItem(item, category) {
    if (gameData.coins < item.price) {
        showNotification("❌ Koin tidak cukup!", "error");
        return;
    }
    
    gameData.coins -= item.price;
    item.owned = true;
    
    if (category === 'rods') {
        equipItem(item, category);
    }
    
    showNotification(`✅ Berhasil membeli ${item.name}!`, "success");
    updateUI();
    loadShop(category);
}

function equipItem(item, category) {
    if (category === 'rods') {
        gameData.currentRod = item.id;
    } else if (category === 'baits') {
        gameData.currentBait = item.id;
    }
    
    showNotification(`🎣 Menggunakan ${item.name}!`, "success");
    loadShop(category);
    updateLuckDisplay();
}

function buyPotion(potion) {
    if (gameData.coins < potion.price) {
        showNotification("❌ Koin tidak cukup!", "error");
        return;
    }
    
    gameData.coins -= potion.price;
    gameData.activePotions.push({ ...potion, startTime: Date.now() });
    
    showNotification(`🧪 Menggunakan ${potion.name}!`, "success");
    updatePotionDisplay();
    updateUI();
    loadShop('potions');
    updateLuckDisplay();
}

function buyUpgrade(upgradeType) {
    const upgrades = getVillageUpgrades();
    const upgrade = upgrades.find(u => u.type === upgradeType);
    
    if (!upgrade || gameData.coins < upgrade.price) {
        showNotification("❌ Koin tidak cukup!", "error");
        return;
    }
    
    gameData.coins -= upgrade.price;
    
    switch(upgradeType) {
        case 'hut':
            gameData.village.hutLevel++;
            showNotification(`🏠 Fishing Hut upgraded to level ${gameData.village.hutLevel}!`, "success");
            break;
        case 'assistant':
            if (gameData.village.assistants < 3) {
                gameData.village.assistants++;
                showNotification(`👥 Assistant hired! Total: ${gameData.village.assistants}`, "success");
            }
            break;
    }
    
    updateUI();
    loadShop('upgrades');
    loadVillage();
    updateLuckDisplay();
}

// ==================== SELL FUNCTIONS ====================
function loadSellItems() {
    if (!sellItems || !sellTotal || !sellBtn || !sellAllBtn) return;
    
    if (gameData.backpack.length === 0) {
        sellItems.innerHTML = '<p class="empty-message">Tidak ada ikan untuk dijual</p>';
        sellBtn.disabled = true;
        sellAllBtn.disabled = true;
        return;
    }
    
    sellItems.innerHTML = '';
    gameData.selectedFish = [];
    gameData.totalSellValue = 0;
    
    gameData.backpack.forEach((fish, index) => {
        if (gameData.favoriteFish.includes(index)) return;
        
        const fishCard = document.createElement('div');
        fishCard.className = 'item-card';
        fishCard.dataset.index = index;
        
        let rarityColor = '';
        switch(fish.rarity) {
            case 'basic': rarityColor = '#87CEEB'; break;
            case 'legendary': rarityColor = '#FFD700'; break;
            case 'mythical': rarityColor = '#FF69B4'; break;
            case 'secret': rarityColor = '#00FFFF'; break;
            case 'special': rarityColor = '#FF00FF'; break;
        }
        
        const finalPrice = fish.perfectCatch ? Math.floor(fish.price * 1.5) : fish.price;
        
        fishCard.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin: 5px; border-left: 5px solid ${rarityColor};">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="font-size: 2rem;">${fish.emoji}</div>
                    <div style="flex: 1;">
                        <div style="font-weight: bold; color: white;">${fish.name}</div>
                        <div style="color: ${rarityColor};">${fish.rarity}</div>
                        <div style="color: #FFD700;">${finalPrice} koin</div>
                        ${fish.perfectCatch ? '<div style="color: #FFD700; font-size: 0.7rem;">🎯 +50%</div>' : ''}
                    </div>
                    <input type="checkbox" class="fish-checkbox" style="transform: scale(1.5);">
                </div>
            </div>
        `;
        
        const checkbox = fishCard.querySelector('.fish-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                gameData.selectedFish.push(index);
                gameData.totalSellValue += finalPrice;
            } else {
                const idx = gameData.selectedFish.indexOf(index);
                if (idx > -1) {
                    gameData.selectedFish.splice(idx, 1);
                    gameData.totalSellValue -= finalPrice;
                }
            }
            
            sellTotal.textContent = gameData.totalSellValue;
            sellBtn.disabled = gameData.selectedFish.length === 0;
        });
        
        sellItems.appendChild(fishCard);
    });
    
    if (sellItems.children.length === 0) {
        sellItems.innerHTML = '<p class="empty-message">Semua ikan adalah favorit! Unfavorite dulu untuk menjual.</p>';
    }
    
    sellTotal.textContent = gameData.totalSellValue;
    sellBtn.disabled = true;
    sellAllBtn.disabled = gameData.favoriteFish.length > 0;
}

function sellSelectedFish() {
    if (gameData.selectedFish.length === 0) return;
    
    const hasFavorite = gameData.selectedFish.some(index => gameData.favoriteFish.includes(index));
    
    if (hasFavorite) {
        showNotification("❌ Tidak bisa menjual ikan favorit! Unfavorite dulu.", "error");
        return;
    }
    
    gameData.selectedFish.sort((a, b) => b - a);
    
    let totalSold = 0;
    let fishCount = 0;
    gameData.selectedFish.forEach(index => {
        const fish = gameData.backpack[index];
        const finalPrice = fish.perfectCatch ? Math.floor(fish.price * 1.5) : fish.price;
        totalSold += finalPrice;
        fishCount++;
        gameData.backpack.splice(index, 1);
    });
    
    updateFavoriteIndicesAfterSell(gameData.selectedFish);
    
    gameData.coins += totalSold;
    gameData.selectedFish = [];
    gameData.totalSellValue = 0;
    
    updateUI();
    loadBackpack();
    loadSellItems();
    
    showNotification(`💰 Berhasil menjual ${fishCount} ikan dan mendapatkan ${totalSold} koin!`, "success");
}

function sellAllFish() {
    if (gameData.backpack.length === 0) return;
    
    if (gameData.favoriteFish.length > 0) {
        showNotification("❌ Ada ikan favorit! Unfavorite dulu sebelum jual semua.", "error");
        return;
    }
    
    let totalSold = 0;
    let fishCount = gameData.backpack.length;
    gameData.backpack.forEach(fish => {
        const finalPrice = fish.perfectCatch ? Math.floor(fish.price * 1.5) : fish.price;
        totalSold += finalPrice;
    });
    
    gameData.coins += totalSold;
    gameData.backpack = [];
    gameData.favoriteFish = [];
    
    updateUI();
    loadBackpack();
    loadSellItems();
    
    showNotification(`💰 Berhasil menjual semua ${fishCount} ikan dan mendapatkan ${totalSold} koin!`, "success");
}

// ==================== EXCHANGE SYSTEM dengan ONE RING ====================
function loadExchange() {
    const exchangeContainer = document.getElementById('exchange-items');
    if (!exchangeContainer) return;
    
    exchangeContainer.innerHTML = '';
    
    exchangeRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'exchange-card';
        
        const canCraft = checkExchangeRequirements(recipe);
        
        let outputHtml = '';
        if (recipe.output.type === 'diamond') {
            outputHtml = `
                <div style="display: flex; align-items: center; gap: 10px; margin: 5px 0;">
                    <span style="font-size: 1.5rem;">💎</span>
                    <span style="color: white;">${recipe.output.quantity}x Diamond</span>
                </div>
            `;
        } else if (recipe.output.type === 'coin') {
            outputHtml = `
                <div style="display: flex; align-items: center; gap: 10px; margin: 5px 0;">
                    <span style="font-size: 1.5rem;">💰</span>
                    <span style="color: white;">${recipe.output.quantity}x Coin</span>
                </div>
            `;
        } else if (recipe.output.type === 'special' && recipe.output.id === 'oneRing') {
            outputHtml = `
                <div style="display: flex; align-items: center; gap: 10px; margin: 5px 0;">
                    <span style="font-size: 2rem;">💍</span>
                    <span style="color: #FFD700; font-weight: bold;">${recipe.output.name}</span>
                </div>
                <p style="color: #FF00FF; font-size: 0.8rem;">✨ WAJIB untuk buka dungeon!</p>
            `;
        } else {
            outputHtml = `
                <div style="display: flex; align-items: center; gap: 10px; margin: 5px 0;">
                    <span style="font-size: 1.5rem;">${recipe.output.emoji || '🎁'}</span>
                    <span style="color: white;">${recipe.output.quantity}x ${recipe.output.name}</span>
                </div>
                ${recipe.output.luck ? `<p style="color: #00ffff;">Luck: +${recipe.output.luck}x</p>` : ''}
            `;
        }
        
        // Special styling untuk One Ring
        const isOneRing = recipe.id === 11;
        
        recipeCard.innerHTML = `
            <div style="background: ${isOneRing ? 'rgba(255,215,0,0.1)' : 'rgba(255,255,255,0.05)'}; 
                        border: ${isOneRing ? '2px solid #FFD700' : '1px solid rgba(255,215,0,0.3)'}; 
                        border-radius: 10px; padding: 15px; margin: 10px;">
                <h3 style="color: ${isOneRing ? '#FFD700' : '#FFD700'}; margin-bottom: 10px;">${recipe.name}</h3>
                <p style="color: #ccc; margin-bottom: 15px;">${recipe.description}</p>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="flex: 1;">
                        <h4 style="color: #FF6B6B; margin-bottom: 5px;">INPUT:</h4>
                        ${recipe.input.map(item => `
                            <div style="display: flex; align-items: center; gap: 10px; margin: 5px 0;">
                                <span style="font-size: 1.5rem;">📦</span>
                                <span style="color: white;">${item.quantity}x ${item.name || item.rarity || (item.type === 'coin' ? 'Coin' : (item.type === 'diamond' ? 'Diamond' : ''))}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div style="font-size: 2rem; color: #FFD700;">→</div>
                    
                    <div style="flex: 1;">
                        <h4 style="color: #4CAF50; margin-bottom: 5px;">OUTPUT:</h4>
                        ${outputHtml}
                    </div>
                </div>
                
                <button class="exchange-btn" ${!canCraft ? 'disabled' : ''}
                        style="width: 100%; margin-top: 15px; padding: 10px; background: ${canCraft ? '#4CAF50' : '#666'}; border: none; border-radius: 6px; color: white; cursor: ${canCraft ? 'pointer' : 'not-allowed'};">
                    ${canCraft ? '🔄 TUKAR' : '❌ BAHAN TIDAK CUKUP'}
                </button>
            </div>
        `;
        
        const exchangeBtn = recipeCard.querySelector('.exchange-btn');
        if (canCraft) {
            exchangeBtn.addEventListener('click', () => exchangeItems(recipe));
        }
        
        exchangeContainer.appendChild(recipeCard);
    });
}

function checkExchangeRequirements(recipe) {
    for (const requirement of recipe.input) {
        let count = 0;
        
        if (requirement.type === "fish") {
            if (requirement.exactFish || requirement.id) {
                count = gameData.backpack.filter(f => f.id === requirement.id).length;
            } else {
                count = gameData.backpack.filter(f => f.rarity === requirement.rarity).length;
            }
        } else if (requirement.type === "coin") {
            count = gameData.coins;
        } else if (requirement.type === "diamond") {
            count = gameData.diamonds;
        }
        
        if (count < requirement.quantity) {
            return false;
        }
    }
    return true;
}

function exchangeItems(recipe) {
    for (const requirement of recipe.input) {
        if (requirement.type === "fish") {
            let removed = 0;
            for (let i = gameData.backpack.length - 1; i >= 0; i--) {
                if (removed >= requirement.quantity) break;
                
                const fish = gameData.backpack[i];
                let matches = false;
                
                if (requirement.exactFish || requirement.id) {
                    matches = fish.id === requirement.id;
                } else {
                    matches = fish.rarity === requirement.rarity;
                }
                
                if (matches) {
                    gameData.backpack.splice(i, 1);
                    removed++;
                }
            }
        } else if (requirement.type === "coin") {
            gameData.coins -= requirement.quantity;
        } else if (requirement.type === "diamond") {
            gameData.diamonds -= requirement.quantity;
        }
    }
    
    if (recipe.output.type === "fish") {
        const outputFish = getAllFishes().find(f => f.id === recipe.output.id);
        if (outputFish) {
            gameData.backpack.push({
                ...outputFish,
                catchTime: Date.now(),
                perfectCatch: false,
                fromExchange: true
            });
            showNotification(`✅ Dapat ${outputFish.emoji} ${outputFish.name}!`, "success");
        }
    } else if (recipe.output.type === "rod") {
        const rodToUnlock = rods.find(r => r.id === recipe.output.id);
        if (rodToUnlock) {
            rodToUnlock.owned = true;
            rodToUnlock.unlocked = true;
            rodToUnlock.fromExchange = true;
            showNotification(`🏆 Selamat! Mendapatkan ${recipe.output.name}!`, "success");
        }
    } else if (recipe.output.type === "diamond") {
        gameData.diamonds += recipe.output.quantity;
        showNotification(`💎 Mendapatkan ${recipe.output.quantity} Diamond!`, "success");
    } else if (recipe.output.type === "coin") {
        gameData.coins += recipe.output.quantity;
        showNotification(`💰 Mendapatkan ${recipe.output.quantity} Coin!`, "success");
    } else if (recipe.output.type === "special" && recipe.output.id === "oneRing") {
        gameData.specialItems.oneRing = true;
        showNotification(`💍 SELAMAT! Kamu mendapatkan ONE RING! Sekarang cari GHOST SHIP di Depth Gear untuk buka dungeon!`, "success");
    }
    
    showNotification(`✅ Exchange berhasil!`, "success");
    
    updateUI();
    loadBackpack();
    loadExchange();
    loadSellItems();
    loadShop('rods');
    checkDungeonUnlock(); // Cek ulang unlock dungeon
}

// ==================== LEADERBOARD & RANK FUNCTIONS ====================
function loadRankBattle() {
    const rankContainer = document.getElementById('rank-battle');
    if (!rankContainer) return;
    
    const currentRank = gameData.rank.current;
    const rankInfo = rankData[currentRank];
    
    updateLeaderboardPosition();
    
    rankContainer.innerHTML = `
        <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 20px; margin: 10px;">
            <h2 style="color: #FFD700; text-align: center; margin-bottom: 20px;">⚔️ RANK BATTLE</h2>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 3rem;">${rankInfo.emoji}</div>
                    <h3 style="color: ${rankInfo.color};">${currentRank}</h3>
                </div>
                <div style="text-align: center; flex: 2;">
                    <p style="color: #ccc;">Menang: ${gameData.rank.wins} | Kalah: ${gameData.rank.losses}</p>
                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: white;">Rank EXP</span>
                            <span style="color: #4CAF50;">${gameData.rank.exp}${rankInfo.maxExp !== Infinity ? `/${rankInfo.maxExp}` : ''}</span>
                        </div>
                        ${rankInfo.maxExp !== Infinity ? `
                        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.2); border-radius: 4px; overflow: hidden;">
                            <div style="width: ${(gameData.rank.exp/rankInfo.maxExp)*100}%; height: 100%; background: linear-gradient(to right, ${rankInfo.color}, #FFD700);"></div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; text-align: center;">
                    <p style="color: #FF6B6B;">Biaya Masuk</p>
                    <p style="color: #FFD700; font-size: 1.5rem;">${rankInfo.entryFee} 🪙</p>
                </div>
                <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; text-align: center;">
                    <p style="color: #4CAF50;">Hadiah Menang</p>
                    <p style="color: #00ffff;">${rankInfo.winReward.diamonds} 💎 +${rankInfo.winReward.exp} EXP</p>
                </div>
            </div>
            
            <button onclick="startRankBattle()" class="rank-battle-btn" style="width: 100%; padding: 12px; background: #FF6B6B; border: none; border-radius: 25px; color: white; font-weight: bold; font-size: 1.2rem; cursor: pointer;">
                ⚔️ CARI LAWAN (${rankInfo.entryFee} Koin)
            </button>
            
            <div style="margin-top: 30px; background: rgba(0,0,0,0.3); border-radius: 10px; padding: 15px;">
                <h3 style="color: #FFD700; text-align: center; margin-bottom: 15px;">🏆 TOP 5 GLOBAL</h3>
                ${generateLeaderboardHTML()}
                <div style="margin-top: 15px; text-align: center; padding: 10px; background: rgba(255,215,0,0.1); border-radius: 8px;">
                    <p style="color: #FFD700;">Posisi kamu: <strong>${gameData.rank.leaderboardPosition > 0 ? `#${gameData.rank.leaderboardPosition}` : 'Tidak masuk leaderboard'}</strong></p>
                    ${gameData.rank.leaderboardPosition === 0 && gameData.rank.exp > leaderboardNPCs[4].exp ? 
                        '<p style="color: #00ff00;">✨ Kamu sudah bisa masuk leaderboard! Menang 1x lagi untuk menggeser.</p>' : ''}
                </div>
            </div>
        </div>
    `;
}

function generateLeaderboardHTML() {
    let html = '<div style="display: flex; flex-direction: column; gap: 8px;">';
    
    let allEntries = [...leaderboardNPCs];
    
    if (gameData.rank.leaderboardPosition > 0) {
        const playerEntry = {
            rank: gameData.rank.leaderboardPosition,
            name: "👤 Kamu",
            rankTitle: gameData.rank.current,
            exp: gameData.rank.exp,
            wins: gameData.rank.wins,
            emoji: "🎣",
            isPlayer: true
        };
        
        allEntries.splice(gameData.rank.leaderboardPosition - 1, 0, playerEntry);
        if (allEntries.length > 5) allEntries.pop();
    }
    
    allEntries.sort((a, b) => b.exp - a.exp);
    
    allEntries.forEach((entry, index) => {
        html += `
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; ${entry.isPlayer ? 'border: 2px solid #FFD700;' : ''}">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.2rem; min-width: 30px;">${index === 0 ? '👑' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index+1}.`}</span>
                    <span style="font-size: 1.5rem;">${entry.emoji || '🎣'}</span>
                    <div>
                        <div style="font-weight: bold; color: ${entry.isPlayer ? '#FFD700' : 'white'};">${entry.name}</div>
                        <div style="font-size: 0.8rem; color: ${rankData[entry.rankTitle]?.color || '#ccc'};">${entry.rankTitle}</div>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="color: #FFD700;">${entry.exp.toLocaleString()} EXP</div>
                    <div style="font-size: 0.8rem; color: #ccc;">${entry.wins} wins</div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

function updateLeaderboardPosition() {
    const playerExp = gameData.rank.exp;
    let position = 0;
    
    if (playerExp > leaderboardNPCs[4].exp) {
        position = 5;
        for (let i = 4; i >= 0; i--) {
            if (playerExp > leaderboardNPCs[i].exp) {
                position = i + 1;
            } else {
                break;
            }
        }
    }
    
    gameData.rank.leaderboardPosition = position;
}

function startRankBattle() {
    const currentRank = gameData.rank.current;
    const rankInfo = rankData[currentRank];
    
    if (gameData.coins < rankInfo.entryFee) {
        showNotification(`❌ Koin tidak cukup! Butuh ${rankInfo.entryFee} koin`, "error");
        return;
    }
    
    if (gameData.backpack.length === 0) {
        showNotification("❌ Tidak ada ikan untuk bertarung!", "error");
        return;
    }
    
    gameData.coins -= rankInfo.entryFee;
    updateUI();
    
    const opponent = rankInfo.opponents[Math.floor(Math.random() * rankInfo.opponents.length)];
    showRankBattleSelection(opponent);
}

function showRankBattleSelection(opponent) {
    const rankModal = document.getElementById('rank-modal');
    const rankContent = document.getElementById('rank-content');
    
    if (!rankModal || !rankContent) return;
    
    let fishOptions = '';
    gameData.backpack.forEach((fish, index) => {
        fishOptions += `
            <div onclick="selectFishForBattle(${index}, ${opponent.fish.price})" 
                 style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; margin: 5px; cursor: pointer; display: flex; align-items: center; gap: 10px; border: 1px solid rgba(255,215,0,0.3);">
                <span style="font-size: 2rem;">${fish.emoji}</span>
                <div style="flex: 1;">
                    <div style="color: white; font-weight: bold;">${fish.name}</div>
                    <div style="color: #FFD700;">💰 ${fish.price} koin</div>
                    <div style="color: ${fish.rarity === 'basic' ? '#87CEEB' : fish.rarity === 'legendary' ? '#FFD700' : fish.rarity === 'mythical' ? '#FF69B4' : fish.rarity === 'secret' ? '#00FFFF' : '#FF00FF'}; font-size: 0.8rem;">${fish.rarity}</div>
                </div>
            </div>
        `;
    });
    
    rankContent.innerHTML = `
        <div style="padding: 20px;">
            <h3 style="color: #FFD700; text-align: center; margin-bottom: 20px;">🎣 Pilih Ikan untuk Bertarung!</h3>
            <p style="color: #ccc; text-align: center; margin-bottom: 20px; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px;">
                <strong>Lawan:</strong> ${opponent.name} ${opponent.fish.emoji} (💰 ${opponent.fish.price} koin)
            </p>
            <div style="max-height: 300px; overflow-y: auto; margin: 15px 0; padding: 5px;">
                ${fishOptions}
            </div>
            <button onclick="document.getElementById('rank-modal').style.display='none'" 
                    style="width: 100%; margin-top: 20px; padding: 10px; background: #666; border: none; border-radius: 8px; color: white; cursor: pointer; font-weight: bold;">
                ❌ BATAL
            </button>
        </div>
    `;
    
    rankModal.style.display = 'block';
    window.currentOpponent = opponent;
}

function selectFishForBattle(fishIndex, opponentPrice) {
    const rankModal = document.getElementById('rank-modal');
    const fish = gameData.backpack[fishIndex];
    
    if (!fish) {
        showNotification("❌ Ikan tidak ditemukan!", "error");
        rankModal.style.display = 'none';
        return;
    }
    
    const priceDifference = fish.price - opponentPrice;
    let winChance = 50 + (priceDifference / 50);
    winChance = Math.min(Math.max(winChance, 10), 95);
    
    const isWin = Math.random() * 100 < winChance;
    
    if (!isWin) {
        gameData.backpack.splice(fishIndex, 1);
    }
    
    rankModal.style.display = 'none';
    processBattleResult(isWin, fish, winChance);
}

function processBattleResult(isWin, fish, winChance) {
    const currentRank = gameData.rank.current;
    const rankInfo = rankData[currentRank];
    
    gameData.rank.totalBattles++;
    
    if (isWin) {
        gameData.rank.wins++;
        gameData.diamonds += rankInfo.winReward.diamonds;
        gameData.rank.exp += rankInfo.winReward.exp;
        
        if (currentRank !== "Immortal" && gameData.rank.exp >= rankInfo.maxExp) {
            gameData.rank.exp -= rankInfo.maxExp;
            const oldRank = gameData.rank.current;
            gameData.rank.current = rankInfo.nextRank;
            gameData.rank.highestRank = gameData.rank.current;
            showNotification(`🏆 SELAMAT! Rank naik dari ${oldRank} ke ${gameData.rank.current}!`, "success");
        }
        
        const streakBonus = Math.floor(gameData.rank.wins / 10) * 0.1;
        const bonusDiamonds = Math.floor(rankInfo.winReward.diamonds * streakBonus);
        gameData.diamonds += bonusDiamonds;
        
        showNotification(`🎉 MENANG! +${rankInfo.winReward.diamonds + bonusDiamonds} 💎 (termasuk bonus streak)`, "success");
        showNotification(`✅ Ikan ${fish.emoji} ${fish.name} kembali dengan selamat! (+${rankInfo.winReward.exp} EXP Rank)`, "success");
        
        updateLeaderboardPosition();
        
    } else {
        gameData.rank.losses++;
        gameData.rank.exp = Math.max(0, gameData.rank.exp - rankInfo.lossPenalty.exp);
        
        showNotification(`😢 KALAH! Rank EXP -${rankInfo.lossPenalty.exp}`, "error");
        showNotification(`❌ Ikan ${fish.emoji} ${fish.name} hilang dalam pertarungan!`, "error");
    }
    
    updateUI();
    loadBackpack();
    loadRankBattle();
    loadSellItems();
}

// ==================== QUEST SYSTEM ====================
function updateQuestProgress(fish) {
    // Quest Bitcoin Bait
    if (fish.id === 606) { // Bitcoin
        const quest4 = quests.find(q => q.id === 4);
        if (quest4 && !quest4.completed) {
            quest4.progress++;
            if (quest4.progress >= quest4.target) {
                quest4.completed = true;
                completeQuest(quest4);
            }
        }
    }
    
    if (fish.rarity === "secret" || fish.rarity === "special") {
        if (fish.spot === "kuil") {
            const quest1 = quests.find(q => q.id === 1);
            if (quest1 && !quest1.completed) {
                quest1.progress++;
                if (quest1.progress >= quest1.target) {
                    quest1.completed = true;
                    completeQuest(quest1);
                }
            }
        }
        
        if (fish.spot && !caughtSecretSpots[fish.spot]) {
            caughtSecretSpots[fish.spot] = true;
            
            const quest2 = quests.find(q => q.id === 2);
            if (quest2 && !quest2.completed) {
                quest2.progress = Object.values(caughtSecretSpots).filter(Boolean).length;
                if (quest2.progress >= quest2.target) {
                    quest2.completed = true;
                    completeQuest(quest2);
                }
            }
        }
        
        if (fish.spot === "angkasa") {
            const quest3 = quests.find(q => q.id === 3);
            if (quest3 && !quest3.completed) {
                quest3.progress++;
                if (quest3.progress >= quest3.target) {
                    quest3.completed = true;
                    completeQuest(quest3);
                }
            }
        }
        
        loadQuests();
    }
}

function completeQuest(quest) {
    showNotification(`🎉 Quest "${quest.name}" selesai! Reward: ${quest.reward}`, "success");
    
    if (quest.reward === "Element Rod") {
        const elementRod = rods.find(r => r.id === 7);
        if (elementRod) {
            elementRod.unlocked = true;
            elementRod.owned = true;
            gameData.currentRod = 7;
            showNotification("🔓 Element Rod unlocked! +120x Luck!", "success");
        }
    } else if (quest.reward === "Trident Rod") {
        const tridentRod = rods.find(r => r.id === 8);
        if (tridentRod) {
            tridentRod.unlocked = true;
            tridentRod.owned = true;
            gameData.currentRod = 8;
            showNotification("🔓 Trident Rod unlocked! +200x Luck!", "success");
        }
    } else if (quest.reward === "1x1x1 Rod") {
        const oneByOneRod = rods.find(r => r.id === 11);
        if (oneByOneRod) {
            oneByOneRod.unlocked = true;
            oneByOneRod.owned = true;
            gameData.currentRod = 11;
            showNotification("🔓 1x1x1 Rod unlocked! +1111x Luck!", "success");
        }
    } else if (quest.reward === "Bitcoin Bait") {
        const bitcoinBait = baits.find(b => b.id === 9);
        if (bitcoinBait) {
            bitcoinBait.owned = true;
            showNotification("🪱 Bitcoin Bait unlocked! +10,000x Luck!", "success");
        }
    }
    
    loadShop('rods');
    loadShop('baits');
    updateLuckDisplay();
}

function loadQuests() {
    const questsList = document.getElementById('quests-list');
    if (!questsList) return;
    
    questsList.innerHTML = '';
    
    quests.forEach(quest => {
        const questItem = document.createElement('div');
        questItem.className = 'quest-item';
        
        const progressPercent = Math.min((quest.progress / quest.target) * 100, 100);
        
        questItem.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin: 10px; border-left: 4px solid ${quest.completed ? '#4CAF50' : '#FFD700'};">
                <h4 style="color: #FFD700; margin-bottom: 5px;">${quest.name}</h4>
                <p style="color: #ccc; margin-bottom: 10px;">${quest.desc}</p>
                <div style="background: rgba(0,0,0,0.3); height: 8px; border-radius: 4px; margin: 10px 0;">
                    <div style="width: ${progressPercent}%; height: 100%; background: linear-gradient(to right, #4CAF50, #8BC34A); border-radius: 4px;"></div>
                </div>
                <p style="color: white;">Progress: ${quest.progress}/${quest.target}</p>
                <p style="color: #00ffff;"><strong>Reward:</strong> ${quest.reward}</p>
                ${quest.completed ? '<div style="color: #4CAF50; margin-top: 5px;">✓ Completed</div>' : ''}
            </div>
        `;
        
        questsList.appendChild(questItem);
    });
}

// ==================== AQUARIUM ====================
function loadAquarium() {
    updateAquariumStats();
    loadFishTank('basic', 'basic-tank');
    loadFishTank('legendary', 'legendary-tank');
    loadFishTank('mythical', 'mythical-tank');
    loadFishTank('secret', 'secret-tank');
    loadFishTank('special', 'special-tank');
}

function loadFishTank(rarity, tankId) {
    const tank = document.getElementById(tankId);
    if (!tank) return;
    
    tank.innerHTML = '<h4 style="color: #FFD700; margin-bottom: 10px;">' + rarity.charAt(0).toUpperCase() + rarity.slice(1) + ' Fish</h4>';
    
    const fishInTank = gameData.aquarium[rarity] || {};
    
    if (Object.keys(fishInTank).length === 0) {
        tank.innerHTML += '<div class="empty-tank" style="color: #ccc; padding: 20px; text-align: center;">Belum ada ikan</div>';
        return;
    }
    
    Object.keys(fishInTank).forEach(fishId => {
        const fish = getAllFishes().find(f => f.id == fishId);
        if (fish) {
            const fishElement = document.createElement('div');
            fishElement.className = 'fish-in-tank';
            fishElement.style.fontSize = '2rem';
            fishElement.style.padding = '10px';
            fishElement.style.background = 'rgba(255,255,255,0.05)';
            fishElement.style.borderRadius = '8px';
            fishElement.style.cursor = 'pointer';
            fishElement.title = `${fish.name} (${fishInTank[fishId]}x)`;
            fishElement.textContent = fish.emoji;
            tank.appendChild(fishElement);
        }
    });
}

function addToAquarium(fish) {
    const rarity = fish.rarity;
    if (!gameData.aquarium[rarity]) gameData.aquarium[rarity] = {};
    if (!gameData.aquarium[rarity][fish.id]) gameData.aquarium[rarity][fish.id] = 0;
    gameData.aquarium[rarity][fish.id]++;
    updateAquariumStats();
    loadAquarium();
}

function updateAquariumStats() {
    const speciesCount = document.getElementById('species-count');
    const totalSpecies = document.getElementById('total-species');
    const collectionPercent = document.getElementById('collection-percent');
    
    if (!speciesCount || !totalSpecies || !collectionPercent) return;
    
    const totalCollected = Object.values(gameData.aquarium).reduce((total, rarity) => {
        return total + Object.keys(rarity).length;
    }, 0);
    
    const totalPossible = getAllFishes().length;
    const percent = Math.round((totalCollected / totalPossible) * 100);
    
    speciesCount.textContent = totalCollected;
    totalSpecies.textContent = totalPossible;
    collectionPercent.textContent = percent + '%';
}

function getAllFishes() {
    return fishingSpots.flatMap(spot => spot.fishes);
}

// ==================== VILLAGE ====================
function loadVillage() {
    const assistantCount = document.getElementById('assistant-count');
    const hutLevel = document.getElementById('hut-level');
    
    if (assistantCount) assistantCount.textContent = gameData.village.assistants;
    if (hutLevel) hutLevel.textContent = gameData.village.hutLevel;
}

// ==================== SPOT SYSTEM ====================
function createSpotButtons() {
    const spotContainer = document.getElementById('spot-buttons');
    if (!spotContainer) return;
    
    spotContainer.innerHTML = '';
    
    fishingSpots.forEach(spot => {
        const spotBtn = document.createElement('button');
        spotBtn.className = 'spot-btn';
        spotBtn.setAttribute('data-spot', spot.id);
        spotBtn.textContent = spot.name;
        spotBtn.style.background = spot.id === currentSpot ? '#FFD700' : spot.color;
        spotBtn.style.color = spot.id === currentSpot ? '#000' : '#fff';
        spotBtn.style.padding = '8px 16px';
        spotBtn.style.border = 'none';
        spotBtn.style.borderRadius = '20px';
        spotBtn.style.margin = '5px';
        spotBtn.style.cursor = 'pointer';
        spotBtn.style.fontWeight = 'bold';
        
        if (spot.id === 7) {
            spotBtn.style.animation = 'pulse 2s infinite';
            spotBtn.style.boxShadow = '0 0 15px #00ffff';
        }
        
        spotBtn.addEventListener('click', () => switchFishingSpot(spot.id));
        spotContainer.appendChild(spotBtn);
    });
}

function switchFishingSpot(spotId) {
    currentSpot = spotId;
    const spot = fishingSpots[spotId];
    
    document.body.style.background = spot.background;
    updateSpotButtons();
    updateSpotDisplay();
    createFishAnimation();
    
    showNotification(`🎣 Pindah ke ${spot.name}`, "success");
}

function updateSpotButtons() {
    const spotButtons = document.querySelectorAll('.spot-btn');
    spotButtons.forEach(btn => {
        const spotId = parseInt(btn.getAttribute('data-spot'));
        if (spotId === currentSpot) {
            btn.style.background = '#FFD700';
            btn.style.color = '#000';
        } else {
            btn.style.background = fishingSpots[spotId].color;
            btn.style.color = '#fff';
        }
    });
}

function updateSpotDisplay() {
    const spotDisplay = document.getElementById('spot-display');
    if (!spotDisplay) return;
    const spot = fishingSpots[currentSpot];
    spotDisplay.innerHTML = `<span style="color: white; font-weight: bold;">📍 ${spot.name}</span>`;
}

// ==================== ANIMATION ====================
function createFishAnimation() {
    const fishDisplay = document.getElementById('fish-display');
    if (!fishDisplay) return;
    
    fishDisplay.innerHTML = '';
    const currentSpotData = fishingSpots[currentSpot];
    
    for (let i = 0; i < 8; i++) {
        const fish = document.createElement('div');
        const fishData = currentSpotData.fishes[i % currentSpotData.fishes.length];
        fish.className = `fish`;
        
        let fishColor = '#87CEEB';
        if (fishData.rarity === 'legendary') fishColor = '#FFD700';
        if (fishData.rarity === 'mythical') fishColor = '#FF69B4';
        if (fishData.rarity === 'secret') fishColor = '#00FFFF';
        if (fishData.rarity === 'special') fishColor = '#FF00FF';
        
        fish.style.color = fishColor;
        fish.style.position = 'absolute';
        fish.style.fontSize = '1.5rem';
        
        const top = Math.random() * 150 + 50;
        const delay = Math.random() * 15;
        const speed = 8 + Math.random() * 12;
        
        fish.style.top = `${top}px`;
        fish.style.animation = `swim ${speed}s infinite linear`;
        fish.style.animationDelay = `${delay}s`;
        fish.textContent = fishData.emoji;
        
        fishDisplay.appendChild(fish);
    }
}

// ==================== UI UPDATES ====================
function updateUI() {
    if (coinsElement) coinsElement.textContent = gameData.coins;
    if (diamondsElement) diamondsElement.textContent = gameData.diamonds;
    if (levelElement) levelElement.textContent = gameData.level;
    if (expElement) expElement.textContent = `${gameData.exp}/${gameData.level * 100}`;
    
    if (gachaBtn) gachaBtn.disabled = gameData.coins < 500;
    
    updateWeatherDisplay();
}

function updatePotionDisplay() {
    const activeEffects = document.getElementById('active-effects');
    if (!activeEffects) return;
    
    activeEffects.innerHTML = '';
    gameData.activePotions.forEach(potion => {
        const effectItem = document.createElement('div');
        effectItem.className = 'effect-item';
        effectItem.style.background = 'rgba(255,215,0,0.3)';
        effectItem.style.padding = '8px 15px';
        effectItem.style.borderRadius = '15px';
        effectItem.style.margin = '5px';
        effectItem.style.display = 'flex';
        effectItem.style.justifyContent = 'space-between';
        effectItem.style.border = '1px solid gold';
        effectItem.innerHTML = `<div>${potion.emoji} ${potion.name}</div><div>${potion.duration}m</div>`;
        activeEffects.appendChild(effectItem);
    });
}

// ==================== TAB SYSTEM ====================
function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    const activePane = document.getElementById(tabId);
    
    if (activeTab) activeTab.classList.add('active');
    if (activePane) activePane.classList.add('active');
    
    if (tabId === 'sell') loadSellItems();
    else if (tabId === 'gacha') updateGachaTab();
    else if (tabId === 'quests') loadQuests();
    else if (tabId === 'aquarium') loadAquarium();
    else if (tabId === 'village') loadVillage();
    else if (tabId === 'pets') loadPetShop();
    else if (tabId === 'exchange') loadExchange();
    else if (tabId === 'skills') loadSkillTree();
    else if (tabId === 'gamepass') loadGamepass();
    else if (tabId === 'rank') loadRankBattle();
    else if (tabId === 'depth-gear') loadDepthGearShop();
}

function switchCategory(category) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    loadShop(category);
}

// ==================== NOTIFICATION ====================
function showNotification(message, type = "info") {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.background = type === 'success' ? '#4CAF50' : type === 'error' ? '#FF6B6B' : '#2196F3';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '8px';
    notification.style.margin = '10px';
    notification.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    notification.style.animation = 'slideIn 0.3s ease';
    notification.textContent = message;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (container.contains(notification)) container.removeChild(notification);
        }, 300);
    }, 3000);
}

function showFishingResult(fish, price, perfectCatch = false) {
    if (!resultModal || !resultTitle || !resultContent) return;
    
    resultTitle.textContent = perfectCatch ? "🎯 PERFECT CATCH!" : "Ikan Tertangkap!";
    resultTitle.style.color = perfectCatch ? '#FFD700' : 'white';
    
    let rarityColor = '#87CEEB';
    switch(fish.rarity) {
        case 'legendary': rarityColor = '#FFD700'; break;
        case 'mythical': rarityColor = '#FF69B4'; break;
        case 'secret': rarityColor = '#00FFFF'; break;
        case 'special': rarityColor = '#FF00FF'; break;
    }
    
    resultContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin: 20px 0;">${fish.emoji}</div>
            <h3 style="color: ${rarityColor}; margin-bottom: 10px;">${fish.name}</h3>
            <p style="color: #ccc;">Rarity: <span style="color: ${rarityColor}">${fish.rarity.toUpperCase()}</span></p>
            <p style="color: #FFD700; font-size: 1.5rem;">${price} koin</p>
            ${perfectCatch ? '<p style="color: #FFD700;">🎯 Perfect Catch Bonus: +50%</p>' : ''}
            <p style="color: #4CAF50; margin-top: 20px;">✓ Ditambahkan ke backpack!</p>
        </div>
    `;
    
    resultModal.style.display = 'block';
}

function showAutoSellNotification(fish, price) {
    showNotification(`💰 Auto-sold: ${fish.emoji} ${fish.name} for ${price} coins`, "info");
}

// ==================== TIMERS ====================
function startPotionTimer() {
    setInterval(() => {
        if (gameData.activePotions.length > 0) {
            const potion = gameData.activePotions[0];
            potion.duration--;
            
            if (potion.duration <= 0) {
                gameData.activePotions = [];
                updatePotionDisplay();
                showNotification("⏰ Efek potion sudah habis!", "info");
            } else {
                updatePotionDisplay();
            }
        }
    }, 60000);
}

// ==================== DUNGEON FUNCTIONS ====================

// Switch to dungeon menu
function switchToDungeon() {
    if (!checkDungeonUnlock()) {
        showNotification("🔒 DUNGEON TERKUNCI! Butuh GHOST SHIP (500💎) + ONE RING (10 Secret Fish)!", "error");
        return;
    }
    
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('dungeon-menu').style.display = 'block';
    
    // Load dungeon tabs
    loadDungeonCharacter();
    loadDungeonShop();
    loadDungeonLevels();
    updateDungeonStats();
}

// Switch back to main menu
function switchToMain() {
    document.getElementById('dungeon-menu').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

// Update dungeon stats
function updateDungeonStats() {
    const fishIndex = gameData.dungeon.fishEquipment.equippedFish;
    const selectedFishSpan = document.getElementById('dungeon-selected-fish');
    const attackSpan = document.getElementById('dungeon-attack');
    const defenseSpan = document.getElementById('dungeon-defense');
    
    if (!selectedFishSpan || !attackSpan || !defenseSpan) return;
    
    if (fishIndex !== null && gameData.backpack[fishIndex]) {
        const fish = gameData.backpack[fishIndex];
        const weapon = dungeonWeapons.find(w => w.id === gameData.dungeon.fishEquipment.weapon);
        const armor = dungeonArmors.find(a => a.id === gameData.dungeon.fishEquipment.armor);
        
        selectedFishSpan.textContent = `${fish.emoji} ${fish.name}`;
        attackSpan.textContent = weapon ? weapon.attack : 0;
        defenseSpan.textContent = armor ? armor.defense : 0;
        
        // Update equipment display
        const equippedWeapon = document.getElementById('equipped-weapon');
        const equippedArmor = document.getElementById('equipped-armor');
        
        if (equippedWeapon) {
            equippedWeapon.innerHTML = weapon ? 
                `<span style="color: #ff6b6b;">${weapon.emoji} ${weapon.name} (+${weapon.attack} ATK)</span>` : 
                '<span>Belum ada senjata</span>';
        }
        
        if (equippedArmor) {
            equippedArmor.innerHTML = armor ? 
                `<span style="color: #4CAF50;">${armor.emoji} ${armor.name} (+${armor.defense} DEF)</span>` : 
                '<span>Belum ada armor</span>';
        }
    } else {
        selectedFishSpan.textContent = 'Belum dipilih';
        attackSpan.textContent = '0';
        defenseSpan.textContent = '0';
    }
}

// Load dungeon character selection
function loadDungeonCharacter() {
    const charContainer = document.getElementById('dungeon-character-list');
    if (!charContainer) return;
    
    // Filter hanya ikan secret dari backpack
    const secretFish = gameData.backpack.filter(fish => 
        fish.rarity === 'secret' || fish.rarity === 'special'
    );
    
    if (secretFish.length === 0) {
        charContainer.innerHTML = `
            <div style="text-align: center; padding: 30px; background: rgba(255,255,255,0.05); border-radius: 10px;">
                <div style="font-size: 3rem; margin-bottom: 20px;">🐟</div>
                <h3 style="color: #FFD700;">Tidak ada ikan Secret!</h3>
                <p style="color: #ccc;">Kamu butuh ikan Secret untuk bertarung di dungeon</p>
                <p style="color: #00ffff;">Dapatkan ikan Secret dari memancing di spot khusus atau Gacha!</p>
            </div>
        `;
        return;
    }
    
    const equippedFishIndex = gameData.dungeon.fishEquipment.equippedFish;
    
    let fishHTML = '';
    secretFish.forEach((fish, idx) => {
        const fishIndex = gameData.backpack.findIndex(f => f === fish);
        const isSelected = fishIndex === equippedFishIndex;
        const hp = Math.floor(fish.price / 10); // Rumus HP: price tanpa 0 di belakang
        
        fishHTML += `
            <div onclick="selectDungeonFish(${fishIndex})" 
                 style="background: ${isSelected ? 'rgba(255,215,0,0.3)' : 'rgba(255,255,255,0.05)'}; 
                        padding: 15px; border-radius: 8px; margin: 10px; cursor: pointer; 
                        display: flex; align-items: center; gap: 15px; 
                        border: ${isSelected ? '2px solid #FFD700' : '1px solid rgba(255,255,255,0.1)'};
                        transition: all 0.3s;">
                <div style="font-size: 3rem;">${fish.emoji}</div>
                <div style="flex: 1;">
                    <div style="font-weight: bold; color: #00ffff;">${fish.name}</div>
                    <div style="color: #FFD700;">💰 ${fish.price} koin</div>
                    <div style="color: #4CAF50;">❤️ HP: ${hp}</div>
                </div>
                ${isSelected ? '<div style="color: #FFD700; font-size: 2rem;">✓</div>' : ''}
            </div>
        `;
    });
    
    charContainer.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 10px; padding: 20px;">
            <h3 style="color: #FFD700; margin-bottom: 20px;">🐟 Pilih Ikan Secret untuk Bertarung</h3>
            <div style="max-height: 400px; overflow-y: auto;">
                ${fishHTML}
            </div>
        </div>
    `;
    
    updateDungeonStats();
}

// Select fish for dungeon
function selectDungeonFish(fishIndex) {
    const fish = gameData.backpack[fishIndex];
    
    if (!fish || (fish.rarity !== 'secret' && fish.rarity !== 'special')) {
        showNotification("❌ Hanya ikan Secret yang bisa dipilih untuk dungeon!", "error");
        return;
    }
    
    gameData.dungeon.fishEquipment.equippedFish = fishIndex;
    showNotification(`✅ ${fish.name} siap bertarung di dungeon!`, "success");
    
    loadDungeonCharacter();
    loadDungeonLevels();
    updateDungeonStats();
}

// Load dungeon shop (weapons & armors)
function loadDungeonShop() {
    const weaponContainer = document.getElementById('dungeon-weapons');
    const armorContainer = document.getElementById('dungeon-armors');
    
    if (!weaponContainer || !armorContainer) return;
    
    // Load weapons
    weaponContainer.innerHTML = '';
    dungeonWeapons.forEach(weapon => {
        const isEquipped = gameData.dungeon.fishEquipment.weapon === weapon.id;
        const canAfford = weapon.currency === "coins" ? 
            gameData.coins >= weapon.price : gameData.diamonds >= weapon.price;
        
        const weaponCard = document.createElement('div');
        weaponCard.className = 'item-card';
        weaponCard.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin: 5px; text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 10px;">${weapon.emoji}</div>
                <div style="font-weight: bold; color: white; margin-bottom: 5px;">${weapon.name}</div>
                <p style="color: #ccc; font-size: 0.9rem; margin-bottom: 10px;">${weapon.description}</p>
                <div style="color: #ff6b6b; font-size: 1.2rem;">⚔️ Attack: +${weapon.attack}</div>
                <div style="color: ${weapon.currency === 'diamonds' ? '#00ffff' : '#FFD700'}; margin: 10px 0;">
                    ${weapon.price} ${weapon.currency === 'diamonds' ? '💎' : '🪙'}
                </div>
                ${isEquipped ? 
                    `<button class="owned-btn" disabled style="width: 100%; padding: 8px; background: #4CAF50; border: none; border-radius: 6px; color: white;">✓ EQUIPPED</button>` :
                    `<button class="buy-weapon-btn" ${!canAfford ? 'disabled' : ''} 
                            onclick="buyDungeonWeapon(${weapon.id})"
                            style="width: 100%; padding: 8px; background: ${canAfford ? '#4CAF50' : '#666'}; border: none; border-radius: 6px; color: white; cursor: ${canAfford ? 'pointer' : 'not-allowed'};">
                        ${canAfford ? '🛒 BELI' : '❌ TIDAK CUKUP'}
                    </button>`
                }
            </div>
        `;
        weaponContainer.appendChild(weaponCard);
    });
    
    // Load armors
    armorContainer.innerHTML = '';
    dungeonArmors.forEach(armor => {
        const isEquipped = gameData.dungeon.fishEquipment.armor === armor.id;
        const canAfford = armor.currency === "coins" ? 
            gameData.coins >= armor.price : gameData.diamonds >= armor.price;
        
        const armorCard = document.createElement('div');
        armorCard.className = 'item-card';
        armorCard.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin: 5px; text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 10px;">${armor.emoji}</div>
                <div style="font-weight: bold; color: white; margin-bottom: 5px;">${armor.name}</div>
                <p style="color: #ccc; font-size: 0.9rem; margin-bottom: 10px;">${armor.description}</p>
                <div style="color: #4CAF50; font-size: 1.2rem;">🛡️ Defense: +${armor.defense}</div>
                <div style="color: ${armor.currency === 'diamonds' ? '#00ffff' : '#FFD700'}; margin: 10px 0;">
                    ${armor.price} ${armor.currency === 'diamonds' ? '💎' : '🪙'}
                </div>
                ${isEquipped ? 
                    `<button class="owned-btn" disabled style="width: 100%; padding: 8px; background: #4CAF50; border: none; border-radius: 6px; color: white;">✓ EQUIPPED</button>` :
                    `<button class="buy-armor-btn" ${!canAfford ? 'disabled' : ''} 
                            onclick="buyDungeonArmor(${armor.id})"
                            style="width: 100%; padding: 8px; background: ${canAfford ? '#4CAF50' : '#666'}; border: none; border-radius: 6px; color: white; cursor: ${canAfford ? 'pointer' : 'not-allowed'};">
                        ${canAfford ? '🛒 BELI' : '❌ TIDAK CUKUP'}
                    </button>`
                }
            </div>
        `;
        armorContainer.appendChild(armorCard);
    });
    
    updateDungeonStats();
}

// Buy dungeon weapon
function buyDungeonWeapon(weaponId) {
    const weapon = dungeonWeapons.find(w => w.id === weaponId);
    if (!weapon) return;
    
    if (weapon.currency === "coins" && gameData.coins >= weapon.price) {
        gameData.coins -= weapon.price;
    } else if (weapon.currency === "diamonds" && gameData.diamonds >= weapon.price) {
        gameData.diamonds -= weapon.price;
    } else {
        showNotification("❌ Tidak cukup resources!", "error");
        return;
    }
    
    gameData.dungeon.fishEquipment.weapon = weapon.id;
    showNotification(`✅ Berhasil membeli ${weapon.name}! Attack +${weapon.attack}`, "success");
    
    updateUI();
    loadDungeonShop();
    loadDungeonCharacter();
    updateDungeonStats();
}

// Buy dungeon armor
function buyDungeonArmor(armorId) {
    const armor = dungeonArmors.find(a => a.id === armorId);
    if (!armor) return;
    
    if (armor.currency === "coins" && gameData.coins >= armor.price) {
        gameData.coins -= armor.price;
    } else if (armor.currency === "diamonds" && gameData.diamonds >= armor.price) {
        gameData.diamonds -= armor.price;
    } else {
        showNotification("❌ Tidak cukup resources!", "error");
        return;
    }
    
    gameData.dungeon.fishEquipment.armor = armor.id;
    showNotification(`✅ Berhasil membeli ${armor.name}! Defense +${armor.defense}`, "success");
    
    updateUI();
    loadDungeonShop();
    loadDungeonCharacter();
    updateDungeonStats();
}

// Load dungeon levels
function loadDungeonLevels() {
    const levelsContainer = document.getElementById('dungeon-levels-list');
    if (!levelsContainer) return;
    
    const equippedFish = gameData.dungeon.fishEquipment.equippedFish;
    
    if (equippedFish === null) {
        levelsContainer.innerHTML = `
            <div style="text-align: center; padding: 30px; background: rgba(255,255,255,0.05); border-radius: 10px;">
                <p style="color: #FF6B6B;">Pilih ikan dulu di menu Karakter!</p>
            </div>
        `;
        return;
    }
    
    let levelsHTML = '';
    
    dungeonLevels.forEach(level => {
        const progress = gameData.dungeon.dungeonProgress[level.id];
        const isCompleted = progress.completed;
        const bossesDefeated = progress.bossesDefeated.length;
        const canEnter = gameData.level >= level.requiredLevel && gameData.coins >= level.entryFee;
        
        levelsHTML += `
            <div style="background: linear-gradient(135deg, ${level.color}40, #00000080); 
                        border: 2px solid ${level.color}; border-radius: 10px; padding: 20px; margin: 15px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3 style="color: ${level.color};">${level.name}</h3>
                        <p style="color: #ccc;">${level.description}</p>
                        <div style="display: flex; gap: 15px; margin-top: 10px;">
                            <span style="color: #FFD700;">💰 Fee: ${level.entryFee}</span>
                            <span style="color: #00ffff;">📊 Required Level: ${level.requiredLevel}</span>
                        </div>
                        ${isCompleted ? 
                            '<div style="color: #4CAF50; margin-top: 10px;">✓ SELESAI</div>' : 
                            `<div style="color: #FFA500; margin-top: 10px;">⚔️ Bosses: ${bossesDefeated}/3</div>`
                        }
                    </div>
                    <button onclick="enterDungeonLevel(${level.id})" 
                            ${!canEnter || isCompleted ? 'disabled' : ''}
                            style="padding: 10px 20px; background: ${canEnter && !isCompleted ? '#4CAF50' : '#666'}; 
                                   border: none; border-radius: 5px; color: white; cursor: ${canEnter && !isCompleted ? 'pointer' : 'not-allowed'};">
                        ${isCompleted ? '✅ Selesai' : (canEnter ? '🎮 MASUK' : '❌ TERKUNCI')}
                    </button>
                </div>
            </div>
        `;
    });
    
    levelsContainer.innerHTML = levelsHTML;
}

// Enter dungeon level
function enterDungeonLevel(levelId) {
    const level = dungeonLevels.find(l => l.id === levelId);
    
    if (!level) return;
    
    if (gameData.level < level.requiredLevel) {
        showNotification(`❌ Butuh level ${level.requiredLevel} untuk masuk!`, "error");
        return;
    }
    
    if (gameData.coins < level.entryFee) {
        showNotification(`❌ Koin tidak cukup! Butuh ${level.entryFee} koin`, "error");
        return;
    }
    
    if (gameData.dungeon.fishEquipment.equippedFish === null) {
        showNotification("❌ Pilih ikan dulu di menu Karakter!", "error");
        return;
    }
    
    // Bayar entry fee
    gameData.coins -= level.entryFee;
    updateUI();
    
    // Pilih boss random dari level ini
    const bossId = level.bossIds[Math.floor(Math.random() * level.bossIds.length)];
    const boss = dungeonBosses.find(b => b.id === bossId);
    
    startDungeonBattle(level, boss);
}

// Start dungeon battle
function startDungeonBattle(level, boss) {
    const fish = gameData.backpack[gameData.dungeon.fishEquipment.equippedFish];
    if (!fish) return;
    
    const weapon = dungeonWeapons.find(w => w.id === gameData.dungeon.fishEquipment.weapon);
    const armor = dungeonArmors.find(a => a.id === gameData.dungeon.fishEquipment.armor);
    
    const playerMaxHP = Math.floor(fish.price / 10);
    const playerAttack = weapon ? weapon.attack : 0;
    const playerDefense = armor ? armor.defense : 0;
    
    // Set battle state
    gameData.dungeon.currentBattle = {
        levelId: level.id,
        boss: boss,
        playerHP: playerMaxHP,
        playerMaxHP: playerMaxHP,
        playerAttack: playerAttack,
        playerDefense: playerDefense,
        bossHP: boss.hp,
        bossMaxHP: boss.hp,
        bossAttack: boss.attack,
        bossDefense: boss.defense,
        playerTurn: true
    };
    
    gameData.dungeon.battleInProgress = true;
    
    showDungeonBattleModal();
}

// Show dungeon battle modal
function showDungeonBattleModal() {
    const battle = gameData.dungeon.currentBattle;
    if (!battle) return;
    
    const battleModal = document.getElementById('battle-modal');
    const battleContent = document.getElementById('battle-content');
    
    if (!battleModal || !battleContent) return;
    
    const fish = gameData.backpack[gameData.dungeon.fishEquipment.equippedFish];
    
    battleContent.innerHTML = `
        <div style="padding: 20px;">
            <h2 style="color: #FFD700; text-align: center; margin-bottom: 30px;">⚔️ DUNGEON BATTLE ⚔️</h2>
            
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-bottom: 30px;">
                <!-- Player -->
                <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 4rem;">${fish.emoji}</div>
                    <h3 style="color: #00ffff;">${fish.name}</h3>
                    <div style="margin: 15px 0;">
                        <div style="color: #4CAF50;">❤️ HP: <span id="battle-player-hp">${battle.playerHP}</span>/${battle.playerMaxHP}</div>
                        <div style="width: 100%; height: 10px; background: rgba(255,255,255,0.2); border-radius: 5px; margin-top: 5px;">
                            <div id="player-hp-bar" style="width: ${(battle.playerHP/battle.playerMaxHP)*100}%; height: 100%; background: #4CAF50; border-radius: 5px;"></div>
                        </div>
                    </div>
                    <div style="color: #ff6b6b;">⚔️ Attack: ${battle.playerAttack}</div>
                    <div style="color: #4CAF50;">🛡️ Defense: ${battle.playerDefense}</div>
                </div>
                
                <!-- VS -->
                <div style="display: flex; align-items: center; font-size: 3rem; color: #FFD700;">VS</div>
                
                <!-- Boss -->
                <div style="flex: 1; background: rgba(255,0,0,0.1); padding: 20px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 4rem;">${battle.boss.emoji}</div>
                    <h3 style="color: #FF6B6B;">${battle.boss.name}</h3>
                    <div style="margin: 15px 0;">
                        <div style="color: #4CAF50;">❤️ HP: <span id="battle-boss-hp">${battle.bossHP}</span>/${battle.bossMaxHP}</div>
                        <div style="width: 100%; height: 10px; background: rgba(255,255,255,0.2); border-radius: 5px; margin-top: 5px;">
                            <div id="boss-hp-bar" style="width: ${(battle.bossHP/battle.bossMaxHP)*100}%; height: 100%; background: #ff6b6b; border-radius: 5px;"></div>
                        </div>
                    </div>
                    <div style="color: #ff6b6b;">⚔️ Attack: ${battle.bossAttack}</div>
                    <div style="color: #4CAF50;">🛡️ Defense: ${battle.bossDefense}</div>
                </div>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
                <p id="turn-indicator" style="color: #ccc;">Giliran: <span style="color: ${battle.playerTurn ? '#00ffff' : '#FF6B6B'};">${battle.playerTurn ? 'Giliranmu' : 'Giliran Boss'}</span></p>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button id="attack-btn" onclick="playerAttack()" ${!battle.playerTurn ? 'disabled' : ''}
                        style="padding: 15px 30px; background: ${battle.playerTurn ? '#ff6b6b' : '#666'}; border: none; border-radius: 25px; color: white; font-weight: bold; font-size: 1.2rem; cursor: ${battle.playerTurn ? 'pointer' : 'not-allowed'};">
                    ⚔️ ATTACK
                </button>
                <button onclick="fleeBattle()"
                        style="padding: 15px 30px; background: #666; border: none; border-radius: 25px; color: white; font-weight: bold; font-size: 1.2rem; cursor: pointer;">
                    🏃 FLEE
                </button>
            </div>
        </div>
    `;
    
    battleModal.style.display = 'block';
}

// Player attack
function playerAttack() {
    const battle = gameData.dungeon.currentBattle;
    if (!battle || !battle.playerTurn) return;
    
    // Hitung damage (minimal 1)
    let damage = Math.max(1, battle.playerAttack - battle.bossDefense + Math.floor(Math.random() * 10));
    battle.bossHP -= damage;
    
    showNotification(`💥 Kamu menyerang! Damage: ${damage}`, "info");
    
    // Update HP display
    document.getElementById('battle-boss-hp').textContent = battle.bossHP;
    const bossHPBar = document.getElementById('boss-hp-bar');
    if (bossHPBar) {
        bossHPBar.style.width = `${(battle.bossHP/battle.bossMaxHP)*100}%`;
    }
    
    if (battle.bossHP <= 0) {
        // Player wins
        dungeonVictory();
        return;
    }
    
    // Ganti giliran ke boss
    battle.playerTurn = false;
    document.getElementById('turn-indicator').innerHTML = 'Giliran: <span style="color: #FF6B6B;">Giliran Boss</span>';
    document.getElementById('attack-btn').disabled = true;
    
    // Boss attack after 1 second
    setTimeout(() => {
        bossAttack();
    }, 1000);
}

// Boss attack
function bossAttack() {
    const battle = gameData.dungeon.currentBattle;
    if (!battle) return;
    
    // Hitung damage boss (minimal 1)
    let damage = Math.max(1, battle.bossAttack - battle.playerDefense + Math.floor(Math.random() * 15));
    battle.playerHP -= damage;
    
    showNotification(`💢 Boss menyerang! Damage: ${damage}`, "error");
    
    // Update HP display
    document.getElementById('battle-player-hp').textContent = battle.playerHP;
    const playerHPBar = document.getElementById('player-hp-bar');
    if (playerHPBar) {
        playerHPBar.style.width = `${(battle.playerHP/battle.playerMaxHP)*100}%`;
    }
    
    if (battle.playerHP <= 0) {
        // Player loses
        dungeonDefeat();
        return;
    }
    
    // Ganti giliran ke player
    battle.playerTurn = true;
    document.getElementById('turn-indicator').innerHTML = 'Giliran: <span style="color: #00ffff;">Giliranmu</span>';
    document.getElementById('attack-btn').disabled = false;
}

// Dungeon victory
function dungeonVictory() {
    const battle = gameData.dungeon.currentBattle;
    if (!battle) return;
    
    gameData.dungeon.battleInProgress = false;
    
    // Update progress
    const progress = gameData.dungeon.dungeonProgress[battle.levelId];
    if (!progress.bossesDefeated.includes(battle.boss.id)) {
        progress.bossesDefeated.push(battle.boss.id);
    }
    
    // Dapatkan reward per bos
    gameData.coins += battle.boss.reward.coins;
    gameData.exp += battle.boss.reward.exp;
    checkLevelUp();
    
    showNotification(`🎉 Mengalahkan ${battle.boss.name}! +${battle.boss.reward.coins}🪙 +${battle.boss.reward.exp} EXP`, "success");
    
    // Cek apakah sudah mengalahkan semua bos di level ini
    const level = dungeonLevels.find(l => l.id === battle.levelId);
    const allBossesDefeated = level.bossIds.every(id => progress.bossesDefeated.includes(id));
    
    if (allBossesDefeated) {
        progress.completed = true;
        
        // Dapatkan reward final (100 diamond + secret fish random)
        gameData.diamonds += 100;
        
        // Dapatkan secret fish random
        const randomSecret = secretFishPool[Math.floor(Math.random() * secretFishPool.length)];
        gameData.backpack.push({
            ...randomSecret,
            catchTime: Date.now(),
            perfectCatch: false,
            fromDungeon: true
        });
        
        showNotification(`🎉 DUNGEON SELESAI! +100 💎 + ${randomSecret.name}!`, "success");
    }
    
    // Close battle modal
    document.getElementById('battle-modal').style.display = 'none';
    gameData.dungeon.currentBattle = null;
    
    updateUI();
    loadDungeonLevels();
    loadBackpack();
}

// Dungeon defeat
function dungeonDefeat() {
    const battle = gameData.dungeon.currentBattle;
    if (!battle) return;
    
    gameData.dungeon.battleInProgress = false;
    
    showNotification(`😢 KALAH! ${battle.boss.name} terlalu kuat!`, "error");
    
    // Close battle modal
    document.getElementById('battle-modal').style.display = 'none';
    gameData.dungeon.currentBattle = null;
}

// Flee from battle
function fleeBattle() {
    gameData.dungeon.battleInProgress = false;
    gameData.dungeon.currentBattle = null;
    
    document.getElementById('battle-modal').style.display = 'none';
    showNotification("🏃 Melarikan diri dari dungeon!", "info");
}

// ==================== TOGGLE AUTO SELL ====================
function toggleAutoSell(rarity, enabled) {
    autoSellSettings[rarity] = enabled;
    showNotification(`⚡ Auto-sell ${rarity}: ${enabled ? 'ON' : 'OFF'}`, "info");
}

function updateSetting(setting, value) {
    gameData.settings[setting] = value;
}

// ==================== SAVE/LOAD ====================
function saveGame() {
    const saveData = {
        gameData: gameData,
        rods: rods,
        baits: baits,
        currentSpot: currentSpot,
        currentDepth: currentDepth,
        quests: quests,
        caughtSecretSpots: caughtSecretSpots
    };
    localStorage.setItem('fishLegSave', JSON.stringify(saveData));
}

function loadGame() {
    try {
        const save = localStorage.getItem('fishLegSave');
        if (save) {
            const saveData = JSON.parse(save);
            
            if (saveData.gameData && saveData.gameData.version !== gameData.version) {
                console.log(`⚠️ Versi berbeda! Save: ${saveData.gameData.version}, Game: ${gameData.version}`);
                showNotification("🔄 Game update ke v5! Fitur dungeon ditambahkan!", "info");
                // Merge data
                Object.assign(gameData, saveData.gameData);
                
                // Pastikan properti dungeon ada
                if (!gameData.dungeon) {
                    gameData.dungeon = {
                        unlocked: false,
                        fishEquipment: {
                            equippedFish: null,
                            weapon: null,
                            armor: null
                        },
                        dungeonProgress: {
                            1: { completed: false, bossesDefeated: [] },
                            2: { completed: false, bossesDefeated: [] },
                            3: { completed: false, bossesDefeated: [] },
                            4: { completed: false, bossesDefeated: [] }
                        },
                        currentBattle: null,
                        battleInProgress: false,
                        playerTurn: true
                    };
                }
                
                if (!gameData.specialItems) {
                    gameData.specialItems = { oneRing: false };
                }
                
                if (!gameData.depthGear.ghostShip) {
                    gameData.depthGear.ghostShip = false;
                }
                
                return;
            }
            
            Object.assign(gameData, saveData.gameData);
            Object.assign(rods, saveData.rods);
            Object.assign(baits, saveData.baits);
            Object.assign(quests, saveData.quests || quests);
            currentSpot = saveData.currentSpot || 0;
            currentDepth = saveData.currentDepth || "surface";
            caughtSecretSpots = saveData.caughtSecretSpots || {
                danau: false, kuil: false, laut: false, sungai: false, angkasa: false, brainrot: false, crypto: false, atlantis: false
            };
        }
    } catch (error) {
        console.error("Error loading save:", error);
    }
}

// ==================== EVENT LISTENERS UPDATE ====================
function setupEventListeners() {
    if (fishBtn) fishBtn.addEventListener('click', startFishing);
    if (gachaBtn) gachaBtn.addEventListener('click', spinGacha);
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.getAttribute('data-tab')));
    });
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn.getAttribute('data-category')));
    });
    
    document.querySelectorAll('.close').forEach(close => {
        close.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', (e) => {
        if (resultModal && e.target === resultModal) resultModal.style.display = 'none';
        if (gachaModal && e.target === gachaModal) gachaModal.style.display = 'none';
        if (exchangeModal && e.target === exchangeModal) exchangeModal.style.display = 'none';
        if (rankModal && e.target === rankModal) rankModal.style.display = 'none';
        if (battleModal && e.target === battleModal) battleModal.style.display = 'none';
    });
    
    if (sellBtn) sellBtn.addEventListener('click', sellSelectedFish);
    if (sellAllBtn) sellAllBtn.addEventListener('click', sellAllFish);
    
    const sortRarity = document.getElementById('sort-rarity');
    const sortPrice = document.getElementById('sort-price');
    
    if (sortRarity) sortRarity.addEventListener('click', () => sortBackpack('rarity'));
    if (sortPrice) sortPrice.addEventListener('click', () => sortBackpack('price'));
    
    const autoSellBasic = document.getElementById('auto-sell-basic');
    const autoSellLegendary = document.getElementById('auto-sell-legendary');
    
    if (autoSellBasic) autoSellBasic.addEventListener('change', (e) => toggleAutoSell('basic', e.target.checked));
    if (autoSellLegendary) autoSellLegendary.addEventListener('change', (e) => toggleAutoSell('legendary', e.target.checked));
    
    const animations = document.getElementById('animations');
    const notifications = document.getElementById('notifications');
    
    if (animations) animations.addEventListener('change', (e) => updateSetting('animations', e.target.checked));
    if (notifications) notifications.addEventListener('change', (e) => updateSetting('notifications', e.target.checked));
    
    const checkBtn = document.getElementById('check-update-btn');
    const updateBtn = document.getElementById('update-now-btn');
    const remindBtn = document.getElementById('remind-later-btn');
    const ignoreBtn = document.getElementById('ignore-update-btn');
    
    if (checkBtn) checkBtn.addEventListener('click', checkManualUpdate);
    if (updateBtn) updateBtn.addEventListener('click', performUpdate);
    if (remindBtn) remindBtn.addEventListener('click', remindLater);
    if (ignoreBtn) ignoreBtn.addEventListener('click', ignoreUpdate);
    
    // Dungeon buttons
    const dungeonBtn = document.getElementById('dungeon-menu-btn');
    const backToMainBtn = document.getElementById('back-to-main');
    const dungeonCharBtn = document.getElementById('dungeon-char-btn');
    const dungeonEquipBtn = document.getElementById('dungeon-equip-btn');
    const dungeonShopBtn = document.getElementById('dungeon-shop-btn');
    const dungeonBattleBtn = document.getElementById('dungeon-battle-btn');
    
    if (dungeonBtn) dungeonBtn.addEventListener('click', switchToDungeon);
    if (backToMainBtn) backToMainBtn.addEventListener('click', switchToMain);
    
    if (dungeonCharBtn) {
        dungeonCharBtn.addEventListener('click', () => {
            document.querySelectorAll('.dungeon-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dungeon-pane').forEach(p => p.classList.remove('active'));
            dungeonCharBtn.classList.add('active');
            document.getElementById('dungeon-character-pane').classList.add('active');
            loadDungeonCharacter();
        });
    }
    
    if (dungeonEquipBtn) {
        dungeonEquipBtn.addEventListener('click', () => {
            document.querySelectorAll('.dungeon-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dungeon-pane').forEach(p => p.classList.remove('active'));
            dungeonEquipBtn.classList.add('active');
            document.getElementById('dungeon-equip-pane').classList.add('active');
            loadDungeonShop();
            updateDungeonStats();
        });
    }
    
    if (dungeonShopBtn) {
        dungeonShopBtn.addEventListener('click', () => {
            document.querySelectorAll('.dungeon-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dungeon-pane').forEach(p => p.classList.remove('active'));
            dungeonShopBtn.classList.add('active');
            document.getElementById('dungeon-shop-pane').classList.add('active');
            loadDungeonShop();
        });
    }
    
    if (dungeonBattleBtn) {
        dungeonBattleBtn.addEventListener('click', () => {
            document.querySelectorAll('.dungeon-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dungeon-pane').forEach(p => p.classList.remove('active'));
            dungeonBattleBtn.classList.add('active');
            document.getElementById('dungeon-battle-pane').classList.add('active');
            loadDungeonLevels();
        });
    }
}

// Global functions
window.performUpdate = performUpdate;
window.remindLater = remindLater;
window.ignoreUpdate = ignoreUpdate;
window.closeUpdateNotif = closeUpdateNotif;
window.toggleFavoriteFish = toggleFavoriteFish;
window.buyMysteryBox = buyMysteryBox;
window.spinSecretGacha = spinSecretGacha;
window.selectFishForBattle = selectFishForBattle;
window.spinCryptoGacha = spinCryptoGacha;
window.switchToDungeon = switchToDungeon;
window.switchToMain = switchToMain;
window.selectDungeonFish = selectDungeonFish;
window.buyDungeonWeapon = buyDungeonWeapon;
window.buyDungeonArmor = buyDungeonArmor;
window.enterDungeonLevel = enterDungeonLevel;
window.playerAttack = playerAttack;
window.fleeBattle = fleeBattle;

// ==================== START GAME ====================
window.addEventListener('DOMContentLoaded', function() {
    try {
        initGame();
        setInterval(saveGame, 30000);
    } catch (error) {
        console.error("Game initialization error:", error);
        showNotification("❌ Game initialization failed. Please refresh.", "error");
    }
});

// ==================== CSS ANIMATIONS UPDATE ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes swim { 0% { left: -50px; } 100% { left: 100%; } }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
    @keyframes needleSweep { 0% { left: 0; } 50% { left: 180px; } 100% { left: 0; } }
    @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.8; } 100% { transform: scale(1); opacity: 1; } }
    
    .modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); }
    .modal-content { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 10% auto; padding: 25px; border-radius: 12px; width: 90%; max-width: 500px; position: relative; }
    .close { position: absolute; right: 15px; top: 10px; font-size: 24px; cursor: pointer; color: white; }
    .close:hover { color: #FFD700; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .tab.active { background: rgba(255, 255, 255, 0.2) !important; font-weight: bold !important; }
    .tab-pane { display: none; }
    .tab-pane.active { display: block; }
    .category-btn.active { background: rgba(255, 255, 255, 0.2) !important; font-weight: bold !important; }
    .depth-btn { padding: 8px 16px; border: none; border-radius: 20px; background: rgba(255, 255, 255, 0.2); color: white; cursor: pointer; margin: 5px; transition: all 0.3s; }
    .depth-btn.active { background: #FFD700; color: #000; }
    .depth-btn.locked { background: #666; cursor: not-allowed; opacity: 0.5; }
    .depth-btn:hover:not(.locked):not(.active) { background: rgba(255, 255, 255, 0.3); }
    #notification-container { position: fixed; top: 20px; right: 20px; z-index: 2000; }
`;

document.head.appendChild(style);