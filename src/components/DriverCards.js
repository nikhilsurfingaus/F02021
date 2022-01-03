import React from 'react'
import DriverCard from './DriverCard'
import './DriverCards.css'

import max from '../images/Drivers/VER.png';
import ham from '../images/Drivers/HAM.png';
import bot from '../images/Drivers/BOT.png';
import per from '../images/Drivers/PER.png';
import sai from '../images/Drivers/SAI.png';
import nor from '../images/Drivers/NOR.png';
import lec from '../images/Drivers/LEC.png';
import ric from '../images/Drivers/RIC.png';
import gas from '../images/Drivers/GAS.png';
import alo from '../images/Drivers/ALO.png';
import oco from '../images/Drivers/OCO.png';
import vet from '../images/Drivers/VET.png';
import str from '../images/Drivers/STR.png';
import tsu from '../images/Drivers/TSU.png';
import rus from '../images/Drivers/RUS.png';
import rai from '../images/Drivers/RAI.png';
import lat from '../images/Drivers/LAT.png';
import gio from '../images/Drivers/GIO.png';
import msc from '../images/Drivers/MSC.png';
import kub from '../images/Drivers/KUB.png';
import maz from '../images/Drivers/MAZ.png';



const verText = "Max Verstappen was undoubtedly the cream of the crop in 2021. Scoring 18 podium finishes, with all being either " +
"P1 or P2.The lows of his season included " +  
"colliding with Hamilton at Silverstone and coming off second best in the barriers. Whilst at Hungary Max was a victim " +
"of ‘Bottas Bowling’ into turn 1, somehow managing to score a single point in P10. " + 
"The Low point of the season was his incident at the Saudi GP, in which telemetry showed he ‘braked-checked’ " +
"Hamilton, consequenting into a 10s penalty. A moment of pure determination was at the " +
"Russian Grand Prix where Verstappen started from the back of the grid with new PU components. With the changeable-conditions " +
"the Dutchman timed his change from slicks to inters to perfection, recovering to P2. Best moments also included his " +
"home win at the Dutch Grand Prix and winning the US GP from a charging Hamilton. His greatest moment was " +
"his pass on Hamilton on the final lap of the season at Abu Dhabi to take his first WDC. ";

const hamText = "Lewis Hamilton along side his title rival were on  different level in 2021 " +
"Picking up 8 wins and 17 podiums in a year where the title went down to the final race. " +
"His lows included a poor race at Monaco finishing P7 on pure pace. Whilst at Baku after Verstappen puncture caused a red flag restart " +
"Hamilton locked up into turn 1 due to an incorrect brake setting and out of the points. His biggest Low was at the Abu dhabi GP where " +
"he had had an 8th WDC in his hands. But a late safety car on old tyres left him vulnerable to his " +
"title rival on new softs, subsequently losing the title. Moments of pure determination included the British GP after 10s time penalty " +
"overtook Leclerc for a home victory. At the Hungarian GP Hamilton was found himself last after fitting inters on a dry track." +
"Hamilton set flying lap after flying lap in the race to fight back to P3. At the Brazilian GP " +
"Lewis had a DSQ grid drop in the sprint race, and engine penalty for the main race. He was able to fight " +
"back to take victory against Verstappen ";

const botText = "Bottas had a rather quiet 2021 season, finishing in P3 with 10 podiums and a single victory, with all of his podiums " +
"being P3. His biggest low of the season included his performance " +
"at the Baku GP, qualifying in P10 and on pace in the race in P12. His other biggest low was at the Hungarian GP, " +
"in which he locked up into T1 by crashing into Norris, Perez and Verstappen. This action later led to a grid drop at the next race. " +
"His moment of determination came at the Italian GP, qualifying on pole, he took victory in the sprint race but was relegated to last due to a new PU. " +
"Bottas shined during the race, making overtakes on a day that seemed difficult to pass, onto the podium for P3. Bottas’ best performance " +
"of the season came at Turkey, qualifying on pole, and winning the race from Verstappen in dominant fashion. Where this time last year the " +
"Finn could not drive the car in a straight line. This performance came too late with the Finn " +
"opting for a long term move at Alfa Romeo.";

