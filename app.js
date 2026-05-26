// Student Leadership Toolkit interactive workspace.
// Edit defaultToolkitData to change default content. User changes are saved in localStorage.

const STORAGE_KEY = "studentLeadershipWorkspaceState.v1";

const resourceCategories = [
  "All",
  "Favorites",
  "Planning",
  "Event Management",
  "Communication",
  "Team Management",
  "Reflection",
  "Interview Prep",
  "Feedback",
  "Impact Tracking",
  "Project Management"
];

const defaultToolkitData = {
  siteTitle: "Student Leadership Toolkit",
  siteSubtitle:
    "Practical tools for planning initiatives, organizing teams, communicating ideas, and reflecting on impact.",
  heroDescription:
    "A modular workspace for students who want to turn ideas into organized action. Use it to plan projects, prepare proposals, manage teams, communicate with stakeholders, and document meaningful impact in any school community.",
  overviewText:
    "This toolkit supports student leaders across different school systems and roles. It can be used by middle school and high school students, student councils, clubs, peer mentors, event teams, service-learning groups, residential leaders, campaign organizers, and students preparing for leadership applications. The goal is to help students move from a broad idea to a clear plan, communicate with the right people, organize responsibilities, gather feedback, and reflect on outcomes.",
  adaptabilityNote:
    "This toolkit is designed to be adaptable. Replace the examples with your own school's terminology, leadership roles, event names, and approval process.",
  contextIntro:
    "Choose terminology that fits your school. These settings are saved locally and used where possible in generated outputs.",
  audiences: [
    "Student council members",
    "Club leaders",
    "Event organizers",
    "Peer mentors",
    "House, dormitory, or residential leaders",
    "Service-learning and volunteering project organizers",
    "Campaign and awareness project teams",
    "Students preparing for leadership interviews or applications",
    "Students building a leadership portfolio"
  ],
  leadershipFramework: [
    {
      title: "Identify the Need",
      description:
        "Strong student leadership begins with noticing a real problem, gap, or opportunity that affects a group of people.",
      questions: [
        "Who is affected?",
        "What is unclear, missing, difficult, or underused?",
        "Is this a real need or only an assumption?",
        "What evidence or feedback supports the idea?"
      ]
    },
    {
      title: "Design the Action",
      description:
        "Turn a broad idea into a practical plan that fits the time, people, rules, and resources available.",
      questions: [
        "What is the goal?",
        "What resources are needed?",
        "Who needs to give feedback or approval?",
        "What can realistically be completed within the timeline?"
      ]
    },
    {
      title: "Communicate the Vision",
      description:
        "Help different audiences understand what the initiative is, why it matters, and how they can participate or support it.",
      questions: [
        "How can the idea be explained simply?",
        "Why should people care?",
        "What message works for each audience?",
        "What tone fits the situation?"
      ]
    },
    {
      title: "Mobilize People",
      description:
        "Bring others into the process by assigning clear roles, sharing responsibility, and making participation manageable.",
      questions: [
        "Who can help?",
        "What roles are needed?",
        "How can tasks be distributed fairly?",
        "How can motivation and accountability be maintained?"
      ]
    },
    {
      title: "Execute and Adapt",
      description:
        "Carry out the plan while paying attention to feedback, obstacles, participation, and schedule changes.",
      questions: [
        "What is working?",
        "What is not working?",
        "What feedback has been received?",
        "What should be changed before the next step?"
      ]
    },
    {
      title: "Reflect and Show Impact",
      description:
        "Explain what changed, what evidence supports the result, and what leadership growth happened through the process.",
      questions: [
        "What impact was created?",
        "What evidence shows this impact?",
        "What leadership skills improved?",
        "What would be done differently next time?"
      ]
    }
  ],
  toolkitModules: [
    {
      title: "Initiative Planner",
      purpose: "Turn an idea into a structured project or proposal.",
      items: ["Problem", "Audience", "Goal", "Timeline", "Resources", "Stakeholders", "Risks"]
    },
    {
      title: "Event Planning Checklist",
      purpose: "Track planning for events, campaigns, meetings, and activities.",
      items: ["Purpose", "Approval", "Materials", "Promotion", "Team", "After-event reflection"]
    },
    {
      title: "Communication Toolkit",
      purpose: "Generate messages for different audiences and channels.",
      items: ["Announcement", "Staff email", "Briefing", "Caption", "Poster text"]
    },
    {
      title: "Team Management Guide",
      purpose: "Organize roles, meetings, follow-up, and accountability.",
      items: ["Roles", "Agenda", "Task tracking", "Conflict response", "Next actions"]
    },
    {
      title: "Reflection and Impact Tracker",
      purpose: "Document growth, outcomes, evidence, and next steps.",
      items: ["Actions", "Evidence", "Feedback", "Skills", "Future improvement"]
    },
    {
      title: "Leadership Interview and Application Prep",
      purpose: "Prepare grounded examples for leadership applications or interviews.",
      items: ["Motivation", "Experience", "Vision", "Scenario responses", "Growth"]
    },
    {
      title: "Feedback and Survey Builder",
      purpose: "Collect useful feedback before, during, or after a project.",
      items: ["Needs assessment", "Event feedback", "Communication check", "Team reflection"]
    },
    {
      title: "Project Dashboard",
      purpose: "Track multiple projects, deadlines, statuses, and next actions.",
      items: ["Status", "Deadline", "Goal", "Next action", "Notes"]
    }
  ],
  resources: [
    {
      id: "student-initiative-proposal",
      title: "Student Initiative Proposal Template",
      category: "Planning",
      description: "A structured template for turning a school idea into a clear proposal.",
      recommendedUse:
        "Before presenting an initiative to an adult advisor, student group, committee, or administrator.",
      buttonText: "Open Template",
      content: `# Student Initiative Proposal Template

## 1. Initiative Title

Write a clear title that explains the idea.

Optional scenarios:
- Flexible volunteering opportunity list
- Fundraising or awareness campaign communication plan
- New student welcome activity
- Club recruitment week plan

---

## 2. One-Sentence Summary

This initiative aims to [action] for [target group] by [method], so that [intended impact].

---

## 3. Problem or Need

- What problem, gap, or opportunity does this respond to?
- Who is affected?
- What evidence or feedback supports the need?

Example:
Some students want to participate in opportunities but struggle with timing, transportation, access, or unclear information.

---

## 4. Target Audience and Stakeholders

Primary audience:
[Write here]

Stakeholders:
- Students
- Adult advisor
- Student group or committee
- Families or external partners if relevant

---

## 5. Action Plan

- Research the current situation
- Design the activity or resource
- Get feedback or approval
- Communicate the plan
- Launch the initiative
- Collect evidence and reflect`
    },
    {
      id: "event-planning-checklist",
      title: "Event Planning Checklist",
      category: "Event Management",
      description: "A checklist for organizing student-led events from approval to reflection.",
      recommendedUse: "For club events, school activities, fundraisers, campaigns, and service projects.",
      buttonText: "Open Checklist",
      content: `# Event Planning Checklist

## Event Basics
- Event name
- Purpose
- Target audience
- Date and time
- Venue or format
- Lead organizer

## Approval
- Adult advisor contacted
- Required approval requested
- Room or venue booked
- Budget confirmed
- Safety or supervision needs checked

## Materials
- Materials list created
- Supplies prepared
- Technology checked
- Attendance method prepared
- Feedback form prepared

## Communication
- Announcement written
- Poster or digital graphic prepared
- Sign-up form created
- Reminder sent
- Stakeholders briefed

## After Event
- Attendance recorded
- Feedback collected
- Evidence saved
- Reflection completed`
    },
    {
      id: "leadership-reflection-sheet",
      title: "Leadership Reflection Sheet",
      category: "Reflection",
      description: "A guided reflection form for documenting leadership growth and impact.",
      recommendedUse:
        "For service-learning reflections, leadership portfolios, applications, or personal development records.",
      buttonText: "Open Sheet",
      content: `# Leadership Reflection Sheet

## What Happened?
- What did you do?
- Who was involved?
- What role did you play?
- What goal were you working toward?

## Impact
- Who was affected?
- What changed?
- What evidence supports this?
- What feedback did you receive?

## Growth
- What skill did you develop?
- What challenge did you face?
- How did you respond?
- What would you improve next time?`
    },
    {
      id: "pitch-template",
      title: "30-Second Pitch Template",
      category: "Communication",
      description: "A short structure for explaining an idea clearly and persuasively.",
      recommendedUse: "For assemblies, interviews, club recruitment, proposals, or campaign launches.",
      buttonText: "Open Template",
      content: `# 30-Second Pitch Template

## Structure

I noticed that [problem]. This affects [group] because [reason]. My idea is to [action]. It would work by [simple process]. The main resources needed are [resources]. If successful, it would [impact].

## Tips
- Keep the problem specific.
- Avoid exaggerated claims.
- Make the next step clear.
- Adapt the tone for the audience.`
    },
    {
      id: "team-role-matrix",
      title: "Team Role Assignment Matrix",
      category: "Team Management",
      description: "A simple tool for dividing responsibilities within a student team.",
      recommendedUse: "For councils, clubs, project groups, event teams, service groups, and campaigns.",
      buttonText: "Open Matrix",
      content: `# Team Role Assignment Matrix

## Roles
- Project lead
- Communication lead
- Logistics lead
- Materials lead
- Volunteer coordinator
- Documentation lead
- Reflection lead

## Task Table
- Task:
- Owner:
- Support person:
- Deadline:
- Status:
- Evidence of completion:

## Accountability Norms
- Confirm roles before work begins.
- Write down deadlines.
- Ask for help early.
- Check progress without taking over every task.`
    },
    {
      id: "interview-question-bank",
      title: "Leadership Interview Question Bank",
      category: "Interview Prep",
      description: "Common and scenario-based leadership interview questions.",
      recommendedUse:
        "For student council, club leadership, peer mentor, residential leader, or other student leadership roles.",
      buttonText: "Open Questions",
      content: `# Leadership Interview Question Bank

## Motivation
- Why do you want this leadership role?
- What does leadership mean to you?
- What would you bring to the team?

## Experience
- Describe a time you took initiative.
- Describe a time you worked with a difficult team.
- What did you learn from a leadership mistake?

## Scenarios
- A team member stops completing tasks. What do you do?
- An event has low participation. How do you respond?
- A staff member says your proposal is too ambitious. What is your next step?`
    },
    {
      id: "survey-question-bank",
      title: "Feedback Survey Question Bank",
      category: "Feedback",
      description: "Adaptable questions for gathering student or stakeholder feedback.",
      recommendedUse: "Before launching a project, after an event, or when improving communication.",
      buttonText: "Open Questions",
      content: `# Feedback Survey Question Bank

## Event Feedback
- What part of the event was most useful or meaningful?
- What could be improved next time?
- Did the event achieve its purpose?
- How likely are you to attend a similar event again?
- Any additional comments?

## Needs Assessment
- What issue in the school community needs more attention?
- Who is most affected by this issue?
- What support or resource would be most helpful?
- What prevents students from participating or speaking up?
- What is one realistic improvement you would suggest?`
    },
    {
      id: "impact-evidence-tracker",
      title: "Impact Evidence Tracker",
      category: "Impact Tracking",
      description: "A practical tracker for recording evidence of outcomes and learning.",
      recommendedUse: "For portfolios, reports, reflections, applications, and project summaries.",
      buttonText: "Open Tracker",
      content: `# Impact Evidence Tracker

## Evidence Log
- Project or event:
- Date:
- Evidence type:
- Quantitative evidence:
- Qualitative evidence:
- Feedback received:
- People or groups affected:
- What changed:
- Reflection note:

## Summary Sentence
This project affected [group] by [change]. The strongest evidence is [evidence]. A leadership insight from this work is [reflection].`
    },
    {
      id: "meeting-agenda-template",
      title: "Meeting Agenda Template",
      category: "Team Management",
      description: "A reusable agenda for focused student leadership meetings.",
      recommendedUse: "For club meetings, project check-ins, council sessions, and event planning teams.",
      buttonText: "Open Agenda",
      content: `# Meeting Agenda Template

## Meeting Details
- Team:
- Date:
- Facilitator:
- Note-taker:
- Main goal:

## Agenda
- Quick check-in
- Review previous actions
- Discuss current priorities
- Identify blockers
- Make decisions
- Assign next steps
- Confirm deadlines`
    },
    {
      id: "project-status-tracker",
      title: "Project Status Tracker",
      category: "Project Management",
      description: "A simple dashboard for tracking project progress and next actions.",
      recommendedUse: "For ongoing initiatives, events, campaigns, service projects, and team projects.",
      buttonText: "Open Tracker",
      content: `# Project Status Tracker

## Project Snapshot
- Project name:
- Current status:
- Lead organizer:
- Next deadline:
- Main audience:

## Current Priorities
- Priority 1:
- Priority 2:
- Priority 3:

## Risks and Blockers
- What is slowing the project down?
- Who can help?
- What decision is needed?
- What is the next smallest action?`
    }
  ],
  caseStudies: [
    {
      id: "fundraising-campaign",
      title: "Improving Participation in a Fundraising Campaign",
      context: "Campaign team",
      problem: "Participation is lower than expected because students do not understand the purpose or next step.",
      action: "The team rewrites the message, simplifies participation, and shares final results afterward.",
      stakeholders: "Students, adult advisor, finance or activity coordinator, campaign team",
      toolsUsed: "Pitch Builder, Communication Generator, Impact Log",
      evidence: "Participation count, funds raised, student comments, final update message",
      reflectionQuestion: "How did clearer communication change participation?",
      transferIdea: "Use the same approach for awareness campaigns, club drives, or service activities."
    },
    {
      id: "accessible-opportunities",
      title: "Making Opportunities More Accessible",
      context: "Service-learning or volunteering",
      problem: "Students want to participate but information is scattered or hard to compare.",
      action: "A leader creates a list organized by time, location, commitment level, and accessibility.",
      stakeholders: "Students, adult advisor, community partners, student volunteers",
      toolsUsed: "Proposal Builder, Project Dashboard, Feedback Survey Question Bank",
      evidence: "Views, sign-ups, feedback, number of opportunities listed",
      reflectionQuestion: "Which access barrier was most important to address first?",
      transferIdea: "Adapt the list for clubs, academic support, peer mentoring, or community projects."
    },
    {
      id: "club-recruitment",
      title: "Launching a Club Recruitment Campaign",
      context: "Club leadership",
      problem: "Potential members do not know what the club does or how to join.",
      action: "The club creates a short pitch, poster, sign-up form, and first-meeting plan.",
      stakeholders: "Club leaders, potential members, adult advisor",
      toolsUsed: "Pitch Builder, Communication Generator, Meeting Agenda Template",
      evidence: "Sign-ups, attendance, first-meeting feedback",
      reflectionQuestion: "What message made participation feel easiest?",
      transferIdea: "Use for teams, committees, student groups, or peer mentoring programs."
    },
    {
      id: "awareness-event",
      title: "Organizing a Student-Led Awareness Event",
      context: "Event or campaign team",
      problem: "Students need a clearer way to learn about and discuss a topic.",
      action: "A team plans an event, invites participation, assigns roles, and collects feedback afterward.",
      stakeholders: "Students, adult advisor, event team, relevant school groups",
      toolsUsed: "Event Checklist, Communication Generator, Feedback Survey Question Bank",
      evidence: "Attendance, feedback, questions asked, resources distributed",
      reflectionQuestion: "How did the team keep the event useful and realistic?",
      transferIdea: "Use for assemblies, workshops, lunch events, club sessions, or campaigns."
    },
    {
      id: "student-communication",
      title: "Improving Student Communication",
      context: "Council, club, or project group",
      problem: "Announcements are being missed or misunderstood.",
      action: "A student group creates a clearer communication plan using multiple channels.",
      stakeholders: "Students, adult advisor, communications team, club leaders",
      toolsUsed: "Communication Generator, Feedback Survey Question Bank, Impact Log",
      evidence: "Message views, survey responses, attendance changes, student comments",
      reflectionQuestion: "Which channel reached students most reliably?",
      transferIdea: "Apply to event reminders, recruitment, deadlines, and project updates."
    },
    {
      id: "leadership-application",
      title: "Preparing for a Leadership Application",
      context: "Leadership role preparation",
      problem: "A student has experiences but has not organized clear examples or evidence.",
      action: "The student uses builders to prepare examples, reflection, and a realistic role vision.",
      stakeholders: "Applicant, adult advisor, interview panel or selection team",
      toolsUsed: "Reflection Builder, Impact Evidence Tracker, Interview Question Bank",
      evidence: "Specific examples, reflection notes, portfolio evidence",
      reflectionQuestion: "Which example best shows growth rather than only achievement?",
      transferIdea: "Use for interviews, portfolios, scholarships, or leadership transitions."
    },
    {
      id: "team-project",
      title: "Managing a Team Project",
      context: "Project team",
      problem: "Tasks are unclear and one student is doing too much work.",
      action: "The team assigns roles, tracks deadlines, and reviews blockers each meeting.",
      stakeholders: "Team members, adult advisor, project audience",
      toolsUsed: "Team Role Assignment Matrix, Project Dashboard, Meeting Agenda Template",
      evidence: "Completed tasks, meeting notes, shared deadlines",
      reflectionQuestion: "How did clearer roles affect accountability?",
      transferIdea: "Use for clubs, service projects, events, campaigns, and class leadership tasks."
    },
    {
      id: "feedback-loop",
      title: "Creating a Feedback Loop",
      context: "Any student leadership group",
      problem: "A group makes plans without enough input from the people affected.",
      action: "The group asks short questions, summarizes responses, and changes the plan based on feedback.",
      stakeholders: "Students affected, leadership team, adult advisor",
      toolsUsed: "Feedback Survey Question Bank, Proposal Builder, Impact Log",
      evidence: "Survey summary, changes made, comments after the change",
      reflectionQuestion: "What assumption changed after feedback?",
      transferIdea: "Use before launching events, policy proposals, campaigns, or club changes."
    }
  ],
  actionSteps: [
    "Notice a need",
    "Define the problem",
    "Identify the audience and stakeholders",
    "Collect basic evidence",
    "Design a realistic action",
    "Get feedback or approval",
    "Communicate the plan",
    "Mobilize a team",
    "Execute the initiative",
    "Record evidence and reflect",
    "Improve or scale the project"
  ],
  surveyQuestionBank: [
    {
      category: "Event feedback",
      questions: [
        "What part of the event was most useful or meaningful?",
        "What could be improved next time?",
        "Did the event achieve its purpose?",
        "How likely are you to attend a similar event again?",
        "Any additional comments?"
      ]
    },
    {
      category: "Student needs assessment",
      questions: [
        "What issue in the school community do you think needs more attention?",
        "Who is most affected by this issue?",
        "What support or resource would be most helpful?",
        "What prevents students from participating or speaking up?",
        "What is one realistic improvement you would suggest?"
      ]
    },
    {
      category: "Club recruitment",
      questions: [
        "What would make you interested in joining this group?",
        "What meeting time or format works best?",
        "What activities would you expect from the club?",
        "What information do you need before joining?",
        "How did you hear about this opportunity?"
      ]
    },
    {
      category: "Communication effectiveness",
      questions: [
        "Where do you usually notice school announcements?",
        "What information was unclear?",
        "What channel should be used for reminders?",
        "Was the call to action easy to understand?",
        "What would make future communication clearer?"
      ]
    },
    {
      category: "Leadership team reflection",
      questions: [
        "Were roles clear?",
        "What helped the team work well?",
        "Where did communication break down?",
        "What should the team do differently next time?",
        "What support would help the team improve?"
      ]
    },
    {
      category: "Service project feedback",
      questions: [
        "Was the purpose of the project clear?",
        "Was participation accessible?",
        "What impact did you notice?",
        "What should be improved before repeating the project?",
        "Would you participate again?"
      ]
    }
  ]
};

