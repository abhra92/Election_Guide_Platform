export interface TimelineStep {
  id: number;
  title: string;
  period: string;
  description: string;
  details: string[];
  icon: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Delimitation of Constituencies",
    period: "Pre-Election Phase",
    description: "The country is divided into geographical constituencies based on population to ensure fair representation.",
    details: [
      "Conducted by the Delimitation Commission",
      "Ensures each constituency has roughly equal population",
      "Redraws boundaries for Lok Sabha and State Assemblies"
    ],
    icon: "landmark",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Voter Registration & Electoral Rolls",
    period: "Ongoing / Pre-Election",
    description: "The Election Commission of India (ECI) maintains and regularly updates the voter list.",
    details: [
      "Any Indian citizen aged 18 or older can register",
      "Electoral rolls are published in draft for public scrutiny",
      "Final rolls are published before elections"
    ],
    icon: "clipboard-check",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Announcement of Schedule",
    period: "A few months before polling",
    description: "The ECI announces the election schedule and enforces the Model Code of Conduct.",
    details: [
      "Model Code of Conduct comes into immediate effect",
      "Multi-phase polling schedules are announced for large states",
      "Dates for nomination, scrutiny, withdrawal, and polling are set"
    ],
    icon: "megaphone",
    color: "from-red-500 to-red-600"
  },
  {
    id: 4,
    title: "Filing of Nominations",
    period: "Following the announcement",
    description: "Candidates file their nomination papers with the Returning Officer (RO).",
    details: [
      "Candidates submit affidavits detailing assets, liabilities, and criminal records",
      "RO scrutinizes the nominations",
      "Candidates have a window to withdraw their names"
    ],
    icon: "building",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Campaigning",
    period: "Until 48 hours before polling",
    description: "Political parties and candidates engage in campaigns to present their manifestos.",
    details: [
      "Rallies, public meetings, and door-to-door campaigning",
      "Strict adherence to the Model Code of Conduct",
      "Campaigning officially ends 48 hours before voting begins"
    ],
    icon: "campaign",
    color: "from-green-500 to-green-600"
  },
  {
    id: 6,
    title: "Polling Day",
    period: "Election Day(s)",
    description: "Voters cast their ballots using Electronic Voting Machines (EVMs).",
    details: [
      "Voter identity is verified using Electoral Photo Identity Cards (EPIC)",
      "Indelible ink is applied to prevent duplicate voting",
      "VVPATs provide a paper trail for voters to verify their choice"
    ],
    icon: "vote",
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 7,
    title: "Counting & Results",
    period: "Post-Polling",
    description: "Votes are counted under the supervision of the Returning Officer and results are declared.",
    details: [
      "EVMs are securely transported to counting centers",
      "Counting is done in the presence of candidates or agents",
      "The candidate with the highest votes (First-Past-The-Post) wins"
    ],
    icon: "check-circle",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 8,
    title: "Formation of Government",
    period: "Following the declaration of results",
    description: "The party or coalition with a majority of seats is invited to form the government.",
    details: [
      "For Lok Sabha, the President invites the majority party to form the central government",
      "For State Assemblies, the Governor invites the majority party",
      "The Prime Minister or Chief Minister takes the oath of office"
    ],
    icon: "flag",
    color: "from-amber-500 to-amber-600"
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "Who conducts elections in India?",
    answer: "The Election Commission of India (ECI), an autonomous constitutional authority, is responsible for administering election processes in India.",
    category: "General"
  },
  {
    question: "What is the minimum age to vote in India?",
    answer: "Every Indian citizen who has attained the age of 18 years on the qualifying date (usually 1st January, 1st April, 1st July, or 1st October) is eligible to be registered as a voter.",
    category: "Eligibility"
  },
  {
    question: "Can I vote if my name is not in the Electoral Roll but I have a Voter ID card?",
    answer: "No. Having a Voter ID (EPIC) card is not enough. Your name must be present in the official Electoral Roll of your constituency to cast a vote.",
    category: "Registration"
  },
  {
    question: "Can an NRI vote in Indian elections?",
    answer: "Yes, NRIs can vote. However, they must be physically present at their polling station in India with their original passport to cast their vote.",
    category: "Eligibility"
  },
  {
    question: "What is NOTA?",
    answer: "None of the Above (NOTA) is an option on the EVM that allows voters to officially register their disapproval of all candidates contesting in their constituency.",
    category: "Voting"
  },
  {
    question: "Can I vote online in India?",
    answer: "No. Currently, India does not have an online voting system for general citizens. You must visit your designated polling station in person.",
    category: "Voting"
  },
  {
    question: "What documents can I use if I don't have my Voter ID (EPIC)?",
    answer: "You can use alternative IDs like Aadhaar Card, PAN Card, Passport, Driving License, or MGNREGA Job Card, provided your name is in the voter list.",
    category: "Voting"
  },
  {
    question: "What is the Model Code of Conduct?",
    answer: "It is a set of guidelines issued by the ECI for political parties and candidates to ensure free and fair elections. It comes into effect as soon as the election schedule is announced.",
    category: "General"
  },
  {
    question: "What is a VVPAT machine?",
    answer: "Voter Verifiable Paper Audit Trail (VVPAT) is an independent system attached to the EVM that allows voters to verify that their vote was cast correctly by viewing a printed slip.",
    category: "Process"
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the minimum voting age in India?",
    options: ["18", "21", "25", "16"],
    correctAnswer: 0,
    explanation: "The voting age in India was lowered from 21 to 18 years by the 61st Amendment Act of 1988."
  },
  {
    id: 2,
    question: "Who appoints the Chief Election Commissioner of India?",
    options: ["Prime Minister", "Chief Justice of India", "President of India", "Parliament"],
    correctAnswer: 2,
    explanation: "The Chief Election Commissioner and other Election Commissioners are appointed by the President of India."
  },
  {
    id: 3,
    question: "Which article of the Indian Constitution provides for the Election Commission?",
    options: ["Article 320", "Article 324", "Article 356", "Article 370"],
    correctAnswer: 1,
    explanation: "Article 324 of the Constitution provides for the power of superintendence, direction, and control of elections to be vested in an Election Commission."
  },
  {
    id: 4,
    question: "What is the full form of VVPAT?",
    options: ["Voter Verified Paper Audit Trail", "Voter Verifiable Paper Audit Trail", "Voter Verifiable Password Account Trail", "Voter Verified Paper Account Trail"],
    correctAnswer: 1,
    explanation: "VVPAT stands for Voter Verifiable Paper Audit Trail, which allows voters to verify their vote."
  },
  {
    id: 5,
    question: "In which year were the first general elections held in independent India?",
    options: ["1947", "1950", "1951-52", "1955"],
    correctAnswer: 2,
    explanation: "The first general elections were held between October 25, 1951, and February 21, 1952."
  },
  {
    id: 6,
    question: "What is the maximum limit of candidates an EVM can support (without additional units)?",
    options: ["16", "32", "64", "128"],
    correctAnswer: 2,
    explanation: "A single Balloting Unit can cater to 16 candidates. Up to 4 units can be linked to support 64 candidates (older models) or more in newer versions."
  },
  {
    id: 7,
    question: "Who was the first Chief Election Commissioner of India?",
    options: ["T.N. Seshan", "Sukumar Sen", "S.Y. Quraishi", "Kalyan Sundaram"],
    correctAnswer: 1,
    explanation: "Sukumar Sen was the first Chief Election Commissioner of India, serving from 1950 to 1958."
  },
  {
    id: 8,
    question: "What is the duration of the term for the Chief Election Commissioner?",
    options: ["5 years", "6 years or until age 65", "6 years or until age 70", "5 years or until age 65"],
    correctAnswer: 1,
    explanation: "The CEC holds office for a term of 6 years or until they attain the age of 65 years, whichever is earlier."
  },
  {
    id: 9,
    question: "Which state in India first used Electronic Voting Machines (EVMs) in an election?",
    options: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    correctAnswer: 0,
    explanation: "EVMs were first used in 1982 in the Paravur Assembly Constituency in Kerala on an experimental basis."
  },
  {
    id: 10,
    question: "What color is the indelible ink used during voting in India?",
    options: ["Blue", "Purple", "Black", "Silver/Grey"],
    correctAnswer: 1,
    explanation: "The ink, containing silver nitrate, appears dark purple/black when it reacts with the skin and light."
  },
  {
    id: 11,
    question: "What is the deposit amount for a candidate contesting Lok Sabha elections (General Category)?",
    options: ["Rs. 10,000", "Rs. 15,000", "Rs. 25,000", "Rs. 50,000"],
    correctAnswer: 2,
    explanation: "As per current rules, the security deposit for Lok Sabha elections is Rs. 25,000 for general candidates and Rs. 12,500 for SC/ST candidates."
  },
  {
    id: 12,
    question: "Which of the following is NOT a National Party in India (as of 2024)?",
    options: ["BJP", "INC", "AAP", "Shiv Sena"],
    correctAnswer: 3,
    explanation: "Shiv Sena is recognized as a State Party. National parties include BJP, INC, AAP, CPI(M), and others recognized by ECI."
  },
  {
    id: 13,
    question: "How many members are nominated by the President to the Rajya Sabha?",
    options: ["2", "10", "12", "15"],
    correctAnswer: 2,
    explanation: "The President nominates 12 members to the Rajya Sabha for their contributions to art, literature, science, and social services."
  },
  {
    id: 14,
    question: "What is the 'Model Code of Conduct'?",
    options: ["A law passed by Parliament", "Guidelines for voters", "Guidelines for parties and candidates", "A constitution amendment"],
    correctAnswer: 2,
    explanation: "The Model Code of Conduct is a set of guidelines agreed upon by political parties to ensure fair competition during elections."
  },
  {
    id: 15,
    question: "Who is the 'Returning Officer' in an election?",
    options: ["The person who returns the EVM", "The official responsible for conducting the election in a constituency", "The police head of the area", "A candidate's representative"],
    correctAnswer: 1,
    explanation: "The Returning Officer (RO) is the statutory authority responsible for the conduct of elections in a specific constituency."
  },
  {
    id: 16,
    question: "What is the maximum strength of the Lok Sabha as per the Constitution?",
    options: ["543", "545", "550", "552"],
    correctAnswer: 2,
    explanation: "With the removal of Anglo-Indian nominated seats, the current maximum strength is 550 (530 from States, 20 from UTs)."
  },
  {
    id: 17,
    question: "Elections to the Rajya Sabha are held every how many years?",
    options: ["2 years for one-third members", "5 years for all members", "6 years for all members", "Yearly"],
    correctAnswer: 0,
    explanation: "The Rajya Sabha is a permanent body; one-third of its members retire every second year."
  },
  {
    id: 18,
    question: "Which of these is a requirement to become the President of India?",
    options: ["Must be a graduate", "Must be at least 35 years old", "Must be a member of Lok Sabha", "Must be a former Governor"],
    correctAnswer: 1,
    explanation: "A candidate for President must be an Indian citizen, at least 35 years old, and qualified for election as a member of the Lok Sabha."
  },
  {
    id: 19,
    question: "What does 'EPIC' stand for in the context of elections?",
    options: ["Election Photo Identity Card", "Electoral Photo Identity Card", "Electronic Photo Identity Card", "Every Person Identity Card"],
    correctAnswer: 1,
    explanation: "EPIC stands for Electoral Photo Identity Card, commonly known as the Voter ID card."
  },
  {
    id: 20,
    question: "In India, the Right to Vote is a:",
    options: ["Fundamental Right", "Constitutional Right", "Natural Right", "Legal Right"],
    correctAnswer: 1,
    explanation: "The Supreme Court has clarified that while it's not a Fundamental Right, it is a Constitutional Right derived from Article 326."
  },
  {
    id: 21,
    question: "Who is responsible for the delimitation of constituencies in India?",
    options: ["Election Commission", "Parliament", "Delimitation Commission", "President"],
    correctAnswer: 2,
    explanation: "The Delimitation Commission of India is a commission established by the Government of India under the provisions of the Delimitation Commission Act."
  },
  {
    id: 22,
    question: "The 'None of the Above' (NOTA) option was first introduced in which year's state assembly elections?",
    options: ["2010", "2012", "2013", "2014"],
    correctAnswer: 2,
    explanation: "NOTA was first introduced in the 2013 Assembly elections held in five states (Chhattisgarh, Mizoram, Rajasthan, Delhi, and Madhya Pradesh)."
  },
  {
    id: 23,
    question: "What is the maximum number of electors that can be assigned to a polling station in India?",
    options: ["1000", "1200", "1500", "2000"],
    correctAnswer: 2,
    explanation: "As per ECI guidelines, the maximum number of voters per polling station is generally restricted to 1500."
  },
  {
    id: 24,
    question: "Which Constitutional Amendment lowered the voting age from 21 to 18?",
    options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
    correctAnswer: 2,
    explanation: "The 61st Amendment Act, 1988, reduced the voting age to 18 years."
  },
  {
    id: 25,
    question: "How many phases were there in the 2019 Lok Sabha General Elections?",
    options: ["5 phases", "7 phases", "9 phases", "11 phases"],
    correctAnswer: 1,
    explanation: "The 2019 Lok Sabha elections were held in 7 phases from April 11 to May 19."
  },
  {
    id: 26,
    question: "Which of the following bodies conducts elections to Panchayats and Municipalities?",
    options: ["Election Commission of India", "State Election Commission", "District Magistrate", "Governor"],
    correctAnswer: 1,
    explanation: "The State Election Commission is responsible for conducting elections to local bodies like Panchayats and Municipalities."
  },
  {
    id: 27,
    question: "A candidate must receive at least what fraction of valid votes to avoid losing their security deposit?",
    options: ["1/4th", "1/6th", "1/10th", "1/2"],
    correctAnswer: 1,
    explanation: "A candidate loses their security deposit if they fail to get more than one-sixth (1/6th) of the total valid votes polled in the constituency."
  },
  {
    id: 28,
    question: "What is the symbol of the Bharatiya Janata Party (BJP)?",
    options: ["Hand", "Lotus", "Elephant", "Broom"],
    correctAnswer: 1,
    explanation: "The Lotus is the official election symbol of the BJP."
  },
  {
    id: 29,
    question: "Which city is the headquarters of the Election Commission of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correctAnswer: 1,
    explanation: "The ECI is headquartered in Nirvachan Sadan, New Delhi."
  },
  {
    id: 30,
    question: "How many Lok Sabha seats are reserved for Scheduled Castes (SC)?",
    options: ["47", "79", "84", "131"],
    correctAnswer: 2,
    explanation: "Currently, 84 seats are reserved for Scheduled Castes and 47 for Scheduled Tribes in the Lok Sabha."
  },
  {
    id: 31,
    question: "Who was the first woman Chief Election Commissioner of India?",
    options: ["Kiran Bedi", "V.S. Ramadevi", "Meira Kumar", "Pratibha Patil"],
    correctAnswer: 1,
    explanation: "V.S. Ramadevi was the first (and only so far) woman to serve as the Chief Election Commissioner of India (in 1990)."
  },
  {
    id: 32,
    question: "What is the maximum time gap allowed between two sessions of Parliament?",
    options: ["3 months", "4 months", "6 months", "1 year"],
    correctAnswer: 2,
    explanation: "According to Article 85, there should not be a gap of more than 6 months between two sessions of Parliament."
  },
  {
    id: 33,
    question: "Which of the following is NOT an eligibility criteria for a Lok Sabha member?",
    options: ["Must be a citizen of India", "Must be at least 25 years old", "Must be a graduate", "Must not hold an office of profit"],
    correctAnswer: 2,
    explanation: "Educational qualification is not a mandatory requirement for becoming a member of Parliament in India."
  },
  {
    id: 34,
    question: "What is the term of a member of the State Legislative Council (Vidhan Parishad)?",
    options: ["5 years", "6 years", "4 years", "Indefinite"],
    correctAnswer: 1,
    explanation: "Members of the Legislative Council serve for 6 years, with one-third retiring every 2 years."
  },
  {
    id: 35,
    question: "Who decides on the disqualification of a Member of Parliament on grounds of defection?",
    options: ["President", "Election Commission", "Speaker/Chairperson", "Supreme Court"],
    correctAnswer: 2,
    explanation: "The decision on disqualification under the 10th Schedule (Anti-Defection Law) is taken by the Presiding Officer of the House."
  },
  {
    id: 36,
    question: "What is the 'Quorum' required to hold a meeting of the Lok Sabha?",
    options: ["1/5th of total members", "1/10th of total members", "50 members", "100 members"],
    correctAnswer: 1,
    explanation: "The quorum to constitute a sitting of the House is one-tenth of the total number of members of the House."
  },
  {
    id: 37,
    question: "The 'Two-Party System' is most prominent in which country's elections?",
    options: ["India", "USA", "France", "Switzerland"],
    correctAnswer: 1,
    explanation: "While India has a multi-party system, the USA is known for its dominant two-party system (Democrats and Republicans)."
  },
  {
    id: 38,
    question: "Which part of the Indian Constitution deals with Elections?",
    options: ["Part XIV", "Part XV", "Part XVI", "Part XVII"],
    correctAnswer: 1,
    explanation: "Part XV (Articles 324 to 329) of the Constitution deals with elections and the Election Commission."
  },
  {
    id: 39,
    question: "In which year was the first Presidential election held in India?",
    options: ["1947", "1950", "1952", "1955"],
    correctAnswer: 2,
    explanation: "The first Presidential election was held in 1952, and Dr. Rajendra Prasad was elected as the first President."
  },
  {
    id: 40,
    question: "What is the maximum expenditure limit for a Lok Sabha candidate in a large state (as of 2024)?",
    options: ["Rs. 50 Lakh", "Rs. 70 Lakh", "Rs. 95 Lakh", "Rs. 1.5 Crore"],
    correctAnswer: 2,
    explanation: "The expenditure limit for a candidate contesting Lok Sabha elections in larger states is Rs. 95 lakh."
  },
  {
    id: 41,
    question: "Who gives the recognition to a political party as a 'National Party'?",
    options: ["Parliament", "Supreme Court", "Election Commission", "President"],
    correctAnswer: 2,
    explanation: "The ECI grants recognition to political parties based on their performance in elections as per the Election Symbols Order."
  },
  {
    id: 42,
    question: "What is the main function of the 'Presiding Officer' at a polling station?",
    options: ["To lead the security force", "To supervise the entire polling process at that station", "To count the votes", "To register the candidates"],
    correctAnswer: 1,
    explanation: "The Presiding Officer is responsible for setting up the polling station and ensuring that the poll is conducted fairly and smoothly."
  },
  {
    id: 43,
    question: "How many seats are there in the Rajya Sabha (current strength)?",
    options: ["245", "250", "233", "238"],
    correctAnswer: 0,
    explanation: "The current strength of Rajya Sabha is 245, of which 233 are elected and 12 are nominated."
  },
  {
    id: 44,
    question: "Who was the CEC when the massive 'Election Reforms' of the 1990s took place?",
    options: ["Sukumar Sen", "M.S. Gill", "T.N. Seshan", "N. Gopalaswami"],
    correctAnswer: 2,
    explanation: "T.N. Seshan (10th CEC) is credited with bringing significant transparency and discipline to the Indian election process in the 1990s."
  },
  {
    id: 45,
    question: "What is the 'Booth Level Officer' (BLO)?",
    options: ["The head of the local police", "A local government/semi-government official responsible for voter lists", "The candidate's agent", "The counting officer"],
    correctAnswer: 1,
    explanation: "BLO is a representative of the ECI at the grass-root level who helps in maintaining and updating electoral rolls."
  },
  {
    id: 46,
    question: "Which of these states has the highest number of Lok Sabha seats?",
    options: ["Maharashtra", "West Bengal", "Uttar Pradesh", "Bihar"],
    correctAnswer: 2,
    explanation: "Uttar Pradesh has the highest number of Lok Sabha seats (80) due to its large population."
  },
  {
    id: 47,
    question: "What is a 'By-Election'?",
    options: ["An election held every two years", "An election held to fill a vacancy caused by death or resignation", "A local body election", "An unofficial election"],
    correctAnswer: 1,
    explanation: "A by-election (or bye-election) is held to fill a seat that has become vacant during the term of a legislature."
  },
  {
    id: 48,
    question: "The concept of 'Universal Adult Franchise' means:",
    options: ["Only educated people can vote", "Only taxpayers can vote", "Every adult citizen has the right to vote regardless of background", "Only property owners can vote"],
    correctAnswer: 2,
    explanation: "Universal Adult Franchise ensures that every citizen above the age of 18 has the right to vote without discrimination."
  },
  {
    id: 49,
    question: "What is the 'Voter Information Slip' (VIS)?",
    options: ["A document used for voting instead of ID", "A slip containing voter details like booth number and serial number", "A receipt for voting", "A political advertisement"],
    correctAnswer: 1,
    explanation: "VIS is distributed by the ECI to inform voters about their polling station, serial number, date, and time of poll."
  },
  {
    id: 50,
    question: "Which of the following is NOT a ground for disqualification as a voter?",
    options: ["Unsoundness of mind", "Non-residence", "Conviction for certain offenses", "Poverty"],
    correctAnswer: 3,
    explanation: "Economic status or poverty is not a ground for disqualifying an Indian citizen from being a voter."
  },
  {
    id: 51,
    question: "Which high court gave the landmark judgment that led to the imposition of the Emergency in 1975?",
    options: ["Delhi High Court", "Allahabad High Court", "Bombay High Court", "Calcutta High Court"],
    correctAnswer: 1,
    explanation: "The Allahabad High Court judgment (State of Uttar Pradesh v. Raj Narain) invalidated Indira Gandhi's election, which was a key factor leading to the Emergency."
  },
  {
    id: 52,
    question: "What is the maximum number of members in a State Legislative Assembly (Vidhan Sabha)?",
    options: ["400", "500", "550", "600"],
    correctAnswer: 1,
    explanation: "The Constitution limits the maximum strength of a State Legislative Assembly to 500 members."
  },
  {
    id: 53,
    question: "Who was the first President of India to be elected unopposed?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Neelam Sanjiva Reddy", "V.V. Giri"],
    correctAnswer: 2,
    explanation: "Neelam Sanjiva Reddy is the only President of India so far to have been elected unopposed (in 1977)."
  },
  {
    id: 54,
    question: "What is the term of the Vice President of India?",
    options: ["4 years", "5 years", "6 years", "Co-terminus with President"],
    correctAnswer: 1,
    explanation: "The Vice President of India is elected for a term of 5 years."
  },
  {
    id: 55,
    question: "In which year did the Election Commission become a multi-member body for the first time?",
    options: ["1989", "1990", "1993", "1950"],
    correctAnswer: 0,
    explanation: "The ECI became a three-member body for the first time in 1989, though it reverted to single-member briefly before becoming multi-member again in 1993."
  },
  {
    id: 56,
    question: "What is the symbol of the Indian National Congress (INC)?",
    options: ["Hand", "Cycle", "Clock", "Flower"],
    correctAnswer: 0,
    explanation: "The 'Hand' is the current official election symbol of the INC."
  },
  {
    id: 57,
    question: "Which article deals with the disqualification of members of either House of Parliament?",
    options: ["Article 101", "Article 102", "Article 103", "Article 104"],
    correctAnswer: 1,
    explanation: "Article 102 of the Constitution specifies the grounds for disqualification of Members of Parliament."
  },
  {
    id: 58,
    question: "Who is the ex-officio Chairman of the Rajya Sabha?",
    options: ["The President", "The Vice President", "The Speaker", "The Prime Minister"],
    correctAnswer: 1,
    explanation: "The Vice President of India serves as the ex-officio Chairman of the Rajya Sabha."
  },
  {
    id: 59,
    question: "The 'Anti-Defection Law' was added by which Constitutional Amendment?",
    options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
    correctAnswer: 2,
    explanation: "The 52nd Amendment Act of 1985 introduced the 10th Schedule, known as the Anti-Defection Law."
  },
  {
    id: 60,
    question: "How many members are there in the Election Commission of India currently?",
    options: ["1", "2", "3", "5"],
    correctAnswer: 2,
    explanation: "The ECI currently consists of one Chief Election Commissioner and two Election Commissioners."
  },
  {
    id: 61,
    question: "What is the role of an 'Observer' appointed by the ECI?",
    options: ["To vote in place of others", "To monitor the election process and report to the ECI", "To lead a political party", "To count the votes"],
    correctAnswer: 1,
    explanation: "Observers (General, Expenditure, Police, etc.) are senior officers appointed by the ECI to monitor the field-level election process."
  },
  {
    id: 62,
    question: "Which of these is a 'Statutory Body' related to elections?",
    options: ["Election Commission", "Delimitation Commission", "NITI Aayog", "Finance Commission"],
    correctAnswer: 1,
    explanation: "While ECI is a Constitutional Body, the Delimitation Commission is a Statutory Body created by an Act of Parliament."
  },
  {
    id: 63,
    question: "What is the maximum number of Lok Sabha seats a single person can contest simultaneously?",
    options: ["1", "2", "3", "No limit"],
    correctAnswer: 1,
    explanation: "Currently, as per Section 33(7) of the RPA 1951, a person can contest from a maximum of two constituencies."
  },
  {
    id: 64,
    question: "Who was the first woman President of India?",
    options: ["Indira Gandhi", "Pratibha Patil", "Droupadi Murmu", "Sarojini Naidu"],
    correctAnswer: 1,
    explanation: "Pratibha Patil was the first woman President of India, serving from 2007 to 2012."
  },
  {
    id: 65,
    question: "What is the 'Electoral College' for the Presidential election?",
    options: ["All citizens", "Elected members of Parliament and State Assemblies", "Only members of Lok Sabha", "Only State Governors"],
    correctAnswer: 1,
    explanation: "The President is elected by an electoral college consisting of elected members of both Houses of Parliament and elected members of State Legislative Assemblies."
  },
  {
    id: 66,
    question: "Which year saw the first use of VVPAT in a general election in India?",
    options: ["2009", "2014", "2019", "2024"],
    correctAnswer: 2,
    explanation: "2019 was the first General Election where VVPATs were used in all polling stations."
  },
  {
    id: 67,
    question: "What is the 'SVEEP' program of the Election Commission?",
    options: ["A cleanliness drive", "Systematic Voters' Education and Electoral Participation", "A program for security", "A software for counting"],
    correctAnswer: 1,
    explanation: "SVEEP is the flagship program of the ECI for voter education and spreading voter awareness."
  },
  {
    id: 68,
    question: "In which year was the 'National Voters' Day' first celebrated?",
    options: ["1950", "2000", "2011", "2015"],
    correctAnswer: 2,
    explanation: "National Voters' Day is celebrated on January 25th every year since 2011 to mark the foundation day of the ECI."
  },
  {
    id: 69,
    question: "What is the minimum number of seats a party must win in Lok Sabha to be recognized as a National Party?",
    options: ["2% of seats from 3 states", "5% of seats from 2 states", "10 seats", "50 seats"],
    correctAnswer: 0,
    explanation: "One of the criteria is winning at least 2% of seats in the Lok Sabha (11 seats) from at least three different states."
  },
  {
    id: 70,
    question: "Who is the custodian of the 'Consolidated Fund of India'?",
    options: ["The President", "The Finance Minister", "The Parliament", "The RBI Governor"],
    correctAnswer: 2,
    explanation: "The Parliament has the ultimate authority over the Consolidated Fund of India."
  },
  {
    id: 71,
    question: "The concept of 'Proportional Representation' is used in India for which election?",
    options: ["Lok Sabha", "State Assembly", "Presidential Election", "Panchayat Election"],
    correctAnswer: 2,
    explanation: "The President and Vice President of India are elected by the system of proportional representation by means of single transferable vote."
  },
  {
    id: 72,
    question: "What is the 'Qualifying Date' for being enrolled in the electoral roll in India?",
    options: ["Date of Election", "January 1st of the year", "Quarterly dates (Jan 1, Apr 1, Jul 1, Oct 1)", "Date of Birth"],
    correctAnswer: 2,
    explanation: "Following recent reforms, there are now four qualifying dates in a year (1st Jan, 1st April, 1st July, 1st Oct)."
  },
  {
    id: 73,
    question: "Who is the current Chief Election Commissioner of India (as of May 2024)?",
    options: ["Rajiv Kumar", "Anup Chandra Pandey", "Arun Goel", "Sushil Chandra"],
    correctAnswer: 0,
    explanation: "Rajiv Kumar is the 25th Chief Election Commissioner of India."
  },
  {
    id: 74,
    question: "What is the maximum duration for which the President's Rule can be extended?",
    options: ["6 months", "1 year", "3 years", "Indefinite"],
    correctAnswer: 2,
    explanation: "President's Rule can be extended for a maximum period of 3 years with parliamentary approval every 6 months."
  },
  {
    id: 75,
    question: "Which of the following is NOT part of the 'Panchayati Raj' system?",
    options: ["Gram Panchayat", "Panchayat Samiti", "Zila Parishad", "Town Area Committee"],
    correctAnswer: 3,
    explanation: "Town Area Committee is a type of urban local body, not part of the three-tier Panchayati Raj system."
  },
  {
    id: 76,
    question: "Who was the first woman Speaker of the Lok Sabha?",
    options: ["Meira Kumar", "Sumitra Mahajan", "Najma Heptulla", "Pratibha Patil"],
    correctAnswer: 0,
    explanation: "Meira Kumar was the first woman Speaker of the Lok Sabha, serving from 2009 to 2014."
  },
  {
    id: 77,
    question: "What is the 'Indelible Ink' primarily made of?",
    options: ["Silver Nitrate", "Silver Chloride", "Potassium Permanganate", "Iodine"],
    correctAnswer: 0,
    explanation: "Indelible ink used in Indian elections contains silver nitrate, which makes it resistant to soap and chemicals."
  },
  {
    id: 78,
    question: "Which state has the smallest Legislative Assembly in terms of seats?",
    options: ["Goa", "Sikkim", "Mizoram", "Puducherry"],
    correctAnswer: 1,
    explanation: "Sikkim has the smallest Legislative Assembly with only 32 seats (Puducherry is a UT with 30 elected seats)."
  },
  {
    id: 79,
    question: "What is the maximum number of Anglo-Indians that could be nominated to the Lok Sabha (before 2020)?",
    options: ["1", "2", "5", "10"],
    correctAnswer: 1,
    explanation: "Previously, the President could nominate 2 members from the Anglo-Indian community if they were not adequately represented."
  },
  {
    id: 80,
    question: "The 'EVM' was developed by ECI in collaboration with which two PSUs?",
    options: ["ISRO & DRDO", "BEL & ECIL", "HAL & BHEL", "GAIL & ONGC"],
    correctAnswer: 1,
    explanation: "EVMs are manufactured by Bharat Electronics Limited (BEL), Bangalore and Electronics Corporation of India Limited (ECIL), Hyderabad."
  },
  {
    id: 81,
    question: "What is the 'Lame Duck Session' of Parliament?",
    options: ["A session with no work", "The last session of an existing Lok Sabha after a new one has been elected", "A session held in emergency", "A session without the Prime Minister"],
    correctAnswer: 1,
    explanation: "Lame Duck session refers to the last session of the existing Lok Sabha after a new Lok Sabha has been elected."
  },
  {
    id: 82,
    question: "Who was the first Vice President of India?",
    options: ["Dr. Zakir Hussain", "Dr. S. Radhakrishnan", "V.V. Giri", "G.S. Pathak"],
    correctAnswer: 1,
    explanation: "Dr. Sarvepalli Radhakrishnan was the first Vice President of India (1952-1962)."
  },
  {
    id: 83,
    question: "What is the 'Adjournment Sine Die'?",
    options: ["Termination of a session", "Termination of a sitting for an indefinite period", "Postponement for a day", "Dissolution of the House"],
    correctAnswer: 1,
    explanation: "Adjournment Sine Die means terminating a sitting of Parliament for an indefinite period."
  },
  {
    id: 84,
    question: "Which city hosted the first counting of votes in independent India?",
    options: ["New Delhi", "Mumbai", "Lucknow", "Simla"],
    correctAnswer: 0,
    explanation: "The counting for the first general elections began in 1952 across various centers, with New Delhi being a primary hub."
  },
  {
    id: 85,
    question: "What is a 'Starred Question' in Parliament?",
    options: ["A question that requires a written answer", "A question that requires an oral answer", "A question for the President", "A question about celebrities"],
    correctAnswer: 1,
    explanation: "A Starred Question is one to which a member desires an oral answer in the House and is distinguished by an asterisk."
  },
  {
    id: 86,
    question: "Who is the 'Guardian of the Constitution' of India?",
    options: ["The President", "The Parliament", "The Supreme Court", "The Prime Minister"],
    correctAnswer: 2,
    explanation: "The Supreme Court of India is considered the guardian and interpreter of the Constitution."
  },
  {
    id: 87,
    question: "How many High Courts are there in India currently (2024)?",
    options: ["21", "24", "25", "28"],
    correctAnswer: 2,
    explanation: "There are currently 25 High Courts in India, with the Andhra Pradesh High Court being the latest one."
  },
  {
    id: 88,
    question: "What is the 'Zero Hour' in Indian Parliamentary proceedings?",
    options: ["The hour before the session starts", "The time immediately following the Question Hour", "The last hour of the day", "Midnight session"],
    correctAnswer: 1,
    explanation: "Zero Hour is an Indian parliamentary innovation where members can raise matters without prior notice."
  },
  {
    id: 89,
    question: "Who was the first woman to become a Governor of an Indian state?",
    options: ["Sarojini Naidu", "Sucheta Kripalani", "Vijayalakshmi Pandit", "Padmaja Naidu"],
    correctAnswer: 0,
    explanation: "Sarojini Naidu was the first woman Governor, serving in the United Provinces (now Uttar Pradesh)."
  },
  {
    id: 90,
    question: "Which of the following is NOT a Fundamental Duty under the Indian Constitution?",
    options: ["To safeguard public property", "To protect the environment", "To vote in elections", "To abide by the Constitution"],
    correctAnswer: 2,
    explanation: "Voting in elections is a legal/constitutional right/duty, but it is not listed under the Fundamental Duties (Article 51A)."
  },
  {
    id: 91,
    question: "What is the maximum age for a judge of the Supreme Court of India?",
    options: ["60 years", "62 years", "65 years", "70 years"],
    correctAnswer: 2,
    explanation: "Supreme Court judges retire at the age of 65 years."
  },
  {
    id: 92,
    question: "Who was the first Dalit President of India?",
    options: ["K.R. Narayanan", "Ram Nath Kovind", "Zakir Hussain", "Fakhruddin Ali Ahmed"],
    correctAnswer: 0,
    explanation: "K.R. Narayanan was the first person from the Dalit community to be elected as the President of India (1997-2002)."
  },
  {
    id: 93,
    question: "The 'States Reorganisation Act' was passed in which year?",
    options: ["1950", "1953", "1956", "1960"],
    correctAnswer: 2,
    explanation: "The States Reorganisation Act, 1956, was a major reform of the boundaries of India's states and territories."
  },
  {
    id: 94,
    question: "What is the 'Pocket Veto' of the President?",
    options: ["Returning the bill for reconsideration", "Keeping the bill pending for an indefinite period", "Rejecting the bill immediately", "Sending the bill to the Supreme Court"],
    correctAnswer: 1,
    explanation: "Pocket Veto allows the President to neither ratify nor reject nor return the bill, but simply keep it pending indefinitely."
  },
  {
    id: 95,
    question: "Who was the first Indian to become a member of the British Parliament?",
    options: ["Dadabhai Naoroji", "W.C. Bonnerjee", "B.R. Ambedkar", "Motilal Nehru"],
    correctAnswer: 0,
    explanation: "Dadabhai Naoroji, known as the 'Grand Old Man of India', was elected to the British House of Commons in 1892."
  },
  {
    id: 96,
    question: "Which article of the Constitution deals with the 'Amendment' process?",
    options: ["Article 352", "Article 356", "Article 360", "Article 368"],
    correctAnswer: 3,
    explanation: "Article 368 gives the Parliament the power to amend the Constitution and defines the procedure."
  },
  {
    id: 97,
    question: "How many languages are listed in the 8th Schedule of the Indian Constitution?",
    options: ["14", "18", "22", "25"],
    correctAnswer: 2,
    explanation: "Currently, there are 22 languages recognized in the 8th Schedule of the Constitution."
  },
  {
    id: 98,
    question: "The 'Preamble' of the Indian Constitution was amended by which act?",
    options: ["24th Amendment", "42nd Amendment", "44th Amendment", "None"],
    correctAnswer: 1,
    explanation: "The Preamble has been amended only once, by the 42nd Amendment Act of 1976, adding 'Socialist', 'Secular', and 'Integrity'."
  },
  {
    id: 99,
    question: "Who was the Chairman of the Drafting Committee of the Constitution?",
    options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
    correctAnswer: 2,
    explanation: "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee and is known as the Architect of the Indian Constitution."
  },
  {
    id: 100,
    question: "In which city was the Indian National Congress founded in 1885?",
    options: ["Calcutta", "Madras", "Bombay", "Surat"],
    correctAnswer: 2,
    explanation: "The first session of the INC was held in Bombay (now Mumbai) in December 1885."
  }
];

