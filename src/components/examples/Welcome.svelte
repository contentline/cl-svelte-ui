<script>
  import Typed from 'typed.js';
  import { onMount, onDestroy } from 'svelte'
  import Image from '../Image.svelte'
  export let PROJECT_NAME = 'Content Line Svelte UI Components';
  const githubProjectLink = 'https://git.contentline.ru/CONTENT_LINE/cl-svelte-ui'
  let typed
  onMount(() => {
    const options = {
      strings: ['It\'s a Svelte UI Library from Content Line Team <span class="love-icon" style="color: #E91E63">♥</span>'],
      typeSpeed: 50,
      backSpeed: 50
    };
    typed = new Typed(document.getElementById('target_elem'), options);
  })
  onDestroy(() => typed.destroy())
</script>

<div>
  <div class="welcome">
    <div class='welcome-img'>
      <Image
        src='images/cat_on_unicorn.jpg'
        svelteImageItemClassName="radius"
        svelteImageClassName="customPadding"
      />
    </div>
    <div class="welcome-title">
      <h1>
        {PROJECT_NAME}
      </h1>
    </div>
    <span
      class="welcome-sub-title"
      id="target_elem"
    />
  </div>
  <div class="link-container">
    <a href={githubProjectLink} class="github-corner" aria-label="View source on Github">
      <svg id="github_link" width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={ { transformOrigin: '130px 106px' } } className="octo-arm" />
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body" />
      </svg>
    </a>
  </div>

</div>

<style>
  .welcome {
    font-family: "Roboto", Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 300;
    text-align: center;
    padding: 30px 30px;
  }
  .welcome-title {
    color: #212121;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-content: center;
  }

  .welcome-sub-title {
    font-size: 30px;
    color: #9E9E9E;
  }

  #github_link {
   fill: #0058B7;
   color: #fff;
  }

  .welcome-img {
    width: 550px;
    margin: auto;
  }

  :global(.welcome-img .radius) {
    border-radius: 20px;
  }

  :global(.welcome-img .customPadding) {
    padding-top: 65%!important;
  }

  .link-container {
    position: absolute;
    top: 0;
    right: 0;
  }




</style>
