let text = document.querySelector('.main_text');
const toEnglish = () =>{
   text.innerHTML= `
   <div>
   <button id="mxButton" class="main_text_button" onclick="toEspanish()">
     <img src="./img/mx.svg" alt="mx">
   </button>
   <button id="usButton" class="main_text_button" onclick="toEnglish()"> 
     <img src="./img/us.svg" alt="us">
   </button>
   <button id="grButton" class="main_text_button" onclick="toGerman()"> 
     <img src="./img/de.svg" alt="gr">
   </button>
 </div>
            <h2>The Battles in the Desert</h2>
            <p>"The Battles in the Desert" is a novel written by the Mexican author José Emilio Pacheco, first published in 1981. This work has become a reference in contemporary Mexican literature due to its profound exploration of themes such as nostalgia, loss, memory, and the passage of time, all framed within the historical and social context of Mexico City in the 1940s.<br><br>

            The plot of "The Battles in the Desert" unfolds through the eyes and voice of Carlos, a middle-class boy who narrates the events that marked his life during his childhood. The story is set in post-revolutionary Mexico of the 1940s, a time of political, social, and cultural changes in the country.<br><br>

            The title of the novel, "The Battles in the Desert," alludes to both the personal and emotional battles fought by the protagonist and to the transformation and growth he experiences throughout the story. The "desert" symbolizes the emotional aridity and existential void that Carlos faces as he grows up and confronts the complexities of life.<br><br>
            <span><img src="./img/desert_2.png" alt=""></span>
            One of the most outstanding aspects of the novel is Pacheco's ability to capture the atmosphere of Mexico City at that time, describing in detail the places, customs, and people that populated the protagonist's life. Through his vivid descriptions, the author transports the reader to a world full of nostalgia and melancholy, where the passage of time leaves its indelible mark on the characters and the environment around them.<br><br>

            The novel's plot focuses on the forbidden love between Carlos and Mariana, the mother of his best friend. This clandestine love triggers a series of events that will irrevocably change the protagonist's life and those around him. The relationship between Carlos and Mariana defies the social and moral norms of the time, leading to conflicting situations and a tragic outcome.<br><br>

            Throughout the novel, Pacheco explores themes such as lost innocence, guilt, friendship, and betrayal. Through Carlos's voice, the author invites us to reflect on the complexity of human relationships and the ephemeral nature of happiness. The story of "The Battles in the Desert" is ultimately an ode to memory and the redeeming power of remembrance, which allows us to reconstruct the past and find meaning amidst chaos and uncertainty.<br><br>

            In conclusion, "The Battles in the Desert" is a poignant and evocative novel that continues to resonate in the hearts of readers decades after its publication. Through his lyrical prose and profound humanity, José Emilio Pacheco offers us an unforgettable portrait of Mexico City in the 1940s and a reflection on the passage of time and the inevitability of change.
            
            `
}

const toEspanish = () =>{
    text.innerHTML = ` <div>
    <div>
    <button id="mxButton" class="main_text_button" onclick="toEspanish()">
      <img src="./img/mx.svg" alt="mx">
    </button>
    <button id="usButton" class="main_text_button" onclick="toEnglish()"> 
      <img src="./img/us.svg" alt="us">
    </button>
    <button id="grButton" class="main_text_button" onclick="toGerman()"> 
      <img src="./img/de.svg" alt="gr">
    </button>
  </div>
    <h2>Las Batallas en el Desierto</h2>
    <p>"Las batallas en el desierto" es una novela escrita por el autor mexicano José Emilio Pacheco, publicada por primera vez en 1981. Esta obra se ha convertido en un referente de la literatura contemporánea mexicana debido a su profunda exploración de temas como la nostalgia, la pérdida, la memoria y el paso del tiempo, todo ello enmarcado en el contexto histórico y social de la Ciudad de México en la década de 1940.<br><br>

      La trama de "Las batallas en el desierto" se desarrolla a través de los ojos y la voz de Carlos, un niño de clase media que narra los acontecimientos que marcaron su vida durante su infancia. La historia se sitúa en el México posrevolucionario de la década de 1940, una época de cambios políticos, sociales y culturales en el país.<br><br>
      
      El título de la novela, "Las batallas en el desierto", hace alusión tanto a las batallas personales y emocionales que libra el protagonista, como a la transformación y el crecimiento que experimenta a lo largo de la historia. El "desierto" simboliza la aridez emocional y el vacío existencial que Carlos enfrenta a medida que crece y se enfrenta a las complejidades de la vida.<br><br>
      <span><img src="./img/desert_2.png" alt=""></span>
      Uno de los aspectos más destacados de la novela es la habilidad de Pacheco para capturar la atmósfera de la Ciudad de México en esa época, describiendo detalladamente los lugares, las costumbres y las personas que poblaron la vida del protagonista. A través de sus vívidas descripciones, el autor transporta al lector a un mundo lleno de nostalgia y melancolía, donde el paso del tiempo deja su huella imborrable en los personajes y en el entorno que los rodea.<br><br>
     
      La trama de la novela se centra en el amor prohibido entre Carlos y Mariana, la madre de su mejor amigo. Este amor clandestino desencadena una serie de eventos que cambiarán irrevocablemente la vida del protagonista y de quienes lo rodean. La relación entre Carlos y Mariana desafía las normas sociales y morales de la época, lo que lleva a situaciones conflictivas y a un desenlace trágico.<br><br>
      
      A lo largo de la novela, Pacheco explora temas como la inocencia perdida, la culpa, la amistad y la traición. A través de la voz de Carlos, el autor nos invita a reflexionar sobre la complejidad de las relaciones humanas y sobre la naturaleza efímera de la felicidad. La historia de "Las batallas en el desierto" es, en última instancia, una oda a la memoria y al poder redentor del recuerdo, que nos permite reconstruir el pasado y encontrar sentido en medio del caos y la incertidumbre.<br><br>
      
      En conclusión, "Las batallas en el desierto" es una novela conmovedora y evocadora que sigue resonando en el corazón de los lectores décadas después de su publicación. A través de su prosa lírica y su profunda humanidad, José Emilio Pacheco nos ofrece un retrato inolvidable de la Ciudad de México en la década de 1940 y una reflexión sobre el paso del tiempo y la inevitabilidad del cambio.
    </p> `
}

