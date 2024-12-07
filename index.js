// Initialize the page content when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderProposal();
});

function renderProposal() {
  const mainContent = document.createElement("div");
  mainContent.className = "proposal-container";

  mainContent.innerHTML = `
        <header>
            <h1>Celigo Integration Specialist Proposal</h1>
            <div class="subtitle">Custom Integration & Mapping Solution</div>
        </header>

        <section class="expertise">
            <h2>Relevant Expertise</h2>
            <ul>
                <li>✓ Extensive experience with Celigo iPaaS platform</li>
                <li>✓ Strong background in API integration and data mapping</li>
                <li>✓ Proven track record with customer and transaction record mapping</li>
                <li>✓ Postman expertise for API testing and implementation</li>
            </ul>
        </section>

        <section class="approach">
            <h2>Proposed Approach</h2>
            <ol>
                <li>Review existing Postman scripts and current integration setup</li>
                <li>Analyze customer and transactional record structures</li>
                <li>Implement custom mapping logic using Celigo's best practices</li>
                <li>Perform thorough testing with sample data</li>
                <li>Document the integration process and provide maintenance guidelines</li>
            </ol>
        </section>

        <section class="timeline">
            <h2>Timeline & Deliverables</h2>
            <div class="timeline-item">
                <strong>Phase 1:</strong> Initial Assessment & Planning (1-2 days)
            </div>
            <div class="timeline-item">
                <strong>Phase 2:</strong> Implementation & Mapping (2-3 days)
            </div>
            <div class="timeline-item">
                <strong>Phase 3:</strong> Testing & Optimization (1-2 days)
            </div>
            <div class="timeline-item">
                <strong>Phase 4:</strong> Documentation & Handover (1 day)
            </div>
        </section>

        <section class="contact">
            <h2>Let's Connect</h2>
            <p>Ready to discuss your integration needs in detail. Available for immediate start.</p>
            <button onclick="window.location.href='mailto:your.jvalamis@gmail.com'" class="contact-button">
                Contact Me
            </button>
        </section>
    `;

  document.body.appendChild(mainContent);

  // Add styling
  const style = document.createElement("style");
  style.textContent = `
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
        }

        .proposal-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        header {
            text-align: center;
            margin-bottom: 40px;
        }

        h1 {
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #7f8c8d;
            font-size: 1.2em;
        }

        section {
            margin-bottom: 30px;
        }

        h2 {
            color: #34495e;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }

        ul, ol {
            padding-left: 20px;
        }

        li {
            margin-bottom: 10px;
        }

        .timeline-item {
            margin: 15px 0;
        }

        .contact {
            text-align: center;
        }

        .contact-button {
            background: #3498db;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 1.1em;
            cursor: pointer;
            transition: background 0.3s;
        }

        .contact-button:hover {
            background: #2980b9;
        }
    `;

  document.head.appendChild(style);
}
