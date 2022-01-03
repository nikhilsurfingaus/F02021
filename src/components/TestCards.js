import React from 'react'
import TestCard from './TestCard'
import './TestCards.css'
import img1 from '../images/Races/Bahrain.jpg';
import img2 from '../images/Races/Imola.jpg'
import img3 from '../images/Races/Portugal.jpg'
import img4 from '../images/Races/Spain.jpg';
import img5 from '../images/Races/Monaco.jpg'
import img6 from '../images/Races/Baku.jpg'
import img7 from '../images/Races/France.jpg';
import img8 from '../images/Races/Styerian.jpg'
import img9 from '../images/Races/Austria.jpg'
import img10 from '../images/Races/Britain.jpg';
import img11 from '../images/Races/Hungary.jpg'
import img12 from '../images/Races/Belgium.jpg'
import img13 from '../images/Races/Dutch.jpg';
import img14 from '../images/Races/Monza.jpg'
import img15 from '../images/Races/Russia.jpg'
import img16 from '../images/Races/Turkey.jpg';
import img17 from '../images/Races/USA.jpg'
import img18 from '../images/Races/Mexico.jpg'
import img19 from '../images/Races/Brazil.jpg';
import img20 from '../images/Races/Qatar.jpg'
import img21 from '../images/Races/Jeddah.jpg'
import img22 from '../images/Races/AbuDhabi.jpg';


const bahrainText = "Lewis Hamilton won the opening race of the 2021 season after holding " +  
"off Red Bull's Max Verstappen in a thrilling wheel-to-wheel battle at the Bahrain Grand Prix. " +
"Carlos Sainz took eighth on his debut for Ferrari ahead of AlphaTauri's Yuki Tsunoda, who scored two points on his F1 "+ 
"debut in ninth, and Lance Stroll who scored the final point on offer for Aston Martin. ";

const portugalText = "Lewis Hamilton took his second win of the 2021 season after beating Red Bull's " +
"Max Verstappen and Mercedes teammate Valtteri Bottas to victory at the Portuguese Grand Prix. Lando " + 
"Norris took fifth place for McLaren ahead of the Ferrari of Charles Leclerc and the Alpine of Esteban Ocon. " + 
"Fernando Alonso completed an impressive comeback drive from 13th on the grid to take eighth at the finish, " +
"with a passing move on Carlos Sainz in the closing stages." ;

const imolaText = "Max Verstappen took his first victory of the 2021 season at a chaotic Emilia Romagna Grand Prix, " +
 "which saw Lewis Hamilton recover from a costly mistake midway through the race to finish second. Valtteri Bottas, " +
 "and Russell came together at high speed causing the race to be red flagged and suspended. After the restart Norris  " +
 "Passed Leclerc to take a spot on the podium.";  

const spainText = "Hamilton was beaten off the line by championship rival Verstappen, with a decisive move forcing " +
"Hamilton wide. Verstappen had no choice but to try and make it to the end on the tyres he took at that first stop. " +
"Hamilton quickly reeled Verstappen in and caught him seven laps from the finish, overtaking the Dutch driver in " +
"routine fashion. Despite losing a podium spot to Bottas, Leclerc finished an impressive fourth, ahead of Red Bull's Sergio Perez.";

const monacoText = "Max Verstappen went to the top of the drivers' championship with victory at the Monaco Grand Prix " +
"after Charles Leclerc, who took pole position in qualifying, failed to start the race. Bottas looked set for second " +
"place until a sticking wheel nut forced him to retire. This promoted Carlos Sainz to second place, but the Ferrari driver " +
"did not have the pace to trouble Verstappen out front, who only briefly lost the lead to teammate Sergio Perez when their pit stop strategies overlapped. ";

const bakuText = "Sergio Perez won the Azerbaijan Grand Prix after Red Bull teammate Max Verstappen crashed out of the " +
"lead with a tyre failure and Lewis Hamilton made a mistake following a red-flag restart to drop from second to last. " +
"The carnage at the front saw Sebastian Vettel take second place after starting 11th on the grid. Pierre Gasly took third " +
"after losing a place and then re-passing Charles Leclerc in the two-lap sprint at the end. ";

const franceText = "Max Verstappen beat Lewis Hamilton to victory at the French Grand Prix. With two laps remaining, Verstappen " +
"got a run at Hamilton into the chicane and with the help of DRS took the lead. Sergio Perez, finished third after passing Mercedes " + 
"Valtteri Bottas four laps from the end. Ferrari made a strong start to the race, but faded in the second half, with Carlos Sainz finishing " +
"11th and Charles Leclerc 16th."

const styeriaText = "Max Verstappen extended his championship lead over Lewis Hamilton after comfortably beating the Mercedes driver " +
"at the Styrian Grand Prix. Perez was just half a second behind Bottas when the pair crossed the finish line for the final time. " +
"Norris claimed another impressive fifth position for McLaren, finishing ahead of Ferrari pair Carlos Sainz and Charles Leclerc. " +
"George Russell had looked set for his long-awaited first points finish for Williams However encountered issues with his Mercedes engine. ";

