function rendergraphics_full(arr)
{
	var body = document.getElementsByTagName("body")[0];

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
	for(i=0; i<arr.length; i++)
	{
		var row = document.createElement("tr");
		for(j=0; j<arr[i].length; j++)
		{
			 var cell = document.createElement("td"); 
			 cell.setAttribute("id", i.toString()+","+j.toString());
			 var img = document.createElement('img');

    		if(arr[i][j].charAt(0)=='R')
    		{
    			if (i>0 && i<arr.length-1 && j>0 && j<arr[0].length-1 && arr[i-1][j]=='R' && arr[i+1][j]=='R' && arr[i][j-1]!='R' && arr[i][j+1]!='R')
    					img.src = "images/roadNS.jpg";
    			else if(i>0 && i<arr.length-1 && j>0 && j<arr[0].length-1 && arr[i-1][j]!='R' && arr[i+1][j]!='R' && arr[i][j-1]=='R' && arr[i][j+1]=='R')
    					img.src = "images/roadEW.jpg";
				else    		
    					img.src = "images/roadC.png";
			}
			else if(arr[i][j].charAt(0)=='P')
            {
                img.src = "images/house.jpg";
            }           
            else if(arr[i][j].charAt(0)=='G')
            {
                if( Math.round( Math.random()* 10) >= 8  ) 
		{
			img.src = "images/tree2.jpg";
		//	alert("Hi!")
		}

		else {
			img.src = "images/Grass.jpg";
		}
            }
            else if(arr[i][j].charAt(0)=='S')
            {
                img.src = "images/user.jpg";
            }
            else if(arr[i][j].charAt(0)=='D')
            {
                img.src = "images/icecream.jpg";
            }
            else if(arr[i][j].charAt(0) == 'T')
            {
                img.src = "images/roadC.png";
            }
            else if(arr[i][j].charAt(0) == 'C')
            {
                img.src = "images/cop.jpg";
            }
            else if(arr[i][j].charAt(0) == 'E')
            {
                img.src = "images/finish.jpg";
            }
            cell.appendChild(img);

             row.appendChild(cell);
		}

		tblBody.appendChild(row);

       
    


    }

     tbl.appendChild(tblBody);
        // put <table> in the <body>
    body.appendChild(tbl);
    tbl.setAttribute("border", "0");
}

function rendergraphics_partial(arr, i, j, oldi, oldj)
{
    //alert("here");
    var cell = document.getElementById(i+","+j);
    //alert(cell);
    //alert("sir");
    if (arr[i][j].charAt(0) == 'S')
    {
        //alert("here");
        cell.getElementsByTagName('img')[0].src = "images/user.jpg";
        
    }

    var cell = document.getElementById(oldi+","+oldj);
    //alert(cell);
    //alert("sir");
    if (arr[oldi][oldj].charAt(0) == 'T')
    {
        i = oldi
        j = oldj
        var img = cell.getElementsByTagName('img')[0]; 
        //alert("here")l
        var dir = [false,false,false,false];
        if( i>0 && (arr[i-1][j].charAt(0)=='S' || arr[i-1][j]=='T'))
        {
            dir[0] = true;
        }
        if( j<arr[0].length-1 && (arr[i][j+1].charAt(0)=='S' || arr[i][j+1]=='T'))
        {
            dir[1] = true;
        }
        if( i<arr.length && (arr[i+1][j].charAt(0)=='S' || arr[i+1][j]=='T'))
        {
            dir[2] = true;
        }
        if( j>0 && (arr[i][j-1].charAt(0)=='S' || arr[i][j-1]=='T'))
        {
            dir[3] = true;
        }
        //alert(dir);
        if(dir[0] && dir[2] && !dir[1] && !dir[3])
        {
            img.src = "images/rainbowV.gif";
        }
        else if(!dir[0] && dir[1] && !dir[2] && dir[3])
        {
            img.src = "images/rainbowH.gif";
        }
        else if(dir[0] && dir[1] && !dir[2] && !dir[3])
        {
            img.src = "images/rainbowLLC.png";
        }
        else if(!dir[0] && dir[1] && dir[2] && !dir[3])
        {
            img.src = "images/rainbowLUC.png";
        }
        else if(!dir[0] && !dir[1] && dir[2] && dir[3])
        {
            img.src = "images/rainbowRUC.png";
        }
        else if(dir[0] && !dir[1] && dir[2] && dir[3])
        {
            img.src = "images/rainbowRLC.png";
        }
        else
            img.src = "images/roadC.png";
        
    }

}