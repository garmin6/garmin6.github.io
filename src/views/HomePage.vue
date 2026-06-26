<template>
  <div class="home-page">
    <h1>Hola ~</h1>
    <p class="name-line">My name is Garmin Xeo.</p>
    <p>
      I am an front-end developer based in CMGII.
      I'm familiar with HTML, CSS, JavaScript and Vue.js.
      Most of my work is publicly available on
      <a href="https://github.com/garmin6" target="_blank">GitHub</a>.
    </p>
    <p>
      I have a lot of interests, such as reading, working out, cycling, running, traveling, taking pictures and exploring
      gourmet restaurants, etc.
    </p>
    <p>
      If you want to know more about me, you can also find me on
      <a href="https://weibo.com/u/7756679646" target="_blank">Weibo</a> and
      <a href="https://space.bilibili.com/33441759" target="_blank">Bilibili</a>.
    </p>
    <p>
      Here are some of <router-link to="/app">apps</router-link> I've built.
    </p>
  </div>
</template>

<style>
.home-page {
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  padding: 5vh 10vw;
  color: #3b3c3d;
}

.home-page h1 {
  font-size: 4.5em;
  font-weight: 500;
  margin: 1rem 0;
}

.home-page p {
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.home-page .name-line {
  font-weight: 500;
  font-size: 2em;
  margin-bottom: 1rem;
}

.home-page a {
  text-decoration: none;
  color: #121314;
  position: relative;
}

.home-page a::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 80%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 500ms cubic-bezier(0, .8, .13, 1);
  background-color: rgba(79, 192, 141, 0.5);
}

.home-page a:hover::before {
  top: 10%;
}
</style>