const defaultContextSettings = {
  schoolType: "international school",
  leadershipContext: "council",
  preferredAdultTerm: "teacher advisor",
  outputPurpose: "proposal",
  studentTerm: "students",
  options: {
    schoolType: ["day school", "boarding school", "public school", "private school", "international school", "other"],
    leadershipContext: ["council", "club", "service project", "event planning", "peer mentorship", "residential life", "campaign", "other"],
    preferredAdultTerm: ["teacher advisor", "staff mentor", "supervisor", "coordinator", "faculty sponsor", "other"],
    outputPurpose: ["proposal", "event plan", "reflection", "interview prep", "portfolio", "general toolkit"],
    studentTerm: ["students", "members", "participants", "volunteers", "peers", "other"]
  }
};

const defaultChecklist = [
  ["Event Basics", ["Event name confirmed", "Date and time confirmed", "Location confirmed", "Target audience defined", "Purpose written"]],
  ["Approval", ["Advisor or supervisor contacted", "Required approval requested", "Room or venue booked", "Budget confirmed", "Safety or supervision needs checked"]],
  ["Materials", ["Materials list created", "Supplies prepared", "Technology checked", "Sign-in or attendance method prepared", "Feedback form prepared"]],
  ["Communication", ["Announcement written", "Poster or digital graphic prepared", "Sign-up form created", "Reminder sent", "Stakeholders briefed"]],
  ["Team", ["Roles assigned", "Volunteers confirmed", "Setup team confirmed", "Cleanup team confirmed", "Backup plan assigned"]],
  ["After Event", ["Attendance recorded", "Feedback collected", "Volunteers thanked", "Evidence saved", "Reflection completed"]]
].flatMap(([category, items]) =>
  items.map((label) => ({ id: makeId(`${category}-${label}`), category, label, done: false, custom: false }))
);

