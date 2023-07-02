
      $(document).ready(function() {
      $("#op1").hide();
       $("#op2").hide();
         $("#input").hide();
        $("#op3").hide();
         $("#op4").hide();
           $("#hrr").hide();
           $("#ent").hide();
           $("#bkbtn").hide();
           $("#clrdata").hide();
           $("#submit").hide();
          var btn=document.getElementById("stbtn");
          $("#stbtn").click(function(){
             $("#carddiv").css({"height":"100%"});
            btn.remove();
            res=0;
 updateTimer(res);
           
             var pp=document.getElementById("op");
             op.remove();
             $("#op1").show();
       $("#op2").show();
        $("#op3").show();
         $("#op4").show();
           $("#hrr").show();
              mainfuc();
            
          });
    });

    var exe=0;
var penalty=0;

a=0;
 var score=0;


function mainfuc(){
     
    const questions = [
  {
    questionText: "null",
    options: ["1.Null", "2. Null", "3. Null", "4. Null"],
    answer: "3. Null",
  },{
    questionText: "What is the real name of the superhero Iron Man?",
    options: ["1. Tony Stark", "2.  Steve Rogers", "3.  Peter Parker", "4. Bruce Banner"],
    answer: "1. Tony Stark",
  },
  {
    questionText: "Who is the Norse god of thunder in the Marvel universe?",
    options: [
      "1. Loki",
      "2. Thor",
      "3. Audin",
      "4. Stark",
    ],
    answer: "2. Thor",
  },
  {
    questionText:
      "What is the name of Captain America's shield made of?",
    options: ["1. Vibranium", "2. Adamantium", "3. Promethium", "4.uru"],
    answer: "1. Vibranium",
  },
  {
    questionText:
      "Which superhero team is led by Professor Charles Xavier?",
    options: [
      "1. Thor",
      "2. Black Widow",
      "3.  Iron man",
      "4. captain",
    ],
    answer: "3.  Iron man",
  },
  {
    questionText:
      "Who is the arch-nemesis of Spider-Man?",
    options: ["1. Green Goblin", "2. Doctor Octopus", "3. Thanos", "4. Venom"],
    answer: "1. Green Goblin",
  },
];



 if(exe==0)
 {
    exe++;
    
 }
 else if(exe=>1 && exe<6){
    
  
    
    if(exe<6)
{
   
  
 document.getElementById("ques").textContent=questions[exe].questionText;
 
  document.getElementById("op1").textContent = questions[exe].options[0];

    document.getElementById("op2").textContent = questions[exe].options[1];

      document.getElementById("op3").textContent = questions[exe].options[2];

        document.getElementById("op4").textContent = questions[exe].options[3];
}else{
    var ques=document.getElementById("ques");
   ques.innerHTML="<br><br><br><b><center>Wait for timeout</center></b>";
     $("#op1").hide();
     $("#op2").hide();
      $("#op3").hide();
       $("#op4").hide();
        $("#h5").hide();

 }

exe++;
 }
 }
   var xyz=1;
 function ck(id)
 {
      a++;
    //array
const ops = [
  {

    options: ["1.Null", "2. Null", "3. Null", "4. Null"],
    answer: "3. Null",
  }, {

    options: ["1.Null", "2. Null", "3. Null", "4. Null"],
    answer: "3. Null",
  },{
   
    options: ["1. Tony Stark", "2.  Steve Rogers", "3.  Peter Parker", "4. Bruce Banner"],
    answer: "1. Tony Stark",
  },
  {
 
    options: [
      "1. Loki",
      "2. Thor",
      "3. Audin",
      "4. Stark",
    ],
    answer: "2. Thor",
  },
  {
  
    options: ["1. Vibranium", "2. Adamantium", "3. Promethium", "4.uru"],
    answer: "1. Vibranium",
  },
  {
   
    options: [
      "1. Thor",
      "2. Black Widow",
      "3.  Iron man",
      "4. captain",
    ],
    answer: "3.  Iron man",
  },
  {

    options: ["1. Green Goblin", "2. Doctor Octopus", "3. Thanos", "4. Venom"],
    answer: "1. Green Goblin",
  },
];

    //end of array
    var getid=id;
 
    var lg=ops.length;
  
    var h5=document.getElementById("h5");
if(xyz<lg)
{
    xyz++;
   
  if(getid==1)
  {

      var ar=ops[a].options[0];
     
      var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
        penalty=0;
        h5.style.color="Green";
h5.innerHTML="Correct!";

    }else{
        penalty=5;
        h5.style.color="Red";
        h5.innerHTML="InCorrect!";
     
        
    }

 //a=a+1;
  

  }else if(getid==2)
  {

      var ar=ops[a].options[1];
            var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
penalty=0;
h5.style.color="Green";
h5.innerHTML="Correct!";
    }else{
        penalty=5;
        h5.style.color="Red";
      h5.innerHTML="InCorrect!";
     
    }

  }
  else if(getid==3)
  {
 
      var ar=ops[a].options[2];
      var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
        penalty=0;
        h5.style.color="Green";
h5.innerHTML="Correct!";
    }else{
        penalty=5;
        h5.style.color="Red";
        h5.innerHTML="InCorrect!";
       
    }
 
  }
  else if(getid==4)
  {

      var ar=ops[a].options[3];
            var ans=ops[a].answer;
    if(ans==ar)
    {
        score=score+10;
        penalty=0;
        h5.style.color="Green";
h5.innerHTML="Correct!";
    }else{
        penalty=5;
        h5.style.color="Red";
        h5.innerHTML="Incorrect!";
      
    }
   

  }
  }else{
    
   
  }

  $("#carddiv").css({"height":"100%"});
 