const toGerman = () =>{
    text.innerHTML = ` <div>
    <div>
    <button id="mxButton" class="main_text_button" onclick="toEspanish()">
      <img src="./img/mx.svg" alt="mx">
    </button>
    <button id="usButton" class="main_text_button" onclick="toEnglish()"> 
      <img src="./img/us.svg" alt="us">
    </button>
    <button id="grButton" class="main_text_button" onclick="toGerman()"> 
      <img src="./img/de.svg" alt="gr">
    </button>
  </div>
  <h2>Die Schlachten in der Wüste</h2>
  <p>"Die Schlachten in der Wüste" ist ein Roman des mexikanischen Autors José Emilio Pacheco, der erstmals 1981 veröffentlicht wurde. Dieses Werk ist aufgrund seiner tiefgreifenden Erforschung von Themen wie Nostalgie, Verlust, Erinnerung und dem Vergehen der Zeit zu einem Referenzpunkt in der zeitgenössischen mexikanischen Literatur geworden, alles eingebettet in den historischen und sozialen Kontext von Mexiko-Stadt in den 1940er Jahren.<br><br>
  
  Die Handlung von "Die Schlachten in der Wüste" entfaltet sich durch die Augen und die Stimme von Carlos, einem Jungen aus der Mittelschicht, der die Ereignisse erzählt, die sein Leben während seiner Kindheit geprägt haben. Die Geschichte spielt im Nachrevolutionären Mexiko der 1940er Jahre, einer Zeit politischer, sozialer und kultureller Veränderungen im Land.<br><br>
  
  Der Titel des Romans, "Die Schlachten in der Wüste", bezieht sich sowohl auf die persönlichen und emotionalen Kämpfe des Protagonisten als auch auf die Transformation und das Wachstum, die er im Laufe der Geschichte erfährt. Die "Wüste" symbolisiert die emotionale Trockenheit und die existenzielle Leere, mit der Carlos konfrontiert wird, während er heranwächst und sich den Komplexitäten des Lebens stellt.<br><br>
  <span><img src="./img/desert_2.png" alt=""></span>
  Eine der herausragendsten Aspekte des Romans ist Pachecos Fähigkeit, die Atmosphäre von Mexiko-Stadt zu dieser Zeit einzufangen, indem er ausführlich die Orte, Bräuche und Menschen beschreibt, die das Leben des Protagonisten prägten. Durch seine lebendigen Beschreibungen entführt der Autor den Leser in eine Welt voller Nostalgie und Melancholie, in der die Zeit ihre unvergesslichen Spuren in den Charakteren und der Umgebung hinterlässt.<br><br>
  
  Die Handlung des Romans konzentriert sich auf die verbotene Liebe zwischen Carlos und Mariana, der Mutter seines besten Freundes. Diese heimliche Liebe löst eine Reihe von Ereignissen aus, die das Leben des Protagonisten und derer um ihn herum unwiderruflich verändern werden. Die Beziehung zwischen Carlos und Mariana stellt die sozialen und moralischen Normen der Zeit in Frage und führt zu konfliktreichen Situationen und einem tragischen Ausgang.<br><br>
  
  Im Laufe des Romans erkundet Pacheco Themen wie verlorene Unschuld, Schuld, Freundschaft und Verrat. Durch die Stimme von Carlos lädt der Autor uns ein, über die Komplexität menschlicher Beziehungen und die vergängliche Natur des Glücks nachzudenken. Die Geschichte von "Die Schlachten in der Wüste" ist letztendlich eine Ode an die Erinnerung und die erlösende Kraft der Erinnerung, die es uns ermöglicht, die Vergangenheit wieder aufzubauen und inmitten von Chaos und Unsicherheit einen Sinn zu finden.<br><br>
  
  Zusammenfassend ist "Die Schlachten in der Wüste" ein bewegender und eindringlicher Roman, der auch Jahrzehnte nach seiner Veröffentlichung noch im Herzen der Leser widerhallt. Durch seine lyrische Prosa und seine tiefe Menschlichkeit bietet uns José Emilio Pacheco ein unvergessliches Porträt von Mexiko-Stadt in den 1940er Jahren und eine Reflexion über den Lauf der Zeit und die Unvermeidlichkeit des Wandels.
  </p> `
}