// Data for all 6 sections
const sections = [
    {
        title: "1️⃣ Main Challenges in IBM DevOps Stories",
        points: [
            { term: "Legacy systems", desc: "Old monolithic applications are difficult to automate and integrate with CI/CD.", example: "IBM clients running mainframe-based banking systems cannot easily use automated testing pipelines." },
            { term: "Organizational silos", desc: "Dev, Test, and Ops teams work separately, slowing delivery.", example: "Developers finish coding but must wait weeks for operations approval to deploy." },
            { term: "Manual processes", desc: "Manual testing and deployment increase errors and delays.", example: "Production releases fail due to manual configuration mistakes." },
            { term: "Environment inconsistency", desc: "Different configurations across environments cause unexpected issues.", example: "An app works in testing but crashes in production due to different server settings." },
            { term: "Scalability issues", desc: "Traditional infrastructure cannot handle sudden demand.", example: "E-commerce apps fail during festive sales due to limited server capacity." }
        ]
    },
    {
        title: "2️⃣ Effectiveness of IBM DevOps Stories in CI/CD",
        points: [
            { term: "Continuous Integration (CI)", desc: "Frequent code merging with automated testing detects bugs early.", example: "IBM uses Jenkins pipelines to run unit tests on every code commit." },
            { term: "Continuous Delivery/Deployment (CD)", desc: "Automates release to production safely and quickly.", example: "Applications are deployed automatically after passing all test stages." },
            { term: "Improved collaboration", desc: "Shared dashboards and tools improve teamwork.", example: "Dev and Ops teams monitor the same pipeline status in real time." },
            { term: "Higher software quality", desc: "Automated tests reduce defects.", example: "Regression testing runs automatically before each release." },
            { term: "Faster time-to-market", desc: "New features reach customers quickly.", example: "Weekly releases instead of quarterly releases." }
        ]
    },
    {
        title: "3️⃣ Challenges in CI/CD Implementation",
        points: [
            { term: "Toolchain complexity", desc: "Multiple tools must work together smoothly.", example: "Integrating Git, Jenkins, Docker, and Kubernetes causes configuration issues." },
            { term: "Security concerns", desc: "Automated pipelines may deploy vulnerable code.", example: "Missing security scans allow insecure libraries into production." },
            { term: "Skill gaps", desc: "Teams lack CI/CD and cloud expertise.", example: "Developers struggle to write pipeline scripts." },
            { term: "Configuration management", desc: "Different environment settings cause failures.", example: "Wrong database credentials break deployment." },
            { term: "Pipeline maintenance", desc: "Pipelines must be updated regularly.", example: "Pipeline breaks when tool versions change." }
        ]
    },
    {
        title: "4️⃣ Benefits of Using Cloud Environments in DevOps",
        points: [
            { term: "Scalability", desc: "Resources scale automatically with demand.", example: "Cloud servers scale up during peak traffic hours." },
            { term: "Rapid provisioning", desc: "Environments are created quickly.", example: "A test server is ready in minutes using AWS." },
            { term: "Cost efficiency", desc: "Pay only for used resources.", example: "Servers are shut down after testing to save cost." },
            { term: "High availability", desc: "Built-in backup and recovery.", example: "Application continues running even if one server fails." },
            { term: "Automation support", desc: "Easy integration with CI/CD tools.", example: "Automatic deployment using GitHub Actions and cloud services." }
        ]
    },
    {
        title: "5️⃣ Approach to Cloud Environment Provisioning & Deployment",
        points: [
            { term: "Infrastructure as Code (IaC)", desc: "Infrastructure defined using code.", example: "Terraform scripts create cloud servers automatically." },
            { term: "Automated provisioning", desc: "No manual setup required.", example: "Virtual machines are created using cloud templates." },
            { term: "Containerization", desc: "Applications run consistently across environments.", example: "Docker ensures the same app behavior in test and production." },
            { term: "CI/CD pipelines", desc: "Automates build, test, and deployment.", example: "Code pushed to Git triggers automatic deployment." },
            { term: "Monitoring and logging", desc: "Tracks performance and errors.", example: "Alerts sent when CPU usage is high." }
        ]
    },
    {
        title: "6️⃣ Strategies for Organizations Adopting Cloud Technology",
        points: [
            { term: "Clear cloud adoption plan", desc: "Align cloud use with business goals.", example: "Move customer-facing apps first for better performance." },
            { term: "Choosing the right cloud model", desc: "Select public, private, or hybrid cloud.", example: "Hybrid cloud for sensitive data and public cloud for web apps." },
            { term: "Staff training", desc: "Upskill employees in cloud and DevOps.", example: "Training teams on AWS and CI/CD tools." },
            { term: "Security and compliance", desc: "Protect data and meet regulations.", example: "Encrypt data and apply access control policies." },
            { term: "Phased migration", desc: "Move systems gradually.", example: "Start with testing systems before core applications." },
            { term: "Cost optimization", desc: "Monitor and control cloud spending.", example: "Remove unused cloud resources." }
        ]
    }
];

// Generate cards dynamically
const container = document.getElementById('cards-container');

sections.forEach(section => {
    const card = document.createElement('div');
    card.classList.add('card');

    const header = document.createElement('div');
    header.classList.add('card-header');
    header.textContent = section.title;

    const body = document.createElement('div');
    body.classList.add('card-body');

    const ul = document.createElement('ul');
    section.points.forEach(point => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${point.term}:</strong> ${point.desc} <span class="example">Example: ${point.example}</span>`;
        ul.appendChild(li);
    });
    body.appendChild(ul);

    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
});

// Toggle cards
document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});