mainfuc();

return penalty;


 }



 // Set the countdown duration (in seconds)
var countdownDuration = 30;

 res=ck(penalty);
 if(isNaN(res))
 {
    res=0;
 }else{
console.log("res"+res);
 }



     if(res==10){
             console.log("hey");  
 updateTimer(res);
             
                
            }

// Function to update the timer display
function updateTimer(res) {
  
var tt=document.getElementById("time");
 var quess=document.getElementById("ques"); 
 var tit=document.getElementById("tit");  
 
 if(countdownDuration>=0)
 {

   tt.innerHTML="00:"+countdownDuration;
 }else{
    
   tt.innerHTML="00:00";
 }

countdownDuration--;
 if(countdownDuration<0)
 {
    console.log("finished");
     $("#op1").hide();
     $("#op2").hide();
      $("#op3").hide();
       $("#op4").hide();
        $("#h5").hide();
        ent.innerHTML="Enter Initials:";
         $("#ent").show();
        $("#input").show();
         $("#submit").show();
        tit.innerHTML="<b>All done!</b>";
     ques.innerHTML="<br>Your final score is <b>"+score+"</b>.";
     


 }else{
    setTimeout(updateTimer,1000);
   
   
 }

 if(penalty==5)
 {
     
countdownDuration -= penalty;
penalty=0;
 }else{
    penalty=0;
 }
  //
}


 function alldone()
 {
    var unm=document.getElementById("input").value;
    localStorage.setItem('uname', unm);
localStorage.setItem('score', score);



location.reload();






 }

 function backbtn()
 {
    location.reload();
 }
 function clrdata()
 {
   localStorage.removeItem('uname');
   localStorage.removeItem('score');
   location.reload();
 }

 function highsc()
 {var ct=1;
    var sw=document.getElementById("leaderboard");
    var tit=document.getElementById("tit");
    $("#ent").hide();
    $("#ques").hide();
    $("#op").hide();
    $("#stbtn").hide();
     $("#bkbtn").show();
     $("#clrdata").show();
    var lb=document.getElementById("ent");
    tit.innerHTML="<b>Highscore</b>";
    var lgtt=localStorage.length;
    console.log(lgtt);
    $("#op").show();
    
   var container = document.getElementById("op");


  
  var value = ct+"."+localStorage.getItem("uname");
var value2 = "-"+localStorage.getItem("score");

  container.innerHTML = value+value2;



 }



