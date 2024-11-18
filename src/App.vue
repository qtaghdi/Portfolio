<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">Portfolio</div>
        <div class="nav-links">
          <a href="#home" @click.prevent="scrollToSection('home')">Home</a>
          <a href="#skills" @click.prevent="scrollToSection('skills')">Skills</a>
          <a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a>
        </div>
      </div>
    </nav>

    <main class="content">
      <section id="home" class="section home-section">
        <div class="hero">
          <h1>{{ name }}</h1>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <div class="social-links">
            <a :href="githubUrl" target="_blank" class="social-button">GitHub</a>
            <a :href="notionUrl" target="_blank" class="social-button">Notion</a>
          </div>
        </div>
      </section>

      <section id="skills" class="section skills-section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-container">
          <div v-for="category in categories" :key="category" class="skill-category">
            <h3>{{ category }}</h3>
            <div class="skill-list">
              <div v-for="skill in getSkillsByCategory(category)" :key="skill.name" class="skill-item">
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section projects-section">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.id" class="project-card">
            <img class="project-image" :src="project.imageUrl" :alt="project.title"/>
            <div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="tech-stack">
                <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
              </div>
              <div class="project-links">
                <a :href="project.githubUrl" target="_blank">GitHub</a>
                <a :href="project.notionUrl" target="_blank">Notion</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Welspy from "@/assets/Welspy.png"

export default defineComponent({
  name: 'App',
  data() {
    return {
      name: '박상민',
      title: 'Frontend Developer',
      description: '더 나은 나를 만들어가는 개발자. 박상민입니다.',
      githubUrl: 'https://github.com/qtaghdi',
      notionUrl: 'https://qtaghdi.notion.site/Welspy-1287df2cb15580358848e274c9ba8092?pvs=74',
      projects: [
        {
          id: 1,
          title: 'Dummy 1',
          description: 'dummy 1',
          technologies: ['React', 'JavaScript', 'Typescript'],
          imageUrl: Welspy,
          githubUrl: 'https://github.com/Welspy',
          notionUrl: 'https://qtaghdi.notion.site/Welspy-1287df2cb15580358848e274c9ba8092?pvs=74',
        },
        {
          id: 2,
          title: 'Dummy 2',
          description: 'dummy 2',
          technologies: ['Vue', 'Typescript'],
          imageUrl: Welspy,
          githubUrl: 'https://github.com/Welspy',
          notionUrl: 'https://qtaghdi.notion.site/Welspy-1287df2cb15580358848e274c9ba8092?pvs=74',
        },
        {
          id: 3,
          title: 'Dummy 3',
          description: 'dummy 3',
          technologies: ['React', 'JavaScript', 'Typescript'],
          imageUrl: Welspy,
          githubUrl: 'https://github.com/Welspy',
          notionUrl: 'https://qtaghdi.notion.site/Welspy-1287df2cb15580358848e274c9ba8092?pvs=74',
        },
      ],
      skills: [
        {name: 'React', category: 'Frontend'},
        {name: 'Vue', category: 'Frontend'},
        {name: 'JavaScript', category: 'Frontend'},
        {name: 'TypeScript', category: 'Frontend'},
        {name: 'Node.js', category: 'Backend'},
        {name: 'Git', category: 'Tools'},
        {name: 'WebStorm', category: 'Tools'},
        {name: 'Figma', category: 'Tools'},
      ],
      categories: ['Frontend', 'Backend', 'Tools'],
    };
  },
  methods: {
    scrollToSection(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    getSkillsByCategory(category: string) {
      return this.skills.filter((skill) => skill.category === category);
    },
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  color: #2c3e50;
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #2c3e50;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #ecf0f1;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  margin-left: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-links a:hover {
  background-color: #34495e;
}

/* Section */
.section {
  padding: 100px 20px;
  text-align: center;
  margin-top: 60px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #34495e;
}

/* Home Section */
.home-section {
  height: 100%;
  background-color: #ffffff;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

.hero h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #7f8c8d;
}

.social-links a {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  background-color: #2c3e50;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
  background-color: #34495e;
  transform: translateY(-2px);
}

/* Skills Section */
.skills-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #34495e;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.skill-item {
  background-color: #ecf0f1;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c3e50;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.skill-item:hover {
  background-color: #bdc3c7;
  transform: translateY(-2px);
}

/* Projects Section */
.project-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
}


.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.project-card img {
  width: 100%;
  height: auto;
  border-bottom: 2px solid #2c3e50;
}

.project-card h3 {
  font-size: 1.3rem;
  color: #34495e;
  margin: 1rem 0;
}

.project-card p {
  color: #7f8c8d;
  padding: 0 1rem;
  font-size: 0.9rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin: 1rem 0;
}

.tech-stack span {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.project-links a {
  display: inline-block;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2c3e50;
  color: #ffffff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.project-links a:hover {
  background-color: #34495e;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links a {
    margin-left: 1rem;
    padding: 0.3rem 0.6rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero h2 {
    font-size: 1.5rem;
  }

  .project-image {
    max-width: 200px;
  }
}
</style>
