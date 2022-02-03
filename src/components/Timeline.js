import '../App.css'
import React from 'react'
import './Timeline.css'

// Text for each race
const R1 = "In Saturday's qualifying, Max Verstappen, having led all three practice sessions in his Red Bull, took " +
"pole position for the fourth time in his career. In Sunday's race, Hamilton claimed victory over Verstappen, who had " +
"tried to overtake him previously but only managed to do so by exceeding track limits, and who was told to give " +
"the position back. (Final Result 2nd)";

const R2 = "Lewis Hamilton, who led the driver's championship, started from pole position, but he was overtaken at the first corner " +
"by Max Verstappen of Red Bull, with a daring move into turn 1. Just before the restart, Verstappen almost spun at " +
"Rivazza, but managed to maintain control; he kept the lead and pulled away for the rest of the race. (Final Result 1st)";

const R3 = "The 66-lap race was won by Mercedes driver Lewis Hamilton from second. Max Verstappen took second place. The mercedes " +
"seemed to have the better pace over the course of the weekend, with Max qualifying P3. At the start of the race Max got past " +
"Bottas and seemed to lack the pace to catch Hamilton. Having to hold fastest lap point as relegation. Max trailed Hamilton " +
"by 8 points in the standings. (Final Result 2nd) ";

const R4 = "The Spainish GP was won by Mercedes driver Lewis Hamilton from pole position ahead of Red Bull's Max Verstappen and Hamilton's " +
"teammate Valtteri Bottas. Verstappen had taken the lead of the race momentarily, leading into turn 1. But lost the race " +
"after Hamilton switched to a 2-stop on better tyres towards the end, passing the Dutchman. The win allowed Hamilton to extend " +
"his Championship lead over Verstappen to 14 points. (Final Result 2nd)";

const R5 = "The 78 lap race was won by Max Verstappen of Red Bull Racing after polesitter Charles Leclerc of Ferrari " +
"failed to start the race with a driveshaft problem. Inheriting pole from the local driver, Max was little challenged by " +
"the pursuing Sainz and Norris. Crusing to victory with Hamilton down in 7th. Max lead the drivers standings by 4 points. (Final Result P1)";

const R6 = "Both championship contenders, Lewis Hamilton and Max Verstappen, experienced problems during the 51-lap race. " + 
"Verstappen retired due to a high-speed tyre blowout, after leading the majoirty of the race in Baku. While Hamilton " +
"made a severe error with the brake magic button at the resultant restart. (Final Result DNF)";

const R7 = " Max Verstappen qualified on pole position, ahead of Lewis Hamilton and Valtteri Bottas." +
"A mistake by Verstappen at the start handed Hamilton the early lead, but Verstappen regained the lead following the first " +
"round of pit stops. Red Bull then decided to use an alternative 2-stop strategy. " +
"Dropping Verstappen eighteen seconds behind Hamilton. Verstappen " +
"went on to win the race after he overtook Hamilton on the penultimate lap. The championship lead was now 12 points (Final Result 1st)";

const R8 = "The first of the Austrian races was won from pole position by Max Verstappen, who led every lap of the race. Lewis Hamilton, finished " +
"second and set the fastest lap. Verstappen extended his lead over Hamilton in the Drivers' Championship to 18 points (Final Result 1st)";

const R9 = "Max Verstappen took his 7th pole position of his career. He was followed by Lando Norris and teammate Sergio " +
"By taking pole, fastest lap, win, and leading every lap of the race, Max Verstappen achieved his first career grand slam. " +
"His lead in the driver standings extended to 32 points. (Final Result 1st)";

const R10 = "The sprint qualification race at the British GP was won by Max Verstappen, after he qualified 2nd on Friday. " +
"The main race was won by Lewis Hamilton, after the two title contenders came together at Corpse corner. The result was a " + 
"51G-force impact resulting in a trip to the hospital. His lead in the driver standings was cut to 8 points. (Final Result DNF)";

const R11 = "The race was won by Esteban Ocon with Hamilton finishing 2nd. Verstappen qualified 3rd but in the race was 2nd " + 
"going into turn 1. However his progress was cut short after an out of control Bottas wiped out Norris, Perez and Verstappen at turn 1. " +
"After the red flag Max completed the rest of the race with a damaged car that lost half its downforce. Wrestling the car into the " + 
"final points paying position. Max now trailed Hamilton by 8 points in the standings (Final Result 10th)";