const perText = "Perez’s season was one a learning curve, with 5 podiums and a win at the Baku GP. Consistently being close to 0.5 off in " +
"qualifying to his teammate, but he usually made up for this in the race. Checo’s biggest lows included " +
"a Q1 exit at the Dutch GP when his teammate was on pole, whilst in Silverstone spun off in the sprint race, and didn’t make any progress in the race. " +
"Moments of brilliance included Baku, Perez " +
"kept his cool after his rivals tumbled to take victory. Another high was his podium finish at his home race in Mexico, fighting Hamilton all the way. " +
"His most season defining moment came at the Abu Dhabi GP holding up Hamilton for two laps kept Verstappen within Hamilton's pit-stop window, " +
"allowing his team mate to pit later on, and win the WDC.";

const saiText = "Carlos Sainz had a strong start to his career at the Scuderia, with 4 podiums and finishing as best of the rest in the driver's standings.  " +
"Managing to finish ahead of the highly rated Leclerc and sensation Lando Norris. His biggest lows of the season included something him and his teammate both  " +
"experienced was crashes during free practice sessions. His moments of Brilliance included the Monaco GP which before his teammate brought out the  " +
"red flag in qualifying seemed destined for pole position. Being promoted to P2 during the race held off any charge from Norris to claim his first podium in red.  " +
"His podium finishes at Abu Dhabi, Hungary and Russia seemed forgotten, with all the chaos that ensued in front of him. The Spaniard will hopefully be challenging  " +
"for better results in 2022 given Ferrari develops a stronger package.";

const norText = "Lando Norris was the star of the season, having 4 podium finishes and almost a win, demonstrating his ability given a car that can perform  " +
"at the front. Being pipped for P5 by his ex Mclaren teammate, with a less superior car in the later part of the season Lando was undoubtedly the 3rd best driver  " +
"of the season. His biggest lows of the season included crashing in Belgium on a wet track where pole position seemed a huge possibility. Whilst in Hungry he was a  " +
"victim of ‘Bottas Bowling’ after initially in the podium places. His biggest high came at the Russian GP, qualifying on pole position and leading the  " +
"majority of the race. Keeping 7-time champion Hamilton behind, his superb performance ended in disaster. With a miscommunication of rain at Mclaren left  " +
"him on dry tyres on an inter track, losing his first victory with 5 laps to go.";

const lecText = "Charles Leclerc had a strong season in 2021, with a single podium finish at the British GP. The Ferrari at the beginning of the season seemed  " +
"unpredictable, later becoming the clear 3rd quickest towards the end of the season. His biggest lows included crashing after getting pole in Monaco, and one  " +
"race due to damage being unable to take part in his home race. Another low was at Hungry where on a day where big points were on offer, he was taken out by  " +
"Stroll in the T1 melee. Moments of brilliance was taking pole at his home race, leading the majority of the British GP and his 6 best of the rest P4 finishes ";

const ricText = "Daniel Riccardo had an up and down 2021 season, with his first year at Mclaren. The Aussie managed a single victory during the season,  " +
"ending up 8th in the championship. Daniel struggled to come to terms with the driving style of his Mclaren, with his biggest lows including being lapped  " +
"by his teammate at what he was previously known as the ‘King of the streets’. His low’s also involved being out-qualified 15-7 and out raced 15-7 this  " +
"is an area he will be looking to improve. His best performance came at the Italian GP, qualifying P2 in the sprint race, keeping his teammate behind to  " +
"take an emotional victory.  ";

