class PigetGame {
    constructor() {
        this.loadConfig();
        this.coins = this.config.initialCoins;
        this.level = this.config.initialLevel;
        this.currentView = 'bazar';
        
        this.applyThemeColors();
        this.setupEventListeners();
        this.updatePlayerInfo();
        this.generateContent();
    }
    
    loadConfig() {
        const savedConfig = localStorage.getItem('pigetConfig');
        if (savedConfig) {
            this.config = JSON.parse(savedConfig);
        } else {
            this.config = gameConfig;
        }
        
        const savedCoins = localStorage.getItem('pigetCoins');
        if (savedCoins) {
            this.config.initialCoins = parseInt(savedCoins);
        }
        
        const savedLevel = localStorage.getItem('pigetLevel');
        if (savedLevel) {
            this.config.initialLevel = parseInt(savedLevel);
        }
    }

    saveConfig() {
        localStorage.setItem('pigetConfig', JSON.stringify(this.config));
        localStorage.setItem('pigetCoins', this.coins);
        localStorage.setItem('pigetLevel', this.level);
    }
    
    applyThemeColors() {
        document.documentElement.style.setProperty('--color-primary', this.config.colors.primary);
        document.documentElement.style.setProperty('--color-secondary', this.config.colors.secondary);
        document.documentElement.style.setProperty('--color-background', this.config.colors.background);
        document.documentElement.style.setProperty('--color-container', this.config.colors.container);
        document.documentElement.style.setProperty('--color-text', this.config.colors.text);
    }
    
