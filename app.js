'use strict';

/* =========================================================
   Data
   ========================================================= */

const CATEGORIES = {
  A: { label: 'A · AI & technology' },
  B: { label: 'B · Education & career' },
  C: { label: 'C · Workplace' },
  D: { label: 'D · Current affairs' },
  E: { label: 'E · Business & analysis' }
};

const TOPICS = [
  {
    id: 1, cat: 'A', title: 'Is AI better than human intelligence?',
    points: [
      'AI now drafts, plans, and answers at speed; the question is where that speed helps and where it misses.',
      'AI wins on scale, pattern-matching, and repetition. Humans win on context, ethics, creativity, and accountability.',
      'AI can recommend, but people still own the consequences of a decision.',
      'Your view: which decisions should never be fully delegated?'
    ]
  },
  {
    id: 2, cat: 'A', title: 'Impact of AI on education',
    points: [
      'Students already use AI to explain, summarise, and practise.',
      'Personalised support is a real benefit; dependency and shortcutting are the risk.',
      'Teachers matter more, not less, for motivation, judgement, and feedback.',
      'Institutions need clear rules, assessment redesign, and AI literacy.',
      'Your view: a tool for thinking, or a replacement for it?'
    ]
  },
  {
    id: 3, cat: 'A', title: 'Will AI replace jobs or create opportunities?',
    points: [
      'Routine, repeatable tasks are most exposed: data entry, first-draft writing, basic support.',
      'New roles appear around AI: review, governance, workflow design, data quality.',
      'Every shift raises the bar on judgement, communication, and continuous learning.',
      'Threat or opportunity depends on how deliberately people upskill.',
      'Your view: a reallocation of work, not a simple subtraction.'
    ]
  },
  {
    id: 4, cat: 'A', title: 'Is technology making life easier or more complicated?',
    points: [
      'Communication, travel, payments, and access to information are dramatically simpler.',
      'Attention, privacy, and security costs are real.',
      'Convenience can quietly become dependence.',
      'Relationships suffer when presence is only partial.',
      'Balance is a design choice: notifications off, screen-free blocks, intentional use.'
    ]
  },
  {
    id: 5, cat: 'B', title: 'Does qualification matter more than skills?',
    points: [
      'Qualifications open doors and signal persistence; they are a filter, not proof of ability.',
      'Portfolios, internships, and live projects show what someone can actually do.',
      'Employers increasingly test for skills and judgement.',
      'Certifications help when paired with evidence of application.',
      'Job-readiness is foundation plus practice plus communication.'
    ]
  },
  {
    id: 6, cat: 'B', title: 'Is a certificate enough to prove someone’s skills?',
    points: [
      'Certifications verify exposure and baseline knowledge.',
      'They rarely prove how someone handles ambiguity, pressure, or a real stakeholder.',
      'Projects, case studies, and references reveal applied ability.',
      'Employers triangulate: interview, task, trial, and portfolio.',
      'Keep learning, but build evidence you can show.'
    ]
  },
  {
    id: 7, cat: 'B', title: 'IT or non-IT: where are more opportunities emerging?',
    points: [
      'IT continues to expand: data, cloud, security, product, AI operations.',
      'Non-IT sectors are digitising fast: healthcare, finance, logistics, retail, manufacturing.',
      'The line is blurring; every sector now needs analytical and digital skills.',
      'Choose by strengths and interest, not by label.',
      'Business analysis sits exactly at that intersection.'
    ]
  },
  {
    id: 8, cat: 'B', title: 'Is practical experience more important than academic knowledge?',
    points: [
      'Theory gives vocabulary and mental models; without it, experience is anecdote.',
      'Internships expose you to constraints, stakeholders, and deadlines.',
      'Live projects teach prioritisation and communication.',
      'Critical thinking comes from applying knowledge to messy situations.',
      'The strongest candidates combine both and can explain the link.'
    ]
  },
  {
    id: 9, cat: 'B', title: 'Should fresh graduates focus on salary or learning?',
    points: [
      'Financial independence matters; an unsustainable salary creates stress.',
      'Early learning compounds: mentorship, exposure, and feedback shape the next decade.',
      'Short-term pay and long-term growth are not always a straight trade.',
      'Ask about mentorship, real responsibility, and how feedback works.',
      'Your approach: optimise for growth, but never ignore basic fairness.'
    ]
  },
  {
    id: 10, cat: 'C', title: 'What makes someone a good team player?',
    points: [
      'Clear communication: share context, ask early, confirm understanding.',
      'Reliability: do what you said, and flag risks before they become surprises.',
      'Respect for different opinions; disagree with the idea, not the person.',
      'Support: help without taking over, and give credit openly.',
      'Handle disagreement with facts, curiosity, and a clear decision owner.'
    ]
  },
  {
    id: 11, cat: 'C', title: 'Is communication more important than technical skills?',
    points: [
      'Technical skill sets the floor; communication determines the ceiling.',
      'Explaining a trade-off to a non-technical stakeholder is itself a technical act.',
      'Miscommunication is a common root cause of rework.',
      'The best outcomes need both: depth plus the ability to translate it.',
      'Your view: neither wins alone; context decides the emphasis.'
    ]
  },
  {
    id: 12, cat: 'C', title: 'Work from home vs work from office: which is better?',
    points: [
      'Remote work offers focus, saved commute, and flexible hours.',
      'The office offers faster onboarding, spontaneous learning, and stronger relationships.',
      'Productivity depends on task type and team maturity.',
      'Hybrid is a real answer, but only with clear norms.',
      'Give a preference and a reason, not a universal verdict.'
    ]
  },
  {
    id: 13, cat: 'C', title: 'What makes a company a good place to work?',
    points: [
      'Culture is behaviour under pressure, not posters.',
      'Learning and internal mobility signal long-term intent.',
      'Managers who give clarity and cover build trust.',
      'Sustainable workload protects performance.',
      'Recognition and fair pay reinforce the rest.'
    ]
  },
  {
    id: 14, cat: 'D', title: 'Social media: a tool for growth or a distraction?',
    points: [
      'Networking, learning, and personal branding are genuine advantages.',
      'Default feeds are engineered for attention, not for outcomes.',
      'Misinformation travels faster than verification.',
      'Privacy and online safety need active habits.',
      'Use it deliberately: create more than you scroll, curate sources, set limits.'
    ]
  },
  {
    id: 15, cat: 'D', title: 'Is financial independence important for young professionals?',
    points: [
      'Independence reduces the pressure to accept bad situations.',
      'Saving early compounds; small consistent amounts matter.',
      'A simple budget, an emergency fund, and insurance cover the basics.',
      'Avoid lifestyle inflation and high-interest debt.',
      'Financial stability buys options, not just things.'
    ]
  },
  {
    id: 16, cat: 'D', title: 'Should students build real-world projects during college?',
    points: [
      'Academic learning gives structure; projects give context.',
      'A portfolio is evidence when experience is thin.',
      'Projects teach scoping, feedback, and finishing.',
      'They expose gaps and build confidence.',
      'Employers value demonstrable work more than claims.'
    ]
  },
  {
    id: 17, cat: 'D', title: 'Is success more about hard work or smart work?',
    points: [
      'Consistent effort is the baseline; nothing good happens without it.',
      'Smart work is direction: prioritisation, feedback loops, and leverage.',
      'Planning and time management convert effort into output.',
      'Failure is data only if you review it.',
      'Your view: hard work is the entry ticket; smart work chooses the door.'
    ]
  },
  {
    id: 18, cat: 'E', title: 'How can technology improve customer experience?',
    points: [
      'Understand the customer problem before choosing the tool.',
      'Self-service portals and apps reduce friction when designed well.',
      'Automation speeds support, but poorly designed loops frustrate people.',
      'Personalisation is only useful if it is relevant and consensual.',
      'Feedback closes the loop; without it, improvements are guesses.'
    ]
  },
  {
    id: 19, cat: 'E', title: 'Why is problem-solving important in every organisation?',
    points: [
      'Root cause first; symptoms are expensive to treat.',
      'Multiple perspectives widen the option set.',
      'Evaluate options against criteria, not preference.',
      'Decide, communicate, and check the outcome.',
      'Example: a recurring delay is usually a process issue, not a people issue.'
    ]
  },
  {
    id: 20, cat: 'E', title: 'How can businesses use data to make better decisions?',
    points: [
      'Define the question before collecting data.',
      'Customer behaviour reveals demand, friction, and churn signals.',
      'Trends and cohorts separate signal from noise.',
      'Data informs judgement; it rarely replaces it.',
      'Accuracy and interpretation matter more than dashboards.'
    ]
  }
];