const gasText = "Pierre Gasly had a superb 2021 season that involved 1 podium, as well as 8 top 6 finishes. After being dropped by Red Bull in 2019,  " +
"Gasly sought to establish himself as team leader, out qualifying his teammate 21-1. His biggest lows of the season included crashing into Riccardo in  " +
"Bahrain, on a weekend where the car seemed top 3. As well as at Qatar where he started P2, but ended up in P11 after struggling with tyres.  " +
"Moments of brilliance included his podium finish at Baku, as well as a dominant P4 at the Dutch GP.  ";

const aloText = "Fernando Alonso returned  to Formula 1 after a 2 year hiatus, managing one podium finish as well as 4 top 6 finishes. His biggest low’s  " +
"included a poor home race at Spain finishing 17th, and in Jeddah being anonymous down in P13. Moments of brilliance came  at Hungry where he defended like  " +
"a ‘Lion’ from Hamilton, helping his teammate to win the race. His podium finish in Jeddah capped off a remarkable return to F1.  ";

const ocoText = "Esteban Ocon had a breakthrough year with a race win, as well as 14 points finishes and just behind Alonso in the standings.  " +
"Moments of low’s included being off the pace in France and Styeria in 14th, as well as losing a podium to Bottas in Jeddah on the last lap. His best  " +
"moment came at the Hungaroring where he kept Vettel at bay to take his maiden F1 Victory.";

const vetText = "Sebastian Vettel enjoyed an interesting first season at the Aston Martin team, with 1 podium and a second that was later taken away.  " +
"His biggest low included numerous Q1 and Q2 exits, however this was the package he was given. Moments of brilliance included a superb P2 at Baku,  " +
"as well as finishing P2 at the Hungaroring";

const strText = "Lance Stroll raised the eyebrows of many, by taking the challenge to his 4-time champion teammate. This included 9 points finishes " + 
"across the season. His biggest lows included causing a pile up at Hungary T1, a tyre puncture after a strong first stint in Baku. His best race " +
"came at the Qatar GP finishing P6. Stroll showed his talent as a mid field driver throughout the year outracing Vettel 12-9 and in qualifying his " + 
"teammate got the upper hand 8-14. ";

const tsuText = "Yuki Tsunoda had a tough rookie season that came with highs and lows. This included point finishes and a best result of 4th.  " +
"And 7 points finishes. His season started off with a bang with debut points in Bahrain. The lows of his season with Q1 eliminations, crashing in  " +
"free practice as well as races on the regular. His season started to turn in the last 7 races making Q3 in 6 of the last races, as well as achieving  " +
"his best performance in the season finale at Abu Dhabi of P4. "; 

const rusText = "George Russell was sublime in the 2021 season, given a car that was best of the back markers. The Briton managed 1 podium as well as  " +
"4 points finishes in the Williams. His low points included crashing into Bottas at Imola attempting a move off-line, as well as being out-qualified  " +
"by Latifi in the later part of the season. Moments of brilliance included qualifying P2 at the Belgium GP and subsequently taking a P2 podium, as  " +
"well as qualifying P3 at the Russian GP. His lap for P7 in qualifying at the Silverstone GP, justified many for his seat in the Mercedes  " +
"alongside Hamilton in 2022"; 

const raiText = "Kimi Raikkonen farewelled Formula 1 in 2021, having notched up 4 points finishes in 2021. The Finn Was unable to challenge for " + 
"points on the regular with the Alfa Romeo fighting with the Williams and Haas cars. His low’s included a clumsy last lap collision with Vettel " + 
"in Austria as well as crashing into the back of his teammate at Portugal. "; 

const latText = "Latifi had an up and down 2021 season including two points finishes for Williams. His low  point was his deficit at his " + 
"team mate at the start of the season in qualifying being outraced 5-15 and unqualified 20-2. His best performance came at Hungary where he " + 
"secured the teams first points since 2018, running in P3 for 20 laps and ending up P7 showed the tallent the 2019 GP2 runner up has.";  

const gioText = "Giovinazzi had a rather poor season in 2021, with only 2 points finishes across the season. The Italians' low points included " + 
"a poor strategy in Mexico which saw big points thrown away. His high points included playing P7 at the dutch GP and P10 at his home race at " + 
"the Italian GP. Giovinazzi was replaced by F2 driver Guanyu Zhou for 2022.";  

