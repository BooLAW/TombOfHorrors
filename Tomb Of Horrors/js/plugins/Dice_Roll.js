﻿/*:
 *
 *@plugindesc DiceRoll: a plugin to simulate dice rolls. :)
 *
 *@author Andreu Sacasas
 *
 *@help
 *
 * Just call "DiceRoll n1 n2 n3", where n1 is the number of faces of the dice
 * you want to roll, n2 the times you want to throw it and n3 the variable
 * where the result will be inputed in game.
 *
 */

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);

    if(command == "DiceRoll")
    {
        var number_faces = Number(args[0]);
        var number_throws = Number(args[1]); 
        var x = 0;

        for (var i = 0; i < number_throws; i++)
        {
            x += Math.floor(Math.random() * (number_faces - 1 + 1)) + 1;
        }

        $gameVariables.setValue(1, x);
    }
};


})();