const FIELD_LABELS = {
  intro: 'Opening',
  overview: 'Context',
  point1: 'Point 1',
  point2: 'Point 2',
  point3: 'Point 3',
  example: 'Example',
  opinion: 'Opinion',
  conclusion: 'Closing'
};

const FIELDS = Object.keys(FIELD_LABELS);
const BASE_BOUNDARIES = [0, 20, 50, 120, 150, 180];
const WPM = 130;
const STORAGE_KEY = 'itorizon-ba-video-studio-v1';
const STEPS = ['brief', 'topic', 'prepare', 'practice', 'record', 'review'];

const SEGMENTS = [
  {
    id: 'intro', label: 'Introduction', fields: ['intro'],
    empty: 'Add your opening in step 02 — name, topic, and one reason to listen.'
  },
  {
    id: 'overview', label: 'Topic overview', fields: ['overview'],
    empty: 'Add a line of context so the listener knows why this matters now.'
  },
  {
    id: 'main', label: 'Main discussion', fields: ['point1', 'point2', 'point3'],
    empty: 'Add two or three points in step 02 — reason, trade-off, implication.'
  },
  {
    id: 'example', label: 'Example & opinion', fields: ['example', 'opinion'],
    empty: 'Add one concrete example and state your position plainly.'
  },
  {
    id: 'conclusion', label: 'Conclusion', fields: ['conclusion'],
    empty: 'Add a closing line and the one takeaway you want remembered.'
  }
];

const CHECK_ITEMS = [
  { id: 'length', label: 'Length is between 2 and 3 minutes' },
  { id: 'visible', label: 'Face is clearly visible' },
  { id: 'audible', label: 'Voice is audible and clear' },
  { id: 'structure', label: 'Thoughts are structured' },
  { id: 'explained', label: 'Explained rather than read' },
  { id: 'ending', label: 'Clear beginning and ending' },
  { id: 'file', label: 'File opens and plays properly' }
];

/* =========================================================
   Utilities
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

function fmt(seconds) {
  const total = Math.max(0, Math.round(Number(seconds) || 0));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

function words(text) {
  const s = String(text || '').trim();
  return s ? s.split(/\s+/).length : 0;
}

function estSec(count) {
  return (count / WPM) * 60;
}

function slug(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .slice(0, 52) || 'take';
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

/* =========================================================
   State
   ========================================================= */

function defaultState() {
  const fields = {};
  FIELDS.forEach((f) => { fields[f] = ''; });
  return {
    step: 'brief',
    topicId: null,
    fields,
    target: 150,
    checklist: {},
    practiceRuns: 0,
    candidate: '',
    reflection: '',
    savedAt: null
  };
}

function loadState() {
  const base = defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw);
    return {
      ...base,
      ...saved,
      fields: { ...base.fields, ...(saved.fields || {}) },
      checklist: { ...(saved.checklist || {}) },
      step: STEPS.includes(saved.step) ? saved.step : 'brief'
    };
  } catch (err) {
    return base;
  }
}

let state = loadState();
let recordingDone = false;
let saveTimer = null;

const currentTopic = () => TOPICS.find((t) => t.id === state.topicId) || null;

function boundaries() {
  const factor = state.target / 180;
  return BASE_BOUNDARIES.map((v) => Math.round(v * factor));
}

function fieldSeconds(field) {
  return estSec(words(state.fields[field]));
}

function segmentSeconds(index) {
  return SEGMENTS[index].fields.reduce((sum, f) => sum + fieldSeconds(f), 0);
}

function totalWords() {
  return FIELDS.reduce((sum, f) => sum + words(state.fields[f]), 0);
}

function totalSeconds() {
  return estSec(totalWords());
}

function checkedCount() {
  return CHECK_ITEMS.reduce((n, item) => n + (state.checklist[item.id] ? 1 : 0), 0);
}

function suggestedFilename(forDownload) {
  const name = state.candidate.trim() || 'candidate';
  const topic = currentTopic();
  const base = `${slug(name)}-itorizon-ba-${topic ? slug(topic.title) : 'video-take'}`;
  const mp4 = !forDownload || !rec.blob || /mp4/.test(rec.mime);
  return `${base}.${mp4 ? 'mp4' : 'webm'}`;
}