const mscText = "Mick Schumacher had a difficult and patient 2021 season, with a best result of P12. The Haas team being dedicated to not " + 
"developing the 2021 car left Mick fighting for P19 on the regular. His moments of low’s included crashing in at Monaco, Hungary and france. " + 
"Moments of brilliance included a suburb battle with a wounded Max Vertappen in Hungary, as well as making Q2 in France and Turkey.";  

const kubText = "Robert Kubica filled in a super sub for Alfa Romeo’s Kimi Raikonen after he tested positive for COVID-19, deputising for " + 
"the Finn at the Dutch and Italian GP. Kubica managed a 15th and 14th place finishes at the two races, being impressive given he had minimal " + 
"practice sessions. ";  

const mazText = "Mazepin had a lonely and similar to his teammate a difficult 2021 season, in the worst car on the grid. The Russian managed " + 
"a best finish of P14 at the Baku GP. Moments of low’s included aggressive defending against his teammate in the Netherlands and Baku, as well " + 
"as numerous crashes and spins across multiple races. The Russian driver missed the final race in Abu Dhabi after testing positive to COVID-19. " + 
"He was given the nickname ‘Mazespin’ by F1 fans.";  

function DriverCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <DriverCard src={max}
                            text = {verText}
                            label = 'Max Verstappen 1st (395.5)'/>

                        <DriverCard src={ham}
                            text = {hamText}
                            label = 'Lewis Hamilton 2nd (387.5)'/>

                        <DriverCard src={bot}
                            text = {botText}
                            label = 'Valtteri Bottas 3rd (226)'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <DriverCard src={per}
                            text = {perText}
                            label = 'Sergio Perez 4th (190)'/>

                        <DriverCard src={sai}
                            text = {saiText}
                            label = 'Carlos Sainz Jr. 5th (164.5)'/>

                        <DriverCard src={nor}
                            text = {norText}
                            label = 'Lando Norris 6th (160)'/>

                    </ul>
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <DriverCard src={lec}
                            text = {lecText}
                            label = 'Charles Leclerc 7th (159)'/>

                        <DriverCard src={ric}
                            text = {ricText}
                            label = 'Daniel Ricciardo 8th (115)'/>

                        <DriverCard src={gas}
                            text = {gasText}
                            label = 'Pierre Gasly 9th (110)'/>
                            
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <DriverCard src={alo}
                            text = {aloText}
                            label = 'Fernando Alonso 10th (81)'/>

                    <DriverCard src={oco}
                            text = {ocoText}
                            label = 'Esteban Ocon 11th (74)'/>

                        <DriverCard src={vet}
                            text = {vetText}
                            label = 'Sebastian Vettel 12th (43)'/>

                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <DriverCard src={str}
                            text = {strText}
                            label = 'Lance Stroll 13th (34)'/>

                        <DriverCard src={tsu}
                            text = {tsuText}
                            label = 'Yuki Tsunoda 14th (32)'/>

                        <DriverCard src={rus}
                            text = {rusText}
                            label = 'George Russell 15th (16)'/>
                    </ul>
                </div>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                    <DriverCard src={rai}
                            text = {raiText}
                            label = 'Kimi Raikkonen 16th (10)'/>
                    <DriverCard src={lat}
                            text = {latText}
                            label = 'Nicholas Latifi 17th (7)'/>

                    <DriverCard src={gio}
                            text = {gioText}
                            label = 'Antonio Giovinazzi 18th (3)'/>

                    </ul>
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <DriverCard src={msc}
                            text = {mscText}
                            label = 'Mick Schumacher 19th (0)'/>

                        <DriverCard src={kub}
                            text = {kubText}
                            label = 'Robert Kubica 20th (0)'/>

                        <DriverCard src={maz}
                            text = {mazText}
                            label = 'Nikita Mazepin 20th (0)'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DriverCards