const austriaText = "Max Verstappen eased to victory at the Austrian Grand Prix. Hamilton picked up damage to his car, dropping him " +
"behind Valtteri Bottas and Lando Norris, who continued his superb form with his third podium finish of 2021. Perez found himself in " +
"the wars after being pushed off track by Norris, he ran Leclerc off track on 2 more occasions. Leclerc settled for eighth ahead of " +
"Pierre Gasly and Fernando Alonso, who denied George Russell his first points for Williams.";

const britainText = "Lewis Hamilton took a controversial victory at the British Grand Prix after colliding with Max Verstappen. " +
"The Red Bull driver walked away from his wrecked car, but after a visit to the circuit medical centre. Leclerc took second place " + 
"for Ferrari ahead of Hamilton's Mercedes teammate Valtteri Bottas in third. Fernando Alonso took seventh after a strong weekend " +
"for the Alpine driver, ahead of Aston Martin's Lance Stroll, Alpine teammate Esteban Ocon and AlphaTauri's Yuki Tsuonda in tenth. ";

const hungaryText = "Esteban Ocon claimed a maiden Formula One win at the Hungarian Grand Prix. Hamilton finished third, whilst " +
"Verstappen claimed 10th after being caught up in Bottas and Stroll pile up at turn one lap one. Williams finally celebrated a " +
"points finish, with Nicholas Latifi finishing eighth ahead of teammate George Russell. Post Race Sainz was promoted to 3rd after " +
"Vettel was DSQ not being able to provide a fuel sample.";

const belgiumText = "Max Verstappen won the rain-hit Belgian Grand Prix after half-points were awarded for only the sixth time " +
"in Formula One history. George Russell finished second for Williams, his first Formula One podium, with Lewis Hamilton third " +
"for Mercedes. Sergio Perez qualified seventh, finishing last after crashing on the way to the grid. The result is counted from the " +
"penultimate lap, hence why three laps were completed but the results were taken from the end of lap two. ";

const dutchText = "Max Verstappen held the lead from pole position at the start and dictated the race from that point on " +
"winning the Dutch Grand Prix. Bottas finished a lonely third, having briefly been called upon to aid Hamilton. Gasly " +
"converted his magnificent qualifying performance into 4th ahead of Ferrari's Charles Leclerc. Alonso caught Carlos Sainz " +
"on the final lap for an impressive sixth position. Sergio Perez fought back through the field to finish eighth ahead of Alpine's Esteban Ocon";

const italyText = "Daniel Ricciardo claimed McLaren's first victory in nine years at the Italian Grand Prix. " +
"Lando Norris finished second ahead of Mercedes' Valtteri Bottas. Hamilton and Verstappen collided on lap 27  " +
"with Verstappen's car bouncing over the top of the Mercedes and coming to a rest on top of it in the gravel trap. " + 
"Charles Leclerc finished fourth for Ferrari at the team's home race ahead of Sergio Perez. ";

const russiaText = "Lewis Hamilton claimed his 100th victory at the Russian Grand Prix. Chasing down leader Lando Norris, " +
"who decided to stay out on the dry tyre on a wet track. It was a heartbreaking finish for Norris, so close to his first " +
"win settled for seventh. Max Verstappen capitalised on the late drama to finish second. Carlos Sainz finished third for " +
"Ferrari, with Mclaren’s Ricciardo just behind in 4th. George Russell, who qualified in third position, grabbed the final point in 10th position.";

const turkeyText = "Valtteri Bottas claimed a comfortable win at the Turkish Grand Prix ahead of Max Verstappen, " +
"who moved ahead of Lewis Hamilton who had to settle for fifth position. Sergio Perez's third-place finish was his " +
"first podium finish since the French Grand Prix. Gasly finished sixth despite a harsh five-second time penalty at the " +
"start of the race for what looked like an unavoidable collision with Fernando Alonso at Turn 1. ";

const usaText = " Max Verstappen held off Lewis Hamilton in a nail-biting finish to the United States Grand Prix. " +
"Hamilton had the gap down to one second, but Verstappen judged his tyre management to perfection to take victory. " +
"Perez took third spot on the podium after fighting through a stomach bug during the weekend. Ferrari's " +
"Charles Leclerc took fourth place ahead of Daniel Ricciardo in fifth, who held off a late charge from the second Mercedes of Valtteri Bottas in sixth.";

const mexicoText = "Max Verstappen took a comfortable victory ahead of Lewis Hamilton at the Mexican Grand Prix. " + 
"Valtteri Bottas, who started from pole position, was pitched into a spin by the McLaren of Daniel Ricciardo, " +
"which was followed by a mess at the rear of the field as Esteban Ocon was sandwiched between Yuki Tsunoda and Mick " +
"Schumacher. Whilst the hometown hero Sergio Perez received a roar after the race with his first Podium at his home race.  ";

