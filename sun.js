function interpret(){

  // READ INPUTS
  const lagna = document.getElementById("lagna").value;
  const sunHouse = document.getElementById("sunHouse").value;
  const resultBox = document.getElementById("result");

  // VALIDATION
  if(!lagna || !sunHouse){
    alert("Please enter Lagna and Sun House");
    return;
  }

  let resultText = "";

  // HEADER
  resultText += "<h2>☀️ Sun Placement Analysis</h2>";

  // SUN IN 1ST HOUSE RULE (MASTER TEST RULE)
  if(Number(sunHouse) === 1){

    resultText += "<h3>Sun in 1st House</h3>";

    resultText += "<p><b>Personality:</b> Strong identity, natural leadership aura and high visibility in life.</p>";

    resultText += "<p><b>Confidence:</b> Strong self-belief and desire to be recognised for individuality.</p>";

    resultText += "<p><b>Life Direction:</b> Self-driven personality that prefers independence and authority.</p>";

    resultText += "<p><b>Health:</b> Good vitality but tendency toward burnout and stress overload.</p>";

    resultText += "<p><b>Relationships:</b> Independent nature may create ego clashes in close partnerships.</p>";

    resultText += "<p><b>Father Influence:</b> Strong influence of father or authority figures in shaping identity.</p>";

  }
  else{

    resultText += "<h3>Rule not written yet 😄</h3>";
    resultText += "<p>We are currently building Sun house rules one by one.</p>";

  }

  // SHOW RESULT
  resultBox.innerHTML = resultText;
}
