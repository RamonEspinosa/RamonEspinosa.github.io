<h1>Juan Ramon Espinosa Lopez</h1>

<style>
    @media print {
        @page { margin: 0; }
        body { margin: 1.6cm; }
    }
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
    * {
        font-family: "Open Sans", sans-serif;
    }
    ul {
        list-style-type: circle;
    }
    h1, h3 {
        margin: 0;
    }
    h1, h2 {
        font-family: "Montserrat", sans-serif;
    }
    p {
        margin: 0;
    }
    .contact {
        display: flex;
        justify-content: space-between;
    }
    .header {
        margin-top: 10px;
        text-align: center;
    }
    .knowledge__list {
        color: hsl(0deg, 0%, 10%);
        font-size: 0.9em;
    }
    .experience {
    }
    .experience__date {
        font-size: 0.8em;
        line-height: 1;
        color: hsl(0deg, 0%, 30%)
    }
    .experience__title {
        line-height: 1.1;
    }
    .experience__link {
    }
    .experience__role {
        font-weight: 700;
    }
    .experience__description, .education__school {
        padding-left: 10px;
        color: hsl(0deg, 0%, 10%);
        font-size: 0.9em;
    }
    .project {
        font-size: 0.9em;
    }
    .project > li {
        color: hsl(0deg, 0%, 10%);
        line-height: 1.2;
    }
    .education__title {
        font-weight: 700;
        line-height: 1.1;
    }
    .education__date {
        font-size: 0.8em;
        line-height: 1;
        color: hsl(0deg, 0%, 30%)
    }
    .bold {
        font-weight: 700;
    }
    .tech {
        font-weight: 600;
    }
</style>

<div class="contact">
    <span>
        <span class="bold">Email:</span> <a href="mailto:espinosa.lopez.juan.ramon@gmail.com">espinosa.lopez.juan.ramon@gmail.com</a>
    </span>
    <span>
        <span class="bold">Phone Number:</span> <a href="tel:+17788362229">+1 (778)-836-2229</a>
    </span>
</div>

<p class="header">
    Senior software developer with critical thinking, decision-making and problem solving skills.
</p>

<h2>Areas of knowledge</h2>

<ul class="knowledge__list">
    <li>Good technical background managing REST APIs with <span class="tech">Typescript/Javascript</span>, <span class="tech">Node.js</span>, <span class="tech">Express</span></li>
    <li>Great understanding of frontend technologies such as <span class="tech">React</span>, <span class="tech">Next.js</span>, <span class="tech">Vite</span>, <span class="tech">CSS</span></li>
    <li>Expertise in diverse testing frameworks like <span class="tech">Jest</span>, <span class="tech">Vitest</span>, <span class="tech">Cypress</span></li>
    <li>Experience with cloud providers like <span class="tech">Amazon Web Services</span></li>
    <li>Competent in linux containers with <span class="tech">Docker</span></li>
</ul>

<h2>Professional Experience</h2>

<ul class="experience">
    <li>
        <p class="experience__title">
            <span class="experience__role">Full-stack Developer</span> at <a class="experience__link" href="https://ttt.studio" target="_blank">TTT Studios</a> <span class="experience__date">(2022 - Today)</span>
        </p>
        <p class="experience__description">Building and maintaining web apps made with Node.js and containerizing them with Docker. Helping with CI/CD pipelines for automated testing and deployments. Mentoring junior developers to enhance team skills.</p>
    </li>
    <li>
        <p class="experience__title">
            <span class="experience__role">Front-end Developer</span> at <a class="experience__link" href="https://dacodes.com" target="_blank">DaCodes</a> <span class="experience__date">(2021 - 2022)</span>
        </p>
        <p class="experience__description">Worked in collaboration with TTT Studios to bring designs to life using React, SCSS, and Redux.</p>
    </li>
    <li>
        <p class="experience__title">
            <span class="experience__role">Full-stack Developer</span> at <a class="experience__link" href="https://prixz.com" target="_blank">Prixz</a> <span class="experience__date">(2020 - 2021)</span>
        </p>
        <p class="experience__description">Maintained and developed new features for the logistics mobile & web applications.</p>
    </li>
    <li>
        <p class="experience__title">
            <span class="experience__role">Full-stack Developer</span> at <a class="experience__link" href="https://www.cointic.com.mx" target="_blank">Cointic</a> <span class="experience__date">(2018 - 2020)</span>
        </p>
        <p class="experience__description">Worked on a team environment implementing bespoke software.</p>
    </li>
</ul>

<!-- Projects only relevant to TTT -->
<!--
<h2>Relevant Projects</h2>

<h3>Wheaton Precious Metals</h3>
<ul class="project">
    <li>
        Setup front-end codebase with <span class="tech">Vite</span>, <span class="tech">Typescript</span> and <span class="tech">React</span>. Implemented data-visualization components made with <span class="tech">D3</span> and <span class="tech">Visx</span>.
    </li>
    <li>
        Helped implementing CI/CD pipelines in <span class="tech">Azure DevOps</span> to automatically build, test and deploy the codebase to multiple environments.
    </li>
    <li>
        Contributed to the <span class="tech">Express</span>-based REST API adding new endpoints and fixing bugs.
    </li>
</ul>
<h3>Paladin</h3>
<ul class="project">
    <li>
        Setup front-end codebase with <span class="tech">Vite</span>, <span class="tech">Javascript</span> and <span class="tech">React</span>. Implemented a Geographic Information System to dinamically display security risks in major cities of North America in real-time.
    </li>
    <li>
        Aided in configuring and integrating several <span class="tech">Amazon Web Services</span> such as <span class="tech">Cloudfront</span>, <span class="tech">S3</span>, <span class="tech">Cognito</span>, <span class="tech">Lambda</span> and <span class="tech">Gateway</span>.
    </li>
    <li>
        Conducted extensive testing to identify and fix bugs, ensuring a robust and high-quality application.
    </li>
</ul>
<h3>Purecount</h3>
<ul class="project">
    <li>
        Implemented a warehouse management system to optimize inventory tracking and logistics with <span class="tech">React</span> and <span class="tech">Express</span>.
    </li>
</ul>
-->
<!-- ENDOF: Projects only relevant to TTT -->

<h2>Education</h2>

<ul>
    <li>
        <p>
            <span class="education__title">Computer Systems Engineer</span> <span class="experience__date">(2014 - 2019)</span>
        </p>
        <p class="education__school">
            Tecnologico de Estudios Superiores de Chalco.
        </p>
    </li>
</ul>