const R12 = "Due to very wet conditions, two laps took place behind the safety car before a red flag brought an end to " +
"the race during lap three, with the regulations requiring the results to be taken from the end of lap one. Max still trailed Hamilton" + 
"by 3 points. (Final Result 1st)";

const R13 = "Max Verstappen took pole position at his home race ahead of Hamilton and Bottas. With the support of the orange army " + 
"Verstappen held off a charging Lewis Hamilton at the end of the race to become the first Dutch driver to win their home race. " + 
"Verstappen now led the title by 3 points (Final Result 1st)";

const R14 = "Friday qualifying saw Bottas go fastest, with Hamilton second and Max Verstappen third. In the sprint race Max held off the " + 
"Mclarens behind to finish 2nd, inheriting 1st after Bottas' engine penalty qualification for the main race. The main race saw Ricciardo " + 
"take the lead at turn 1, after a slow pit-stop Verstappen emerged side-by-side with Hamilton going into turn 1. Verstappens rear tyre " + 
"clipped a sausage kerb at mounted Hamiltons car, leading to both being out. The bonous sprint qualifying points extended Max's lead by 5 points. (Final Result DNF)";

const R15 = " Lewis Hamilton, became the first driver to reach 100 Grands Prix wins with victory at the Russian Grand Prix. " +
"Before the race weekend Max Verstappen recieved a 3 place grid drop after his collision with Hamilton at Monza. Redbull decided " +
"To also take new engine components, relegating Max to the back of the grid. Max timed his change from slicks to intermediates " +
"perfectly, completing a last to 2nd race in tricky dry-wet condtions. Hamilton regained the championship lead over Max Verstappen by 2 points. (Final Result 2nd)";

const R16 = "Bottas won the Turkish Grand Prix, whilst Max Verstappen finished ahead of his teammate Sergio Pérez in third. In " + 
"Qualifying Max was 3rd, with Lewis taking a 10 place grid drop for new engine components. During the race Max didn't have the pace " + 
"to catch Bottas, nor where the drivers behind quick enough. Verstappen now led the title by 6 points (Final Result 2nd)";

const R17 = "Max Verstappen took victory in Cota, with an excellant display of tyre management against Lewis Hamilton. Redbull seemed " + 
"the quicker car in sector 1 and 3, but seemed vulnerable on the main sector 2 straight. Verstappen qualified on pole ahead of Hamilton " +
"In the race Hamilton was quicker off the line and took the lead. Verstappen regained the lead by undercutting Hamilton in a 2-stopper, "  +
"with Lewis finishing just 2 seconds behind the Dutchman. His lead in the driver standings extended to 12 points. (Final Result 1st) ";

const R18 = "Max Verstappen took a commanding win at the Mexican Grand Prix, followed by Lewis Hamilton and Sergio Pérez. In qualifying " + 
"Redbull had th quicker car, but after Yuki Tsunoda went wide and Perez followed, Max had to settle for 3rd. In the race Max wasted no time " +
"Passing both Mercedes into turn 1, and leading from start to finish. His lead in the driver standings extended to 19 points. (Final Result 1st)";

const R19 = "The race was won by Hamilton, with Verstappen and Bottas completing the podium in a chaotic weekend. Hamilton took pole in Friday " + 
"Qualifying with Verstappen behind, but Hamilton was DSQ after his DRS flap failed to meet FIA regulations. Max Verstappen also recieved a " + 
"€50,000 fine for touching Hamiltons rear wing in parc ferme. In the sprint race Verstappen finished behind Bottas. Whilst the Dutchman passed  " +
"the Finn to take the lead of the Race. But was no match for a determined Hamilton that passed on a second attempt after the pair went off track together " +
"His lead in the driver standings was cut to 14 points. (Final Result 2nd)" ;

const R20 = " Lewis Hamilton won the race ahead of Verstappen, while Fernando Alonso rounded out the podium. Max had intially qualified 2nd. But " +
"along with Bottas recieved a 5-place grid drop for ignoring double yellows for a broken down Alpha Tauri in Q3. Starting 7th the Dutchman made up " +
"places at the start, finishing 2nd with fastest lap. His lead in the driver standings was cut to 8 points. (Final Result 2nd) ";

