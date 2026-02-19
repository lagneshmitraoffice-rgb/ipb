function interpret(){

  const planets={
    Sun:Number(document.getElementById("sun").value),
    Moon:Number(document.getElementById("moon").value),
    Mars:Number(document.getElementById("mars").value),
    Mercury:Number(document.getElementById("mercury").value),
    Jupiter:Number(document.getElementById("jupiter").value),
    Venus:Number(document.getElementById("venus").value),
    Saturn:Number(document.getElementById("saturn").value),
    Rahu:Number(document.getElementById("rahu").value),
    Ketu:Number(document.getElementById("ketu").value)
  };

  let personality="", career="", love="", strengths="", challenges="";

  if(planets.Sun==10) career+="Strong leadership career potential.<br>";
  if(planets.Sun==1) personality+="Natural authority and confidence.<br>";

  if(planets.Moon==4) personality+="Emotionally sensitive and home loving.<br>";
  if(planets.Moon==6) challenges+="Overthinking and anxiety tendencies.<br>";

  if(planets.Mars==7) love+="Passionate relationships.<br>";
  if(planets.Mars==6) strengths+="Competitive and hardworking nature.<br>";

  if(planets.Jupiter==9) strengths+="Strong luck and protection.<br>";
  if(planets.Jupiter==10) career+="High career growth.<br>";

  if(planets.Venus==7) love+="Romantic personality.<br>";
  if(planets.Venus==11) strengths+="Social charm and popularity.<br>";

  if(planets.Saturn==10) career+="Slow but powerful career success.<br>";
  if(planets.Saturn==7) challenges+="Delay in relationships.<br>";

  if(planets.Rahu==10) career+="Huge ambition and fame desire.<br>";
  if(planets.Rahu==7) love+="Karmic relationships.<br>";

  if(planets.Ketu==4) challenges+="Emotional detachment from home.<br>";
  if(planets.Ketu==1) personality+="Spiritual personality.<br>";

  document.getElementById("result").innerHTML = `
  <h2>🧠 Personality</h2>${personality || "Balanced personality."}
  <h2>💼 Career</h2>${career || "Stable career path."}
  <h2>❤️ Relationships</h2>${love || "Normal relationship life."}
  <h2>💪 Strengths</h2>${strengths || "General strengths."}
  <h2>⚠️ Challenges</h2>${challenges || "No major challenges."}
  `;
}
