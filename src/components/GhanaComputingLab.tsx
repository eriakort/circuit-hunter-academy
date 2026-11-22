import React, { useState } from 'react';

type Props = { missionId: string };

const STEPS = ['Input', 'Process', 'Output', 'Storage'];
const BIT_VALUES = [128, 64, 32, 16, 8, 4, 2, 1];

const LabPanel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="ghana-computing-lab" aria-label="Interactive Ghana JHS 1 Computing visual">
    <h3>{title}</h3>
    <p className="ghana-computing-lab__prompt">Explore the diagram. Change a choice and observe what happens.</p>
    {children}
  </section>
);

const Choice: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button type="button" className={`ghana-computing-lab__choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>
    {label}
  </button>
);

export const GhanaComputingLab: React.FC<Props> = ({ missionId }) => {
  const [systemStep, setSystemStep] = useState(0);
  const [fileType, setFileType] = useState<'text' | 'image' | 'sound'>('text');
  const [weather, setWeather] = useState<'sunny' | 'rainy'>('rainy');
  const [safetyResponse, setSafetyResponse] = useState<'share' | 'check'>('check');
  const [bits, setBits] = useState([0, 0, 0, 0, 1, 1, 0, 1]);
  const [networkRoute, setNetworkRoute] = useState<'wifi' | 'cable'>('wifi');
  const [messageSent, setMessageSent] = useState(false);
  const [application, setApplication] = useState<'report' | 'survey' | 'slides'>('report');
  const [screenHeight, setScreenHeight] = useState(50);
  const [programStep, setProgramStep] = useState(0);
  const [repeatCount, setRepeatCount] = useState(3);
  const [fruitVotes, setFruitVotes] = useState([4, 7, 5]);
  const [researchSource, setResearchSource] = useState<'guide' | 'post'>('guide');
  const [sharePermission, setSharePermission] = useState<'viewer' | 'editor' | 'public'>('viewer');
  const [documentStyle, setDocumentStyle] = useState<'heading' | 'plain'>('heading');
  const [supplyCounts, setSupplyCounts] = useState([2, 3, 1]);
  const [imageDescription, setImageDescription] = useState<'specific' | 'generic'>('specific');
  const [troubleshootingIssue, setTroubleshootingIssue] = useState<'sound' | 'internet' | 'screen'>('sound');
  const [checkCompleted, setCheckCompleted] = useState(false);

  if (missionId === 'gh-jhs1-computing-computer-systems') {
    return (
      <LabPanel title="Follow information through a computer">
        <div className="ghana-computing-lab__flow" role="group" aria-label="Input, process, output, storage">
          {STEPS.map((step, index) => (
            <React.Fragment key={step}>
              <button type="button" className={`ghana-computing-lab__node${systemStep === index ? ' is-active' : ''}`} aria-pressed={systemStep === index} onClick={() => setSystemStep(index)}>
                <span>{['⌨', '▣', '▤', '▱'][index]}</span>{step}
              </button>
              {index < STEPS.length - 1 && <span className="ghana-computing-lab__arrow" aria-hidden="true">→</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="ghana-computing-lab__result" role="status">{[
          'A keyboard provides data and instructions.',
          'The processor follows instructions to work with the data.',
          'A screen or printer presents the result.',
          'A file can be kept for later use.'
        ][systemStep]}</p>
        <button type="button" className="ghana-computing-lab__action" onClick={() => setSystemStep((systemStep + 1) % STEPS.length)}>Next step</button>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-digital-information') {
    const fileDetails = {
      text: { extension: '.txt', example: 'Science-notes.txt', folder: 'School work' },
      image: { extension: '.jpg', example: 'Class-garden.jpg', folder: 'Pictures' },
      sound: { extension: '.mp3', example: 'Interview.mp3', folder: 'Audio' }
    }[fileType];
    return (
      <LabPanel title="Sort a digital file">
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose a file kind">
          <Choice label="Text" active={fileType === 'text'} onClick={() => setFileType('text')} />
          <Choice label="Image" active={fileType === 'image'} onClick={() => setFileType('image')} />
          <Choice label="Sound" active={fileType === 'sound'} onClick={() => setFileType('sound')} />
        </div>
        <div className="ghana-computing-lab__file-card" aria-live="polite">
          <span className="ghana-computing-lab__file-icon" aria-hidden="true">{fileType === 'text' ? 'T' : fileType === 'image' ? '▧' : '♫'}</span>
          <div><strong>{fileDetails.example}</strong><small>{fileDetails.extension} file · save in {fileDetails.folder}</small></div>
        </div>
        <p className="ghana-computing-lab__result" role="status">A clear name and a suitable folder make this file easier to find.</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-algorithms') {
    const bringUmbrella = weather === 'rainy';
    return (
      <LabPanel title="Test a simple decision">
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose the weather">
          <Choice label="Sunny" active={weather === 'sunny'} onClick={() => setWeather('sunny')} />
          <Choice label="Rainy" active={weather === 'rainy'} onClick={() => setWeather('rainy')} />
        </div>
        <div className="ghana-computing-lab__decision" aria-live="polite">
          <span className={`ghana-computing-lab__weather ${weather}`} aria-hidden="true">{weather === 'rainy' ? '☔' : '☀'}</span>
          <span>If the weather is rainy</span><b>→</b><strong>{bringUmbrella ? 'Take an umbrella' : 'No umbrella needed'}</strong>
        </div>
        <p className="ghana-computing-lab__result" role="status">The condition changes the action. Try both inputs to test the algorithm.</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-digital-safety') {
    const safeChoice = safetyResponse === 'check';
    return (
      <LabPanel title="Pause before responding">
        <div className="ghana-computing-lab__message">
          <span aria-hidden="true">!</span>
          <div><strong>Unexpected message</strong><small>“Send your password to win a prize!”</small></div>
        </div>
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose how to respond">
          <Choice label="Share the password" active={safetyResponse === 'share'} onClick={() => setSafetyResponse('share')} />
          <Choice label="Stop and check with a trusted adult" active={safeChoice} onClick={() => setSafetyResponse('check')} />
        </div>
        <p className={`ghana-computing-lab__result${safeChoice ? ' is-safe' : ' is-warning'}`} role="status">
          {safeChoice ? 'Safe choice: keep passwords private and ask a trusted adult.' : 'Unsafe: never send a password in response to a message.'}
        </p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-binary-data') {
    const decimal = bits.reduce((sum, bit, index) => sum + bit * BIT_VALUES[index], 0);
    return (
      <LabPanel title="Build an 8-bit number">
        <div className="ghana-computing-lab__bits" role="group" aria-label="Toggle binary bits">
          {bits.map((bit, index) => (
            <button type="button" key={BIT_VALUES[index]} className={`ghana-computing-lab__bit${bit ? ' is-on' : ''}`} aria-label={`Place value ${BIT_VALUES[index]}, ${bit ? 'on' : 'off'}`} aria-pressed={!!bit} onClick={() => setBits(current => current.map((value, i) => i === index ? 1 - value : value))}>
              <small>{BIT_VALUES[index]}</small><strong>{bit}</strong>
            </button>
          ))}
        </div>
        <div className="ghana-computing-lab__readout" aria-live="polite"><span>Binary</span><strong>{bits.join('')}</strong><span>Decimal</span><strong>{decimal}</strong></div>
        <p className="ghana-computing-lab__result">Add the place values that have a 1 bit to find the decimal number.</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-networks') {
    return (
      <LabPanel title="Send a classroom message">
        <div className={`ghana-computing-lab__network${messageSent ? ' is-sent' : ''}`}>
          <span className="ghana-computing-lab__device">Sender</span>
          <span className="ghana-computing-lab__route">{networkRoute === 'wifi' ? 'Wi-Fi' : 'Ethernet cable'}<i aria-hidden="true" /></span>
          <span className="ghana-computing-lab__device">Receiver</span>
        </div>
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose a network connection">
          <Choice label="Wi-Fi" active={networkRoute === 'wifi'} onClick={() => { setNetworkRoute('wifi'); setMessageSent(false); }} />
          <Choice label="Ethernet cable" active={networkRoute === 'cable'} onClick={() => { setNetworkRoute('cable'); setMessageSent(false); }} />
        </div>
        <button type="button" className="ghana-computing-lab__action" onClick={() => setMessageSent(!messageSent)}>{messageSent ? 'Reset message' : 'Send message'}</button>
        <p className="ghana-computing-lab__result" role="status">{messageSent ? 'Message delivered! A real network may send data in packets.' : 'Choose a route, then send the message to see the connection.'}</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-applications') {
    const task = {
      report: { task: 'Write a class report', tool: 'Word processor', icon: '¶' },
      survey: { task: 'Organise survey results', tool: 'Spreadsheet', icon: '▦' },
      slides: { task: 'Present a group project', tool: 'Presentation app', icon: '▣' }
    }[application];
    return (
      <LabPanel title="Match the application to the task">
        <label className="ghana-computing-lab__select">Choose a class task
          <select value={application} onChange={event => setApplication(event.target.value as typeof application)}>
            <option value="report">Write a class report</option>
            <option value="survey">Organise survey results</option>
            <option value="slides">Present a group project</option>
          </select>
        </label>
        <div className="ghana-computing-lab__app-card" aria-live="polite">
          <span aria-hidden="true">{task.icon}</span><div><small>{task.task}</small><strong>{task.tool}</strong></div>
        </div>
        <p className="ghana-computing-lab__result" role="status">Pick software that fits what you need to create, calculate or present.</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-device-care') {
    const heightLabel = screenHeight < 34 ? 'Too low: raise the screen with adult help.' : screenHeight > 67 ? 'Too high: lower the screen with adult help.' : 'Comfortable viewing range. Keep a relaxed posture.';
    return (
      <LabPanel title="Adjust a comfortable screen position">
        <div className="ghana-computing-lab__desk" aria-label="Illustration of a learner at a desk">
          <span className="ghana-computing-lab__person" aria-hidden="true">◉</span>
          <span className="ghana-computing-lab__monitor" style={{ transform: `translateY(${(50 - screenHeight) / 4}px)` }} aria-hidden="true">▱</span>
          <span className="ghana-computing-lab__desk-line" aria-hidden="true" />
        </div>
        <label className="ghana-computing-lab__slider">Screen height
          <input type="range" min="0" max="100" value={screenHeight} onChange={event => setScreenHeight(Number(event.target.value))} />
        </label>
        <p className="ghana-computing-lab__result" role="status">{heightLabel}</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-programming') {
    const steps = ['Start program', `Repeat ${repeatCount} times: water one plant`, 'Finish program'];
    const message = programStep === 0
      ? 'Ready to start. The repeat block will water one plant on each turn.'
      : programStep <= repeatCount
        ? `Repeat step ${programStep} of ${repeatCount}: water one plant.`
        : `Program complete: ${repeatCount} plants were watered.`;
    const activeBlock = programStep === 0 ? 0 : programStep <= repeatCount ? 1 : 2;
    return (
      <LabPanel title="Run a simple block program">
        <label className="ghana-computing-lab__slider">Number of plants
          <input type="range" min="1" max="5" value={repeatCount} onChange={event => { setRepeatCount(Number(event.target.value)); setProgramStep(0); }} />
        </label>
        <div className="ghana-computing-lab__program" aria-label="Program blocks">
          {steps.map((step, index) => (
            <div className={`ghana-computing-lab__program-block${activeBlock === index ? ' is-active' : ''}`} key={step}>
              <small>{index === 1 ? 'REPEAT BLOCK' : 'INSTRUCTION'}</small><strong>{step}</strong>
            </div>
          ))}
        </div>
        <button type="button" className="ghana-computing-lab__action" onClick={() => setProgramStep(programStep >= repeatCount + 1 ? 0 : programStep + 1)}>
          {programStep >= repeatCount + 1 ? 'Run again' : 'Run next instruction'}
        </button>
        <p className="ghana-computing-lab__result" role="status">{message}</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-data') {
    const fruits = ['Mangoes', 'Bananas', 'Oranges'];
    const totalVotes = fruitVotes.reduce((sum, votes) => sum + votes, 0);
    const largestVote = Math.max(...fruitVotes);
    return (
      <LabPanel title="Explore a class fruit survey">
        <div className="ghana-computing-lab__chart" role="group" aria-label="Fruit survey results">
          {fruits.map((fruit, index) => (
            <div className="ghana-computing-lab__bar-row" key={fruit}>
              <span>{fruit}</span>
              <div className="ghana-computing-lab__bar-track"><i style={{ width: `${fruitVotes[index] * 10}%` }} /></div>
              <strong>{fruitVotes[index]}</strong>
            </div>
          ))}
        </div>
        <div className="ghana-computing-lab__choices" role="group" aria-label="Add a survey response">
          {fruits.map((fruit, index) => (
            <button type="button" className="ghana-computing-lab__choice" key={fruit} disabled={fruitVotes[index] >= 10} onClick={() => setFruitVotes(current => current.map((votes, i) => i === index ? Math.min(votes + 1, 10) : votes))}>
              Add one {fruit.toLowerCase()} vote
            </button>
          ))}
        </div>
        <p className="ghana-computing-lab__result" role="status">
          Total responses: {totalVotes}. {fruits[fruitVotes.indexOf(largestVote)]} has the most votes in this class survey.
        </p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-search') {
    const sourceInfo = researchSource === 'guide'
      ? { title: 'School water-use guide', author: 'Named education office', date: 'Recent date shown', evidence: 'Links to supporting information' }
      : { title: '“Water facts!” community post', author: 'No author listed', date: 'No date shown', evidence: 'No evidence provided' };
    const sourceIsStronger = researchSource === 'guide';
    return (
      <LabPanel title="Check a source before using it">
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose a source to inspect">
          <Choice label="School water-use guide" active={sourceIsStronger} onClick={() => setResearchSource('guide')} />
          <Choice label="Community post" active={!sourceIsStronger} onClick={() => setResearchSource('post')} />
        </div>
        <div className="ghana-computing-lab__source-card" aria-live="polite">
          <strong>{sourceInfo.title}</strong>
          <span>Author: {sourceInfo.author}</span>
          <span>Publication: {sourceInfo.date}</span>
          <span>Evidence: {sourceInfo.evidence}</span>
        </div>
        <p className={`ghana-computing-lab__result${sourceIsStronger ? ' is-safe' : ' is-warning'}`} role="status">
          {sourceIsStronger ? 'Stronger source: check that its evidence supports the claim and compare important facts.' : 'Pause: missing author, date and evidence mean you should verify this claim elsewhere.'}
        </p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-collaboration') {
    const permissionFeedback = sharePermission === 'viewer'
      ? 'Viewer access fits a classmate who only needs to read the work.'
      : sharePermission === 'editor'
        ? 'Editor access allows changes. Use it only when the classmate needs to edit.'
        : 'A public link may reach people outside your group. Use it only with teacher approval.';
    return (
      <LabPanel title="Choose access for a classmate">
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose file access">
          <Choice label="Viewer" active={sharePermission === 'viewer'} onClick={() => setSharePermission('viewer')} />
          <Choice label="Editor" active={sharePermission === 'editor'} onClick={() => setSharePermission('editor')} />
          <Choice label="Public link" active={sharePermission === 'public'} onClick={() => setSharePermission('public')} />
        </div>
        <div className={`ghana-computing-lab__share-card permission-${sharePermission}`} aria-live="polite">
          <span className="ghana-computing-lab__file-icon" aria-hidden="true">▤</span>
          <div><small>Class project document</small><strong>{sharePermission === 'public' ? 'Anyone with the link' : `Classmate · ${sharePermission}`}</strong></div>
        </div>
        <p className={`ghana-computing-lab__result${sharePermission === 'public' ? ' is-warning' : ' is-safe'}`} role="status">{permissionFeedback}</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-documents') {
    const hasHeading = documentStyle === 'heading';
    return (
      <LabPanel title="Design a clear class report">
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose a document style">
          <Choice label="Add a heading" active={hasHeading} onClick={() => setDocumentStyle('heading')} />
          <Choice label="Keep plain text" active={!hasHeading} onClick={() => setDocumentStyle('plain')} />
        </div>
        <article className={`ghana-computing-lab__document${hasHeading ? ' has-heading' : ''}`} aria-live="polite">
          {hasHeading && <h4>Our School Garden</h4>}
          <p>Learners planted seedlings and recorded how they grew.</p>
          <p>Clear headings help readers find the main ideas.</p>
        </article>
        <p className="ghana-computing-lab__result" role="status">
          {hasHeading ? 'The heading tells readers what the report is about.' : 'Without a heading, readers have less help finding the report topic.'}
        </p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-spreadsheets') {
    const supplies = [
      { name: 'Exercise books', singular: 'exercise book', unitCost: 2 },
      { name: 'Pencils', singular: 'pencil', unitCost: 3 },
      { name: 'Rulers', singular: 'ruler', unitCost: 5 }
    ];
    const total = supplies.reduce((sum, supply, index) => sum + supply.unitCost * supplyCounts[index], 0);
    return (
      <LabPanel title="Calculate a class supply total">
        <div className="ghana-computing-lab__sheet-wrap">
          <table className="ghana-computing-lab__sheet">
            <caption>Practice values in Ghana cedis</caption>
            <thead><tr><th>Item</th><th>Count</th><th>Cost each</th><th>Amount</th></tr></thead>
            <tbody>{supplies.map((supply, index) => (
              <tr key={supply.name}>
                <th scope="row">{supply.name}</th>
                <td>{supplyCounts[index]}</td>
                <td>GH₵{supply.unitCost}</td>
                <td>GH₵{supply.unitCost * supplyCounts[index]}</td>
              </tr>
            ))}</tbody>
            <tfoot><tr><th scope="row" colSpan={3}>Formula: =SUM(D2:D4)</th><td>GH₵{total}</td></tr></tfoot>
          </table>
        </div>
        <div className="ghana-computing-lab__choices" role="group" aria-label="Add a supply to the spreadsheet">
          {supplies.map((supply, index) => (
            <button type="button" className="ghana-computing-lab__choice" key={supply.name} disabled={supplyCounts[index] >= 5} onClick={() => setSupplyCounts(current => current.map((count, i) => i === index ? Math.min(count + 1, 5) : count))}>
              Add one {supply.singular}
            </button>
          ))}
        </div>
        <p className="ghana-computing-lab__result" role="status">The formula adds the amount cells. Change a count and check that the total updates.</p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-accessibility') {
    const specificDescription = imageDescription === 'specific';
    return (
      <LabPanel title="Add a useful image description">
        <div className="ghana-computing-lab__garden" role="img" aria-label="Illustration of learners watering seedlings in a school garden">
          <span aria-hidden="true">🌱　🌿　🌱</span>
          <small aria-hidden="true">School garden</small>
        </div>
        <div className="ghana-computing-lab__choices" role="group" aria-label="Choose alternative text">
          <Choice label="Learners watering rows of seedlings" active={specificDescription} onClick={() => setImageDescription('specific')} />
          <Choice label="Picture" active={!specificDescription} onClick={() => setImageDescription('generic')} />
        </div>
        <p className={`ghana-computing-lab__result${specificDescription ? ' is-safe' : ' is-warning'}`} role="status">
          {specificDescription ? 'Useful description: it explains the important action in the image.' : 'Try again: “Picture” does not tell a reader what the image shows.'}
        </p>
      </LabPanel>
    );
  }

  if (missionId === 'gh-jhs1-computing-troubleshooting') {
    const checks = {
      sound: { label: 'No sound in a learning app', check: 'Check the app volume and mute setting on screen.' },
      internet: { label: 'A learning page will not load', check: 'Check whether the device shows a network connection, then ask the teacher if the network is available.' },
      screen: { label: 'The screen is blank', check: 'Look for a power indicator and tell the teacher if it stays blank.' }
    }[troubleshootingIssue];
    return (
      <LabPanel title="Choose a safe first check">
        <label className="ghana-computing-lab__select">What is happening?
          <select value={troubleshootingIssue} onChange={event => { setTroubleshootingIssue(event.target.value as typeof troubleshootingIssue); setCheckCompleted(false); }}>
            <option value="sound">No sound in a learning app</option>
            <option value="internet">A learning page will not load</option>
            <option value="screen">The screen is blank</option>
          </select>
        </label>
        <div className="ghana-computing-lab__trouble-card" aria-live="polite">
          <strong>{checks.label}</strong>
          <span>{checks.check}</span>
        </div>
        <button type="button" className="ghana-computing-lab__action" onClick={() => setCheckCompleted(true)}>Try this safe check</button>
        <p className="ghana-computing-lab__result" role="status">
          {checkCompleted ? 'If it still does not work, stop and tell a teacher or responsible adult. Do not open the device or touch wires.' : 'Start with one simple check. Never open equipment or touch exposed wires.'}
        </p>
      </LabPanel>
    );
  }

  return null;
};
