var canvas = new fabric.Canvas('myCanvas');
 player_x = 10;
  player_y = 10;
   block_image_width = 30;
    block_image_height = 30;
     var player_object= "";
      var block_image_object= "";

      function player_update() { 
          fabric.Image.fromURL("not_player.png", function(Img) {
               player_object = Img; player_object.scaleToWidth(150);
                player_object.scaleToHeight(140);
         player_object.set({ top:player_y, left:player_x });
          canvas.add(player_object);
         }); 
    }

    function new_image(get_image) { 
        fabric.Image.fromURL(get_image, function(Img) {
             block_image_object = Img;
              block_image_object.scaleToWidth(block_image_width);
               block_image_object.scaleToHeight(block_image_height);
                block_image_object.set({ top:player_y, left:player_x });
                 canvas.add(block_image_object); });
                 }

                 window.addEventListener("keydown",mkd);

                 function mkd(e){
                var ASCCI = e.keyCode
                console.log(ASCCI)
                if (e.shiftKey == true && ASCCI == "80"){
                    console.log("P AND SHIFT ARE PRESSED TO GEATSHER");
                    block_image_width = block_image_width+10;
                    block_image_height = block_image_height+10;
                    document.getElementById("current_width").innerHTML = block_image_width;
                    document.getElementById("current_height").innerHTML = block_image_height;
                                }
                                if (e.shiftKey == true && ASCCI == "77"){
                                    console.log("P AND SHIFT ARE PRESSED TO GEATSHER")
                                    block_image_width = block_image_width-10;
                                    block_image_height = block_image_height-10;
                                    document.getElementById("current_width").innerHTML = block_image_width;
                                    document.getElementById("current_height").innerHTML = block_image_height;
                                                }
                                                

                                                if (ASCCI == "37"){
                                                    left()
                                                    console.log("left");
                                                }
                                                
                                                if (ASCCI == "38"){
                                                    up()
                                                    console.log("up");
                                                }

                                                if (ASCCI == "39"){
                                                    right()
                                                    console.log("right");
                                                }

                                                if (ASCCI == "40"){
                                                    down()
                                                    console.log("down");
                                                }

                                                if (ASCCI == "76"){
                                                    new_image("light_green.png");
                                                    console.log("l is pressed");
                                                }

                                                if (ASCCI == "87"){
                                                    new_image("wall.jpg");
                                                    console.log("w is pressed");
                                                }

                                                if (ASCCI == "68"){
                                                    new_image("dark_green.png");
                                                    console.log("d is pressed");
                                                }

                                                if (ASCCI == "78"){
                                                    new_image("neatherrack.jpg");
                                                    console.log("n is pressed");
                                                }
                 }

                 function up(){
                     if (player_y >= 0){
                         player_y=player_y - block_image_height;
                         console.log("block_image_height="+block_image_height);
                        console.log("when up arrow is pressed x="+player_x+" and y="+player_y);
                        canvas.remove(player_object);
                        player_update();
                     }
                    
                 }

                 function down(){
                    if (player_y <= 500){
                        player_y=player_y + block_image_height;
                        console.log("block_image_height="+block_image_height);
                       console.log("when down arrow is pressed x="+player_x+" and y="+player_y);
                       canvas.remove(player_object);
                       player_update();
                    }
                }

                function right(){
                    if (player_x <= 800){
                        player_x=player_x + block_image_width;
                        console.log("block_image_width="+block_image_width);
                       console.log("when right arrow is pressed x="+player_x+" and y="+player_y);
                       canvas.remove(player_object);
                       player_update();
                    }
                }

                function left(){
                    if (player_x >= 0){
                        player_x=player_x - block_image_width;
                        console.log("block_image_width="+block_image_width);
                       console.log("when left arrow is pressed x="+player_x+" and y="+player_y);
                       canvas.remove(player_object);
                       player_update()
                    }
                }