const proposalFields = [
  ["initiativeTitle", "Initiative title"],
  ["summary", "One-sentence summary"],
  ["problem", "Problem or need"],
  ["evidence", "Evidence of need"],
  ["audience", "Target audience"],
  ["stakeholders", "Stakeholders"],
  ["goal", "Goal"],
  ["matters", "Why it matters"],
  ["actions", "Proposed action steps"],
  ["timeline", "Timeline"],
  ["resources", "Resources needed"],
  ["approval", "Approval needed"],
  ["risks", "Risks and challenges"],
  ["success", "Success indicators"],
  ["reflection", "Reflection plan"],
  ["nextStep", "Next step"]
];

const pitchFields = [
  ["problem", "Problem noticed"],
  ["audience", "Affected audience"],
  ["action", "Proposed action"],
  ["matters", "Why it matters"],
  ["works", "How it works"],
  ["request", "Next step or request"]
];

const reflectionFields = [
  ["experience", "Leadership experience"],
  ["role", "Role"],
  ["context", "Context"],
  ["motivation", "Initial motivation"],
  ["actions", "Specific actions taken"],
  ["challenge", "Challenge faced"],
  ["response", "How the challenge was handled"],
  ["evidence", "Evidence of impact"],
  ["feedback", "Feedback received"],
  ["skill", "Skill developed"],
  ["learned", "What was learned"],
  ["improve", "What would be improved next time"]
];

const communicationFields = [
  ["name", "Initiative or event name"],
  ["purpose", "Main purpose"],
  ["audience", "Target audience"],
  ["details", "Key details"],
  ["callToAction", "Call to action"]
];

const projectFields = [
  ["title", "Project title"],
  ["category", "Project category"],
  ["deadline", "Deadline"],
  ["goal", "Short goal"],
  ["nextAction", "Next action"],
  ["notes", "Notes"]
];

const impactFields = [
  ["project", "Project or event name"],
  ["date", "Date"],
  ["quantitative", "Quantitative evidence"],
  ["qualitative", "Qualitative evidence"],
  ["feedback", "Feedback received"],
  ["groups", "People or groups affected"],
  ["changed", "What changed"],
  ["reflection", "Reflection note"]
];

let appState = createDefaultState();
let activeResourceId = null;
let activeCaseId = null;
let editingProjectId = null;
let editingImpactId = null;

const $ = (selector) => document.querySelector(selector);

const els = {};

