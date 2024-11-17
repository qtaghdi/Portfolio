// src/App.vue
<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">Portfolio</div>
        <div class="nav-links">
          <a href="#home" @click.prevent="scrollToSection('home')">Home</a>
          <a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a>
          <a href="#skills" @click.prevent="scrollToSection('skills')">Skills</a>
          <a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>
        </div>
      </div>
    </nav>

    <main class="content">
      <!-- Home Section -->
      <section id="home" class="section home-section">
        <div class="hero">
          <h1>{{ name }}</h1>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <div class="social-links">
            <a :href="githubUrl" target="_blank" class="social-button">GitHub</a>
<!--            <a :href="linkedinUrl" target="_blank" class="social-button">LinkedIn</a>-->
          </div>
        </div>
      </section>

      <!-- Skills Section -->
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

      <!-- Projects Section -->
      <section id="projects" class="section projects-section">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.id" class="project-card">
            <img :src="project.imageUrl" :alt="project.title">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <div class="project-links">
              <a :href="project.githubUrl" target="_blank">GitHub</a>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

interface Skill {
  name: string;
  category: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default defineComponent({
  name: 'App',
  data() {
    return {
      // Home section data
      name: '박상민',
      title: 'Frontend Developer',
      description: '더 나은 나를 만들어가는 개발자.' + '박상민입니다.',
      githubUrl: 'https://github.com/qtaghdi',
      // linkedinUrl: 'https://linkedin.com/in/yourusername',

      // Projects section data
      projects: [
        {
          id: 1,
          title: '',
          description: '',
          technologies: ['', '', ''],
          imageUrl: '',
          githubUrl: '',
          liveUrl: ''
        },
      ] as Project[],

      // Skills section data
      skills: [
        {name: 'React', category: 'Frontend'},
        {name: 'Vue', category: 'Frontend'},
        {name: 'JavaScript', category: 'Frontend'},
        {name: 'TypeScript', category: 'Frontend'},
        {name: 'Node.js', category: 'Backend'},
        {name: 'Git', category: 'Tools'},
        {name: 'WebStorm', category: 'Tools'},
        {name: 'Figma', category: 'Tools'},
      ] as Skill[],
      categories: ['Frontend', 'Backend', 'Tools'],

      formData: {
        name: '',
        email: '',
        message: ''
      } as FormData
    };
  },
  methods: {
    scrollToSection(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    getSkillsByCategory(category: string): Skill[] {
      return this.skills.filter(skill => skill.category === category);
    },
    handleSubmit() {
      console.log('Form submitted:', this.formData);
      // Implement form submission logic here
    }
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: Arial, sans-serif;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #2c3e50;
  padding: 1rem;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: #34495e;
}

.section {
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

/* Home Section */
.home-section {
  background-color: #f8f9fa;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #34495e;
}

.social-links {
  margin-top: 2rem;
}

.social-button {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  margin: 0 0.5rem;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
}

.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

/* Skills Section */
.skills-container {
  max-width: 800px;
  width: 100%;
}

.skill-category {
  margin-bottom: 2rem;
}

.skill-item {
  margin-bottom: 1rem;
}

.skill-bar {
  height: 10px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s;
}

/* Contact Section */
.contact-form {
  max-width: 600px;
  width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #2c3e50;
  color: white;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #34495e;
}

@media (max-width: 768px) {
  .nav-links a {
    margin-left: 1rem;
    padding: 0.3rem 0.6rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h2 {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
