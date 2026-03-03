/* ============================================================
   American Studies OST Mastery — Shared Question Bank
   FILE: /amstud_bank.js  (MUST be in repo root)

   This file defines:
     const AMSTUD_BANK = [...]
     window.AMSTUD_BANK = AMSTUD_BANK
     window.AMSTUD_BANK_VERSION = "..."

   Notes:
   - Game 1 uses global const AMSTUD_BANK (not window) and only needs {choices[4], answerIndex}
   - Game 2 requires: tags include "G2" AND type "select-two" (or similar) AND answerIndices[2]
   - Game 3 requires: tag "Best Explains" OR type "best-explains" OR tags include "G3"
   - Game 4 requires: type "sequence-turning-point" OR tags include "G4" AND events[4], correctOrder[4], turningPoint
   - Game 5 requires: type "bullet-match", tags include "G5", left[4], right[4], matchIndex[4] (rightIndex -> leftIndex)
   - Game 6 requires: type "cause-effect-chain", tags include "G6", chain[4], correctOrder[4]
============================================================ */

const AMSTUD_BANK = [

/* =========================
   GAME 1 (G1) — Cause & Effect MCQ (28)
   required: stem, choices[4], answerIndex
========================= */
{ id:"G1-001", cs:"CS 1 — Source Credibility", tags:["G1"], tag:"Cause & Effect",
  stem:"A historian claims one political cartoon proves that most Americans supported immigration restrictions in 1890. Which detail most weakens the claim?",
  choices:["The cartoon appeared during an election year","The cartoon reflects one artist’s viewpoint, not national opinion","The cartoon labels political parties","The cartoon was printed in a newspaper"],
  answerIndex:1, hint:"One source rarely proves nationwide agreement." },

{ id:"G1-002", cs:"CS 8 — Industrialization", tags:["G1"], tag:"Cause & Effect",
  stem:"Which change best shows how mechanized farming transformed the economy?",
  choices:["More farm workers were needed to harvest crops","Farm output increased while fewer workers were needed","Factories became less efficient","Cities lost population as people returned to rural life"],
  answerIndex:1, hint:"Machines increased output and reduced labor needs." },

{ id:"G1-003", cs:"CS 8 — Corporations", tags:["G1"], tag:"Cause & Effect",
  stem:"Which development most directly helped corporations grow into national businesses?",
  choices:["Railroads and national shipping networks","An end to immigration","The disappearance of factories","A return to barter instead of currency"],
  answerIndex:0, hint:"Transportation networks expanded markets." },

{ id:"G1-004", cs:"CS 8 — Urbanization", tags:["G1"], tag:"Cause & Effect",
  stem:"Rapid urbanization in the late 1800s most commonly caused which city problem?",
  choices:["Overcrowded housing and unsanitary conditions","More farmland near downtown areas","Lower demand for factory workers","Fewer immigrants arriving in cities"],
  answerIndex:0, hint:"Population growth outpaced infrastructure." },

{ id:"G1-005", cs:"CS 8 — Technology", tags:["G1"], tag:"Cause & Effect",
  stem:"New technologies like electric lighting and telephones most directly affected industry by",
  choices:["improving coordination and efficiency","eliminating the need for factories","ending the need for transportation","reducing the size of cities"],
  answerIndex:0, hint:"Tech improved communication and productivity." },

{ id:"G1-006", cs:"CS 9 — Immigration", tags:["G1"], tag:"Cause & Effect",
  stem:"What factor most directly pulled immigrants into U.S. cities around 1900?",
  choices:["Demand for industrial labor","Disappearance of factory jobs","Closure of public transit","Reduction of urban housing"],
  answerIndex:0, hint:"Jobs were the biggest pull factor." },

{ id:"G1-007", cs:"CS 11 — Progressivism", tags:["G1"], tag:"Cause & Effect",
  stem:"Progressive reformers most often argued government should",
  choices:["take a larger role in regulating business and improving conditions","end elections to reduce corruption","ban labor unions to protect business","stop public education programs"],
  answerIndex:0, hint:"Progressives favored reform and regulation." },

{ id:"G1-008", cs:"CS 11 — Muckrakers", tags:["G1"], tag:"Cause & Effect",
  stem:"The most common effect of muckraker journalism was that it",
  choices:["exposed problems and increased public pressure for reform","ended immigration by changing the Constitution","eliminated political parties","replaced factories with farms"],
  answerIndex:0, hint:"Exposure → pressure → reform." },

{ id:"G1-009", cs:"CS 11 — Trusts", tags:["G1"], tag:"Cause & Effect",
  stem:"Laissez-faire policies toward big business contributed most directly to",
  choices:["the rise of trusts and monopolies","the end of corporate growth","the elimination of wage labor","the disappearance of railroads"],
  answerIndex:0, hint:"Less regulation enabled consolidation." },

{ id:"G1-010", cs:"CS 7 — Organized Labor", tags:["G1"], tag:"Cause & Effect",
  stem:"Which condition most directly contributed to the growth of labor unions in the late 1800s?",
  choices:["Long hours and unsafe working conditions","Higher wages for all workers","Government ownership of factories","A surplus of farmland jobs"],
  answerIndex:0, hint:"Workers organized to address harsh conditions." },

{ id:"G1-011", cs:"CS 7 — Labor Conflict", tags:["G1"], tag:"Cause & Effect",
  stem:"Violence during major strikes in the late 1800s often occurred because",
  choices:["owners and government used force to break strikes","workers refused to negotiate with anyone","factories shut down permanently","immigration stopped completely"],
  answerIndex:0, hint:"Force was used to protect property and production." },

{ id:"G1-012", cs:"CS 6 — Reconstruction", tags:["G1"], tag:"Cause & Effect",
  stem:"After federal troops left the South in 1877, which outcome became more likely?",
  choices:["Jim Crow laws and voter suppression expanded","Segregation ended quickly","Black voting rights were fully protected","Former Confederates lost political power permanently"],
  answerIndex:0, hint:"Redeemer governments reversed many gains." },

{ id:"G1-013", cs:"CS 6 — Plessy", tags:["G1"], tag:"Cause & Effect",
  stem:"The Supreme Court decision in Plessy v. Ferguson (1896) most directly led to",
  choices:["legal support for segregation under 'separate but equal'","the immediate end of segregation","universal voting rights enforcement","the creation of the FBI"],
  answerIndex:0, hint:"Plessy validated segregation laws." },

{ id:"G1-014", cs:"CS 4 — Declaration", tags:["G1"], tag:"Cause & Effect",
  stem:"According to the Declaration of Independence, if a government violates natural rights, the people may",
  choices:["alter or abolish it","suspend all elections forever","end all taxation permanently","abolish courts immediately"],
  answerIndex:0, hint:"Consent requires the right to change government." },

{ id:"G1-015", cs:"CS 5 — Northwest Ordinance", tags:["G1"], tag:"Cause & Effect",
  stem:"Which result best reflects one precedent established by the Northwest Ordinance?",
  choices:["New territories could become states after meeting requirements","States could ignore the U.S. Constitution","Congress could eliminate public education","Territories could form monarchies"],
  answerIndex:0, hint:"It set rules for territorial government and statehood." },

{ id:"G1-016", cs:"CS 10 — Urban Life", tags:["G1"], tag:"Cause & Effect",
  stem:"Which city improvement most directly responded to problems caused by rapid urban growth?",
  choices:["Expanded sanitation systems and clean water efforts","Elimination of public schools","Replacement of factories with farms","Ending all immigration"],
  answerIndex:0, hint:"Sanitation addressed disease and overcrowding." },

{ id:"G1-017", cs:"CS 11 — 17th Amendment", tags:["G1"], tag:"Cause & Effect",
  stem:"The 17th Amendment was intended to reduce corruption by",
  choices:["creating direct election of U.S. senators","ending political parties","abolishing the Supreme Court","restricting voting to property owners"],
  answerIndex:0, hint:"Direct election reduced machine influence in state legislatures." },

{ id:"G1-018", cs:"CS 11 — 19th Amendment", tags:["G1"], tag:"Cause & Effect",
  stem:"The ratification of the 19th Amendment most directly resulted in",
  choices:["expanded voting rights for women nationwide","the end of all discrimination","the start of World War I","the creation of Social Security"],
  answerIndex:0, hint:"Women gained the right to vote." },

{ id:"G1-019", cs:"CS 11 — Conservation", tags:["G1"], tag:"Cause & Effect",
  stem:"Progressive conservation policies were primarily a response to",
  choices:["overuse of natural resources by industry and settlement","a shortage of factory labor","the end of westward expansion","the abolition of railroads"],
  answerIndex:0, hint:"Conservation addressed resource depletion." },

{ id:"G1-020", cs:"CS 8 — Assembly Lines", tags:["G1"], tag:"Cause & Effect",
  stem:"A major effect of assembly-line production was that it",
  choices:["increased output and lowered costs of goods","ended the use of machinery","reduced urban growth by creating farm jobs","eliminated immigration to cities"],
  answerIndex:0, hint:"Standardized processes increased production." },

{ id:"G1-021", cs:"CS 12 — WWI Aftermath", tags:["G1"], tag:"Cause & Effect",
  stem:"Which factor most contributed to U.S. isolationism after World War I?",
  choices:["Disillusionment with war and fear of foreign entanglements","A complete end to international trade","A requirement to join the League of Nations","A shortage of industrial capacity"],
  answerIndex:0, hint:"Americans wanted to avoid another major war." },

{ id:"G1-022", cs:"CS 13 — Great Migration", tags:["G1"], tag:"Cause & Effect",
  stem:"The Great Migration was driven primarily by",
  choices:["push factors in the South and job opportunities in Northern cities","free farmland in the West","the end of factories in the North","a new constitutional amendment banning travel"],
  answerIndex:0, hint:"Jobs + escape from discrimination were key drivers." },

{ id:"G1-023", cs:"CS 11 — Consumer Protection", tags:["G1"], tag:"Cause & Effect",
  stem:"Public outrage after muckraker reports on unsafe food and drugs helped lead to",
  choices:["stronger consumer protection laws","the repeal of the Bill of Rights","the end of public health programs","the elimination of factories"],
  answerIndex:0, hint:"Reform followed exposure of unsafe practices." },

{ id:"G1-024", cs:"CS 8 — Farming", tags:["G1"], tag:"Cause & Effect",
  stem:"Which effect best matches the rise of mechanized farming?",
  choices:["Lower production and higher food prices","Higher production and lower cost per unit","An end to commercial agriculture","A shift from factory workers to farm workers"],
  answerIndex:1, hint:"Mechanization increased efficiency and output." },

{ id:"G1-025", cs:"CS 11 — Local Reform", tags:["G1"], tag:"Cause & Effect",
  stem:"City reform movements often tried to reduce political machine power by",
  choices:["expanding civil service and professional management","ending all city services","banning newspapers","abolishing taxes"],
  answerIndex:0, hint:"Professionalization reduced patronage." },

{ id:"G1-026", cs:"CS 6 — Jim Crow", tags:["G1"], tag:"Cause & Effect",
  stem:"Poll taxes, literacy tests, and grandfather clauses were primarily designed to",
  choices:["disenfranchise African American voters","increase voter turnout for everyone","expand federal power in foreign policy","reduce industrial production"],
  answerIndex:0, hint:"They were tools of voter suppression." },

{ id:"G1-027", cs:"CS 9 — Nativism", tags:["G1"], tag:"Cause & Effect",
  stem:"Nativist sentiment in the late 1800s and early 1900s often led to",
  choices:["support for immigration restriction policies","the abolition of industrial jobs","the end of urban growth","universal acceptance of immigrants"],
  answerIndex:0, hint:"Fear and prejudice fueled restriction efforts." },

{ id:"G1-028", cs:"CS 8 — Skyscrapers", tags:["G1"], tag:"Cause & Effect",
  stem:"Steel production and new construction methods most directly contributed to",
  choices:["the rise of skyscrapers and denser cities","the end of city growth","the elimination of railroads","a return to rural living"],
  answerIndex:0, hint:"Steel enabled taller, stronger buildings." },

/* =========================
   GAME 2 (G2) — Select TWO (28)
   required: type:"select-two", tags include "G2", stem, choices[4], answerIndices[2]
========================= */
{ id:"G2-001", cs:"CS 1 — Source Credibility", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons historians prefer multiple sources when studying an event.",
  choices:["To corroborate details across accounts","To eliminate all bias from history","To compare perspectives and context","To avoid using any primary sources"],
  answerIndices:[0,2], hint:"Corroboration + perspective." },

{ id:"G2-002", cs:"CS 8 — Industrialization", tags:["G2"], type:"select-two",
  stem:"Select TWO effects of industrialization in the late 1800s.",
  choices:["More factory work replaced farm work","Most people moved from cities to rural areas","Urban population increased rapidly","Machines reduced production efficiency"],
  answerIndices:[0,2], hint:"Factory work rose; cities grew." },

{ id:"G2-003", cs:"CS 8 — Corporations", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons large corporations grew during industrialization.",
  choices:["Access to national markets","A ban on railroads","New production and management methods","A complete end to immigration"],
  answerIndices:[0,2], hint:"Markets + organization/efficiency." },

{ id:"G2-004", cs:"CS 10 — Immigration", tags:["G2"], type:"select-two",
  stem:"Select TWO common challenges faced by immigrants in crowded cities.",
  choices:["Overcrowded housing","Easy access to clean water everywhere","Diseases spread quickly","Unlimited high-paying jobs for all"],
  answerIndices:[0,2], hint:"Tenements + public health problems." },

{ id:"G2-005", cs:"CS 11 — Progressivism", tags:["G2"], type:"select-two",
  stem:"Select TWO goals of Progressive Era reformers.",
  choices:["Reduce corruption in government","Expand child labor in factories","Improve public health and safety","Eliminate all regulation of business"],
  answerIndices:[0,2], hint:"Reform politics + improve conditions." },

{ id:"G2-006", cs:"CS 7 — Labor", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons workers formed labor unions.",
  choices:["Unsafe working conditions","Guaranteed high wages for everyone","Long work hours","More free farmland in the West"],
  answerIndices:[0,2], hint:"Safety + hours were major concerns." },

{ id:"G2-007", cs:"CS 6 — Reconstruction", tags:["G2"], type:"select-two",
  stem:"Select TWO outcomes of ending Reconstruction in the South.",
  choices:["Rise of Jim Crow laws","Expansion of Black voting rights protections","Redeemer control of state governments","Immediate and lasting racial equality"],
  answerIndices:[0,2], hint:"Rights were restricted; segregation expanded." },

{ id:"G2-008", cs:"CS 6 — Jim Crow", tags:["G2"], type:"select-two",
  stem:"Select TWO tools used to suppress voting after Reconstruction.",
  choices:["Poll taxes","The 19th Amendment","Literacy tests","The Northwest Ordinance"],
  answerIndices:[0,2], hint:"Taxes + tests were common." },

{ id:"G2-009", cs:"CS 11 — Amendments", tags:["G2"], type:"select-two",
  stem:"Select TWO Progressive Era constitutional changes.",
  choices:["17th Amendment","22nd Amendment","19th Amendment","25th Amendment"],
  answerIndices:[0,2], hint:"Direct senators + women’s suffrage." },

{ id:"G2-010", cs:"CS 11 — Muckrakers", tags:["G2"], type:"select-two",
  stem:"Select TWO ways muckrakers influenced reform.",
  choices:["Raised public awareness of corruption","Eliminated all newspapers","Helped build support for new laws","Ended urbanization overnight"],
  answerIndices:[0,2], hint:"Awareness + pressure for laws." },

{ id:"G2-011", cs:"CS 8 — Technology", tags:["G2"], type:"select-two",
  stem:"Select TWO inventions that improved communication and supported national markets.",
  choices:["Telephone","Cotton gin","Telegraph/telephone networks","Stone tools"],
  answerIndices:[0,2], hint:"Communication tech matters." },

{ id:"G2-012", cs:"CS 8 — Farming", tags:["G2"], type:"select-two",
  stem:"Select TWO effects of mechanized farming.",
  choices:["Higher agricultural output","Lower output due to fewer workers","Fewer workers needed on farms","Increased need for hand labor everywhere"],
  answerIndices:[0,2], hint:"Output up; labor needs down." },

{ id:"G2-013", cs:"CS 9 — Urbanization", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons cities grew rapidly during industrialization.",
  choices:["Factory jobs attracted workers","Most factories closed in cities","Immigration increased urban populations","Railroads made cities impossible"],
  answerIndices:[0,2], hint:"Jobs + immigration boosted city growth." },

{ id:"G2-014", cs:"CS 5 — Northwest Ordinance", tags:["G2"], type:"select-two",
  stem:"Select TWO principles encouraged by the Northwest Ordinance.",
  choices:["Education support","Creation of monarchies","Natural rights protections","Ending representative government"],
  answerIndices:[0,2], hint:"Education + rights." },

{ id:"G2-015", cs:"CS 4 — Declaration", tags:["G2"], type:"select-two",
  stem:"Select TWO principles emphasized in the Declaration of Independence.",
  choices:["Unalienable rights","Unlimited government power","Consent of the governed","Hereditary monarchy"],
  answerIndices:[0,2], hint:"Rights + consent." },

{ id:"G2-016", cs:"CS 11 — Consumer Protection", tags:["G2"], type:"select-two",
  stem:"Select TWO areas Progressives targeted with regulation.",
  choices:["Food and drug safety","Abolishing all courts","Workplace safety","Ending public health"],
  answerIndices:[0,2], hint:"Safety reforms were central." },

{ id:"G2-017", cs:"CS 7 — Strikes", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons strikes sometimes turned violent.",
  choices:["Owners hired armed guards or sought government intervention","Workers always supported violence","Police or troops were used to restore order","All strikes were peaceful by law"],
  answerIndices:[0,2], hint:"Force was used to break strikes." },

{ id:"G2-018", cs:"CS 12 — Isolationism", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons the U.S. moved toward isolationism after WWI.",
  choices:["War disillusionment","Mandatory League membership","Fear of entangling alliances","A complete end to overseas trade"],
  answerIndices:[0,2], hint:"Disillusionment + entanglements." },

{ id:"G2-019", cs:"CS 13 — Great Migration", tags:["G2"], type:"select-two",
  stem:"Select TWO factors that encouraged the Great Migration.",
  choices:["Industrial jobs in Northern cities","More cotton jobs in the Deep South","Push factors like discrimination/violence","Free coastal land grants to everyone"],
  answerIndices:[0,2], hint:"Push + pull." },

{ id:"G2-020", cs:"CS 8 — Heavy Industry", tags:["G2"], type:"select-two",
  stem:"Select TWO industries strongly associated with late 1800s industrial growth.",
  choices:["Steel","Handcrafted cottage weaving only","Oil","Stone-age toolmaking"],
  answerIndices:[0,2], hint:"Think steel + oil." },

{ id:"G2-021", cs:"CS 9 — Nativism", tags:["G2"], type:"select-two",
  stem:"Select TWO claims commonly made by nativist groups.",
  choices:["Immigrants threatened jobs/wages","Immigration had no impact on cities","Immigrants threatened culture or politics","All immigrants were identical in background"],
  answerIndices:[0,2], hint:"Jobs + culture/politics were targets." },

{ id:"G2-022", cs:"CS 11 — Political Reform", tags:["G2"], type:"select-two",
  stem:"Select TWO reforms intended to reduce political corruption.",
  choices:["Civil service reforms","Patronage expansion","Direct primaries","Secret ballot"],
  answerIndices:[0,2], hint:"Merit systems + voter protections." },

{ id:"G2-023", cs:"CS 8 — Transportation", tags:["G2"], type:"select-two",
  stem:"Select TWO transportation changes that supported national markets.",
  choices:["Railroad expansion","Removal of all bridges","Refrigerated rail cars/modern shipping","Ending all canals and roads"],
  answerIndices:[0,2], hint:"Rail + shipping tech." },

{ id:"G2-024", cs:"CS 10 — Public Health", tags:["G2"], type:"select-two",
  stem:"Select TWO public health issues in crowded tenements.",
  choices:["Tuberculosis spread","Unlimited clean water in every building","Cholera outbreaks","No contagious diseases existed"],
  answerIndices:[0,2], hint:"TB + cholera were common threats." },

{ id:"G2-025", cs:"CS 11 — Antitrust", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons antitrust actions were supported by many Progressives.",
  choices:["Reduce monopoly power","Eliminate all competition","Protect consumers and smaller businesses","Guarantee one company controls the market"],
  answerIndices:[0,2], hint:"Limit monopolies + protect competition." },

{ id:"G2-026", cs:"CS 8 — Labor Shift", tags:["G2"], type:"select-two",
  stem:"Select TWO changes that reflect the shift from rural to urban living.",
  choices:["More people lived near factories","Most Americans moved to isolated farms","City infrastructure faced strain","Urban housing shortages increased"],
  answerIndices:[0,2], hint:"Factories + strain." },

{ id:"G2-027", cs:"CS 11 — Reform Coalitions", tags:["G2"], type:"select-two",
  stem:"Select TWO groups that often supported Progressive reforms.",
  choices:["Middle-class reformers","Some journalists and activists","All monopolies seeking no regulation","Slaveholders as a political bloc"],
  answerIndices:[0,1], hint:"Reformers + muckrakers/activists." },

{ id:"G2-028", cs:"CS 8 — Efficiency", tags:["G2"], type:"select-two",
  stem:"Select TWO ways machines changed production in factories.",
  choices:["Increased speed and output","Made production slower and costlier","Reduced need for some skilled labor","Eliminated all standardization"],
  answerIndices:[0,2], hint:"Efficiency + labor shifts." },

/* =========================
   GAME 3 (G3) — Best Explains MCQ (28)
   required: tag:"Best Explains" or type:"best-explains" or tags include "G3"
   plus stem, choices[4], answerIndex
========================= */
{ id:"G3-001", cs:"CS 8 — Industrialization", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why urban populations grew during industrialization?",
  choices:["Factories in cities created jobs that attracted workers","Farm work became more profitable than factory work","Cities banned immigration","Railroads made cities unnecessary"],
  answerIndex:0, hint:"Jobs attracted people to cities." },

{ id:"G3-002", cs:"CS 8 — Mechanization", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how mechanized farming affected labor?",
  choices:["Machines replaced some human labor, reducing farm labor needs","Machines required more workers per acre","Mechanization ended commercial farming","Mechanization eliminated food production"],
  answerIndex:0, hint:"Machines reduced labor needs." },

{ id:"G3-003", cs:"CS 11 — Progressivism", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the main idea behind Progressive reforms?",
  choices:["Government should address problems caused by rapid industrial growth","Government should avoid all regulation regardless of harm","Only private charity should solve social problems","The Constitution should be suspended during reform"],
  answerIndex:0, hint:"Progressives favored active reform." },

{ id:"G3-004", cs:"CS 11 — Muckrakers", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why muckrakers were influential?",
  choices:["They exposed problems that increased public demand for reform","They ended elections by replacing legislatures","They prevented all immigration into cities","They eliminated factories through court orders"],
  answerIndex:0, hint:"Exposure created pressure." },

{ id:"G3-005", cs:"CS 7 — Labor", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why labor unions grew in the late 1800s?",
  choices:["Workers sought better wages, hours, and safer conditions","Workers wanted to increase child labor","Workers opposed all workplace rules","Workers wanted fewer workplace protections"],
  answerIndex:0, hint:"Unions formed to improve conditions." },

{ id:"G3-006", cs:"CS 6 — Jim Crow", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how Jim Crow laws affected the South?",
  choices:["They institutionalized segregation and restricted civil rights","They ensured equal access to voting for all","They abolished segregation immediately","They eliminated discrimination entirely"],
  answerIndex:0, hint:"Jim Crow enforced segregation." },

{ id:"G3-007", cs:"CS 6 — Plessy", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the impact of Plessy v. Ferguson (1896)?",
  choices:["It provided legal support for segregation under 'separate but equal'","It declared segregation unconstitutional nationwide","It created the 14th Amendment","It required states to integrate schools immediately"],
  answerIndex:0, hint:"Plessy validated segregation laws." },

{ id:"G3-008", cs:"CS 4 — Declaration", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains 'consent of the governed'?",
  choices:["Government power is legitimate only if people agree to it","Government power comes from kings","Government should ignore public opinion","Government should abolish elections"],
  answerIndex:0, hint:"Consent = legitimacy from the people." },

{ id:"G3-009", cs:"CS 5 — Northwest Ordinance", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why the Northwest Ordinance mattered?",
  choices:["It set a model for territorial government and future statehood","It ended representative government in territories","It removed all rights protections","It created the Electoral College"],
  answerIndex:0, hint:"It set the rules for expansion/statehood." },

{ id:"G3-010", cs:"CS 8 — Corporations", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how railroads supported industrialization?",
  choices:["They moved goods and people quickly, connecting national markets","They reduced trade by isolating regions","They eliminated the need for factories","They ended immigration to cities"],
  answerIndex:0, hint:"Railroads connected markets." },

{ id:"G3-011", cs:"CS 9 — Tenements", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why disease spread in many tenements?",
  choices:["Overcrowding and poor sanitation increased transmission","Tenements had too much clean water","Cities had no population growth","Public health efforts eliminated germs"],
  answerIndex:0, hint:"Overcrowding + sanitation problems." },

{ id:"G3-012", cs:"CS 11 — 17th Amendment", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why the 17th Amendment was adopted?",
  choices:["To reduce corruption by allowing direct election of senators","To end elections for senators permanently","To increase patronage in state legislatures","To limit voting to wealthy citizens"],
  answerIndex:0, hint:"Direct election reduced machine influence." },

{ id:"G3-013", cs:"CS 11 — 19th Amendment", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the significance of the 19th Amendment?",
  choices:["It expanded democracy by granting women the right to vote","It ended all discrimination in the U.S.","It created the Supreme Court","It limited voting to property owners"],
  answerIndex:0, hint:"Women’s suffrage expanded participation." },

{ id:"G3-014", cs:"CS 11 — Antitrust", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why antitrust laws were supported?",
  choices:["They limited monopoly power and promoted competition","They guaranteed one company dominates markets","They ended all business regulation","They made monopolies legally required"],
  answerIndex:0, hint:"Antitrust combats monopolies." },

{ id:"G3-015", cs:"CS 8 — New Technology", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why new inventions boosted productivity?",
  choices:["Machines increased speed, output, and standardization","Machines reduced output and increased cost","Inventions eliminated communication","Inventions stopped urban growth"],
  answerIndex:0, hint:"Efficiency increased." },

{ id:"G3-016", cs:"CS 12 — Isolationism", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains U.S. reluctance to join international commitments after WWI?",
  choices:["Many feared entangling alliances and another costly war","The U.S. ended all international trade","Congress abolished diplomacy","The Constitution banned treaties"],
  answerIndex:0, hint:"Fear of entanglement mattered." },

{ id:"G3-017", cs:"CS 13 — Great Migration", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why many African Americans moved North during the Great Migration?",
  choices:["They sought industrial jobs and escaped discrimination/violence","They received free farmland in the Rockies","They were required by a new law","They moved because factories closed in the North"],
  answerIndex:0, hint:"Jobs + push factors." },

{ id:"G3-018", cs:"CS 7 — Strikes", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why government sometimes intervened in strikes?",
  choices:["Officials aimed to restore order and protect commerce/production","Officials always supported unions over owners","Officials eliminated wages during strikes","Officials ended elections in strike areas"],
  answerIndex:0, hint:"Order + economic stability." },

{ id:"G3-019", cs:"CS 8 — Urban Services", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why urban infrastructure struggled during rapid growth?",
  choices:["Population increased faster than sewers, housing, and clean water systems","Cities had too many empty homes","Public transit made cities shrink","Immigration stopped completely"],
  answerIndex:0, hint:"Growth outpaced infrastructure." },

{ id:"G3-020", cs:"CS 8 — Farming Output", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why food production increased in the late 1800s?",
  choices:["Mechanized equipment allowed more land to be farmed efficiently","Fewer crops were planted each year","Farmers abandoned new technology","Cities eliminated agriculture"],
  answerIndex:0, hint:"Mechanization increased efficiency." },

{ id:"G3-021", cs:"CS 11 — Reform Methods", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why reformers pushed for food and drug laws?",
  choices:["Consumers needed protection from unsafe products","Businesses requested fewer safety standards","Cities wanted to increase disease spread","Courts banned public health policies"],
  answerIndex:0, hint:"Consumer protection." },

{ id:"G3-022", cs:"CS 9 — Nativism", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why nativism increased during rapid immigration?",
  choices:["Some feared economic competition and cultural change","All citizens welcomed every immigrant equally","Factories disappeared due to immigration","Immigration ended urban growth"],
  answerIndex:0, hint:"Fear of change and competition." },

{ id:"G3-023", cs:"CS 6 — Voting Suppression", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the purpose of poll taxes and literacy tests?",
  choices:["To restrict voting by targeting certain groups","To increase voting access for everyone","To create new states","To regulate interstate commerce"],
  answerIndex:0, hint:"They were designed to disenfranchise." },

{ id:"G3-024", cs:"CS 8 — Mass Production", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why mass production lowered consumer costs?",
  choices:["Standardization and volume reduced per-unit cost","Handcrafting made everything cheaper","Factories produced fewer goods","Railroads ended shipping"],
  answerIndex:0, hint:"Economies of scale." },

{ id:"G3-025", cs:"CS 11 — City Reform", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why cities adopted civil service reforms?",
  choices:["To reduce patronage and increase merit-based hiring","To increase corruption","To eliminate city services","To end elections"],
  answerIndex:0, hint:"Merit systems curb machines." },

{ id:"G3-026", cs:"CS 5 — Education", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why the Northwest Ordinance encouraged education?",
  choices:["Education was seen as essential to republican self-government","Education was viewed as unnecessary for citizens","Education was intended to replace courts","Education was banned in territories"],
  answerIndex:0, hint:"Republics depend on informed citizens." },

{ id:"G3-027", cs:"CS 8 — Industry & Cities", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how heavy industry contributed to urban growth?",
  choices:["Factories clustered in cities, attracting workers and services","Factories avoided cities completely","Industry eliminated jobs","Industry ended immigration"],
  answerIndex:0, hint:"Industry clusters draw people." },

{ id:"G3-028", cs:"CS 11 — Progressivism Summary", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the Progressive belief about government and the economy?",
  choices:["Government can reduce harm caused by industrial capitalism through regulation","Government should never act even when harm occurs","Only monopolies should set rules","Courts should replace elections"],
  answerIndex:0, hint:"Regulation to address harm." },

/* =========================
   GAME 4 (G4) — Sequence / Turning Point (28)
   required: events[4], correctOrder[4], turningPoint (0–3)
========================= */
{ id:"G4-001", cs:"CS 8 — Industrialization", tags:["G4"], type:"sequence-turning-point",
  stem:"Place the steps in order and identify the turning point that accelerates industrial growth.",
  events:["Railroads expand national shipping","Factories adopt mass production","Costs drop and output rises","National markets grow quickly"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Mass production is the pivot." },

{ id:"G4-002", cs:"CS 8 — Urbanization", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the process that creates urban overcrowding and identify the turning point.",
  events:["Factory jobs attract workers","City population grows rapidly","Housing supply lags behind","Overcrowded tenements spread disease"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Housing shortage triggers the crisis." },

{ id:"G4-003", cs:"CS 11 — Reform", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence reform pressure and identify the turning point leading to new laws.",
  events:["Journalists expose unsafe food/drugs","Public outrage increases","Lawmakers pass safety regulations","Industry practices change"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Public outrage shifts politics." },

{ id:"G4-004", cs:"CS 7 — Labor", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how strikes can escalate and identify the turning point.",
  events:["Workers demand better conditions","Employers refuse demands","Strike disrupts production","Police/troops intervene and violence erupts"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Disruption forces a response." },

{ id:"G4-005", cs:"CS 6 — Voting Rights", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence post-Reconstruction voter suppression and identify the turning point.",
  events:["Reconstruction ends","Southern states pass new voting barriers","African American turnout drops sharply","One-party rule strengthens"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Barriers (poll taxes/tests) are the pivot." },

{ id:"G4-006", cs:"CS 6 — Segregation", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the institutionalization of segregation and identify the turning point.",
  events:["Jim Crow laws expand","Plessy v. Ferguson upholds 'separate but equal'","Segregation becomes entrenched","Civil rights challenges grow later"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Plessy provides legal backing." },

{ id:"G4-007", cs:"CS 11 — 17th Amendment", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how corruption concerns led to the 17th Amendment and identify the turning point.",
  events:["Machine politics influence state legislatures","Public demands political reform","17th Amendment establishes direct election of senators","Voter influence over Senate increases"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Direct election is the key shift." },

{ id:"G4-008", cs:"CS 11 — Women’s Suffrage", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the expansion of women’s suffrage and identify the turning point.",
  events:["Suffrage movements organize nationally","States adopt women’s voting in some elections","19th Amendment is ratified","Women vote nationwide"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Ratification is the pivot." },

{ id:"G4-009", cs:"CS 8 — Mechanized Farming", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how mechanized farming affected labor and identify the turning point.",
  events:["New machines are adopted on farms","Farm output increases","Fewer workers are needed per acre","More workers move to cities for jobs"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Reduced labor needs drive migration." },

{ id:"G4-010", cs:"CS 9 — Immigration & Cities", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how immigration reshaped cities and identify the turning point.",
  events:["Immigrants arrive seeking opportunity","They settle near factories and ethnic communities form","Urban services become strained","Reform movements push for better housing/sanitation"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Service strain triggers reform pressure." },

{ id:"G4-011", cs:"CS 11 — Conservation", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence conservation reform and identify the turning point.",
  events:["Resources are heavily exploited","Public concern about depletion grows","Government sets aside protected lands","Conservation policy expands"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Public concern drives action." },

{ id:"G4-012", cs:"CS 12 — Isolationism", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the shift to isolationism and identify the turning point.",
  events:["WWI ends","Americans become disillusioned with war","Leaders avoid foreign entanglements","Isolationist policies expand"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Disillusionment changes attitudes." },

{ id:"G4-013", cs:"CS 13 — Great Migration", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the Great Migration and identify the turning point.",
  events:["Push factors increase in the South","Northern industries need workers","Migration accelerates to Northern cities","New cultural and political communities form"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Acceleration occurs after jobs + push factors align." },

{ id:"G4-014", cs:"CS 4 — Declaration", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the logic of consent and identify the turning point.",
  events:["People hold natural rights","Government is formed by consent","Government violates rights","People alter/abolish government"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Violation triggers the right to change government." },

{ id:"G4-015", cs:"CS 5 — Northwest Ordinance", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence statehood steps and identify the turning point.",
  events:["Territory establishes government","Population grows to required level","Territory applies for statehood","Congress admits the new state"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Application is the pivot step." },

{ id:"G4-016", cs:"CS 8 — National Markets", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how national markets form and identify the turning point.",
  events:["Transportation improves","Goods move farther and faster","Businesses expand distribution","Consumers access national brands"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Fast, reliable movement changes everything." },

{ id:"G4-017", cs:"CS 11 — City Government Reform", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence city reform and identify the turning point.",
  events:["Machine corruption grows","Reformers demand change","Civil service rules are adopted","Professional management increases"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Civil service adoption is the pivot." },

{ id:"G4-018", cs:"CS 10 — Public Health", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence public health responses and identify the turning point.",
  events:["Disease outbreaks increase","Cities study sanitation problems","Clean water/sewer projects expand","Disease rates decline over time"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Infrastructure investment shifts outcomes." },

{ id:"G4-019", cs:"CS 8 — Labor Shift", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the labor shift and identify the turning point.",
  events:["Factories expand","More wage jobs appear","Workers move from farms to factories","Urban populations grow"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"More wage jobs changes where people live/work." },

{ id:"G4-020", cs:"CS 11 — Regulation", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence business regulation and identify the turning point.",
  events:["Abuses become visible","Public pressure grows","New regulations pass","Business behavior adapts"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Passing laws changes incentives." },

{ id:"G4-021", cs:"CS 7 — Union Strategy", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence union strategy and identify the turning point.",
  events:["Workers organize","Union presents demands","Strike or boycott begins","Employer concedes or conflict escalates"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Work stoppage is the pivot." },

{ id:"G4-022", cs:"CS 9 — Ethnic Neighborhoods", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence formation of ethnic neighborhoods and identify the turning point.",
  events:["Immigrants arrive","People settle near familiar language/culture","Businesses and institutions develop","Neighborhood identity strengthens"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Settlement patterns drive neighborhood formation." },

{ id:"G4-023", cs:"CS 8 — Skyscrapers", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence skyscraper growth and identify the turning point.",
  events:["Steel production expands","Engineering methods improve","Skyscrapers are built","Cities grow denser"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Engineering improvements enable height." },

{ id:"G4-024", cs:"CS 11 — Voting Expansion", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence voting expansion and identify the turning point.",
  events:["Activists organize","Public support increases","Amendment is ratified","Participation increases"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Ratification changes the rules." },

{ id:"G4-025", cs:"CS 12 — Peace Debate", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence postwar peace debate and identify the turning point.",
  events:["Treaty is negotiated","Senate debates obligations","U.S. rejects broad commitments","Policy shifts toward isolationism"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Rejection reshapes foreign policy." },

{ id:"G4-026", cs:"CS 8 — Consumer Culture", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence consumer culture growth and identify the turning point.",
  events:["Mass production increases supply","Prices drop","More consumers buy goods","Advertising expands demand further"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Lower prices broaden markets." },

{ id:"G4-027", cs:"CS 10 — Transit", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence transit expansion and identify the turning point.",
  events:["Cities grow outward","Demand for commuting rises","Streetcars/subways expand","Neighborhood patterns change"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Transit expansion reshapes where people live." },

{ id:"G4-028", cs:"CS 11 — Reform Legacy", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence reform legacy and identify the turning point.",
  events:["Problems intensify","Reform coalitions build","Key laws/amendments pass","Government role expands long-term"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Passing major reforms changes the long-term role of government." },

/* =========================
   GAME 5 (G5) — Bullet Match (28)
   required: left[4], right[4], matchIndex[4] where matchIndex[rightIndex] = leftIndex
========================= */
{ id:"G5-001", tags:["G5"], type:"bullet-match", cs:"CS 8 — Industrialization",
  left:["Shift to factory work","Urban growth","New technology replaces some labor","Increased agricultural production"],
  right:["More wage labor in cities","Overcrowding and sanitation problems","Machines improve efficiency","More output per acre"],
  matchIndex:[0,1,2,3], hint:"Match each consequence to its best description." },

{ id:"G5-002", tags:["G5"], type:"bullet-match", cs:"CS 11 — Progressivism",
  left:["Muckrakers","Antitrust actions","Consumer protection","Political reform"],
  right:["Expose corruption/abuses","Limit monopoly power","Food/drug safety laws","Reduce machine influence"],
  matchIndex:[0,1,2,3], hint:"Connect reform tools to goals." },

{ id:"G5-003", tags:["G5"], type:"bullet-match", cs:"CS 7 — Organized Labor",
  left:["Collective bargaining","Strike","Boycott","Union membership growth"],
  right:["Negotiating as a group","Work stoppage","Refusing to buy goods","More workers organize"],
  matchIndex:[0,1,2,3], hint:"Labor tactics vocabulary." },

{ id:"G5-004", tags:["G5"], type:"bullet-match", cs:"CS 6 — Post-Reconstruction",
  left:["Jim Crow laws","Plessy v. Ferguson","Voter suppression tools","KKK intimidation"],
  right:["Legal segregation expands","'Separate but equal' upheld","Poll taxes/literacy tests","Violence/threats to control politics"],
  matchIndex:[0,1,2,3], hint:"Match policy/case/tactic to effect." },

{ id:"G5-005", tags:["G5"], type:"bullet-match", cs:"CS 4 — Declaration",
  left:["Unalienable rights","Consent of the governed","Equality of rights","Right to alter/abolish"],
  right:["Rights cannot be taken away","Government needs people’s approval","Same basic rights for citizens","People may change harmful government"],
  matchIndex:[0,1,2,3], hint:"Founding ideals." },

{ id:"G5-006", tags:["G5"], type:"bullet-match", cs:"CS 5 — Northwest Ordinance",
  left:["Statehood process","Education support","Natural rights protections","Republican government"],
  right:["Territory → state after requirements","Public schools encouraged","Civil liberties recognized","Elected representatives govern"],
  matchIndex:[0,1,2,3], hint:"Ordinance precedents." },

{ id:"G5-007", tags:["G5"], type:"bullet-match", cs:"CS 10 — Urban Challenges",
  left:["Tenements","Tuberculosis","Cholera","Sanitation reforms"],
  right:["Crowded apartments","Airborne disease spreads","Waterborne outbreaks","Sewers/clean water projects"],
  matchIndex:[0,1,2,3], hint:"Public health in cities." },

{ id:"G5-008", tags:["G5"], type:"bullet-match", cs:"CS 11 — Amendments",
  left:["17th Amendment","19th Amendment","22nd Amendment","25th Amendment"],
  right:["Direct election of senators","Women’s suffrage","Two-term presidential limit","Presidential succession/disability rules"],
  matchIndex:[0,1,2,3], hint:"Match amendment to change." },

{ id:"G5-009", tags:["G5"], type:"bullet-match", cs:"CS 8 — Technology",
  left:["Telephone","Incandescent light","Automobile","Skyscraper"],
  right:["Faster communication","Longer workday/safer lighting","Mass mobility and suburbs","Vertical urban growth"],
  matchIndex:[0,1,2,3], hint:"Tech → effect." },

{ id:"G5-010", tags:["G5"], type:"bullet-match", cs:"CS 7 — Workplace Reform",
  left:["Child labor limits","Safety regulations","Shorter hours","Workers’ compensation"],
  right:["Fewer children in factories","Reduced injury/death rates","Better work-life balance","Support after workplace injuries"],
  matchIndex:[0,1,2,3], hint:"Reforms → outcomes." },

{ id:"G5-011", tags:["G5"], type:"bullet-match", cs:"CS 9 — Immigration Patterns",
  left:["Push factors","Pull factors","Ethnic neighborhoods","Nativism"],
  right:["Poverty/persecution at home","Jobs/opportunity in U.S.","Cultural communities in cities","Anti-immigrant attitudes"],
  matchIndex:[0,1,2,3], hint:"Migration vocabulary." },

{ id:"G5-012", tags:["G5"], type:"bullet-match", cs:"CS 12 — Isolationism",
  left:["War disillusionment","Fear of entanglements","Treaty debates","Reduced intervention"],
  right:["Costs of WWI cause skepticism","Avoid alliances","Senate rejects obligations","Foreign involvement limited"],
  matchIndex:[0,1,2,3], hint:"Post-WWI choices." },

{ id:"G5-013", tags:["G5"], type:"bullet-match", cs:"CS 13 — Great Migration",
  left:["Push from South","Pull to North","Urban cultural change","New political influence"],
  right:["Violence/discrimination","Industrial jobs","Growth of Black neighborhoods","Shifts in voting/activism"],
  matchIndex:[0,1,2,3], hint:"Match cause/effect." },

{ id:"G5-014", tags:["G5"], type:"bullet-match", cs:"CS 8 — Corporate Power",
  left:["Vertical integration","Horizontal integration","Trust/monopoly","Laissez-faire"],
  right:["Control supply chain","Buy out competitors","One firm dominates market","Limited government regulation"],
  matchIndex:[0,1,2,3], hint:"Business organization terms." },

{ id:"G5-015", tags:["G5"], type:"bullet-match", cs:"CS 11 — City Reform",
  left:["Civil service","Secret ballot","Direct primary","Initiative/referendum"],
  right:["Merit hiring","Reduce voter coercion","Voters choose candidates","Direct democracy tools"],
  matchIndex:[0,1,2,3], hint:"Reform methods." },

{ id:"G5-016", tags:["G5"], type:"bullet-match", cs:"CS 8 — Industrial Society",
  left:["Rural to urban shift","Factory system","Mass production","Consumer goods increase"],
  right:["Cities expand","Centralized workplaces","Assembly lines/standardization","More affordable products"],
  matchIndex:[0,1,2,3], hint:"Big picture transitions." },

{ id:"G5-017", tags:["G5"], type:"bullet-match", cs:"CS 7 — Labor Violence",
  left:["Strikebreaking","Injunctions","Pinkertons/guards","Troops/police"],
  right:["Replace workers","Court orders limit strikes","Private security used","Force restores order"],
  matchIndex:[0,1,2,3], hint:"Responses to labor actions." },

{ id:"G5-018", tags:["G5"], type:"bullet-match", cs:"CS 10 — Infrastructure",
  left:["Clean water","Sewer systems","Building codes","Public transit"],
  right:["Lower cholera risk","Improved sanitation","Safer housing","Move workers efficiently"],
  matchIndex:[0,1,2,3], hint:"Urban improvements." },

{ id:"G5-019", tags:["G5"], type:"bullet-match", cs:"CS 11 — Regulation Examples",
  left:["Meat inspection","Drug labeling","Antitrust enforcement","Banking oversight"],
  right:["Safer food supply","Consumer information","Limit monopolies","Stability/consumer protection"],
  matchIndex:[0,1,2,3], hint:"Regulation → purpose." },

{ id:"G5-020", tags:["G5"], type:"bullet-match", cs:"CS 6 — Segregation Effects",
  left:["Separate facilities","Unequal funding","Limited political power","Social control"],
  right:["Division by race","Inferior services for Black citizens","Disenfranchisement","Maintain hierarchy"],
  matchIndex:[0,1,2,3], hint:"Segregation outcomes." },

{ id:"G5-021", tags:["G5"], type:"bullet-match", cs:"CS 8 — Farming Impacts",
  left:["Reaper/tractor","Rail shipment","Cash crops expand","Rural labor declines"],
  right:["Faster harvesting","Broader markets for food","Commercial agriculture grows","Migration to cities increases"],
  matchIndex:[0,1,2,3], hint:"Agriculture connects to industry." },

{ id:"G5-022", tags:["G5"], type:"bullet-match", cs:"CS 9 — City Life",
  left:["Overcrowding","Fire hazards","Disease spread","Reform campaigns"],
  right:["Too many people per building","Unsafe construction","TB/cholera outbreaks","Housing/health laws"],
  matchIndex:[0,1,2,3], hint:"Urban problems + responses." },

{ id:"G5-023", tags:["G5"], type:"bullet-match", cs:"CS 11 — Women’s Reform",
  left:["Suffrage activism","Settlement houses","Temperance support","Workplace advocacy"],
  right:["Vote expansion","Services for immigrants/poor","Limit alcohol’s harms","Labor protections"],
  matchIndex:[0,1,2,3], hint:"Women’s roles in reform." },

{ id:"G5-024", tags:["G5"], type:"bullet-match", cs:"CS 12 — Policy Choices",
  left:["Avoid alliances","Limit intervention","Debate treaties","Focus domestic issues"],
  right:["Entanglement fears","Stay out of conflicts","Senate scrutiny","Rebuild economy"],
  matchIndex:[0,1,2,3], hint:"Isolationist mindset." },

{ id:"G5-025", tags:["G5"], type:"bullet-match", cs:"CS 8 — Innovation",
  left:["Efficiency rises","Labor shifts","Output increases","Markets expand"],
  right:["More per hour produced","Workers move to factories","More goods/food","National distribution grows"],
  matchIndex:[0,1,2,3], hint:"Innovation effects chain." },

{ id:"G5-026", tags:["G5"], type:"bullet-match", cs:"CS 11 — Progressive Summary",
  left:["Expose problems","Regulate business","Protect consumers","Expand democracy"],
  right:["Muckrakers","Antitrust/safety laws","Food/drug acts","17th/19th amendments"],
  matchIndex:[0,1,2,3], hint:"Core Progressive pillars." },

{ id:"G5-027", tags:["G5"], type:"bullet-match", cs:"CS 8 — Urban Economy",
  left:["Factory wages","Immigration labor","City services demand","Housing shortage"],
  right:["Cash economy grows","Workforce expands","Infrastructure strain","Tenement growth"],
  matchIndex:[0,1,2,3], hint:"Urban economic dynamics." },

{ id:"G5-028", tags:["G5"], type:"bullet-match", cs:"CS 11 — 25th Amendment",
  left:["Incapacity declared","VP assumes authority","Cabinet supports process","Continuity maintained"],
  right:["Trigger succession procedures","Temporary transfer of power","Executive branch confirms","No leadership gap"],
  matchIndex:[0,1,2,3], hint:"Succession prevents gaps." },

/* =========================
   GAME 6 (G6) — Cause & Effect Chain (28)
   required: type:"cause-effect-chain", prompt, chain[4], correctOrder[4]
========================= */
{ id:"G6-001", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Industrialization",
  prompt:"Build the chain that explains how industrialization drives urban growth.",
  chain:["Factories expand production","Job opportunities increase in cities","Rural and immigrant workers move to cities","Overcrowding and sanitation problems intensify"],
  correctOrder:[0,1,2,3], hint:"Jobs pull people; growth strains cities." },

{ id:"G6-002", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Mechanized Farming",
  prompt:"Build the chain that explains mechanized farming’s impact on labor and cities.",
  chain:["New farm machinery is adopted","Farm productivity rises","Fewer workers are needed on farms","More workers migrate to cities for factory jobs"],
  correctOrder:[0,1,2,3], hint:"Mechanization reduces farm labor demand." },

{ id:"G6-003", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Muckrakers",
  prompt:"Build the chain showing how muckrakers helped produce reforms.",
  chain:["Journalists expose corruption/unsafe practices","Public awareness and outrage grow","Political pressure builds on lawmakers","Reform laws and regulations are passed"],
  correctOrder:[0,1,2,3], hint:"Exposure → outrage → pressure → laws." },

{ id:"G6-004", tags:["G6"], type:"cause-effect-chain", cs:"CS 7 — Labor Unions",
  prompt:"Build the chain explaining why unions formed and how they used leverage.",
  chain:["Workers face long hours/unsafe conditions","Workers organize into unions","Unions demand changes through bargaining","Strikes or boycotts are used when demands are refused"],
  correctOrder:[0,1,2,3], hint:"Organization precedes leverage." },

{ id:"G6-005", tags:["G6"], type:"cause-effect-chain", cs:"CS 6 — End of Reconstruction",
  prompt:"Build the chain explaining how ending Reconstruction led to expanded segregation.",
  chain:["Federal troops withdraw from the South","Redeemer governments regain control","Jim Crow laws and voting barriers expand","Segregation and disenfranchisement become entrenched"],
  correctOrder:[0,1,2,3], hint:"Withdrawal enables policy reversal." },

{ id:"G6-006", tags:["G6"], type:"cause-effect-chain", cs:"CS 6 — Plessy v. Ferguson",
  prompt:"Build the chain explaining how a Supreme Court decision reinforced segregation.",
  chain:["States enact segregation laws","Plessy v. Ferguson upholds 'separate but equal'","Legal support for segregation spreads","Segregation expands across public life"],
  correctOrder:[0,1,2,3], hint:"Court backing accelerates policy spread." },

{ id:"G6-007", tags:["G6"], type:"cause-effect-chain", cs:"CS 10 — Tenements & Disease",
  prompt:"Build the chain explaining why disease spread in crowded tenements.",
  chain:["Urban populations rise rapidly","Overcrowded tenements become common","Poor ventilation/sanitation increase exposure","Diseases like TB and cholera spread more easily"],
  correctOrder:[0,1,2,3], hint:"Density + poor sanitation increase risk." },

{ id:"G6-008", tags:["G6"], type:"cause-effect-chain", cs:"CS 10 — Public Health Reform",
  prompt:"Build the chain showing how cities responded to disease outbreaks.",
  chain:["Disease outbreaks increase","Officials identify sanitation as a cause","Cities invest in clean water and sewers","Public health outcomes improve over time"],
  correctOrder:[0,1,2,3], hint:"Infrastructure changes outcomes." },

{ id:"G6-009", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — National Markets",
  prompt:"Build the chain explaining how transportation supported national markets.",
  chain:["Railroad networks expand","Shipping becomes faster and cheaper","Businesses distribute goods nationally","National brands and markets grow"],
  correctOrder:[0,1,2,3], hint:"Transport → distribution → national markets." },

{ id:"G6-010", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Mass Production",
  prompt:"Build the chain explaining how mass production lowered prices.",
  chain:["Factories standardize production","Output increases significantly","Cost per unit drops","More consumers can afford goods"],
  correctOrder:[0,1,2,3], hint:"Economies of scale." },

{ id:"G6-011", tags:["G6"], type:"cause-effect-chain", cs:"CS 9 — Nativism",
  prompt:"Build the chain explaining how rapid immigration contributed to nativism.",
  chain:["Immigration increases rapidly","Competition and cultural fears rise","Nativist organizations gain support","Calls for restriction policies grow"],
  correctOrder:[0,1,2,3], hint:"Fear + competition drive backlash." },

{ id:"G6-012", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Consumer Protection",
  prompt:"Build the chain showing how consumer protection laws emerged.",
  chain:["Unsafe products are exposed","Public demands protection","Government passes safety regulations","Companies change practices to comply"],
  correctOrder:[0,1,2,3], hint:"Demand → regulation → compliance." },

{ id:"G6-013", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Antitrust",
  prompt:"Build the chain explaining why antitrust enforcement expanded.",
  chain:["Trusts/monopolies reduce competition","Prices and political influence raise concern","Reformers push government action","Antitrust enforcement increases"],
  correctOrder:[0,1,2,3], hint:"Monopoly power triggers reform." },

{ id:"G6-014", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 17th Amendment",
  prompt:"Build the chain explaining the move to direct election of senators.",
  chain:["Concerns about corruption grow","Reformers demand change","17th Amendment is adopted","Voters directly elect U.S. senators"],
  correctOrder:[0,1,2,3], hint:"Corruption concerns → reform → amendment." },

{ id:"G6-015", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 19th Amendment",
  prompt:"Build the chain explaining how women gained national suffrage.",
  chain:["Suffrage activists organize and campaign","Public/political support increases","19th Amendment is ratified","Women vote nationwide"],
  correctOrder:[0,1,2,3], hint:"Organization → support → ratification → participation." },

{ id:"G6-016", tags:["G6"], type:"cause-effect-chain", cs:"CS 5 — Northwest Ordinance",
  prompt:"Build the chain explaining how territories became states under the Northwest Ordinance model.",
  chain:["Territory establishes civil government","Population grows and meets requirements","Territory applies for statehood","Congress admits the new state"],
  correctOrder:[0,1,2,3], hint:"Requirements → application → admission." },

{ id:"G6-017", tags:["G6"], type:"cause-effect-chain", cs:"CS 4 — Declaration",
  prompt:"Build the chain explaining the Declaration’s logic about government power.",
  chain:["People possess unalienable rights","Government is created by consent","Government violates rights","People alter or abolish the government"],
  correctOrder:[0,1,2,3], hint:"Violation triggers the right to change government." },

{ id:"G6-018", tags:["G6"], type:"cause-effect-chain", cs:"CS 12 — Isolationism",
  prompt:"Build the chain explaining why the U.S. leaned toward isolationism after WWI.",
  chain:["WWI ends with heavy costs","Disillusionment with war grows","Fear of entangling alliances increases","Policies limit international involvement"],
  correctOrder:[0,1,2,3], hint:"Costs → disillusionment → avoidance." },

{ id:"G6-019", tags:["G6"], type:"cause-effect-chain", cs:"CS 13 — Great Migration",
  prompt:"Build the chain explaining the Great Migration’s push-pull process.",
  chain:["Push factors increase in the South","Northern industries need workers","Migration accelerates to Northern cities","New communities and cultural influence grow"],
  correctOrder:[0,1,2,3], hint:"Push + pull → migration → change." },

{ id:"G6-020", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Skyscrapers",
  prompt:"Build the chain explaining how new materials changed city skylines.",
  chain:["Steel production expands","Engineering techniques improve","Skyscrapers become practical","Cities grow denser vertically"],
  correctOrder:[0,1,2,3], hint:"Steel + engineering enable height." },

{ id:"G6-021", tags:["G6"], type:"cause-effect-chain", cs:"CS 10 — Transit",
  prompt:"Build the chain explaining how public transit reshaped cities.",
  chain:["City jobs concentrate downtown","Commuting demand increases","Streetcars/subways expand routes","Residential patterns spread outward"],
  correctOrder:[0,1,2,3], hint:"Transit expands where people can live." },

{ id:"G6-022", tags:["G6"], type:"cause-effect-chain", cs:"CS 7 — Labor Conflict",
  prompt:"Build the chain explaining how strikes could trigger conflict.",
  chain:["Workers strike to demand changes","Production slows or stops","Owners seek strikebreakers/police support","Clashes and violence sometimes occur"],
  correctOrder:[0,1,2,3], hint:"Disruption provokes strong responses." },

{ id:"G6-023", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — City Reform",
  prompt:"Build the chain explaining how city corruption led to reform efforts.",
  chain:["Machine politics grows in cities","Corruption and patronage become visible","Reformers push civil service changes","Professional management increases"],
  correctOrder:[0,1,2,3], hint:"Visibility of corruption fuels reform." },

{ id:"G6-024", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Conservation",
  prompt:"Build the chain explaining why conservation policies expanded.",
  chain:["Resources are exploited rapidly","Concern about depletion increases","Government protects lands/resources","Conservation becomes a lasting policy area"],
  correctOrder:[0,1,2,3], hint:"Concern drives policy protection." },

{ id:"G6-025", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Consumer Culture",
  prompt:"Build the chain showing how mass production influenced consumer culture.",
  chain:["Factories mass-produce goods","Prices fall","More households buy consumer products","Advertising and brand competition expand"],
  correctOrder:[0,1,2,3], hint:"Lower prices broaden demand." },

{ id:"G6-026", tags:["G6"], type:"cause-effect-chain", cs:"CS 6 — Disenfranchisement",
  prompt:"Build the chain explaining how voting barriers reduced political power.",
  chain:["States adopt poll taxes and literacy tests","Many African Americans are blocked from voting","Representation and influence decline","Policies maintain segregation and inequality"],
  correctOrder:[0,1,2,3], hint:"Barriers → turnout drop → power drop." },

{ id:"G6-027", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 22nd Amendment",
  prompt:"Build the chain explaining why presidential term limits were added.",
  chain:["Concern grows about long-term executive power","A constitutional limit is proposed","22nd Amendment is ratified","Presidents are limited to two elected terms"],
  correctOrder:[0,1,2,3], hint:"Concern → proposal → ratification → limit." },

{ id:"G6-028", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 25th Amendment",
  prompt:"Build the chain explaining how the 25th Amendment ensures continuity of leadership.",
  chain:["President is incapacitated or removed","25th Amendment procedures are triggered","Vice President can assume authority temporarily","Continuity of executive leadership is maintained"],
  correctOrder:[0,1,2,3], hint:"Succession rules prevent leadership gaps." }

];

/* Exports */
window.AMSTUD_BANK = AMSTUD_BANK;
window.AMSTUD_BANK_VERSION = "2026-03-03-REBUILT-G1toG6";
console.log("✅ AMSTUD_BANK loaded:", AMSTUD_BANK.length, window.AMSTUD_BANK_VERSION);/* ============================================================
   American Studies OST Mastery — Shared Question Bank
   FILE: /amstud_bank.js  (MUST be in repo root)

   This file defines:
     const AMSTUD_BANK = [...]
     window.AMSTUD_BANK = AMSTUD_BANK
     window.AMSTUD_BANK_VERSION = "..."

   Notes:
   - Game 1 uses global const AMSTUD_BANK (not window) and only needs {choices[4], answerIndex}
   - Game 2 requires: tags include "G2" AND type "select-two" (or similar) AND answerIndices[2]
   - Game 3 requires: tag "Best Explains" OR type "best-explains" OR tags include "G3"
   - Game 4 requires: type "sequence-turning-point" OR tags include "G4" AND events[4], correctOrder[4], turningPoint
   - Game 5 requires: type "bullet-match", tags include "G5", left[4], right[4], matchIndex[4] (rightIndex -> leftIndex)
   - Game 6 requires: type "cause-effect-chain", tags include "G6", chain[4], correctOrder[4]
============================================================ */

const AMSTUD_BANK = [

/* =========================
   GAME 1 (G1) — Cause & Effect MCQ (28)
   required: stem, choices[4], answerIndex
========================= */
{ id:"G1-001", cs:"CS 1 — Source Credibility", tags:["G1"], tag:"Cause & Effect",
  stem:"A historian claims one political cartoon proves that most Americans supported immigration restrictions in 1890. Which detail most weakens the claim?",
  choices:["The cartoon appeared during an election year","The cartoon reflects one artist’s viewpoint, not national opinion","The cartoon labels political parties","The cartoon was printed in a newspaper"],
  answerIndex:1, hint:"One source rarely proves nationwide agreement." },

{ id:"G1-002", cs:"CS 8 — Industrialization", tags:["G1"], tag:"Cause & Effect",
  stem:"Which change best shows how mechanized farming transformed the economy?",
  choices:["More farm workers were needed to harvest crops","Farm output increased while fewer workers were needed","Factories became less efficient","Cities lost population as people returned to rural life"],
  answerIndex:1, hint:"Machines increased output and reduced labor needs." },

{ id:"G1-003", cs:"CS 8 — Corporations", tags:["G1"], tag:"Cause & Effect",
  stem:"Which development most directly helped corporations grow into national businesses?",
  choices:["Railroads and national shipping networks","An end to immigration","The disappearance of factories","A return to barter instead of currency"],
  answerIndex:0, hint:"Transportation networks expanded markets." },

{ id:"G1-004", cs:"CS 8 — Urbanization", tags:["G1"], tag:"Cause & Effect",
  stem:"Rapid urbanization in the late 1800s most commonly caused which city problem?",
  choices:["Overcrowded housing and unsanitary conditions","More farmland near downtown areas","Lower demand for factory workers","Fewer immigrants arriving in cities"],
  answerIndex:0, hint:"Population growth outpaced infrastructure." },

{ id:"G1-005", cs:"CS 8 — Technology", tags:["G1"], tag:"Cause & Effect",
  stem:"New technologies like electric lighting and telephones most directly affected industry by",
  choices:["improving coordination and efficiency","eliminating the need for factories","ending the need for transportation","reducing the size of cities"],
  answerIndex:0, hint:"Tech improved communication and productivity." },

{ id:"G1-006", cs:"CS 9 — Immigration", tags:["G1"], tag:"Cause & Effect",
  stem:"What factor most directly pulled immigrants into U.S. cities around 1900?",
  choices:["Demand for industrial labor","Disappearance of factory jobs","Closure of public transit","Reduction of urban housing"],
  answerIndex:0, hint:"Jobs were the biggest pull factor." },

{ id:"G1-007", cs:"CS 11 — Progressivism", tags:["G1"], tag:"Cause & Effect",
  stem:"Progressive reformers most often argued government should",
  choices:["take a larger role in regulating business and improving conditions","end elections to reduce corruption","ban labor unions to protect business","stop public education programs"],
  answerIndex:0, hint:"Progressives favored reform and regulation." },

{ id:"G1-008", cs:"CS 11 — Muckrakers", tags:["G1"], tag:"Cause & Effect",
  stem:"The most common effect of muckraker journalism was that it",
  choices:["exposed problems and increased public pressure for reform","ended immigration by changing the Constitution","eliminated political parties","replaced factories with farms"],
  answerIndex:0, hint:"Exposure → pressure → reform." },

{ id:"G1-009", cs:"CS 11 — Trusts", tags:["G1"], tag:"Cause & Effect",
  stem:"Laissez-faire policies toward big business contributed most directly to",
  choices:["the rise of trusts and monopolies","the end of corporate growth","the elimination of wage labor","the disappearance of railroads"],
  answerIndex:0, hint:"Less regulation enabled consolidation." },

{ id:"G1-010", cs:"CS 7 — Organized Labor", tags:["G1"], tag:"Cause & Effect",
  stem:"Which condition most directly contributed to the growth of labor unions in the late 1800s?",
  choices:["Long hours and unsafe working conditions","Higher wages for all workers","Government ownership of factories","A surplus of farmland jobs"],
  answerIndex:0, hint:"Workers organized to address harsh conditions." },

{ id:"G1-011", cs:"CS 7 — Labor Conflict", tags:["G1"], tag:"Cause & Effect",
  stem:"Violence during major strikes in the late 1800s often occurred because",
  choices:["owners and government used force to break strikes","workers refused to negotiate with anyone","factories shut down permanently","immigration stopped completely"],
  answerIndex:0, hint:"Force was used to protect property and production." },

{ id:"G1-012", cs:"CS 6 — Reconstruction", tags:["G1"], tag:"Cause & Effect",
  stem:"After federal troops left the South in 1877, which outcome became more likely?",
  choices:["Jim Crow laws and voter suppression expanded","Segregation ended quickly","Black voting rights were fully protected","Former Confederates lost political power permanently"],
  answerIndex:0, hint:"Redeemer governments reversed many gains." },

{ id:"G1-013", cs:"CS 6 — Plessy", tags:["G1"], tag:"Cause & Effect",
  stem:"The Supreme Court decision in Plessy v. Ferguson (1896) most directly led to",
  choices:["legal support for segregation under 'separate but equal'","the immediate end of segregation","universal voting rights enforcement","the creation of the FBI"],
  answerIndex:0, hint:"Plessy validated segregation laws." },

{ id:"G1-014", cs:"CS 4 — Declaration", tags:["G1"], tag:"Cause & Effect",
  stem:"According to the Declaration of Independence, if a government violates natural rights, the people may",
  choices:["alter or abolish it","suspend all elections forever","end all taxation permanently","abolish courts immediately"],
  answerIndex:0, hint:"Consent requires the right to change government." },

{ id:"G1-015", cs:"CS 5 — Northwest Ordinance", tags:["G1"], tag:"Cause & Effect",
  stem:"Which result best reflects one precedent established by the Northwest Ordinance?",
  choices:["New territories could become states after meeting requirements","States could ignore the U.S. Constitution","Congress could eliminate public education","Territories could form monarchies"],
  answerIndex:0, hint:"It set rules for territorial government and statehood." },

{ id:"G1-016", cs:"CS 10 — Urban Life", tags:["G1"], tag:"Cause & Effect",
  stem:"Which city improvement most directly responded to problems caused by rapid urban growth?",
  choices:["Expanded sanitation systems and clean water efforts","Elimination of public schools","Replacement of factories with farms","Ending all immigration"],
  answerIndex:0, hint:"Sanitation addressed disease and overcrowding." },

{ id:"G1-017", cs:"CS 11 — 17th Amendment", tags:["G1"], tag:"Cause & Effect",
  stem:"The 17th Amendment was intended to reduce corruption by",
  choices:["creating direct election of U.S. senators","ending political parties","abolishing the Supreme Court","restricting voting to property owners"],
  answerIndex:0, hint:"Direct election reduced machine influence in state legislatures." },

{ id:"G1-018", cs:"CS 11 — 19th Amendment", tags:["G1"], tag:"Cause & Effect",
  stem:"The ratification of the 19th Amendment most directly resulted in",
  choices:["expanded voting rights for women nationwide","the end of all discrimination","the start of World War I","the creation of Social Security"],
  answerIndex:0, hint:"Women gained the right to vote." },

{ id:"G1-019", cs:"CS 11 — Conservation", tags:["G1"], tag:"Cause & Effect",
  stem:"Progressive conservation policies were primarily a response to",
  choices:["overuse of natural resources by industry and settlement","a shortage of factory labor","the end of westward expansion","the abolition of railroads"],
  answerIndex:0, hint:"Conservation addressed resource depletion." },

{ id:"G1-020", cs:"CS 8 — Assembly Lines", tags:["G1"], tag:"Cause & Effect",
  stem:"A major effect of assembly-line production was that it",
  choices:["increased output and lowered costs of goods","ended the use of machinery","reduced urban growth by creating farm jobs","eliminated immigration to cities"],
  answerIndex:0, hint:"Standardized processes increased production." },

{ id:"G1-021", cs:"CS 12 — WWI Aftermath", tags:["G1"], tag:"Cause & Effect",
  stem:"Which factor most contributed to U.S. isolationism after World War I?",
  choices:["Disillusionment with war and fear of foreign entanglements","A complete end to international trade","A requirement to join the League of Nations","A shortage of industrial capacity"],
  answerIndex:0, hint:"Americans wanted to avoid another major war." },

{ id:"G1-022", cs:"CS 13 — Great Migration", tags:["G1"], tag:"Cause & Effect",
  stem:"The Great Migration was driven primarily by",
  choices:["push factors in the South and job opportunities in Northern cities","free farmland in the West","the end of factories in the North","a new constitutional amendment banning travel"],
  answerIndex:0, hint:"Jobs + escape from discrimination were key drivers." },

{ id:"G1-023", cs:"CS 11 — Consumer Protection", tags:["G1"], tag:"Cause & Effect",
  stem:"Public outrage after muckraker reports on unsafe food and drugs helped lead to",
  choices:["stronger consumer protection laws","the repeal of the Bill of Rights","the end of public health programs","the elimination of factories"],
  answerIndex:0, hint:"Reform followed exposure of unsafe practices." },

{ id:"G1-024", cs:"CS 8 — Farming", tags:["G1"], tag:"Cause & Effect",
  stem:"Which effect best matches the rise of mechanized farming?",
  choices:["Lower production and higher food prices","Higher production and lower cost per unit","An end to commercial agriculture","A shift from factory workers to farm workers"],
  answerIndex:1, hint:"Mechanization increased efficiency and output." },

{ id:"G1-025", cs:"CS 11 — Local Reform", tags:["G1"], tag:"Cause & Effect",
  stem:"City reform movements often tried to reduce political machine power by",
  choices:["expanding civil service and professional management","ending all city services","banning newspapers","abolishing taxes"],
  answerIndex:0, hint:"Professionalization reduced patronage." },

{ id:"G1-026", cs:"CS 6 — Jim Crow", tags:["G1"], tag:"Cause & Effect",
  stem:"Poll taxes, literacy tests, and grandfather clauses were primarily designed to",
  choices:["disenfranchise African American voters","increase voter turnout for everyone","expand federal power in foreign policy","reduce industrial production"],
  answerIndex:0, hint:"They were tools of voter suppression." },

{ id:"G1-027", cs:"CS 9 — Nativism", tags:["G1"], tag:"Cause & Effect",
  stem:"Nativist sentiment in the late 1800s and early 1900s often led to",
  choices:["support for immigration restriction policies","the abolition of industrial jobs","the end of urban growth","universal acceptance of immigrants"],
  answerIndex:0, hint:"Fear and prejudice fueled restriction efforts." },

{ id:"G1-028", cs:"CS 8 — Skyscrapers", tags:["G1"], tag:"Cause & Effect",
  stem:"Steel production and new construction methods most directly contributed to",
  choices:["the rise of skyscrapers and denser cities","the end of city growth","the elimination of railroads","a return to rural living"],
  answerIndex:0, hint:"Steel enabled taller, stronger buildings." },

/* =========================
   GAME 2 (G2) — Select TWO (28)
   required: type:"select-two", tags include "G2", stem, choices[4], answerIndices[2]
========================= */
{ id:"G2-001", cs:"CS 1 — Source Credibility", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons historians prefer multiple sources when studying an event.",
  choices:["To corroborate details across accounts","To eliminate all bias from history","To compare perspectives and context","To avoid using any primary sources"],
  answerIndices:[0,2], hint:"Corroboration + perspective." },

{ id:"G2-002", cs:"CS 8 — Industrialization", tags:["G2"], type:"select-two",
  stem:"Select TWO effects of industrialization in the late 1800s.",
  choices:["More factory work replaced farm work","Most people moved from cities to rural areas","Urban population increased rapidly","Machines reduced production efficiency"],
  answerIndices:[0,2], hint:"Factory work rose; cities grew." },

{ id:"G2-003", cs:"CS 8 — Corporations", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons large corporations grew during industrialization.",
  choices:["Access to national markets","A ban on railroads","New production and management methods","A complete end to immigration"],
  answerIndices:[0,2], hint:"Markets + organization/efficiency." },

{ id:"G2-004", cs:"CS 10 — Immigration", tags:["G2"], type:"select-two",
  stem:"Select TWO common challenges faced by immigrants in crowded cities.",
  choices:["Overcrowded housing","Easy access to clean water everywhere","Diseases spread quickly","Unlimited high-paying jobs for all"],
  answerIndices:[0,2], hint:"Tenements + public health problems." },

{ id:"G2-005", cs:"CS 11 — Progressivism", tags:["G2"], type:"select-two",
  stem:"Select TWO goals of Progressive Era reformers.",
  choices:["Reduce corruption in government","Expand child labor in factories","Improve public health and safety","Eliminate all regulation of business"],
  answerIndices:[0,2], hint:"Reform politics + improve conditions." },

{ id:"G2-006", cs:"CS 7 — Labor", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons workers formed labor unions.",
  choices:["Unsafe working conditions","Guaranteed high wages for everyone","Long work hours","More free farmland in the West"],
  answerIndices:[0,2], hint:"Safety + hours were major concerns." },

{ id:"G2-007", cs:"CS 6 — Reconstruction", tags:["G2"], type:"select-two",
  stem:"Select TWO outcomes of ending Reconstruction in the South.",
  choices:["Rise of Jim Crow laws","Expansion of Black voting rights protections","Redeemer control of state governments","Immediate and lasting racial equality"],
  answerIndices:[0,2], hint:"Rights were restricted; segregation expanded." },

{ id:"G2-008", cs:"CS 6 — Jim Crow", tags:["G2"], type:"select-two",
  stem:"Select TWO tools used to suppress voting after Reconstruction.",
  choices:["Poll taxes","The 19th Amendment","Literacy tests","The Northwest Ordinance"],
  answerIndices:[0,2], hint:"Taxes + tests were common." },

{ id:"G2-009", cs:"CS 11 — Amendments", tags:["G2"], type:"select-two",
  stem:"Select TWO Progressive Era constitutional changes.",
  choices:["17th Amendment","22nd Amendment","19th Amendment","25th Amendment"],
  answerIndices:[0,2], hint:"Direct senators + women’s suffrage." },

{ id:"G2-010", cs:"CS 11 — Muckrakers", tags:["G2"], type:"select-two",
  stem:"Select TWO ways muckrakers influenced reform.",
  choices:["Raised public awareness of corruption","Eliminated all newspapers","Helped build support for new laws","Ended urbanization overnight"],
  answerIndices:[0,2], hint:"Awareness + pressure for laws." },

{ id:"G2-011", cs:"CS 8 — Technology", tags:["G2"], type:"select-two",
  stem:"Select TWO inventions that improved communication and supported national markets.",
  choices:["Telephone","Cotton gin","Telegraph/telephone networks","Stone tools"],
  answerIndices:[0,2], hint:"Communication tech matters." },

{ id:"G2-012", cs:"CS 8 — Farming", tags:["G2"], type:"select-two",
  stem:"Select TWO effects of mechanized farming.",
  choices:["Higher agricultural output","Lower output due to fewer workers","Fewer workers needed on farms","Increased need for hand labor everywhere"],
  answerIndices:[0,2], hint:"Output up; labor needs down." },

{ id:"G2-013", cs:"CS 9 — Urbanization", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons cities grew rapidly during industrialization.",
  choices:["Factory jobs attracted workers","Most factories closed in cities","Immigration increased urban populations","Railroads made cities impossible"],
  answerIndices:[0,2], hint:"Jobs + immigration boosted city growth." },

{ id:"G2-014", cs:"CS 5 — Northwest Ordinance", tags:["G2"], type:"select-two",
  stem:"Select TWO principles encouraged by the Northwest Ordinance.",
  choices:["Education support","Creation of monarchies","Natural rights protections","Ending representative government"],
  answerIndices:[0,2], hint:"Education + rights." },

{ id:"G2-015", cs:"CS 4 — Declaration", tags:["G2"], type:"select-two",
  stem:"Select TWO principles emphasized in the Declaration of Independence.",
  choices:["Unalienable rights","Unlimited government power","Consent of the governed","Hereditary monarchy"],
  answerIndices:[0,2], hint:"Rights + consent." },

{ id:"G2-016", cs:"CS 11 — Consumer Protection", tags:["G2"], type:"select-two",
  stem:"Select TWO areas Progressives targeted with regulation.",
  choices:["Food and drug safety","Abolishing all courts","Workplace safety","Ending public health"],
  answerIndices:[0,2], hint:"Safety reforms were central." },

{ id:"G2-017", cs:"CS 7 — Strikes", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons strikes sometimes turned violent.",
  choices:["Owners hired armed guards or sought government intervention","Workers always supported violence","Police or troops were used to restore order","All strikes were peaceful by law"],
  answerIndices:[0,2], hint:"Force was used to break strikes." },

{ id:"G2-018", cs:"CS 12 — Isolationism", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons the U.S. moved toward isolationism after WWI.",
  choices:["War disillusionment","Mandatory League membership","Fear of entangling alliances","A complete end to overseas trade"],
  answerIndices:[0,2], hint:"Disillusionment + entanglements." },

{ id:"G2-019", cs:"CS 13 — Great Migration", tags:["G2"], type:"select-two",
  stem:"Select TWO factors that encouraged the Great Migration.",
  choices:["Industrial jobs in Northern cities","More cotton jobs in the Deep South","Push factors like discrimination/violence","Free coastal land grants to everyone"],
  answerIndices:[0,2], hint:"Push + pull." },

{ id:"G2-020", cs:"CS 8 — Heavy Industry", tags:["G2"], type:"select-two",
  stem:"Select TWO industries strongly associated with late 1800s industrial growth.",
  choices:["Steel","Handcrafted cottage weaving only","Oil","Stone-age toolmaking"],
  answerIndices:[0,2], hint:"Think steel + oil." },

{ id:"G2-021", cs:"CS 9 — Nativism", tags:["G2"], type:"select-two",
  stem:"Select TWO claims commonly made by nativist groups.",
  choices:["Immigrants threatened jobs/wages","Immigration had no impact on cities","Immigrants threatened culture or politics","All immigrants were identical in background"],
  answerIndices:[0,2], hint:"Jobs + culture/politics were targets." },

{ id:"G2-022", cs:"CS 11 — Political Reform", tags:["G2"], type:"select-two",
  stem:"Select TWO reforms intended to reduce political corruption.",
  choices:["Civil service reforms","Patronage expansion","Direct primaries","Secret ballot"],
  answerIndices:[0,2], hint:"Merit systems + voter protections." },

{ id:"G2-023", cs:"CS 8 — Transportation", tags:["G2"], type:"select-two",
  stem:"Select TWO transportation changes that supported national markets.",
  choices:["Railroad expansion","Removal of all bridges","Refrigerated rail cars/modern shipping","Ending all canals and roads"],
  answerIndices:[0,2], hint:"Rail + shipping tech." },

{ id:"G2-024", cs:"CS 10 — Public Health", tags:["G2"], type:"select-two",
  stem:"Select TWO public health issues in crowded tenements.",
  choices:["Tuberculosis spread","Unlimited clean water in every building","Cholera outbreaks","No contagious diseases existed"],
  answerIndices:[0,2], hint:"TB + cholera were common threats." },

{ id:"G2-025", cs:"CS 11 — Antitrust", tags:["G2"], type:"select-two",
  stem:"Select TWO reasons antitrust actions were supported by many Progressives.",
  choices:["Reduce monopoly power","Eliminate all competition","Protect consumers and smaller businesses","Guarantee one company controls the market"],
  answerIndices:[0,2], hint:"Limit monopolies + protect competition." },

{ id:"G2-026", cs:"CS 8 — Labor Shift", tags:["G2"], type:"select-two",
  stem:"Select TWO changes that reflect the shift from rural to urban living.",
  choices:["More people lived near factories","Most Americans moved to isolated farms","City infrastructure faced strain","Urban housing shortages increased"],
  answerIndices:[0,2], hint:"Factories + strain." },

{ id:"G2-027", cs:"CS 11 — Reform Coalitions", tags:["G2"], type:"select-two",
  stem:"Select TWO groups that often supported Progressive reforms.",
  choices:["Middle-class reformers","Some journalists and activists","All monopolies seeking no regulation","Slaveholders as a political bloc"],
  answerIndices:[0,1], hint:"Reformers + muckrakers/activists." },

{ id:"G2-028", cs:"CS 8 — Efficiency", tags:["G2"], type:"select-two",
  stem:"Select TWO ways machines changed production in factories.",
  choices:["Increased speed and output","Made production slower and costlier","Reduced need for some skilled labor","Eliminated all standardization"],
  answerIndices:[0,2], hint:"Efficiency + labor shifts." },

/* =========================
   GAME 3 (G3) — Best Explains MCQ (28)
   required: tag:"Best Explains" or type:"best-explains" or tags include "G3"
   plus stem, choices[4], answerIndex
========================= */
{ id:"G3-001", cs:"CS 8 — Industrialization", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why urban populations grew during industrialization?",
  choices:["Factories in cities created jobs that attracted workers","Farm work became more profitable than factory work","Cities banned immigration","Railroads made cities unnecessary"],
  answerIndex:0, hint:"Jobs attracted people to cities." },

{ id:"G3-002", cs:"CS 8 — Mechanization", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how mechanized farming affected labor?",
  choices:["Machines replaced some human labor, reducing farm labor needs","Machines required more workers per acre","Mechanization ended commercial farming","Mechanization eliminated food production"],
  answerIndex:0, hint:"Machines reduced labor needs." },

{ id:"G3-003", cs:"CS 11 — Progressivism", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the main idea behind Progressive reforms?",
  choices:["Government should address problems caused by rapid industrial growth","Government should avoid all regulation regardless of harm","Only private charity should solve social problems","The Constitution should be suspended during reform"],
  answerIndex:0, hint:"Progressives favored active reform." },

{ id:"G3-004", cs:"CS 11 — Muckrakers", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why muckrakers were influential?",
  choices:["They exposed problems that increased public demand for reform","They ended elections by replacing legislatures","They prevented all immigration into cities","They eliminated factories through court orders"],
  answerIndex:0, hint:"Exposure created pressure." },

{ id:"G3-005", cs:"CS 7 — Labor", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why labor unions grew in the late 1800s?",
  choices:["Workers sought better wages, hours, and safer conditions","Workers wanted to increase child labor","Workers opposed all workplace rules","Workers wanted fewer workplace protections"],
  answerIndex:0, hint:"Unions formed to improve conditions." },

{ id:"G3-006", cs:"CS 6 — Jim Crow", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how Jim Crow laws affected the South?",
  choices:["They institutionalized segregation and restricted civil rights","They ensured equal access to voting for all","They abolished segregation immediately","They eliminated discrimination entirely"],
  answerIndex:0, hint:"Jim Crow enforced segregation." },

{ id:"G3-007", cs:"CS 6 — Plessy", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the impact of Plessy v. Ferguson (1896)?",
  choices:["It provided legal support for segregation under 'separate but equal'","It declared segregation unconstitutional nationwide","It created the 14th Amendment","It required states to integrate schools immediately"],
  answerIndex:0, hint:"Plessy validated segregation laws." },

{ id:"G3-008", cs:"CS 4 — Declaration", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains 'consent of the governed'?",
  choices:["Government power is legitimate only if people agree to it","Government power comes from kings","Government should ignore public opinion","Government should abolish elections"],
  answerIndex:0, hint:"Consent = legitimacy from the people." },

{ id:"G3-009", cs:"CS 5 — Northwest Ordinance", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why the Northwest Ordinance mattered?",
  choices:["It set a model for territorial government and future statehood","It ended representative government in territories","It removed all rights protections","It created the Electoral College"],
  answerIndex:0, hint:"It set the rules for expansion/statehood." },

{ id:"G3-010", cs:"CS 8 — Corporations", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how railroads supported industrialization?",
  choices:["They moved goods and people quickly, connecting national markets","They reduced trade by isolating regions","They eliminated the need for factories","They ended immigration to cities"],
  answerIndex:0, hint:"Railroads connected markets." },

{ id:"G3-011", cs:"CS 9 — Tenements", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why disease spread in many tenements?",
  choices:["Overcrowding and poor sanitation increased transmission","Tenements had too much clean water","Cities had no population growth","Public health efforts eliminated germs"],
  answerIndex:0, hint:"Overcrowding + sanitation problems." },

{ id:"G3-012", cs:"CS 11 — 17th Amendment", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why the 17th Amendment was adopted?",
  choices:["To reduce corruption by allowing direct election of senators","To end elections for senators permanently","To increase patronage in state legislatures","To limit voting to wealthy citizens"],
  answerIndex:0, hint:"Direct election reduced machine influence." },

{ id:"G3-013", cs:"CS 11 — 19th Amendment", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the significance of the 19th Amendment?",
  choices:["It expanded democracy by granting women the right to vote","It ended all discrimination in the U.S.","It created the Supreme Court","It limited voting to property owners"],
  answerIndex:0, hint:"Women’s suffrage expanded participation." },

{ id:"G3-014", cs:"CS 11 — Antitrust", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why antitrust laws were supported?",
  choices:["They limited monopoly power and promoted competition","They guaranteed one company dominates markets","They ended all business regulation","They made monopolies legally required"],
  answerIndex:0, hint:"Antitrust combats monopolies." },

{ id:"G3-015", cs:"CS 8 — New Technology", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why new inventions boosted productivity?",
  choices:["Machines increased speed, output, and standardization","Machines reduced output and increased cost","Inventions eliminated communication","Inventions stopped urban growth"],
  answerIndex:0, hint:"Efficiency increased." },

{ id:"G3-016", cs:"CS 12 — Isolationism", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains U.S. reluctance to join international commitments after WWI?",
  choices:["Many feared entangling alliances and another costly war","The U.S. ended all international trade","Congress abolished diplomacy","The Constitution banned treaties"],
  answerIndex:0, hint:"Fear of entanglement mattered." },

{ id:"G3-017", cs:"CS 13 — Great Migration", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why many African Americans moved North during the Great Migration?",
  choices:["They sought industrial jobs and escaped discrimination/violence","They received free farmland in the Rockies","They were required by a new law","They moved because factories closed in the North"],
  answerIndex:0, hint:"Jobs + push factors." },

{ id:"G3-018", cs:"CS 7 — Strikes", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why government sometimes intervened in strikes?",
  choices:["Officials aimed to restore order and protect commerce/production","Officials always supported unions over owners","Officials eliminated wages during strikes","Officials ended elections in strike areas"],
  answerIndex:0, hint:"Order + economic stability." },

{ id:"G3-019", cs:"CS 8 — Urban Services", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why urban infrastructure struggled during rapid growth?",
  choices:["Population increased faster than sewers, housing, and clean water systems","Cities had too many empty homes","Public transit made cities shrink","Immigration stopped completely"],
  answerIndex:0, hint:"Growth outpaced infrastructure." },

{ id:"G3-020", cs:"CS 8 — Farming Output", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why food production increased in the late 1800s?",
  choices:["Mechanized equipment allowed more land to be farmed efficiently","Fewer crops were planted each year","Farmers abandoned new technology","Cities eliminated agriculture"],
  answerIndex:0, hint:"Mechanization increased efficiency." },

{ id:"G3-021", cs:"CS 11 — Reform Methods", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why reformers pushed for food and drug laws?",
  choices:["Consumers needed protection from unsafe products","Businesses requested fewer safety standards","Cities wanted to increase disease spread","Courts banned public health policies"],
  answerIndex:0, hint:"Consumer protection." },

{ id:"G3-022", cs:"CS 9 — Nativism", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why nativism increased during rapid immigration?",
  choices:["Some feared economic competition and cultural change","All citizens welcomed every immigrant equally","Factories disappeared due to immigration","Immigration ended urban growth"],
  answerIndex:0, hint:"Fear of change and competition." },

{ id:"G3-023", cs:"CS 6 — Voting Suppression", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the purpose of poll taxes and literacy tests?",
  choices:["To restrict voting by targeting certain groups","To increase voting access for everyone","To create new states","To regulate interstate commerce"],
  answerIndex:0, hint:"They were designed to disenfranchise." },

{ id:"G3-024", cs:"CS 8 — Mass Production", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why mass production lowered consumer costs?",
  choices:["Standardization and volume reduced per-unit cost","Handcrafting made everything cheaper","Factories produced fewer goods","Railroads ended shipping"],
  answerIndex:0, hint:"Economies of scale." },

{ id:"G3-025", cs:"CS 11 — City Reform", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why cities adopted civil service reforms?",
  choices:["To reduce patronage and increase merit-based hiring","To increase corruption","To eliminate city services","To end elections"],
  answerIndex:0, hint:"Merit systems curb machines." },

{ id:"G3-026", cs:"CS 5 — Education", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains why the Northwest Ordinance encouraged education?",
  choices:["Education was seen as essential to republican self-government","Education was viewed as unnecessary for citizens","Education was intended to replace courts","Education was banned in territories"],
  answerIndex:0, hint:"Republics depend on informed citizens." },

{ id:"G3-027", cs:"CS 8 — Industry & Cities", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains how heavy industry contributed to urban growth?",
  choices:["Factories clustered in cities, attracting workers and services","Factories avoided cities completely","Industry eliminated jobs","Industry ended immigration"],
  answerIndex:0, hint:"Industry clusters draw people." },

{ id:"G3-028", cs:"CS 11 — Progressivism Summary", tags:["G3"], type:"best-explains", tag:"Best Explains",
  stem:"Which statement BEST explains the Progressive belief about government and the economy?",
  choices:["Government can reduce harm caused by industrial capitalism through regulation","Government should never act even when harm occurs","Only monopolies should set rules","Courts should replace elections"],
  answerIndex:0, hint:"Regulation to address harm." },

/* =========================
   GAME 4 (G4) — Sequence / Turning Point (28)
   required: events[4], correctOrder[4], turningPoint (0–3)
========================= */
{ id:"G4-001", cs:"CS 8 — Industrialization", tags:["G4"], type:"sequence-turning-point",
  stem:"Place the steps in order and identify the turning point that accelerates industrial growth.",
  events:["Railroads expand national shipping","Factories adopt mass production","Costs drop and output rises","National markets grow quickly"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Mass production is the pivot." },

{ id:"G4-002", cs:"CS 8 — Urbanization", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the process that creates urban overcrowding and identify the turning point.",
  events:["Factory jobs attract workers","City population grows rapidly","Housing supply lags behind","Overcrowded tenements spread disease"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Housing shortage triggers the crisis." },

{ id:"G4-003", cs:"CS 11 — Reform", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence reform pressure and identify the turning point leading to new laws.",
  events:["Journalists expose unsafe food/drugs","Public outrage increases","Lawmakers pass safety regulations","Industry practices change"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Public outrage shifts politics." },

{ id:"G4-004", cs:"CS 7 — Labor", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how strikes can escalate and identify the turning point.",
  events:["Workers demand better conditions","Employers refuse demands","Strike disrupts production","Police/troops intervene and violence erupts"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Disruption forces a response." },

{ id:"G4-005", cs:"CS 6 — Voting Rights", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence post-Reconstruction voter suppression and identify the turning point.",
  events:["Reconstruction ends","Southern states pass new voting barriers","African American turnout drops sharply","One-party rule strengthens"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Barriers (poll taxes/tests) are the pivot." },

{ id:"G4-006", cs:"CS 6 — Segregation", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the institutionalization of segregation and identify the turning point.",
  events:["Jim Crow laws expand","Plessy v. Ferguson upholds 'separate but equal'","Segregation becomes entrenched","Civil rights challenges grow later"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Plessy provides legal backing." },

{ id:"G4-007", cs:"CS 11 — 17th Amendment", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how corruption concerns led to the 17th Amendment and identify the turning point.",
  events:["Machine politics influence state legislatures","Public demands political reform","17th Amendment establishes direct election of senators","Voter influence over Senate increases"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Direct election is the key shift." },

{ id:"G4-008", cs:"CS 11 — Women’s Suffrage", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the expansion of women’s suffrage and identify the turning point.",
  events:["Suffrage movements organize nationally","States adopt women’s voting in some elections","19th Amendment is ratified","Women vote nationwide"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Ratification is the pivot." },

{ id:"G4-009", cs:"CS 8 — Mechanized Farming", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how mechanized farming affected labor and identify the turning point.",
  events:["New machines are adopted on farms","Farm output increases","Fewer workers are needed per acre","More workers move to cities for jobs"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Reduced labor needs drive migration." },

{ id:"G4-010", cs:"CS 9 — Immigration & Cities", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how immigration reshaped cities and identify the turning point.",
  events:["Immigrants arrive seeking opportunity","They settle near factories and ethnic communities form","Urban services become strained","Reform movements push for better housing/sanitation"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Service strain triggers reform pressure." },

{ id:"G4-011", cs:"CS 11 — Conservation", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence conservation reform and identify the turning point.",
  events:["Resources are heavily exploited","Public concern about depletion grows","Government sets aside protected lands","Conservation policy expands"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Public concern drives action." },

{ id:"G4-012", cs:"CS 12 — Isolationism", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the shift to isolationism and identify the turning point.",
  events:["WWI ends","Americans become disillusioned with war","Leaders avoid foreign entanglements","Isolationist policies expand"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Disillusionment changes attitudes." },

{ id:"G4-013", cs:"CS 13 — Great Migration", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the Great Migration and identify the turning point.",
  events:["Push factors increase in the South","Northern industries need workers","Migration accelerates to Northern cities","New cultural and political communities form"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Acceleration occurs after jobs + push factors align." },

{ id:"G4-014", cs:"CS 4 — Declaration", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the logic of consent and identify the turning point.",
  events:["People hold natural rights","Government is formed by consent","Government violates rights","People alter/abolish government"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Violation triggers the right to change government." },

{ id:"G4-015", cs:"CS 5 — Northwest Ordinance", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence statehood steps and identify the turning point.",
  events:["Territory establishes government","Population grows to required level","Territory applies for statehood","Congress admits the new state"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Application is the pivot step." },

{ id:"G4-016", cs:"CS 8 — National Markets", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence how national markets form and identify the turning point.",
  events:["Transportation improves","Goods move farther and faster","Businesses expand distribution","Consumers access national brands"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Fast, reliable movement changes everything." },

{ id:"G4-017", cs:"CS 11 — City Government Reform", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence city reform and identify the turning point.",
  events:["Machine corruption grows","Reformers demand change","Civil service rules are adopted","Professional management increases"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Civil service adoption is the pivot." },

{ id:"G4-018", cs:"CS 10 — Public Health", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence public health responses and identify the turning point.",
  events:["Disease outbreaks increase","Cities study sanitation problems","Clean water/sewer projects expand","Disease rates decline over time"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Infrastructure investment shifts outcomes." },

{ id:"G4-019", cs:"CS 8 — Labor Shift", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence the labor shift and identify the turning point.",
  events:["Factories expand","More wage jobs appear","Workers move from farms to factories","Urban populations grow"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"More wage jobs changes where people live/work." },

{ id:"G4-020", cs:"CS 11 — Regulation", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence business regulation and identify the turning point.",
  events:["Abuses become visible","Public pressure grows","New regulations pass","Business behavior adapts"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Passing laws changes incentives." },

{ id:"G4-021", cs:"CS 7 — Union Strategy", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence union strategy and identify the turning point.",
  events:["Workers organize","Union presents demands","Strike or boycott begins","Employer concedes or conflict escalates"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Work stoppage is the pivot." },

{ id:"G4-022", cs:"CS 9 — Ethnic Neighborhoods", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence formation of ethnic neighborhoods and identify the turning point.",
  events:["Immigrants arrive","People settle near familiar language/culture","Businesses and institutions develop","Neighborhood identity strengthens"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Settlement patterns drive neighborhood formation." },

{ id:"G4-023", cs:"CS 8 — Skyscrapers", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence skyscraper growth and identify the turning point.",
  events:["Steel production expands","Engineering methods improve","Skyscrapers are built","Cities grow denser"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Engineering improvements enable height." },

{ id:"G4-024", cs:"CS 11 — Voting Expansion", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence voting expansion and identify the turning point.",
  events:["Activists organize","Public support increases","Amendment is ratified","Participation increases"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Ratification changes the rules." },

{ id:"G4-025", cs:"CS 12 — Peace Debate", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence postwar peace debate and identify the turning point.",
  events:["Treaty is negotiated","Senate debates obligations","U.S. rejects broad commitments","Policy shifts toward isolationism"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Rejection reshapes foreign policy." },

{ id:"G4-026", cs:"CS 8 — Consumer Culture", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence consumer culture growth and identify the turning point.",
  events:["Mass production increases supply","Prices drop","More consumers buy goods","Advertising expands demand further"],
  correctOrder:[0,1,2,3], turningPoint:1,
  hint:"Lower prices broaden markets." },

{ id:"G4-027", cs:"CS 10 — Transit", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence transit expansion and identify the turning point.",
  events:["Cities grow outward","Demand for commuting rises","Streetcars/subways expand","Neighborhood patterns change"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Transit expansion reshapes where people live." },

{ id:"G4-028", cs:"CS 11 — Reform Legacy", tags:["G4"], type:"sequence-turning-point",
  stem:"Sequence reform legacy and identify the turning point.",
  events:["Problems intensify","Reform coalitions build","Key laws/amendments pass","Government role expands long-term"],
  correctOrder:[0,1,2,3], turningPoint:2,
  hint:"Passing major reforms changes the long-term role of government." },

/* =========================
   GAME 5 (G5) — Bullet Match (28)
   required: left[4], right[4], matchIndex[4] where matchIndex[rightIndex] = leftIndex
========================= */
{ id:"G5-001", tags:["G5"], type:"bullet-match", cs:"CS 8 — Industrialization",
  left:["Shift to factory work","Urban growth","New technology replaces some labor","Increased agricultural production"],
  right:["More wage labor in cities","Overcrowding and sanitation problems","Machines improve efficiency","More output per acre"],
  matchIndex:[0,1,2,3], hint:"Match each consequence to its best description." },

{ id:"G5-002", tags:["G5"], type:"bullet-match", cs:"CS 11 — Progressivism",
  left:["Muckrakers","Antitrust actions","Consumer protection","Political reform"],
  right:["Expose corruption/abuses","Limit monopoly power","Food/drug safety laws","Reduce machine influence"],
  matchIndex:[0,1,2,3], hint:"Connect reform tools to goals." },

{ id:"G5-003", tags:["G5"], type:"bullet-match", cs:"CS 7 — Organized Labor",
  left:["Collective bargaining","Strike","Boycott","Union membership growth"],
  right:["Negotiating as a group","Work stoppage","Refusing to buy goods","More workers organize"],
  matchIndex:[0,1,2,3], hint:"Labor tactics vocabulary." },

{ id:"G5-004", tags:["G5"], type:"bullet-match", cs:"CS 6 — Post-Reconstruction",
  left:["Jim Crow laws","Plessy v. Ferguson","Voter suppression tools","KKK intimidation"],
  right:["Legal segregation expands","'Separate but equal' upheld","Poll taxes/literacy tests","Violence/threats to control politics"],
  matchIndex:[0,1,2,3], hint:"Match policy/case/tactic to effect." },

{ id:"G5-005", tags:["G5"], type:"bullet-match", cs:"CS 4 — Declaration",
  left:["Unalienable rights","Consent of the governed","Equality of rights","Right to alter/abolish"],
  right:["Rights cannot be taken away","Government needs people’s approval","Same basic rights for citizens","People may change harmful government"],
  matchIndex:[0,1,2,3], hint:"Founding ideals." },

{ id:"G5-006", tags:["G5"], type:"bullet-match", cs:"CS 5 — Northwest Ordinance",
  left:["Statehood process","Education support","Natural rights protections","Republican government"],
  right:["Territory → state after requirements","Public schools encouraged","Civil liberties recognized","Elected representatives govern"],
  matchIndex:[0,1,2,3], hint:"Ordinance precedents." },

{ id:"G5-007", tags:["G5"], type:"bullet-match", cs:"CS 10 — Urban Challenges",
  left:["Tenements","Tuberculosis","Cholera","Sanitation reforms"],
  right:["Crowded apartments","Airborne disease spreads","Waterborne outbreaks","Sewers/clean water projects"],
  matchIndex:[0,1,2,3], hint:"Public health in cities." },

{ id:"G5-008", tags:["G5"], type:"bullet-match", cs:"CS 11 — Amendments",
  left:["17th Amendment","19th Amendment","22nd Amendment","25th Amendment"],
  right:["Direct election of senators","Women’s suffrage","Two-term presidential limit","Presidential succession/disability rules"],
  matchIndex:[0,1,2,3], hint:"Match amendment to change." },

{ id:"G5-009", tags:["G5"], type:"bullet-match", cs:"CS 8 — Technology",
  left:["Telephone","Incandescent light","Automobile","Skyscraper"],
  right:["Faster communication","Longer workday/safer lighting","Mass mobility and suburbs","Vertical urban growth"],
  matchIndex:[0,1,2,3], hint:"Tech → effect." },

{ id:"G5-010", tags:["G5"], type:"bullet-match", cs:"CS 7 — Workplace Reform",
  left:["Child labor limits","Safety regulations","Shorter hours","Workers’ compensation"],
  right:["Fewer children in factories","Reduced injury/death rates","Better work-life balance","Support after workplace injuries"],
  matchIndex:[0,1,2,3], hint:"Reforms → outcomes." },

{ id:"G5-011", tags:["G5"], type:"bullet-match", cs:"CS 9 — Immigration Patterns",
  left:["Push factors","Pull factors","Ethnic neighborhoods","Nativism"],
  right:["Poverty/persecution at home","Jobs/opportunity in U.S.","Cultural communities in cities","Anti-immigrant attitudes"],
  matchIndex:[0,1,2,3], hint:"Migration vocabulary." },

{ id:"G5-012", tags:["G5"], type:"bullet-match", cs:"CS 12 — Isolationism",
  left:["War disillusionment","Fear of entanglements","Treaty debates","Reduced intervention"],
  right:["Costs of WWI cause skepticism","Avoid alliances","Senate rejects obligations","Foreign involvement limited"],
  matchIndex:[0,1,2,3], hint:"Post-WWI choices." },

{ id:"G5-013", tags:["G5"], type:"bullet-match", cs:"CS 13 — Great Migration",
  left:["Push from South","Pull to North","Urban cultural change","New political influence"],
  right:["Violence/discrimination","Industrial jobs","Growth of Black neighborhoods","Shifts in voting/activism"],
  matchIndex:[0,1,2,3], hint:"Match cause/effect." },

{ id:"G5-014", tags:["G5"], type:"bullet-match", cs:"CS 8 — Corporate Power",
  left:["Vertical integration","Horizontal integration","Trust/monopoly","Laissez-faire"],
  right:["Control supply chain","Buy out competitors","One firm dominates market","Limited government regulation"],
  matchIndex:[0,1,2,3], hint:"Business organization terms." },

{ id:"G5-015", tags:["G5"], type:"bullet-match", cs:"CS 11 — City Reform",
  left:["Civil service","Secret ballot","Direct primary","Initiative/referendum"],
  right:["Merit hiring","Reduce voter coercion","Voters choose candidates","Direct democracy tools"],
  matchIndex:[0,1,2,3], hint:"Reform methods." },

{ id:"G5-016", tags:["G5"], type:"bullet-match", cs:"CS 8 — Industrial Society",
  left:["Rural to urban shift","Factory system","Mass production","Consumer goods increase"],
  right:["Cities expand","Centralized workplaces","Assembly lines/standardization","More affordable products"],
  matchIndex:[0,1,2,3], hint:"Big picture transitions." },

{ id:"G5-017", tags:["G5"], type:"bullet-match", cs:"CS 7 — Labor Violence",
  left:["Strikebreaking","Injunctions","Pinkertons/guards","Troops/police"],
  right:["Replace workers","Court orders limit strikes","Private security used","Force restores order"],
  matchIndex:[0,1,2,3], hint:"Responses to labor actions." },

{ id:"G5-018", tags:["G5"], type:"bullet-match", cs:"CS 10 — Infrastructure",
  left:["Clean water","Sewer systems","Building codes","Public transit"],
  right:["Lower cholera risk","Improved sanitation","Safer housing","Move workers efficiently"],
  matchIndex:[0,1,2,3], hint:"Urban improvements." },

{ id:"G5-019", tags:["G5"], type:"bullet-match", cs:"CS 11 — Regulation Examples",
  left:["Meat inspection","Drug labeling","Antitrust enforcement","Banking oversight"],
  right:["Safer food supply","Consumer information","Limit monopolies","Stability/consumer protection"],
  matchIndex:[0,1,2,3], hint:"Regulation → purpose." },

{ id:"G5-020", tags:["G5"], type:"bullet-match", cs:"CS 6 — Segregation Effects",
  left:["Separate facilities","Unequal funding","Limited political power","Social control"],
  right:["Division by race","Inferior services for Black citizens","Disenfranchisement","Maintain hierarchy"],
  matchIndex:[0,1,2,3], hint:"Segregation outcomes." },

{ id:"G5-021", tags:["G5"], type:"bullet-match", cs:"CS 8 — Farming Impacts",
  left:["Reaper/tractor","Rail shipment","Cash crops expand","Rural labor declines"],
  right:["Faster harvesting","Broader markets for food","Commercial agriculture grows","Migration to cities increases"],
  matchIndex:[0,1,2,3], hint:"Agriculture connects to industry." },

{ id:"G5-022", tags:["G5"], type:"bullet-match", cs:"CS 9 — City Life",
  left:["Overcrowding","Fire hazards","Disease spread","Reform campaigns"],
  right:["Too many people per building","Unsafe construction","TB/cholera outbreaks","Housing/health laws"],
  matchIndex:[0,1,2,3], hint:"Urban problems + responses." },

{ id:"G5-023", tags:["G5"], type:"bullet-match", cs:"CS 11 — Women’s Reform",
  left:["Suffrage activism","Settlement houses","Temperance support","Workplace advocacy"],
  right:["Vote expansion","Services for immigrants/poor","Limit alcohol’s harms","Labor protections"],
  matchIndex:[0,1,2,3], hint:"Women’s roles in reform." },

{ id:"G5-024", tags:["G5"], type:"bullet-match", cs:"CS 12 — Policy Choices",
  left:["Avoid alliances","Limit intervention","Debate treaties","Focus domestic issues"],
  right:["Entanglement fears","Stay out of conflicts","Senate scrutiny","Rebuild economy"],
  matchIndex:[0,1,2,3], hint:"Isolationist mindset." },

{ id:"G5-025", tags:["G5"], type:"bullet-match", cs:"CS 8 — Innovation",
  left:["Efficiency rises","Labor shifts","Output increases","Markets expand"],
  right:["More per hour produced","Workers move to factories","More goods/food","National distribution grows"],
  matchIndex:[0,1,2,3], hint:"Innovation effects chain." },

{ id:"G5-026", tags:["G5"], type:"bullet-match", cs:"CS 11 — Progressive Summary",
  left:["Expose problems","Regulate business","Protect consumers","Expand democracy"],
  right:["Muckrakers","Antitrust/safety laws","Food/drug acts","17th/19th amendments"],
  matchIndex:[0,1,2,3], hint:"Core Progressive pillars." },

{ id:"G5-027", tags:["G5"], type:"bullet-match", cs:"CS 8 — Urban Economy",
  left:["Factory wages","Immigration labor","City services demand","Housing shortage"],
  right:["Cash economy grows","Workforce expands","Infrastructure strain","Tenement growth"],
  matchIndex:[0,1,2,3], hint:"Urban economic dynamics." },

{ id:"G5-028", tags:["G5"], type:"bullet-match", cs:"CS 11 — 25th Amendment",
  left:["Incapacity declared","VP assumes authority","Cabinet supports process","Continuity maintained"],
  right:["Trigger succession procedures","Temporary transfer of power","Executive branch confirms","No leadership gap"],
  matchIndex:[0,1,2,3], hint:"Succession prevents gaps." },

/* =========================
   GAME 6 (G6) — Cause & Effect Chain (28)
   required: type:"cause-effect-chain", prompt, chain[4], correctOrder[4]
========================= */
{ id:"G6-001", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Industrialization",
  prompt:"Build the chain that explains how industrialization drives urban growth.",
  chain:["Factories expand production","Job opportunities increase in cities","Rural and immigrant workers move to cities","Overcrowding and sanitation problems intensify"],
  correctOrder:[0,1,2,3], hint:"Jobs pull people; growth strains cities." },

{ id:"G6-002", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Mechanized Farming",
  prompt:"Build the chain that explains mechanized farming’s impact on labor and cities.",
  chain:["New farm machinery is adopted","Farm productivity rises","Fewer workers are needed on farms","More workers migrate to cities for factory jobs"],
  correctOrder:[0,1,2,3], hint:"Mechanization reduces farm labor demand." },

{ id:"G6-003", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Muckrakers",
  prompt:"Build the chain showing how muckrakers helped produce reforms.",
  chain:["Journalists expose corruption/unsafe practices","Public awareness and outrage grow","Political pressure builds on lawmakers","Reform laws and regulations are passed"],
  correctOrder:[0,1,2,3], hint:"Exposure → outrage → pressure → laws." },

{ id:"G6-004", tags:["G6"], type:"cause-effect-chain", cs:"CS 7 — Labor Unions",
  prompt:"Build the chain explaining why unions formed and how they used leverage.",
  chain:["Workers face long hours/unsafe conditions","Workers organize into unions","Unions demand changes through bargaining","Strikes or boycotts are used when demands are refused"],
  correctOrder:[0,1,2,3], hint:"Organization precedes leverage." },

{ id:"G6-005", tags:["G6"], type:"cause-effect-chain", cs:"CS 6 — End of Reconstruction",
  prompt:"Build the chain explaining how ending Reconstruction led to expanded segregation.",
  chain:["Federal troops withdraw from the South","Redeemer governments regain control","Jim Crow laws and voting barriers expand","Segregation and disenfranchisement become entrenched"],
  correctOrder:[0,1,2,3], hint:"Withdrawal enables policy reversal." },

{ id:"G6-006", tags:["G6"], type:"cause-effect-chain", cs:"CS 6 — Plessy v. Ferguson",
  prompt:"Build the chain explaining how a Supreme Court decision reinforced segregation.",
  chain:["States enact segregation laws","Plessy v. Ferguson upholds 'separate but equal'","Legal support for segregation spreads","Segregation expands across public life"],
  correctOrder:[0,1,2,3], hint:"Court backing accelerates policy spread." },

{ id:"G6-007", tags:["G6"], type:"cause-effect-chain", cs:"CS 10 — Tenements & Disease",
  prompt:"Build the chain explaining why disease spread in crowded tenements.",
  chain:["Urban populations rise rapidly","Overcrowded tenements become common","Poor ventilation/sanitation increase exposure","Diseases like TB and cholera spread more easily"],
  correctOrder:[0,1,2,3], hint:"Density + poor sanitation increase risk." },

{ id:"G6-008", tags:["G6"], type:"cause-effect-chain", cs:"CS 10 — Public Health Reform",
  prompt:"Build the chain showing how cities responded to disease outbreaks.",
  chain:["Disease outbreaks increase","Officials identify sanitation as a cause","Cities invest in clean water and sewers","Public health outcomes improve over time"],
  correctOrder:[0,1,2,3], hint:"Infrastructure changes outcomes." },

{ id:"G6-009", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — National Markets",
  prompt:"Build the chain explaining how transportation supported national markets.",
  chain:["Railroad networks expand","Shipping becomes faster and cheaper","Businesses distribute goods nationally","National brands and markets grow"],
  correctOrder:[0,1,2,3], hint:"Transport → distribution → national markets." },

{ id:"G6-010", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Mass Production",
  prompt:"Build the chain explaining how mass production lowered prices.",
  chain:["Factories standardize production","Output increases significantly","Cost per unit drops","More consumers can afford goods"],
  correctOrder:[0,1,2,3], hint:"Economies of scale." },

{ id:"G6-011", tags:["G6"], type:"cause-effect-chain", cs:"CS 9 — Nativism",
  prompt:"Build the chain explaining how rapid immigration contributed to nativism.",
  chain:["Immigration increases rapidly","Competition and cultural fears rise","Nativist organizations gain support","Calls for restriction policies grow"],
  correctOrder:[0,1,2,3], hint:"Fear + competition drive backlash." },

{ id:"G6-012", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Consumer Protection",
  prompt:"Build the chain showing how consumer protection laws emerged.",
  chain:["Unsafe products are exposed","Public demands protection","Government passes safety regulations","Companies change practices to comply"],
  correctOrder:[0,1,2,3], hint:"Demand → regulation → compliance." },

{ id:"G6-013", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Antitrust",
  prompt:"Build the chain explaining why antitrust enforcement expanded.",
  chain:["Trusts/monopolies reduce competition","Prices and political influence raise concern","Reformers push government action","Antitrust enforcement increases"],
  correctOrder:[0,1,2,3], hint:"Monopoly power triggers reform." },

{ id:"G6-014", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 17th Amendment",
  prompt:"Build the chain explaining the move to direct election of senators.",
  chain:["Concerns about corruption grow","Reformers demand change","17th Amendment is adopted","Voters directly elect U.S. senators"],
  correctOrder:[0,1,2,3], hint:"Corruption concerns → reform → amendment." },

{ id:"G6-015", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 19th Amendment",
  prompt:"Build the chain explaining how women gained national suffrage.",
  chain:["Suffrage activists organize and campaign","Public/political support increases","19th Amendment is ratified","Women vote nationwide"],
  correctOrder:[0,1,2,3], hint:"Organization → support → ratification → participation." },

{ id:"G6-016", tags:["G6"], type:"cause-effect-chain", cs:"CS 5 — Northwest Ordinance",
  prompt:"Build the chain explaining how territories became states under the Northwest Ordinance model.",
  chain:["Territory establishes civil government","Population grows and meets requirements","Territory applies for statehood","Congress admits the new state"],
  correctOrder:[0,1,2,3], hint:"Requirements → application → admission." },

{ id:"G6-017", tags:["G6"], type:"cause-effect-chain", cs:"CS 4 — Declaration",
  prompt:"Build the chain explaining the Declaration’s logic about government power.",
  chain:["People possess unalienable rights","Government is created by consent","Government violates rights","People alter or abolish the government"],
  correctOrder:[0,1,2,3], hint:"Violation triggers the right to change government." },

{ id:"G6-018", tags:["G6"], type:"cause-effect-chain", cs:"CS 12 — Isolationism",
  prompt:"Build the chain explaining why the U.S. leaned toward isolationism after WWI.",
  chain:["WWI ends with heavy costs","Disillusionment with war grows","Fear of entangling alliances increases","Policies limit international involvement"],
  correctOrder:[0,1,2,3], hint:"Costs → disillusionment → avoidance." },

{ id:"G6-019", tags:["G6"], type:"cause-effect-chain", cs:"CS 13 — Great Migration",
  prompt:"Build the chain explaining the Great Migration’s push-pull process.",
  chain:["Push factors increase in the South","Northern industries need workers","Migration accelerates to Northern cities","New communities and cultural influence grow"],
  correctOrder:[0,1,2,3], hint:"Push + pull → migration → change." },

{ id:"G6-020", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Skyscrapers",
  prompt:"Build the chain explaining how new materials changed city skylines.",
  chain:["Steel production expands","Engineering techniques improve","Skyscrapers become practical","Cities grow denser vertically"],
  correctOrder:[0,1,2,3], hint:"Steel + engineering enable height." },

{ id:"G6-021", tags:["G6"], type:"cause-effect-chain", cs:"CS 10 — Transit",
  prompt:"Build the chain explaining how public transit reshaped cities.",
  chain:["City jobs concentrate downtown","Commuting demand increases","Streetcars/subways expand routes","Residential patterns spread outward"],
  correctOrder:[0,1,2,3], hint:"Transit expands where people can live." },

{ id:"G6-022", tags:["G6"], type:"cause-effect-chain", cs:"CS 7 — Labor Conflict",
  prompt:"Build the chain explaining how strikes could trigger conflict.",
  chain:["Workers strike to demand changes","Production slows or stops","Owners seek strikebreakers/police support","Clashes and violence sometimes occur"],
  correctOrder:[0,1,2,3], hint:"Disruption provokes strong responses." },

{ id:"G6-023", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — City Reform",
  prompt:"Build the chain explaining how city corruption led to reform efforts.",
  chain:["Machine politics grows in cities","Corruption and patronage become visible","Reformers push civil service changes","Professional management increases"],
  correctOrder:[0,1,2,3], hint:"Visibility of corruption fuels reform." },

{ id:"G6-024", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — Conservation",
  prompt:"Build the chain explaining why conservation policies expanded.",
  chain:["Resources are exploited rapidly","Concern about depletion increases","Government protects lands/resources","Conservation becomes a lasting policy area"],
  correctOrder:[0,1,2,3], hint:"Concern drives policy protection." },

{ id:"G6-025", tags:["G6"], type:"cause-effect-chain", cs:"CS 8 — Consumer Culture",
  prompt:"Build the chain showing how mass production influenced consumer culture.",
  chain:["Factories mass-produce goods","Prices fall","More households buy consumer products","Advertising and brand competition expand"],
  correctOrder:[0,1,2,3], hint:"Lower prices broaden demand." },

{ id:"G6-026", tags:["G6"], type:"cause-effect-chain", cs:"CS 6 — Disenfranchisement",
  prompt:"Build the chain explaining how voting barriers reduced political power.",
  chain:["States adopt poll taxes and literacy tests","Many African Americans are blocked from voting","Representation and influence decline","Policies maintain segregation and inequality"],
  correctOrder:[0,1,2,3], hint:"Barriers → turnout drop → power drop." },

{ id:"G6-027", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 22nd Amendment",
  prompt:"Build the chain explaining why presidential term limits were added.",
  chain:["Concern grows about long-term executive power","A constitutional limit is proposed","22nd Amendment is ratified","Presidents are limited to two elected terms"],
  correctOrder:[0,1,2,3], hint:"Concern → proposal → ratification → limit." },

{ id:"G6-028", tags:["G6"], type:"cause-effect-chain", cs:"CS 11 — 25th Amendment",
  prompt:"Build the chain explaining how the 25th Amendment ensures continuity of leadership.",
  chain:["President is incapacitated or removed","25th Amendment procedures are triggered","Vice President can assume authority temporarily","Continuity of executive leadership is maintained"],
  correctOrder:[0,1,2,3], hint:"Succession rules prevent leadership gaps." }

];

/* Exports */
window.AMSTUD_BANK = AMSTUD_BANK;
window.AMSTUD_BANK_VERSION = "2026-03-03-REBUILT-G1toG6";
console.log("✅ AMSTUD_BANK loaded:", AMSTUD_BANK.length, window.AMSTUD_BANK_VERSION);
