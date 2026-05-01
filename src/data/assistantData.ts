export interface TopicStep {
  title: string;
  description: string;
}

export interface TimelineEntry {
  period: string;
  event: string;
}

export interface TopicData {
  id: string;
  title: string;
  description: string;
  icon: string;
  greeting: string;
  steps: TopicStep[];
  timeline: TimelineEntry[];
  tips: string[];
  stepperSteps: string[];
}

export const topics: TopicData[] = [
  {
    id: "register",
    title: "Register to Vote",
    description: "How to get on the electoral roll",
    icon: "ClipboardList",
    greeting: "Great choice! Let me walk you through the voter registration process in India. 🗳️",
    steps: [
      {
        title: "Visit NVSP Portal or Download Voter Helpline App",
        description: "Go to voters.eci.gov.in (NVSP) or download the official Voter Helpline App from the Play Store / App Store."
      },
      {
        title: "Fill Form 6 (New Registration)",
        description: "Select 'Fresh Inclusion / Enrolment' and fill Form 6 with your personal details — name, DOB, address, and constituency."
      },
      {
        title: "Upload Required Documents",
        description: "Upload proof of age (Aadhaar, birth certificate, passport, etc.), proof of address, and a recent passport-size photograph."
      },
      {
        title: "Submit & Note Reference Number",
        description: "After submission, you'll receive a reference number. Keep it safe to track your application status."
      },
      {
        title: "BLO Verification",
        description: "A Booth Level Officer (BLO) may visit your address for verification. Ensure someone is available."
      },
      {
        title: "Receive Your EPIC Card",
        description: "Once verified, your name is added to the electoral roll and you receive your Elector's Photo Identity Card (EPIC / Voter ID)."
      }
    ],
    timeline: [
      { period: "Day 1", event: "Fill & submit Form 6 online" },
      { period: "Day 3–7", event: "BLO verification at your address" },
      { period: "Day 14–21", event: "Application processed by ERO" },
      { period: "Day 21–30", event: "EPIC card dispatched or available for download" },
      { period: "Ongoing", event: "Check status on NVSP portal using reference number" }
    ],
    tips: [
      "You can also submit Form 6 in person at your nearest ERO/BLO office",
      "Register as soon as you turn 18 — the qualifying date is January 1 of each year",
      "If you move, submit Form 8A for address change or Form 6 again for a new constituency",
      "Keep your EPIC card safe — it's also accepted as a valid photo ID for many purposes",
      "Double-check your name on the electoral roll before every election"
    ],
    stepperSteps: ["Visit Portal", "Fill Form 6", "Upload Docs", "Submit", "Verification", "Get EPIC"]
  },
  {
    id: "eligibility",
    title: "Check Eligibility",
    description: "Who can vote in India",
    icon: "CheckCircle",
    greeting: "Let's check if you're eligible to vote! Here are the requirements. ✅",
    steps: [
      {
        title: "Indian Citizenship",
        description: "You must be a citizen of India. OCI (Overseas Citizen of India) cardholders are NOT eligible to vote."
      },
      {
        title: "Minimum Age: 18 Years",
        description: "You must have attained the age of 18 years on or before January 1 of the year when the electoral roll is revised."
      },
      {
        title: "Ordinary Residence",
        description: "You must be ordinarily resident in a constituency — meaning the place where you normally live."
      },
      {
        title: "Not Disqualified",
        description: "You must not be disqualified due to: (a) being of unsound mind declared by a court, (b) being temporarily disqualified for corrupt practices, or (c) being barred under any law."
      },
      {
        title: "Name on the Electoral Roll",
        description: "Even if you meet all other criteria, you can ONLY vote if your name appears on the current electoral roll for your constituency."
      }
    ],
    timeline: [
      { period: "January 1", event: "Qualifying date — age 18 by this date makes you eligible for that year's roll" },
      { period: "Jan–Mar", event: "Electoral roll summary revision period" },
      { period: "April–Sept", event: "Continuous updating — special drives at colleges, offices" },
      { period: "Oct–Dec", event: "Final electoral roll published before major elections" }
    ],
    tips: [
      "NRIs who are Indian citizens can now vote — but must be physically present at the polling station",
      "You can only be enrolled in ONE constituency at a time",
      "Homeless persons can also register using their usual place of residence",
      "Service voters (armed forces, government personnel posted abroad) have special enrolment rules",
      "If you were previously enrolled but your name is missing, file Form 8 immediately"
    ],
    stepperSteps: ["Citizenship", "Age 18+", "Residence", "Not Disqualified", "On Electoral Roll"]
  },
  {
    id: "process",
    title: "Voting Process",
    description: "Step-by-step guide for election day",
    icon: "Vote",
    greeting: "Here's exactly what happens on voting day! Let me walk you through it. 🏛️",
    steps: [
      {
        title: "Know Your Polling Station",
        description: "Check your designated polling booth on NVSP or Voter Helpline App. You can ONLY vote at your assigned station."
      },
      {
        title: "Carry Valid Photo ID",
        description: "Bring your EPIC (Voter ID). Alternatively, you can carry any of the 11 approved IDs: Aadhaar, passport, driving license, PAN card, etc."
      },
      {
        title: "Queue & Identity Verification",
        description: "Join the queue at your polling station. Present your ID to the first polling officer who verifies your name in the electoral roll."
      },
      {
        title: "Get Your Finger Inked",
        description: "The second polling officer applies indelible ink on your left forefinger. This prevents double voting."
      },
      {
        title: "Press the Button on the EVM",
        description: "Enter the voting compartment. Press the BLUE button next to your chosen candidate's name and symbol on the Ballot Unit."
      },
      {
        title: "Verify via VVPAT",
        description: "After pressing, the VVPAT displays a paper slip showing the candidate you voted for. Verify it for ~7 seconds before it falls into the sealed box."
      },
      {
        title: "You're Done!",
        description: "Exit the polling station. You've successfully voted! No one can find out who you voted for — your vote is secret."
      }
    ],
    timeline: [
      { period: "Before 7 AM", event: "Polling officials arrive and set up EVMs & VVPATs" },
      { period: "7:00 AM", event: "Polling begins (in most cases)" },
      { period: "Morning", event: "Best time to vote — shorter queues" },
      { period: "Midday", event: "Peak hours — expect longer wait times" },
      { period: "5:00 PM", event: "Polling closes (varies by constituency)" },
      { period: "After close", event: "EVMs sealed and transported to strong rooms under security" }
    ],
    tips: [
      "Go early in the morning to avoid long queues and heat",
      "If someone challenges your identity, the presiding officer can ask additional questions",
      "You can ask for a companion to help if you have a disability (Form 14A)",
      "NOTA (None Of The Above) is the last button on the EVM — use it if you want to reject all candidates",
      "Taking photos inside the voting compartment is PROHIBITED",
      "If your name is NOT on the electoral roll, you cannot vote — even with a Voter ID card"
    ],
    stepperSteps: ["Find Booth", "Carry ID", "Verification", "Get Inked", "Vote on EVM", "Verify VVPAT", "Done!"]
  },
  {
    id: "timeline",
    title: "Election Timeline",
    description: "How an election unfolds in India",
    icon: "Calendar",
    greeting: "Let me show you the complete election lifecycle in India — from announcement to results! 📅",
    steps: [
      {
        title: "Election Commission Announcement",
        description: "The ECI announces election dates — notification, nomination filing, scrutiny, withdrawal, polling phases, and counting day."
      },
      {
        title: "Model Code of Conduct Activated",
        description: "The MCC comes into force immediately, restricting government announcements, transfers, and use of official machinery for campaigning."
      },
      {
        title: "Nomination Filing Period",
        description: "Candidates submit nomination papers to the Returning Officer with the required deposit (₹25,000 for Lok Sabha; ₹12,500 for SC/ST)."
      },
      {
        title: "Scrutiny & Withdrawal",
        description: "The RO scrutinizes nominations. Invalid ones are rejected. Candidates may withdraw within the given window."
      },
      {
        title: "Campaign Period",
        description: "Candidates campaign through rallies, roadshows, media, and door-to-door canvassing. Campaigning ends 48 hours before polling (silence period)."
      },
      {
        title: "Polling Phase(s)",
        description: "Voters cast ballots on EVMs with VVPAT verification. Large elections like Lok Sabha may span 7+ phases over weeks."
      },
      {
        title: "Counting Day",
        description: "Postal ballots counted first, then EVM rounds. VVPAT slips from randomly selected EVMs are verified. Results declared constituency by constituency."
      },
      {
        title: "Government Formation",
        description: "Party/coalition with 272+ Lok Sabha seats is invited by the President to form government. Leader takes oath as Prime Minister."
      }
    ],
    timeline: [
      { period: "T-90 days", event: "ECI announces election schedule" },
      { period: "T-60 days", event: "Nomination filing window opens" },
      { period: "T-45 days", event: "Scrutiny & withdrawal period" },
      { period: "T-30 days", event: "Campaigning in full swing" },
      { period: "T-2 days", event: "48-hour silence period begins" },
      { period: "Day 0", event: "Polling day" },
      { period: "T+1-3 days", event: "Counting of votes" },
      { period: "T+5-7 days", event: "Government formation & oath ceremony" }
    ],
    tips: [
      "The ECI is an autonomous body under Article 324 — no government control over election conduct",
      "Multiple phases are needed because security forces must be deployed across regions",
      "Exit polls can ONLY be published after the LAST phase of polling ends",
      "The MCC applies to all parties — ruling and opposition alike",
      "By-elections follow a compressed version of this same timeline"
    ],
    stepperSteps: ["ECI Notice", "MCC Active", "Nominations", "Scrutiny", "Campaign", "Polling", "Counting", "Government"]
  },
  {
    id: "documents",
    title: "Documents Required",
    description: "What to carry on election day & for registration",
    icon: "FileText",
    greeting: "Here's your complete documents checklist — both for registration and for election day! 📋",
    steps: [
      {
        title: "For Voter Registration (Form 6)",
        description: "You need: (1) Proof of age — Aadhaar, birth certificate, marksheet, or passport. (2) Proof of address — Aadhaar, utility bill, bank statement, or rental agreement. (3) Passport-size photograph."
      },
      {
        title: "Your EPIC (Voter ID) Card",
        description: "This is your primary identification on election day. It has your photograph, EPIC number, and address. Carry the physical card or digital EPIC."
      },
      {
        title: "Alternative Photo IDs (11 Accepted)",
        description: "If you don't have your EPIC: Aadhaar card, PAN card, driving license, Indian passport, MNREGA job card, pension document with photo, bank/post office passbook with photo, health insurance smart card, SC/ST certificate with photo, or official ID card of an MP/MLA/MLC."
      },
      {
        title: "For Overseas (NRI) Voters",
        description: "Indian passport (mandatory), copy of passport pages showing valid visa, and proof of address in India (last Indian address). File Form 6A for registration."
      },
      {
        title: "For Service Voters",
        description: "Armed forces personnel: use Form 2 for registration. Government officials on election duty: get an Election Duty Certificate (EDC) to vote at your duty station."
      }
    ],
    timeline: [
      { period: "Before Registration", event: "Gather age proof, address proof, and photograph" },
      { period: "During Registration", event: "Upload scanned copies (online) or submit photocopies (offline)" },
      { period: "After Approval", event: "Collect EPIC card from BLO or download digital EPIC" },
      { period: "Before Election Day", event: "Verify EPIC details and polling station" },
      { period: "On Election Day", event: "Carry EPIC or any of the 11 accepted alternative photo IDs" }
    ],
    tips: [
      "Always carry original documents — photocopies alone are NOT accepted at polling stations",
      "If your EPIC has errors, file Form 8 to correct name, photo, age, or address",
      "The Voter Helpline App lets you store a digital copy of your EPIC on your phone",
      "Aadhaar is the most commonly accepted document for both registration and voting",
      "If you've lost your EPIC, apply for a duplicate immediately — don't wait until election day",
      "Photo on the ID must reasonably match your current appearance"
    ],
    stepperSteps: ["Gather Docs", "Submit Copies", "Get EPIC", "Verify Details", "Carry on Voting Day"]
  }
];