function markSaved() {
  const el = $('#saveState');
  if (!el) return;
  el.textContent = state.savedAt
    ? `Saved · ${new Date(state.savedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    : 'Saved in this browser';
}

function saveNow(updateLabel = true) {
  state.savedAt = Date.now();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    /* storage may be unavailable; the app still works in this session */
  }
  if (updateLabel) markSaved();
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => saveNow(true), 500);
}

function toast(message, tone) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.toggle('is-warn', tone === 'warn');
  el.classList.add('is-visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.classList.remove('is-visible'), 2600);
}

/* =========================================================
   Topic library
   ========================================================= */

let activeCat = 'all';
let searchQuery = '';

function renderTopics() {
  const grid = $('#topicGrid');
  const empty = $('#topicEmpty');
  const q = searchQuery.trim().toLowerCase();
  const list = TOPICS.filter((t) => {
    const catOk = activeCat === 'all' || t.cat === activeCat;
    const haystack = `${t.title} ${t.points.join(' ')} ${CATEGORIES[t.cat].label}`.toLowerCase();
    return catOk && (!q || haystack.includes(q));
  });

  grid.innerHTML = list.map((t) => `
    <button type="button" class="topic-card${state.topicId === t.id ? ' is-selected' : ''}" data-topic="${t.id}" aria-pressed="${state.topicId === t.id}">
      <span class="topic-cat">${esc(CATEGORIES[t.cat].label)}</span>
      <span class="topic-title">${esc(t.title)}</span>
      <span class="topic-hint">${t.points.length} cue points</span>
      <span class="topic-check"><svg class="icon"><use href="#i-check"></use></svg></span>
    </button>
  `).join('');

  empty.hidden = list.length > 0;
}

function renderTopicDetail() {
  const detail = $('#topicDetail');
  const topic = currentTopic();
  const dock = $('#selectionDock');
  dock.hidden = !topic;
  $('#step-topic').classList.toggle('has-dock', !!topic);
  if (topic) $('#dockTitle').textContent = topic.title;
  if (!topic) {
    detail.hidden = true;
    detail.innerHTML = '';
    return;
  }
  detail.hidden = false;
  detail.innerHTML = `
    <div class="topic-detail-head">
      <div>
        <span class="section-label">Selected · ${esc(CATEGORIES[topic.cat].label)}</span>
        <h2>${esc(topic.title)}</h2>
      </div>
      <span class="time-range">${fmt(state.target)} target</span>
    </div>
    <ul class="detail-points">
      ${topic.points.map((p) => `<li>${esc(p)}</li>`).join('')}
    </ul>
    <p class="detail-note">Use these as raw material — don’t read them out. The dock below keeps your next step in reach.</p>
  `;
}

function renderTopicNotes() {
  const el = $('#topicNotes');
  const topic = currentTopic();
  if (!topic) {
    el.innerHTML = `
      <div class="section-label">No topic yet</div>
      <p class="mini">Choose a subject in step 01 and its cue points will appear here as raw material.</p>
      <button class="btn btn-ghost" data-goto="topic" style="margin-top:10px">Choose a topic</button>
    `;
    return;
  }
  el.innerHTML = `
    <div class="section-label">Raw material</div>
    <h4>${esc(topic.title)}</h4>
    <ul>${topic.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    <p class="mini">Pick the two points that match your own view. The brief rewards opinion with evidence.</p>
  `;
}

/* =========================================================
   Prepare
   ========================================================= */

function updateRanges() {
  const b = boundaries();
  SEGMENTS.forEach((seg, i) => {
    const el = document.querySelector(`[data-range="${seg.id}"]`);
    if (el) el.textContent = `${fmt(b[i])}–${fmt(b[i + 1])}`;
  });
}

function updateFieldMeta(field) {
  const count = words(state.fields[field]);
  const cEl = document.querySelector(`[data-count="${field}"]`);
  const eEl = document.querySelector(`[data-est="${field}"]`);
  if (cEl) cEl.textContent = count === 1 ? '1 word' : `${count} words`;
  if (eEl) eEl.textContent = `≈ ${fmt(estSec(count))}`;
}

function renderTimeline() {
  const list = $('#timelineList');
  const b = boundaries();
  list.innerHTML = SEGMENTS.map((seg, i) => {
    const target = b[i + 1] - b[i];
    const est = segmentSeconds(i);
    const ratio = target > 0 ? est / target : 0;
    let cls = '';
    if (est > 0) {
      if (ratio < 0.55) cls = 'is-low';
      else if (ratio > 1.45) cls = 'is-over';
      else cls = 'is-good';
    }
    const width = est > 0 ? clamp(ratio * 100, 4, 100) : 0;
    return `
      <div class="tl-row ${cls}">
        <span class="tl-label"><i class="tl-dot"></i>${esc(seg.label)}</span>
        <span class="tl-time">${fmt(b[i])}–${fmt(b[i + 1])}</span>
        <div class="tl-bar"><i style="width:${width}%"></i></div>
      </div>
    `;
  }).join('');

  const total = totalSeconds();
  $('#totalEstimate').textContent = fmt(total);

  const verdictEl = $('#totalVerdict');
  let verdict = 'Fill a few lines to see your timing.';
  let warn = false;
  if (totalWords() > 0) {
    if (total > 183) {
      verdict = 'Over the 3:00 limit — cut a point or tighten the example.';
      warn = true;
    } else if (total < 110) {
      verdict = 'Well under two minutes — add a point or a concrete example.';
      warn = true;
    } else if (Math.abs(total - state.target) <= 20) {
      verdict = 'Close to your target. Leave room for natural pauses.';
    } else if (total < state.target) {
      verdict = 'A little short of your target — slow down or add a line.';
    } else {
      verdict = 'A little long for your target — trim without losing the conclusion.';
    }
  }
  verdictEl.textContent = verdict;
  verdictEl.classList.toggle('is-warn', warn);
}

function updatePrepStats() {
  FIELDS.forEach(updateFieldMeta);
  renderTimeline();
  updateRanges();
  const banner = $('#topicBanner');
  banner.hidden = !!state.topicId;
}

function fillPrepFromState() {
  $$('#prepForm [data-field]').forEach((ta) => {
    ta.value = state.fields[ta.dataset.field] || '';
  });
}

/* =========================================================
   Practice
   ========================================================= */

const prac = {
  running: false,
  elapsed: 0,
  last: 0,
  tick: null,
  current: -1,
  runCounted: false
};

function segmentIndexFor(seconds) {
  const b = boundaries();
  let idx = 0;
  for (let i = 0; i < SEGMENTS.length; i += 1) {
    if (seconds >= b[i]) idx = i;
  }
  return idx;
}

function renderPracticeCards() {
  const b = boundaries();
  $('#practiceTarget').textContent = `/ ${fmt(state.target)}`;
  $('#practiceTicks').innerHTML = b.slice(1, -1)
    .map((v) => `<i style="left:${(v / state.target) * 100}%"></i>`)
    .join('');

  $('#practiceCards').innerHTML = SEGMENTS.map((seg, i) => {
    const lines = seg.fields.map((f) => state.fields[f].trim()).filter(Boolean);
    const body = lines.length
      ? lines.map((line) => `<p>${esc(line)}</p>`).join('')
      : `<p class="is-empty">${esc(seg.empty)}</p>`;
    return `
      <article class="cue${i === 0 ? ' is-current' : ''}" data-cue="${i}">
        <div class="cue-head">
          <h3>${esc(seg.label)}</h3>
          <span>${fmt(b[i])}–${fmt(b[i + 1])}</span>
        </div>
        ${body}
      </article>
    `;
  }).join('');
}

function updateStartButton() {
  const btn = $('#startPauseBtn');
  const label = btn.querySelector('span');
  const use = btn.querySelector('use');
  if (prac.running) {
    label.textContent = 'Pause';
    use.setAttribute('href', '#i-pause');
  } else {
    label.textContent = prac.elapsed >= state.target && prac.elapsed > 0
      ? 'Restart'
      : (prac.elapsed > 0 ? 'Resume' : 'Start');
    use.setAttribute('href', '#i-play');
  }
}

function updatePracticeUI() {
  const b = boundaries();
  $('#practiceTime').textContent = fmt(prac.elapsed);
  $('#practiceFill').style.width = `${clamp((prac.elapsed / state.target) * 100, 0, 100)}%`;

  const idx = segmentIndexFor(prac.elapsed);
  $('#practiceSegment').textContent = SEGMENTS[idx].label;
  $('#practiceNext').textContent = idx < SEGMENTS.length - 1
    ? `next: ${SEGMENTS[idx + 1].label} at ${fmt(b[idx + 1])}`
    : 'finish with your takeaway';

  const cues = $$('#practiceCards .cue');
  cues.forEach((cue, i) => cue.classList.toggle('is-current', i === idx));

  if (idx !== prac.current) {
    prac.current = idx;
    if (prac.running && $('#autoFollow').checked && cues[idx]) {
      cues[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  updateStartButton();
}

function tickPractice() {
  const now = performance.now();
  prac.elapsed += (now - prac.last) / 1000;
  prac.last = now;
  if (prac.elapsed >= state.target) {
    prac.elapsed = state.target;
    updatePracticeUI();
    stopPracticeTimer(true);
    return;
  }
  updatePracticeUI();
}

function startPracticeTimer() {
  if (prac.running) return;
  if (prac.elapsed >= state.target) {
    prac.elapsed = 0;
    prac.runCounted = false;
    prac.current = -1;
  }
  prac.running = true;
  prac.last = performance.now();
  prac.tick = setInterval(tickPractice, 100);
  updatePracticeUI();
}

function pausePractice() {
  const wasRunning = prac.running;
  prac.running = false;
  clearInterval(prac.tick);
  prac.tick = null;
  if (wasRunning) maybeCountPracticeRun();
  updatePracticeUI();
}

function maybeCountPracticeRun() {
  if (prac.runCounted) return;
  if (prac.elapsed >= state.target * 0.85) {
    prac.runCounted = true;
    state.practiceRuns = (state.practiceRuns || 0) + 1;
    saveNow();
    updateReadiness();
    updateNavDots();
  }
}

function stopPracticeTimer(completed) {
  prac.running = false;
  clearInterval(prac.tick);
  prac.tick = null;
  if (completed) {
    const before = state.practiceRuns || 0;
    maybeCountPracticeRun();
    if ((state.practiceRuns || 0) > before) {
      toast('Practice take complete. Review the pace, then record.');
    }
  }
  updatePracticeUI();
}

function resetPractice() {
  clearInterval(prac.tick);
  prac.tick = null;
  prac.running = false;
  prac.elapsed = 0;
  prac.runCounted = false;
  prac.current = -1;
  updatePracticeUI();
}

function togglePractice() {
  if (prac.running) pausePractice();
  else startPracticeTimer();
}

function toggleFullscreen() {
  const stage = $('#practiceStage');
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  } else if (stage.requestFullscreen) {
    stage.requestFullscreen().catch(() => toast('Full screen is unavailable in this browser.', 'warn'));
  }
}

/* =========================================================
   Recording
   ========================================================= */

const rec = {
  stream: null,
  recorder: null,
  chunks: [],
  state: 'idle',
  startedAt: 0,
  pauseAt: 0,
  elapsed: 0,
  lastDuration: 0,
  tick: null,
  countdownTimer: null,
  blob: null,
  url: null,
  mime: '',
  camId: '',
  micId: '',
  audioCtx: null,
  analyser: null,
  dataArr: null,
  meterRaf: 0,
  requesting: false
};

let fileUrl = null;

function showRecError(message) {
  const el = $('#recError');
  el.textContent = message;
  el.hidden = false;
}

function clearRecError() {
  const el = $('#recError');
  el.hidden = true;
  el.textContent = '';
}

function setRecState(next) {
  rec.state = next;
  const supported = typeof window.MediaRecorder !== 'undefined';
  const canRecord = !!rec.stream && supported && (next === 'ready' || next === 'done');

  const recordLabel = $('#recordBtn span:last-child');
  if (recordLabel) recordLabel.textContent = next === 'done' ? 'Record again' : 'Record';
  $('#recordBtn').disabled = !canRecord;
  $('#pauseBtn').disabled = !(next === 'recording' || next === 'paused');
  $('#stopBtn').disabled = !(next === 'recording' || next === 'paused');
  $('#enableCamBtn').disabled = ['ready', 'recording', 'paused', 'counting'].includes(next);

  const camLabel = $('#enableCamBtn span');
  if (camLabel) camLabel.textContent = rec.stream ? 'Camera on' : 'Enable camera';

  const pauseLabel = $('#pauseBtn span');
  const pauseUse = $('#pauseBtn use');
  if (next === 'paused') {
    pauseLabel.textContent = 'Resume';
    pauseUse.setAttribute('href', '#i-play');
  } else {
    pauseLabel.textContent = 'Pause';
    pauseUse.setAttribute('href', '#i-pause');
  }

  $('#recBadge').hidden = !(next === 'recording' || next === 'paused');
  if (!(next === 'recording' || next === 'paused')) $('#recBadge').classList.remove('is-over');
}

function stopMeter() {
  if (rec.meterRaf) cancelAnimationFrame(rec.meterRaf);
  rec.meterRaf = 0;
  rec.analyser = null;
  rec.dataArr = null;
  if (rec.audioCtx) {
    try { rec.audioCtx.close(); } catch (err) { /* ignore */ }
    rec.audioCtx = null;
  }
  const meter = $('#micMeter');
  if (meter) meter.classList.remove('is-live', 'is-hot');
  $$('#micMeter i').forEach((bar) => bar.classList.remove('is-on'));
}

function startMeter(stream) {
  stopMeter();
  if (!stream.getAudioTracks().length) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  try {
    rec.audioCtx = new AudioCtx();
    if (rec.audioCtx.state === 'suspended') {
      rec.audioCtx.resume().catch(() => {});
    }
    const source = rec.audioCtx.createMediaStreamSource(stream);
    rec.analyser = rec.audioCtx.createAnalyser();
    rec.analyser.fftSize = 512;
    source.connect(rec.analyser);
    rec.dataArr = new Uint8Array(rec.analyser.fftSize);
    const meter = $('#micMeter');
    const bars = $$('#micMeter i');
    meter.classList.add('is-live');

    const loop = () => {
      if (!rec.analyser || !rec.dataArr) return;
      rec.analyser.getByteTimeDomainData(rec.dataArr);
      let sum = 0;
      for (let i = 0; i < rec.dataArr.length; i += 1) {
        const v = (rec.dataArr[i] - 128) / 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / rec.dataArr.length);
      const level = Math.min(1, rms * 6);
      const lit = Math.round(level * bars.length);
      bars.forEach((bar, i) => bar.classList.toggle('is-on', i < lit));
      meter.classList.toggle('is-hot', level > 0.85);
      rec.meterRaf = requestAnimationFrame(loop);
    };
    loop();
  } catch (err) {
    /* the meter is optional */
  }
}

function stopStream() {
  stopMeter();
  if (rec.stream) {
    rec.stream.getTracks().forEach((track) => track.stop());
    rec.stream = null;
  }
  const preview = $('#cameraPreview');
  preview.srcObject = null;
  $('#previewEmpty').hidden = false;
}

async function populateDevices() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cams = devices.filter((d) => d.kind === 'videoinput');
    const mics = devices.filter((d) => d.kind === 'audioinput');
    $('#camSelect').innerHTML = '<option value="">Default camera</option>' +
      cams.map((d, i) => `<option value="${esc(d.deviceId)}">${esc(d.label || `Camera ${i + 1}`)}</option>`).join('');
    $('#micSelect').innerHTML = '<option value="">Default microphone</option>' +
      mics.map((d, i) => `<option value="${esc(d.deviceId)}">${esc(d.label || `Microphone ${i + 1}`)}</option>`).join('');
    if (rec.camId) $('#camSelect').value = rec.camId;
    if (rec.micId) $('#micSelect').value = rec.micId;
  } catch (err) {
    /* labels are a nicety */
  }
}

async function enableCamera() {
  clearRecError();
  if (rec.requesting) return;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showRecError('This browser does not expose a camera API. Use Chrome, Edge, Safari, or Firefox — and serve the page from http://localhost or https.');
    return;
  }
  if (window.isSecureContext === false) {
    showRecError('Camera access needs a secure page. Serve this folder at http://localhost:8000 (or use https) and try again.');
    return;
  }

  rec.requesting = true;
  stopStream();
  setRecState('idle');
  $('#enableCamBtn').disabled = true;
  const startingLabel = $('#enableCamBtn span');
  if (startingLabel) startingLabel.textContent = 'Starting camera…';

  const constraints = {
    video: rec.camId
      ? { deviceId: { exact: rec.camId }, width: { ideal: 1280 }, height: { ideal: 720 } }
      : { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'user' },
    audio: rec.micId
      ? { deviceId: { exact: rec.micId }, echoCancellation: true, noiseSuppression: true }
      : { echoCancellation: true, noiseSuppression: true }
  };

  try {
    rec.stream = await navigator.mediaDevices.getUserMedia(constraints);
    const preview = $('#cameraPreview');
    preview.srcObject = rec.stream;
    preview.muted = true;
    preview.play().catch(() => {});
    $('#previewEmpty').hidden = true;
    setRecState('ready');
    startMeter(rec.stream);
    populateDevices();
    if (typeof window.MediaRecorder === 'undefined') {
      showRecError('The camera works, but this browser cannot record video here. Record with your phone or another browser, then load the file below to check it.');
    }
  } catch (err) {
    stopStream();
    setRecState('idle');
    const messages = {
      NotAllowedError: 'Camera or microphone permission was denied. Allow access from the address bar and try again.',
      PermissionDeniedError: 'Camera or microphone permission was denied. Allow access from the address bar and try again.',
      NotFoundError: 'No camera was found. Connect one or continue on a phone.',
      DevicesNotFoundError: 'No camera was found. Connect one or continue on a phone.',
      NotReadableError: 'The camera is busy in another app. Close the other app and try again.',
      TrackStartError: 'The camera could not start. Close other apps using it and try again.',
      OverconstrainedError: 'The selected camera is unavailable. Choose a different device or the default.'
    };
    showRecError(messages[err.name] || `Could not start the camera: ${err.message || err.name}`);
  } finally {
    rec.requesting = false;
  }
}

function updateRecClock() {
  if (rec.state === 'recording') {
    rec.elapsed = (performance.now() - rec.startedAt) / 1000;
  }
  $('#recTimer').textContent = fmt(rec.elapsed);
  const over = rec.elapsed > 180;
  $('#recBadge').classList.toggle('is-over', over);
  if (over) {
    $('#recGuide').textContent = 'Past 3:00 — stop and record a tighter take, or trim the file.';
  } else if (rec.elapsed >= 120) {
    $('#recGuide').textContent = 'You are inside the 2–3 minute window. Finish cleanly.';
  } else {
    $('#recGuide').textContent = 'Aim for 2:00–3:00. Look into the lens, not at the preview.';
  }
}

function chooseMime() {
  const candidates = [
    'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
    'video/mp4',
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm'
  ];
  if (typeof MediaRecorder.isTypeSupported !== 'function') return '';
  return candidates.find((type) => {
    try { return MediaRecorder.isTypeSupported(type); } catch (err) { return false; }
  }) || '';
}

function beginRecording() {
  clearRecError();
  $('#takeResult').hidden = true;
  rec.chunks = [];
  rec.elapsed = 0;
  rec.lastDuration = 0;
  rec.mime = '';

  const mime = chooseMime();
  let recorder;
  try {
    recorder = mime
      ? new MediaRecorder(rec.stream, { mimeType: mime, videoBitsPerSecond: 4000000, audioBitsPerSecond: 128000 })
      : new MediaRecorder(rec.stream, { videoBitsPerSecond: 4000000, audioBitsPerSecond: 128000 });
  } catch (err) {
    try {
      recorder = new MediaRecorder(rec.stream);
    } catch (err2) {
      showRecError('This browser could not start recording. Try Chrome, Edge, or Safari, or record on your phone and load the file below.');
      setRecState(rec.stream ? 'ready' : 'idle');
      return;
    }
  }

  rec.recorder = recorder;
  rec.mime = recorder.mimeType || mime || 'video/webm';
  recorder.ondataavailable = (event) => {
    if (event.data && event.data.size) rec.chunks.push(event.data);
  };
  recorder.onstop = finalizeRecording;
  recorder.onerror = (event) => {
    const msg = event.error && event.error.message ? event.error.message : 'unknown error';
    showRecError(`Recording stopped unexpectedly: ${msg}`);
  };

  try {
    recorder.start(500);
  } catch (err) {
    showRecError('Recording could not start. Reload the page and try again.');
    setRecState(rec.stream ? 'ready' : 'idle');
    return;
  }

  rec.startedAt = performance.now();
  rec.tick = setInterval(updateRecClock, 200);
  setRecState('recording');
  updateRecClock();
}

function startRecording() {
  if (rec.state === 'recording' || rec.state === 'paused' || rec.state === 'counting') return;
  if (!rec.stream) {
    enableCamera();
    return;
  }
  if (typeof window.MediaRecorder === 'undefined') {
    showRecError('This browser cannot record video directly. Record on your phone or use another browser, then load the file below to review it.');
    return;
  }

  clearRecError();
  $('#countdown').hidden = false;
  setRecState('counting');
  let count = 3;
  $('#countdown').textContent = String(count);

  rec.countdownTimer = setInterval(() => {
    count -= 1;
    if (count > 0) {
      $('#countdown').textContent = String(count);
    } else {
      clearInterval(rec.countdownTimer);
      rec.countdownTimer = null;
      $('#countdown').hidden = true;
      beginRecording();
    }
  }, 800);
}

function togglePause() {
  if (!rec.recorder) return;
  if (rec.state === 'recording') {
    try { rec.recorder.pause(); } catch (err) { return; }
    rec.pauseAt = performance.now();
    clearInterval(rec.tick);
    rec.tick = null;
    setRecState('paused');
    updateRecClock();
  } else if (rec.state === 'paused') {
    try { rec.recorder.resume(); } catch (err) { return; }
    rec.startedAt += performance.now() - rec.pauseAt;
    rec.tick = setInterval(updateRecClock, 200);
    setRecState('recording');
    updateRecClock();
  }
}

function stopRecording() {
  if (rec.state !== 'recording' && rec.state !== 'paused') return;
  if (rec.state === 'recording') {
    rec.elapsed = (performance.now() - rec.startedAt) / 1000;
  }
  rec.lastDuration = rec.elapsed;
  clearInterval(rec.tick);
  rec.tick = null;
  $('#recBadge').hidden = true;
  try { rec.recorder.stop(); } catch (err) { /* ignore */ }
  setRecState('done');
}

function setTakeVerdict(duration) {
  const el = $('#takeVerdict');
  el.classList.remove('is-ok', 'is-warn', 'is-bad');
  if (!Number.isFinite(duration) || duration <= 0) {
    el.textContent = 'Duration could not be measured. Watch the take once to confirm it.';
    el.classList.add('is-warn');
  } else if (duration < 119.5) {
    el.textContent = `This take is ${fmt(duration)} — under 2:00. Aim for at least two minutes.`;
    el.classList.add('is-warn');
  } else if (duration > 180.5) {
    el.textContent = `This take is ${fmt(duration)} — over 3:00. Record a tighter version or trim it.`;
    el.classList.add('is-bad');
  } else {
    el.textContent = `Length ${fmt(duration)} — within the 2–3 minute window.`;
    el.classList.add('is-ok');
  }
}

function finalizeRecording() {
  if (!rec.chunks.length) {
    showRecError('No recording data was produced. Try again, and keep the tab in the foreground while recording.');
    setRecState(rec.stream ? 'ready' : 'idle');
    return;
  }
  const type = /mp4/.test(rec.mime) ? 'video/mp4' : 'video/webm';
  rec.blob = new Blob(rec.chunks, { type });
  if (rec.url) URL.revokeObjectURL(rec.url);
  rec.url = URL.createObjectURL(rec.blob);

  const playback = $('#takePlayback');
  playback.src = rec.url;
  playback.muted = false;

  const size = (rec.blob.size / (1024 * 1024)).toFixed(1);
  $('#takeMeta').textContent = `${fmt(rec.lastDuration)} duration · ${size} MB · ${/mp4/.test(type) ? 'MP4' : 'WebM'}`;
  setTakeVerdict(rec.lastDuration);

  const download = $('#downloadBtn');
  download.href = rec.url;
  download.download = suggestedFilename(true);

  $('#takeResult').hidden = false;
  recordingDone = true;
  updateReadiness();
  updateNavDots();
  $('#takeResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  toast('Take ready. Watch it back once before submitting.');
}

function leaveRecord() {
  if (rec.state === 'counting' && rec.countdownTimer) {
    clearInterval(rec.countdownTimer);
    rec.countdownTimer = null;
    $('#countdown').hidden = true;
    setRecState(rec.stream ? 'ready' : 'idle');
  }
  if (rec.state === 'recording' || rec.state === 'paused') {
    stopRecording();
  }
  setTimeout(() => {
    if (state.step === 'record') return;
    stopStream();
    if (rec.state !== 'done') setRecState('idle');
    else setRecState('done');
  }, 700);
}

/* =========================================================
   Review, summary, exports
   ========================================================= */

function updateReview() {
  const count = checkedCount();
  const total = CHECK_ITEMS.length;
  const pct = Math.round((count / total) * 100);
  $('#reviewPct').textContent = `${pct}%`;
  $('#reviewRing').style.strokeDashoffset = String(264 * (1 - count / total));

  const note = $('#reviewNote');
  if (count === 0) note.textContent = 'Nothing checked yet.';
  else if (count < 4) note.textContent = 'Early pass — keep checking the take.';
  else if (count < total) note.textContent = `${total - count} check${total - count === 1 ? '' : 's'} still open. Fix what matters before submitting.`;
  else note.textContent = 'All seven checks passed. Ready to submit.';
}

function updateSummary() {
  const topic = currentTopic();
  const points = [state.fields.point1, state.fields.point2, state.fields.point3]
    .map((p) => p.trim())
    .filter(Boolean);
  const lines = [
    'ITOrizon · Business Analyst video submission',
    '',
    `Candidate: ${state.candidate.trim() || '—'}`,
    `Topic: ${topic ? topic.title : '—'}${topic ? ` (Category ${topic.cat})` : ''}`,
    `Target length: ${fmt(state.target)} · notes estimate ${fmt(totalSeconds())}`,
    `Suggested file: ${suggestedFilename(!!rec.blob)}`,
    '',
    `Opening: ${state.fields.intro.trim() || '—'}`,
    'Key points:',
    ...(points.length ? points.map((p, i) => `  ${i + 1}. ${p}`) : ['  —']),
    `Example: ${state.fields.example.trim() || '—'}`,
    `Opinion: ${state.fields.opinion.trim() || '—'}`,
    `Closing: ${state.fields.conclusion.trim() || '—'}`,
    '',
    `Self-review: ${checkedCount()} of ${CHECK_ITEMS.length} checks passed`
  ];
  $('#summaryText').textContent = lines.join('\n');
}

async function copySummary() {
  const text = $('#summaryText').textContent;
  try {
    await navigator.clipboard.writeText(text);
    toast('Summary copied to the clipboard.');
  } catch (err) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (err2) { ok = false; }
    document.body.removeChild(area);
    toast(ok ? 'Summary copied to the clipboard.' : 'Copy failed — select the text and copy it manually.', ok ? undefined : 'warn');
  }
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function buildMarkdown() {
  const topic = currentTopic();
  const b = boundaries();
  const structure = SEGMENTS.map((seg, i) => {
    const content = seg.fields.map((f) => state.fields[f].trim()).filter(Boolean);
    return [
      `### ${seg.label} (${fmt(b[i])}–${fmt(b[i + 1])})`,
      ...(content.length ? content.map((c) => `- ${c}`) : ['- _Not written yet_'])
    ].join('\n');
  }).join('\n\n');

  const checks = CHECK_ITEMS
    .map((item) => `- [${state.checklist[item.id] ? 'x' : ' '}] ${item.label}`)
    .join('\n');

  return [
    '# ITOrizon Business Analyst video task — plan',
    '',
    `**Candidate:** ${state.candidate.trim() || '—'}`,
    `**Topic:** ${topic ? topic.title : '—'}${topic ? ` (Category ${topic.cat})` : ''}`,
    `**Target length:** ${fmt(state.target)} · notes estimate ${fmt(totalSeconds())}`,
    `**Suggested file:** ${suggestedFilename(!!rec.blob)}`,
    '',
    '## Structure',
    '',
    structure,
    '',
    '## Self-review',
    '',
    checks,
    '',
    `**Reflection:** ${state.reflection.trim() || '—'}`,
    '',
    `_Prepared ${new Date().toLocaleDateString()} · independent practice plan_`
  ].join('\n');
}