const brazilText = "Lewis Hamilton won the Sao Paulo Grand Prix after a battle with Max Verstappen. Hamilton had a terrific start from P10 on the " +
"grid after a DSQ due to a DRS wing test in the sprint race which he started from last. On Lap 58 Hamilton tried to pass Verstappen, " +
"but both ran wide. Hamilton eventually passed his title rival a lap later. Bottas took advantage of a VSC pitstop to finish ahead of " +
"Sergio Perez. Both Ferraris had a strong finish in 5th and 6th helping them in their constructors battle against Mclaren. ";

const qatarText = " Lewis Hamilton claimed a comfortable win at the Qatar Grand Prix. For Verstappen, it was a race of damage limitations " + 
"after a grid penalty for not slowing for yellow flags in  qualifying. Fernando Alonso finished a remarkable third, " +
"his first podium finish since 2014. Norris, Bottas and both Williams drivers suffered punctures attempting to go long on their first stint. " +
"Esteban Ocon completed a strong race for Alpine in fifth ahead of Aston Martin's Lance Stroll and Ferrari pair Carlos Sainz and Charles Leclerc.";

const jeddahText = "Lewis Hamilton won a crazy, red flagged Saudi Arabian Grand Prix  to go level on points with rival Max Verstappen. " +
"There were crashes and collisions, safety cars, red flags and claims of dirty driving after Hamilton hit the back of Verstappen's " +
"slowing car on the fast street circuit. The Haas driver Mick Schumacher brought out the first red flag. On the second restart Mazepin, " +
"Russell and Perez races ended bringing out another red flag. Ocon was pipped to the line by 0.1s to miss out on a podium to Mercedes Bottas.  ";

const abudhabiText = "Max Verstappen won his first Formula One championship by overtaking title rival Lewis Hamilton on the final lap of the race. " +
"Lewis Hamilton took the lead at the race start, prompting Verstappen to attempt to regain his position at the turn 6. Hamilton went off the track, " + 
"and re-entered slightly further ahead of the Dutch driver. Red Bull called  upon the Mexican Minister of defence Sergio Perez, " +
"after Verstappen began to drop behind Hamilton. Hamilton Passed Perez, before the Mexican re-passed Hamilton on old tyres. " +
"Perez positioned his car perfectly, bringing Verstappen back within 1 second of the Briton. As the race progressed it was clear that Red Bull " +
"needed a miracle. On lap 53 Williams driver Latifi crashed bringing out the Safety Car. Verstappen pitted for softs whilst Hamilton decided " +
"to maintain track position. On Lap 57 race director Michael Masi decided to clear lapped cars between Hamilton and Verstappen. " +
"The Dutchman made a late move into turn 5 to take the lead of the race. He held off counter-attacks from Hamilton " +
"to win the race and his first World Drivers' Championship. Meanwhile Carlos Sainz picked up his 4th podium of the year. " +
"Whilst Yuki Tsunoda and Gasly picked up the team's best finish of 4th and 5th. ";


function TestCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img1}
                            text = {bahrainText}
                            label = 'Bahrain GP'/>

                        <TestCard src={img2}
                            text = {imolaText}
                            label = 'Imola GP'/>

                        <TestCard src={img3}
                            text = {portugalText}
                            label = 'Portuguese GP'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img4}
                            text = {spainText}
                            label = 'Spainish GP'/>

                        <TestCard src={img5}
                            text = {monacoText}
                            label = 'Monaco GP'/>

                        <TestCard src={img6}
                            text = {bakuText}
                            label = 'Baku GP'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img7}
                            text = {franceText}
                            label = 'French GP'/>

                        <TestCard src={img8}
                            text = {styeriaText}
                            label = 'Styerian GP'/>

                        <TestCard src={img9}
                            text = {austriaText}
                            label = 'Austrian GP'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img10}
                            text = {britainText}
                            label = 'British GP'/>

                        <TestCard src={img11}
                            text = {hungaryText}
                            label = 'Hungarian GP'/>

                        <TestCard src={img12}
                            text = {belgiumText}
                            label = 'Belgium GP'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img13}
                            text = {dutchText}
                            label = 'Dutch GP'/>

                        <TestCard src={img14}
                            text = {italyText}
                            label = 'Italian GP'/>

                        <TestCard src={img15}
                            text = {russiaText}
                            label = 'Russian GP'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img16}
                            text = {turkeyText}
                            label = 'Turkish GP'/>

                        <TestCard src={img17}
                            text = {usaText}
                            label = 'United States GP'/>

                        <TestCard src={img18}
                            text = {mexicoText}
                            label = 'Mexican GP'/>
                    </ul>
                </div>
            </div>


            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img19}
                            text = {brazilText}
                            label = 'Brazilian GP'/>

                        <TestCard src={img20}
                            text = {qatarText}
                            label = 'Qatar GP'/>

                        <TestCard src={img21}
                            text = {jeddahText}
                            label = 'Saudi Arabian GP'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TestCard src={img22}
                            text = {abudhabiText}
                            label = 'Abu Dhabi GP'/>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TestCards
