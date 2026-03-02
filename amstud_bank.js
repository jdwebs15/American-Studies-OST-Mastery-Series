/* American Studies OST Mastery — Shared Question Bank
   FILE: /amstud_bank.js  (repo root)
   IMPORTANT:
   - Loaded by games with: <script src="../amstud_bank.js"></script>
   - Must define window.AMSTUD_BANK (and we also define global var AMSTUD_BANK for compatibility)
*/

(function () {
  "use strict";

  const bank = [
    // =========================================================
    // GAME 1 (Cause & Effect) — tag: "Cause & Effect"
    // =========================================================
    {
      cs: "CS 1 – Evaluating Source Credibility",
      tag: "Cause & Effect",
      stem: "A historian claims a political cartoon from 1890 proves that all Americans supported new immigration restrictions. Which detail most weakens the historian’s conclusion?",
      choices: [
        "The cartoon was created during the same year as a national election",
        "The cartoon reflects the viewpoint of one artist rather than the entire public",
        "The cartoon includes labels that identify major political parties",
        "The cartoon was printed in a newspaper rather than a history textbook"
      ],
      answerIndex: 1,
      hint: "Credibility and causation claims collapse when the evidence is too narrow to represent the whole population.",
      explain: "A single cartoon shows one perspective; it cannot by itself prove nationwide public agreement."
    },
    {
      cs: "CS 2 – Analyzing Primary & Secondary Sources",
      tag: "Cause & Effect",
      stem: "A textbook chapter argues that a strike failed mainly because workers were “unpatriotic.” What is the best next step to evaluate that cause-and-effect claim?",
      choices: [
        "Accept it because textbooks are secondary sources written by experts",
        "Compare it with primary sources such as newspapers, union statements, or employer records",
        "Ignore it because secondary sources are always biased",
        "Verify it by finding a single photograph from the strike"
      ],
      answerIndex: 1,
      hint: "Test cause-and-effect claims by corroborating with multiple sources, especially primary evidence.",
      explain: "Corroborating with primary sources helps verify whether the author’s explanation fits the evidence."
    },
    {
      cs: "CS 3 – Cause, Effect, and Sequence",
      tag: "Cause & Effect",
      stem: "Which factor most directly contributed to the rapid growth of cities in the late 1800s?",
      choices: [
        "A decline in factory production",
        "An increase in industrial jobs and transportation networks",
        "A reduction in immigration to the United States",
        "A decrease in international trade"
      ],
      answerIndex: 1,
      hint: "City growth accelerates when jobs and access concentrate in one place.",
      explain: "Industrial jobs and transportation (railroads/streetcars) pulled people into urban centers."
    },
    {
      cs: "CS 4 – Contextualization",
      tag: "Cause & Effect",
      stem: "Why did many reformers during the Progressive Era focus on city governments?",
      choices: [
        "Because cities had no laws regulating business",
        "Because corruption and public health problems were highly visible in rapidly growing cities",
        "Because the federal government was the only level allowed to pass reforms",
        "Because most Americans lived in rural areas"
      ],
      answerIndex: 1,
      hint: "Connect reform priorities to the problems created by urbanization.",
      explain: "Rapid urban growth exposed corruption, unsafe conditions, and health crises that reformers targeted."
    },
    {
      cs: "CS 5 – Multiple Perspectives",
      tag: "Cause & Effect",
      stem: "Which explanation best accounts for why industrialists and labor leaders often disagreed about strikes?",
      choices: [
        "Industrialists believed strikes helped profits, while labor leaders opposed them",
        "Industrialists prioritized property and production, while labor leaders prioritized wages and working conditions",
        "Industrialists supported collective bargaining, while labor leaders rejected it",
        "Industrialists wanted smaller workforces, while labor leaders wanted fewer workers"
      ],
      answerIndex: 1,
      hint: "Think: competing interests create different interpretations of cause and blame.",
      explain: "Different priorities led to different views about what caused workplace conflict and how to solve it."
    },

    // CS6–CS10
    {
      cs: "CS 6 – Rise of Corporations & Industrial Growth",
      tag: "Cause & Effect",
      stem: "Which development most directly helped corporations expand into national businesses during the late 1800s?",
      choices: [
        "The decline of railroads",
        "The spread of national rail networks and new communication technology",
        "The end of immigration to the U.S.",
        "A reduction in consumer demand"
      ],
      answerIndex: 1,
      hint: "National markets require national transportation and communication.",
      explain: "Railroads and communication allowed businesses to reach customers and move goods nationwide."
    },
    {
      cs: "CS 7 – Labor Organizations",
      tag: "Cause & Effect",
      stem: "Why did labor unions grow during the late 1800s?",
      choices: [
        "Workers wanted to eliminate wages and replace them with profit-sharing",
        "Unsafe conditions, long hours, and low pay led workers to organize for reforms",
        "Most employers supported collective bargaining and encouraged union membership",
        "The federal government required all workers to join unions"
      ],
      answerIndex: 1,
      hint: "Union growth is typically a reaction to workplace conditions and power imbalance.",
      explain: "Poor conditions and limited worker power pushed laborers to organize for change."
    },
    {
      cs: "CS 8 – Laissez-faire Policies & Big Business",
      tag: "Cause & Effect",
      stem: "How did laissez-faire attitudes most directly affect industrial America?",
      choices: [
        "They increased government regulation of wages and hours",
        "They allowed powerful trusts/monopolies to grow with limited oversight",
        "They eliminated competition by requiring all firms to set identical prices",
        "They prevented corporations from expanding across state lines"
      ],
      answerIndex: 1,
      hint: "Less regulation often means fewer limits on consolidation and corporate power.",
      explain: "Minimal regulation enabled trusts and monopolies to expand and dominate industries."
    },
    {
      cs: "CS 9 – Technological Innovation & Standard of Living",
      tag: "Cause & Effect",
      stem: "Which was a major effect of new technologies such as electric lighting and household appliances in the early 1900s?",
      choices: [
        "They increased the cost of living for most Americans by reducing production",
        "They changed daily life by saving time and improving convenience",
        "They ended factory work by eliminating the need for manufactured goods",
        "They reduced urban growth by pushing people back to rural areas"
      ],
      answerIndex: 1,
      hint: "Focus on how technology changes time, labor, and daily routines.",
      explain: "New technology improved convenience and reshaped work and home life."
    },
    {
      cs: "CS 10 – Immigration, Internal Migration, Urbanization",
      tag: "Cause & Effect",
      stem: "What was a common effect of mass immigration and urban growth around 1900?",
      choices: [
        "A decrease in demand for factory labor",
        "Overcrowded housing and increased public health challenges",
        "The end of ethnic neighborhoods in cities",
        "A sharp decline in city infrastructure needs"
      ],
      answerIndex: 1,
      hint: "Rapid population growth strains housing, sanitation, and health systems.",
      explain: "Overcrowding and poor sanitation contributed to disease and major urban health challenges."
    },

    // CS11–CS20 (compact set so Game 1 has plenty)
    {
      cs: "CS 11 – Progressive Reforms",
      tag: "Cause & Effect",
      stem: "Progressive Era reforms such as food and drug regulation were most directly caused by:",
      choices: [
        "A decline in industrial production",
        "Public exposure of unsafe products and corporate abuses",
        "The collapse of the stock market in 1929",
        "The start of the Cold War"
      ],
      answerIndex: 1,
      hint: "Progressive reforms often follow publicity about harmful conditions.",
      explain: "Muckrakers and public pressure helped trigger consumer protection reforms."
    },
    {
      cs: "CS 12 – Women’s Suffrage and Social Change",
      tag: "Cause & Effect",
      stem: "Which factor most contributed to the success of the women’s suffrage movement by 1920?",
      choices: [
        "A Supreme Court decision banning voting",
        "Organized activism and arguments linking voting to democratic equality",
        "A federal law requiring states to reject voting rights",
        "A decline in women’s participation in public life"
      ],
      answerIndex: 1,
      hint: "Look for sustained organization + persuasion + political pressure.",
      explain: "Persistent activism and democratic arguments built support for the 19th Amendment."
    },
    {
      cs: "CS 13 – U.S. Role in World War I",
      tag: "Cause & Effect",
      stem: "Which event most directly pushed the United States toward entering World War I?",
      choices: [
        "The construction of the Panama Canal",
        "German unrestricted submarine warfare targeting ships in the Atlantic",
        "The start of the Harlem Renaissance",
        "The passage of the Social Security Act"
      ],
      answerIndex: 1,
      hint: "Think: direct threats to U.S. ships and citizens.",
      explain: "Unrestricted submarine warfare increased pressure for U.S. involvement."
    },
    {
      cs: "CS 14 – Post-WWI Peace Efforts",
      tag: "Cause & Effect",
      stem: "Why did the U.S. Senate reject the Treaty of Versailles?",
      choices: [
        "Senators believed it ended the war too quickly",
        "Many feared the League of Nations would pull the U.S. into future foreign conflicts",
        "The treaty gave the U.S. too much territory in Europe",
        "The treaty eliminated U.S. trade rights"
      ],
      answerIndex: 1,
      hint: "Connect the treaty to the League of Nations and concerns about entangling alliances.",
      explain: "Opponents feared membership would weaken U.S. independence in foreign policy."
    },
    {
      cs: "CS 15 – Isolationism in the 1920s–30s",
      tag: "Cause & Effect",
      stem: "Which policy best reflects U.S. isolationist tendencies during the 1930s?",
      choices: [
        "The Neutrality Acts limiting involvement in foreign wars",
        "The Truman Doctrine pledging containment worldwide",
        "The Marshall Plan rebuilding Europe after WWII",
        "NATO’s collective defense agreement"
      ],
      answerIndex: 0,
      hint: "Isolationism = laws designed to avoid being pulled into war.",
      explain: "The Neutrality Acts aimed to prevent involvement in overseas conflicts."
    },
    {
      cs: "CS 16 – Causes of the Great Depression",
      tag: "Cause & Effect",
      stem: "Which factor contributed most directly to the onset of the Great Depression?",
      choices: [
        "The GI Bill",
        "Stock speculation combined with economic weaknesses like overproduction and consumer debt",
        "The creation of NATO",
        "The passage of the Voting Rights Act"
      ],
      answerIndex: 1,
      hint: "Think 1920s economic instability + market crash.",
      explain: "Speculation and structural weaknesses contributed to collapse and widespread unemployment."
    },
    {
      cs: "CS 17 – Effects of the Great Depression",
      tag: "Cause & Effect",
      stem: "Which was a major effect of the Great Depression on American society?",
      choices: [
        "A sharp increase in wages nationwide",
        "High unemployment and increased demand for government action",
        "A sudden end to consumer credit",
        "A major expansion of U.S. overseas colonies"
      ],
      answerIndex: 1,
      hint: "Effects: job loss, bank failures, and pressure on government.",
      explain: "Mass unemployment and hardship increased calls for federal intervention."
    },
    {
      cs: "CS 18 – The New Deal & Expanded Federal Role",
      tag: "Cause & Effect",
      stem: "Why did New Deal programs expand the role of the federal government?",
      choices: [
        "To reduce government involvement in the economy",
        "To respond to economic collapse with relief, recovery, and reform programs",
        "To eliminate all private businesses",
        "To end state and local governments"
      ],
      answerIndex: 1,
      hint: "Match the New Deal to the crisis it was designed to address.",
      explain: "New Deal programs were created to combat Depression hardship and stabilize the economy."
    },
    {
      cs: "CS 19 – Rise of Dictatorships & Global Tensions",
      tag: "Cause & Effect",
      stem: "Which condition helped contribute to the rise of dictators in parts of Europe after World War I?",
      choices: [
        "Strong economies and stable democracies",
        "Economic hardship and political instability",
        "An immediate end to nationalism",
        "A rapid expansion of civil rights protections"
      ],
      answerIndex: 1,
      hint: "Dictators often rise when people lose faith in unstable systems.",
      explain: "Economic crises and instability created openings for authoritarian leaders."
    },
    {
      cs: "CS 20 – U.S. Entry into World War II",
      tag: "Cause & Effect",
      stem: "Which event directly led the United States to enter World War II?",
      choices: [
        "The invasion of Poland",
        "The attack on Pearl Harbor",
        "The passage of the Lend-Lease Act",
        "The signing of the Atlantic Charter"
      ],
      answerIndex: 1,
      hint: "December 7, 1941.",
      explain: "Pearl Harbor triggered a declaration of war and full U.S. entry into WWII."
    },

    // CS21–CS33 (a few more for coverage + CS33 explicitly)
    {
      cs: "CS 21 – WWII Homefront",
      tag: "Cause & Effect",
      stem: "Why did the U.S. government promote rationing during World War II?",
      choices: [
        "To reduce the need for military supplies",
        "To conserve resources for the war effort and control shortages",
        "To end industrial production",
        "To decrease employment"
      ],
      answerIndex: 1,
      hint: "Rationing redirects scarce goods to military needs.",
      explain: "Rationing conserved materials and ensured the military had priority access."
    },
    {
      cs: "CS 22 – Postwar Economic Boom",
      tag: "Cause & Effect",
      stem: "What most helped drive the U.S. economic boom after World War II?",
      choices: [
        "A collapse in consumer demand",
        "Rising consumer spending, suburban growth, and expanded access to education/home loans",
        "The end of technological innovation",
        "A return to widespread isolationism"
      ],
      answerIndex: 1,
      hint: "Think: pent-up demand + suburbs + education + loans.",
      explain: "Postwar demand and expanded opportunities helped fuel growth and a higher standard of living."
    },
    {
      cs: "CS 23 – Early Cold War Tensions",
      tag: "Cause & Effect",
      stem: "Why did Cold War tensions grow between the United States and the Soviet Union after WWII?",
      choices: [
        "They agreed to share control of global trade",
        "They had competing ideologies and mistrust about postwar influence",
        "They both supported the same political systems worldwide",
        "They ended military alliances entirely"
      ],
      answerIndex: 1,
      hint: "Focus on capitalism vs communism and postwar power competition.",
      explain: "Ideological conflict and competition for influence fueled long-term tension."
    },
    {
      cs: "CS 24 – Containment Policy",
      tag: "Cause & Effect",
      stem: "U.S. containment policy was primarily designed to:",
      choices: [
        "Expand communism into new regions",
        "Prevent the spread of communism and limit Soviet influence",
        "End all U.S. foreign involvement",
        "Replace democratic governments with military rule"
      ],
      answerIndex: 1,
      hint: "Containment = stop spread.",
      explain: "Containment aimed to block the expansion of communism into additional countries."
    },
    {
      cs: "CS 25 – Red Scare & Domestic Impact",
      tag: "Cause & Effect",
      stem: "Which factor most directly contributed to the Second Red Scare in the United States?",
      choices: [
        "Increased trust in the Soviet Union",
        "Fear of communist influence during early Cold War conflicts",
        "The end of international rivalries after WWII",
        "A decline in political participation"
      ],
      answerIndex: 1,
      hint: "Domestic fear increased as international tension increased.",
      explain: "Cold War rivalry heightened suspicion and fear of communist influence at home."
    },
    {
      cs: "CS 31 – Globalization & Technological Change",
      tag: "Cause & Effect",
      stem: "What is one major effect of globalization on U.S. manufacturing in the late 20th century?",
      choices: [
        "All manufacturing jobs stayed in the U.S. with no changes",
        "Some companies relocated production to reduce costs, changing U.S. labor markets",
        "International trade ended and the U.S. became economically isolated",
        "Technology reduced communication between countries"
      ],
      answerIndex: 1,
      hint: "Global competition affects where production happens.",
      explain: "Globalization increased competition and incentivized some companies to move production, reshaping jobs."
    },
    {
      cs: "CS 32 – The U.S. in an Interdependent World",
      tag: "Cause & Effect",
      stem: "Why did the U.S. economy become more connected to world events in the late 20th century?",
      choices: [
        "Because international trade and finance expanded and supply chains became global",
        "Because the U.S. ended trade with all countries",
        "Because transportation and communication became slower",
        "Because U.S. consumers stopped buying foreign goods"
      ],
      answerIndex: 0,
      hint: "Interdependence grows when trade, finance, and supply chains expand.",
      explain: "Expanded trade and global supply chains made the U.S. economy more connected to global events."
    },
    {
      cs: "CS 33 – Struggles for Equality & Civil Rights Expansion (1945–1994)",
      tag: "Cause & Effect",
      stem: "How did federal legislation such as the Civil Rights Act (1964) and Voting Rights Act (1965) most directly affect U.S. society?",
      choices: [
        "They expanded legal segregation in public life",
        "They strengthened enforcement of equal access and voting protections",
        "They transferred all election control exclusively to private organizations",
        "They reduced the role of the Constitution in civil rights"
      ],
      answerIndex: 1,
      hint: "Think: enforcement mechanisms + access + protections.",
      explain: "These laws expanded protections and enforcement against discrimination and voting barriers."
    },

    // =========================================================
    // GAME 2 (Select Two) — tags:["G2"...], type:"select-two"
    // =========================================================
    {
      id: "CS1-G2-001",
      csNum: 1,
      cs: "CS 1 – Historical Thinking: Source Credibility",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO reasons a single diary entry is limited evidence for proving that “most Americans” supported a policy.",
      choices: [
        "It reflects one person’s perspective and experiences",
        "It represents opinions collected from a national poll",
        "It may not include viewpoints from other regions or groups",
        "It was written in the past, so it cannot be used by historians"
      ],
      correctIndices: [0, 2],
      hint: "Think: representativeness and sampling.",
      explain: "A diary is one perspective and may not represent broader public opinion."
    },
    {
      id: "CS2-G2-002",
      csNum: 2,
      cs: "CS 2 – Primary vs. Secondary Sources",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO examples of primary sources a historian could use to study urban living conditions around 1900.",
      choices: [
        "Photographs of tenements taken at the time",
        "A modern textbook summary chapter about urbanization",
        "City health department inspection reports from 1900",
        "A 2020 documentary film reflecting on the Progressive Era"
      ],
      correctIndices: [0, 2],
      hint: "Primary sources come from the time period being studied.",
      explain: "Photos and inspection reports created during the era are primary sources."
    },
    {
      id: "CS3-G2-003",
      csNum: 3,
      cs: "CS 3 – Cause and Effect",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO factors that helped drive rapid industrial growth in the late 1800s.",
      choices: [
        "Expanded railroad networks and national markets",
        "A sharp reduction in new inventions and patents",
        "Large labor supply from immigration and migration",
        "The elimination of factory production"
      ],
      correctIndices: [0, 2],
      hint: "Look for conditions that expand markets and labor.",
      explain: "Railroads connected markets; labor supply grew through immigration/migration."
    },
    {
      id: "CS4-G2-004",
      csNum: 4,
      cs: "CS 4 – Contextualization",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO reasons reformers focused on city governments during rapid urbanization.",
      choices: [
        "Corruption and machine politics shaped many city services",
        "Cities had no problems with sanitation or housing",
        "Overcrowding increased public health risks",
        "Most Americans lived on isolated farms far from cities"
      ],
      correctIndices: [0, 2],
      hint: "Urbanization often creates visible problems and pressure for reform.",
      explain: "Corruption and public health crises became urgent in growing cities."
    },
    {
      id: "CS5-G2-005",
      csNum: 5,
      cs: "CS 5 – Multiple Perspectives",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO reasons business owners and workers often disagreed during major strikes.",
      choices: [
        "Owners prioritized profits and uninterrupted production",
        "Workers prioritized better wages and safer working conditions",
        "Owners believed unions should set national laws",
        "Workers wanted to end all employment and close factories"
      ],
      correctIndices: [0, 1],
      hint: "Competing interests create different solutions and blame.",
      explain: "Owners and workers valued different goals: production/profit vs. conditions/pay."
    },

    // ...KEEP your remaining G2 items here exactly (I’m including your full set)...
    {
      id:"CS6-G2-006", csNum:6, cs:"CS 6 – Rise of Corporations & Industrialization",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO developments that helped corporations expand into national businesses.",
      choices:["Railroads and national distribution networks","A complete end to advertising and branding","Telegraph/telephone and faster communication","A ban on interstate trade"],
      correctIndices:[0,2], hint:"National scale requires national transport + communication.",
      explain:"Rail networks and communication technology enabled national business growth."
    },
    {
      id:"CS7-G2-007", csNum:7, cs:"CS 7 – Labor Organizations",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO common goals of labor unions in the late 1800s and early 1900s.",
      choices:["Shorter workdays and safer working conditions","Higher wages or fairer pay practices","Replacing elections with rule by corporations","Ending all workplace rules and safety standards"],
      correctIndices:[0,1], hint:"Unions formed to improve labor conditions and bargaining power.",
      explain:"Unions pushed for safer conditions, shorter hours, and better pay."
    },
    {
      id:"CS8-G2-008", csNum:8, cs:"CS 8 – Laissez-faire & Big Business",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO outcomes that often resulted from laissez-faire attitudes toward big business.",
      choices:["Growth of trusts/monopolies with limited oversight","Increased government regulation of factory safety","Greater concentration of economic power in fewer firms","The immediate elimination of all corporate profits"],
      correctIndices:[0,2], hint:"Less oversight can allow consolidation and concentration of power.",
      explain:"Minimal regulation enabled monopolies and concentrated corporate power."
    },
    {
      id:"CS9-G2-009", csNum:9, cs:"CS 9 – Technology & the Economy/Society",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways new technology affected daily life in the early 1900s.",
      choices:["Improved communication or access to information","Saved time or changed household labor routines","Eliminated all demand for factory-made goods","Ended the need for transportation networks"],
      correctIndices:[0,1], hint:"Think: communication and household/consumer life changes.",
      explain:"Technology improved communication and reshaped home/work routines."
    },
    {
      id:"CS10-G2-010", csNum:10, cs:"CS 10 – Immigration, Internal Migration & Urbanization",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO challenges associated with overcrowded tenement housing around 1900.",
      choices:["Poor ventilation and the spread of diseases like tuberculosis","Increased access to clean water and sanitation in every building","Rapid spread of cholera due to contaminated water and poor sanitation","Guaranteed spacious living areas for large families"],
      correctIndices:[0,2], hint:"Overcrowding + sanitation problems = public health crises.",
      explain:"Tenements often had poor ventilation and sanitation, increasing disease spread."
    },
    {
      id:"CS11-G2-011", csNum:11, cs:"CS 11 – Progressive Era Reforms",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons Progressive reformers supported stronger regulation of food and medicines.",
      choices:["Public exposure of unsafe products and misleading labels","A desire to eliminate all government action permanently","Growing public pressure for consumer protection","A goal of ending public health inspections"],
      correctIndices:[0,2], hint:"Progressive reforms often followed publicity about harms.",
      explain:"Unsafe products and public pressure drove consumer protection reforms."
    },
    {
      id:"CS12-G2-012", csNum:12, cs:"CS 12 – Women’s Suffrage",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO strategies suffrage activists used to win voting rights.",
      choices:["Organized petitions, marches, and public campaigns","Direct lobbying of lawmakers and building coalitions","Rejecting all political participation","Calling for the abolition of elections"],
      correctIndices:[0,1], hint:"Think organized activism + political pressure.",
      explain:"Activists used public organizing and lobbying to build support for an amendment."
    },
    {
      id:"CS13-G2-013", csNum:13, cs:"CS 13 – U.S. Involvement in World War I",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that increased U.S. pressure to enter World War I.",
      choices:["Unrestricted submarine warfare threatening ships","U.S. neutrality laws requiring immediate war","Economic ties and trade interests with Allied powers","A national decision to eliminate all overseas trade"],
      correctIndices:[0,2], hint:"Think threats + interests.",
      explain:"Submarine warfare and economic ties increased pressure to enter the conflict."
    },
    {
      id:"CS14-G2-014", csNum:14, cs:"CS 14 – Post-WWI Peace Efforts",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons many U.S. senators opposed joining the League of Nations.",
      choices:["Fear the U.S. would be drawn into future wars","Belief it could limit U.S. independence in foreign policy","Desire to increase U.S. military commitments worldwide immediately","Belief the League required the U.S. to end all trade"],
      correctIndices:[0,1], hint:"Opposition centered on entanglement and sovereignty.",
      explain:"Many feared entangling alliances and limits on independent decision-making."
    },
    {
      id:"CS15-G2-015", csNum:15, cs:"CS 15 – Isolationism in the 1930s",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO examples of policies reflecting U.S. isolationist tendencies before WWII.",
      choices:["Neutrality Acts limiting aid or involvement","Cash-and-carry restrictions on trade with belligerents","Truman Doctrine and global containment commitments","NATO collective defense agreements"],
      correctIndices:[0,1], hint:"Isolationism = avoiding commitments that pull the U.S. into war.",
      explain:"Neutrality Acts and cash-and-carry were designed to avoid involvement."
    },
    {
      id:"CS16-G2-016", csNum:16, cs:"CS 16 – Causes of the Great Depression",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that contributed to the Great Depression.",
      choices:["Stock market speculation and risky investing","Weak banking practices and bank failures","The GI Bill expanding college access","The Marshall Plan rebuilding Europe"],
      correctIndices:[0,1], hint:"Think 1920s weaknesses + collapse mechanisms.",
      explain:"Speculation and fragile banking helped trigger and deepen the depression."
    },
    {
      id:"CS17-G2-017", csNum:17, cs:"CS 17 – Effects of the Great Depression",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO major effects of the Great Depression on Americans.",
      choices:["Widespread unemployment and poverty","Increased demand for government relief programs","A sudden nationwide increase in wages","A total end to all political debate"],
      correctIndices:[0,1], hint:"Think hardship + pressure for action.",
      explain:"Unemployment and suffering increased demand for government response."
    },
    {
      id:"CS18-G2-018", csNum:18, cs:"CS 18 – New Deal & Federal Role",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO goals of the New Deal.",
      choices:["Provide relief for unemployed and struggling Americans","Reform financial systems to reduce future crashes","Eliminate all private businesses permanently","End state governments"],
      correctIndices:[0,1], hint:"New Deal = relief, recovery, reform.",
      explain:"Programs aimed to relieve suffering and reform systems like banking/markets."
    },
    {
      id:"CS19-G2-019", csNum:19, cs:"CS 19 – Rise of Dictatorships & Global Tension",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO conditions that helped dictators gain power between WWI and WWII.",
      choices:["Economic crisis and mass unemployment","Political instability and weak democratic institutions","Stable democracies with rising satisfaction","An end to nationalism across Europe"],
      correctIndices:[0,1], hint:"Authoritarian movements grow when systems look like they are failing.",
      explain:"Economic and political instability made extreme leaders more appealing to some citizens."
    },
    {
      id:"CS20-G2-020", csNum:20, cs:"CS 20 – U.S. Entry into WWII",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO actions that moved the U.S. closer to involvement in WWII before Pearl Harbor.",
      choices:["Lend-Lease aid to Allied nations","Atlantic Charter cooperation with Britain","The U.S. declaration to join the Axis powers","A law banning all U.S. trade worldwide"],
      correctIndices:[0,1], hint:"Look for policies supporting Allies short of declaring war.",
      explain:"Lend-Lease and Atlantic Charter increased cooperation and support for Allies."
    },
    {
      id:"CS21-G2-021", csNum:21, cs:"CS 21 – WWII Homefront",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways WWII changed the U.S. homefront.",
      choices:["Rationing and increased government management of resources","Women’s expanded roles in industrial work","An immediate end to wartime production","The collapse of all factories"],
      correctIndices:[0,1], hint:"Think: mobilization changes labor and resources.",
      explain:"War mobilization brought rationing and expanded workforce roles for women."
    },
    {
      id:"CS22-G2-022", csNum:22, cs:"CS 22 – Postwar Boom",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that contributed to U.S. economic growth after WWII.",
      choices:["Rising consumer demand and suburban expansion","Expanded access to education and home loans","A total ban on consumer spending","The elimination of manufacturing"],
      correctIndices:[0,1], hint:"Pent-up demand + housing + education access.",
      explain:"Spending, suburbanization, and expanded access to loans/education fueled growth."
    },
    {
      id:"CS23-G2-023", csNum:23, cs:"CS 23 – Cold War Causes",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons Cold War tensions developed after WWII.",
      choices:["Competing ideologies: capitalism vs. communism","Mistrust over postwar influence and security","A shared plan to unify under one government","An agreement to eliminate all alliances"],
      correctIndices:[0,1], hint:"Ideological rivalry + security competition.",
      explain:"Ideology and power competition fueled tensions."
    },
    {
      id:"CS24-G2-024", csNum:24, cs:"CS 24 – Containment",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO examples of U.S. actions consistent with containment.",
      choices:["Providing economic or military aid to resist communist expansion","Forming alliances to deter Soviet influence","Withdrawing from global affairs entirely","Supporting the spread of communism"],
      correctIndices:[0,1], hint:"Containment = block expansion.",
      explain:"Aid and alliances were tools used to limit Soviet/communist expansion."
    },
    {
      id:"CS25-G2-025", csNum:25, cs:"CS 25 – Red Scare",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that fueled anti-communist fear in the U.S. during the early Cold War.",
      choices:["International rivalry and conflicts with the Soviet bloc","Espionage cases and fears of internal subversion","The end of all political propaganda","An immediate worldwide peace settlement"],
      correctIndices:[0,1], hint:"Think external conflict + internal suspicion.",
      explain:"Global tensions and espionage fears heightened domestic suspicion."
    },
    {
      id:"CS26-G2-026", csNum:26, cs:"CS 26 – Civil Rights Movement",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO outcomes of civil rights activism in the 1950s–60s.",
      choices:["Legal challenges and court rulings against segregation","Federal legislation strengthening equal access and voting rights","Expansion of Jim Crow laws nationwide","The elimination of constitutional protections"],
      correctIndices:[0,1], hint:"Look for legal and legislative changes that expanded rights.",
      explain:"Court rulings and federal laws expanded protections and enforcement."
    },
    {
      id:"CS27-G2-027", csNum:27, cs:"CS 27 – Rights Movements for Other Groups",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons rights movements expanded after WWII beyond African American civil rights.",
      choices:["Activists used democratic ideals to argue for broader equality","Media coverage helped spread awareness of unequal treatment","A federal policy required segregation for all groups","Courts refused to hear any civil liberties cases"],
      correctIndices:[0,1], hint:"Think activism + visibility + ideals.",
      explain:"Democratic ideals and media attention helped broaden demands for equality."
    },
    {
      id:"CS28-G2-028", csNum:28, cs:"CS 28 – Social/Cultural Change (1945–1994)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways mass media influenced American culture after WWII.",
      choices:["Created shared national experiences through TV/radio","Helped spread new music, trends, and youth culture","Ended communication between different regions","Eliminated advertising"],
      correctIndices:[0,1], hint:"Media spreads shared culture and trends.",
      explain:"TV/radio helped standardize and spread popular culture nationwide."
    },
    {
      id:"CS29-G2-029", csNum:29, cs:"CS 29 – Immigration Patterns (post-1965)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO effects of changes in U.S. immigration policy after the mid-1960s.",
      choices:["Changed the regions many immigrants came from","Increased cultural and demographic diversity in many communities","Ended immigration entirely","Required immigrants to settle only in rural areas"],
      correctIndices:[0,1], hint:"Policy changes can reshape origin patterns and diversity.",
      explain:"Post-1960s reforms reshaped immigration origins and increased diversity."
    },
    {
      id:"CS30-G2-030", csNum:30, cs:"CS 30 – End of the Cold War",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that contributed to the collapse of communist governments by 1991.",
      choices:["Economic stagnation and declining living standards","Reform movements challenging one-party control","A massive expansion of Soviet prosperity","A worldwide agreement to ban political protest"],
      correctIndices:[0,1], hint:"Think internal weaknesses + pressure for reform.",
      explain:"Economic stagnation and reform movements undermined communist control."
    },
    {
      id:"CS33-G2-031", csNum:33, cs:"CS 33 – Equality & Civil Rights Expansion (1945–1994)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons civil rights activism intensified after World War II.",
      choices:["The contradiction between democratic ideals and discrimination became harder to defend","Returning veterans and activists demanded fuller rights and protections","The federal government eliminated all civil rights laws","Segregation ended everywhere by 1946"],
      correctIndices:[0,1], hint:"Look for pressure points: ideals vs reality + organized demands for change.",
      explain:"Postwar contradictions and increased activism fueled stronger movements."
    },
    {
      id:"CS33-G2-032", csNum:33, cs:"CS 33 – Equality & Civil Rights Expansion (1945–1994)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways federal actions in the 1960s strengthened civil rights protections.",
      choices:["Created enforcement tools against discrimination in public accommodations and employment","Protected voting rights by targeting barriers like discriminatory practices","Required states to legalize segregation in schools","Ended the 14th Amendment’s equal protection clause"],
      correctIndices:[0,1], hint:"Think: enforcement + voting protections.",
      explain:"Federal laws strengthened enforcement against discrimination and barriers to voting."
    },

    // =========================================================
    // GAME 3 (Best Explains) — tags:["G3"], type:"best-explains"
    // MUST have enough items so Game 3 can pull 25–30.
    // =========================================================
    // Your original 10:
    {
      id:"G3-001", csNum:6, cs:"CS 6 – Rise of Corporations & Industrial Growth",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why railroads were a turning point for late-1800s industrial growth?",
      choices:[
        "They reduced the need for factories by encouraging home production",
        "They connected raw materials, factories, and consumers into a national market",
        "They ended immigration by making travel more expensive",
        "They eliminated competition by banning interstate trade"
      ],
      answerIndex:1,
      hint:"Think: national markets depend on moving goods cheaply and quickly.",
      explain:"Railroads linked regions and lowered shipping costs, allowing firms to sell nationwide."
    },
    {
      id:"G3-002", csNum:7, cs:"CS 7 – Labor Organizations",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why strikes often became violent in the late 1800s?",
      choices:[
        "Workers usually wanted to eliminate all wages immediately",
        "Employers and governments sometimes used police or private guards to break strikes",
        "Unions were illegal in every state and could never bargain",
        "Factories closed permanently whenever workers protested"
      ],
      answerIndex:1,
      hint:"Think: force used to maintain production and control labor.",
      explain:"Companies and officials sometimes used force to end strikes, escalating conflict."
    },
    {
      id:"G3-003", csNum:8, cs:"CS 8 – Laissez-faire & Big Business",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains how laissez-faire ideas helped trusts grow?",
      choices:[
        "Government avoided regulating consolidation, allowing firms to merge and dominate markets",
        "Government required every business to keep the same prices",
        "Government forced corporations to break into smaller companies",
        "Government banned national advertising and branding"
      ],
      answerIndex:0,
      hint:"Less oversight = easier consolidation.",
      explain:"Limited regulation allowed large firms to combine power and reduce competition."
    },
    {
      id:"G3-004", csNum:10, cs:"CS 10 – Immigration, Internal Migration, Urbanization",
      tags:["G3"], type:"best-explains",
      stem:"Which choice best explains why disease spread quickly in many tenements around 1900?",
      choices:[
        "Overcrowding and poor sanitation created ideal conditions for contagious illness",
        "Tenements required all residents to receive free medical care",
        "Cities banned public transportation, forcing isolation",
        "Most tenements were located far from other housing"
      ],
      answerIndex:0,
      hint:"Crowding + sanitation problems = outbreaks.",
      explain:"Tight quarters, limited ventilation, and poor sanitation increased transmission."
    },
    {
      id:"G3-005", csNum:11, cs:"CS 11 – Progressive Era Reforms",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why muckraker journalism mattered to Progressive reform?",
      choices:[
        "It reduced public attention to social problems",
        "It exposed corruption and unsafe conditions, increasing pressure for laws",
        "It ended the need for elections by appointing reformers",
        "It convinced citizens that regulation always harms consumers"
      ],
      answerIndex:1,
      hint:"Exposure → public pressure → reform.",
      explain:"Investigative reporting raised awareness and built support for regulation and reform."
    },
    {
      id:"G3-006", csNum:14, cs:"CS 14 – Post-WWI Peace Efforts",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why many senators opposed the League of Nations?",
      choices:[
        "They feared it would reduce U.S. control over decisions to enter future conflicts",
        "They believed it required the U.S. to end all trade permanently",
        "They wanted to colonize Europe after World War I",
        "They believed it would abolish the U.S. Constitution"
      ],
      answerIndex:0,
      hint:"Key issue: sovereignty and entangling commitments.",
      explain:"Many worried collective security obligations could limit independent U.S. foreign policy."
    },
    {
      id:"G3-007", csNum:16, cs:"CS 16 – Causes of the Great Depression",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains how stock speculation increased economic risk in the 1920s?",
      choices:[
        "Investors borrowed heavily to buy stocks, magnifying losses when prices fell",
        "Banks required all customers to stop buying stocks",
        "Workers refused to save money, raising wages too quickly",
        "The government banned consumer credit nationwide"
      ],
      answerIndex:0,
      hint:"Borrowing to invest = bigger crash impact.",
      explain:"Buying on margin amplified risk and worsened the crash when prices dropped."
    },
    {
      id:"G3-008", csNum:18, cs:"CS 18 – New Deal & Federal Role",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why the New Deal expanded federal power?",
      choices:[
        "It sought to eliminate state governments entirely",
        "It responded to economic collapse with national relief, recovery, and reform programs",
        "It ended elections and replaced Congress with agencies",
        "It stopped all government involvement in the economy"
      ],
      answerIndex:1,
      hint:"Crisis required national-scale action.",
      explain:"The severity of the Depression led to federal programs to stabilize the economy and society."
    },
    {
      id:"G3-009", csNum:23, cs:"CS 23 – Early Cold War Tensions",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the U.S. and USSR became rivals after WWII?",
      choices:[
        "They shared identical political and economic systems",
        "They competed for influence and had conflicting ideologies",
        "They agreed to end all alliances and reduce militaries",
        "They merged into one combined government"
      ],
      answerIndex:1,
      hint:"Ideology + power competition.",
      explain:"Capitalism vs. communism and security concerns drove the rivalry."
    },
    {
      id:"G3-010", csNum:33, cs:"CS 33 – Equality & Civil Rights Expansion (1945–1994)",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why civil rights activism expanded after WWII?",
      choices:[
        "Discrimination ended nationwide, so activism became unnecessary",
        "The gap between democratic ideals and unequal treatment became harder to ignore",
        "The Constitution removed equal protection after the war",
        "Most Americans stopped caring about political rights"
      ],
      answerIndex:1,
      hint:"Contradiction between ideals and reality fuels movements.",
      explain:"Postwar democracy rhetoric highlighted the injustice of continued discrimination."
    },

    // Added 18 more (G3-011 ... G3-028) so Game 3 can always pull 25–30:
    {
      id:"G3-011", csNum:1, cs:"CS 1 – Source Credibility",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why historians compare multiple sources when studying the same event?",
      choices:[
        "Because one source always tells the full truth without bias",
        "Because corroboration helps reduce bias and strengthens conclusions",
        "Because primary sources are always inaccurate",
        "Because secondary sources cannot include evidence"
      ],
      answerIndex:1,
      hint:"Multiple sources = stronger claims.",
      explain:"Comparing sources helps confirm details and identify bias or missing perspectives."
    },
    {
      id:"G3-012", csNum:2, cs:"CS 2 – Primary vs Secondary",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why a newspaper editorial from 1910 must be used carefully as evidence?",
      choices:[
        "It is written too close to the events to be meaningful",
        "It reflects opinion and may emphasize persuasion over balanced reporting",
        "It is always less useful than a textbook",
        "It cannot reveal any historical attitudes"
      ],
      answerIndex:1,
      hint:"Editorials = viewpoint evidence.",
      explain:"Editorials show attitudes and arguments, but may be biased or selective in facts."
    },
    {
      id:"G3-013", csNum:9, cs:"CS 9 – Technology & Society",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains how mass production changed consumer life in the early 1900s?",
      choices:[
        "It reduced the supply of goods and raised prices",
        "It lowered costs and made more goods affordable to more people",
        "It ended factory work by eliminating machines",
        "It forced all Americans to live in rural areas"
      ],
      answerIndex:1,
      hint:"Mass production usually lowers unit cost.",
      explain:"Assembly lines and standardization increased output and often reduced prices."
    },
    {
      id:"G3-014", csNum:12, cs:"CS 12 – Women’s Suffrage",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the 19th Amendment is considered a major democratic expansion?",
      choices:[
        "It limited voting to property owners",
        "It expanded political participation to include most women nationwide",
        "It reduced federal authority over elections",
        "It eliminated political parties"
      ],
      answerIndex:1,
      hint:"Democratic expansion = more eligible voters.",
      explain:"The amendment broadened who could participate in elections."
    },
    {
      id:"G3-015", csNum:13, cs:"CS 13 – WWI",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why unrestricted submarine warfare mattered to U.S. public opinion?",
      choices:[
        "It threatened neutral trade and American lives, increasing calls for intervention",
        "It ended all shipping in the Atlantic immediately",
        "It made Europe independent from U.S. goods",
        "It reduced international tensions"
      ],
      answerIndex:0,
      hint:"Threats to Americans shift neutrality.",
      explain:"Attacks on ships raised the perceived cost of staying neutral."
    },
    {
      id:"G3-016", csNum:15, cs:"CS 15 – Isolationism",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why many Americans supported the Neutrality Acts in the 1930s?",
      choices:[
        "They believed war always benefits the U.S. economy",
        "They wanted to avoid repeating the costs of WWI and being drawn into another war",
        "They wanted the U.S. to join every international alliance",
        "They believed Congress had no power over foreign policy"
      ],
      answerIndex:1,
      hint:"Memory of WWI shaped policy.",
      explain:"Many voters favored avoiding entanglements after WWI losses and disappointment."
    },
    {
      id:"G3-017", csNum:17, cs:"CS 17 – Depression Effects",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why the Great Depression increased pressure for federal action?",
      choices:[
        "Because the economy quickly fixed itself without hardship",
        "Because widespread unemployment and bank failures overwhelmed local resources",
        "Because Congress had no constitutional powers",
        "Because state governments stopped existing"
      ],
      answerIndex:1,
      hint:"Scale of crisis exceeded local capacity.",
      explain:"The severity of hardship increased demand for national relief and reform."
    },
    {
      id:"G3-018", csNum:19, cs:"CS 19 – Dictatorships",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why economic crisis can strengthen extremist political movements?",
      choices:[
        "Because people become more satisfied with existing systems",
        "Because desperation can increase support for leaders promising simple solutions and order",
        "Because elections are canceled automatically during recessions",
        "Because citizens stop caring about politics"
      ],
      answerIndex:1,
      hint:"Hard times increase openness to radical promises.",
      explain:"Instability can make authoritarian promises more appealing to some voters."
    },
    {
      id:"G3-019", csNum:20, cs:"CS 20 – WWII Entry",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why Pearl Harbor changed U.S. policy immediately?",
      choices:[
        "It was viewed as a direct attack, making neutrality politically impossible",
        "It ended all fighting in Europe",
        "It proved the U.S. had no economic ties abroad",
        "It eliminated the need for military mobilization"
      ],
      answerIndex:0,
      hint:"Direct attack → war declaration.",
      explain:"A direct attack created urgency and public support for entering the war."
    },
    {
      id:"G3-020", csNum:21, cs:"CS 21 – WWII Homefront",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why wartime production affected civil rights and labor patterns?",
      choices:[
        "It reduced the need for workers nationwide",
        "It increased demand for workers, opening opportunities and increasing migration to industrial centers",
        "It ended industrial work permanently",
        "It forced all factories to close"
      ],
      answerIndex:1,
      hint:"War mobilization expands production.",
      explain:"Labor demand rose sharply, reshaping jobs and migration."
    },
    {
      id:"G3-021", csNum:22, cs:"CS 22 – Postwar Boom",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains how the GI Bill contributed to postwar prosperity?",
      choices:[
        "It reduced education access and limited home buying",
        "It expanded education and home ownership, strengthening the middle class",
        "It ended suburban growth",
        "It eliminated consumer demand"
      ],
      answerIndex:1,
      hint:"Education + housing access fuels growth.",
      explain:"Broader access to college and mortgages supported upward mobility and spending."
    },
    {
      id:"G3-022", csNum:24, cs:"CS 24 – Containment",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the U.S. formed alliances during the Cold War?",
      choices:[
        "To expand communism into new regions",
        "To deter Soviet influence and strengthen collective security",
        "To eliminate all military cooperation",
        "To end international trade"
      ],
      answerIndex:1,
      hint:"Alliances = deterrence.",
      explain:"Alliances were meant to prevent expansion by raising the cost of aggression."
    },
    {
      id:"G3-023", csNum:25, cs:"CS 25 – Red Scare",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why anti-communist investigations gained support in the early Cold War?",
      choices:[
        "Because the U.S. and USSR were close allies with no tensions",
        "Because fear of espionage and global rivalry increased suspicion at home",
        "Because Americans stopped consuming news media",
        "Because Congress lost the power to investigate anything"
      ],
      answerIndex:1,
      hint:"International tension spills into domestic fear.",
      explain:"Rivalry and espionage cases increased concern about internal subversion."
    },
    {
      id:"G3-024", csNum:26, cs:"CS 26 – Civil Rights",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why Brown v. Board of Education is considered a turning point?",
      choices:[
        "It strengthened legal segregation in schools",
        "It declared segregated public schools unconstitutional, energizing further challenges",
        "It ended all discrimination instantly nationwide",
        "It removed federal courts from civil rights cases"
      ],
      answerIndex:1,
      hint:"Turning point = legal shift + momentum.",
      explain:"It overturned the legal basis for school segregation and accelerated activism."
    },
    {
      id:"G3-025", csNum:27, cs:"CS 27 – Expanding Rights",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why later rights movements borrowed strategies from the civil rights movement?",
      choices:[
        "Because the civil rights movement failed to achieve any legal changes",
        "Because organizing, litigation, and nonviolent protest proved effective at gaining attention and policy change",
        "Because the Constitution banned protests",
        "Because media coverage disappeared after 1950"
      ],
      answerIndex:1,
      hint:"Effective strategies get reused.",
      explain:"Successful tactics often become models for later movements seeking equality."
    },
    {
      id:"G3-026", csNum:28, cs:"CS 28 – Social/Cultural Change",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why television accelerated cultural change after WWII?",
      choices:[
        "It isolated Americans from national information",
        "It spread shared images, music, and ideas rapidly to mass audiences",
        "It eliminated advertising and consumer culture",
        "It prevented youth culture from forming"
      ],
      answerIndex:1,
      hint:"Mass media scales culture.",
      explain:"TV broadcast the same messages nationwide, shaping shared culture and trends."
    },
    {
      id:"G3-027", csNum:29, cs:"CS 29 – Immigration (post-1965)",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why post-1965 immigration changed U.S. demographics?",
      choices:[
        "Because U.S. law ended immigration completely",
        "Because policy changes altered who could immigrate, increasing diversity of origins",
        "Because the U.S. required immigrants to settle only in one state",
        "Because global travel became impossible"
      ],
      answerIndex:1,
      hint:"Policy shapes patterns.",
      explain:"Legal reforms reshaped immigration flows and broadened origin regions."
    },
    {
      id:"G3-028", csNum:30, cs:"CS 30 – End of Cold War",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the Soviet Union faced increasing instability by the late 1980s?",
      choices:[
        "Because its economy grew rapidly and politics stabilized",
        "Because economic stagnation and reform pressures weakened one-party control",
        "Because it ended all reform efforts and modernized fully",
        "Because global competition disappeared"
      ],
      answerIndex:1,
      hint:"Long-term weakness + pressure to change.",
      explain:"Economic strain and reform movements undermined centralized control."
    },
   /* American Studies OST Mastery — Shared Question Bank
   FILE: /amstud_bank.js  (repo root)
   IMPORTANT:
   - Loaded by games with: <script src="../amstud_bank.js"></script>
   - Must define window.AMSTUD_BANK (and we also define global var AMSTUD_BANK for compatibility)
*/

(function () {
  "use strict";

  const bank = [
    // =========================================================
    // GAME 1 (Cause & Effect) — tag: "Cause & Effect"
    // =========================================================
    {
      cs: "CS 1 – Evaluating Source Credibility",
      tag: "Cause & Effect",
      stem: "A historian claims a political cartoon from 1890 proves that all Americans supported new immigration restrictions. Which detail most weakens the historian’s conclusion?",
      choices: [
        "The cartoon was created during the same year as a national election",
        "The cartoon reflects the viewpoint of one artist rather than the entire public",
        "The cartoon includes labels that identify major political parties",
        "The cartoon was printed in a newspaper rather than a history textbook"
      ],
      answerIndex: 1,
      hint: "Credibility and causation claims collapse when the evidence is too narrow to represent the whole population.",
      explain: "A single cartoon shows one perspective; it cannot by itself prove nationwide public agreement."
    },
    {
      cs: "CS 2 – Analyzing Primary & Secondary Sources",
      tag: "Cause & Effect",
      stem: "A textbook chapter argues that a strike failed mainly because workers were “unpatriotic.” What is the best next step to evaluate that cause-and-effect claim?",
      choices: [
        "Accept it because textbooks are secondary sources written by experts",
        "Compare it with primary sources such as newspapers, union statements, or employer records",
        "Ignore it because secondary sources are always biased",
        "Verify it by finding a single photograph from the strike"
      ],
      answerIndex: 1,
      hint: "Test cause-and-effect claims by corroborating with multiple sources, especially primary evidence.",
      explain: "Corroborating with primary sources helps verify whether the author’s explanation fits the evidence."
    },
    {
      cs: "CS 3 – Cause, Effect, and Sequence",
      tag: "Cause & Effect",
      stem: "Which factor most directly contributed to the rapid growth of cities in the late 1800s?",
      choices: [
        "A decline in factory production",
        "An increase in industrial jobs and transportation networks",
        "A reduction in immigration to the United States",
        "A decrease in international trade"
      ],
      answerIndex: 1,
      hint: "City growth accelerates when jobs and access concentrate in one place.",
      explain: "Industrial jobs and transportation (railroads/streetcars) pulled people into urban centers."
    },
    {
      cs: "CS 4 – Contextualization",
      tag: "Cause & Effect",
      stem: "Why did many reformers during the Progressive Era focus on city governments?",
      choices: [
        "Because cities had no laws regulating business",
        "Because corruption and public health problems were highly visible in rapidly growing cities",
        "Because the federal government was the only level allowed to pass reforms",
        "Because most Americans lived in rural areas"
      ],
      answerIndex: 1,
      hint: "Connect reform priorities to the problems created by urbanization.",
      explain: "Rapid urban growth exposed corruption, unsafe conditions, and health crises that reformers targeted."
    },
    {
      cs: "CS 5 – Multiple Perspectives",
      tag: "Cause & Effect",
      stem: "Which explanation best accounts for why industrialists and labor leaders often disagreed about strikes?",
      choices: [
        "Industrialists believed strikes helped profits, while labor leaders opposed them",
        "Industrialists prioritized property and production, while labor leaders prioritized wages and working conditions",
        "Industrialists supported collective bargaining, while labor leaders rejected it",
        "Industrialists wanted smaller workforces, while labor leaders wanted fewer workers"
      ],
      answerIndex: 1,
      hint: "Think: competing interests create different interpretations of cause and blame.",
      explain: "Different priorities led to different views about what caused workplace conflict and how to solve it."
    },

    // CS6–CS10
    {
      cs: "CS 6 – Rise of Corporations & Industrial Growth",
      tag: "Cause & Effect",
      stem: "Which development most directly helped corporations expand into national businesses during the late 1800s?",
      choices: [
        "The decline of railroads",
        "The spread of national rail networks and new communication technology",
        "The end of immigration to the U.S.",
        "A reduction in consumer demand"
      ],
      answerIndex: 1,
      hint: "National markets require national transportation and communication.",
      explain: "Railroads and communication allowed businesses to reach customers and move goods nationwide."
    },
    {
      cs: "CS 7 – Labor Organizations",
      tag: "Cause & Effect",
      stem: "Why did labor unions grow during the late 1800s?",
      choices: [
        "Workers wanted to eliminate wages and replace them with profit-sharing",
        "Unsafe conditions, long hours, and low pay led workers to organize for reforms",
        "Most employers supported collective bargaining and encouraged union membership",
        "The federal government required all workers to join unions"
      ],
      answerIndex: 1,
      hint: "Union growth is typically a reaction to workplace conditions and power imbalance.",
      explain: "Poor conditions and limited worker power pushed laborers to organize for change."
    },
    {
      cs: "CS 8 – Laissez-faire Policies & Big Business",
      tag: "Cause & Effect",
      stem: "How did laissez-faire attitudes most directly affect industrial America?",
      choices: [
        "They increased government regulation of wages and hours",
        "They allowed powerful trusts/monopolies to grow with limited oversight",
        "They eliminated competition by requiring all firms to set identical prices",
        "They prevented corporations from expanding across state lines"
      ],
      answerIndex: 1,
      hint: "Less regulation often means fewer limits on consolidation and corporate power.",
      explain: "Minimal regulation enabled trusts and monopolies to expand and dominate industries."
    },
    {
      cs: "CS 9 – Technological Innovation & Standard of Living",
      tag: "Cause & Effect",
      stem: "Which was a major effect of new technologies such as electric lighting and household appliances in the early 1900s?",
      choices: [
        "They increased the cost of living for most Americans by reducing production",
        "They changed daily life by saving time and improving convenience",
        "They ended factory work by eliminating the need for manufactured goods",
        "They reduced urban growth by pushing people back to rural areas"
      ],
      answerIndex: 1,
      hint: "Focus on how technology changes time, labor, and daily routines.",
      explain: "New technology improved convenience and reshaped work and home life."
    },
    {
      cs: "CS 10 – Immigration, Internal Migration, Urbanization",
      tag: "Cause & Effect",
      stem: "What was a common effect of mass immigration and urban growth around 1900?",
      choices: [
        "A decrease in demand for factory labor",
        "Overcrowded housing and increased public health challenges",
        "The end of ethnic neighborhoods in cities",
        "A sharp decline in city infrastructure needs"
      ],
      answerIndex: 1,
      hint: "Rapid population growth strains housing, sanitation, and health systems.",
      explain: "Overcrowding and poor sanitation contributed to disease and major urban health challenges."
    },

    // CS11–CS20 (compact set so Game 1 has plenty)
    {
      cs: "CS 11 – Progressive Reforms",
      tag: "Cause & Effect",
      stem: "Progressive Era reforms such as food and drug regulation were most directly caused by:",
      choices: [
        "A decline in industrial production",
        "Public exposure of unsafe products and corporate abuses",
        "The collapse of the stock market in 1929",
        "The start of the Cold War"
      ],
      answerIndex: 1,
      hint: "Progressive reforms often follow publicity about harmful conditions.",
      explain: "Muckrakers and public pressure helped trigger consumer protection reforms."
    },
    {
      cs: "CS 12 – Women’s Suffrage and Social Change",
      tag: "Cause & Effect",
      stem: "Which factor most contributed to the success of the women’s suffrage movement by 1920?",
      choices: [
        "A Supreme Court decision banning voting",
        "Organized activism and arguments linking voting to democratic equality",
        "A federal law requiring states to reject voting rights",
        "A decline in women’s participation in public life"
      ],
      answerIndex: 1,
      hint: "Look for sustained organization + persuasion + political pressure.",
      explain: "Persistent activism and democratic arguments built support for the 19th Amendment."
    },
    {
      cs: "CS 13 – U.S. Role in World War I",
      tag: "Cause & Effect",
      stem: "Which event most directly pushed the United States toward entering World War I?",
      choices: [
        "The construction of the Panama Canal",
        "German unrestricted submarine warfare targeting ships in the Atlantic",
        "The start of the Harlem Renaissance",
        "The passage of the Social Security Act"
      ],
      answerIndex: 1,
      hint: "Think: direct threats to U.S. ships and citizens.",
      explain: "Unrestricted submarine warfare increased pressure for U.S. involvement."
    },
    {
      cs: "CS 14 – Post-WWI Peace Efforts",
      tag: "Cause & Effect",
      stem: "Why did the U.S. Senate reject the Treaty of Versailles?",
      choices: [
        "Senators believed it ended the war too quickly",
        "Many feared the League of Nations would pull the U.S. into future foreign conflicts",
        "The treaty gave the U.S. too much territory in Europe",
        "The treaty eliminated U.S. trade rights"
      ],
      answerIndex: 1,
      hint: "Connect the treaty to the League of Nations and concerns about entangling alliances.",
      explain: "Opponents feared membership would weaken U.S. independence in foreign policy."
    },
    {
      cs: "CS 15 – Isolationism in the 1920s–30s",
      tag: "Cause & Effect",
      stem: "Which policy best reflects U.S. isolationist tendencies during the 1930s?",
      choices: [
        "The Neutrality Acts limiting involvement in foreign wars",
        "The Truman Doctrine pledging containment worldwide",
        "The Marshall Plan rebuilding Europe after WWII",
        "NATO’s collective defense agreement"
      ],
      answerIndex: 0,
      hint: "Isolationism = laws designed to avoid being pulled into war.",
      explain: "The Neutrality Acts aimed to prevent involvement in overseas conflicts."
    },
    {
      cs: "CS 16 – Causes of the Great Depression",
      tag: "Cause & Effect",
      stem: "Which factor contributed most directly to the onset of the Great Depression?",
      choices: [
        "The GI Bill",
        "Stock speculation combined with economic weaknesses like overproduction and consumer debt",
        "The creation of NATO",
        "The passage of the Voting Rights Act"
      ],
      answerIndex: 1,
      hint: "Think 1920s economic instability + market crash.",
      explain: "Speculation and structural weaknesses contributed to collapse and widespread unemployment."
    },
    {
      cs: "CS 17 – Effects of the Great Depression",
      tag: "Cause & Effect",
      stem: "Which was a major effect of the Great Depression on American society?",
      choices: [
        "A sharp increase in wages nationwide",
        "High unemployment and increased demand for government action",
        "A sudden end to consumer credit",
        "A major expansion of U.S. overseas colonies"
      ],
      answerIndex: 1,
      hint: "Effects: job loss, bank failures, and pressure on government.",
      explain: "Mass unemployment and hardship increased calls for federal intervention."
    },
    {
      cs: "CS 18 – The New Deal & Expanded Federal Role",
      tag: "Cause & Effect",
      stem: "Why did New Deal programs expand the role of the federal government?",
      choices: [
        "To reduce government involvement in the economy",
        "To respond to economic collapse with relief, recovery, and reform programs",
        "To eliminate all private businesses",
        "To end state and local governments"
      ],
      answerIndex: 1,
      hint: "Match the New Deal to the crisis it was designed to address.",
      explain: "New Deal programs were created to combat Depression hardship and stabilize the economy."
    },
    {
      cs: "CS 19 – Rise of Dictatorships & Global Tensions",
      tag: "Cause & Effect",
      stem: "Which condition helped contribute to the rise of dictators in parts of Europe after World War I?",
      choices: [
        "Strong economies and stable democracies",
        "Economic hardship and political instability",
        "An immediate end to nationalism",
        "A rapid expansion of civil rights protections"
      ],
      answerIndex: 1,
      hint: "Dictators often rise when people lose faith in unstable systems.",
      explain: "Economic crises and instability created openings for authoritarian leaders."
    },
    {
      cs: "CS 20 – U.S. Entry into World War II",
      tag: "Cause & Effect",
      stem: "Which event directly led the United States to enter World War II?",
      choices: [
        "The invasion of Poland",
        "The attack on Pearl Harbor",
        "The passage of the Lend-Lease Act",
        "The signing of the Atlantic Charter"
      ],
      answerIndex: 1,
      hint: "December 7, 1941.",
      explain: "Pearl Harbor triggered a declaration of war and full U.S. entry into WWII."
    },

    // CS21–CS33 (a few more for coverage + CS33 explicitly)
    {
      cs: "CS 21 – WWII Homefront",
      tag: "Cause & Effect",
      stem: "Why did the U.S. government promote rationing during World War II?",
      choices: [
        "To reduce the need for military supplies",
        "To conserve resources for the war effort and control shortages",
        "To end industrial production",
        "To decrease employment"
      ],
      answerIndex: 1,
      hint: "Rationing redirects scarce goods to military needs.",
      explain: "Rationing conserved materials and ensured the military had priority access."
    },
    {
      cs: "CS 22 – Postwar Economic Boom",
      tag: "Cause & Effect",
      stem: "What most helped drive the U.S. economic boom after World War II?",
      choices: [
        "A collapse in consumer demand",
        "Rising consumer spending, suburban growth, and expanded access to education/home loans",
        "The end of technological innovation",
        "A return to widespread isolationism"
      ],
      answerIndex: 1,
      hint: "Think: pent-up demand + suburbs + education + loans.",
      explain: "Postwar demand and expanded opportunities helped fuel growth and a higher standard of living."
    },
    {
      cs: "CS 23 – Early Cold War Tensions",
      tag: "Cause & Effect",
      stem: "Why did Cold War tensions grow between the United States and the Soviet Union after WWII?",
      choices: [
        "They agreed to share control of global trade",
        "They had competing ideologies and mistrust about postwar influence",
        "They both supported the same political systems worldwide",
        "They ended military alliances entirely"
      ],
      answerIndex: 1,
      hint: "Focus on capitalism vs communism and postwar power competition.",
      explain: "Ideological conflict and competition for influence fueled long-term tension."
    },
    {
      cs: "CS 24 – Containment Policy",
      tag: "Cause & Effect",
      stem: "U.S. containment policy was primarily designed to:",
      choices: [
        "Expand communism into new regions",
        "Prevent the spread of communism and limit Soviet influence",
        "End all U.S. foreign involvement",
        "Replace democratic governments with military rule"
      ],
      answerIndex: 1,
      hint: "Containment = stop spread.",
      explain: "Containment aimed to block the expansion of communism into additional countries."
    },
    {
      cs: "CS 25 – Red Scare & Domestic Impact",
      tag: "Cause & Effect",
      stem: "Which factor most directly contributed to the Second Red Scare in the United States?",
      choices: [
        "Increased trust in the Soviet Union",
        "Fear of communist influence during early Cold War conflicts",
        "The end of international rivalries after WWII",
        "A decline in political participation"
      ],
      answerIndex: 1,
      hint: "Domestic fear increased as international tension increased.",
      explain: "Cold War rivalry heightened suspicion and fear of communist influence at home."
    },
    {
      cs: "CS 31 – Globalization & Technological Change",
      tag: "Cause & Effect",
      stem: "What is one major effect of globalization on U.S. manufacturing in the late 20th century?",
      choices: [
        "All manufacturing jobs stayed in the U.S. with no changes",
        "Some companies relocated production to reduce costs, changing U.S. labor markets",
        "International trade ended and the U.S. became economically isolated",
        "Technology reduced communication between countries"
      ],
      answerIndex: 1,
      hint: "Global competition affects where production happens.",
      explain: "Globalization increased competition and incentivized some companies to move production, reshaping jobs."
    },
    {
      cs: "CS 32 – The U.S. in an Interdependent World",
      tag: "Cause & Effect",
      stem: "Why did the U.S. economy become more connected to world events in the late 20th century?",
      choices: [
        "Because international trade and finance expanded and supply chains became global",
        "Because the U.S. ended trade with all countries",
        "Because transportation and communication became slower",
        "Because U.S. consumers stopped buying foreign goods"
      ],
      answerIndex: 0,
      hint: "Interdependence grows when trade, finance, and supply chains expand.",
      explain: "Expanded trade and global supply chains made the U.S. economy more connected to global events."
    },
    {
      cs: "CS 33 – Struggles for Equality & Civil Rights Expansion (1945–1994)",
      tag: "Cause & Effect",
      stem: "How did federal legislation such as the Civil Rights Act (1964) and Voting Rights Act (1965) most directly affect U.S. society?",
      choices: [
        "They expanded legal segregation in public life",
        "They strengthened enforcement of equal access and voting protections",
        "They transferred all election control exclusively to private organizations",
        "They reduced the role of the Constitution in civil rights"
      ],
      answerIndex: 1,
      hint: "Think: enforcement mechanisms + access + protections.",
      explain: "These laws expanded protections and enforcement against discrimination and voting barriers."
    },

    // =========================================================
    // GAME 2 (Select Two) — tags:["G2"...], type:"select-two"
    // =========================================================
    {
      id: "CS1-G2-001",
      csNum: 1,
      cs: "CS 1 – Historical Thinking: Source Credibility",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO reasons a single diary entry is limited evidence for proving that “most Americans” supported a policy.",
      choices: [
        "It reflects one person’s perspective and experiences",
        "It represents opinions collected from a national poll",
        "It may not include viewpoints from other regions or groups",
        "It was written in the past, so it cannot be used by historians"
      ],
      correctIndices: [0, 2],
      hint: "Think: representativeness and sampling.",
      explain: "A diary is one perspective and may not represent broader public opinion."
    },
    {
      id: "CS2-G2-002",
      csNum: 2,
      cs: "CS 2 – Primary vs. Secondary Sources",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO examples of primary sources a historian could use to study urban living conditions around 1900.",
      choices: [
        "Photographs of tenements taken at the time",
        "A modern textbook summary chapter about urbanization",
        "City health department inspection reports from 1900",
        "A 2020 documentary film reflecting on the Progressive Era"
      ],
      correctIndices: [0, 2],
      hint: "Primary sources come from the time period being studied.",
      explain: "Photos and inspection reports created during the era are primary sources."
    },
    {
      id: "CS3-G2-003",
      csNum: 3,
      cs: "CS 3 – Cause and Effect",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO factors that helped drive rapid industrial growth in the late 1800s.",
      choices: [
        "Expanded railroad networks and national markets",
        "A sharp reduction in new inventions and patents",
        "Large labor supply from immigration and migration",
        "The elimination of factory production"
      ],
      correctIndices: [0, 2],
      hint: "Look for conditions that expand markets and labor.",
      explain: "Railroads connected markets; labor supply grew through immigration/migration."
    },
    {
      id: "CS4-G2-004",
      csNum: 4,
      cs: "CS 4 – Contextualization",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO reasons reformers focused on city governments during rapid urbanization.",
      choices: [
        "Corruption and machine politics shaped many city services",
        "Cities had no problems with sanitation or housing",
        "Overcrowding increased public health risks",
        "Most Americans lived on isolated farms far from cities"
      ],
      correctIndices: [0, 2],
      hint: "Urbanization often creates visible problems and pressure for reform.",
      explain: "Corruption and public health crises became urgent in growing cities."
    },
    {
      id: "CS5-G2-005",
      csNum: 5,
      cs: "CS 5 – Multiple Perspectives",
      tags: ["G2", "select-two"],
      type: "select-two",
      stem: "Select TWO reasons business owners and workers often disagreed during major strikes.",
      choices: [
        "Owners prioritized profits and uninterrupted production",
        "Workers prioritized better wages and safer working conditions",
        "Owners believed unions should set national laws",
        "Workers wanted to end all employment and close factories"
      ],
      correctIndices: [0, 1],
      hint: "Competing interests create different solutions and blame.",
      explain: "Owners and workers valued different goals: production/profit vs. conditions/pay."
    },

    // ...KEEP your remaining G2 items here exactly (I’m including your full set)...
    {
      id:"CS6-G2-006", csNum:6, cs:"CS 6 – Rise of Corporations & Industrialization",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO developments that helped corporations expand into national businesses.",
      choices:["Railroads and national distribution networks","A complete end to advertising and branding","Telegraph/telephone and faster communication","A ban on interstate trade"],
      correctIndices:[0,2], hint:"National scale requires national transport + communication.",
      explain:"Rail networks and communication technology enabled national business growth."
    },
    {
      id:"CS7-G2-007", csNum:7, cs:"CS 7 – Labor Organizations",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO common goals of labor unions in the late 1800s and early 1900s.",
      choices:["Shorter workdays and safer working conditions","Higher wages or fairer pay practices","Replacing elections with rule by corporations","Ending all workplace rules and safety standards"],
      correctIndices:[0,1], hint:"Unions formed to improve labor conditions and bargaining power.",
      explain:"Unions pushed for safer conditions, shorter hours, and better pay."
    },
    {
      id:"CS8-G2-008", csNum:8, cs:"CS 8 – Laissez-faire & Big Business",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO outcomes that often resulted from laissez-faire attitudes toward big business.",
      choices:["Growth of trusts/monopolies with limited oversight","Increased government regulation of factory safety","Greater concentration of economic power in fewer firms","The immediate elimination of all corporate profits"],
      correctIndices:[0,2], hint:"Less oversight can allow consolidation and concentration of power.",
      explain:"Minimal regulation enabled monopolies and concentrated corporate power."
    },
    {
      id:"CS9-G2-009", csNum:9, cs:"CS 9 – Technology & the Economy/Society",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways new technology affected daily life in the early 1900s.",
      choices:["Improved communication or access to information","Saved time or changed household labor routines","Eliminated all demand for factory-made goods","Ended the need for transportation networks"],
      correctIndices:[0,1], hint:"Think: communication and household/consumer life changes.",
      explain:"Technology improved communication and reshaped home/work routines."
    },
    {
      id:"CS10-G2-010", csNum:10, cs:"CS 10 – Immigration, Internal Migration & Urbanization",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO challenges associated with overcrowded tenement housing around 1900.",
      choices:["Poor ventilation and the spread of diseases like tuberculosis","Increased access to clean water and sanitation in every building","Rapid spread of cholera due to contaminated water and poor sanitation","Guaranteed spacious living areas for large families"],
      correctIndices:[0,2], hint:"Overcrowding + sanitation problems = public health crises.",
      explain:"Tenements often had poor ventilation and sanitation, increasing disease spread."
    },
    {
      id:"CS11-G2-011", csNum:11, cs:"CS 11 – Progressive Era Reforms",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons Progressive reformers supported stronger regulation of food and medicines.",
      choices:["Public exposure of unsafe products and misleading labels","A desire to eliminate all government action permanently","Growing public pressure for consumer protection","A goal of ending public health inspections"],
      correctIndices:[0,2], hint:"Progressive reforms often followed publicity about harms.",
      explain:"Unsafe products and public pressure drove consumer protection reforms."
    },
    {
      id:"CS12-G2-012", csNum:12, cs:"CS 12 – Women’s Suffrage",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO strategies suffrage activists used to win voting rights.",
      choices:["Organized petitions, marches, and public campaigns","Direct lobbying of lawmakers and building coalitions","Rejecting all political participation","Calling for the abolition of elections"],
      correctIndices:[0,1], hint:"Think organized activism + political pressure.",
      explain:"Activists used public organizing and lobbying to build support for an amendment."
    },
    {
      id:"CS13-G2-013", csNum:13, cs:"CS 13 – U.S. Involvement in World War I",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that increased U.S. pressure to enter World War I.",
      choices:["Unrestricted submarine warfare threatening ships","U.S. neutrality laws requiring immediate war","Economic ties and trade interests with Allied powers","A national decision to eliminate all overseas trade"],
      correctIndices:[0,2], hint:"Think threats + interests.",
      explain:"Submarine warfare and economic ties increased pressure to enter the conflict."
    },
    {
      id:"CS14-G2-014", csNum:14, cs:"CS 14 – Post-WWI Peace Efforts",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons many U.S. senators opposed joining the League of Nations.",
      choices:["Fear the U.S. would be drawn into future wars","Belief it could limit U.S. independence in foreign policy","Desire to increase U.S. military commitments worldwide immediately","Belief the League required the U.S. to end all trade"],
      correctIndices:[0,1], hint:"Opposition centered on entanglement and sovereignty.",
      explain:"Many feared entangling alliances and limits on independent decision-making."
    },
    {
      id:"CS15-G2-015", csNum:15, cs:"CS 15 – Isolationism in the 1930s",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO examples of policies reflecting U.S. isolationist tendencies before WWII.",
      choices:["Neutrality Acts limiting aid or involvement","Cash-and-carry restrictions on trade with belligerents","Truman Doctrine and global containment commitments","NATO collective defense agreements"],
      correctIndices:[0,1], hint:"Isolationism = avoiding commitments that pull the U.S. into war.",
      explain:"Neutrality Acts and cash-and-carry were designed to avoid involvement."
    },
    {
      id:"CS16-G2-016", csNum:16, cs:"CS 16 – Causes of the Great Depression",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that contributed to the Great Depression.",
      choices:["Stock market speculation and risky investing","Weak banking practices and bank failures","The GI Bill expanding college access","The Marshall Plan rebuilding Europe"],
      correctIndices:[0,1], hint:"Think 1920s weaknesses + collapse mechanisms.",
      explain:"Speculation and fragile banking helped trigger and deepen the depression."
    },
    {
      id:"CS17-G2-017", csNum:17, cs:"CS 17 – Effects of the Great Depression",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO major effects of the Great Depression on Americans.",
      choices:["Widespread unemployment and poverty","Increased demand for government relief programs","A sudden nationwide increase in wages","A total end to all political debate"],
      correctIndices:[0,1], hint:"Think hardship + pressure for action.",
      explain:"Unemployment and suffering increased demand for government response."
    },
    {
      id:"CS18-G2-018", csNum:18, cs:"CS 18 – New Deal & Federal Role",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO goals of the New Deal.",
      choices:["Provide relief for unemployed and struggling Americans","Reform financial systems to reduce future crashes","Eliminate all private businesses permanently","End state governments"],
      correctIndices:[0,1], hint:"New Deal = relief, recovery, reform.",
      explain:"Programs aimed to relieve suffering and reform systems like banking/markets."
    },
    {
      id:"CS19-G2-019", csNum:19, cs:"CS 19 – Rise of Dictatorships & Global Tension",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO conditions that helped dictators gain power between WWI and WWII.",
      choices:["Economic crisis and mass unemployment","Political instability and weak democratic institutions","Stable democracies with rising satisfaction","An end to nationalism across Europe"],
      correctIndices:[0,1], hint:"Authoritarian movements grow when systems look like they are failing.",
      explain:"Economic and political instability made extreme leaders more appealing to some citizens."
    },
    {
      id:"CS20-G2-020", csNum:20, cs:"CS 20 – U.S. Entry into WWII",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO actions that moved the U.S. closer to involvement in WWII before Pearl Harbor.",
      choices:["Lend-Lease aid to Allied nations","Atlantic Charter cooperation with Britain","The U.S. declaration to join the Axis powers","A law banning all U.S. trade worldwide"],
      correctIndices:[0,1], hint:"Look for policies supporting Allies short of declaring war.",
      explain:"Lend-Lease and Atlantic Charter increased cooperation and support for Allies."
    },
    {
      id:"CS21-G2-021", csNum:21, cs:"CS 21 – WWII Homefront",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways WWII changed the U.S. homefront.",
      choices:["Rationing and increased government management of resources","Women’s expanded roles in industrial work","An immediate end to wartime production","The collapse of all factories"],
      correctIndices:[0,1], hint:"Think: mobilization changes labor and resources.",
      explain:"War mobilization brought rationing and expanded workforce roles for women."
    },
    {
      id:"CS22-G2-022", csNum:22, cs:"CS 22 – Postwar Boom",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that contributed to U.S. economic growth after WWII.",
      choices:["Rising consumer demand and suburban expansion","Expanded access to education and home loans","A total ban on consumer spending","The elimination of manufacturing"],
      correctIndices:[0,1], hint:"Pent-up demand + housing + education access.",
      explain:"Spending, suburbanization, and expanded access to loans/education fueled growth."
    },
    {
      id:"CS23-G2-023", csNum:23, cs:"CS 23 – Cold War Causes",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons Cold War tensions developed after WWII.",
      choices:["Competing ideologies: capitalism vs. communism","Mistrust over postwar influence and security","A shared plan to unify under one government","An agreement to eliminate all alliances"],
      correctIndices:[0,1], hint:"Ideological rivalry + security competition.",
      explain:"Ideology and power competition fueled tensions."
    },
    {
      id:"CS24-G2-024", csNum:24, cs:"CS 24 – Containment",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO examples of U.S. actions consistent with containment.",
      choices:["Providing economic or military aid to resist communist expansion","Forming alliances to deter Soviet influence","Withdrawing from global affairs entirely","Supporting the spread of communism"],
      correctIndices:[0,1], hint:"Containment = block expansion.",
      explain:"Aid and alliances were tools used to limit Soviet/communist expansion."
    },
    {
      id:"CS25-G2-025", csNum:25, cs:"CS 25 – Red Scare",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that fueled anti-communist fear in the U.S. during the early Cold War.",
      choices:["International rivalry and conflicts with the Soviet bloc","Espionage cases and fears of internal subversion","The end of all political propaganda","An immediate worldwide peace settlement"],
      correctIndices:[0,1], hint:"Think external conflict + internal suspicion.",
      explain:"Global tensions and espionage fears heightened domestic suspicion."
    },
    {
      id:"CS26-G2-026", csNum:26, cs:"CS 26 – Civil Rights Movement",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO outcomes of civil rights activism in the 1950s–60s.",
      choices:["Legal challenges and court rulings against segregation","Federal legislation strengthening equal access and voting rights","Expansion of Jim Crow laws nationwide","The elimination of constitutional protections"],
      correctIndices:[0,1], hint:"Look for legal and legislative changes that expanded rights.",
      explain:"Court rulings and federal laws expanded protections and enforcement."
    },
    {
      id:"CS27-G2-027", csNum:27, cs:"CS 27 – Rights Movements for Other Groups",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons rights movements expanded after WWII beyond African American civil rights.",
      choices:["Activists used democratic ideals to argue for broader equality","Media coverage helped spread awareness of unequal treatment","A federal policy required segregation for all groups","Courts refused to hear any civil liberties cases"],
      correctIndices:[0,1], hint:"Think activism + visibility + ideals.",
      explain:"Democratic ideals and media attention helped broaden demands for equality."
    },
    {
      id:"CS28-G2-028", csNum:28, cs:"CS 28 – Social/Cultural Change (1945–1994)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways mass media influenced American culture after WWII.",
      choices:["Created shared national experiences through TV/radio","Helped spread new music, trends, and youth culture","Ended communication between different regions","Eliminated advertising"],
      correctIndices:[0,1], hint:"Media spreads shared culture and trends.",
      explain:"TV/radio helped standardize and spread popular culture nationwide."
    },
    {
      id:"CS29-G2-029", csNum:29, cs:"CS 29 – Immigration Patterns (post-1965)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO effects of changes in U.S. immigration policy after the mid-1960s.",
      choices:["Changed the regions many immigrants came from","Increased cultural and demographic diversity in many communities","Ended immigration entirely","Required immigrants to settle only in rural areas"],
      correctIndices:[0,1], hint:"Policy changes can reshape origin patterns and diversity.",
      explain:"Post-1960s reforms reshaped immigration origins and increased diversity."
    },
    {
      id:"CS30-G2-030", csNum:30, cs:"CS 30 – End of the Cold War",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO factors that contributed to the collapse of communist governments by 1991.",
      choices:["Economic stagnation and declining living standards","Reform movements challenging one-party control","A massive expansion of Soviet prosperity","A worldwide agreement to ban political protest"],
      correctIndices:[0,1], hint:"Think internal weaknesses + pressure for reform.",
      explain:"Economic stagnation and reform movements undermined communist control."
    },
    {
      id:"CS33-G2-031", csNum:33, cs:"CS 33 – Equality & Civil Rights Expansion (1945–1994)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO reasons civil rights activism intensified after World War II.",
      choices:["The contradiction between democratic ideals and discrimination became harder to defend","Returning veterans and activists demanded fuller rights and protections","The federal government eliminated all civil rights laws","Segregation ended everywhere by 1946"],
      correctIndices:[0,1], hint:"Look for pressure points: ideals vs reality + organized demands for change.",
      explain:"Postwar contradictions and increased activism fueled stronger movements."
    },
    {
      id:"CS33-G2-032", csNum:33, cs:"CS 33 – Equality & Civil Rights Expansion (1945–1994)",
      tags:["G2","select-two"], type:"select-two",
      stem:"Select TWO ways federal actions in the 1960s strengthened civil rights protections.",
      choices:["Created enforcement tools against discrimination in public accommodations and employment","Protected voting rights by targeting barriers like discriminatory practices","Required states to legalize segregation in schools","Ended the 14th Amendment’s equal protection clause"],
      correctIndices:[0,1], hint:"Think: enforcement + voting protections.",
      explain:"Federal laws strengthened enforcement against discrimination and barriers to voting."
    },

    // =========================================================
    // GAME 3 (Best Explains) — tags:["G3"], type:"best-explains"
    // MUST have enough items so Game 3 can pull 25–30.
    // =========================================================
    // Your original 10:
    {
      id:"G3-001", csNum:6, cs:"CS 6 – Rise of Corporations & Industrial Growth",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why railroads were a turning point for late-1800s industrial growth?",
      choices:[
        "They reduced the need for factories by encouraging home production",
        "They connected raw materials, factories, and consumers into a national market",
        "They ended immigration by making travel more expensive",
        "They eliminated competition by banning interstate trade"
      ],
      answerIndex:1,
      hint:"Think: national markets depend on moving goods cheaply and quickly.",
      explain:"Railroads linked regions and lowered shipping costs, allowing firms to sell nationwide."
    },
    {
      id:"G3-002", csNum:7, cs:"CS 7 – Labor Organizations",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why strikes often became violent in the late 1800s?",
      choices:[
        "Workers usually wanted to eliminate all wages immediately",
        "Employers and governments sometimes used police or private guards to break strikes",
        "Unions were illegal in every state and could never bargain",
        "Factories closed permanently whenever workers protested"
      ],
      answerIndex:1,
      hint:"Think: force used to maintain production and control labor.",
      explain:"Companies and officials sometimes used force to end strikes, escalating conflict."
    },
    {
      id:"G3-003", csNum:8, cs:"CS 8 – Laissez-faire & Big Business",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains how laissez-faire ideas helped trusts grow?",
      choices:[
        "Government avoided regulating consolidation, allowing firms to merge and dominate markets",
        "Government required every business to keep the same prices",
        "Government forced corporations to break into smaller companies",
        "Government banned national advertising and branding"
      ],
      answerIndex:0,
      hint:"Less oversight = easier consolidation.",
      explain:"Limited regulation allowed large firms to combine power and reduce competition."
    },
    {
      id:"G3-004", csNum:10, cs:"CS 10 – Immigration, Internal Migration, Urbanization",
      tags:["G3"], type:"best-explains",
      stem:"Which choice best explains why disease spread quickly in many tenements around 1900?",
      choices:[
        "Overcrowding and poor sanitation created ideal conditions for contagious illness",
        "Tenements required all residents to receive free medical care",
        "Cities banned public transportation, forcing isolation",
        "Most tenements were located far from other housing"
      ],
      answerIndex:0,
      hint:"Crowding + sanitation problems = outbreaks.",
      explain:"Tight quarters, limited ventilation, and poor sanitation increased transmission."
    },
    {
      id:"G3-005", csNum:11, cs:"CS 11 – Progressive Era Reforms",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why muckraker journalism mattered to Progressive reform?",
      choices:[
        "It reduced public attention to social problems",
        "It exposed corruption and unsafe conditions, increasing pressure for laws",
        "It ended the need for elections by appointing reformers",
        "It convinced citizens that regulation always harms consumers"
      ],
      answerIndex:1,
      hint:"Exposure → public pressure → reform.",
      explain:"Investigative reporting raised awareness and built support for regulation and reform."
    },
    {
      id:"G3-006", csNum:14, cs:"CS 14 – Post-WWI Peace Efforts",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why many senators opposed the League of Nations?",
      choices:[
        "They feared it would reduce U.S. control over decisions to enter future conflicts",
        "They believed it required the U.S. to end all trade permanently",
        "They wanted to colonize Europe after World War I",
        "They believed it would abolish the U.S. Constitution"
      ],
      answerIndex:0,
      hint:"Key issue: sovereignty and entangling commitments.",
      explain:"Many worried collective security obligations could limit independent U.S. foreign policy."
    },
    {
      id:"G3-007", csNum:16, cs:"CS 16 – Causes of the Great Depression",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains how stock speculation increased economic risk in the 1920s?",
      choices:[
        "Investors borrowed heavily to buy stocks, magnifying losses when prices fell",
        "Banks required all customers to stop buying stocks",
        "Workers refused to save money, raising wages too quickly",
        "The government banned consumer credit nationwide"
      ],
      answerIndex:0,
      hint:"Borrowing to invest = bigger crash impact.",
      explain:"Buying on margin amplified risk and worsened the crash when prices dropped."
    },
    {
      id:"G3-008", csNum:18, cs:"CS 18 – New Deal & Federal Role",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why the New Deal expanded federal power?",
      choices:[
        "It sought to eliminate state governments entirely",
        "It responded to economic collapse with national relief, recovery, and reform programs",
        "It ended elections and replaced Congress with agencies",
        "It stopped all government involvement in the economy"
      ],
      answerIndex:1,
      hint:"Crisis required national-scale action.",
      explain:"The severity of the Depression led to federal programs to stabilize the economy and society."
    },
    {
      id:"G3-009", csNum:23, cs:"CS 23 – Early Cold War Tensions",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the U.S. and USSR became rivals after WWII?",
      choices:[
        "They shared identical political and economic systems",
        "They competed for influence and had conflicting ideologies",
        "They agreed to end all alliances and reduce militaries",
        "They merged into one combined government"
      ],
      answerIndex:1,
      hint:"Ideology + power competition.",
      explain:"Capitalism vs. communism and security concerns drove the rivalry."
    },
    {
      id:"G3-010", csNum:33, cs:"CS 33 – Equality & Civil Rights Expansion (1945–1994)",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why civil rights activism expanded after WWII?",
      choices:[
        "Discrimination ended nationwide, so activism became unnecessary",
        "The gap between democratic ideals and unequal treatment became harder to ignore",
        "The Constitution removed equal protection after the war",
        "Most Americans stopped caring about political rights"
      ],
      answerIndex:1,
      hint:"Contradiction between ideals and reality fuels movements.",
      explain:"Postwar democracy rhetoric highlighted the injustice of continued discrimination."
    },

    // Added 18 more (G3-011 ... G3-028) so Game 3 can always pull 25–30:
    {
      id:"G3-011", csNum:1, cs:"CS 1 – Source Credibility",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why historians compare multiple sources when studying the same event?",
      choices:[
        "Because one source always tells the full truth without bias",
        "Because corroboration helps reduce bias and strengthens conclusions",
        "Because primary sources are always inaccurate",
        "Because secondary sources cannot include evidence"
      ],
      answerIndex:1,
      hint:"Multiple sources = stronger claims.",
      explain:"Comparing sources helps confirm details and identify bias or missing perspectives."
    },
    {
      id:"G3-012", csNum:2, cs:"CS 2 – Primary vs Secondary",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why a newspaper editorial from 1910 must be used carefully as evidence?",
      choices:[
        "It is written too close to the events to be meaningful",
        "It reflects opinion and may emphasize persuasion over balanced reporting",
        "It is always less useful than a textbook",
        "It cannot reveal any historical attitudes"
      ],
      answerIndex:1,
      hint:"Editorials = viewpoint evidence.",
      explain:"Editorials show attitudes and arguments, but may be biased or selective in facts."
    },
    {
      id:"G3-013", csNum:9, cs:"CS 9 – Technology & Society",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains how mass production changed consumer life in the early 1900s?",
      choices:[
        "It reduced the supply of goods and raised prices",
        "It lowered costs and made more goods affordable to more people",
        "It ended factory work by eliminating machines",
        "It forced all Americans to live in rural areas"
      ],
      answerIndex:1,
      hint:"Mass production usually lowers unit cost.",
      explain:"Assembly lines and standardization increased output and often reduced prices."
    },
    {
      id:"G3-014", csNum:12, cs:"CS 12 – Women’s Suffrage",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the 19th Amendment is considered a major democratic expansion?",
      choices:[
        "It limited voting to property owners",
        "It expanded political participation to include most women nationwide",
        "It reduced federal authority over elections",
        "It eliminated political parties"
      ],
      answerIndex:1,
      hint:"Democratic expansion = more eligible voters.",
      explain:"The amendment broadened who could participate in elections."
    },
    {
      id:"G3-015", csNum:13, cs:"CS 13 – WWI",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why unrestricted submarine warfare mattered to U.S. public opinion?",
      choices:[
        "It threatened neutral trade and American lives, increasing calls for intervention",
        "It ended all shipping in the Atlantic immediately",
        "It made Europe independent from U.S. goods",
        "It reduced international tensions"
      ],
      answerIndex:0,
      hint:"Threats to Americans shift neutrality.",
      explain:"Attacks on ships raised the perceived cost of staying neutral."
    },
    {
      id:"G3-016", csNum:15, cs:"CS 15 – Isolationism",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why many Americans supported the Neutrality Acts in the 1930s?",
      choices:[
        "They believed war always benefits the U.S. economy",
        "They wanted to avoid repeating the costs of WWI and being drawn into another war",
        "They wanted the U.S. to join every international alliance",
        "They believed Congress had no power over foreign policy"
      ],
      answerIndex:1,
      hint:"Memory of WWI shaped policy.",
      explain:"Many voters favored avoiding entanglements after WWI losses and disappointment."
    },
    {
      id:"G3-017", csNum:17, cs:"CS 17 – Depression Effects",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why the Great Depression increased pressure for federal action?",
      choices:[
        "Because the economy quickly fixed itself without hardship",
        "Because widespread unemployment and bank failures overwhelmed local resources",
        "Because Congress had no constitutional powers",
        "Because state governments stopped existing"
      ],
      answerIndex:1,
      hint:"Scale of crisis exceeded local capacity.",
      explain:"The severity of hardship increased demand for national relief and reform."
    },
    {
      id:"G3-018", csNum:19, cs:"CS 19 – Dictatorships",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why economic crisis can strengthen extremist political movements?",
      choices:[
        "Because people become more satisfied with existing systems",
        "Because desperation can increase support for leaders promising simple solutions and order",
        "Because elections are canceled automatically during recessions",
        "Because citizens stop caring about politics"
      ],
      answerIndex:1,
      hint:"Hard times increase openness to radical promises.",
      explain:"Instability can make authoritarian promises more appealing to some voters."
    },
    {
      id:"G3-019", csNum:20, cs:"CS 20 – WWII Entry",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why Pearl Harbor changed U.S. policy immediately?",
      choices:[
        "It was viewed as a direct attack, making neutrality politically impossible",
        "It ended all fighting in Europe",
        "It proved the U.S. had no economic ties abroad",
        "It eliminated the need for military mobilization"
      ],
      answerIndex:0,
      hint:"Direct attack → war declaration.",
      explain:"A direct attack created urgency and public support for entering the war."
    },
    {
      id:"G3-020", csNum:21, cs:"CS 21 – WWII Homefront",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why wartime production affected civil rights and labor patterns?",
      choices:[
        "It reduced the need for workers nationwide",
        "It increased demand for workers, opening opportunities and increasing migration to industrial centers",
        "It ended industrial work permanently",
        "It forced all factories to close"
      ],
      answerIndex:1,
      hint:"War mobilization expands production.",
      explain:"Labor demand rose sharply, reshaping jobs and migration."
    },
    {
      id:"G3-021", csNum:22, cs:"CS 22 – Postwar Boom",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains how the GI Bill contributed to postwar prosperity?",
      choices:[
        "It reduced education access and limited home buying",
        "It expanded education and home ownership, strengthening the middle class",
        "It ended suburban growth",
        "It eliminated consumer demand"
      ],
      answerIndex:1,
      hint:"Education + housing access fuels growth.",
      explain:"Broader access to college and mortgages supported upward mobility and spending."
    },
    {
      id:"G3-022", csNum:24, cs:"CS 24 – Containment",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the U.S. formed alliances during the Cold War?",
      choices:[
        "To expand communism into new regions",
        "To deter Soviet influence and strengthen collective security",
        "To eliminate all military cooperation",
        "To end international trade"
      ],
      answerIndex:1,
      hint:"Alliances = deterrence.",
      explain:"Alliances were meant to prevent expansion by raising the cost of aggression."
    },
    {
      id:"G3-023", csNum:25, cs:"CS 25 – Red Scare",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why anti-communist investigations gained support in the early Cold War?",
      choices:[
        "Because the U.S. and USSR were close allies with no tensions",
        "Because fear of espionage and global rivalry increased suspicion at home",
        "Because Americans stopped consuming news media",
        "Because Congress lost the power to investigate anything"
      ],
      answerIndex:1,
      hint:"International tension spills into domestic fear.",
      explain:"Rivalry and espionage cases increased concern about internal subversion."
    },
    {
      id:"G3-024", csNum:26, cs:"CS 26 – Civil Rights",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why Brown v. Board of Education is considered a turning point?",
      choices:[
        "It strengthened legal segregation in schools",
        "It declared segregated public schools unconstitutional, energizing further challenges",
        "It ended all discrimination instantly nationwide",
        "It removed federal courts from civil rights cases"
      ],
      answerIndex:1,
      hint:"Turning point = legal shift + momentum.",
      explain:"It overturned the legal basis for school segregation and accelerated activism."
    },
    {
      id:"G3-025", csNum:27, cs:"CS 27 – Expanding Rights",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why later rights movements borrowed strategies from the civil rights movement?",
      choices:[
        "Because the civil rights movement failed to achieve any legal changes",
        "Because organizing, litigation, and nonviolent protest proved effective at gaining attention and policy change",
        "Because the Constitution banned protests",
        "Because media coverage disappeared after 1950"
      ],
      answerIndex:1,
      hint:"Effective strategies get reused.",
      explain:"Successful tactics often become models for later movements seeking equality."
    },
    {
      id:"G3-026", csNum:28, cs:"CS 28 – Social/Cultural Change",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why television accelerated cultural change after WWII?",
      choices:[
        "It isolated Americans from national information",
        "It spread shared images, music, and ideas rapidly to mass audiences",
        "It eliminated advertising and consumer culture",
        "It prevented youth culture from forming"
      ],
      answerIndex:1,
      hint:"Mass media scales culture.",
      explain:"TV broadcast the same messages nationwide, shaping shared culture and trends."
    },
    {
      id:"G3-027", csNum:29, cs:"CS 29 – Immigration (post-1965)",
      tags:["G3"], type:"best-explains",
      stem:"Which statement best explains why post-1965 immigration changed U.S. demographics?",
      choices:[
        "Because U.S. law ended immigration completely",
        "Because policy changes altered who could immigrate, increasing diversity of origins",
        "Because the U.S. required immigrants to settle only in one state",
        "Because global travel became impossible"
      ],
      answerIndex:1,
      hint:"Policy shapes patterns.",
      explain:"Legal reforms reshaped immigration flows and broadened origin regions."
    },
    {
      id:"G3-028", csNum:30, cs:"CS 30 – End of Cold War",
      tags:["G3"], type:"best-explains",
      stem:"Which option best explains why the Soviet Union faced increasing instability by the late 1980s?",
      choices:[
        "Because its economy grew rapidly and politics stabilized",
        "Because economic stagnation and reform pressures weakened one-party control",
        "Because it ended all reform efforts and modernized fully",
        "Because global competition disappeared"
      ],
      answerIndex:1,
      hint:"Long-term weakness + pressure to change.",
      explain:"Economic strain and reform movements undermined centralized control."
    },
    }
    // ✅ END OF GAME 3 (G3) — LAST OBJECT ABOVE
    // ✅ TRANSITION: paste GAME 4 objects starting on the next line
    ,

    /* =========================
       GAME 4 (Sequence / Turning Point)
       How Game 4 reads these:
       - tags includes "G4" OR type === "sequence-turning-point"
       Required fields:
       - stem
       - events: [4 strings]
       - correctOrder: [4 indices]
       - turningPoint: number 0–3
    ========================= */

    {
      id:"G4-001",
      csNum:6,
      cs:"CS 6 – Rise of Corporations & Industrial Growth",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Put these developments in the most logical sequence that helps explain how corporations became national businesses. Then identify the turning point.",
      events:[
        "Railroads expand and lower shipping costs across regions",
        "Factories increase output using new machinery and methods",
        "Businesses distribute goods to customers in distant markets",
        "National brands and large corporations grow in size and influence"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:0,
      hint:"Transportation is the unlock that makes national markets possible.",
      explain:"Railroads connect regions. That connection is the turning point that allows scale, distribution, and national corporate growth."
    },

    {
      id:"G4-002",
      csNum:7,
      cs:"CS 7 – Labor Organizations",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence the chain that explains why unions gained influence. Then identify the turning point.",
      events:[
        "Workers face long hours, low pay, and unsafe conditions",
        "Workers organize unions to increase bargaining power",
        "Workers use strikes/boycotts to pressure employers",
        "Employers respond with concessions or conflict (injunctions, strikebreakers)"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:1,
      hint:"The turning point is when workers stop acting individually and organize.",
      explain:"Conditions existed before. Union organization changes the balance of power and makes collective pressure possible."
    },

    {
      id:"G4-003",
      csNum:8,
      cs:"CS 8 – Laissez-faire & Big Business",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Order the cause-and-effect sequence describing how laissez-faire attitudes helped trusts form. Then identify the turning point.",
      events:[
        "Government limits regulation of business practices",
        "Large firms merge or coordinate to reduce competition",
        "Trusts/monopolies gain control of prices and output",
        "Smaller competitors struggle or collapse"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:0,
      hint:"The turning point is the policy environment that allows consolidation.",
      explain:"Minimal regulation made consolidation easier and helped trusts form and dominate."
    },

    {
      id:"G4-004",
      csNum:10,
      cs:"CS 10 – Immigration, Internal Migration, Urbanization",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence what typically happened in fast-growing cities around 1900. Then identify the turning point.",
      events:[
        "Large numbers of immigrants and migrants arrive for jobs",
        "Cities struggle to provide housing, sanitation, and services",
        "Overcrowded tenements increase disease and health crises",
        "Reformers push public health laws and city reforms"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:0,
      hint:"Population movement triggers everything that follows.",
      explain:"Mass migration/immigration is the turning point that strains infrastructure and creates urgent reform pressures."
    },

    {
      id:"G4-005",
      csNum:11,
      cs:"CS 11 – Progressive Era Reforms",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Put the Progressive reform pattern in order. Then identify the turning point.",
      events:[
        "Journalists/public investigations expose problems (muckrakers)",
        "Public outrage increases pressure on government",
        "Reform laws/regulations are passed",
        "Conditions improve over time (inspection, standards, enforcement)"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:0,
      hint:"Exposure creates pressure; pressure creates policy.",
      explain:"Muckrakers exposing abuse is often the turning point that converts hidden problems into political action."
    },

    {
      id:"G4-006",
      csNum:14,
      cs:"CS 14 – Post-WWI Peace Efforts",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence the path from WWI ending to U.S. rejection of the Treaty of Versailles. Then identify the turning point.",
      events:[
        "WWI ends and peace terms are negotiated",
        "Treaty includes League of Nations and collective security commitments",
        "Senate debates sovereignty/entanglement concerns",
        "U.S. rejects the treaty and avoids joining the League"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:1,
      hint:"The League of Nations clause is the controversy trigger.",
      explain:"The League commitment is the turning point that sparks Senate opposition and drives rejection."
    },

    {
      id:"G4-007",
      csNum:15,
      cs:"CS 15 – Isolationism in the 1930s",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence how the U.S. tried to avoid another war in the 1930s. Then identify the turning point.",
      events:[
        "Memories of WWI costs increase anti-war sentiment",
        "Congress passes Neutrality Acts to limit involvement",
        "International tensions rise as aggressors expand",
        "U.S. slowly shifts toward aiding allies as threats grow"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:1,
      hint:"Policy is the turning point — it changes how the U.S. responds.",
      explain:"Neutrality laws are the turning point because they formalize isolationist strategy before later erosion."
    },

    {
      id:"G4-008",
      csNum:16,
      cs:"CS 16 – Causes of the Great Depression",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence the crash-to-depression chain. Then identify the turning point.",
      events:[
        "Stock speculation increases risk (buying on margin)",
        "Stock market crash destroys confidence and wealth",
        "Bank failures reduce savings and credit",
        "Businesses cut production and unemployment rises"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:1,
      hint:"The crash converts risk into collapse.",
      explain:"Speculation is a condition; the crash is the turning point that triggers cascading failures."
    },

    {
      id:"G4-009",
      csNum:18,
      cs:"CS 18 – New Deal & Expanded Federal Role",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence why the federal government expanded its role in the 1930s. Then identify the turning point.",
      events:[
        "Economic collapse creates widespread hardship",
        "Government launches relief/recovery/reform programs",
        "New agencies regulate banks/markets and provide jobs",
        "Federal expectations of responsibility increase long-term"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:1,
      hint:"The turning point is the policy response to crisis.",
      explain:"The New Deal program launch is the turning point where federal action becomes systematic and large-scale."
    },

    {
      id:"G4-010",
      csNum:20,
      cs:"CS 20 – U.S. Entry into WWII",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence the road from tension to U.S. entry into WWII. Then identify the turning point.",
      events:[
        "War expands in Europe and Asia; U.S. debates involvement",
        "U.S. increases aid to Allies (e.g., Lend-Lease)",
        "Japan attacks Pearl Harbor",
        "U.S. declares war and fully mobilizes"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:2,
      hint:"The turning point is the direct attack.",
      explain:"Pearl Harbor is the turning point that ends debate and triggers formal entry."
    },

    {
      id:"G4-011",
      csNum:23,
      cs:"CS 23 – Early Cold War Tensions",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence how Cold War rivalry formed. Then identify the turning point.",
      events:[
        "WWII ends with the U.S. and USSR as major powers",
        "Ideological conflict grows over postwar influence and security",
        "Each side builds alliances and competes for global influence",
        "Long-term rivalry shapes foreign and domestic policy"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:1,
      hint:"The turning point is when cooperation turns into rivalry.",
      explain:"Ideological conflict and mistrust is the pivot that turns wartime alliance into Cold War competition."
    },

    {
      id:"G4-012",
      csNum:26,
      cs:"CS 26 – Civil Rights Movement",
      tags:["G4"],
      type:"sequence-turning-point",
      stem:"Sequence the path from segregation to federal enforcement. Then identify the turning point.",
      events:[
        "Segregation and discrimination continue after WWII",
        "Activists challenge policies through protest and court cases",
        "Federal government passes/enforces civil rights legislation",
        "Legal protections expand and enforcement increases"
      ],
      correctOrder:[0,1,2,3],
      turningPoint:2,
      hint:"The turning point is when enforcement becomes national policy.",
      explain:"Federal legislation/enforcement is the turning point that changes civil rights from local battles to national standards."
    }

  ]; // ✅ end bank array — ONLY ONE closing bracket in entire file

  // Expose the bank for ALL games
  window.AMSTUD_BANK = bank;

  // Backward-compat: some games check AMSTUD_BANK directly (not window.AMSTUD_BANK)
  // Using var ensures it becomes a true global.
  // eslint-disable-next-line no-var
  var AMSTUD_BANK = window.AMSTUD_BANK;

  // Optional: quick sanity marker
  window.AMSTUD_BANK_VERSION = "2026-02-27";
})();
};