export const votingSteps = [
  {
    step: 1,
    title: "Check Name in Voter List",
    description: "Ensure your name is registered in the Electoral Roll (Voter List) of your constituency.",
    tips: ["Use the Electoral Search tool on the ECI website", "Check via the Voter Helpline App", "Call the 1950 helpline"]
  },
  {
    step: 2,
    title: "Find Your Polling Booth",
    description: "Identify the exact location where you need to go to cast your vote.",
    tips: ["Check your Voter Information Slip", "Search online using your EPIC number", "Booth details are usually near your residence"]
  },
  {
    step: 3,
    title: "Carry Required ID",
    description: "Bring a valid photo identification document to the polling booth.",
    tips: ["EPIC (Voter ID card) is primary", "Aadhaar, PAN, Passport, or Driving License are valid alternatives", "Voter slip alone is not accepted as ID"]
  },
  {
    step: 4,
    title: "Verification at Booth",
    description: "Polling officials will verify your identity and mark your finger with indelible ink.",
    tips: ["First official checks your name and ID", "Second official inks your finger, gives a slip, and takes your signature", "Third official takes the slip and allows you to vote"]
  },
  {
    step: 5,
    title: "Use the EVM",
    description: "Cast your vote using the Electronic Voting Machine inside the voting compartment.",
    tips: ["Press the blue button against your chosen candidate", "A red light will glow next to the symbol", "You will hear a long beep sound confirming your vote"]
  },
  {
    step: 6,
    title: "Verify with VVPAT",
    description: "Check the printed paper slip to ensure your vote went to the correct candidate.",
    tips: ["The slip is visible through the glass for 7 seconds", "It shows the serial number, name, and symbol of the candidate", "The slip automatically drops into the sealed box"]
  }
];