export interface FreeTextResponse {
  keywords: string[];
  response: string;
}

export const freeTextResponses: FreeTextResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "namaste"],
    response: "Namaste! 🙏 Welcome to the Election Guide Assistant. I can help you with:\n\n• **Registering to vote** — step-by-step process\n• **Checking your eligibility** — age, citizenship, and more\n• **Understanding the voting process** — what happens on election day\n• **Election timeline** — how elections unfold in India\n• **Documents required** — what to carry\n\nClick a topic on the left or type your question!"
  },
  {
    keywords: ["evm", "electronic voting machine", "voting machine"],
    response: "**Electronic Voting Machine (EVM)** 🔵\n\nEVMs have been used in Indian elections since 2004 (nationwide). Here's how they work:\n\n1. **Two Units**: Control Unit (with polling officer) + Ballot Unit (inside voting compartment)\n2. **How to vote**: Press the BLUE button next to your candidate's name & symbol\n3. **Confirmation**: A beep sound confirms your vote is recorded\n4. **Battery-powered**: No electricity needed at the polling station\n5. **Capacity**: Can record up to 2,000 votes per machine\n\nEvery EVM is paired with a **VVPAT** for paper trail verification."
  },
  {
    keywords: ["vvpat", "paper trail", "paper audit"],
    response: "**Voter Verifiable Paper Audit Trail (VVPAT)** 🧾\n\nVVPAT is attached to every EVM since 2019:\n\n1. After you press the EVM button, VVPAT prints a paper slip\n2. The slip shows: candidate name, serial number, and party symbol\n3. It's visible through a glass window for **~7 seconds**\n4. Then it falls into a sealed compartment\n5. VVPAT slips from **5 randomly selected EVMs** per assembly constituency are counted for verification\n\nThis ensures your vote was recorded correctly!"
  },
  {
    keywords: ["nota", "none of the above", "reject"],
    response: "**NOTA — None Of The Above** 🚫\n\n• Introduced in 2013 following a Supreme Court order\n• It's the **last button** on the EVM ballot unit\n• Allows you to reject ALL candidates without spoiling your ballot\n• **Important**: NOTA votes don't affect the result — the candidate with the most valid votes still wins, even if NOTA gets more votes\n• In some local body elections, if NOTA gets the most votes, a re-election may be called\n\nUsing NOTA is still participating in democracy! 🗳️"
  },
  {
    keywords: ["epic", "voter id", "photo identity"],
    response: "**EPIC — Elector's Photo Identity Card** 🪪\n\nYour EPIC (commonly called Voter ID) is:\n\n• Issued by the Election Commission of India\n• Contains your: name, photograph, father's/mother's name, DOB, address, EPIC number\n• Used as primary ID on election day\n• Also accepted as valid photo ID for banks, SIM cards, passport applications, etc.\n\n**How to get it**: Register via Form 6 → Verification → EPIC dispatched\n**Lost your EPIC?**: Apply for duplicate on NVSP or visit ERO office\n**Digital EPIC**: Download from voters.eci.gov.in"
  },
  {
    keywords: ["lok sabha", "parliament", "mp", "member of parliament"],
    response: "**Lok Sabha (House of the People)** 🏛️\n\n• **543 elected members** from constituencies across India\n• Members called **MPs** (Members of Parliament)\n• Elected every **5 years** (unless dissolved earlier)\n• Elections use **first-past-the-post** system — candidate with most votes wins\n• Party/coalition with **272+ seats** forms the government\n• Leader of majority party becomes **Prime Minister**\n• Currently, India has 543 Parliamentary constituencies (based on 2001 census, frozen until 2026)"
  },
  {
    keywords: ["rajya sabha", "upper house", "council of states"],
    response: "**Rajya Sabha (Council of States)** 🏛️\n\n• **245 members** — 233 elected + 12 nominated by President\n• Members called **MPs** (Members of Parliament)\n• Elected **indirectly** by state/UT legislators (not by general public)\n• **Staggered 6-year terms** — 1/3 retire every 2 years\n• Vice President of India is the ex-officio Chairman\n• Represents states' interests at the Union level\n• Cannot be dissolved (permanent body)"
  },
  {
    keywords: ["mcc", "model code", "code of conduct"],
    response: "**Model Code of Conduct (MCC)** 📜\n\nThe MCC is enforced from the moment elections are announced until results are declared:\n\n🚫 **No** new government schemes or project announcements\n🚫 **No** use of government transport/machinery for campaigning\n🚫 **No** combining official visits with campaigning\n🚫 **No** ad hoc appointments that may influence voters\n🚫 **No** transfers of officials without ECI approval\n✅ Criticism must focus on policies, not personal attacks\n✅ Applies equally to ruling party and opposition\n\nViolations can result in FIRs, campaign bans, or even candidate disqualification."
  },
  {
    keywords: ["form 6", "register", "registration", "sign up"],
    response: "**Form 6 — New Voter Registration** 📝\n\nUse Form 6 to:\n• Register as a new voter (first time)\n• Shift your enrollment from one constituency to another\n\n**Where to fill**: NVSP (voters.eci.gov.in), Voter Helpline App, or ERO office\n\n**Documents needed**:\n• Age proof (Aadhaar, DOB certificate, marksheet)\n• Address proof (Aadhaar, utility bill, bank passbook)\n• Passport-size photo\n\n**Processing time**: Usually 2–4 weeks after BLO verification"
  },
  {
    keywords: ["form 8", "correction", "change name", "change address"],
    response: "**Form 8 — Correction / Modification** ✏️\n\nUse Form 8 to:\n• Correct your name, age, or photo in the electoral roll\n• Change your address within the SAME constituency\n• Replace your photograph\n• Correct EPIC details\n\n**For address change to a DIFFERENT constituency**: Use Form 6 (new registration), not Form 8.\n\nAvailable on NVSP portal and Voter Helpline App."
  },
  {
    keywords: ["bogus", "fake vote", "booth capturing", "rigged"],
    response: "**Preventing Electoral Fraud** 🛡️\n\nIndia has strong safeguards:\n\n• **Indelible ink** prevents double voting\n• **EVMs** cannot be tampered with — they're stand-alone, non-networkable devices\n• **VVPAT** provides paper trail verification\n• **Webcasting** of sensitive polling stations\n• **Central Armed Police Forces (CAPF)** provide security\n• **Polling agents** from all parties monitor the process\n• **Observers** (ECI-appointed) oversee conduct\n• **ECI control** over election staff ensures neutrality\n\nIf you witness malpractice, call the ECI toll-free number: **1800 111 400**"
  },
  {
    keywords: ["bye", "goodbye", "thank", "thanks"],
    response: "You're welcome! 🙏 Remember: **Your vote is your voice.**\n\nMake sure to:\n✅ Check your name on the electoral roll\n✅ Carry valid ID on election day\n✅ Vote early to avoid queues\n\n*Jai Hind!* 🇮🇳 Feel free to come back anytime with more questions!"
  }
];

export function getFreeTextResponse(input: string): string | null {
  const lower = input.toLowerCase().trim();
  if (lower.length < 2) return null;
  
  for (const item of freeTextResponses) {
    for (const keyword of item.keywords) {
      if (lower.includes(keyword)) {
        return item.response;
      }
    }
  }
  
  return "I appreciate your question! 🤔 I can help you best with these specific topics:\n\n• **Voter Registration** — how to sign up\n• **Eligibility** — who can vote\n• **Voting Process** — what happens on election day\n• **Election Timeline** — the full election lifecycle\n• **Documents** — what you need to carry\n\nYou can also ask about: **EVM, VVPAT, NOTA, EPIC, Lok Sabha, Rajya Sabha, MCC, Form 6, Form 8**, and more.\n\nClick a topic on the left or try asking about one of these!";
}