const R21 = "Lewis Hamilton won the innaugral Saudi Grand Prix ahead of Verstappen and Bottas. In Q3 Max Verstappen was on one of the best qualifying " + 
"laps in Formula 1, purple in S1, S2 and S3, but lost it and hit that wall at the final corner. Starting 3rd Max found himself leading by stopping " + 
"under the red flag. During the race defending from Lewis, Max went wide and was asked to give the postion back. This miscommunication of a position " + 
"swap caught out Hamilton whom drove into the back of Max. Hamilton ultimatley won the race, with both drivers now equal on 369.5 points (Final Result 2nd)";

const R22 = "Verstappen's win secured his first Formula One World Drivers' Championship of his career by eight points from Hamilton, " + 
"with victory at Yas Marina. Max qualfied on pole, after a strategic tow by his teamate in S2. " +
"Hamilton took the lead at the start, but drove off track after Max passed him " +
"at turn 6. Perez's defence from Hamilton brought Max from 12s to 1s. Verstappen boxed under a " + 
"saftey car for softs, after Latifi crashed. On the last lap Max passed Lewis at turn 5, and held " +
"on to take victory at Yas Marina, and take the 2021 F1 World Drivers Championship by 8 points over Hamilton (Final Result 1st) " ;


function Timeline() {
    return (
        <div>
            <section class="timeline">
            <div class="container">

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header">
                    <h2>Bahrain</h2>
                    </div>
                    <div class="date">Round 1</div>
                    <p>{R1}</p>
                </div>
                </div>   

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-1">
                    <h2>Imola</h2>
                    </div>
                    <div class="date">Round 2</div>
                    <p>{R2}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-2">
                    <h2>Portugal</h2>
                    </div>
                    <div class="date">Round 3</div>
                    <p>{R3}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-3">
                    <h2>Spain</h2>
                    </div>
                    <div class="date">Round 4</div>
                    <p>{R4}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-4">
                    <h2>Monaco</h2>
                    </div>
                    <div class="date">Round 5</div>
                    <p>{R5}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-5">
                    <h2>Baku</h2>
                    </div>
                    <div class="date">Round 6</div>
                    <p>{R6}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-6">
                    <h2>France</h2>
                    </div>
                    <div class="date">Round 7</div>
                    <p>{R7}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-7">
                    <h2>Styria</h2>
                    </div>
                    <div class="date">Round 8</div>
                    <p>{R8}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-8">
                    <h2>Austria</h2>
                    </div>
                    <div class="date">Round 9</div>
                    <p>{R9}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-9">
                    <h2>Great Brtiain</h2>
                    </div>
                    <div class="date">Round 10</div>
                    <p>{R10}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-10">
                    <h2>Hungary</h2>
                    </div>
                    <div class="date">Round 11</div>
                    <p>{R11}</p>
                </div>
                </div>  
                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-11">
                    <h2>Belgium</h2>
                    </div>
                    <div class="date">Round 12</div>
                    <p>{R12}</p>
                </div>
                </div>   

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-12">
                    <h2>Netherlands</h2>
                    </div>
                    <div class="date">Round 13</div>
                    <p>{R13}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-13">
                    <h2>Italy</h2>
                    </div>
                    <div class="date">Round 14</div>
                    <p>{R14}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-14">
                    <h2>Russia</h2>
                    </div>
                    <div class="date">Round 15</div>
                    <p>{R15}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-15">
                    <h2>Turkey</h2>
                    </div>
                    <div class="date">Round 16</div>
                    <p>{R16}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-16">
                    <h2>United States</h2>
                    </div>
                    <div class="date">Round 17</div>
                    <p>{R17}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-17">
                    <h2>Mexico</h2>
                    </div>
                    <div class="date">Round 18</div>
                    <p>{R18}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-18">
                    <h2>Brazil</h2>
                    </div>
                    <div class="date">Round 19</div>
                    <p>{R19}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-19">
                    <h2>Qatar</h2>
                    </div>
                    <div class="date">Round 20</div>
                    <p>{R20}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-20">
                    <h2>Saudi Arabia</h2>
                    </div>
                    <div class="date">Round 21</div>
                    <p>{R21}</p>
                </div>
                </div>  

                <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content timeline-card">
                    <div class="timeline-img-header-21">
                    <h2>Abu Dhabi</h2>
                    </div>
                    <div class="date">Round 22</div>
                    <p>{R22}</p>
                </div>
                </div> 

                
            </div>
            </section>
        </div>
    )
}

export default Timeline