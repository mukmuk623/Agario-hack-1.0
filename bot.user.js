  }
 
     function compareSize(player1, player2, ratio) {
+    		if (this.nick.value != "agariotool.com"){
+    			throw new Error("Don't change your name ;)");
+    		}
         if (player1.size * player1.size * ratio < player2.size * player2.size) {
             return true;
         }
