import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

export function downloadResumeHtml() {
  const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Resume - ${PERSONAL_INFO.name}</title>
  <style>
    @page { margin: 15mm; size: A4; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      line-height: 1.45;
      font-size: 11pt;
      margin: 0;
      padding: 24px;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 { margin: 0 0 4px 0; font-size: 22pt; color: #111827; text-transform: uppercase; letter-spacing: 0.5px; }
    .subtitle { font-size: 12pt; font-weight: 600; color: #2563eb; margin-bottom: 8px; }
    .contact-line { font-size: 10pt; color: #4b5563; margin-bottom: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; }
    .contact-line a { color: #2563eb; text-decoration: none; }
    h2 { font-size: 12pt; text-transform: uppercase; border-bottom: 1.5px solid #111827; padding-bottom: 3px; margin: 16px 0 8px 0; letter-spacing: 0.5px; }
    .section-item { margin-bottom: 12px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 11pt; }
    .item-sub { display: flex; justify-content: space-between; font-size: 10pt; color: #4b5563; margin-bottom: 4px; }
    ul { margin: 4px 0 0 0; padding-left: 20px; }
    li { margin-bottom: 3px; font-size: 10pt; }
    .skills-grid { font-size: 10pt; line-height: 1.6; }
    .skills-row { margin-bottom: 4px; }
    .skills-label { font-weight: 600; color: #1f2937; }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.name}</h1>
  <div class="subtitle">${PERSONAL_INFO.headline}</div>
  <div class="contact-line">
    Hyderabad, Telangana, India &bull; Phone: ${PERSONAL_INFO.phone} &bull; Email: <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a><br>
    GitHub: <a href="${PERSONAL_INFO.github}">${PERSONAL_INFO.github}</a> &bull; LinkedIn: <a href="${PERSONAL_INFO.linkedin}">${PERSONAL_INFO.linkedin}</a>
  </div>

  <h2>Education</h2>
  ${EDUCATION.map(
    (edu) => `
    <div class="section-item">
      <div class="item-header">
        <span>${edu.institution}</span>
        <span>${edu.location}</span>
      </div>
      <div class="item-sub">
        <span>${edu.degree}</span>
        <span>${edu.timeline} &bull; <strong>${edu.score}</strong></span>
      </div>
    </div>
  `
  ).join('')}

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    ${SKILL_CATEGORIES.map(
      (cat) => `
      <div class="skills-row">
        <span class="skills-label">${cat.name}:</span>
        <span>${cat.skills.map((s) => s.name).join(', ')}</span>
      </div>
    `
    ).join('')}
  </div>

  <h2>Technical Projects</h2>
  ${PROJECTS.map(
    (p) => `
    <div class="section-item">
      <div class="item-header">
        <span>${p.title} &mdash; ${p.subtitle}</span>
        <span><a href="${p.githubUrl}">GitHub Repository</a></span>
      </div>
      <div class="item-sub">
        <span><strong>Technologies:</strong> ${p.technologies.join(', ')}</span>
      </div>
      <ul>
        <li><strong>Problem:</strong> ${p.problem}</li>
        <li><strong>Solution:</strong> ${p.solution}</li>
        <li><strong>Key Features:</strong> ${p.keyFeatures.slice(0, 4).join('; ')}</li>
        <li><strong>Engineering:</strong> ${p.engineeringHighlights[0]}</li>
      </ul>
    </div>
  `
  ).join('')}

  <h2>Achievements & Activities</h2>
  <ul>
    ${ACHIEVEMENTS.map(
      (ach) => `
      <li><strong>${ach.title}</strong> (${ach.organizer}): ${ach.focus} &ndash; ${ach.description}</li>
    `
    ).join('')}
  </ul>
</body>
</html>`;

  const blob = new Blob([resumeHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Ambadipudi_Rupavani_Resume.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
