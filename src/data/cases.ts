export interface CaseBodySection {
  h: string;
  p: string;
}

export interface ProseBlock {
  type: 'prose';
  heading?: string;
  body: string;
}

export interface ImageTextBlock {
  type: 'imageText';
  side: 'left' | 'right';
  image: string | null;
  alt: string;
  caption?: string;
  heading?: string;
  body: string;
}

export interface FullImageBlock {
  type: 'fullImage';
  image: string | null;
  alt: string;
  caption?: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface MetricsBlock {
  type: 'metrics';
  heading?: string;
  items: MetricItem[];
}

export interface BeforeAfterBlock {
  type: 'beforeAfter';
  before: string | null;
  after: string | null;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
}

export interface CalloutBlock {
  type: 'callout';
  body: string;
  variant?: 'default' | 'problem';
}

export interface ListBlock {
  type: 'list';
  heading?: string;
  ordered?: boolean;
  items: string[];
}

export interface QuoteBlock {
  type: 'quote';
  quote: string;
  attribution?: string;
}

export interface TwoColContent {
  label?: string;
  body: string;
}

export interface TwoColBlock {
  type: 'twoCol';
  heading?: string;
  left: TwoColContent;
  right: TwoColContent;
}

export interface DividerBlock {
  type: 'divider';
  label?: string;
  title: string;
}

export interface GalleryItem {
  image: string | null;
  alt: string;
  caption?: string;
}

export interface GalleryBlock {
  type: 'gallery';
  heading?: string;
  columns?: 2 | 3;
  items: GalleryItem[];
}

export type CaseBlock =
  | ProseBlock
  | ImageTextBlock
  | FullImageBlock
  | MetricsBlock
  | BeforeAfterBlock
  | CalloutBlock
  | ListBlock
  | QuoteBlock
  | TwoColBlock
  | DividerBlock
  | GalleryBlock;
export type CaseBodyBlock = CaseBodySection | CaseBlock;

export interface CaseStudy {
  slug: string;
  kicker: string;
  title: string;
  lede: string;
  role: string;
  time: string;
  team: string;
  metric: string;
  blocks: CaseBodyBlock[];
}

export const cases = {
  naoma: {
    slug: 'naoma',
    kicker: 'AI sales analytics',
    title: 'Naoma',
    lede: 'An AI sales-analytics platform that turns scattered call and deal data into a clear read on why reps win or lose.',
    role: 'Product Designer',
    time: '2024 to 2025',
    team: 'Founder, CRO, eng team',
    metric: 'First paying clients and funding',
    blocks: [
      { h: 'Context', p: 'Companies pour money into CRMs, KPIs, and sales training, but one question stays open: why does one rep close and another does not? The honest answer sits in the data, spread across hundreds of calls and metrics. Manual review is slow, expensive, and subjective; CRMs show what happened but not why.' },
      { h: 'The problem', p: 'Sales teams invest heavily in process but have no objective way to see the full picture and fix what is broken. Leadership needed one place to read team performance and drill into the reasons behind it.' },
      { h: 'Who it was for', p: 'CEOs and Heads of Sales, the people accountable for revenue and for scaling a team. The founder came from sales and ran 20+ interviews with owners and sales execs from his network, which grounded the hypotheses instead of guesswork.' },
      { h: 'What I did', p: 'I reframed the product from a narrow call-quality tool into a sales-team performance platform, after research showed leaders needed a holistic view, not just call scores. I designed four core surfaces: a metrics dashboard with 10 team-level KPIs, an automated call score across five stages, per-call insights, and AI coaching. I also ran a teardown of 60+ competitors to find the positioning gap: rivals were either off-ICP or too complex and expensive.' },
      { h: 'Building it', p: 'We shipped an MVP (dashboard, call log, call view) and validated with RITE testing. Two months in we pivoted: users needed the reasoning behind a score and a broader set of team metrics, so positioning moved from call evaluation to full sales analytics. A later expansion added rep profiles, time-based comparisons, richer call attributes, and a scoring model with contextual quotes.' },
      { h: 'Outcome', p: 'Across two pilot clients over two months the product moved real numbers (one client saw revenue up 64% and 43% more closed deals; another 13% revenue and a 9.3% lift in call scores). By December 2024 there were 16 qualified leads at roughly $200K potential ARR, 8 pilots analyzing 50K+ calls, and 2 closed deals. The interface work contributed directly to landing the first paying customers and securing initial investment.' },
      { h: 'What I would keep', p: 'The pivot was the real lesson. The first design was right for the wrong problem; it only started working once positioning caught up to what sales leaders actually needed.' },
    ],
  },
  oilcasex: {
    slug: 'oilcase-x',
    kicker: 'Oilfield simulator',
    title: 'OilCase X',
    lede: 'A full redesign of a turn-based oil and gas field-management simulator used in EdTech case competitions and B2B training.',
    role: 'UX/UI Designer',
    time: '2021 to 2024',
    team: 'In-house product team',
    metric: 'Landed first B2B client',
    blocks: [
      { h: 'Context', p: 'OilCase X teaches people to develop and manage oil and gas fields through a turn-based strategy game that models real engineering and economic processes. The goal was to enter the EdTech market in oil and gas and win B2B clients who wanted custom simulators.' },
      { h: 'The problem', p: 'The first version was clunky and visually inconsistent: overloaded layouts, scattered data, and awkward navigation. The weak design made it hard to use for existing players and eroded trust with the corporate clients the team was trying to win.' },
      { h: 'How I worked', p: 'I ran a UX/UI audit of v1 plus interviews with past case-competition participants, which surfaced four issue categories: inconsistent UI, inefficient navigation, unstructured data, and redundant or missing features. Early decisions came from the audit and flow analysis; later ones folded in client requirements and a systematic pass through bug reports.' },
      { h: 'What I did', p: 'UI: built a shared UI kit for the whole OilCase ecosystem (buttons, inputs, avatars, tabs, selectors, lists, tooltips), which fixed consistency and sped up build. Navigation: replaced a 4-link top bar with a scalable sidebar and clear state indicators, and moved stats and controls to the top bar to fit the turn-based pattern. Data: introduced hierarchy, cut and simplified copy, and reorganized content into tables and blocks. Features: removed dead weight and added the tools players actually needed, including a statistics view, resource display, a drilling section with a well widget, and a turn-completion flow.' },
      { h: 'Outcome', p: 'We did not have resources for deep research, but still solved the core problems. Case-competition engagement went up, which strengthened the platform reputation and made funding easier to attract, and the refreshed product helped close the team first major B2B deal.' },
    ],
  },
  oilcourses: {
    slug: 'oilcase-courses',
    kicker: 'Course CMS',
    title: 'OilCase Courses Back Office',
    lede: 'A content-management system that lets admins and authors build, configure, and moderate complex oil and gas online courses.',
    role: 'UX/UI Designer',
    time: '2021 to 2024',
    team: 'With a systems analyst',
    metric: '50+ screens, dev-ready specs',
    blocks: [
      { h: 'Context', p: 'OilCase Courses Backoffice is the admin system behind the courses: create and configure courses, manage users, and track progress. The hard part was supporting a genuinely complex course structure without making the tool unusable.' },
      { h: 'What I did', p: 'I started from a classification system that grouped every course type into three core scenarios, which set the shape of the architecture. From there I built a detailed information architecture capturing the range of possible configurations and interaction paths, then designed the interface for two roles, Admin and Author, across every configuration type.' },
      { h: 'Designing for the whole state space', p: 'I designed for edge cases, not the happy path: empty pages, errors, confirmations, conflicting scenarios, and both successful and failed actions. Over 50 screens, backed by written design documentation covering UI states, component-to-module logic, content workflows, corner cases, and data-entry guidelines.' },
      { h: 'Outcome', p: 'I mapped how modules, tests, and settings connect, set parameters for four training types, built step-by-step admin screens, defined roles and permissions, and documented the system logic into specs ready for handoff. A systems analyst partnered on refining requirements as the screen flow came together.' },
    ],
  },
} satisfies Record<string, CaseStudy>;

export const caseStudies = Object.values(cases);
