$("document").ready(function() {
  stateManager = new Presentationsate();

  document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowLeft") {
      console.log("previous");
      stateManager.previousState();
    } else if (e.key == "ArrowRight" || e.key == "Enter") {
      console.log("next");
      stateManager.nextState();
    }
  });
});

class Presentationsate {
  constructor() {
    this.currentState = 0;
  }

  runAnimation(element, give_class) {
    $(element).addClass(give_class);
    this.currentState++;
  }
  removeAnimations() {
    $("#one").removeClass("none");
    $("#two").removeClass("forwards");
    $("#three").removeClass("backwards");
    $("#four").removeClass("both");
  }
  returnOnanimation() {
    this.removeAnimations();
    this.currentState = 8;
    this.previousState();
  }

  nextState() {
    switch (this.currentState) {
      case 0:
        this.next("#main_title", "#first");
        break;
      case 1:
        this.next("#first", "#second");
        break;
      case 2:
        this.next("#second", "#third");
        break;
      case 3:
        this.next("#third", "#fourth");
        break;
      case 4:
        this.next("#fourth", "#fifth");
        break;
      case 5:
        this.next("#fifth", "#sixth");
        break;
      case 6:
        this.next("#sixth", "#seventh");
        break;
      case 7:
        this.next("#seventh", "#eighth");
        break;
      case 8:
        //correr o none
        this.runAnimation("#one", "none");
        break;
      case 9:
        //correr o forwards
        this.runAnimation("#two", "forwards");
        break;
      case 10:
        //correr o backwards
        this.runAnimation("#three", "backwards");
        break;
      case 11:
        //correr o both
        this.runAnimation("#four", "both");
        break;
      case 12:
        //proxima pagina
        this.removeAnimations();
        this.next("#eighth", "#nineth");
        break;
      case 13:
        this.next("#nineth", "#tenth");
        break;
      case 14:
        this.next("#tenth", "#eleventh");
        break;
      case 15:
        this.next("#eleventh", "#questions");
        break;
      default:
      // code block
    }
  }

  previousState() {
    switch (this.currentState) {
      case 1:
        this.previous("#first", "#main_title");
        break;
      case 2:
        this.previous("#second", "#first");
        break;
      case 3:
        this.previous("#third", "#second");
        break;
      case 4:
        this.previous("#fourth", "#third");
        break;
      case 5:
        this.previous("#fifth", "#fourth");
        break;
      case 6:
        this.previous("#sixth", "#fifth");
        break;
      case 7:
        this.previous("#seventh", "#sixth");
        break;
      case 8:
        this.previous("#eighth", "#seventh");
        break;
      case 9:
        this.returnOnanimation();
        break;
      case 10:
        this.returnOnanimation();
        break;
      case 11:
        this.returnOnanimation();
        break;
      case 12:
        this.returnOnanimation();
        break;
      case 13:
        this.previous("#nineth", "#eighth");
        this.currentState = 9; //after time out sets to 8
        break;
      case 14:
        this.previous("#tenth", "#nineth");
        break;
      case 15:
        this.previous("#eleventh", "#tenth");
        break;
      case 16:
        this.previous("#questions", "#eleventh");
        break;
      default:
      // code block
    }
  }

  removeAnimation(div) {
    $(div).removeClass("fadeup");
    $(div).removeClass("smoky-reverse");
    $(div).removeClass("smoky");
    $(div).removeClass("fadeup-reverse");
  }

  next(leaving, entering) {
    this.removeAnimation(leaving);
    $(leaving).addClass("smoky");

    setTimeout(() => {
      $(leaving).hide();
      this.currentState++;
    }, 1000);

    this.removeAnimation(entering);
    $(entering).addClass("fadeup");
    $(entering).show();
  }

  previous(leaving, entering) {
    this.removeAnimation(leaving);
    $(leaving).addClass("fadeup-reverse");

    setTimeout(() => {
      $(leaving).hide();
      this.currentState--;
    }, 1000);

    this.removeAnimation(entering);
    $(entering).addClass("smoky-reverse");
    $(entering).show();
  }
}
