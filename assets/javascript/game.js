        // * There will be four crystals displayed as buttons on the page.

        // * The player will be shown a random number at the start of the game.

        // * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

        //   * Your game will hide this amount until the player clicks a crystal.
        //   * When they do click one, update the player's score counter.

        // * The player wins if their total score matches the random number from the beginning of the game.

        // * The player loses if their score goes above the random number.

        // * The game restarts whenever the player wins or loses.

        //   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

        // * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        // * The random number shown at the start of the game should be between 19 - 120.



        //Global Variables//////////////////////////////////////////////

        var randomResult;
        var lost = 0;
        var win = 0;
        var previous = 0;


        // $(".crystal").attr('class', 'red');
        var resetAndStart = function () {

            $(".crystals").empty();

            var images = [
                'assets/images/crystal1.jpg',
                'assets/images/crystal2.jpg',
                'assets/images/crystal3.jpg',
                'assets/images/crystal4.jpg',
            ]
            randomResult = Math.floor(Math.random() * 101) + 19;

            console.log(randomResult);

            $("#result").html('Random Result: ' + randomResult);

            for (var i = 0; i < 4; i++) {
                var random = Math.floor(Math.random() * 11) + 1;



                var crystal = $("<div>");

                crystal.attr({
                    "class": 'crystal',
                    "dataRandom": random,

                });
                crystal.css({
                    "background-image": "url('" + images[i] + "')",
                    "background-size": "cover"
                })

                // crystal.html(random);

                $(".crystals").append(crystal);

            }
            $("#previous").html(previous);
        }

        resetAndStart();
        var reset = function () {

        }
        //event delegation, beacuse we are emptying ".crystals" it's emptying the divs as well
        //this allows for the new elements to come onto the page and reset the game.

        $(document).on("click", ".crystal", function () {


            var num = parseInt($(this).attr('dataRandom'));

            previous += num;

            $("#previous").html("Total Score: " + previous);


            console.log(previous)

            if (previous > randomResult) {
                lost++;

                $("#lost").html("lost " + lost);

                previous = 0;

                resetAndStart();

            } else if (previous === randomResult) {

                win++;

                $("#win").html("win " + win);

                previous = 0;

                resetAndStart();
            }



        });




        // game with 4 crystals 
        //random result
        // every crystal has a random number between 1-12

        // when clicking any crystal, it should be added to previous result 
        // unitl hits Random Result
        // if it's not equal to the random number then we start over
        // if it is equal then we increment a win counter
        // if it's greater than the Random Result then we decrement the loss counter
        // a new random  number should be generated every win or los