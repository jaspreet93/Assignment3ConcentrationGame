	window.onload = function(){
		document.getElementById("btnStart").addEventListener("click", init);
		document.getElementById("image0").addEventListener("click", function() {swap(0);}, false);
		document.getElementById("image1").addEventListener("click", function() {swap(1);}, false);
		document.getElementById("image2").addEventListener("click", function() {swap(2);}, false);
		document.getElementById("image3").addEventListener("click", function() {swap(3);}, false);
		document.getElementById("image4").addEventListener("click", function() {swap(4);}, false);
		document.getElementById("image5").addEventListener("click", function() {swap(5);}, false);
		document.getElementById("image6").addEventListener("click", function() {swap(6);}, false);
		document.getElementById("image7").addEventListener("click", function() {swap(7);}, false);
		document.getElementById("image8").addEventListener("click", function() {swap(8);}, false);
		document.getElementById("image9").addEventListener("click", function() {swap(9);}, false);
		document.getElementById("image10").addEventListener("click",function() {swap(10);},false);
		document.getElementById("image11").addEventListener("click",function() {swap(11);},false);
	}

		var imgs = new Array();
		for (i = 0; i <= 6; i++) {
			imgs[i] = new Image();
			imgs[i].src = 'image' + i + '.jpg';
		}

	var mapping=new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6);
	var user = new Array();
	var temparray = new Array();
	var clicks = new Array(0, 0);
	var time, second, minutes, counter, id, oktoclick, finished;
	function init() {

		clearTimeout(id);
		for (i = 0; i <= 11 ;i++) {
			user[i] = 0;
		}
		time = 0;
		minutes = 0;
		second = 0;
		counter = 0;
		oktoclick = true;
		finished = 0;
		document.getElementById("btnStart").innerHTML = "";
		shuffle();
		clock();

		for (i = 0; i <= 11; i++) 
		{

			document.getElementsByName('img'+i)[0].src = "images/image0.jpg";
		}

	}

	function flipToBack() 
        {
           if ((clicks[0] == clicks[1]) && (!user[clicks[0]])) {
               document.getElementsByName('img'+clicks[0])[0].src = "images/image0.jpg";
               oktoclick = true;
		} 
		else 
		{
             if (mapping[clicks[0]] != mapping[clicks[1]]) {
				if (user[clicks[0]] == 0) 
				{

				document.getElementsByName('img'+clicks[0])[0].src = "images/image0.jpg";
			    }
			if (user[clicks[1]] == 0) 
			   {

				document.getElementsByName('img'+clicks[1])[0].src = "images/image0.jpg";
			   }
			}
			if (mapping[clicks[0]] == mapping[clicks[1]]) {
			if (user[clicks[0]] == 0&&user[clicks[1]] == 0) { finished++; }
			user[clicks[0]] = 1;
			user[clicks[1]] = 1;
			}
			if (finished >= 6) {
				alert('You did it in '+document.getElementById("btnStart").innerHTML+' !');
				init();
			} else {
				oktoclick = true;
			}
		}
	}

	function clock() {
		minutes = Math.floor(time/60);
		second = (time-(minutes*60))+'';
		if(second.length == 1) {second = "0"+second};
		time++;
		document.getElementById("btnStart").innerHTML = minutes+":"+second;
		id = setTimeout('clock()', 1000);
	}

	function swap(imageId) {

		if (oktoclick) {
		oktoclick = false; 
		document.getElementsByName('img'+imageId)[0].src = 'images/image'+mapping[imageId]+'.jpg';
		if (counter == 0) {
		counter++;
		clicks[0] = imageId;
		oktoclick = true;
		} 
		else
		{
             clicks[1] = imageId;
		     counter = 0;
             setTimeout('flipToBack()', 600);

		}
	   }
	}

	function shuffle() {
		for (z = 0; z < 1; z++) {
			for (x = 0; x <= 11; x++) {
				temparray[0] = Math.floor(Math.random()*12);
				temparray[1] = mapping[temparray[0]];
				temparray[2] = mapping[x];
				mapping[x] = temparray[1];
				mapping[temparray[0]] = temparray[2];
			 }
	   }
	}

