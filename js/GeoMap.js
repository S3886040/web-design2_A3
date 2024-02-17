class GeoMap {
    #progressBar
    #rossIceShelf
    #dronningMaudLand
    #southPole
    #ellsworthLand
    #princessElizabethLand

    constructor() {
        this.progressBar = document.querySelector('sl-progress-bar');

        const clickChecker = {
            'ross_ice_shelf': false,
            'dronning_maud_land': false,
            'south_pole': false,
            'ellsworth_land': false,
            'princess_elizabeth_land': false
        }

        this.rossIceShelf = new MapPoint('.ross_ice_shelf', '.dialog-ross_ice_shelf', '.close-ross_ice_shelf', this.progressBar, clickChecker);
        this.rossIceShelf.addEventListener();

        this.dronningMaudLand = new MapPoint('.dronning_maud_land', '.dialog-dronning_maud_land', '.close-dronning_maud_land', this.progressBar, clickChecker);
        this.dronningMaudLand.addEventListener();

        this.southPole = new MapPoint('.south_pole', '.dialog-south_pole', '.close-south_pole', this.progressBar, clickChecker);
        this.southPole.addEventListener();

        this.ellsworthLand = new MapPoint('.ellsworth_land', '.dialog-ellsworth_land', '.close-ellsworth_land', this.progressBar, clickChecker);
        this.ellsworthLand.addEventListener();

        this.princessElizabethLand = new MapPoint('.princess_elizabeth_land', '.dialog-princess_elizabeth_land', '.close-princess_elizabeth_land', this.progressBar, clickChecker);
        this.princessElizabethLand.addEventListener();

        
    }
}