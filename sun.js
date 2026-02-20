// GLOBAL FUNCTION BANANA ZAROORI HAI
window.interpret = function(){

  const lagna = document.getElementById("lagna").value;
  const sunHouse = document.getElementById("sunHouse").value;
  const resultBox = document.getElementById("result");
  const errorBox = document.getElementById("error");

  // reset messages
  resultBox.innerHTML = "";
  errorBox.innerHTML = "";

  // VALIDATION
  if(!lagna || !sunHouse){
    errorBox.innerHTML = "Please enter Lagna and Sun House (1–12)";
    return;
  }

  if(lagna < 1 || lagna > 12 || sunHouse < 1 || sunHouse > 12){
    errorBox.innerHTML = "Values must be between 1 and 12";
    return;
  }

  let resultText = "<h2>☀️ Sun Placement Analysis</h2>";

  // ☀️ SUN IN 1ST HOUSE RULE
  if(Number(sunHouse) === 1){

    resultText += "<h3>Sun in 1st House</h3>";

    resultText += "<p><b>Personality:</b> Strong identity and leadership aura.</p>";
    resultText += "<p><b>Confidence:</b> High self-belief and desire for recognition.</p>";
    resultText += "<p><b>Life Direction:</b> Independent and self-driven personality.</p>";
    resultText += "<p><b>Health:</b> Good vitality but burnout possible.</p>";
    resultText += "<p><b>Relationships:</b> Ego clashes possible due to strong individuality.</p>";
    resultText += "<p><b>Father Influence:</b> Strong role of father or authority figures.</p>";

  } else {
    resultText += "<h3>Rule not written yet 😄</h3>";
  }

  resultBox.innerHTML = resultText;
};