function exportMarkdown() {
  downloadBlob(new Blob([buildMarkdown()], { type: 'text/markdown;charset=utf-8' }), 'itorizon-ba-video-plan.md');
  toast('Plan downloaded.');
}

function openPrintPlan() {
  const topic = currentTopic();
  const b = boundaries();
  const blocks = SEGMENTS.map((seg, i) => {
    const content = seg.fields.map((f) => state.fields[f].trim()).filter(Boolean);
    return `
      <section class="block">
        <div class="when">${fmt(b[i])} – ${fmt(b[i + 1])}</div>
        <h2>${esc(seg.label)}</h2>
        ${content.length ? content.map((c) => `<p>${esc(c)}</p>`).join('') : '<p class="muted">—</p>'}
      </section>`;
  }).join('');

  const checks = CHECK_ITEMS.map((item) => `
    <li><span class="box">${state.checklist[item.id] ? '&#10003;' : ''}</span>${esc(item.label)}</li>
  `).join('');

  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<title>ITOrizon BA video plan</title>
<style>
  @page { margin: 18mm; }
  body { font-family: Georgia, "Times New Roman", serif; color: #1c1a16; line-height: 1.55; margin: 0; }
  h1 { font-size: 26px; margin: 0 0 6px; }
  h2 { font-size: 16px; margin: 0 0 4px; }
  .eyebrow { font-family: Helvetica, Arial, sans-serif; font-size: 9px; letter-spacing: .14em; text-transform: uppercase; color: #6f685a; }
  .meta { font-family: Helvetica, Arial, sans-serif; font-size: 11px; color: #514c42; margin: 10px 0 22px; padding-bottom: 12px; border-bottom: 1px solid #d8d0c0; }
  .block { padding: 12px 0; border-bottom: 1px solid #e5ddd0; page-break-inside: avoid; }
  .when { font-family: "Courier New", monospace; font-size: 10px; color: #0f5b4c; margin-bottom: 2px; }
  p { margin: 3px 0; font-size: 12px; white-space: pre-wrap; }
  .muted { color: #8a8272; }
  ul.checks { list-style: none; padding: 0; font-family: Helvetica, Arial, sans-serif; font-size: 11px; }
  ul.checks li { margin: 4px 0; }
  .box { display: inline-block; width: 11px; height: 11px; border: 1px solid #8a8272; margin-right: 7px; text-align: center; font-size: 9px; line-height: 11px; }
  .foot { margin-top: 22px; font-family: Helvetica, Arial, sans-serif; font-size: 9px; color: #7d7668; }
  .reflection { font-size: 12px; white-space: pre-wrap; }
</style></head>
<body>
  <div class="eyebrow">ITOrizon · Business Analyst screening</div>
  <h1>Video task plan</h1>
  <div class="meta">
    <strong>${esc(state.candidate.trim() || 'Candidate')}</strong> · ${esc(topic ? topic.title : 'No topic selected')}<br>
    Target ${fmt(state.target)} · notes estimate ${fmt(totalSeconds())} · suggested file ${esc(suggestedFilename(!!rec.blob))}
  </div>
  ${blocks}
  <section class="block">
    <h2>Self-review</h2>
    <ul class="checks">${checks}</ul>
  </section>
  <section class="block">
    <h2>Reflection</h2>
    <p class="reflection">${esc(state.reflection.trim() || '—')}</p>
  </section>
  <p class="foot">Independent practice plan · prepared ${esc(new Date().toLocaleDateString())}</p>
</body></html>`;

  const win = window.open('', '_blank');
  if (!win) {
    toast('Allow pop-ups to print the plan.', 'warn');
    return;
  }
  win.document.open();
  win.document.write(html);
  win.document.close();
  setTimeout(() => {
    try { win.focus(); win.print(); } catch (err) { /* the window is still readable */ }
  }, 350);
}

/* =========================================================
   Progress
   ========================================================= */

function updateReadiness() {
  const topicPts = state.topicId ? 15 : 0;
  const targetWords = state.target * (WPM / 60);
  const prepPts = 30 * clamp(totalWords() / Math.max(60, targetWords * 0.75), 0, 1);
  const practicePts = 15 * clamp((state.practiceRuns || 0) / 2, 0, 1);
  const recordPts = recordingDone ? 20 : 0;
  const reviewPts = 20 * (checkedCount() / CHECK_ITEMS.length);
  const pct = Math.round(topicPts + prepPts + practicePts + recordPts + reviewPts);

  $('#readyPct').textContent = `${pct}%`;
  $('#readyFill').style.width = `${pct}%`;

  let next = 'Start by choosing a topic.';
  if (state.topicId) {
    if (totalWords() < 40) {
      next = 'Add an opening, two points, and a closing line.';
    } else if (!recordingDone) {
      next = (state.practiceRuns || 0) < 1
        ? 'Practise once against the timer.'
        : 'Record your take in the browser.';
    } else if (checkedCount() < CHECK_ITEMS.length) {
      next = 'Finish the self-review checklist.';
    } else {
      next = 'Ready to submit. Download your take first.';
    }
  }
  $('#readyNext').textContent = next;
}

function updateNavDots() {
  const done = {
    brief: true,
    topic: !!state.topicId,
    prepare: !!(state.fields.intro.trim() && state.fields.point1.trim() && state.fields.conclusion.trim()),
    practice: (state.practiceRuns || 0) > 0,
    record: recordingDone,
    review: checkedCount() === CHECK_ITEMS.length
  };
  Object.entries(done).forEach(([key, value]) => {
    const dot = document.querySelector(`[data-dot="${key}"]`);
    if (dot) dot.parentElement.classList.toggle('is-done', value);
  });
}

/* =========================================================
   Navigation
   ========================================================= */

function goStep(step) {
  if (!STEPS.includes(step)) step = 'brief';
  const previous = state.step;

  if (previous === 'practice' && step !== 'practice') pausePractice();
  if (previous === 'record' && step !== 'record') leaveRecord();

  state.step = step;
  saveNow();

  $$('.step').forEach((section) => section.classList.toggle('is-active', section.dataset.step === step));
  $$('.nav-item').forEach((item) => item.classList.toggle('is-active', item.dataset.nav === step));
  window.scrollTo({ top: 0, behavior: 'auto' });

  if (step === 'practice') {
    renderPracticeCards();
    updatePracticeUI();
  }
  if (step === 'topic') {
    renderTopicDetail();
  }
  if (step === 'review') {
    updateReview();
    updateSummary();
  }
}

/* =========================================================
   Wiring
   ========================================================= */

function init() {
  if (!STEPS.includes(state.step)) state.step = 'brief';

  /* nav & jump buttons */
  document.addEventListener('click', (event) => {
    const nav = event.target.closest('[data-nav]');
    if (nav) {
      goStep(nav.dataset.nav);
      return;
    }
    const jump = event.target.closest('[data-goto]');
    if (jump) {
      goStep(jump.dataset.goto);
    }
  });

  /* topics */
  $('#topicSearch').addEventListener('input', (event) => {
    searchQuery = event.target.value;
    activeCat = 'all';
    $$('#topicFilters .chip').forEach((chip) => chip.classList.toggle('is-active', chip.dataset.cat === 'all'));
    renderTopics();
  });
  $('#topicFilters').addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (!chip) return;
    activeCat = chip.dataset.cat;
    $$('#topicFilters .chip').forEach((c) => c.classList.toggle('is-active', c === chip));
    renderTopics();
  });
  $('#topicGrid').addEventListener('click', (event) => {
    const card = event.target.closest('[data-topic]');
    if (!card) return;
    const id = Number(card.dataset.topic);
    state.topicId = id;
    saveNow();
    renderTopics();
    renderTopicDetail();
    renderTopicNotes();
    updatePrepStats();
    updateReadiness();
    updateNavDots();
    updateSummary();
  });

  /* prepare */
  $('#targetSelect').addEventListener('change', (event) => {
    state.target = Number(event.target.value) || 150;
    updateRanges();
    updatePrepStats();
    renderPracticeCards();
    updatePracticeUI();
    updateSummary();
    updateReadiness();
    scheduleSave();
  });

  $$('#prepForm [data-field]').forEach((ta) => {
    ta.addEventListener('input', () => {
      state.fields[ta.dataset.field] = ta.value;
      updateFieldMeta(ta.dataset.field);
      renderTimeline();
      updateReadiness();
      updateNavDots();
      updateSummary();
      scheduleSave();
    });
  });

  /* practice */
  $('#startPauseBtn').addEventListener('click', togglePractice);
  $('#resetBtn').addEventListener('click', () => {
    resetPractice();
    toast('Timer reset.');
  });
  $('#fullBtn').addEventListener('click', toggleFullscreen);

  document.addEventListener('keydown', (event) => {
    if (state.step !== 'practice') return;
    if (event.target.closest('input, textarea, select, button, a, summary')) return;
    if (event.code === 'Space') {
      event.preventDefault();
      togglePractice();
    } else if (event.key === 'r' || event.key === 'R') {
      resetPractice();
    } else if (event.key === 'f' || event.key === 'F') {
      toggleFullscreen();
    }
  });

  /* record */
  const preview = $('#cameraPreview');
  $('#mirrorToggle').addEventListener('change', (event) => {
    preview.classList.toggle('is-mirrored', event.target.checked);
  });
  preview.classList.toggle('is-mirrored', $('#mirrorToggle').checked);

  $('#enableCamBtn').addEventListener('click', enableCamera);
  $('#recordBtn').addEventListener('click', startRecording);
  $('#pauseBtn').addEventListener('click', togglePause);
  $('#stopBtn').addEventListener('click', stopRecording);
  $('#retakeBtn').addEventListener('click', async () => {
    if (!rec.stream) {
      await enableCamera();
      if (!rec.stream) return;
    }
    startRecording();
  });
  $('#downloadBtn').addEventListener('click', () => {
    if (!rec.blob) return;
    $('#downloadBtn').download = suggestedFilename(true);
  });

  $('#camSelect').addEventListener('change', (event) => {
    rec.camId = event.target.value;
    if (rec.state === 'ready' || rec.state === 'done') enableCamera();
  });
  $('#micSelect').addEventListener('change', (event) => {
    rec.micId = event.target.value;
    if (rec.state === 'ready' || rec.state === 'done') enableCamera();
  });

  $('#fileInput').addEventListener('change', () => {
    const file = $('#fileInput').files && $('#fileInput').files[0];
    if (!file) return;
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    fileUrl = URL.createObjectURL(file);
    const video = $('#fileVideo');
    video.src = fileUrl;
    $('#fileReview').hidden = false;
    const meta = $('#fileMeta');
    const verdict = $('#fileVerdict');
    meta.textContent = `${file.name} · ${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    verdict.className = 'verdict';
    verdict.textContent = 'Reading duration…';
    video.onloadedmetadata = () => {
      const duration = video.duration;
      meta.textContent = `${file.name} · ${fmt(duration)} · ${(file.size / (1024 * 1024)).toFixed(1)} MB · ${file.type || 'video'}`;
      verdict.classList.remove('is-ok', 'is-warn', 'is-bad');
      if (!Number.isFinite(duration) || duration <= 0) {
        verdict.textContent = 'Duration unavailable in this browser — check it in your video player.';
        verdict.classList.add('is-warn');
      } else if (duration < 119.5) {
        verdict.textContent = 'Under 2:00 — the brief asks for 2–3 minutes.';
        verdict.classList.add('is-warn');
      } else if (duration > 180.5) {
        verdict.textContent = 'Over 3:00 — trim before submitting.';
        verdict.classList.add('is-bad');
      } else {
        verdict.textContent = 'Within the 2–3 minute window.';
        verdict.classList.add('is-ok');
      }
    };
  });

  /* review */
  $('#checklist').addEventListener('change', (event) => {
    const input = event.target.closest('input[data-check]');
    if (!input) return;
    state.checklist[input.dataset.check] = input.checked;
    updateReview();
    updateReadiness();
    updateNavDots();
    updateSummary();
    scheduleSave();
  });

  $('#candidateName').addEventListener('input', (event) => {
    state.candidate = event.target.value;
    updateSummary();
    scheduleSave();
  });
  $('#reflection').addEventListener('input', (event) => {
    state.reflection = event.target.value;
    scheduleSave();
  });

  $('#copySummary').addEventListener('click', copySummary);
  $('#copySummary2').addEventListener('click', copySummary);
  $('#exportMd').addEventListener('click', exportMarkdown);
  $('#printPlan').addEventListener('click', openPrintPlan);

  /* restore state into the form */
  fillPrepFromState();
  $('#targetSelect').value = String(state.target);
  $('#candidateName').value = state.candidate || '';
  $('#reflection').value = state.reflection || '';
  $$('#checklist input[data-check]').forEach((input) => {
    input.checked = !!state.checklist[input.dataset.check];
  });

  renderTopics();
  renderTopicDetail();
  renderTopicNotes();
  updatePrepStats();
  FIELDS.forEach(updateFieldMeta);
  renderPracticeCards();
  updatePracticeUI();
  updateReview();
  updateSummary();
  updateReadiness();
  updateNavDots();
  markSaved();

  goStep(state.step);
}

init();