function makeId(text = "id") {
  return `${String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createDefaultState() {
  return {
    toolkitData: deepClone(defaultToolkitData),
    favorites: [],
    recentlyOpened: [],
    projects: [],
    impactLog: [],
    drafts: {
      proposal: {},
      proposalOutput: "",
      pitch: {},
      pitchOutput: "",
      reflection: {},
      reflectionOutput: "",
      communication: {},
      communicationOutput: ""
    },
    eventChecklist: deepClone(defaultChecklist),
    contextSettings: deepClone(defaultContextSettings),
    resourceSearch: "",
    resourceFilter: "All",
    projectStatusFilter: "All"
  };
}

function initElements() {
  [
    "navBrand",
    "navLinks",
    "siteTitle",
    "siteSubtitle",
    "heroDescription",
    "moduleCount",
    "resourceCount",
    "savedStatus",
    "adminPanel",
    "editModeToggle",
    "titleInput",
    "subtitleInput",
    "siteTextForm",
    "resourceSelect",
    "resourceTitle",
    "resourceCategory",
    "resourceDescription",
    "resourceUse",
    "resourceButton",
    "resourceContent",
    "saveResourceChanges",
    "addResourceButton",
    "deleteResourceButton",
    "exportJson",
    "importJson",
    "exportProposal",
    "exportPitch",
    "exportReflection",
    "exportProjects",
    "exportImpact",
    "exportImpactInline",
    "exportSelectedResource",
    "resetToolkit",
    "overviewText",
    "adaptabilityNote",
    "audienceList",
    "contextIntro",
    "contextForm",
    "schoolType",
    "leadershipContext",
    "preferredAdultTerm",
    "outputPurpose",
    "studentTerm",
    "frameworkGrid",
    "moduleList",
    "resourceSearch",
    "resourceFilter",
    "recentlyOpenedList",
    "resourceEmpty",
    "resourcesGrid",
    "proposalForm",
    "generateProposal",
    "copyProposal",
    "downloadProposal",
    "saveProposal",
    "clearProposal",
    "proposalPreview",
    "pitchForm",
    "pitchAudience",
    "copyPitch",
    "downloadPitch",
    "savePitch",
    "pitchPreview",
    "reflectionForm",
    "copyReflection",
    "downloadReflection",
    "saveReflection",
    "clearReflection",
    "reflectionPreview",
    "eventChecklistGrid",
    "checklistProgressBar",
    "checklistProgress",
    "customChecklistForm",
    "customChecklistCategory",
    "customChecklistItem",
    "resetChecklist",
    "projectForm",
    "projectStatusFilter",
    "sortProjects",
    "projectGrid",
    "impactForm",
    "generateImpactSummary",
    "impactSummary",
    "impactGrid",
    "communicationForm",
    "generateMessage",
    "copyMessage",
    "downloadMessage",
    "messagePreview",
    "surveyQuestionGrid",
    "caseStudyGrid",
    "actionTimeline",
    "resourceModal",
    "modalCategory",
    "modalTitle",
    "modalRecommendedUse",
    "modalClose",
    "modalContent",
    "copyTemplate",
    "downloadTemplate",
    "caseModal",
    "caseModalTitle",
    "caseModalClose",
    "caseModalContent"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
  els.navToggle = document.querySelector(".nav-toggle");
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    appState = {
      ...createDefaultState(),
      ...saved,
      toolkitData: {
        ...deepClone(defaultToolkitData),
        ...(saved.toolkitData || {})
      },
      drafts: {
        ...createDefaultState().drafts,
        ...(saved.drafts || {})
      },
      contextSettings: {
        ...deepClone(defaultContextSettings),
        ...(saved.contextSettings || {}),
        options: defaultContextSettings.options
      },
      eventChecklist: saved.eventChecklist || deepClone(defaultChecklist)
    };
    appState.toolkitData.resources = ensureResourceIds(appState.toolkitData.resources || []);
  } catch (error) {
    console.warn("Saved state could not be loaded.", error);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  if (els.savedStatus) els.savedStatus.textContent = "Saved";
}

function saveStateSoon() {
  if (els.savedStatus) els.savedStatus.textContent = "Saving";
  window.clearTimeout(saveStateSoon.timer);
  saveStateSoon.timer = window.setTimeout(saveState, 250);
}

function ensureResourceIds(resources) {
  return resources.map((resource) => ({
    id: resource.id || makeId(resource.title || "resource"),
    content: "",
    buttonText: "Open Template",
    ...resource
  }));
}

function initApp() {
  initElements();
  loadState();
  appState.toolkitData.resources = ensureResourceIds(appState.toolkitData.resources);
  renderStaticForms();
  bindEvents();
  renderAll();
}

function renderAll() {
  applyContextSettings();
  renderHero();
  renderOverview();
  renderFramework();
  renderModules();
  renderResourceFilters();
  renderResources();
  renderRecentlyOpened();
  renderAdminResourceSelect();
  renderEventChecklist();
  renderProjects();
  renderImpactLog();
  renderSurveyQuestionBank();
  renderCaseStudies();
  renderActionSteps();
  restoreDrafts();
}

function renderHero() {
  const data = appState.toolkitData;
  els.siteTitle.textContent = data.siteTitle;
  els.siteSubtitle.textContent = data.siteSubtitle;
  els.heroDescription.textContent = data.heroDescription;
  els.navBrand.textContent = data.siteTitle;
  els.moduleCount.textContent = data.toolkitModules.length;
  els.resourceCount.textContent = data.resources.length;
  document.title = data.siteTitle;
  els.titleInput.value = data.siteTitle;
  els.subtitleInput.value = data.siteSubtitle;
}

function renderOverview() {
  const data = appState.toolkitData;
  els.overviewText.textContent = data.overviewText;
  els.adaptabilityNote.textContent = data.adaptabilityNote;
  els.audienceList.innerHTML = "";
  data.audiences.forEach((audience) => els.audienceList.appendChild(textEl("li", audience)));
}

function renderFramework() {
  els.frameworkGrid.innerHTML = "";
  appState.toolkitData.leadershipFramework.forEach((item, index) => {
    const card = el("article", "card");
    card.append(textEl("span", `Framework ${index + 1}`, "card-tag"));
    card.append(textEl("h3", item.title));
    card.append(textEl("p", item.description));
    card.append(listEl(item.questions, "question-list"));
    els.frameworkGrid.append(card);
  });
}

function renderModules() {
  els.moduleList.innerHTML = "";
  appState.toolkitData.toolkitModules.forEach((module, index) => {
    const item = el("article", "module-item");
    const summary = el("div");
    summary.append(textEl("span", `Module ${index + 1}`, "module-number"));
    summary.append(textEl("h3", module.title));
    summary.append(textEl("p", module.purpose));
    item.append(summary, listEl(module.items, "feature-list"));
    els.moduleList.append(item);
  });
}

function renderResourceFilters() {
  fillSelect(els.resourceFilter, resourceCategories, appState.resourceFilter || "All");
  els.resourceSearch.value = appState.resourceSearch || "";
}

function renderResources() {
  const search = (appState.resourceSearch || "").toLowerCase();
  const filter = appState.resourceFilter || "All";
  const filtered = appState.toolkitData.resources.filter((resource) => {
    const searchable = [
      resource.title,
      resource.category,
      resource.description,
      resource.recommendedUse,
      resource.content
    ]
      .join(" ")
      .toLowerCase();
    const categoryOk =
      filter === "All" ||
      (filter === "Favorites" && appState.favorites.includes(resource.id)) ||
      resource.category === filter;
    return categoryOk && searchable.includes(search);
  });

  els.resourcesGrid.innerHTML = "";
  els.resourceEmpty.hidden = filtered.length > 0;

  filtered.forEach((resource) => {
    const card = el("article", "card resource-card");
    const fav = buttonEl(appState.favorites.includes(resource.id) ? "Favorited" : "Favorite", "favorite-btn");
    fav.classList.toggle("is-favorite", appState.favorites.includes(resource.id));
    fav.addEventListener("click", () => toggleFavorite(resource.id));

    const open = buttonEl(resource.buttonText || "Open Template", "button secondary");
    open.addEventListener("click", () => openResourceModal(resource.id));

    const use = el("div", "resource-use");
    use.append(textEl("strong", "Recommended use: "));
    use.append(resource.recommendedUse || "");

    card.append(fav);
    card.append(textEl("span", resource.category, "card-tag"));
    card.append(textEl("h3", resource.title));
    card.append(textEl("p", resource.description));
    card.append(use);
    card.append(open);
    els.resourcesGrid.append(card);
  });
}

function renderRecentlyOpened() {
  els.recentlyOpenedList.innerHTML = "";
  const recentResources = appState.recentlyOpened
    .map((id) => appState.toolkitData.resources.find((resource) => resource.id === id))
    .filter(Boolean);

  if (!recentResources.length) {
    els.recentlyOpenedList.append(textEl("span", "No resources opened yet.", "small-note"));
    return;
  }

  recentResources.forEach((resource) => {
    const chip = buttonEl(resource.title, "chip");
    chip.addEventListener("click", () => openResourceModal(resource.id));
    els.recentlyOpenedList.append(chip);
  });
}

function openResourceModal(resourceId) {
  const resource = appState.toolkitData.resources.find((item) => item.id === resourceId);
  if (!resource) return;
  activeResourceId = resource.id;
  appState.recentlyOpened = [resource.id, ...appState.recentlyOpened.filter((id) => id !== resource.id)].slice(0, 6);
  saveState();
  renderRecentlyOpened();

  els.modalCategory.textContent = resource.category;
  els.modalTitle.textContent = resource.title;
  els.modalRecommendedUse.textContent = `Recommended use: ${resource.recommendedUse}`;
  els.modalContent.innerHTML = "";
  els.modalContent.append(renderTemplateContent(resource.content));
  els.resourceModal.hidden = false;
  document.body.classList.add("modal-open");
  els.modalClose.focus();
}

function closeResourceModal() {
  els.resourceModal.hidden = true;
  document.body.classList.remove("modal-open");
  activeResourceId = null;
}

function toggleFavorite(resourceId) {
  if (appState.favorites.includes(resourceId)) {
    appState.favorites = appState.favorites.filter((id) => id !== resourceId);
  } else {
    appState.favorites.push(resourceId);
  }
  saveState();
  renderResources();
}

function renderTemplateContent(content) {
  const wrapper = el("div", "template-content");
  let paragraphLines = [];
  let currentList = null;

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const p = el("p");
    paragraphLines.forEach((line, index) => {
      if (index) p.append(document.createElement("br"));
      p.append(line);
    });
    wrapper.append(p);
    paragraphLines = [];
  };

  String(content || "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        flushParagraph();
        currentList = null;
      } else if (trimmed === "---") {
        flushParagraph();
        currentList = null;
        wrapper.append(document.createElement("hr"));
      } else if (trimmed.startsWith("### ")) {
        flushParagraph();
        currentList = null;
        wrapper.append(textEl("h4", trimmed.slice(4)));
      } else if (trimmed.startsWith("## ")) {
        flushParagraph();
        currentList = null;
        wrapper.append(textEl("h3", trimmed.slice(3)));
      } else if (trimmed.startsWith("# ")) {
        flushParagraph();
        currentList = null;
        wrapper.append(textEl("h2", trimmed.slice(2)));
      } else if (trimmed.startsWith("- ")) {
        flushParagraph();
        if (!currentList) {
          currentList = el("ul");
          wrapper.append(currentList);
        }
        currentList.append(textEl("li", trimmed.slice(2)));
      } else {
        currentList = null;
        paragraphLines.push(trimmed);
      }
    });
  flushParagraph();
  return wrapper;
}

function renderStaticForms() {
  renderFieldForm(els.proposalForm, proposalFields, "proposal");
  renderFieldForm(els.pitchForm, pitchFields, "pitch");
  renderFieldForm(els.reflectionForm, reflectionFields, "reflection");
  renderFieldForm(els.communicationForm, communicationFields, "communication");
  renderCommunicationExtraFields();
  renderProjectForm();
  renderImpactForm();
  fillSelect(els.pitchAudience, ["Students", "Teachers / Staff", "Administrators", "External partners", "General audience"], "General audience");
}

function renderFieldForm(form, fields, draftKey) {
  form.innerHTML = "";
  fields.forEach(([name, label]) => {
    form.append(labelWrap(label, textareaEl(`${draftKey}-${name}`, 3)));
  });
  form.addEventListener("input", () => {
    appState.drafts[draftKey] = collectPrefixedFields(draftKey, fields);
    saveStateSoon();
  });
}

function restoreDrafts() {
  restorePrefixedFields("proposal", proposalFields, appState.drafts.proposal);
  restorePrefixedFields("pitch", pitchFields, appState.drafts.pitch);
  restorePrefixedFields("reflection", reflectionFields, appState.drafts.reflection);
  restorePrefixedFields("communication", communicationFields, appState.drafts.communication);
  els.proposalPreview.textContent = appState.drafts.proposalOutput || "";
  els.pitchPreview.textContent = appState.drafts.pitchOutput || "";
  els.reflectionPreview.textContent = appState.drafts.reflectionOutput || "";
  els.messagePreview.textContent = appState.drafts.communicationOutput || "";
}

function generateProposal() {
  const d = collectPrefixedFields("proposal", proposalFields);
  appState.drafts.proposal = d;
  const proposal = `Student Initiative Proposal

1. Initiative Title
${valueOrBlank(d.initiativeTitle)}

2. One-Sentence Summary
${valueOrBlank(d.summary)}

3. Problem or Need
${valueOrBlank(d.problem)}

4. Evidence of Need
${valueOrBlank(d.evidence)}

5. Target Audience and Stakeholders
Target audience: ${valueOrBlank(d.audience)}
Stakeholders: ${valueOrBlank(d.stakeholders)}

6. Goal
${valueOrBlank(d.goal)}

7. Why This Initiative Matters
${valueOrBlank(d.matters)}

8. Proposed Action Plan
${valueOrBlank(d.actions)}

9. Timeline
${valueOrBlank(d.timeline)}

10. Resources and Approval Needed
Resources: ${valueOrBlank(d.resources)}
Approval needed: ${valueOrBlank(d.approval)}

11. Risks and Challenges
${valueOrBlank(d.risks)}

12. Success Indicators
${valueOrBlank(d.success)}

13. Reflection Plan
${valueOrBlank(d.reflection)}

14. Next Step
${valueOrBlank(d.nextStep)}`;
  appState.drafts.proposalOutput = proposal;
  els.proposalPreview.textContent = proposal;
  saveState();
}

function generatePitch(length) {
  const d = collectPrefixedFields("pitch", pitchFields);
  const audience = els.pitchAudience.value;
  appState.drafts.pitch = d;
  const audienceLead = {
    Students: "Here is why this matters for students:",
    "Teachers / Staff": "This is a practical student-led proposal with clear responsibilities:",
    Administrators: "This proposal is designed to be realistic, organized, and measurable:",
    "External partners": "We are reaching out with a focused student-led initiative:",
    "General audience": "This initiative responds to a clear need:"
  }[audience];
  const base = `${audienceLead} We noticed that ${valueOrBlank(d.problem)}. This affects ${valueOrBlank(
    d.audience
  )}. We propose to ${valueOrBlank(d.action)} because ${valueOrBlank(d.matters)}. It would work by ${valueOrBlank(
    d.works
  )}. The next step is ${valueOrBlank(d.request)}.`;
  const output =
    length === "15"
      ? `15-Second Pitch\n\nWe noticed that ${valueOrBlank(d.problem)}. Our proposal is to ${valueOrBlank(
          d.action
        )}. The next step is ${valueOrBlank(d.request)}.`
      : length === "60"
        ? `60-Second Pitch\n\n${base}\n\nThis is realistic because it uses clear roles, a defined audience, and measurable evidence.`
        : `30-Second Pitch\n\n${base}`;
  appState.drafts.pitchOutput = output;
  els.pitchPreview.textContent = output;
  saveState();
}

function generateReflection(type) {
  const d = collectPrefixedFields("reflection", reflectionFields);
  appState.drafts.reflection = d;
  const short = `Through ${valueOrBlank(d.experience)}, I learned that leadership requires ${valueOrBlank(
    d.learned
  )}. My role was to ${valueOrBlank(d.role)}. One challenge was ${valueOrBlank(
    d.challenge
  )}, which I addressed by ${valueOrBlank(d.response)}. The experience helped me develop ${valueOrBlank(
    d.skill
  )} because ${valueOrBlank(d.evidence)}. In the future, I would improve by ${valueOrBlank(d.improve)}.`;
  const detailed = `Detailed Reflection

Context
${valueOrBlank(d.context)} My motivation was ${valueOrBlank(d.motivation)}.

Action
My role was ${valueOrBlank(d.role)}. I took these actions: ${valueOrBlank(d.actions)}.

Challenge
The main challenge was ${valueOrBlank(d.challenge)}. I handled it by ${valueOrBlank(d.response)}.

Impact
Evidence of impact included ${valueOrBlank(d.evidence)}. Feedback received: ${valueOrBlank(d.feedback)}.

Growth
I developed ${valueOrBlank(d.skill)} and learned ${valueOrBlank(d.learned)}.

Future Improvement
Next time, I would ${valueOrBlank(d.improve)}.`;
  const output = type === "short" ? short : detailed;
  appState.drafts.reflectionOutput = output;
  els.reflectionPreview.textContent = output;
  saveState();
}

function renderEventChecklist() {
  els.eventChecklistGrid.innerHTML = "";
  const grouped = groupBy(appState.eventChecklist, "category");
  Object.entries(grouped).forEach(([category, items]) => {
    const card = el("article", "checklist-card");
    card.append(textEl("h3", category));
    items.forEach((item) => {
      const row = el("label", "checkline");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = item.done;
      input.addEventListener("change", () => {
        item.done = input.checked;
        updateChecklistProgress();
        saveState();
      });
      row.append(input, textEl("span", item.label));
      if (item.custom) {
        const del = buttonEl("Delete", "icon-button");
        del.type = "button";
        del.addEventListener("click", () => deleteChecklistItem(item.id));
        row.append(del);
      } else {
        row.append(textEl("span", ""));
      }
      card.append(row);
    });
    els.eventChecklistGrid.append(card);
  });
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const total = appState.eventChecklist.length || 1;
  const done = appState.eventChecklist.filter((item) => item.done).length;
  const percent = Math.round((done / total) * 100);
  els.checklistProgress.textContent = `${percent}% complete`;
  els.checklistProgressBar.style.width = `${percent}%`;
}

function addChecklistItem(event) {
  event.preventDefault();
  const label = els.customChecklistItem.value.trim();
  if (!label) return;
  const category = els.customChecklistCategory.value.trim() || "Custom";
  appState.eventChecklist.push({ id: makeId(label), category, label, done: false, custom: true });
  els.customChecklistForm.reset();
  renderEventChecklist();
  saveState();
}

function deleteChecklistItem(id) {
  appState.eventChecklist = appState.eventChecklist.filter((item) => item.id !== id);
  renderEventChecklist();
  saveState();
}

function renderProjectForm() {
  els.projectForm.innerHTML = "";
  projectFields.forEach(([name, label]) => {
    if (name === "deadline") {
      const input = document.createElement("input");
      input.type = "date";
      input.id = `project-${name}`;
      els.projectForm.append(labelWrap(label, input));
    } else {
      els.projectForm.append(labelWrap(label, name === "notes" ? textareaEl(`project-${name}`, 3) : inputEl(`project-${name}`)));
    }
  });
  const status = document.createElement("select");
  status.id = "project-status";
  fillSelect(status, ["Idea", "Planning", "Awaiting Approval", "Active", "Completed", "Reflected"], "Idea");
  els.projectForm.append(labelWrap("Status", status));
  const add = buttonEl("Add Project", "button primary");
  add.type = "submit";
  els.projectForm.append(add);
}

function renderProjects() {
  fillSelect(els.projectStatusFilter, ["All", "Idea", "Planning", "Awaiting Approval", "Active", "Completed", "Reflected"], appState.projectStatusFilter);
  els.projectGrid.innerHTML = "";
  appState.projects
    .filter((p) => appState.projectStatusFilter === "All" || p.status === appState.projectStatusFilter)
    .forEach((project) => {
      const card = el("article", "card");
      card.append(textEl("span", project.status, "status-pill"));
      card.append(textEl("h3", project.title || "Untitled project"));
      card.append(textEl("p", `${project.category || "General"} | Deadline: ${project.deadline || "No deadline"}`));
      card.append(textEl("p", `Goal: ${project.goal || ""}`));
      card.append(textEl("p", `Next action: ${project.nextAction || ""}`));
      card.append(textEl("p", project.notes || ""));
      const edit = buttonEl("Edit Project", "button secondary");
      edit.addEventListener("click", () => loadProjectForEdit(project.id));
      const del = buttonEl("Delete Project", "button danger");
      del.addEventListener("click", () => deleteProject(project.id));
      card.append(el("div", "button-row", [edit, del]));
      els.projectGrid.append(card);
    });
}

function addProject(event) {
  event.preventDefault();
  const project = collectProjectForm();
  if (!project.title) return;
  if (editingProjectId) {
    appState.projects = appState.projects.map((item) => (item.id === editingProjectId ? { ...project, id: editingProjectId } : item));
    editingProjectId = null;
  } else {
    appState.projects.push({ ...project, id: makeId(project.title) });
  }
  els.projectForm.reset();
  renderProjectForm();
  renderProjects();
  saveState();
}

function updateProject() {
  addProject(new Event("submit"));
}

function deleteProject(id) {
  appState.projects = appState.projects.filter((project) => project.id !== id);
  renderProjects();
  saveState();
}

function loadProjectForEdit(id) {
  const project = appState.projects.find((item) => item.id === id);
  if (!project) return;
  editingProjectId = id;
  projectFields.forEach(([name]) => {
    const field = document.getElementById(`project-${name}`);
    if (field) field.value = project[name] || "";
  });
  $("#project-status").value = project.status || "Idea";
  els.projectForm.querySelector("button").textContent = "Save Project Changes";
  location.hash = "#project-dashboard";
}

function renderImpactForm() {
  els.impactForm.innerHTML = "";
  impactFields.forEach(([name, label]) => {
    if (name === "date") {
      const input = document.createElement("input");
      input.type = "date";
      input.id = `impact-${name}`;
      els.impactForm.append(labelWrap(label, input));
    } else {
      els.impactForm.append(labelWrap(label, textareaEl(`impact-${name}`, 2)));
    }
  });
  const type = document.createElement("select");
  type.id = "impact-type";
  fillSelect(type, ["Attendance", "Survey", "Feedback", "Fundraising", "Service hours", "Resource created", "Participation change", "Testimonial", "Observation", "Other"], "Feedback");
  els.impactForm.append(labelWrap("Type of evidence", type));
  const add = buttonEl("Add Impact Entry", "button primary");
  add.type = "submit";
  els.impactForm.append(add);
}

function renderImpactLog() {
  els.impactGrid.innerHTML = "";
  appState.impactLog.forEach((entry) => {
    const card = el("article", "card");
    card.append(textEl("span", entry.type, "status-pill"));
    card.append(textEl("h3", entry.project || "Untitled entry"));
    card.append(textEl("p", `Date: ${entry.date || "No date"}`));
    card.append(textEl("p", `Evidence: ${entry.quantitative || ""} ${entry.qualitative || ""}`));
    card.append(textEl("p", `Groups affected: ${entry.groups || ""}`));
    card.append(textEl("p", `What changed: ${entry.changed || ""}`));
    const edit = buttonEl("Edit Entry", "button secondary");
    edit.addEventListener("click", () => loadImpactForEdit(entry.id));
    const del = buttonEl("Delete Entry", "button danger");
    del.addEventListener("click", () => deleteImpactEntry(entry.id));
    card.append(el("div", "button-row", [edit, del]));
    els.impactGrid.append(card);
  });
}

function addImpactEntry(event) {
  event.preventDefault();
  const entry = collectImpactForm();
  if (!entry.project) return;
  if (editingImpactId) {
    appState.impactLog = appState.impactLog.map((item) => (item.id === editingImpactId ? { ...entry, id: editingImpactId } : item));
    editingImpactId = null;
  } else {
    appState.impactLog.push({ ...entry, id: makeId(entry.project) });
  }
  els.impactForm.reset();
  renderImpactForm();
  renderImpactLog();
  saveState();
}

function renderSurveyQuestionBank() {
  els.surveyQuestionGrid.innerHTML = "";
  appState.toolkitData.surveyQuestionBank.forEach((group) => {
    const card = el("article", "card");
    card.append(textEl("span", "Question bank", "card-tag"));
    card.append(textEl("h3", group.category));
    card.append(listEl(group.questions));
    const copy = buttonEl("Copy All Questions", "button secondary");
    copy.addEventListener("click", () => copyText(`${group.category}\n${group.questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}`));
    card.append(copy);
    els.surveyQuestionGrid.append(card);
  });
}

function renderCaseStudies() {
  els.caseStudyGrid.innerHTML = "";
  appState.toolkitData.caseStudies.forEach((caseStudy) => {
    const card = el("article", "card");
    card.append(textEl("span", caseStudy.context, "card-tag"));
    card.append(textEl("h3", caseStudy.title));
    card.append(textEl("p", caseStudy.problem));
    const open = buttonEl("View Case", "button secondary");
    open.addEventListener("click", () => openCaseModal(caseStudy.id));
    card.append(open);
    els.caseStudyGrid.append(card);
  });
}

function openCaseModal(caseId) {
  const item = appState.toolkitData.caseStudies.find((caseStudy) => caseStudy.id === caseId);
  if (!item) return;
  activeCaseId = caseId;
  els.caseModalTitle.textContent = item.title;
  els.caseModalContent.innerHTML = "";
  [
    ["Context", item.context],
    ["Problem", item.problem],
    ["Action", item.action],
    ["Stakeholders", item.stakeholders],
    ["Tools used", item.toolsUsed],
    ["Evidence of impact", item.evidence],
    ["Reflection question", item.reflectionQuestion],
    ["Transfer idea", item.transferIdea]
  ].forEach(([heading, text]) => {
    els.caseModalContent.append(textEl("h3", heading));
    els.caseModalContent.append(textEl("p", text));
  });
  els.caseModal.hidden = false;
  document.body.classList.add("modal-open");
  els.caseModalClose.focus();
}

function renderActionSteps() {
  els.actionTimeline.innerHTML = "";
  appState.toolkitData.actionSteps.forEach((step) => els.actionTimeline.append(textEl("li", step)));
}

function generateCommunicationMessage() {
  const d = collectPrefixedFields("communication", communicationFields);
  const type = $("#communication-outputType").value;
  const tone = $("#communication-tone").value;
  const adult = appState.contextSettings.preferredAdultTerm;
  const output = `${type}
Tone: ${tone}

Subject/Headline: ${d.name || "Student initiative update"}

Purpose:
${valueOrBlank(d.purpose)}

Audience:
${valueOrBlank(d.audience)}

Key details:
${valueOrBlank(d.details)}

Message:
We are sharing ${d.name || "this student initiative"} so that ${valueOrBlank(
    d.audience
  )} understand the purpose, details, and next step. This is being organized with attention to feasibility, clear roles, and appropriate support from a ${adult}.

Call to action:
${valueOrBlank(d.callToAction)}`;
  appState.drafts.communication = d;
  appState.drafts.communicationOutput = output;
  els.messagePreview.textContent = output;
  saveState();
}

function applyContextSettings() {
  const settings = appState.contextSettings;
  els.contextIntro.textContent = appState.toolkitData.contextIntro;
  fillSelect(els.schoolType, settings.options.schoolType, settings.schoolType);
  fillSelect(els.leadershipContext, settings.options.leadershipContext, settings.leadershipContext);
  fillSelect(els.preferredAdultTerm, settings.options.preferredAdultTerm, settings.preferredAdultTerm);
  fillSelect(els.outputPurpose, settings.options.outputPurpose, settings.outputPurpose);
  fillSelect(els.studentTerm, settings.options.studentTerm, settings.studentTerm);
}

function renderAdminResourceSelect() {
  fillSelect(els.resourceCategory, resourceCategories.filter((c) => !["All", "Favorites"].includes(c)), "Planning");
  els.resourceSelect.innerHTML = "";
  appState.toolkitData.resources.forEach((resource) => {
    const option = document.createElement("option");
    option.value = resource.id;
    option.textContent = resource.title;
    els.resourceSelect.append(option);
  });
  if (appState.toolkitData.resources.length && !els.resourceTitle.value) {
    loadResourceEditor(appState.toolkitData.resources[0].id);
  }
}

function loadResourceEditor(resourceId) {
  const resource = appState.toolkitData.resources.find((item) => item.id === resourceId);
  if (!resource) return;
  els.resourceSelect.value = resource.id;
  els.resourceTitle.value = resource.title || "";
  els.resourceCategory.value = resource.category || "Planning";
  els.resourceDescription.value = resource.description || "";
  els.resourceUse.value = resource.recommendedUse || "";
  els.resourceButton.value = resource.buttonText || "Open Template";
  els.resourceContent.value = resource.content || "";
}

function saveResourceChanges() {
  const id = els.resourceSelect.value;
  appState.toolkitData.resources = appState.toolkitData.resources.map((resource) =>
    resource.id === id ? readResourceForm(id) : resource
  );
  saveState();
  renderAll();
}

function addResource() {
  const resource = readResourceForm(makeId(els.resourceTitle.value || "resource"));
  appState.toolkitData.resources.push(resource);
  saveState();
  renderAll();
  loadResourceEditor(resource.id);
}

function deleteSelectedResource() {
  const id = els.resourceSelect.value;
  if (!id) return;
  appState.toolkitData.resources = appState.toolkitData.resources.filter((resource) => resource.id !== id);
  appState.favorites = appState.favorites.filter((fav) => fav !== id);
  appState.recentlyOpened = appState.recentlyOpened.filter((recent) => recent !== id);
  saveState();
  clearResourceForm();
  renderAll();
}

function exportJson() {
  downloadText("student-leadership-toolkit-data.json", JSON.stringify(appState, null, 2));
}

function importJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(reader.result);
      if (imported.toolkitData) {
        appState = { ...createDefaultState(), ...imported };
      } else {
        appState.toolkitData = { ...deepClone(defaultToolkitData), ...imported };
      }
      appState.toolkitData.resources = ensureResourceIds(appState.toolkitData.resources || []);
      saveState();
      renderStaticForms();
      renderAll();
    } catch (error) {
      alert("Import failed. Please choose a valid JSON file.");
    }
  });
  reader.readAsText(file);
  event.target.value = "";
}

function resetToolkit() {
  if (!confirm("Reset to the default toolkit? This will clear saved local work.")) return;
  appState = createDefaultState();
  saveState();
  renderStaticForms();
  renderAll();
}

function bindEvents() {
  els.navToggle.addEventListener("click", () => {
    const open = els.navLinks.classList.toggle("is-open");
    els.navToggle.setAttribute("aria-expanded", String(open));
  });
  els.navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") els.navLinks.classList.remove("is-open");
  });
  els.editModeToggle.addEventListener("click", () => {
    const opening = els.adminPanel.hidden;
    els.adminPanel.hidden = !opening;
    els.editModeToggle.classList.toggle("is-active", opening);
    els.editModeToggle.textContent = opening ? "Close Edit Mode" : "Edit Mode";
  });
  els.siteTextForm.addEventListener("submit", (event) => {
    event.preventDefault();
    appState.toolkitData.siteTitle = els.titleInput.value.trim() || defaultToolkitData.siteTitle;
    appState.toolkitData.siteSubtitle = els.subtitleInput.value.trim() || defaultToolkitData.siteSubtitle;
    saveStateSoon();
    renderHero();
  });
  els.contextForm.addEventListener("change", () => {
    appState.contextSettings.schoolType = els.schoolType.value;
    appState.contextSettings.leadershipContext = els.leadershipContext.value;
    appState.contextSettings.preferredAdultTerm = els.preferredAdultTerm.value;
    appState.contextSettings.outputPurpose = els.outputPurpose.value;
    appState.contextSettings.studentTerm = els.studentTerm.value;
    saveStateSoon();
  });
  els.resourceSearch.addEventListener("input", () => {
    appState.resourceSearch = els.resourceSearch.value;
    saveStateSoon();
    renderResources();
  });
  els.resourceFilter.addEventListener("change", () => {
    appState.resourceFilter = els.resourceFilter.value;
    saveStateSoon();
    renderResources();
  });
  els.resourceSelect.addEventListener("change", () => loadResourceEditor(els.resourceSelect.value));
  els.saveResourceChanges.addEventListener("click", saveResourceChanges);
  els.addResourceButton.addEventListener("click", addResource);
  els.deleteResourceButton.addEventListener("click", deleteSelectedResource);
  els.exportJson.addEventListener("click", exportJson);
  els.importJson.addEventListener("change", importJson);
  els.resetToolkit.addEventListener("click", resetToolkit);
  els.exportProposal.addEventListener("click", () => downloadText("proposal-draft.txt", appState.drafts.proposalOutput || ""));
  els.exportPitch.addEventListener("click", () => downloadText("pitch-draft.txt", appState.drafts.pitchOutput || ""));
  els.exportReflection.addEventListener("click", () => downloadText("reflection-draft.txt", appState.drafts.reflectionOutput || ""));
  els.exportProjects.addEventListener("click", () => downloadText("project-dashboard.txt", projectsAsText()));
  els.exportImpact.addEventListener("click", () => downloadText("impact-log.txt", impactAsText()));
  els.exportImpactInline.addEventListener("click", () => downloadText("impact-log.txt", impactAsText()));
  els.exportSelectedResource.addEventListener("click", () => {
    const selected = appState.toolkitData.resources.find((resource) => resource.id === els.resourceSelect.value);
    if (selected) downloadText(`${slugifyFileName(selected.title)}.txt`, selected.content || "");
  });
  els.generateProposal.addEventListener("click", generateProposal);
  els.copyProposal.addEventListener("click", () => copyText(appState.drafts.proposalOutput || ""));
  els.downloadProposal.addEventListener("click", () => downloadText("student-initiative-proposal.txt", appState.drafts.proposalOutput || ""));
  els.saveProposal.addEventListener("click", () => {
    appState.drafts.proposal = collectPrefixedFields("proposal", proposalFields);
    saveState();
  });
  els.clearProposal.addEventListener("click", () => clearDraft("proposal", proposalFields, els.proposalPreview, "proposalOutput"));
  document.querySelectorAll("[data-pitch-length]").forEach((button) =>
    button.addEventListener("click", () => generatePitch(button.dataset.pitchLength))
  );
  els.copyPitch.addEventListener("click", () => copyText(appState.drafts.pitchOutput || ""));
  els.downloadPitch.addEventListener("click", () => downloadText("student-leadership-pitch.txt", appState.drafts.pitchOutput || ""));
  els.savePitch.addEventListener("click", () => {
    appState.drafts.pitch = collectPrefixedFields("pitch", pitchFields);
    saveState();
  });
  document.querySelectorAll("[data-reflection-type]").forEach((button) =>
    button.addEventListener("click", () => generateReflection(button.dataset.reflectionType))
  );
  els.copyReflection.addEventListener("click", () => copyText(appState.drafts.reflectionOutput || ""));
  els.downloadReflection.addEventListener("click", () => downloadText("leadership-reflection.txt", appState.drafts.reflectionOutput || ""));
  els.saveReflection.addEventListener("click", () => {
    appState.drafts.reflection = collectPrefixedFields("reflection", reflectionFields);
    saveState();
  });
  els.clearReflection.addEventListener("click", () => clearDraft("reflection", reflectionFields, els.reflectionPreview, "reflectionOutput"));
  els.customChecklistForm.addEventListener("submit", addChecklistItem);
  els.resetChecklist.addEventListener("click", () => {
    appState.eventChecklist = deepClone(defaultChecklist);
    renderEventChecklist();
    saveState();
  });
  els.projectForm.addEventListener("submit", addProject);
  els.projectStatusFilter.addEventListener("change", () => {
    appState.projectStatusFilter = els.projectStatusFilter.value;
    saveStateSoon();
    renderProjects();
  });
  els.sortProjects.addEventListener("click", () => {
    appState.projects.sort((a, b) => String(a.deadline || "9999").localeCompare(String(b.deadline || "9999")));
    renderProjects();
    saveState();
  });
  els.impactForm.addEventListener("submit", addImpactEntry);
  els.generateImpactSummary.addEventListener("click", generateImpactSummary);
  els.generateMessage.addEventListener("click", generateCommunicationMessage);
  els.copyMessage.addEventListener("click", () => copyText(appState.drafts.communicationOutput || ""));
  els.downloadMessage.addEventListener("click", () => downloadText("communication-message.txt", appState.drafts.communicationOutput || ""));
  els.modalClose.addEventListener("click", closeResourceModal);
  els.resourceModal.addEventListener("click", (event) => {
    if (event.target === els.resourceModal) closeResourceModal();
  });
  els.copyTemplate.addEventListener("click", () => {
    const resource = currentResource();
    if (resource) copyText(resource.content || "");
  });
  els.downloadTemplate.addEventListener("click", () => {
    const resource = currentResource();
    if (resource) downloadText(`${slugifyFileName(resource.title)}.txt`, resource.content || "");
  });
  els.caseModalClose.addEventListener("click", closeCaseModal);
  els.caseModal.addEventListener("click", (event) => {
    if (event.target === els.caseModal) closeCaseModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!els.resourceModal.hidden) closeResourceModal();
    if (!els.caseModal.hidden) closeCaseModal();
  });
}

function closeCaseModal() {
  els.caseModal.hidden = true;
  document.body.classList.remove("modal-open");
  activeCaseId = null;
}

function generateImpactSummary() {
  const count = appState.impactLog.length;
  const types = [...new Set(appState.impactLog.map((entry) => entry.type).filter(Boolean))].join(", ") || "student leadership work";
  const strongest = appState.impactLog.find((entry) => entry.quantitative || entry.qualitative);
  const groups = [...new Set(appState.impactLog.map((entry) => entry.groups).filter(Boolean))].join(", ") || "the school community";
  const reflections = appState.impactLog.map((entry) => entry.reflection).filter(Boolean);
  const summary = `Across ${count} recorded activities, this leadership portfolio shows evidence of ${types}. The strongest evidence comes from ${
    strongest ? strongest.quantitative || strongest.qualitative : "the recorded project notes"
  }. The main groups affected were ${groups}. A recurring leadership insight is ${
    reflections[0] || "that clear planning, communication, and follow-through make student projects easier to evaluate and improve"
  }.`;
  els.impactSummary.textContent = summary;
}

function collectProjectForm() {
  const project = {};
  projectFields.forEach(([name]) => {
    project[name] = document.getElementById(`project-${name}`).value.trim();
  });
  project.status = $("#project-status").value;
  return project;
}

function collectImpactForm() {
  const entry = {};
  impactFields.forEach(([name]) => {
    entry[name] = document.getElementById(`impact-${name}`).value.trim();
  });
  entry.type = $("#impact-type").value;
  return entry;
}

function loadImpactForEdit(id) {
  const entry = appState.impactLog.find((item) => item.id === id);
  if (!entry) return;
  editingImpactId = id;
  impactFields.forEach(([name]) => {
    const field = document.getElementById(`impact-${name}`);
    if (field) field.value = entry[name] || "";
  });
  $("#impact-type").value = entry.type || "Feedback";
  els.impactForm.querySelector("button").textContent = "Save Impact Entry";
  location.hash = "#impact-log";
}

function deleteImpactEntry(id) {
  appState.impactLog = appState.impactLog.filter((entry) => entry.id !== id);
  renderImpactLog();
  saveState();
}

function clearDraft(key, fields, preview, outputKey) {
  appState.drafts[key] = {};
  appState.drafts[outputKey] = "";
  fields.forEach(([name]) => {
    const field = document.getElementById(`${key}-${name}`);
    if (field) field.value = "";
  });
  preview.textContent = "";
  saveState();
}

function copyText(text) {
  if (!text) return;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text);
    return;
  }
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.setAttribute("readonly", "");
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  document.body.append(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
}

function downloadText(filename, text) {
  const blob = new Blob([text || ""], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function projectsAsText() {
  return appState.projects
    .map((p) => `${p.title}\nStatus: ${p.status}\nDeadline: ${p.deadline}\nGoal: ${p.goal}\nNext action: ${p.nextAction}\nNotes: ${p.notes}`)
    .join("\n\n---\n\n");
}

function impactAsText() {
  return appState.impactLog
    .map((e) => `${e.project}\nDate: ${e.date}\nType: ${e.type}\nQuantitative: ${e.quantitative}\nQualitative: ${e.qualitative}\nFeedback: ${e.feedback}\nGroups affected: ${e.groups}\nWhat changed: ${e.changed}\nReflection: ${e.reflection}`)
    .join("\n\n---\n\n");
}

function currentResource() {
  return appState.toolkitData.resources.find((resource) => resource.id === activeResourceId);
}

function readResourceForm(id) {
  return {
    id,
    title: els.resourceTitle.value.trim(),
    category: els.resourceCategory.value,
    description: els.resourceDescription.value.trim(),
    recommendedUse: els.resourceUse.value.trim(),
    buttonText: els.resourceButton.value.trim() || "Open Template",
    content: els.resourceContent.value.trim()
  };
}

function clearResourceForm() {
  els.resourceForm.reset();
  els.resourceButton.value = "Open Template";
}

function collectPrefixedFields(prefix, fields) {
  const result = {};
  fields.forEach(([name]) => {
    result[name] = (document.getElementById(`${prefix}-${name}`) || {}).value || "";
  });
  return result;
}

function restorePrefixedFields(prefix, fields, values = {}) {
  fields.forEach(([name]) => {
    const field = document.getElementById(`${prefix}-${name}`);
    if (field) field.value = values[name] || "";
  });
}

function fillSelect(select, options, selected) {
  select.innerHTML = "";
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.append(opt);
  });
  if (selected) select.value = selected;
}

function renderProjectStatusOptions() {
  fillSelect(els.projectStatusFilter, ["All", "Idea", "Planning", "Awaiting Approval", "Active", "Completed", "Reflected"], appState.projectStatusFilter || "All");
}

function labelWrap(text, control) {
  const label = document.createElement("label");
  label.append(text, control);
  return label;
}

function inputEl(id) {
  const input = document.createElement("input");
  input.id = id;
  input.type = "text";
  return input;
}

function textareaEl(id, rows) {
  const textarea = document.createElement("textarea");
  textarea.id = id;
  textarea.rows = rows;
  return textarea;
}

function el(tag, className, children = []) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  children.forEach((child) => element.append(child));
  return element;
}

function textEl(tag, text, className) {
  const element = el(tag, className);
  element.textContent = text || "";
  return element;
}

function buttonEl(text, className) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = text;
  return button;
}

function listEl(items, className) {
  const list = el("ul", className);
  (items || []).forEach((item) => list.append(textEl("li", item)));
  return list;
}

function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || "Other";
    acc[value] = acc[value] || [];
    acc[value].push(item);
    return acc;
  }, {});
}

function valueOrBlank(value) {
  return value && String(value).trim() ? String(value).trim() : "[not yet completed]";
}

function slugifyFileName(text) {
  return (
    String(text || "download")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "download"
  );
}

function renderCommunicationExtraFields() {
  const tone = document.createElement("select");
  tone.id = "communication-tone";
  fillSelect(tone, ["Friendly", "Professional", "Concise", "Persuasive", "Formal"], "Professional");
  els.communicationForm.append(labelWrap("Tone", tone));
  const output = document.createElement("select");
  output.id = "communication-outputType";
  fillSelect(
    output,
    ["Student announcement", "Teacher/staff email", "Administrator briefing", "Social media caption", "Poster text", "External partner email"],
    "Student announcement"
  );
  els.communicationForm.append(labelWrap("Output type", output));
}

// Backend placeholders. Add API logic here later.
async function fetchToolkitData() {
  return appState.toolkitData;
}

async function saveToolkitData(updatedData) {
  appState.toolkitData = updatedData;
  saveState();
  return updatedData;
}

async function loadFromGoogleSheet() {
  console.info("Connect Google Sheets API here later.");
  return null;
}

async function loadFromCMS() {
  console.info("Connect Notion, Sanity, Contentful, or another CMS here later.");
  return null;
}

async function syncWithFirebase() {
  console.info("Connect Firebase sync here later.");
  return null;
}

async function syncWithSupabase() {
  console.info("Connect Supabase sync here later.");
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  restoreDrafts();
  renderProjectStatusOptions();
});

window.addEventListener("beforeunload", saveState);
