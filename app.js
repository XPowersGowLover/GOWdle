// ==========================================
// GEARSDLE - ULTIMATE MASSIVE DATA REGISTRY
// ==========================================

const gameData = {
    classic: [
        // --- COG / Humans: Delta & Main Cast ---
        { name: "Marcus Fenix", faction: "COG", species: "Human", appearance: "Gears 1", status: "Alive" },
        { name: "Dominic Santiago", faction: "COG", species: "Human", appearance: "Gears 1", status: "Deceased" },
        { name: "Damon Baird", faction: "COG", species: "Human", appearance: "Gears 1", status: "Alive" },
        { name: "Augustus Cole", faction: "COG", species: "Human", appearance: "Gears 1", status: "Alive" },
        { name: "Anya Stroud", faction: "COG", species: "Human", appearance: "Gears 1", status: "Deceased" },
        { name: "Victor Hoffman", faction: "COG", species: "Human", appearance: "Gears 1", status: "Alive" },
        { name: "Samantha Byrne", faction: "COG", species: "Human", appearance: "Gears 3", status: "Alive" },
        { name: "Jace Stratton", faction: "COG", species: "Human", appearance: "Gears 3", status: "Alive" },

        // --- The Carmine Family Tree ---
        { name: "Anthony Carmine", faction: "COG", species: "Human", appearance: "Gears 1", status: "Deceased" },
        { name: "Benjamin Carmine", faction: "COG", species: "Human", appearance: "Gears 2", status: "Deceased" },
        { name: "Clayton Carmine", faction: "COG", species: "Human", appearance: "Gears 3", status: "Alive" },
        { name: "Gary Carmine", faction: "Stranded", species: "Human", appearance: "Gears 4", status: "Deceased" },
        { name: "Lizzie Carmine", faction: "COG", species: "Human", appearance: "Gears 5", status: "Deceased" },

        // --- Veterans & Extended Universe ---
        { name: "Minh Young Kim", faction: "COG", species: "Human", appearance: "Gears 1", status: "Deceased" },
        { name: "Tai Kaliso", faction: "COG", species: "Human", appearance: "Gears 2", status: "Deceased" },
        { name: "Dizzy Wallin", faction: "COG", species: "Human", appearance: "Gears 2", status: "Alive" },
        { name: "Adam Fenix", faction: "COG", species: "Human", appearance: "Gears 3", status: "Deceased" },
        { name: "Richard Prescott", faction: "COG", species: "Human", appearance: "Gears 2", status: "Deceased" },
        { name: "Michael Barrick", faction: "COG", species: "Human", appearance: "Gears 3", status: "Deceased" },
        { name: "Bernadette Mataki", faction: "COG", species: "Human", appearance: "Gears 3", status: "Alive" },
        { name: "Garron Paduk", faction: "UIR", species: "Human", appearance: "Judgment", status: "Alive" },
        { name: "Ezra Loomis", faction: "COG", species: "Human", appearance: "Judgment", status: "Deceased" },
        { name: "Lucas Reyes", faction: "COG", species: "Human", appearance: "E-Day", status: "Alive" },
        { name: "Alicia Valera", faction: "COG", species: "Human", appearance: "Gears 3", status: "Deceased" },
        { name: "Gabriel Diaz", faction: "COG", species: "Human", appearance: "Tactics", status: "Deceased" },
        { name: "Sid Redburn", faction: "COG", species: "Human", appearance: "Tactics", status: "Alive" },

        // --- Modern Outcasts & Swarm Era COG ---
        { name: "Kait Diaz", faction: "COG", species: "Human", appearance: "Gears 4", status: "Alive" },
        { name: "JD Fenix", faction: "COG", species: "Human", appearance: "Gears 4", status: "Alive" },
        { name: "Del Walker", faction: "COG", species: "Human", appearance: "Gears 4", status: "Alive" },
        { name: "Fahz Chutani", faction: "COG", species: "Human", appearance: "Gears 5", status: "Alive" },
        { name: "Oscar Diaz", faction: "Stranded", species: "Human", appearance: "Gears 4", status: "Deceased" },
        { name: "Reyna Diaz", faction: "Stranded", species: "Human", appearance: "Gears 4", status: "Deceased" },

        // --- Hivebusters ---
        { name: "Jeremiah Keegan", faction: "COG", species: "Human", appearance: "Gears 5", status: "Alive" },
        { name: "Lahni Kaliso", faction: "COG", species: "Human", appearance: "Gears 5", status: "Alive" },
        { name: "Leslie Macallister", faction: "COG", species: "Human", appearance: "Gears 5", status: "Alive" },

        // --- Locust Horde Leaders & Elite ---
        { name: "General RAAM", faction: "Locust", species: "Locust", appearance: "Gears 1", status: "Deceased" },
        { name: "Skorge", faction: "Locust", species: "Locust", appearance: "Gears 2", status: "Deceased" },
        { name: "Queen Myrrah", faction: "Locust", species: "Human-Hybrid", appearance: "Gears 1", status: "Deceased" },
        { name: "Ukkon", faction: "Locust", species: "Locust", appearance: "Tactics", status: "Deceased" },
        { name: "General Karn", faction: "Locust", species: "Locust", appearance: "Judgment", status: "Deceased" },
        { name: "Theron Guard", faction: "Locust", species: "Locust", appearance: "Gears 1", status: "Alive" },
        { name: "Locust Drone", faction: "Locust", species: "Locust", appearance: "Gears 1", status: "Alive" },
        { name: "Berserker", faction: "Locust", species: "Locust", appearance: "Gears 1", status: "Deceased" },
        { name: "High Priest Sraak", faction: "Locust", species: "Locust", appearance: "Rise of RAAM", status: "Deceased" },

        // --- Swarm Threats ---
        { name: "The Speaker", faction: "Swarm", species: "Swarm", appearance: "Gears 4", status: "Deceased" },
        { name: "Swarm Queen Reyna", faction: "Swarm", species: "Swarm", appearance: "Gears 5", status: "Alive" },
        { name: "Swarm Drone", faction: "Swarm", species: "Swarm", appearance: "Gears 4", status: "Alive" },
        { name: "Scion", faction: "Swarm", species: "Swarm", appearance: "Gears 4", status: "Alive" }
    ],
    quote: [
        { text: "Look at all that juice!", answer: "Augustus Cole" },
        { text: "Welcome to the Delta Squad, son.", answer: "Marcus Fenix" },
        { text: "Suck it, scaleface!", answer: "Damon Baird" },
        { text: "Never thought it would end like this, huh Maria?", answer: "Dominic Santiago" },
        { text: "Control, this is Delta! We've got structural issues!", answer: "Marcus Fenix" },
        { text: "Scratch one grub!", answer: "Marcus Fenix" },
        { text: "Eat dirt, motherf***er!", answer: "Dizzy Wallin" },
        { text: "Hey! Keep your head down! My brother died out here!", answer: "Benjamin Carmine" },
        { text: "They're sinking cities!", answer: "Victor Hoffman" },
        { text: "Serve the Queen!", answer: "Theron Guard" },
        { text: "The humans are a disease... we are the cure.", answer: "Queen Myrrah" },
        { text: "Grubly-wublies! Come out and get some!", answer: "Damon Baird" },
        { text: "Get back in your holes!", answer: "Anya Stroud" },
        { text: "Suck on this, you giant oversized worm!", answer: "Augustus Cole" },
        { text: "If I die, Baird, you can have my collection of magazines.", answer: "Augustus Cole" },
        { text: "That's from Delta Squad, b***h!", answer: "Samantha Byrne" },
        { text: "Do you know who I am? I'm Richard Prescott!", answer: "Richard Prescott" },
        { text: "Everything I did, I did to save humanity.", answer: "Adam Fenix" },
        { text: "I've got you covered like a fat kid on a cupcake!", answer: "Dizzy Wallin" },
        { text: "For Sera!", answer: "Minh Young Kim" }
    ],
    weapon: [
        // --- Assault Rifles & Primary ---
        { name: "Lancer", type: "Rifle", ammo: "Bullet", execution: "Chainsaw" },
        { name: "Retro Lancer", type: "Rifle", ammo: "Bullet", execution: "Bayonet Charge" },
        { name: "Custom Lancer GL", type: "Rifle", ammo: "Bullet / Micro-Nuke", execution: "Airstrike" },
        { name: "Hammerburst", type: "Rifle", ammo: "Bullet", execution: "Curb Stomp" },
        { name: "Hammerburst II", type: "Rifle", ammo: "Burst Bullet", execution: "Violent Beatdown" },
        { name: "Enforcer", type: "SMG", ammo: "Bullet", execution: "Pummel" },
        { name: "Claw", type: "Rifle", ammo: "LMG Spike", execution: "Impale" },

        // --- Close Quarter Shotguns ---
        { name: "Gnasher", type: "Shotgun", ammo: "Shell", execution: "Bludgeon" },
        { name: "Sawed-Off Shotgun", type: "Shotgun", ammo: "Heavy Shell", execution: "Decapitation" },
        { name: "Overkill", type: "Shotgun", ammo: "Burst Shell", execution: "Disintegrate" },

        // --- Sidearms ---
        { name: "Snub Pistol", type: "Pistol", ammo: "Bullet", execution: "Pistol Whip" },
        { name: "Boltok Pistol", type: "Pistol", ammo: "Heavy Bullet", execution: "Executioner" },
        { name: "Talon Autopistol", type: "Pistol", ammo: "Auto Bullet", execution: "Face Smash" },

        // --- Long Range & Heavy Launchers ---
        { name: "Longshot", type: "Sniper", ammo: "Precision", execution: "Headshot" },
        { name: "Markza MK1", type: "Rifle", ammo: "Semi-Auto Precision", execution: "Stock Strike" },
        { name: "Breechshot", type: "Sniper", ammo: "Heavy Blade", execution: "Cleave" },
        { name: "Torque Bow", type: "Heavy", ammo: "Explosive Arrow", execution: "Impale" },
        { name: "Boomshot", type: "Heavy", ammo: "Rocket", execution: "Smash" },
        { name: "Dropshot", type: "Heavy", ammo: "Drill Mine", execution: "Head Drill" },
        { name: "Buzzkill", type: "Heavy", ammo: "Buzzsaw Blade", execution: "Mince" },
        
        // --- Heavy Heavy Placement & Ordnance ---
        { name: "Hammer of Dawn", type: "Heavy", ammo: "Orbital Laser", execution: "Vaporize" },
        { name: "Mulcher", type: "Heavy", ammo: "Chaingun", execution: "Shred" },
        { name: "Cryo Cannon", type: "Heavy", ammo: "Liquid Nitrogen", execution: "Shatter" },
        { name: "Bolo Grenade", type: "Grenade", ammo: "Explosive", execution: "Tag" },
