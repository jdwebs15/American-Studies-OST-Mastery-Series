/* ============================================================
   American Studies OST Mastery — Shared Question Bank
   FILE: /amstud_bank.js   (MUST be in repo root)

   Games load it with:
     <script src="../amstud_bank.js"></script>

   This file defines:
     const AMSTUD_BANK = [...]
     window.AMSTUD_BANK = AMSTUD_BANK
     window.AMSTUD_BANK_VERSION = "..."

   NOTE:
   - Do NOT paste bank fragments inside the array.
   - Only edit by adding NEW objects BEFORE the final closing ];
   ============================================================ */

const AMSTUD_BANK = [
  /* =========================================================
     GAME 1 (G1) — Cause & Effect MCQ
     filter idea: item.tag === "Cause & Effect" OR tags includes "G1"
     required: stem, choices[4], answerIndex, hint
  ========================================================= */

  // --- Light but valid G1 set (you can expand later) ---
  {
    id: "G1-001",
    cs: "CS 1 – Source Credibility",
    tags: ["G1"],
    tag: "Cause & Effect",
    stem:
      "A historian claims a political cartoon from 1890 proves that all Americans supported new immigration restrictions. Which detail most weakens the conclusion?",
    choices: [
      "The cartoon was created during the same year as a national election",
      "The cartoon reflects the viewpoint of one artist rather than the entire public",
      "The cartoon includes labels that identify major political parties",
      "The cartoon was printed in a newspaper rather than a history textbook"
    ],
    answerIndex: 1,
    hint: "One source can show a viewpoint, but rarely proves national agreement."
  },
  {
    id: "G1-002",
    cs: "CS 3 – Cause, Effect, and Sequence",
    tags: ["G1"],
    tag: "Cause & Effect",
    stem: "Which factor most directly contributed to rapid city growth in the late 1800s?",
    choices: [
      "A decline in factory production",
      "An increase in industrial jobs and transportation networks",
      "A reduction in immigration to the United States",
      "A decrease in international trade"
    ],
    answerIndex: 1,
    hint: "Jobs + access pull people into cities."
  },
  {
    id: "G1-003",
    cs: "CS 10 – Immigration, Internal Migration, Urbanization",
    tags: ["G1"],
    tag: "Cause & Effect",
    stem: "What was a common effect of mass immigration and urban growth around 1900?",
    choices: [
      "A decrease in demand for factory labor",
      "Overcrowded housing and increased public health challenges",
      "The end of ethnic neighborhoods in cities",
      "A sharp decline in city infrastructure needs"
    ],
    answerIndex: 1,
    hint: "Fast population growth strains housing and sanitation."
  },

  /* =========================================================
     GAME 2 (G2) — Select Two
     required: type:"select-two", stem, choices[4], correctIndices[2], hint
  ========================================================= */

  {
    id: "G2-001",
    cs: "CS 2 – Primary vs Secondary Sources",
    tags: ["G2", "select-two"],
    type: "select-two",
    stem: "Select TWO examples of primary sources for studying urban living conditions around 1900.",
    choices: [
      "Photographs of tenements taken at the time",
      "A modern textbook chapter summarizing urbanization",
      "City health inspection reports from 1900",
      "A 2020 documentary about the Progressive Era"
    ],
    correctIndices: [0, 2],
    hint: "Primary sources come from the time period studied."
  },

  /* =========================================================
     GAME 3 (G3) — Best Explains MCQ
     required: type:"best-explains", stem, choices[4], answerIndex, hint
  ========================================================= */

  {
    id: "G3-001",
    cs: "CS 8 – Laissez-faire & Big Business",
    tags: ["G3"],
    type: "best-explains",
    stem: "Which statement best explains how laissez-faire ideas helped trusts grow?",
    choices: [
      "Government avoided regulating consolidation, allowing firms to merge and dominate markets",
      "Government required every business to keep the same prices",
      "Government forced corporations to break into smaller companies",
      "Government banned national advertising and branding"
    ],
    answerIndex: 0,
    hint: "Less regulation often makes consolidation easier."
  },

  /* =========================================================
     GAME 4 (G4) — Sequence / Turning Point (28)
     required:
       type:"sequence-turning-point"
       stem
       events:[4 strings]
       correctOrder:[4 indices]
       turningPoint: 0–3
       hint
  ========================================================= */

  // Helper note: turningPoint is the index IN THE ORDERED sequence (0–3)

  // 1–12 (core set)
  {
    id: "G4-001",
    cs: "CS 6 – Rise of Corporations & Industrial Growth",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem:
      "Put these developments in the most logical sequence showing how corporations became national businesses. Identify the turning point.",
    events: [
      "Railroads expand and lower shipping costs across regions",
      "Factories increase output using new machinery and methods",
      "Businesses distribute goods to customers in distant markets",
      "National brands and large corporations grow in size and influence"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 0,
    hint: "Transportation is the unlock that makes national markets possible."
  },
  {
    id: "G4-002",
    cs: "CS 7 – Labor Organizations",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence why unions gained influence. Identify the turning point.",
    events: [
      "Workers face long hours, low pay, and unsafe conditions",
      "Workers organize unions to increase bargaining power",
      "Workers use strikes/boycotts to pressure employers",
      "Employers respond with concessions or conflict"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "The turning point is organization—workers stop acting individually."
  },
  {
    id: "G4-003",
    cs: "CS 8 – Laissez-faire & Big Business",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Order how laissez-faire attitudes helped trusts form. Identify the turning point.",
    events: [
      "Government limits regulation of business practices",
      "Large firms merge or coordinate to reduce competition",
      "Trusts/monopolies gain control of prices and output",
      "Smaller competitors struggle or collapse"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 0,
    hint: "The policy environment allows consolidation."
  },
  {
    id: "G4-004",
    cs: "CS 10 – Immigration/Urbanization",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence what typically happened in fast-growing cities around 1900. Identify the turning point.",
    events: [
      "Large numbers of immigrants and migrants arrive for jobs",
      "Cities struggle to provide housing, sanitation, and services",
      "Overcrowded tenements increase disease and health crises",
      "Reformers push public health laws and city reforms"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 0,
    hint: "Population movement triggers everything that follows."
  },
  {
    id: "G4-005",
    cs: "CS 11 – Progressive Era Reforms",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Put the Progressive reform pattern in order. Identify the turning point.",
    events: [
      "Investigations expose problems (muckrakers)",
      "Public outrage increases pressure on government",
      "Reform laws/regulations are passed",
      "Conditions improve over time through standards and enforcement"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 0,
    hint: "Exposure creates pressure; pressure creates policy."
  },
  {
    id: "G4-006",
    cs: "CS 14 – Post-WWI Peace",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how the U.S. rejected the Treaty of Versailles. Identify the turning point.",
    events: [
      "WWI ends and peace terms are negotiated",
      "Treaty includes League of Nations commitments",
      "Senate debates sovereignty/entanglement concerns",
      "U.S. rejects the treaty and avoids joining the League"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "The League clause is the controversy trigger."
  },
  {
    id: "G4-007",
    cs: "CS 15 – Isolationism",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how the U.S. tried to avoid another war in the 1930s. Identify the turning point.",
    events: [
      "Memories of WWI costs increase anti-war sentiment",
      "Congress passes Neutrality Acts to limit involvement",
      "International tensions rise as aggressors expand",
      "U.S. slowly shifts toward aiding allies as threats grow"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Policy formalizes isolationism before it erodes later."
  },
  {
    id: "G4-008",
    cs: "CS 16 – Great Depression Causes",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence the crash-to-depression chain. Identify the turning point.",
    events: [
      "Stock speculation increases risk (buying on margin)",
      "Stock market crash destroys confidence and wealth",
      "Bank failures reduce savings and credit",
      "Businesses cut production and unemployment rises"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "The crash converts risk into collapse."
  },
  {
    id: "G4-009",
    cs: "CS 18 – New Deal & Federal Role",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence why the federal government expanded its role in the 1930s. Identify the turning point.",
    events: [
      "Economic collapse creates widespread hardship",
      "Government launches relief/recovery/reform programs",
      "New agencies regulate banks/markets and provide jobs",
      "Federal expectations of responsibility increase long-term"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "The turning point is the policy response to crisis."
  },
  {
    id: "G4-010",
    cs: "CS 20 – U.S. Entry into WWII",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence the road from tension to U.S. entry into WWII. Identify the turning point.",
    events: [
      "War expands in Europe and Asia; U.S. debates involvement",
      "U.S. increases aid to Allies (e.g., Lend-Lease)",
      "Japan attacks Pearl Harbor",
      "U.S. declares war and fully mobilizes"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 2,
    hint: "The turning point is the direct attack."
  },
  {
    id: "G4-011",
    cs: "CS 23 – Cold War Origins",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how Cold War rivalry formed. Identify the turning point.",
    events: [
      "WWII ends with the U.S. and USSR as major powers",
      "Ideological conflict grows over postwar influence and security",
      "Each side builds alliances and competes for global influence",
      "Long-term rivalry shapes foreign and domestic policy"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "The turning point is when cooperation turns into rivalry."
  },
  {
    id: "G4-012",
    cs: "CS 26 – Civil Rights Movement",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence the path from segregation to federal enforcement. Identify the turning point.",
    events: [
      "Segregation and discrimination continue after WWII",
      "Activists challenge policies through protest and court cases",
      "Federal government passes/enforces civil rights legislation",
      "Legal protections expand and enforcement increases"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 2,
    hint: "The turning point is when enforcement becomes national policy."
  },

  // 13–28 (added so G4 has 28 total)
  {
    id: "G4-013",
    cs: "CS 1 – Credibility",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how historians strengthen a claim using evidence. Identify the turning point.",
    events: [
      "A historian makes an initial claim about an event",
      "The historian locates multiple relevant sources",
      "Sources are corroborated and bias is evaluated",
      "The claim is revised/strengthened with supported conclusions"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 2,
    hint: "Corroboration + bias check is the pivot."
  },
  {
    id: "G4-014",
    cs: "CS 6 – Industrial Growth",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how mass production changed prices and consumption. Identify the turning point.",
    events: [
      "Factories adopt assembly-line style methods",
      "Output increases and unit cost drops",
      "Prices fall and more consumers can afford goods",
      "Demand grows and production expands further"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Cost dropping is the pivot that makes goods broadly affordable."
  },
  {
    id: "G4-015",
    cs: "CS 11 – Progressive Politics",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how reformers targeted corruption. Identify the turning point.",
    events: [
      "Political machines control jobs and contracts",
      "Investigations reveal kickbacks and patronage",
      "Reform candidates/initiatives gain support",
      "New rules increase transparency and reduce machine power"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 2,
    hint: "Public support shifting toward reform is the pivot."
  },
  {
    id: "G4-016",
    cs: "CS 12 – Women’s Suffrage",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how women gained the vote nationally. Identify the turning point.",
    events: [
      "Suffrage groups organize campaigns and petitions",
      "Some states expand women’s voting rights",
      "National pressure increases for a constitutional amendment",
      "19th Amendment is ratified and women vote nationwide"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 3,
    hint: "Ratification is the decisive moment."
  },
  {
    id: "G4-017",
    cs: "CS 13 – WWI",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence why the U.S. moved from neutrality to war in WWI. Identify the turning point.",
    events: [
      "U.S. begins neutral while trading with multiple nations",
      "German submarine warfare threatens ships and lives",
      "Public and political pressure for action increases",
      "U.S. declares war and mobilizes"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Direct threats shifted neutrality."
  },
  {
    id: "G4-018",
    cs: "CS 16 – Great Depression",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how loss of credit deepened the Depression. Identify the turning point.",
    events: [
      "Banks fail and people lose savings",
      "Credit becomes scarce and borrowing drops",
      "Businesses reduce production and lay off workers",
      "Consumer spending drops further, worsening the cycle"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Credit collapse is the pivot that accelerates contraction."
  },
  {
    id: "G4-019",
    cs: "CS 18 – New Deal",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how New Deal banking reform built confidence. Identify the turning point.",
    events: [
      "Bank failures spread panic",
      "Government creates protections and oversight",
      "Confidence in deposits improves",
      "Savings and lending stabilize over time"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Creating protections is the pivot."
  },
  {
    id: "G4-020",
    cs: "CS 20 – WWII",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how the homefront mobilized for WWII. Identify the turning point.",
    events: [
      "War demand increases for ships, planes, and supplies",
      "Factories convert to wartime production",
      "Employment rises and labor participation shifts",
      "The U.S. produces massive quantities to support the war effort"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Conversion to wartime production is the pivot."
  },
  {
    id: "G4-021",
    cs: "CS 22 – Postwar Boom",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence suburban growth after WWII. Identify the turning point.",
    events: [
      "Pent-up consumer demand rises after wartime rationing",
      "Home loans and new housing construction expand",
      "Suburbs grow and car ownership increases",
      "Retail and service economies expand with new communities"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Housing/loans expansion unlocks suburban growth."
  },
  {
    id: "G4-022",
    cs: "CS 24 – Containment",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how containment shaped U.S. foreign policy. Identify the turning point.",
    events: [
      "U.S. fears spread of communism after WWII",
      "U.S. provides aid to resist expansion",
      "U.S. forms alliances to deter Soviet influence",
      "Global rivalry shapes conflicts and diplomacy"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Aid policies are the pivot from concern to action."
  },
  {
    id: "G4-023",
    cs: "CS 25 – Red Scare",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how Cold War fear affected domestic policy. Identify the turning point.",
    events: [
      "Cold War rivalry increases anxiety about espionage",
      "Public suspicion grows about internal subversion",
      "Government investigations expand",
      "Civil liberties debates intensify"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 2,
    hint: "Investigations are the pivot that changes fear into policy action."
  },
  {
    id: "G4-024",
    cs: "CS 26 – Civil Rights",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how protest led to federal civil rights law. Identify the turning point.",
    events: [
      "Nonviolent protests draw national attention",
      "Media coverage increases public awareness",
      "Federal officials face pressure to act",
      "Congress passes civil rights legislation"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 3,
    hint: "Legislation is the decisive pivot."
  },
  {
    id: "G4-025",
    cs: "CS 27 – Other Rights Movements",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how later rights movements gained momentum. Identify the turning point.",
    events: [
      "Activists identify unequal treatment and barriers",
      "Organizing and coalition-building increases",
      "Legal challenges and political pressure expand",
      "Policies change and protections broaden over time"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 2,
    hint: "Legal/political pressure is the pivot from organizing to change."
  },
  {
    id: "G4-026",
    cs: "CS 28 – Media & Culture",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how television influenced culture. Identify the turning point.",
    events: [
      "Television ownership expands rapidly",
      "Shared national programs reach mass audiences",
      "Trends spread quickly across regions",
      "Consumer culture and youth identity strengthen"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 0,
    hint: "Widespread adoption is the pivot."
  },
  {
    id: "G4-027",
    cs: "CS 31 – Globalization",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence one way globalization reshaped manufacturing. Identify the turning point.",
    events: [
      "Companies face global competition",
      "Some production relocates to reduce costs",
      "Local job markets shift and certain industries decline",
      "New sectors and service work expand in many areas"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Relocation is the pivot that changes local employment."
  },
  {
    id: "G4-028",
    cs: "CS 30 – End of Cold War",
    tags: ["G4"],
    type: "sequence-turning-point",
    stem: "Sequence how reform pressure contributed to the collapse of communist control. Identify the turning point.",
    events: [
      "Economic stagnation weakens confidence in the system",
      "Reform movements challenge one-party control",
      "Governments lose the ability to maintain control across regions",
      "Communist systems collapse by 1991"
    ],
    correctOrder: [0, 1, 2, 3],
    turningPoint: 1,
    hint: "Organized reform pressure is the pivot."
  },

  /* =========================================================
     GAME 5 (G5) — Bullet Match (28)
     This structure is intentionally simple and safe:
       type:"bullet-match"
       term: string
       bullets: [4 strings]
       hint: string
     (Game displays bullets on left, terms on right.)
  ========================================================= */

  // --- 28 sets ---
  {
    id:"G5-001", tags:["G5"], type:"bullet-match",
    term:"Federalism",
    bullets:[
      "Power is divided between national and state governments",
      "Both levels can have authority over the same people",
      "Some powers are shared (concurrent)",
      "Helps prevent one level from becoming too powerful"
    ],
    hint:"Think: division of power between levels."
  },
  {
    id:"G5-002", tags:["G5"], type:"bullet-match",
    term:"Separation of Powers",
    bullets:[
      "Legislative, executive, and judicial branches have different roles",
      "Prevents concentration of power",
      "Each branch has distinct constitutional duties",
      "Designed to protect liberty by limiting government"
    ],
    hint:"Think: power divided among branches."
  },
  {
    id:"G5-003", tags:["G5"], type:"bullet-match",
    term:"Checks and Balances",
    bullets:[
      "Branches can limit each other’s power",
      "Veto, judicial review, confirmations are examples",
      "Forces cooperation and compromise",
      "Prevents abuse of authority"
    ],
    hint:"Think: branches checking branches."
  },
  {
    id:"G5-004", tags:["G5"], type:"bullet-match",
    term:"Popular Sovereignty",
    bullets:[
      "Government power comes from the people",
      "Elections are a key mechanism",
      "Consent of the governed",
      "Citizens can change leaders and laws"
    ],
    hint:"Think: people are the source of power."
  },
  {
    id:"G5-005", tags:["G5"], type:"bullet-match",
    term:"Limited Government",
    bullets:[
      "Government must follow the Constitution",
      "Leaders are not above the law",
      "Rights are protected from government overreach",
      "Power is restricted by rules and procedures"
    ],
    hint:"Think: government is constrained."
  },
  {
    id:"G5-006", tags:["G5"], type:"bullet-match",
    term:"Judicial Review",
    bullets:[
      "Courts can declare laws unconstitutional",
      "Not explicitly written as a named power",
      "Established by Marbury v. Madison (1803)",
      "Strengthens judiciary as a check"
    ],
    hint:"Think: courts reviewing constitutionality."
  },
  {
    id:"G5-007", tags:["G5"], type:"bullet-match",
    term:"Necessary and Proper Clause",
    bullets:[
      "Allows Congress to pass laws needed to carry out powers",
      "Basis for implied powers",
      "Connected to McCulloch v. Maryland",
      "Expands congressional flexibility"
    ],
    hint:"Think: implied powers clause."
  },
  {
    id:"G5-008", tags:["G5"], type:"bullet-match",
    term:"Supremacy Clause",
    bullets:[
      "Federal law is the supreme law of the land",
      "State laws cannot conflict with federal law",
      "Article VI",
      "Helps resolve conflicts between levels of government"
    ],
    hint:"Think: federal law wins conflicts."
  },
  {
    id:"G5-009", tags:["G5"], type:"bullet-match",
    term:"10th Amendment",
    bullets:[
      "Powers not delegated to the federal government are reserved",
      "Supports states’ authority",
      "Often referenced in federalism disputes",
      "Limits national government by reservation"
    ],
    hint:"Think: reserved powers."
  },
  {
    id:"G5-010", tags:["G5"], type:"bullet-match",
    term:"Incorporation",
    bullets:[
      "Applies Bill of Rights protections to states",
      "Uses the 14th Amendment Due Process Clause",
      "Developed through Supreme Court cases",
      "Expanded civil liberties against state action"
    ],
    hint:"Think: Bill of Rights applied to states."
  },
  {
    id:"G5-011", tags:["G5"], type:"bullet-match",
    term:"Due Process",
    bullets:[
      "Government must follow fair procedures",
      "Protects against arbitrary action",
      "Found in 5th and 14th Amendments",
      "Often tied to rights protections in court cases"
    ],
    hint:"Think: fair procedures/fairness."
  },
  {
    id:"G5-012", tags:["G5"], type:"bullet-match",
    term:"Equal Protection",
    bullets:[
      "States must apply laws equally",
      "14th Amendment",
      "Used in civil rights cases",
      "Targets discrimination in law and enforcement"
    ],
    hint:"Think: equality under law."
  },
  {
    id:"G5-013", tags:["G5"], type:"bullet-match",
    term:"Civil Rights Act (1964)",
    bullets:[
      "Banned discrimination in public accommodations",
      "Targeted segregation and unequal treatment",
      "Strengthened federal enforcement",
      "Major landmark civil rights law"
    ],
    hint:"Think: discrimination in public places/jobs."
  },
  {
    id:"G5-014", tags:["G5"], type:"bullet-match",
    term:"Voting Rights Act (1965)",
    bullets:[
      "Targeted barriers like discriminatory practices",
      "Strengthened federal enforcement of voting protections",
      "Expanded access to the ballot",
      "Responded to persistent disenfranchisement"
    ],
    hint:"Think: voting barriers/enforcement."
  },
  {
    id:"G5-015", tags:["G5"], type:"bullet-match",
    term:"Laissez-faire",
    bullets:[
      "Limited government regulation of business",
      "Often linked to Gilded Age industrialization",
      "Allowed growth of trusts/monopolies",
      "Belief in minimal economic intervention"
    ],
    hint:"Think: hands-off government in economy."
  },
  {
    id:"G5-016", tags:["G5"], type:"bullet-match",
    term:"Trust/Monopoly",
    bullets:[
      "Large control over an industry",
      "Reduced competition",
      "Could influence prices and output",
      "Often grew with limited regulation"
    ],
    hint:"Think: concentrated market power."
  },
  {
    id:"G5-017", tags:["G5"], type:"bullet-match",
    term:"Labor Union",
    bullets:[
      "Workers organize for bargaining power",
      "Goals include wages, hours, and safety",
      "Used strikes and collective action",
      "Often resisted by owners/government"
    ],
    hint:"Think: organized workers."
  },
  {
    id:"G5-018", tags:["G5"], type:"bullet-match",
    term:"Neutrality Acts",
    bullets:[
      "Aimed to avoid involvement in foreign wars",
      "1930s isolationism",
      "Restricted aid/trade with belligerents",
      "Reflected WWI memory and caution"
    ],
    hint:"Think: isolationist laws pre-WWII."
  },
  {
    id:"G5-019", tags:["G5"], type:"bullet-match",
    term:"Lend-Lease",
    bullets:[
      "Provided supplies to Allies before direct entry into WWII",
      "Increased U.S. support for Britain and others",
      "Step away from strict isolationism",
      "Helped Allies resist aggressors"
    ],
    hint:"Think: aid short of war."
  },
  {
    id:"G5-020", tags:["G5"], type:"bullet-match",
    term:"Pearl Harbor",
    bullets:[
      "December 7, 1941",
      "Direct attack by Japan",
      "Ended debate about entering WWII",
      "Led to U.S. declaration of war"
    ],
    hint:"Think: direct attack triggers entry."
  },
  {
    id:"G5-021", tags:["G5"], type:"bullet-match",
    term:"Containment",
    bullets:[
      "Goal: stop spread of communism",
      "Used aid, alliances, and deterrence",
      "Cold War foreign policy",
      "Limited Soviet influence"
    ],
    hint:"Think: block expansion."
  },
  {
    id:"G5-022", tags:["G5"], type:"bullet-match",
    term:"Red Scare",
    bullets:[
      "Fear of communist influence domestically",
      "Often linked to Cold War rivalry",
      "Led to investigations and suspicion",
      "Sparked civil liberties debates"
    ],
    hint:"Think: domestic anti-communist fear."
  },
  {
    id:"G5-023", tags:["G5"], type:"bullet-match",
    term:"Muckrakers",
    bullets:[
      "Investigative journalists",
      "Exposed corruption and unsafe conditions",
      "Built public pressure for reform",
      "Associated with Progressive Era"
    ],
    hint:"Think: exposure journalism → reform."
  },
  {
    id:"G5-024", tags:["G5"], type:"bullet-match",
    term:"19th Amendment",
    bullets:[
      "Women’s suffrage nationally",
      "Expanded political participation",
      "Ratified in 1920",
      "Major democratic expansion"
    ],
    hint:"Think: women gain the vote."
  },
  {
    id:"G5-025", tags:["G5"], type:"bullet-match",
    term:"22nd Amendment",
    bullets:[
      "Limits presidential terms",
      "Response to FDR serving four terms",
      "Prevents long-term executive concentration",
      "Two-term limit"
    ],
    hint:"Think: term limits."
  },
  {
    id:"G5-026", tags:["G5"], type:"bullet-match",
    term:"23rd Amendment",
    bullets:[
      "Gives Washington, D.C. electoral votes",
      "Expanded participation in presidential elections",
      "Addresses D.C. representation issue",
      "D.C. treated like a state for electors"
    ],
    hint:"Think: D.C. votes for president."
  },
  {
    id:"G5-027", tags:["G5"], type:"bullet-match",
    term:"25th Amendment",
    bullets:[
      "Clarifies presidential succession",
      "Covers incapacity and VP replacement",
      "Ensures continuity in executive leadership",
      "Explains transfer of power procedures"
    ],
    hint:"Think: incapacity/succession."
  },
  {
    id:"G5-028", tags:["G5"], type:"bullet-match",
    term:"Incorporation Expansion (post-WWII)",
    bullets:[
      "More Bill of Rights protections applied to states over time",
      "Driven by Supreme Court cases",
      "Strengthened civil liberties nationwide",
      "Often relied on 14th Amendment due process"
    ],
    hint:"Think: more rights applied against states."
  },

  /* =========================================================
     GAME 6 (G6) — Cause & Effect Chain (28)
     required:
       type:"cause-effect-chain"
       prompt: string
       chain: [4 strings]
       correctOrder: [0,1,2,3]
       hint: string
  ========================================================= */

  // 28 total chains
  {
    id:"G6-001", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 1 — Source Credibility",
    prompt:"Trace how historians strengthen a conclusion using evidence.",
    chain:[
      "A claim is made about an event",
      "Multiple sources are gathered",
      "Evidence is compared for corroboration and bias",
      "A stronger conclusion is formed or revised"
    ],
    correctOrder:[0,1,2,3],
    hint:"Corroboration and bias-checking is what strengthens the claim."
  },
  {
    id:"G6-002", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 2 — Primary vs Secondary",
    prompt:"Trace how a primary source can change interpretation.",
    chain:[
      "A textbook offers an explanation",
      "A primary source from the time period is examined",
      "New details challenge the textbook summary",
      "The interpretation is revised with better evidence"
    ],
    correctOrder:[0,1,2,3],
    hint:"Primary evidence can confirm or contradict later summaries."
  },
  {
    id:"G6-003", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 6 — Industrial Growth",
    prompt:"Trace how railroads fueled national industry.",
    chain:[
      "Rail networks expand across regions",
      "Shipping becomes faster and cheaper",
      "Businesses reach national markets",
      "Corporations grow in size and influence"
    ],
    correctOrder:[0,1,2,3],
    hint:"Transportation unlocks national markets."
  },
  {
    id:"G6-004", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 7 — Labor",
    prompt:"Trace why unions expanded in the late 1800s.",
    chain:[
      "Workers face unsafe conditions and low pay",
      "Workers organize unions",
      "Collective bargaining and strikes increase pressure",
      "Some employers/governments respond with reforms or conflict"
    ],
    correctOrder:[0,1,2,3],
    hint:"Organization changes workers from individuals into a group with leverage."
  },
  {
    id:"G6-005", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 8 — Laissez-faire",
    prompt:"Trace how laissez-faire helped create monopolies.",
    chain:[
      "Government limits regulation of business",
      "Large firms merge and reduce competition",
      "Trusts gain control of prices and output",
      "Smaller competitors weaken or disappear"
    ],
    correctOrder:[0,1,2,3],
    hint:"Less oversight makes consolidation easier."
  },
  {
    id:"G6-006", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 10 — Urbanization",
    prompt:"Trace how urban growth produced public health crises.",
    chain:[
      "Rapid migration/immigration increases city populations",
      "Housing supply cannot keep up",
      "Overcrowded tenements and poor sanitation spread disease",
      "Reformers push health codes and city reforms"
    ],
    correctOrder:[0,1,2,3],
    hint:"Population pressure strains infrastructure."
  },
  {
    id:"G6-007", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 11 — Progressive Reform",
    prompt:"Trace the reform pattern during the Progressive Era.",
    chain:[
      "Investigations expose corruption or unsafe conditions",
      "Public pressure increases",
      "Government passes reforms and regulations",
      "Conditions improve through enforcement over time"
    ],
    correctOrder:[0,1,2,3],
    hint:"Exposure → pressure → policy → improvement."
  },
  {
    id:"G6-008", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 12 — Women’s Suffrage",
    prompt:"Trace how women gained voting rights nationally.",
    chain:[
      "Suffrage groups organize and campaign",
      "Support grows in some states",
      "Pressure increases for a constitutional amendment",
      "19th Amendment is ratified"
    ],
    correctOrder:[0,1,2,3],
    hint:"National change came through constitutional amendment."
  },
  {
    id:"G6-009", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 14 — Treaty of Versailles",
    prompt:"Trace why the U.S. rejected the Treaty of Versailles.",
    chain:[
      "WWI ends and treaty is negotiated",
      "Treaty includes League of Nations commitments",
      "Senate fears entangling alliances and reduced sovereignty",
      "Treaty is rejected by the U.S."
    ],
    correctOrder:[0,1,2,3],
    hint:"The League clause drives the opposition."
  },
  {
    id:"G6-010", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 15 — Isolationism",
    prompt:"Trace how isolationism shaped policy in the 1930s.",
    chain:[
      "WWI costs create anti-war sentiment",
      "Congress passes Neutrality Acts",
      "U.S. avoids formal commitments as tensions rise",
      "Policies slowly shift as threats grow"
    ],
    correctOrder:[0,1,2,3],
    hint:"Neutrality laws formalize isolationism."
  },
  {
    id:"G6-011", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 16 — Depression Causes",
    prompt:"Trace how speculation increased crash risk.",
    chain:[
      "Investors buy stocks on borrowed money",
      "Stock prices become unstable and inflated",
      "Market crash wipes out wealth and confidence",
      "Banking and business failures spread unemployment"
    ],
    correctOrder:[0,1,2,3],
    hint:"Borrowing magnifies losses when prices fall."
  },
  {
    id:"G6-012", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 18 — New Deal",
    prompt:"Trace why federal power expanded during the New Deal.",
    chain:[
      "Economic collapse creates widespread hardship",
      "Federal government launches relief/recovery/reform programs",
      "New agencies regulate markets and provide jobs",
      "Expectations for federal responsibility grow long-term"
    ],
    correctOrder:[0,1,2,3],
    hint:"Crisis demanded national-scale action."
  },
  {
    id:"G6-013", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 20 — WWII Entry",
    prompt:"Trace the cause of U.S. entry into WWII.",
    chain:[
      "War expands overseas while U.S. debates involvement",
      "U.S. increases aid to Allies",
      "Japan attacks Pearl Harbor",
      "U.S. declares war and mobilizes"
    ],
    correctOrder:[0,1,2,3],
    hint:"The direct attack ends debate."
  },
  {
    id:"G6-014", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 22 — Postwar Boom",
    prompt:"Trace factors that helped fuel post-WWII prosperity.",
    chain:[
      "Pent-up demand increases after war",
      "Loans and education access expand (e.g., GI Bill)",
      "Suburban housing growth accelerates",
      "Consumer spending drives economic expansion"
    ],
    correctOrder:[0,1,2,3],
    hint:"Demand + access to housing/education fuels growth."
  },
  {
    id:"G6-015", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 23 — Cold War Origins",
    prompt:"Trace why U.S.–Soviet rivalry formed.",
    chain:[
      "WWII ends with U.S. and USSR as superpowers",
      "Ideologies clash and mistrust grows",
      "Each side seeks influence through alliances",
      "Long-term Cold War rivalry shapes policy"
    ],
    correctOrder:[0,1,2,3],
    hint:"Ideological conflict drives competition."
  },
  {
    id:"G6-016", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 24 — Containment",
    prompt:"Trace containment policy.",
    chain:[
      "Fear grows about spread of communism",
      "U.S. provides aid to resist expansion",
      "Alliances and deterrence strategies form",
      "Soviet influence is challenged in multiple regions"
    ],
    correctOrder:[0,1,2,3],
    hint:"Aid and alliances are tools of containment."
  },
  {
    id:"G6-017", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 26 — Civil Rights",
    prompt:"Trace how activism helped change federal law.",
    chain:[
      "Segregation and unequal treatment persist",
      "Organized protest and litigation increase",
      "Federal government passes major civil rights laws",
      "Enforcement expands protections nationally"
    ],
    correctOrder:[0,1,2,3],
    hint:"Federal legislation shifts local battles into national standards."
  },
  {
    id:"G6-018", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 31 — Globalization",
    prompt:"Trace one effect of globalization on manufacturing.",
    chain:[
      "Global competition increases",
      "Some companies relocate production to lower costs",
      "Local manufacturing jobs decline in some areas",
      "Economic shifts increase service/tech sector growth in many regions"
    ],
    correctOrder:[0,1,2,3],
    hint:"Relocation changes local labor markets."
  },

  // --- The 7 you asked to add explicitly (Federalism / N&P / 10th / Incorporation / 22 / 23 / 25) ---
  {
    id:"G6-022",
    cs:"CS 5 — Federalism",
    tags:["G6"],
    type:"cause-effect-chain",
    prompt:"Trace how federalism divides power.",
    chain:[
      "U.S. Constitution establishes national government",
      "10th Amendment reserves powers to states",
      "States pass laws on local matters",
      "Power remains divided between national and state governments"
    ],
    correctOrder:[0,1,2,3],
    hint:"Reserved powers reinforce state authority."
  },
  {
    id:"G6-023",
    cs:"CS 6 — Necessary & Proper Clause",
    tags:["G6"],
    type:"cause-effect-chain",
    prompt:"Trace expansion of implied powers.",
    chain:[
      "Congress creates a national bank",
      "Maryland attempts to tax the bank",
      "Supreme Court hears McCulloch v. Maryland",
      "Court upholds implied powers under Necessary & Proper Clause"
    ],
    correctOrder:[0,1,2,3],
    hint:"The Court confirms implied powers."
  },
  {
    id:"G6-024",
    cs:"CS 8 — 10th Amendment",
    tags:["G6"],
    type:"cause-effect-chain",
    prompt:"Trace reserved powers in action.",
    chain:[
      "Constitution does not delegate some powers to the national government",
      "States retain authority over many local issues",
      "State and local governments make policy decisions",
      "Power is exercised through reserved powers"
    ],
    correctOrder:[0,1,2,3],
    hint:"If not delegated, it’s reserved."
  },
  {
    id:"G6-025",
    cs:"CS 14 — Incorporation Expansion",
    tags:["G6"],
    type:"cause-effect-chain",
    prompt:"Trace incorporation through the 14th Amendment.",
    chain:[
      "Bill of Rights originally limits federal government only",
      "14th Amendment includes Due Process protections",
      "Supreme Court applies specific rights to states over time",
      "States must follow many Bill of Rights protections"
    ],
    correctOrder:[0,1,2,3],
    hint:"14th Amendment due process is the vehicle."
  },
  {
    id:"G6-026",
    cs:"CS 11 — 22nd Amendment",
    tags:["G6"],
    type:"cause-effect-chain",
    prompt:"Trace presidential term limits.",
    chain:[
      "FDR is elected four times",
      "Concern grows about executive power concentration",
      "22nd Amendment is ratified",
      "Presidents are limited to two terms"
    ],
    correctOrder:[0,1,2,3],
    hint:"Reform followed extended tenure."
  },
  {
    id:"G6-027",
    cs:"CS 11 — 23rd Amendment",
    tags:["G6"],
    type:"cause-effect-chain",
    prompt:"Trace electoral votes for Washington, D.C.",
    chain:[
      "D.C. residents cannot vote for president",
      "Pressure increases to expand participation",
      "23rd Amendment is ratified",
      "D.C. receives electoral votes in presidential elections"
    ],
    correctOrder:[0,1,2,3],
    hint:"Amendment expands participation."
  },
  {
    id:"G6-028",
    cs:"CS 11 — 25th Amendment",
    tags:["G6"],
    type:"cause-effect-chain",
    prompt:"Trace presidential succession during incapacity.",
    chain:[
      "President becomes incapacitated",
      "25th Amendment procedures are triggered",
      "Vice President can assume authority temporarily",
      "Continuity of executive leadership is maintained"
    ],
    correctOrder:[0,1,2,3],
    hint:"Succession rules prevent leadership gaps."
  },

  // Fill missing IDs to ensure 28 total (we already have 18 + 7 = 25, add 3 more clean chains)
  {
    id:"G6-019", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 33 — Civil Rights Expansion",
    prompt:"Trace how federal laws strengthened civil rights in the 1960s.",
    chain:[
      "Activism highlights discrimination and barriers",
      "National attention increases political pressure",
      "Congress passes Civil Rights Act and Voting Rights Act",
      "Enforcement expands equal access and voting protections"
    ],
    correctOrder:[0,1,2,3],
    hint:"Legislation + enforcement changed the system."
  },
  {
    id:"G6-020", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 9 — Technology & Daily Life",
    prompt:"Trace how new technology improved daily life in the early 1900s.",
    chain:[
      "New inventions spread (electric lighting, appliances)",
      "Household tasks become faster and easier",
      "Time use and daily routines shift",
      "Standard of living improves for many households"
    ],
    correctOrder:[0,1,2,3],
    hint:"Technology changes time and labor."
  },
  {
    id:"G6-021", tags:["G6"], type:"cause-effect-chain",
    cs:"CS 28 — Mass Media & Culture",
    prompt:"Trace how mass media shaped culture after WWII.",
    chain:[
      "Television and radio reach mass audiences",
      "People consume shared national programs and messages",
      "Trends spread faster across regions",
      "Shared culture and consumer patterns strengthen"
    ],
    correctOrder:[0,1,2,3],
    hint:"Mass reach creates shared culture."
  }
];

// Exports (do not remove)
window.AMSTUD_BANK = AMSTUD_BANK;
window.AMSTUD_BANK_VERSION = "2026-03-02-REBUILT-G1toG6";
console.log("✅ AMSTUD_BANK loaded:", window.AMSTUD_BANK.length, window.AMSTUD_BANK_VERSION);