    setupEventListeners() {
        document.querySelectorAll('.sidebar nav ul li').forEach(item => {
            item.addEventListener('click', () => {
                this.changeView(item.dataset.view);
            });
        });
        
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabParent = tab.closest('.bazar-tabs, .inventory-tabs, .admin-tabs');
                const tabContents = tabParent.parentElement.querySelectorAll('.tab-content');
                
                tabParent.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                tabContents.forEach(content => content.classList.remove('active'));
                document.querySelector(`#${tab.dataset.tab}-tab`).classList.add('active');
            });
        });
        
        document.getElementById('admin-save-btn')?.addEventListener('click', () => {
            this.saveAdminSettings();
        });
    }
    
    changeView(view) {
        document.querySelectorAll('.sidebar nav ul li').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        document.querySelectorAll('.view').forEach(viewElement => {
            viewElement.classList.remove('active');
        });
        document.querySelector(`#${view}-view`).classList.add('active');
        
        this.currentView = view;
    }
    
    updatePlayerInfo() {
        document.getElementById('coins-count').textContent = this.coins;
        document.getElementById('level').textContent = this.level;
    }
    
    generateContent() {
        this.generateBazarItems();
        this.generateMarketItems();
        this.generateInventoryItems();
        this.generateStatsItems();
        this.generateProfileItems();
        this.generateSettingsOptions();
        this.generateCreditsItems();
        this.setupAdminPanel();
    }
    
    generateBazarItems() {
        const auctionItems = document.querySelector('.auction-items');
        const tradeItems = document.querySelector('.trade-items');
        
        auctionItems.innerHTML = '';
        tradeItems.innerHTML = '';
        
        for (let i = 0; i < this.config.bazarAuctionItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Auction Item Placeholder</p>
            `;
            auctionItems.appendChild(item);
        }
        
        for (let i = 0; i < this.config.bazarTradeItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Trade Item Placeholder</p>
            `;
            tradeItems.appendChild(item);
        }
    }
    
    generateMarketItems() {
        const marketItems = document.querySelector('.market-items');
        marketItems.innerHTML = '';
        
        for (let i = 0; i < this.config.marketItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Market Item Placeholder</p>
            `;
            marketItems.appendChild(item);
        }
    }
    
    generateInventoryItems() {
        const pigsInventory = document.querySelector('.pigs-inventory');
        const itemsInventory = document.querySelector('.items-inventory');
        
        pigsInventory.innerHTML = '';
        itemsInventory.innerHTML = '';
        
        for (let i = 0; i < this.config.pigsInventoryItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Pig Placeholder</p>
            `;
            pigsInventory.appendChild(item);
        }
        
        for (let i = 0; i < this.config.itemsInventoryItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Inventory Item Placeholder</p>
            `;
            itemsInventory.appendChild(item);
        }
    }
    
    generateStatsItems() {
        const statsContainer = document.querySelector('.stats-container');
        statsContainer.innerHTML = '';
        
        for (let i = 0; i < this.config.statsItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Stat Placeholder</p>
            `;
            statsContainer.appendChild(item);
        }
    }
    
    generateProfileItems() {
        const profileInfo = document.querySelector('.profile-info');
        profileInfo.innerHTML = '';
        
        for (let i = 0; i < this.config.profileItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Profile Info Placeholder</p>
            `;
            profileInfo.appendChild(item);
        }
    }
    
    generateSettingsOptions() {
        const settingsOptions = document.querySelector('.settings-options');
        settingsOptions.innerHTML = '';
        
        for (let i = 0; i < this.config.settingsOptions; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Setting Option Placeholder</p>
            `;
            settingsOptions.appendChild(item);
        }
    }
    
    generateCreditsItems() {
        const creditsContainer = document.querySelector('.credits-container');
        if (!creditsContainer) return;
        
        creditsContainer.innerHTML = '';
        
        for (let i = 0; i < this.config.creditsItems; i++) {
            const item = document.createElement('div');
            item.className = 'placeholder';
            item.innerHTML = `
                <i class="fas fa-wrench"></i>
                <p>Credits Placeholder</p>
            `;
            creditsContainer.appendChild(item);
        }
    }
    
    setupAdminPanel() {
        const colorsTab = document.getElementById('colors-tab');
        const gameTab = document.getElementById('game-tab');
        
        if (!colorsTab || !gameTab) return;
        
        colorsTab.innerHTML = `
            <div class="admin-form">
                <div class="form-group">
                    <label>Primary Color:</label>
                    <input type="color" id="primary-color" value="${this.config.colors.primary}">
                </div>
                <div class="form-group">
                    <label>Secondary Color:</label>
                    <input type="color" id="secondary-color" value="${this.config.colors.secondary}">
                </div>
                <div class="form-group">
                    <label>Background Color:</label>
                    <input type="color" id="background-color" value="${this.config.colors.background}">
                </div>
                <div class="form-group">
                    <label>Container Color:</label>
                    <input type="color" id="container-color" value="${this.config.colors.container}">
                </div>
                <div class="form-group">
                    <label>Text Color:</label>
                    <input type="color" id="text-color" value="${this.config.colors.text}">
                </div>
            </div>
        `;
        
        gameTab.innerHTML = `
            <div class="admin-form">
                <div class="form-group">
                    <label>Initial Coins:</label>
                    <input type="number" id="initial-coins" value="${this.config.initialCoins}">
                </div>
                <div class="form-group">
                    <label>Initial Level:</label>
                    <input type="number" id="initial-level" value="${this.config.initialLevel}">
                </div>
                <div class="form-group">
                    <label>Bazar Auction Items:</label>
                    <input type="number" id="bazar-auction-items" value="${this.config.bazarAuctionItems}">
                </div>
                <div class="form-group">
                    <label>Bazar Trade Items:</label>
                    <input type="number" id="bazar-trade-items" value="${this.config.bazarTradeItems}">
                </div>
                <div class="form-group">
                    <label>Market Items:</label>
                    <input type="number" id="market-items" value="${this.config.marketItems}">
                </div>
                <div class="form-group">
                    <label>Pigs Inventory Items:</label>
                    <input type="number" id="pigs-inventory-items" value="${this.config.pigsInventoryItems}">
                </div>
                <div class="form-group">
                    <label>Items Inventory Items:</label>
                    <input type="number" id="items-inventory-items" value="${this.config.itemsInventoryItems}">
                </div>
                <div class="form-group">
                    <label>Stats Items:</label>
                    <input type="number" id="stats-items" value="${this.config.statsItems}">
                </div>
                <div class="form-group">
                    <label>Profile Items:</label>
                    <input type="number" id="profile-items" value="${this.config.profileItems}">
                </div>
                <div class="form-group">
                    <label>Settings Options:</label>
                    <input type="number" id="settings-options" value="${this.config.settingsOptions}">
                </div>
                <div class="form-group">
                    <label>Credits Items:</label>
                    <input type="number" id="credits-items" value="${this.config.creditsItems}">
                </div>
            </div>
        `;
    }
    
    saveAdminSettings() {
        this.config.colors.primary = document.getElementById('primary-color').value;
        this.config.colors.secondary = document.getElementById('secondary-color').value;
        this.config.colors.background = document.getElementById('background-color').value;
        this.config.colors.container = document.getElementById('container-color').value;
        this.config.colors.text = document.getElementById('text-color').value;
        
        this.config.initialCoins = parseInt(document.getElementById('initial-coins').value);
        this.config.initialLevel = parseInt(document.getElementById('initial-level').value);
        this.config.bazarAuctionItems = parseInt(document.getElementById('bazar-auction-items').value);
        this.config.bazarTradeItems = parseInt(document.getElementById('bazar-trade-items').value);
        this.config.marketItems = parseInt(document.getElementById('market-items').value);
        this.config.pigsInventoryItems = parseInt(document.getElementById('pigs-inventory-items').value);
        this.config.itemsInventoryItems = parseInt(document.getElementById('items-inventory-items').value);
        this.config.statsItems = parseInt(document.getElementById('stats-items').value);
        this.config.profileItems = parseInt(document.getElementById('profile-items').value);
        this.config.settingsOptions = parseInt(document.getElementById('settings-options').value);
        this.config.creditsItems = parseInt(document.getElementById('credits-items').value);
        
        this.saveConfig();
        
        this.applyThemeColors();
        
        this.generateContent();
        
        alert('Settings saved successfully!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new PigetGame();
});