export const keyDates = [
  { event: "Model Code of Conduct Enforced", timing: "Immediately upon election schedule announcement", icon: "flag" },
  { event: "Last Date for Filing Nominations", timing: "Typically 7-10 days after election notification", icon: "building" },
  { event: "Scrutiny of Nominations", timing: "Day after the last date for filing", icon: "search" },
  { event: "Last Date for Withdrawal", timing: "Usually 2 days after scrutiny", icon: "clipboard-check" },
  { event: "Campaigning Ends", timing: "48 hours prior to the close of polls", icon: "megaphone" },
  { event: "Polling Day", timing: "Specific to phase/constituency (typically multiple phases)", icon: "vote" },
  { event: "Counting of Votes", timing: "A few days after the final phase of polling", icon: "calendar-check" },
  { event: "Formation of New Government", timing: "Following the declaration of final results", icon: "landmark" }
];

export const resources = [
  {
    title: "Election Commission of India",
    description: "The primary authority for conducting and supervising elections in India. Find schedules, rules, and official announcements.",
    url: "https://eci.gov.in/",
    type: "Official Government"
  },
  {
    title: "Voters' Service Portal (NVSP)",
    description: "The central hub for all voter-related services, including registration, status tracking, and downloading e-EPIC.",
    url: "https://voters.eci.gov.in/",
    type: "Official Government"
  },
  {
    title: "Know Your Candidate (KYC)",
    description: "Official portal to check criminal antecedents, assets, and liabilities of candidates contesting in elections.",
    url: "https://kyc.eci.gov.in/",
    type: "Official Government"
  },
  {
    title: "National Grievance Service",
    description: "File and track complaints related to electoral services, voter registration, and election-related issues.",
    url: "https://ngsp.eci.gov.in/",
    type: "Official Government"
  },
  {
    title: "PRS Legislative Research",
    description: "Detailed analysis of legislative processes, candidate performance, and parliamentary data in India.",
    url: "https://prsindia.org/",
    type: "Educational Resource"
  },
  {
    title: "Association for Democratic Reforms",
    description: "Non-partisan organization providing data on candidates' background to improve electoral transparency.",
    url: "https://adrindia.org/",
    type: "Non-Partisan Organization"
  }
];

export const checklistData = [
  {
    category: "Before Election Day",
    items: [
      "Verify your name in the Electoral Roll",
      "Locate your designated Polling Station",
      "Check for your Voter Information Slip",
      "Ensure you have an EPIC (Voter ID) or alternative valid ID",
      "Research the candidates in your constituency"
    ]
  },
  {
    category: "On Election Day",
    items: [
      "Carry your Voter ID or valid alternative ID",
      "Arrive at the polling station during voting hours",
      "Follow the queue and verify identity with officials",
      "Check the EVM and VVPAT display after voting",
      "Ensure the indelible ink is applied correctly"
    ]
  },
  {
    category: "Post-Election",
    items: [
      "Wait for the official results announcement",
      "Monitor news from verified sources only",
      "Report any electoral malpractices if witnessed",
      "Engage in post-election democratic processes"
    ]
  }
];
