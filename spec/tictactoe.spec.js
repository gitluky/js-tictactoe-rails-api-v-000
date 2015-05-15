'use strict';
describe('javascript', function() {
  beforeEach(function(){
    turn = 0;
  })

  describe( "#attachListeners", function() {
    it("should attach event listeners which call your turn function when someone clicks on a square", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
      attachListeners();
      var selector = '[data-x="0"][data-y="0"]';
      spyOn(window, "doTurn");
      $(selector).click();
      expect(window.doTurn).toHaveBeenCalled();
    });     
  });

  describe( "#doTurn", function() {
    // it("should create an array of 9 empty values", function() {
    it("should increment turn and call on `checkWinner()`, `updateState()`", function() {
      spyOn(window, "checkWinner");
      spyOn(window, "updateState");
      doTurn();
      expect(turn).toEqual(1);
      expect(window.updateState).toHaveBeenCalled;
      expect(window.checkWinner).toHaveBeenCalled;
    });     
  });

  describe( "#player", function() {
    it("should return the mark of the current player", function() {
      expect(player()).toEqual("X");
    });     
    it("should return the mark of the current player", function() {
      turn = 1;
      expect(player()).toEqual("O");
    });
  });

  describe( "#updateState", function() {
    it("adds the return value of `player()` to the clicked `td` on the board", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
      attachListeners();
      var selector = '[data-x="0"][data-y="0"]';
      $(selector).click();
      expect($(selector).html()).toEqual("X");
    });  
    it("calls on `player()`", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
      attachListeners();
      spyOn(window, "player");
      var selector = '[data-x="1"][data-y="0"]';
      $(selector).click();
      expect(window.player).toHaveBeenCalled;
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>');
      attachListeners()
      spyOn(window, "updateState");
      var selector = '[data-x="0"][data-y="0"]'
      $(selector).click()
      var selector = '[data-x="0"][data-y="1"]'
      $(selector).click()
      expect(checkWinner()).toEqual(false)   
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (vertical)", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>')
      attachListeners()
      spyOn(window, "message");
      // x goes
      var selector = '[data-x="0"][data-y="0"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="1"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="0"][data-y="1"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="2"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="0"][data-y="2"]'
      $(selector).click()
      expect(window.message).toHaveBeenCalledWith("Player X Won!")
    });     
  });

  describe( "#checkWinner", function() {
    it("should tell me if there is a winning combo on the board for the current player (diagonal)", function() {
      setFixtures('<body><table border="1" cellpadding="40"><tr><td data-x="0", data-y="0"></td><td data-x="1", data-y="0"></td><td data-x="2", data-y="0"></td></tr><tr><td data-x="0", data-y="1"></td><td data-x="1", data-y="1"></td><td data-x="2", data-y="1"></td></tr><tr><td data-x="0", data-y="2"></td><td data-x="1", data-y="2"></td><td data-x="2", data-y="2"></td></tr></table></body>')
      attachListeners()
      spyOn(window, "message");
      // x goes
      var selector = '[data-x="0"][data-y="0"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="1"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="1"][data-y="1"]'
      $(selector).click()
      // y goes
      var selector = '[data-x="2"][data-y="0"]'
      $(selector).click()
      // x goes
      var selector = '[data-x="2"][data-y="2"]'
      $(selector).click()
      expect(window.message).toHaveBeenCalledWith("Player X Won!")    });     
  });

});