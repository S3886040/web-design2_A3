class MapPoint {
  #element
  #dialog
  #closeButton
  #progressBar
  #clickChecker

  constructor(element, dialog, closeButton, progressBar, clickChecker) {
    this.element = document.querySelector(element);
    this.dialog = document.querySelector(dialog);
    this.closeButton = document.querySelector(closeButton);
    this.progressBar = progressBar;
    this.clickChecker = clickChecker;
  }

  // Will evaluate times clicked and set progress bar percentage
  setProgressBar() {
    let count = 0;
    let total = 5;
    for (const property in this.clickChecker) {
        
      if (this.clickChecker[property] == true) {
        count += 1;
      }
    }
    this.progressBar.value = count / total * 100;

    if(this.progressBar.value == 100) {
      this.progressBar.classList.add("animate__animated","animate__tada");
    }
  }

  // Will set coressponding click checker value to true when clicked
  setAsClicked() {
    for (const property in this.clickChecker) {
      if (this.element.className.includes(property)) {
        this.clickChecker[property] = true;
      }
    }
  }

  // Eventlistener function for show and close of dialog
  addEventListener() {
    this.element.addEventListener("click", () => {
      this.dialog.show();
      this.setAsClicked();
      this.setProgressBar();
    });
    this.closeButton.addEventListener("click", () => {
      this.dialog.hide();
    });
  }
}
